import React from 'react'

function Form() {
  return (
    <div>
      <form class="w-auto my-4 mx-3 *:text-lg font-medium">
        <div class="mb-5">
          <input type="email" class="bg-transparent border-b-2  text-gray-900 block w-full p-2.5 dark:placeholder-gray-300 placeholder-gray-500 dark:text-white dark:-light focus:outline-none transition ease-in-out delay-100 dark:focus:border-orange-200 focus:border-indigo-400" placeholder="Tu email..." required />
        </div>
        <div class="mb-5">
          <input type="text" class="lg:mt-4 bg-transparent border-b-2  text-gray-900 dark:text-white rounded-lgblock w-full p-2.5 dark:placeholder-gray-300 placeholder-gray-500 dark:focus:border-orange-200 dark:-light focus:outline-none transition ease-in-out delay-100 focus:border-indigo-400" placeholder="Tu nombre..." required />
        </div>
        <textarea id="message" rows="4" class="bg-transparent resize-none block p-2.5 lg:mt-10 w-full text-gray-900 dark:text-white placeholder-gray-500 rounded-lg border-2  focus:ring-blue-500 dark:focus:border-orange-200 dark:placeholder-gray-300 dark:text-whitefocus:outline-none focus:outline-none transition ease-in-out delay-100 focus:border-indigo-400" placeholder="Tu nombre..."></textarea>
        <button type="submit" class="border-none w-full text-medium transition duration-300 ease-in-out mt-3 text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center dark:text-black dark:bg-hoverTransparentDark dark:hover:bg-hoverTransparentLight">Enviar</button>
      </form>
    </div>
  )
}

export default Form