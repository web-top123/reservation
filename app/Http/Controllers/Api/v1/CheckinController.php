<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Aircraft;
use App\Models\Flight;
use App\Models\AircraftFlight;
use App\Models\FlightPassenger;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use DateTime;
use Carbon\Carbon;
use QrCode;

class CheckinController extends Controller
{
    //
    public function __construct()
    {
    }

    public function initCheckin(Request $request, $reference)
    {
        $flight_passenger = FlightPassenger::where('book_reference', $reference)->first();
        $current_date = Carbon::now()->timezone('Australia/Sydney');
        $aircraft_flight = $flight_passenger->aircraftFlight;
        $departure_time  = new Carbon($aircraft_flight->date->format('Y-m-d').' '.$aircraft_flight->departure_time->format('H:i:s'));
        if ($departure_time > $current_date) {
            $flight_passenger->passenger;
            $flight_passenger->aircraftFlight->aircraft;
            $flight_passenger->aircraftFlight->flight;
            return response()->json([
                'passengerInfo' => $flight_passenger,
            ], 200);
        }  else {
            return response()->json(['error' => 'The flight already departed.'], 401);
        }
    }

    public function passengerTypeSave(Request $request)
    {
        $flight_passenger = FlightPassenger::find($request->id);
        $flight_passenger -> update([
            'passenger_type' => $request->passenger_type,
        ]);

        return response()->json([
            'message' => 'success',
        ], 200);
    }

    public function emailBoardingPass(Request $request)
    {
        $flight_passenger = FlightPassenger::find($request->id);
        $flight_passenger -> passenger() -> update([
            'email' => $request->email,
        ]);

        return response()->json([
            'message' => 'success',
        ], 200);
    }

    public function getQrCode(Request $request, $id)
    {
        $flight_passenger = FlightPassenger::find($id);
        $flight_passenger->passenger;
        $flight_passenger->aircraftFlight->aircraft;
        $flight_passenger->aircraftFlight->flight;

        $data = collect([
            "First Name" => $flight_passenger->passenger->first_name, 
            "Last Name" => $flight_passenger->passenger->last_name,
            "Birthday" => $flight_passenger->passenger->birthday,
            "Phone" => $flight_passenger->passenger->phone,
            "Reference" => $flight_passenger->book_reference,
            "Seat" => $flight_passenger->seat,
            "Flight No." => $flight_passenger->aircraftFlight->flight->airline_code.' '.$flight_passenger->aircraftFlight->flight->flight_number,
            "Departure Time" => $flight_passenger->aircraftFlight->date.' '.$flight_passenger->aircraftFlight->departure_time,
            "Arrival Time" => $flight_passenger->aircraftFlight->date.' '.$flight_passenger->aircraftFlight->arrival_time,
            "Flight Passenger Seat Number" => $flight_passenger->seat,
        ]);
        
        // QrCode::size(500)
        // ->format('png')
        // ->generate($data->toJson(), public_path('images/qrcode.png'));
        return base64_encode(QrCode::size(500)
        ->format('png')
        ->generate($data->toJson()));
    }
}