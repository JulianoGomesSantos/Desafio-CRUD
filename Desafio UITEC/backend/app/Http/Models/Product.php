// app/Models/Product.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
protected $fillable = [
'name', 'category_id', 'value', 'expiration_date', 'stock_quantity', 'perishable',
];

public function category()
{
return $this->belongsTo(Category::class);
}
}