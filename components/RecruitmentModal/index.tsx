import * as React from 'react'
import { ScrollLocky } from 'react-scroll-locky'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { CountryDropdown } from 'react-country-region-selector'
import jobDetails from './job-description'
// import validate from './validate';
import './styles.scss'

interface Props {
  show: boolean;
  closeModal: () => void;
}

const Modal: React.FunctionComponent<Props> = ({
  show = false,
  closeModal,
}) => {
  const [hideEffect, setHideEffect] = React.useState<Boolean|null>(null)
  // const [showForm, setFormVisibility] = React.useState(true)

  // const showApplicationForm = () => {
  //   setFormVisibility(true)
  // }

  const close = () => {
    setHideEffect(true)
    closeModal()
  }

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) close()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, []);

  const showModal = show ? 'modal__visible' : '';
  const hideModal = (hideEffect !== null && show === false)
    ? 'modal__invisible'
    : '';

  return (
    <section className={`modal ${showModal} ${hideModal}`}>
      <ScrollLocky isolation={false} enabled={show}>
        <div className="modal__wrapper">
          <button onClick={close} className="modal__close">
            Close
          </button>

          <header className="modal__header">
            <img
              title="Techmill"
              alt="Techmill"
              src="/static/images/logo-original.png"
              height="20"
            />
            <h1 className="modal__title">Automation Engineer</h1>
          </header>

          <div className="modal__content">
            <div className="modal__section">
              <h2 className="modal__section-title">The role</h2>
              { jobDetails.role.map((details, index) => (
                <p key={`details-${index}`} className="modal__section-text">
                  { details }
                </p>
              ))}
            </div>

            <div className="modal__section">
              <h2 className="modal__section-title">Requirements</h2>
              <ul className="modal__section-list">
                { jobDetails.requirements.map((description, index) => (
                  <li key={`desc-${index}`}>{description}</li>
                ))}
              </ul>
            </div>

            <div className="modal__section">
              <h2 className="modal__section-title">Apply</h2>
              <span>
              Interested? Drop an email to <a href="mail:recruitment@techmill.nl">recruitment@techmill.nl</a>
            </span>
            </div>
          </div>
        </div>
      </ScrollLocky>
    </section>
  )
}

export default React.memo(Modal)