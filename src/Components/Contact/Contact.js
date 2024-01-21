import React from 'react'
import Form from './Form'
import { useEffect } from 'react'
import { ContactContext } from './ContactContext'
import { useContext } from 'react'
import BackgroundParticles from '../BackgroundParticles'
import BackgroundParticlesLight from '../BackgroundParticlesLight'

function Contact() {

  let bgVar;
  let { contactDark } = useContext(ContactContext)

  // if (contactDark === true) { bgVar = "url(../images/bg.png)" }
  // else { bgVar = "url(../images/bglight.png" }

  return (
    <div>
      { (contactDark === false ? <BackgroundParticles/> : <BackgroundParticlesLight/>)}
      {/* FORMULARIO / CONTACTO */}
      <div class="block lg:flex justify-center text-lg bg-no-repeat text-slate-200 dark:text-gray-900 align-middle bg-cover" id="bgContact">
        <p class="w-11/12 lg:w-4/12 py-8 mx-auto lg:mx-0"><Form /></p> {/* FORMULARIO */}

        <div>
          <div class="block grid-cols-2 gap-2 text-gray-900 *:text-slate-200 *:bg-transparentLight dark:*:bg-transparentDark *:rounded-md *:text-center lg:grid w-full *:p-9 *:m-3 py-8">
            <div>
              <p><i class="fa-solid fa-location-dot text-3xl pb-2 dark:text-orange-300 text-indigo-400"></i></p>
              <p class="font-semibold">Nuestra oficina</p>
              <p>744 Av. Perrongo</p>
            </div>

            <div>
              <p><i class="fa-solid fa-phone text-3xl pb-2 dark:text-orange-300 text-indigo-400"></i></p>
              <p class="font-semibold">Teléfono</p>
              <p>744 Av. Perrongo</p>
            </div>

            <div>
              <p><i class="fa-solid fa-envelope text-3xl pb-2 dark:text-orange-300 text-indigo-400"></i></p>
              <p class="font-semibold">Email</p>
              <p>contacto@perretes.com</p>
            </div>
            <div>
              <p><i class="fa-brands fa-instagram text-3xl pb-2 dark:text-orange-300 text-indigo-400"></i></p>
              <p class="font-semibold">Instagram</p>
              <p>@perretes_ecommerce</p>
            </div>
          </div>

          <div>
            <br />
            <p class="text-xl font-bold hidden">Síguenos</p>
            <div class="grid grid-cols-4 gap-2 *:hover:bg-indigo-900 hidden">
              <button class="rounded-full bg-blue-700 size-12"><i class="fa-brands fa-instagram"></i></button>
              <button class="rounded-full bg-blue-700 size-12"><i class="fa-brands fa-instagram"></i></button>
              <button class="rounded-full bg-blue-700 size-12"><i class="fa-brands fa-instagram"></i></button>
              <button class="rounded-full bg-blue-700 size-12"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <p class="hidden">©2024 Perretes & Co.</p>

          </div>

        </div>
      </div>
      {/* FORMULARIO / CONTACTO */}
    </div>
  )
}

export default Contact