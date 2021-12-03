<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Traits\DefaultCrud;

class VideoController extends Controller
{
    public string $model = Video::class;
    public string $controller = self::class;

    use DefaultCrud;

    private Video $video;

    public function __construct(Video $video)
    {
        $this->video = $video;
    }
}
