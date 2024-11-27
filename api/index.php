<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Caminho do arquivo JSON onde os dados são armazenados
$file = 'data.json';

// Verifica se o arquivo existe
if (file_exists($file)) {
    // Lê os dados do arquivo e converte para um array PHP
    $data = json_decode(file_get_contents($file), true);
} else {
    // Caso o arquivo não exista, cria um array vazio
    $data = [];
}

// Tratar requisições GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retorna os dados como JSON
    echo json_encode($data);
    exit;
}

// Tratar requisições POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obter os dados enviados no corpo da requisição
    $input = json_decode(file_get_contents('php://input'), true);

    // Validar e criar um novo item
    $newItem = [
        "id" => count($data) + 1, // Gera um novo ID automaticamente
        "name" => $input['name'] ?? 'Desconhecido',
        "age" => $input['age'] ?? 0,
        "city" => $input['city'] ?? 'Desconhecida',
    ];

    // Adiciona o novo item ao array de dados
    $data[] = $newItem;

    // Salva os dados atualizados no arquivo JSON
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    // Retorna o novo item como resposta
    echo json_encode($newItem);
    exit;
}
?>
