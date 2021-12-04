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
            'image' => $this->faker->imageUrl(950, 360),
            'description' => $this->faker->text(32),
            'scores' => $this->faker->randomElement([20, 40, 60]),
            'source' => 'http://16.170.19.169',
            'name' => $this->faker->word,
            'complexity' => $this->faker->numberBetween(0, 5),
            'duration' => $this->faker->numberBetween(30, 120),
            'course_id' => $this->faker->numberBetween(1, 6),
        ];
    }
}
