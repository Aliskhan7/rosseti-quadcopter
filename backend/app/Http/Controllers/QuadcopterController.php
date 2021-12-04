<?php

namespace App\Http\Controllers;

use App\Models\Quadcopter;
use App\Traits\DefaultCrud;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuadcopterController extends Controller
{
    public string $model = Quadcopter::class;
    public string $controller = self::class;

    use DefaultCrud;

    private Quadcopter $quadcopter;
    public function __construct(Quadcopter $quadcopter)
    {
        $this->quadcopter = $quadcopter;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getIndexRandom(Request $request): JsonResponse
    {
        return response()->json($this->quadcopter->limit(3)->get());
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getList(Request $request): JsonResponse
    {
        $list = $this->quadcopter::select('id', 'name')->get();

        return response()->json($list);
    }
}
