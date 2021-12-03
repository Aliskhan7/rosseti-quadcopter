<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    const TABLE = 'courses';

    const BASIC_TYPE = 'BASIC';
    const ADDITIONAL_TYPE = 'ADDITIONAL';

    public static array $types = [
        self::BASIC_TYPE => 'Основные курсы',
        self::ADDITIONAL_TYPE => 'Дополнительные курсы',
    ];

    protected $fillable = [
        'name', 'image', 'description',
    ];

    /**
     * @return BelongsToMany
     */
    public function user(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'course_user')
            ->withPivot('completed_tasks');
    }

    /**
     * @return HasMany
     */
    public function videos(): HasMany
    {
        return $this->hasMany(Video::class);
    }
}
