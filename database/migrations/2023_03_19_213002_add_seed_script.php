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
        Schema::create('civilizations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('expansion');
            $table->string('army_type');
            $table->string('unique_unit');
            $table->string('unique_tech');
            $table->string('team_bonus');
            $table->json('civilization_bonus')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('civilizations');
    }
};