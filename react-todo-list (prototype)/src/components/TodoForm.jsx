import React from 'react'

function TodoForm() {
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form>
            <input type="text" placeholder='Digite o título' />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="">Trabalho</option>
                <option value="">Pessoal</option>
                <option value="">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm