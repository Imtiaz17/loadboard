<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShippingRequest;
use App\Http\Resources\MyShipmentsResource;
use App\Http\Resources\ShipResource;
use App\Model\Shipping;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ShippingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','shipByUser']]);
    }
     // $tfeedback = TripFeedback::all();
     //    $sfeedback = ShipFeedback::all();
     //    $tsfeedback = TaskFeedback::all();
     //    $all = collect($tfeedback)->merge($sfeedback)->merge($tsfeedback);
     //    return GivenFeedbackResource::collection($all);


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=shipping::where([
            ['post_type', 'post_shipment'],
        ])->paginate(30);
        // $data['all']=Shipping::where([
        //     ['post_type', 'post_shipment'],
        // ])->paginate(10);
        // $data['available']=Shipping::where([
        //     ['post_type', 'post_shipment'],
        //     ['status','available']
        // ])->paginate(10);
        // $data['delivered']=Shipping::where([
        //     ['post_type', 'post_shipment'],
        //     ['status','delivered']
        // ])->paginate(10);
        // $data['paid']=Shipping::where([
        //     ['post_type', 'post_shipment'],
        //     ['status','paid']
        // ])->paginate(10);
        //  $data['in-transit']=Shipping::where([
        //     ['post_type', 'post_shipment'],
        //     ['status','in-transit']
        // ])->paginate(10);

        // $a=collect($data);
        return  ShipResource::collection($data);
    }   


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(ShippingRequest $request )
    {
        $ship = new Shipping();
        $ship->post_type = $request->post_type;
        $ship->user_id = auth()->user()->id;
        $ship->status ='available';
        $ship->pickup = $request->pickup;
        $ship->unload = $request->unload;
        $ship->pickup_date_time = date("Y-m-d H:i:s", strtotime($request->pickup_date_time));
        $ship->delivery_date_time = date("Y-m-d H:i:s", strtotime($request->delivery_date_time));
        $ship->vehicle = $request->vehicle;
        $ship->distance = $request->distance;
        $ship->duration = $request->duration;
        $ship->load_info = $request->load_info;
        $ship->load_type = $request->load_type;
        $ship->material_type = $request->material_type;
        $ship->package_type = $request->package_type;
        $ship->price = $request->price;
        $ship->weight = $request->weight;
        $ship->dimension = implode(",", $request->dimension); 
        $ship->note = $request->notes;
        $ship->shipment_id =$this->generateShipmentNumber();
        $ship->save();
        return response(new ShipResource($ship), Response::HTTP_CREATED);
    }
    protected function generateShipmentNumber() {
        $number = mt_rand(10000, 99999); // better than rand()
        // call the same function if the barcode exists already
        if ($this->shipmentIdExists($number)) {
            return generateShipmentNumber();
        }
        // otherwise, it's valid and can be used
        return $number;
    }
    
    protected function shipmentIdExists($number) {
        // query the database and return a boolean
        // for instance, it might look like this in Laravel
        return Shipping::whereshipment_id($number)->exists();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Model\Shipping $shipping
     * @return \Illuminate\Http\Response
     */
    public function show($shipping)
    {
        $shipment = Shipping::where('shipment_id', $shipping)->first();
        return new ShipResource($shipment);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Model\Shipping $shipping
     * @return \Illuminate\Http\Response
     */
    public function edit(Shipping $shipping)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Model\Shipping $shipping
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shipping $shipping)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Model\Shipping $shipping
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shipping $shipping)
    {
        //
    }

     public function shipByUser(User $user)
    {
       return ShipResource::collection($user->shipments);
    }
}
