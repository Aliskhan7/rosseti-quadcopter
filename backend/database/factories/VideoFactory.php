<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'link' => $this->faker->url,
            'description' => $this->faker->text(32),
            'complexity' => $this->faker->numberBetween(0, 5),
            'duration' => $this->faker->numberBetween(30, 120),
            'course_id' => $this->faker->numberBetween(1, 6)
        ];
    }
}
