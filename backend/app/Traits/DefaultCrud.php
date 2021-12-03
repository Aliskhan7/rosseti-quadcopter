<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

trait DefaultCrud {
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        return response()->json($this->model::paginate());
    }

    /**
     * @param Request $request
     * @param int $entity
     * @return JsonResponse
     */
    public function show(Request $request, int $entity): JsonResponse
    {
        return response()->json($this->model::findOrFail($entity));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        return response()->json($this->model::create($request->all()));
    }

    /**
     * @param Request $request
     * @param int $course
     * @return JsonResponse
     */
    public function update(Request $request, int $course): JsonResponse
    {
        return response()->json([
            'status' => $this->model::update($request->all()),
        ]);
    }

    /**
     * @param Request $request
     * @param int $course
     * @return JsonResponse
     * @throws \Throwable
     */
    public function destroy(Request $request, int $course): JsonResponse
    {
        return response()->json([
            'status' => $this->model::delete(),
        ]);
    }
}
