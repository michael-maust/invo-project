<?php

namespace App\Http\Controllers;

use App\Models\Civilization;
use Inertia\Inertia;

class CivilizationsController extends Controller
{
    public function index()
    {
        $civilizations = Civilization::all();

        return Inertia::render('Welcome', [
            'civilizations' => $civilizations,
        ]);
    }
}