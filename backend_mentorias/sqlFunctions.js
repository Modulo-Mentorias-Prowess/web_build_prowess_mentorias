const mysql = require("mysql");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

/**
 * Creates a database connection, also allows to make CRUD
 * operations in the database and authentication using bcrypt and jwt
 */
class MySQLConnection {
  constructor(JWTManager) {
    this.jwtManager = JWTManager;
    // Create database connection
    this.db = mysql.createPool({
      connectionLimit: 100,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
    });
  }

  /**
   * Test if the connection to the database is successful, console loggin the result
   */
  testConnection() {
    this.db.getConnection((err, connection) => {
      if (err) {
        throw err;
      }
      console.log("DB connected successful: " + connection.threadId);
    });
  }

  /**
   * Creates the user if it doesn't exits, it requires a
   * valid userName and password, the password is hashed (encrypted) using bcrypt
   * @param {*} req: a HTTP request
   * @param {*} res: a HTTP response
   * @returns res: A HTTP response with the status of the request (400 BAD REQUEST, 409 CONFLICT, 201 CREATED)
   */
  async register(req, res) {
    // If there is no userName or no password return HTTP 400 BAD REQUEST
    if (
      !req.body?.userName ||
      !req.body?.password ||
      !req.body?.full_name ||
      !req.body?.role_user
    ) {
      return res.sendStatus(400);
    }

    const userName = req.body.userName;
    const password = await bcrypt.hash(req.body.password, 10);
    const full_name = req.body.full_name;
    const role = req.body.role_user;

    this.db.getConnection(async (err, connection) => {
      if (err) {
        throw err;
      }

      // MySQL query to search if user already exists
      const userExistQuery = mysql.format(
        "SELECT * FROM users WHERE userName = ?",
        [userName]
      );
      const insertUserQuery = mysql.format(
        "INSERT INTO users VALUES (?, ?, ?, ?, ?)",
        [uuidv4(), userName, password, full_name, role]
      );

      await connection.query(userExistQuery, async (err, results) => {
        if (err) {
          throw err;
        }

        // If the user already exits return HTTP 409 CONFLICT
        // where the conflict is the older user
        if (results.length != 0) {
          connection.release();
          return res.sendStatus(409);
        }
        // If user doesn't exits create it and return HTTP 201 CREATE
        await connection.query(insertUserQuery, (err, results) => {
          connection.release();
          if (err) {
            throw err;
          }

          return res.sendStatus(201);
        });
      });
    });
  }

  /**
   * Auths user data to allow for login.
   * @param {*} req: HTTP request
   * @param {*} res: HTTP response
   * @returns Response status (400 BAD REQUEST, 404 NOT FOUND, 200 OK, 401 UNAUTHORIZED)
   */
  async login(req, res) {
    // If there is no userName or no password return HTTP 400 BAD REQUEST
    if (!req.body?.userName || !req.body?.password) {
      return res.sendStatus(400);
    }

    const user = req.body.userName;
    const password = req.body.password;
    this.db.getConnection(async (err, connection) => {
      if (err) {
        throw err;
      }

      const userDataQuery = mysql.format(
        "SELECT * FROM users WHERE userName = ?",
        [user]
      );

      await connection.query(userDataQuery, async (err, userData) => {
        connection.release();
        if (err) {
          throw err;
        }

        // If no user is found return 404 RESOURCE NOT FOUND
        if (userData.length == 0) {
          return res.sendStatus(404);
        }

        // if the password is correct send the status 200 OK to allow login
        if (await bcrypt.compare(password, userData[0].pass)) {
          return res.json({
            accessToken: this.jwtManager.generateAccessToken({ user: user }),
            refreshToken: this.jwtManager.generateRefreshToken({ user: user }),
            full_name: userData[0].full_name,
            role_user: userData[0].role_user,
          });
        }

        // if the password is incorrect send the status 401 UNAUTHORIZED
        return res.sendStatus(401);
      });
    });
  }

  /**
   * Executes a SQL query.
   * @param {*} query: a SQL query
   * @returns ```true```: if no error existed executing it, ```false```: if an error exited
   */
  executeQuery(query) {
    this.db.query(query, (err, data) => {
      if (err) {
        return false;
      }
    });
    return true;
  }

  /**
   * Get all the rows of a given table. Returns the data.
   * @param {*} res: a HTTP response
   * @param {*} table: the table to query
   *
   */
  getAll(res, table) {
    this.db.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) {
        throw err;
      }

