import * as React from 'react'
import { ScrollLocky } from 'react-scroll-locky'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ReactLoading from 'react-loading'
import { CountryDropdown } from 'react-country-region-selector'
import Success from './../Success'
import jobDetails from './job-description'
import validate from './validate'
import api from './api'
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
  const [showForm, setFormVisibility] = React.useState(false)
  const [feedback, setFeedback] = React.useState(null)

  const showApplicationForm = () => {
    setFormVisibility(true)
  }

  const close = () => {
    setFeedback(null)
    setHideEffect(true)
    closeModal()
  }

  const closeAndReset = () => {
    setFeedback(null)
    closeModal()
    setFormVisibility(false)
  }

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) close()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  const hideContent = feedback === 'success'
  const showModal = show ? 'modal__visible' : ''
  const hideModal = (hideEffect !== null && show === false)
    ? 'modal__invisible'
    : ''
  let wrapperFormClass = showForm ? 'modal__wrapper--form' : ''
  wrapperFormClass += hideContent ? ' modal__wrapper--success' : ''

  return (
    <section className={`modal ${showModal} ${hideModal}`}>
      <ScrollLocky isolation={false} enabled={show}>
        <div className={`modal__wrapper ${wrapperFormClass}`}>
          <button onClick={closeAndReset} className="modal__close">
            <span className="visually-hidden">Close modal</span>
          </button>

          <header className="modal__header">
            <img
              title="LookingWeb"
              alt="Techmill"
              src="/static/images/logo.png"
              height="300px"
            />
            <h1 className="modal__title">Automation Engineer</h1>
          </header>

          { hideContent && (
            <div className="modal__success">
              <Success />
              <h2 className="modal__success-title">Success.</h2>
              <p className="modal__success-content">We will reach you as soon as possible.</p>
            </div>
          )}

          { !hideContent && !showForm && (
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

              <button
                className="modal__button"
                onClick={showApplicationForm}
              >
                I want to apply
              </button>
            </div>
          )}

          { !hideContent && showForm && (
            <div className="modal__form">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  country: '',
                  linkedin: '',
                  github: '',
                  file: {},
                  passion: false,
                  experience: false,
                  communication: false,
                  share: false,
                }}
                validate={validate}
                onSubmit={async (values: any, { setSubmitting, resetForm }) => {
                  const { response } = await api(values)
                  resetForm({})
                  setFeedback(response)
                  setSubmitting(false)
                }}
              >
                {({ values, handleChange, handleBlur, setFieldValue, isSubmitting }) => (
                  <Form>
                    <div className="modal__form-inline">
                      <div className="modal__form-item">
                        <label className="modal__form-title" htmlFor="name">
                          Name
                          <ErrorMessage className="modal__error" name="name" component="span" />
                        </label>

                        <Field id="name" type="text" name="name" />
                      </div>

                      <div className="modal__form-item">
                        <label className="modal__form-title" htmlFor="email">
                          Email
                          <ErrorMessage className="modal__error" name="email" component="span" />
                        </label>

                        <Field id="email" type="email" name="email" />
                      </div>
                    </div>

                    <div className="modal__form-item">
                      <label className="modal__form-title">
                        Country
                        <ErrorMessage className="modal__error" name="country" component="span" />
                      </label>

                      <CountryDropdown
                        name="country"
                        value={values.country}
                        onChange={(_, event)  => handleChange(event)}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="modal__form-inline">
                      <div className="modal__form-item">
                        <label className="modal__form-title" htmlFor="linkedin">
                          LinkedIn
                          <ErrorMessage className="modal__error" name="linkedin" component="span" />
                        </label>

                        <Field type="text" name="linkedin" id="linkedin" />
                      </div>

                      <div className="modal__form-item">
                        <label className="modal__form-title" htmlFor="github">
                          GitHub <i>(optional)</i>
                          <ErrorMessage className="modal__error" name="github" component="span" />
                        </label>

                        <Field type="text" name="github" id="github" />
                      </div>
                    </div>

                    <div className="modal__form-item">
                      <strong className="modal__form-title">
                        Do you
                      </strong>

                      <div className="modal__form-checkbox">
                        <label>
                          <Field type="checkbox" name="passion" />
                          <strong>
                            Have passion for QA?
                            <ErrorMessage
                              className="modal__error"
                              name="passion"
                              component="span"
                            />
                          </strong>
                        </label>
                      </div>

                      <div className="modal__form-checkbox">
                        <label>
                          <Field type="checkbox" name="experience" />
                          <strong>
                            Have 5 year+ experience in Test Automation?
                            <ErrorMessage
                              className="modal__error"
                              name="experience"
                              component="span"
                            />
                          </strong>
                        </label>
                      </div>

                      <div className="modal__form-checkbox">
                        <label>
                          <Field type="checkbox" name="communication" />
                          <strong>
                            Have strong communication skills?
                            <ErrorMessage
                              className="modal__error"
                              name="communication"
                              component="span"
                            />
                          </strong>
                        </label>
                      </div>

                      <div className="modal__form-checkbox">
                        <label>
                          <Field type="checkbox" name="share" />
                          <strong>
                            Like to share knowledge?
                            <ErrorMessage
                              className="modal__error"
                              name="share"
                              component="span"
                            />
                          </strong>
                        </label>
                      </div>
                      <ErrorMessage name="doYou" component="div" />
                    </div>

                    <div className="modal__form-item">
                      <label className="modal__form-title">
                        Your CV
                        <ErrorMessage
                          className="modal__error"
                          name="file"
                          component="span"
                        />
                      </label>

                      <input
                        id="file"
                        name="file"
                        type="file"
                        accept="application/pdf"
                        onChange={(event: any) => {
                          setFieldValue('file', event.target.files[0])
                        }}
                      />
                      <ErrorMessage name="doYou" component="div" />
                    </div>

                    <button className="modal__button" type="submit" disabled={isSubmitting}>
                      { isSubmitting
                        ? <ReactLoading type="spin" color="#fff" height={20} width={20}  />
                        : 'Apply'
                      }
                    </button>

                    { feedback === 'error' && (
                      <span className="modal__error-message">
                        Something went wrong. Try again later please.
                      </span>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </ScrollLocky>
    </section>
  )
}

export default React.memo(Modal)