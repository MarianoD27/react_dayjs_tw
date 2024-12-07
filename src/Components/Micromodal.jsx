import React, { useContext, useEffect } from 'react'
import '/src/micromodal.css'

import MicroModal from 'micromodal'

import Select from './Select'

import { timesContext } from '../App'

const Micromodal = () => {

  const { openMM, setOpenMM } = useContext(timesContext)

  useEffect(() => {
    if (openMM) {
      MicroModal.show("modal-1"), {
        onClose: setOpenMM(false)
      }
    }
  }, [openMM])

  console.log(openMM)


  return (
    <div className="modal micromodal-slide z-50" id="modal-1" aria-hidden="true">

      <div className="modal__overlay" tabIndex="-1" data-micromodal-close>

        <div
          className="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >

          <header className="modal__header">
            <h2 className="modal__title" id="modal-1-title">
              Timezone Selector
            </h2>
            <button
              className="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            />
          </header>

          <main className="modal__content" id="modal-1-content">
            {<Select />}
            <p >
              Try changing the timezone. The dropdown includes a list of all the available compatible timezone names, (should indeed be croped down later on).
            </p>

          </main>

          <footer className="modal__footer">
            {/* <button className="modal__btn modal__btn-primary">Continue</button> */}
            <button
              className="modal__btn modal__btn-primary"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              Close
            </button>
          </footer>

        </div>
      </div>
    </div>
  )
}

export default Micromodal