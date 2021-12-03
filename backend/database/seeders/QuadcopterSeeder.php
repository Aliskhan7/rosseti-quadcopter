<?php

namespace Database\Seeders;

use App\Models\Quadcopter;
use Illuminate\Database\Seeder;

class QuadcopterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Quadcopter::factory()->count(128)->create();
    }
}
