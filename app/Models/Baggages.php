<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Baggages extends Model
{
    use HasFactory;

    protected $fillable = [
        'passenger_id',
        'aircraft_flight_id',
        'bag_reference',
        'bag_quantity',
        'bag_weight',
        'flight_id',
    ];

    public function passenger()
    {
        return $this->belongsTo(Passenger::class);
    }

    public function aircraft_flight()
    {
        return $this->belongsTo(AircraftFlight::class);
    }

    public function flight() 
    {
        return $this->belongsTo(Flight::class);
    }
    public function flight_passenger() 
    {
        return $this->belongsTo(FlightPassenger::class);
    }
}
