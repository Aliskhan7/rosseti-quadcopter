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
            'name' => $this->faker->randomElement([
                'Введение в беспилотную авиатехнику',
                'Основные типы БПЛА, их конструктивные  особенности, алгоритмы работы с БПЛА',
                'Основы организации работ групп операторов БПЛА',
                'Основные задачи, выполняемые с помощью БПЛА',
                'Техника безопасности при работе с БПЛА',
            ]),
            'description' => '
                Применение БПЛА в различных отраслях промышленности;
                Конструкция и принципы действия БПЛА и бортовых систем; Наземное оборудование и системы управления;
                Законодательные нормы и нормативно-правовые акты, регулирующие применение БПЛА;
            ',
            'complexity' => $this->faker->numberBetween(1, 5),
            'duration' => $this->faker->numberBetween(30, 60),
            'source' => 'http://16.170.19.169',
        ];
    }
}
