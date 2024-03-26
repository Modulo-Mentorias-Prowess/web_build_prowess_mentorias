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
        Schema::create('mentorships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_manager')->constrained('managers')->cascadeOnDelete();
            $table->foreignId('id_entrepreneur')->constrained('entrepreneurs')->cascadeOnDelete();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->date('date_mentorship')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mentorships');
    }
};
