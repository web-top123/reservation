<?php
namespace App\Http\Helpers;

use App\Models\FlightPassenger;

class Common
{
    public $twillo_number = '14159037953';
    public $twillo_sid = 'ACaf66ba19c5fd22aa450aab44eeabe06b';
    public $twillo_token = 'd15f78a2f73ccf5f866b91088e8738d2';
    public function generateRandomString($length) {
        $characters = '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        do {
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            $flight_passengers = FlightPassenger::where('book_reference', $randomString)->get();
        } while (count($flight_passengers) > 0);
        return $randomString;
    }
}