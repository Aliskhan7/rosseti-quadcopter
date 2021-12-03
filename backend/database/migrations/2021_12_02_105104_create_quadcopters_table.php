<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Quadcopter;

class CreateQuadcoptersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quadcopters', function (Blueprint $table) {
            $table->id();
            $table->string('source');
            $table->smallInteger('flight_time');
            $table->smallInteger('wind_resist');
            $table->integer('radius');
            $table->enum('type', array_keys(Quadcopter::$types));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quadcopters');
    }
}
