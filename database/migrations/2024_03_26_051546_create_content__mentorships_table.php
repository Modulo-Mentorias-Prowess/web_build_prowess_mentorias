<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('content__mentorships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_content')->constrained('contents')->cascadeOnDelete();
            $table->foreignId('id_mentorship')->constrained('mentorships')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content__mentorships');
    }
};
