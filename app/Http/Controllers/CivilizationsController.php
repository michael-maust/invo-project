<?php

namespace App\Http\Controllers;

use App\Http\Requests\CivilizationRequest;
use App\Models\Civilization;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class CivilizationsController extends Controller
{
    // TODO: remove this if authentication is later setup
    use WithoutMiddleware;

    public function index(Request $request)
    {
        $query = $request->input('query');
        $civilizations = Civilization::where('name', 'like', "%$query%")->orderBy('created_at', 'desc')->get();

        return Inertia::render('Dashboard', [
            'civilizations' => $civilizations,
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard');
    }

    public function store(CivilizationRequest $request)
    {
        $request['civilization_bonus'] = json_encode($request['civilization_bonus']);

        Civilization::create($request->validated());

        return Redirect::back(303)->with('success', 'Civilization created.');
    }


    public function update(CivilizationRequest $request, Civilization $civilization)
    {

        $request['civilization_bonus'] = json_encode($request['civilization_bonus']);

        $civilization->update($request->validated());

        return Redirect::back(303)->with('success', 'Civilization updated.');
    }


    public function destroy(Civilization $civilization)
    {
        $civilization->delete();

        return Redirect::back(303)->with('success', 'Civilization deleted.');
    }
}