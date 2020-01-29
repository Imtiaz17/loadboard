<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Model\Shipping;
use App\User;
use Faker\Generator as Faker;

$factory->define(Shipping::class, function (Faker $faker) {
     return [
        'post_type'=>'post_shipment',
        'status'=>$faker->randomElement(['available', 'in-transit', 'delivered', 'paid']),
        'vehicle'=>$faker->word,
        'pickup'=>$faker->city,
        'unload'=>$faker->city,
        'pickup_date_time'=>$faker->dateTimeBetween('+0 days', '+1 years'),
        'delivery_date_time'=>$faker->dateTimeBetween('+0 days', '+1 years'),
        'distance'=>$faker->numberBetween($min = 1000, $max = 9000),
        'duration'=>$faker->numberBetween($min = 1000, $max = 9000),
        'load_info'=>$faker->sentence($nbWords = 6, $variableNbWords = true),
        'load_type'=>$faker->randomElement(['FL', 'PL']),
        'material_type'=>$faker->randomElement(['Regular', 'Hazmat']),
        'package_type'=>$faker->randomElement(['Boxes in pallet', 'Boxed', 'Open']),
        'price'=>$faker->numberBetween($min = 1000, $max = 9000),
        'weight'=>$faker->randomFloat($min = 100, $max = 1000),
        'dimension'=>$faker->randomElement(['12,46,13', '24,45,43', '13,89,48', '34,46,88']),
        'shipment_id'=>$faker->unique(true)->numberBetween(1,10000),
        'weight'=>$faker->unique()->randomNumber($nbDigits = 5),
        'user_id'=>1
    ];
});
