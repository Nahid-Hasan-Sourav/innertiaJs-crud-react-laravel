<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AddClasssController extends Controller
{
    public function index(){
        return Inertia::render('StudentClass/StudentClass');
    }

    public function store(Request $request){
        $data = $request->all();
        // return response()->json(["data"=>"gfgd"]);
        return Inertia::render('Components/StudentClass', ['data' => $data]);

    }
}
