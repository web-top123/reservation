<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Passenger;
use App\Models\Role;
use App\Models\Baggages;
use App\Models\AircraftFlight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;

class BaggageController extends Controller
{
    //
    public function __construct() {
    }
    /**
     * Response all data
     *p
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $baggages=[];
        $baggages = Baggages::all();

        foreach ($baggages as $baggage) {
            $baggage->passenger;
            $baggage->aircraft_flight;
            $baggage->flight;
            $baggage->flight_passenger;
        }

        return response()->json([
            'message' => 'success',
            'baggages' => $baggages
        ], 200);
    }
    
}
