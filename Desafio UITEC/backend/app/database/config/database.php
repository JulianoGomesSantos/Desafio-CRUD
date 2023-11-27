'connections' => [
// ... outras conexões
'pgsql' => [
'driver' => 'pgsql',
'host' => env('DB_HOST', '127.0.0.1'),
'port' => env('DB_PORT', '5432'),
'database' => env('DB_DATABASE', 'nome_do_seu_banco'),
'username' => env('DB_USERNAME', 'seu_usuario'),
'password' => env('DB_PASSWORD', 'sua_senha'),
'charset' => 'utf8',
'prefix' => '',
'schema' => 'public',
'sslmode' => 'prefer',
],
// ...
],