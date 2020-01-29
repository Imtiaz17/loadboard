<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShippingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shippings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('shipment_id');
            $table->integer('user_id');
            $table->string('post_type');
            $table->string('pickup');
            $table->string('unload');
            $table->date('pickup_date_time');
            $table->datetime('delivery_date_time');
            $table->string('weight');
            $table->string('dimension');
            $table->string('vehicle');
            $table->string('distance')->nullable();
            $table->string('duration')->nullable();
            $table->string('load_info');
            $table->string('load_type');
            $table->string('material_type');
            $table->string('package_type');
            $table->string('price');
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
        Schema::dropIfExists('shippings');
    }
}
