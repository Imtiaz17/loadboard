<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    protected  $guarded=[];
  
    public function getRouteKeyName()
    {
        return 'shipment_id';
    }
    public function getPathAttribute()
    {
        return "/shipment/$this->shipment_id";
    }
    public function  user()
	{
	    return $this->belongsTo(User::class);
	}
  
}
