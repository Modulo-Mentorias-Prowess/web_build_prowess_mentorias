<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Manager extends Model
{
    use HasFactory;

    protected $fillable = [
        'names',
        'last_names',
        'email',
        'address',
    ];

    public function mentorships(): HasMany
    {
        return $this->hasMany(Mentorship::class);
    }
}
