<?php

use App\Http\Controllers\CivilizationsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get(
    '/',
    [CivilizationsController::class, 'index']
);


Route::get('/edit', [CivilizationsController::class, 'edit'])->name('civilization.edit');
Route::patch('/update', [CivilizationsController::class, 'update'])->name('civilization.update');
Route::delete('/{civilization}', [CivilizationsController::class, 'destroy'])->name('civilization.destroy');