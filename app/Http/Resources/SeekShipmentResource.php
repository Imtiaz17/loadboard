<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SeekShipmentResource extends JsonResource
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
            'post_type' => $this->post_type,
            'driver_id'=>$this->user_id,
            'pickup_point' => $this->pickup,
            'delivery_point' => $this->unload,
            'load_date' => $this->pickup_date,
            'vehicle' => $this->vehicle,
            'load_quantity' => $this->weight,
            'distance' => $this->distance,
            'duration' => $this->duration,
            'amount' => $this->price,
            'note' => $this->note,
            'path'=>$this->path,
        ];
    }
}
