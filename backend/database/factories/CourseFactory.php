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
            'name' => $this->faker->randomElement([
                'Введение в беспилотную авиатехнику',
                'ПО управления БПЛА',
                'Применение VR технологий в беспилотной авиации',
                'БПЛА мультироторного типа',
                'БПЛА в сельском хозяйстве',
                'FPV дроны - гоночные квадрокоптеры',
                'БПЛА в морских исследованиях',
            ]),
            'img' => 'https://expovision.tech/assets/images/tmp/quadcopter.png',
            'description' => $this->faker->text,
            'scores' => $this->faker->randomElement([20, 40, 60]),
        ];
    }
}
