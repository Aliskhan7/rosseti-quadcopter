<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'image' => public_path('assets/images/tmp/quadcopter.png'),
            'description' => $this->faker->text,
            'scores' => $this->faker->randomElement([20, 40, 60]),
        ];
    }
}
