<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CivilizationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['nullable', 'max:100'],
            'expansion' => ['nullable', 'max:200'],
            'army_type' => ['nullable', 'max:200'],
            'unique_unit' => ['nullable', 'max:200'],
            'unique_tech' => ['nullable', 'max:200'],
            'team_bonus' => ['nullable', 'max:200'],
            'civilization_bonus' => ['nullable', 'max:10'],
        ];
    }
}