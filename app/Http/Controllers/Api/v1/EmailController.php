<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

class EmailController extends Controller
{
    public function emailsmtp(Request $request){

        $GLOBALS['to'] =  $request->email;
        $GLOBALS['content'] =  $request->email_content;
        $GLOBALS['title'] =  $request->email_title;
        Mail::send([],[], function($message) {
            
            $message->to($GLOBALS['to'], $GLOBALS['title'])->subject($GLOBALS['content']);
            $message->from('Hamilton@gmail.com','Cobham');
        });

        return response()->json([
            'message' => "successfully sent email.",
          ], 201);

    }
}