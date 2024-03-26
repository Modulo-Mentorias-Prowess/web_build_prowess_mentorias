<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Content_Mentorship extends Model
{
    use HasFactory;

    public function content(): BelongsTo
    {
        return $this->belongsTo(Content::class);
    }

    public function mentorship(): BelongsTo
    {
        return $this->belongsTo(Mentorship::class);
    }
}
