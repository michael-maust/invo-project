<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Civilization;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $civilizationData = require 'Data.php';

        foreach ($civilizationData as $civilization) {
            $civilization['civilization_bonus'] = json_encode($civilization['civilization_bonus']);
            Civilization::create($civilization);
        }
    }
}