<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quadcopter extends Model
{
    use HasFactory;

    protected $fillable = [
        'source', 'flight_time', 'type',
        'wind_resist', 'radius',
    ];

    const TOY_TYPE = 'TOY';
    const RACE_TYPE = 'RACE';
    const SHOOTING_TYPE = 'SHOOTING';
    const CARGO_TYPE = 'CARGO';

    public static array $types = [
        self::TOY_TYPE => 'Игрушечный',
        self::RACE_TYPE => 'Гоночный',
        self::SHOOTING_TYPE => 'Съемочный',
        self::CARGO_TYPE => 'Грузовой',
    ];
}
