
---

# Desafio React Avançado - Pokémon API

## Descrição

O Pokémon API  é uma aplicação web desenvolvida para permitir a busca e visualização de informações sobre Pokémon. Utilizando a [Pokémon API](https://pokeapi.co/), a aplicação permite aos usuários explorar uma lista de Pokémons, visualizar detalhes de cada Pokémon e alternar entre temas claro e escuro.

## Funcionalidades

- **Busca e Listagem de Pokémon**: Visualize uma lista de Pokémons e carregue mais Pokémon conforme necessário.
- **Detalhes do Pokémon**: Exiba informações detalhadas sobre um Pokémon selecionado.
- **Alternância de Tema**: Troque entre temas claro e escuro com um botão de alternância.

## Ferramentas Utilizadas

- **React**: Framework JavaScript para construir a interface do usuário de forma declarativa e eficiente.
- **React Router DOM**: Biblioteca para navegação e roteamento entre diferentes páginas da aplicação.
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS, permitindo a criação de temas dinâmicos.
- **Pokémon API**: API pública para acessar informações sobre Pokémon.
- **Vite**: Ferramenta de construção para desenvolvimento rápido e otimização de projetos React.

**Justificativa**:
- **React** foi escolhido para construir uma interface de usuário interativa e modular.
- **React Router DOM** facilita a navegação entre diferentes seções da aplicação sem recarregar a página.
- **Styled Components** foi utilizado para estilizar componentes e criar temas dinâmicos, melhorando a manutenção e escalabilidade dos estilos.
- **Pokémon API** fornece uma maneira simples e eficaz de acessar dados sobre Pokémon.
- **Vite** foi escolhido por sua velocidade e simplicidade na configuração do ambiente de desenvolvimento.

## Decisões Adotadas

Durante o planejamento e execução do desafio, algumas decisões importantes foram tomadas:

- **Uso do Context API e Styled Components para Gerenciamento de Temas**: Optei por usar o Context API para gerenciar o estado do tema e Styled Components para aplicar estilos dinâmicos. Isso facilita a troca de temas e melhora a coesão dos estilos na aplicação.
- **Implementação de Fallbacks nos Estilos Globais**: Adicionamos fallbacks para garantir que a aplicação não quebre caso o tema não esteja definido, proporcionando uma experiência de usuário mais robusta.

## Passo a Passo para Rodar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/hamilton-vivas/pokemon-api.git
   ```

2. **Navegue até o Diretório do Projeto**:
   ```bash
   cd pokemon-api
   ```

3. **Instale as Dependências**:
   Certifique-se de ter o Node.js e o npm instalados. Em seguida, instale as dependências do projeto:
   ```bash
   npm install
   ```

4. **Inicie o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acesse a Aplicação**:
   Abra o navegador e vá para [http://localhost:5173](http://localhost:5173) para ver a aplicação em execução.
---
