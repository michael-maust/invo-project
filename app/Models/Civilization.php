<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Civilization extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'expansion', 'army_type', 'unique_unit', 'unique_tech', 'team_bonus', 'civilization_bonus'];
    protected $guarded = ['created_at'];
}