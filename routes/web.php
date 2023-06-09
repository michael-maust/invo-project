<?php

use App\Http\Controllers\CivilizationsController;
use Illuminate\Support\Facades\Route;

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
Route::get('/create', [CivilizationsController::class, 'create'])->name('civilization.create');
Route::post('/civilizations', [CivilizationsController::class, 'store'])->name('civilization.store');
Route::patch('/{civilization}', [CivilizationsController::class, 'update'])->name('civilization.update');
Route::delete('/{civilization}', [CivilizationsController::class, 'destroy'])->name('civilization.destroy');