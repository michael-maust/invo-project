<?php

namespace App\Http\Controllers;

use App\Models\Civilization;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class CivilizationsController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query');
        $civilizations = Civilization::where('name', 'like', "%$query%")->get();

        return Inertia::render('Welcome', [
            'civilizations' => $civilizations,
        ]);
    }


    public function destroy(Civilization $civilization)
    {
        $civilization->delete();

        return Redirect::back(303)->with('success', 'Civilization deleted.');
    }
}