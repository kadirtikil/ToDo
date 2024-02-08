<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'status',
        'category',
        'author_id',
        'deadline',
    ];

    public $timestamps = true;
}
