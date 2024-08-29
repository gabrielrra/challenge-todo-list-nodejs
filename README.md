# Gerenciamento de Lista de Tarefas:

O foco do desafio é na lógica e na estrutura de dados utilizados para resolve-lo.
Deve ser criada uma estrutura que gerencie uma lista de tarefas.
Cada tarefa possui um título e uma descrição. Todos os nomes e descrições são minúsculos.
As tarefas devem ser mantidas na ordem de criação a menos que a ordem seja alterada explicitamente.
A posição inicial é 0 (zero) e a última é 1 a mais que a quantidade de tarefas existentes.
A assinatura das funções não pode ser alterada.
A estrutura deve implementar as funcionalidades descritas abaixo.

# Funcionalidades:

### Adicionar Tarefa
Descrição: Adiciona uma tarefa em uma posição específica ou ao final da lista caso não seja explicitamente indicada. Não podem ser incluídas tarefas com mesmo nome.
Função: add_task (name, description, position)
name [obrigatório]: Nome da tarefa.
description [opcional]: Descrição da tarefa.
add_position [opcional]: Posição que a tarefa deve ser adicionada.
Output: Nenhum.

### Remover Tarefa
Descrição: Remove uma tarefa específica da lista com base no título.
Função: remove_task (name)
name [obrigatório]: Nome da tarefa.
Output: A tarefa removida, se a tarefa não for encontrada nada é retornado.

### Buscar Tarefa
Descrição: Retorna a posição de uma tarefa específica da lista com base no título.
Função: find_task (name)
name [obrigatório]: Nome da tarefa.
Output: A posição da tarefa caso ela exista ou -1 caso contrário.

### Mover Tarefa
Descrição: Move uma tarefa para a posição indicada.
Função: move_task (name, new_position)
name [obrigatório]: Nome da tarefa que deve ser movida.
new_position [obrigatório]: Posição para onde a tarefa será movida.
Output: Nenhum.

### Listar Tarefas
Descrição: Lista todas as tarefas na ordem atual.
Função: list_tasks ()
Output: Um array contendo todas tarefas na ordem, cada uma com seu título e descrição.