      return res.send(data);
    });
  }

  /**
   * Gets one row from the table given the id
   * @param {*} res: a HTTP response
   * @param {*} table: the name of the table to query
   * @param {*} id: the id of the row to get
   */
  getOne(res, table, search_by, id) {
    this.db.query(
      mysql.format(`SELECT * FROM ${table} WHERE ${search_by}=?`, [id]),
      (err, data) => {
        if (err) {
          throw err;
        }

        return res.send(data);
      }
    );
  }

  /**
   * Deletes a row from the database.
   * @param {*} res: a HTTP response
   * @param {*} table: the name of the table where to delete
   * @param {*} id: the id of the value to delete
   * @returns Code ```200 OK``` if deleted, Code ```500 SERVER ERROR``` if theres an error
   */
  delete(res, table, id) {
    if (
      this.executeQuery(mysql.format(`DELETE FROM ${table} WHERE id=?`, [id]))
    ) {
      return res.sendStatus(200);
    }

    return res.sendStatus(500);
  }

  /**
   * Create a new row in the database.
   * @param {*} res: a HTTP response
   * @param {*} table: the name of the table where to append the new row.
   * @param {*} object: the data object with key names as in the database.
   * @returns  Code ```201 CREATED``` if created correctly or
   * Code ```500 SERVER ERROR``` if there is an error
   */
  create(res, table, object) {
    const q = mysql.format(
      `INSERT INTO ${table}(${Object.keys(object).join(
        ","
      )}) VALUES (${Object.keys(object).fill("?").join(",")})`,
      Object.values(object)
    );
    this.db.query(q, (err, result) => {
      if (err) {
        res.sendStatus(500);
        throw err;
      }

      return res.sendStatus(201);
    });
  }
  createNoSend(table, object) {
    const q = mysql.format(
      `INSERT INTO ${table}(${Object.keys(object).join(
        ","
      )}) VALUES (${Object.keys(object).fill("?").join(",")})`,
      Object.values(object)
    );
    this.db.query(q, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }

  /**
   * Patch (updates) a row in the database.
   * @param {*} res: a HTTP response.
   * @param {*} table: the name of the table where the patch is going to take place.
   * @param {*} object: the data object with key names as in the database.
   * @returns Code ```200 OK``` if patched correctly or
   * Code ```500 SERVER ERROR``` if there is an error
   */
  patch(res, table, object) {
    const q = mysql.format(
      `UPDATE ${table} SET ${Object.keys(object).join("=?,")}=? WHERE id=?`,
      [...Object.values(object), object.id]
    );
    this.db.query(q, (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      return res.sendStatus(200);
    });
  }

  search(res, query, table, filters) {
    if (query.length < 3) {
      return res.send([]);
    }

    let filterString = "";
    filters.forEach((f) => {
      filterString = filterString + ` LOWER(${f}) LIKE ? OR`;
    });
    filterString = filterString.substring(0, filterString.length - 3);
    query = `%${query}%`;
    this.db.query(
      mysql.format(
        `SELECT * FROM ${table} WHERE${filterString}`,
        new Array(filters.length).fill(query)
      ),
      (err, data) => {
        if (err) {
          throw err;
        }

        return res.send(data);
      }
    );
  }

  // Content CRUD operations
  createContent(res, content) {
    return this.create(res, "content", content);
  }

  getContents(res) {
    return this.getAll(res, "content");
  }

  getContent(res, id) {
    this.getOne(res, "content", id);
  }

  patchContent(res, content) {
    return this.patch(res, "content", content);
  }

  deleteContent(res, id) {
    return this.delete(res, "content", id);
  }

  searchContent(res, query) {
    return this.search(res, query, "content", ["name", "description"]);
  }

  /* 
    Entrepreneur CRUD operations 
  */

  createEntrepreneur(res, entrepreneur) {
    return this.create(res, "entrepreneur", entrepreneur);
  }

  getEntrepreneurs(res) {
    return this.getAll(res, "entrepreneur");
  }

  getEntrepreneur(res, id) {
    return this.getOne(res, "entrepreneur", id);
  }

  patchEntrepreneur(res, entrepreneur) {
    return this.patch(res, "entrepreneur", entrepreneur);
  }

  deleteEntrepreneurs(res, id) {
    return this.delete(res, "entrepreneur", id);
  }

  searchEntrepreneur(res, query) {
    return this.search(res, query, "entrepreneur", [
      "names",
      "email",
      "phone",
      "nameStore",
    ]);
  }

  // Manager CRUD operations

  createManager(res, manager) {
    return this.create(res, "manager", manager);
  }

  getManagers(res) {
    return this.getAll(res, "manager");
  }

  getManager(res, id) {
    return this.getOne(res, "manager", id);
  }

  patchManager(res, manager) {
    return this.patch(res, "manager", manager);
  }

  deleteManager(res, id) {
    return this.delete(res, "manager", id);
  }

  searchManager(res, query) {
    return this.search(res, query, "manager", ["names", "last_names", "email"]);
  }

  /* Products CRUD operations */

  getProducts(res) {
    return this.getAll(res, "product_display");
  }

  createProduct(res, product) {
    return this.create(res, "product", product);
  }

  patchProduct(res, product) {
    return this.patch(res, "product", product);
  }

  deleteProduct(res, id) {
    return this.delete(res, "product", id);
  }

  searchProducts(res, query) {
    return this.search(res, query, "product", ["name", "description"]);
  }

  /* Mentorias CRUD operations */

  getMentorships(res) {
    return this.getAll(res, "mentorship_display");
  }

  createMentorship(res, mentorship, mentorship_content) {
    this.createNoSend("mentorship", mentorship);
    mentorship_content.forEach((element) => {
      this.createNoSend("content_mentorship", element);
    });
    return res.sendStatus(200);
  }

  getContentsMentorship(res, id) {
    return this.getOne(res, "content_mentorship_display", "id_mentorship", id);
  }

  deleteMentorship(res, id) {
    return this.delete(res, "mentorship", id);
  }

  patchMentorship(res, object) {
    return this.patch(res, "mentorship", object);
  }
}

module.exports = MySQLConnection;
