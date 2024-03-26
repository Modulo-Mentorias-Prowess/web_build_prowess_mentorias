<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Entrepreneur extends Model
{
    use HasFactory;

    protected $fillable = [
        'names',
        'last_names',
        'email',
        'address',
        'phone',
        'nameStore',
        'descriptionStore',
        'googleMapsURL',
        'sector',
        'city',
        'province',
        'twitter',
        'facebook',
        'instagram',
        'tiktok',
        'type',
    ];

    public function mentorships(): HasMany
    {
        return $this->hasMany(Mentorship::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
