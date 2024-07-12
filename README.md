# MD5HASH - Password Cracker

Este projeto é um simples programa de força bruta para descobrir senhas usando um dicionário de possíveis senhas e comparando seus hashes MD5 com um hash alvo.

## Descrição

O programa lê um arquivo de texto contendo uma lista de possíveis senhas, calcula o hash MD5 de cada senha e compara com um hash alvo fornecido. Se encontrar uma correspondência, imprime a senha encontrada.

## Pré-requisitos

- Node.js instalado
- Um arquivo de dicionário de senhas (`password.txt`)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/password-cracker.git
    cd password-cracker
    ```

2. Certifique-se de ter o Node.js instalado. Se não tiver, baixe e instale a partir de [nodejs.org](https://nodejs.org/).

## Uso

1. Prepare seu arquivo de dicionário de senhas:

    - Coloque todas as possíveis senhas em um arquivo de texto, com uma senha por linha. Exemplo de `password.txt`:
    ```plaintext
    123456
    password
    123456789
    qwerty
    abc123
    ```

2. Atualize as constantes no código:

    - **TARGET_PASSWORD**: O hash MD5 da senha que você deseja descobrir.
    - **DICTIONARY_FILE**: O caminho para o arquivo de dicionário de senhas.

    Exemplo:
    ```javascript
    const TARGET_PASSWORD = '6db31949f247836f3b10d214d03c1fe9'; // Substitua pelo hash real
    const DICTIONARY_FILE = 'C:/Users/admin/Desktop/password.txt'; // Substitua pelo caminho real
    ```

3. Execute o programa:

    ```bash
    node index.js
    ```

    O programa irá iterar pelas senhas no arquivo de dicionário e imprimir a senha correspondente se for encontrada.

## Exemplo

Se `password.txt` contiver:
```plaintext
123456
password
123456789
qwerty
abc123

E TARGET_PASSWORD for o hash MD5 da senha password (que é 5f4dcc3b5aa765d61d8327deb882cf99), o programa imprimirá:

Senha encontrada: password

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contribuição
Faça um fork do projeto.
Crie um branch para sua feature (git checkout -b feature/nome-da-feature).
Commit suas mudanças (git commit -am 'Adiciona nova feature').
Push para o branch (git push origin feature/nome-da-feature).
Crie um novo Pull Request.

Autor
Lucas Rial
