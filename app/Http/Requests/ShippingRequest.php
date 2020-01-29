<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShippingRequest extends FormRequest
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
            'pickup_date_time'=>'required',
            'delivery_date_time'=>'required',
            'vehicle'=>'required',
            'load_info'=>'required',
            'load_type'=>'required',
            'material_type'=>'required',
            'package_type'=>'required',
            'price'=>'required',
            'weight'=>'required',
            'dimension'=>'required',
        ];
    }
    // public function messages()
    // {
    //     return[
    //         'name.required' => 'Skill name required',
    //         'category_id.required' => 'Category name required',
            
           
    //     ];
    // }
}
