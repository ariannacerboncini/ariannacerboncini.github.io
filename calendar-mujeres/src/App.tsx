import './App.css'
import { CalendarButtonList } from './components/CalendarButtonList/CalendarButtonList'
import { MatchList } from './components/MatchList/MatchList'
import partite from './data/partite.json'

function App() {

  return (
    <>
      <section>
        <div>
          <h1>Calendario La Resistente Mujeres</h1>
          <p>
            Usa questa pagina per aggiungere le partite delle Mujeres al tuo calendario digitale, o per consultare le partite della stagione.
          </p>
        </div>        
      </section>

      <section>
        <CalendarButtonList />
      </section>

      <section>
        <MatchList partite={partite}/>
      </section>

    </>
  )
}

export default App
