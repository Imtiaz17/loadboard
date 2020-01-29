<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'first_name'=>$this->first_name,
            'm_name'=>$this->middle_name,
            'last_name'=>$this->last_name,
            'full_name'=>$this->first_name.' '.$this->last_name,
            'phone'=>$this->phone,
            'email'=>$this->email,
            'username'=>$this->username,
            'role'=>$this->role,
            'driver_licence_id'=>$this->driver_licence_id,
            'organization'=>$this->organization,
            'tax_id'=>$this->tax_id,
            'created'=>$this->created_at->diffForHumans(),
            'path'=>$this->path
        ];
    }
}
