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
            $table->string('icon');
            $table->string('img');
            $table->string('name');
            $table->smallInteger('timeFly');
            $table->smallInteger('sustainability');
            $table->string('description');
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
