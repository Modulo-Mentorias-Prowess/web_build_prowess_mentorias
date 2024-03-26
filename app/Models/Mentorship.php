<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Mentorship extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_manager',
        'id_entrepreneur',
        'title',
        'description',
        'date_mentorship',
    ];

    public function contents()
    {
        return $this->belongsToMany(Content::class, 'content_mentorship');
    }

    public function manager(): BelongsTo
    {
        return $this->belongsTo(Manager::class);
    }

    public function entrepreneur(): BelongsTo
    {
        return $this->belongsTo(Entrepreneur::class);
    }
}
