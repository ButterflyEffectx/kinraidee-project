<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class foods extends Model
{
    protected $fillable = [
        'name',
        'catagory_id',
        'calories',
        'protein',
        'carbs',
        'fats',
        'serving_size',
        'image',
    ];
}
