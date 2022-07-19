
import './App.css';
import {useState} from 'react'

function App() {
  const [im, setIm] = useState("https://www.researchgate.net/publication/331943055/figure/fig1/AS:739058712059904@1553216736506/Representation-of-the-electric-field-and-the-equipotential-lines-of-a-single-point-charge_Q320.jpg")
  const [formula, setFormula] = useState("./Screenshot_3.png")
  const [nome, setNome] = useState("Carga Pontual")
  const set = ()=>{
    setNome("Carga Pontual")
    setFormula("./Screenshot_3.png")
    setIm("https://www.researchgate.net/publication/331943055/figure/fig1/AS:739058712059904@1553216736506/Representation-of-the-electric-field-and-the-equipotential-lines-of-a-single-point-charge_Q320.jpg")
  }
  const set2 = ()=>{
    setNome("Dipolos Elétricos")
    setFormula("./Screenshot_1.png")
    setIm("https://www.researchgate.net/publication/331943055/figure/fig3/AS:739058712055811@1553216736615/Representation-of-the-electric-field-and-the-equipotential-lines-of-an-electric-dipole.png")
  }
  const set3 = ()=>{
    setNome("Campo magnético de cargas opostas")
    setFormula("./Screenshot_4.png")
    setIm("https://www.mdpi.com/education/education-09-00064/article_deploy/html/images/education-09-00064-g006.png")
  }
  const set4 = ()=>{
    setNome("Capassitor")
    setFormula("./Screenshot_2.png")
    setIm("https://www.mdpi.com/education/education-09-00064/article_deploy/html/images/education-09-00064-g004.png")
  }
  const set5 = ()=>{
    setNome("Carga Magnética")
    setFormula("./Screenshot_5.png")
    setIm("https://www.researchgate.net/publication/331943055/figure/fig4/AS:739058712076289@1553216736708/Representation-of-the-magnetic-field-created-by-one-filiform-electric-current-see.png")
  }
  return (
    <div className="Appimg">
      <menu>
          <h3>Eletromagnestismo</h3>
      </menu>
      <div className='sidebarContent'>
        <ul>
          <li onClick={set}>Carga Pontual</li>
          <li onClick={set2}>Dipolos Elétricos</li>
          <li onClick={set3}>Campo magnético de cargas opostas</li>
          <li onClick={set4}>Capassitor</li>
          <li onClick={set5}>Carga Magnética</li>
        </ul>
        <div className='sidebarImg'>
          <div className='divContentImg'>
            <img src={im} alt='linhas magnéticas' className='imgAling imgMargin'/>
            <div className='imgAling'>
              <h2>{nome}</h2>
              <h5><img src={formula} alt=''/></h5>
              <p>Descrição</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
