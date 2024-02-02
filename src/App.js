import "./styles.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
export default App;

const Header = () => {
  return (
    <header>
      <div className="button-container">
        <button>Menu</button>
        <button>Hakkında</button>
        <button>Saatler & Lokasyon</button>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <Heading />
      <Paragraph />
      <ImageContainer />
    </main>
  );
};

const Heading = () => {
  return <h1 className="logo-container">Basit Yemekler Restoranı</h1>;
};

const Paragraph = () => {
  return (
    <div className="main">
      <p className="info-container">
        Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
        Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri
        ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi
        oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
      </p>
    </div>
  );
};

const ImageContainer = () => {
  return (
    <div class="image-container">
      <div class="image-wrapper">
        <img class="hot-dog" src="images/hotdogs.jpg" />
      </div>
      <div class="image-wrapper">
        <img src="images/sandwich.jpg" />
      </div>
      <div class="image-wrapper">
        <img src="images/hamburger.jpg" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>
        Made by{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          {" "}
          Coding Company
        </a>
        ™.
      </p>
    </footer>
  );
};

/* Challenge: 

Bu web sayfası, HTML öğeleri vanilla JS ile DOM'a eklenerek oluşturulmuştur. Göreviniz JS'yi React JSX'e dönüştürmek ve React ile sayfaya render etmek. İşte istediğimiz şeyler: 

        1. Sayfa, JSX ile yazılmış diğer fonksiyonel bileşenlerden ve elementlerden oluşan tek bir fonksiyonel React bileşeni tarafından render edilmelidir.
        
        2. Sonuç, mevcut sayfadan ayırt edilememelidir (bonus challenge yapmadığınız sürece).
        
        3. Mevcut JS'nin tamamı sonunda silinmelidir. 
        
        4. Kod modüler ve iyi organize edilmiş olmalıdır.
*/

// const mainElement = document.createElement("main");
// document.body.appendChild(mainElement);
// const someHeading = document.createElement("h1");
// someHeading.classList.add("logo-container");
// someHeading.textContent = "Basit Yemekler Restoranı";
// mainElement.appendChild(someHeading);

// const header = `<header>
//                     <div class="button-container">
//                         <button>Menu</button>
//                         <button>Hakkında</button>
//                         <button>Saatler & Lokasyon</button>
//                     </div>
//                 </header>`;
// document.body.innerHTML = header;

// const someParagraph = document.createElement("p");
// someParagraph.classList.add("info-container");
// someParagraph.textContent = `Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.`;
// mainElement.appendChild(someParagraph);

// const imageContainer = `<div class="image-container">
//                             <div class="image-wrapper">
//                                 <img class="hot-dog" src="images/hotdogs.jpg"/>
//                             </div>
//                             <div class="image-wrapper">
//                                 <img src="images/sandwich.jpg"/>
//                             </div>
//                             <div class="image-wrapper">
//                                 <img src="images/hamburger.jpg"/>
//                             </div>
//                         </div>`;
// mainElement.insertAdjacentHTML("beforeend", imageContainer);

// const footer = `<footer>
//                     <p>
//                         Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Coding Company</a>™.
//                     </p>
//                 </footer>`;
// document.body.innerHTML += footer;
