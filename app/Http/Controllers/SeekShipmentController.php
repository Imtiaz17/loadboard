<?php

namespace App\Http\Controllers;

use App\Http\Resources\SeekShipmentResource;
use App\Http\Requests\SeekShipmentRequest;
use App\Model\SeekShipment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SeekShipmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SeekShipmentResource::collection(SeekShipment::orderBy('id', 'DESC')->paginate(50));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SeekShipmentRequest $request)
    {
        $ship = new SeekShipment();
        $ship->post_type = $request->post_type;
        $ship->user_id = auth()->user()->id;
        $ship->status ='available';
        $ship->shipment_id =$this->generateShipmentNumber();
        $ship->pickup = $request->pickup;
        $ship->unload = $request->unload;
        $ship->pickup_date = date("Y-m-d", strtotime($request->pickup_date));
        $ship->vehicle = $request->vehicle;
        $ship->weight = $request->weight;
        $ship->price = $request->price;
        $ship->distance = $request->distance;
        $ship->duration = $request->duration;
        $ship->note = $request->note;
        $ship->save();
        return response(new SeekShipmentResource($ship), Response::HTTP_CREATED);
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
        return SeekShipment::whereshipment_id($number)->exists();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Model\SeekShipment $seekShipment
     * @return \Illuminate\Http\Response
     */
    public function show(SeekShipment $seekShipment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Model\SeekShipment $seekShipment
     * @return \Illuminate\Http\Response
     */
    public function edit(SeekShipment $seekShipment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Model\SeekShipment $seekShipment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SeekShipment $seekShipment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Model\SeekShipment $seekShipment
     * @return \Illuminate\Http\Response
     */
    public function destroy(SeekShipment $seekShipment)
    {
        //
    }
}
