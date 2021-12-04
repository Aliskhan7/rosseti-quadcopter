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
            'name' => $this->faker->randomElement([
                'DJI Mavic AIR 2',
                'DJI Mavic Mini 2 Fly More Combo',
                'DJI Mavic 3',
            ]),
            'source' => 'http://16.170.19.169',
            'img' => $this->faker->randomElement([
                'https://expovision.tech/assets/tmp/quadcopter-dark.png',
                'https://expovision.tech/assets/tmp/quadcopter-white.png',
                'https://static.eldorado.ru/photos/mv/Big/10029551bb.jpg/resize/700x525/',
            ]),
            'icon' => $this->faker->randomElement([
                'https://expovision.tech/assets/tmp/quadcopter-dark.png',
                'https://expovision.tech/assets/tmp/quadcopter-white.png',
                'https://static.eldorado.ru/photos/mv/Big/10029551bb.jpg/resize/300x170/',
            ]),
            'timeFly' => $this->faker->randomElement([30, 60, 40]),
            'sustainability' => $this->faker->numberBetween(10, 20),
            'radius' => $this->faker->numberBetween(32, 64),
            'description' => $this->faker->text(8),
            'type' => $this->faker->randomElement(array_keys(Quadcopter::$types)),
        ];
    }
}
