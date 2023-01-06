import './index.css';
import React from 'react';
import Title from './components/Title';


//Janelas
import Main from './components/Main';
import Nav from './components/Nav';
import WorkSpace from './components/WorkSpace';

//nav

import Row from './components/Row';
import ButtonGalery from './components/ButtonGalery';
import ButtonLogo from './components/ButtonLogo';
import ButtonLeft from './components/ButtonLeft';
import ButtonMake from './components/ButtonMake';
import Searchbox from './components/Searchbox';
import ButtonRight from './components/ButtonRight';
import NavRow from './components/NavRow';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';

//Janela esquerda
import Aside from './components/Aside';
import AsideCardTop from './components/AsideCardTop';
import AsideCardMidle from './components/AsideCardMidle';
import AsideCardBottom from './components/AsideCardBottom';


import Desktop from './components/Desktop';
import DesktopContainer from './components/DesktopContainer';
import DesktopImg from './components/DesktopImg';


import ButtonNavPromo from './components/ButtonNavPromo';


//Janela direita
import DesktopText from './components/DesktopText';
import Desktop from './components/Desktop';
import DesktopMore from './components/DesktopMore';
import ButtonNav from './components/ButtonNav';
import DivMore from './components/DivMore';
import DivText from './components/DivText';
import Windows from './components/Windows';
import List from './components/List';
import Card from './components/Card';
import Label from './components/Label';

//Footer
import Footer from './components/Footer';





//svg
import ninedot from './svg/dots-nine.svg';
import trelloicontext from './svg/Trello Logo (SVG) - Vector69Com.svg';
import cross from './svg/align-middle.svg';
import bell from './svg/bell.svg';
import briefcase from './svg/briefcase.svg';
import calendar from './svg/calendar-event.svg';
import cardtext from './svg/card-text.svg';
import chat from './svg/chat.svg';
import arrowleft from './svg/chevron-compact-left.svg';
import arrowdown from './svg/chevron-compact-down.svg';
import clock from './svg/clock.svg';
import exclamation from './svg/exclamation-circle.svg';
import gear from './svg/gear-wide.svg';
import text from './svg/justify-left.svg';
import paperclip from './svg/paperclip.svg';
import pencil from './svg/pencil.svg';
import person from './svg/person.svg';
import question from './svg/question-circle.svg';
import search from './svg/search.svg';
import table from './svg/table.svg';
import threedots from './svg/three-dots.svg';
import trello from './svg/trello.svg';
import trelloofficial  from './svg/trello-official.svg';
import trelloicon from './svg/trello_plain_wordmark_logo_icon_146320.svg';
import personcircle from './svg/person-circle.svg';
import personadd from './svg/person-fill-add.svg';
import chevroncompactleft from './svg/chevron-compact-left.svg';
import filespreadsheet from './svg/file-spreadsheet.svg';
import gearwide from './svg/gear-wide.svg';
import threedots from './svg/three-dots.svg';


//Style
import './index.css';


