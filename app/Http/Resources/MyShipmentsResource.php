<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MyShipmentsResource extends JsonResource
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
            'shipment_id'=>$this->shipment_id,
            'user'=>$this->shipment_id,
            'shipment_id'=>$this->shipment_id,
        ];
    }
}
