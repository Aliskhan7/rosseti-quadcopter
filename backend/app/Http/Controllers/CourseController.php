<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use App\Traits\DefaultCrud;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public string $model = Course::class;
    public string $controller = self::class;

    const PAGINATE = 12;

    use DefaultCrud;

    private Course $course;
    public function __construct(Course $course)
    {
        $this->course = $course;
    }

    /**a
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $basic = $this->course::BASIC_TYPE;
        $additional = $this->course::ADDITIONAL_TYPE;

        return response()->json($this->course::all());
    }

    /**
     * @param Request $request
     * @param string $entity
     * @return JsonResponse
     */
    public function show(Request $request, string $entity): JsonResponse
    {
        $entity = $this->course->whereId($entity)->with('videos', 'user')->first();
        $user = $entity->user->first();

        return response()->json([
            'course' => $entity->only('name'),
            'videos' => $entity->videos,
            'completed_tasks' => 2,
        ]);
    }
}