function App() {
  return (
    <Main>
      
      <Nav>
        
        <NavLeft>

         <Row>  
        
         <ButtonGalery>
            <img  class="Menu" src={ninedot} alt='Ninedot' />
         </ButtonGalery>


           <ButtonLogo>
            <img class="TrelloLogo"  src={trelloicon}  alt='Logo'    />
           </ButtonLogo>
        


          <ButtonLeft >
          <NavRow>
            <b class="Navlabel">Workspaces</b>
            
            <img class="arrowdown" src={arrowdown}  />


           </NavRow>

            </ButtonLeft>


           <ButtonLeft>
           <NavRow>
           <b class="Navlabel">Recent</b>
           <img class="arrowdown" src={arrowdown}  />

           </NavRow>

           </ButtonLeft>


           <ButtonLeft>
           <NavRow>
            <b class="Navlabel">Starred</b>
            <img class="arrowdown" src={arrowdown}  />
           </NavRow>
           </ButtonLeft>

           <ButtonLeft>
           <NavRow>
           <b class="Navlabel">Templates</b>
                    <img class="arrowdown" src={arrowdown}  />

            </NavRow>
           </ButtonLeft>
         
           <ButtonLeft>
           <NavRow>
           <b class="Navlabel">Create</b>
           <img src={arrowdown}  />
           </NavRow>
           </ButtonLeft>
          
           <ButtonMake>
            <b>Criar</b>
           </ButtonMake>

           </Row>  



           </NavLeft>

           <NavRight>

           <Searchbox  type="text" placeholder="Search" >
         
           </Searchbox>
           <ButtonRight type="button">
            <img
              class="Exclamation
            "
            src={exclamation}  

            />
           </ButtonRight>

           <ButtonRight type="button">
            <img
              class="Ring"
              src={bell}
            />
           </ButtonRight>
           <ButtonRight type="button">
            <img
              class="PerfilMenu"
              src={personcircle}
            />
           </ButtonRight>
          
           </NavRight>

      </Nav>

      <WorkSpace>
        <Aside>
          <AsideCardTop>
           <Desktop>
            <DesktopContainer>
              <DesktopImg>
                <img
                  class="perfil"
                  src="https://akamai.sscdn.co/uploadfile/cifraclub/avatar/6/6/47195t7f9xb.jpg"
                  height="100"
                  width="100"
                />
              </DesktopImg>
              <DesktopText>
                <h2>
                  <b> Aréa de trabalho </b>
                </h2>
                <h2>
                  <b> Trello</b>
                </h2>
                <h2>
                  <b> Grátis</b>
                </h2>
              </DesktopText>
            </DesktopContainer>
            <DesktopMore>
              <img
                class="More"
                src="https://www.imagensempng.com.br/wp-content/uploads/2020/12/Seta-Direita-Monocolor-Png.png"
              />
              </DesktopMore>
             </Desktop>
          </AsideCardTop>

          <AsideCardMidle>
             <ButtonNav type="button">
             <img  class="Painting" src="https://w7.pngwing.com/pngs/889/287/png-transparent-camera-icon-camera-electronics-rectangle-square-thumbnail.png"            />
             <b>Quadros</b>
             </ButtonNav>
             <ButtonNav type="button">
              <Row>
               <img
                class="Member"
                src="https://w7.pngwing.com/pngs/330/996/png-transparent-computer-icons-symbol-team-members-angle-image-file-formats-logo.png"
              />
              <b>Menbros</b>
              <DivMore>
                <img
                  class="Positive"
                  src="https://img.favpng.com/19/23/5/plus-and-minus-signs-computer-icons-plus-minus-sign-png-favpng-uKHDMb5QKpVzgaAFYKhcZvkry_t.jpg"
                />
              </DivMore>
            </Row>
           </ButtonNav>

            <ButtonNav type="button">
            <Row>
              <img
                class="Config"
                src="https://w7.pngwing.com/pngs/144/225/png-transparent-computer-icons-gear-wheel-others-miscellaneous-share-icon-cogwheel.png"
              />
              <b>Configurações</b>

              <DivMore>
                <img
                  class="Set"
                  src="https://www.imagensempng.com.br/wp-content/uploads/2020/12/Seta-Direita-Monocolor-Png.png"
                />
              </DivMore>
            </Row>
            <DivText>
              <b> Visualizações da área de trabalho</b>
            </DivText>
           </ButtonNav>
            <ButtonNav type="button">
            <img
              class="Table"
              src="https://w7.pngwing.com/pngs/969/130/png-transparent-computer-icons-font-awesome-table-database-calendar-icon-furniture-text-calendar.png"
            />
            <b>Tabela</b>
           </ButtonNav>
            <ButtonNav type="button">
            <img
              class="Calendar
              "
              src="https://e7.pngegg.com/pngimages/276/7/png-clipart-calendar-time-icon-calendar-holidays-text-thumbnail.png"
            />
            <b>Calendário</b>
            </ButtonNav>
          </AsideCardMidle>
         
         
          <AsideCardBottom>
             <Row>
            <DivText>
              <b> Seus quadros </b>
            </DivText>
            <DivMore>
              <img
                class="Positive"
                src="https://img.favpng.com/19/23/5/plus-and-minus-signs-computer-icons-plus-minus-sign-png-favpng-uKHDMb5QKpVzgaAFYKhcZvkry_t.jpg"
              />
            </DivMore>
             </Row>

            <ButtonNav type="button">
            <img
              class="Posting"
              src="https://us.123rf.com/450wm/yamabikay/yamabikay1703/yamabikay170300295/74676258-textura-de-papel-verde-fundo-quadrado-sem-emenda-telha-pronta-textura-de-alta-qualidade-em-resolu%C3%A7%C3%A3o.jpg"
            />
            <b>Teste</b>
            </ButtonNav>

            <ButtonNavPromo>
            <img
              class="Promo"
              src="https://www.imagemhost.com.br/images/2021/05/11/PROMOCAO.png"
            />
             </ButtonNavPromo>


          </AsideCardBottom>

        </Aside>




        <Windows>
          <List>
            <Title>Titulo</Title>

            <Card>
              <Label>Teste do primeiro projeto</Label>
              <Date>outubro 1</Date>
            </Card>

            <Card>
              <Label>Teste do segundo projeto aumentar um pouco</Label>
              <Date>outubro 2</Date>
            </Card>
          </List>

          <List>
            <Title>Titulo</Title>

            <Card>
              <Label>Teste do primeiro projeto aumentar um pouco mais</Label>
              <Date>outubro 3</Date>
            </Card>

            <Card>
              <Label>
                Teste do segundo projeto assim vai ser um pouco mais mais mais
              </Label>
              <Date>outubro 4</Date>
            </Card>
          </List>

          <List>
            <Title>Titulo</Title>

            <Card>
              <Label>Teste do primeiro projeto</Label>
              <Date>outubro 5</Date>
            </Card>
            <Card>
              <Label>
                Teste do segundo projeto Teste do segundo projeto aumentar um
                poucoTeste do segundo projeto aumentar um poucoTeste do segundo
                projeto aumentar um poucoTeste do segundo projeto aumentar um
                poucoTeste do segundo projeto aumentar um pouco
              </Label>
              <Date>outubro 6</Date>
            </Card>
            <Card>
              <Label>Teste do primeiro projeto</Label>
              <Date>outubro 5</Date>
            </Card>
          </List>
        </Windows>
      </WorkSpace>

    


     
    </Main>
  );
}

export default App;
