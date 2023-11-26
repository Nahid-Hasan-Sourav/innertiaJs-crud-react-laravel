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
      
        $data="asbs";
     
        return Inertia::render('StudentClass/StudentClass',["data"=>$data]);
      

    }
}
