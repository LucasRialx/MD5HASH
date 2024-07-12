// Importa os módulos necessários
const fs = require('fs'); // Módulo File System para manipulação de arquivos
const crypto = require('crypto'); // Módulo Crypto para operações criptográficas

// Constantes
const TARGET_PASSWORD = '6db31949f247836f3b10d214d03c1fe9'; // Senha hash alvo a ser quebrada (substitua pelo valor real)
const DICTIONARY_FILE = 'C:/Users/admin/Desktop/password.txt'; // Caminho do arquivo de dicionário com potenciais senhas (substitua pelo valor real)

// Função para calcular o hash da senha usando o algoritmo MD5
function hashPassword(password) {
    try {
        const md5sum = crypto.createHash('md5'); // Cria um objeto hash MD5
        const hash = md5sum.update(password).digest('hex'); // Atualiza com a senha e obtém a representação em hexadecimal do hash
        return hash;
    } catch (error) {
        throw new Error('Algoritmo MD5 não encontrado');
    }
}

// Função principal
function main() {
    try {
        // Lê o conteúdo do arquivo de dicionário, divide as linhas e armazena em um array
        const data = fs.readFileSync(DICTIONARY_FILE, 'utf-8').split('\n');

        // Itera sobre as senhas no arquivo de dicionário
        for (let i = 0; i < data.length; i++) {
            const password = data[i].trim(); // Obtém a senha da linha e remove espaços em branco
            // Verifica se o hash da senha é igual ao hash alvo
            if (hashPassword(password) === TARGET_PASSWORD) {
                console.log('Senha encontrada:', password);
                return; // Encerra a execução se a senha for encontrada
            }
        }
    } catch (error) {
        console.error('Erro ao ler o arquivo de dicionário:', error.message);
    }
    console.log('Senha não encontrada no dicionário.');
}

// Chama a função principal
main();
