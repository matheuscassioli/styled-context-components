<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
 
$file = 'data.json';
 
if (file_exists($file)) { 
    $data = json_decode(file_get_contents($file), true);
} else { 
    $data = [];
}
 
if ($_SERVER['REQUEST_METHOD'] === 'GET') { 
    echo json_encode($data);
    exit;
}
 
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    $input = json_decode(file_get_contents('php://input'), true);
 
    $newItem = [
        "id" => count($data) + 1,  
        "name" => $input['name'] ?? 'Desconhecido',
        "age" => $input['age'] ?? 0,
        "city" => $input['city'] ?? 'Desconhecida',
    ];
 
    $data[] = $newItem; 
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT)); 
    echo json_encode($newItem);
    exit;
}
?>
