<?php

namespace Database\Factories;

use App\Models\Quadcopter;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuadcopterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'source' => 'http://16.170.19.169',
            'flight_time' => $this->faker->numberBetween(30, 240),
            'wind_resist' => $this->faker->numberBetween(10, 20),
            'radius' => $this->faker->numberBetween(32, 64),
            'type' => $this->faker->randomElement(array_keys(Quadcopter::$types)),
        ];
    }
}
