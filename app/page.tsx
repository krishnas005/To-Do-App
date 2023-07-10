import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className='max-w-2xl mx-auto mt-16'>
      <div className='border border-white rounded-xl p-10 pb-16'>
        <div className='text-center my-5 flex flex-col gap-4 mb-8'>
          <h1 className='text-3xl font-bold mb-6'>Todo List App</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
