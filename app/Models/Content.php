<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function mentorships()
    {
        return $this->belongsToMany(Mentorship::class, 'content_mentorship');
    }
}
