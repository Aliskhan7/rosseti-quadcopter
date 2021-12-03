<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class QuizFactory extends Factory
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
            'description' => $this->faker->text(),
            'complexity' => $this->faker->numberBetween(1, 5),
            'duration' => $this->faker->numberBetween(30, 60),
        ];
    }
}
