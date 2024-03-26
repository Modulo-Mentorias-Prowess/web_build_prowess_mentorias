<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_entrepreneur',
        'name',
        'description',
        'price',
    ];

    public function entrepreneur(): BelongsTo
    {
        return $this->belongsTo(Entrepreneur::class);
    }
}
