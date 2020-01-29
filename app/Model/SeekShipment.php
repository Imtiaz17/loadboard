<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SeekShipment extends Model
{
     public function getRouteKeyName()
    {
        return 'shipment_id';
    }
    public function getPathAttribute()
    {
        return "/shipment/$this->shipment_id";
    }
}
