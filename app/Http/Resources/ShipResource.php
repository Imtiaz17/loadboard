<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
class ShipResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       
        $picup_date = Carbon::parse($this->pickup_date_time)->format('Y-m-d');

         return [
            'id'=>$this->id,
            'shipment_id'=>$this->shipment_id,
            'user_id'=>$this->user_id,
            'path'=>$this->path,
            'status'=>$this->status,
            'post_type' => $this->post_type,
            'shipment_poster_id'=>$this->user_id,
            'pickup' => $this->pickup,
            'unload' => $this->unload,
            'pickup_date' => $picup_date,
            'pickup_date_time' => $this->pickup_date_time,
            'delivery_date_time' => $this->delivery_date_time,
            'vehicle' => $this->vehicle,
            'distance' => $this->distance,
            'duration' => $this->duration,
            'load_info' => $this->load_info,
            'load_type' => $this->load_type,
            'material_type' => $this->material_type,
            'company' => $this->user->path,
            'package_type' => $this->package_type,
            'price' => $this->price,
            'weight' => $this->price,
            'dimension' => $this->dimension,
            'note' => $this->note,
            'created_at' => $this->created_at
        ];
    }
}
