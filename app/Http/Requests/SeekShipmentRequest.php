<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SeekShipmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
         return [
            'post_type'=>'required',
            'pickup'=>'required',
            'unload'=>'required',
            'pickup_date'=>'required',
            'vehicle'=>'required',
            'price'=>'required',
            'weight'=>'required'
        ];
    }
}
