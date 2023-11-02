<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Passenger;
use App\Models\Role;
use App\Models\FlightPassenger;
use App\Models\AircraftFlight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;
use SendGrid;
use Twilio\Rest\Client;
use App\Http\Helpers\Common;
use Illuminate\Support\Facades\Mail;

class SendgridController extends Controller
{
    //
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['passengerSeatSave']]);
        $this->helper = new Common();
    }
 
    public function email(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'email' => 'required',            
        ]);
 
        $to = $validated['email'];
        $from = "Hamilton@gmail.com";
        $topic = "Cobham Notification";
        $emailContent = $request->email_content;
 
        $email = new \SendGrid\Mail\Mail();
        $email->setFrom($from, "CObham");
        $email->setSubject($topic);
        $email->addTo($to, "Cobham Email");
        $email->addContent("text/plain", $emailContent);
        
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
 
        try {
            $response = $sendgrid->send($email);
            // return response()->json([
            //          'message' => "successfully sent email and sms",
            //        ], 201);
 
        } catch (Exception $e) {
            return response()->json( 'Caught exception: '. $e->getMessage() ."\n");
        }
 
    }

    public function emailsmtp(Request $request){

        $GLOBALS['to'] =  $request->email;
        $GLOBALS['content'] =  $request->email_content;
        $GLOBALS['title'] =  "Cobham Notification";
        Mail::send([],[], function($message) {
            
            $message->to($GLOBALS['to'], $GLOBALS['title'])->subject($GLOBALS['content']);
            $message->from('Hamilton@gmail.com','Cobham');
        });

        return response()->json([
            'message' => "successfully sent email and smtp.",
          ], 201);

    }

    public function sms(Request $request)
    {
        $receiver = str_replace("+", "", $request->phone);
        $sender = $this->helper->twillo_number;
        $sid = $this->helper->twillo_sid;
        $token = $this->helper->twillo_token;
        $client = new Client($sid, $token);
        try {
            $message = $client->messages->create(
                $receiver, // Text this number
                [
                    'from' => $sender, // From a valid Twilio number
                    'body' =>$request->email_content
                ]
            );
            $this->sms($request);
            return response()->json([
                'message' => "successfully sent email and SMS message",
              ], 201);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'twillo sms failed',
            ], 300);
        }
    }
}
