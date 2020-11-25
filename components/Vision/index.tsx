import * as React from 'react'
import Section from '../Section'
import './styles.scss'

const Vision: React.FunctionComponent = () => (
  <Section title="Nuestra Vision" id="vision" size="auto">
    <div className="vision">
      <img src="/static/images/vision.png" height={300} />

      <div className="vision__list">
        <div className="vision__item">
          <div className="vision__content">
            <h2 className="vision__title">Nuestro Enfoque</h2>
            <span>El mundo de las tecnologías de la información cambia constantemente. En LookingWeb nos enfocamos en asegurar que nuestros empleados estén al día con las últimas tecnologías y herramientas. Hacemos esto creando un ambiente de trabajo relajado donde todo se puede preguntar sin sentir vergüenza. Asistir a congresos (internacionales) y cursos de apoyo teniendo un presupuesto de estudios de 3000 euros y 5 días. Además, LookingWeb organiza 3 'días de innovación' al año en nuestras oficinas para probar algo nuevo, compartir conocimientos y conectarse con nuevos colegas.</span>
          </div>
        </div>

        <div className="vision__item">
          <div className="vision__content">
            <h2 className="vision__title">Felicidad</h2>
            <span>Los empleados felices realizan un buen trabajo. Esto es realmente algo en lo que creemos en LookingWeb y haremos todo lo posible para ayudar donde sea posible. Un máximo de 25 empleados, nos asegura de que lo mantengamos personal y flexible de cualquier manera posible. Los empleados participan en la elección de actividades divertidas y conferencias. ¿Vamos a esquiar en los Alpes o surfear en Portugal?</span>
          </div>
        </div>

        <div className="vision__item">
        <div className="vision__content">
          <h2 className="vision__title">Algo mas que un trabajo</h2>
          <span>Dado que en LookingWeb tratamos con los mejores ingenieros de automatización de pruebas internacionales, entendemos que mudarse o vivir en un nuevo país puede ser difícil. Es por eso que ofrecemos apoyo con vivienda, impuestos o cualquier otra cosa que pueda parecer abrumadora.</span>
        </div>
      </div>
      </div>
    </div>
  </Section>
)

export default React.memo(Vision)