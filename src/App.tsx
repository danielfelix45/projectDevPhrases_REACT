import { useState } from 'react';''
import './App.css';

import logoImg from './assets/logo.png';

function App() {
  const [textPhrase, setTextPhrase] = useState('');
  const [selectedCategory, setSelectedCatagory] = useState(0);

  const allPhrases = [
    {
      id: 1,
      name: 'Motivação',
      phrases: [
        'Valorize as pequenas conquistas!',
        'Você nunca será velho demais para sonhar um novo sonho.',
        'Avante! Para começar, você só precisa dar o primeiro passo.',
        'Para certas coisas, não basta querer, é preciso batalhar.',
        'Cada dificuldade ultrapassada te faz mais forte.',
        'A vida retribui quem pensa positivo.',
        'Motivação é aquilo que te faz começar. Habito é aquilo que te faz continuar.'
      ]
    },
    {
      id: 2,
      name: 'Bem Estar',
      phrases: [
        'Felicidade é questão de bem-estar.',
        'Que nenhum momento de hoje perturbe seu bem-estar.',
        'Seja otimista. Esta é a melhor forma de ver a vida.',
        'Não luto por luxo ou riqueza, mas para ficar de bem com a vida e assim poder ter paz!',
        'Não dou relevância ao que falam de mim, pois o que realmente me importa é estar de bem com a vida.',
        'Energia positiva é o melhor presente que a gente pode receber.',
        'Ninguém pode estar de bem com a vida se não estiver de bem consigo próprio.'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setSelectedCatagory(index)
  }

  function handleGenetePhrase(){
    let randomNumber = Math.floor(Math.random() * allPhrases[selectedCategory].phrases.length);
    setTextPhrase(`"${allPhrases[selectedCategory].phrases[randomNumber]}"`)
  }

  return (
    <>
      <div className='container'>
        <img 
          src={logoImg} 
          alt="Logo Frases" 
          className='logo'
        />

        <h2 className='title'>Categorias</h2>
        <section className='category-area'>
          {allPhrases.map((item, index) => (
            <button
              key={item.id} 
              className='category-button'
              style={{
                borderWidth: item.name === allPhrases[selectedCategory].name ? 2 : 0,
                borderColor: '#1FA4DB'
              }}
              onClick={() => handleSwitchCategory(index)}
            >
              {item.name}
            </button>
          ))}
        </section>

        <button className='button-phrase' onClick={handleGenetePhrase}>Gerar frase</button>

        {textPhrase !== '' && <p className='text-phrase'>{textPhrase}</p>}
      </div>
    </>
  )
}

export default App
