<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeekShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seek_shipments', function (Blueprint $table) {
           $table->bigIncrements('id');
            $table->id('user_id');
            $table->string('pickup_point');
            $table->string('delivery_point');
            $table->date('loading_date');
            $table->time('loading_time');
            $table->string('distance')->nullable();
            $table->string('duration')->nullable();
            $table->string('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seek_shipments');
    }
}
