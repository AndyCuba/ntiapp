import radiator1 from './assets/images/radiator_1.png';
import radiator2 from './assets/images/radiator_2.png';
import radiator3 from './assets/images/radiator_3.png';
import busket from './assets/images/busket.svg';

const heatingMarkup = `<div class="home__main-filters">
<p>Фильтры</p>
<p id="filter-reset">
  Сбросить
</p>
<div class="home__main-filters-equipment">
  <p id="filters-equipment">Отопительное оборудование</p>
  <form>
    <ul>
      <li>
        <input type="checkbox" id="radiators">
        <label for="radiators">Радиаторы отопления</label>
      </li>
      <li>
        <input type="checkbox" id="convectors">
        <label for="convectors">Конвекторы отопления</label>
      </li>
      <li>
        <input type="checkbox" id="towelrails">
        <label for="towelrails">Полотенцесушители</label>
      </li>
      <li>
        <input type="checkbox" id="armatures">
        <label for="armatures">Арматура для радиаторов</label>
      </li>
    </ul>
  </form>
</div>
<div class="home__main-filters-brand">
  <p id="filters-brand">Бренд</p>
  <form>
    <ul>
      <li>
        <input type="checkbox" id="purmo">
        <label for="purmo">Purmo</label>
      </li>
      <li>
        <input type="checkbox" id="irsap">
        <label for="irsap">Irsap</label>
      </li>
      <li>
        <input type="checkbox" id="terma">
        <label for="terma">Terma</label>
      </li>
      <li>
        <input type="checkbox" id="loten">
        <label for="loten">Loten</label>
      </li>
      <li>
        <input type="checkbox" id="guardo">
        <label for="guardo">Guardo</label>
      </li>
    </ul>
  </form>
</div>
<div class="home__main-filters-price">
  <p>Цена</p>
  <div id="price-slider">
    <div>
      <div id="first-thumb">
        <p></p>
      </div>
      <div id="slider-filler"></div>
      <div id="second-thumb">
        <p></p>
      </div>
    </div>
  </div>
</div>
<div class="home__main-filters-section">
  <p id="filters-section">Количество секций</p>
  <form>
    <ul>
      <li>
        <input type="checkbox" id="4_sections">
        <label for="4_sections">4</label>
      </li>
      <li>
        <input type="checkbox" id="6_sections">
        <label for="6_sections">6</label>
      </li>
      <li>
        <input type="checkbox" id="8_sections">
        <label for="8_sections">8</label>
      </li>
      <li>
        <input type="checkbox" id="12_sections">
        <label for="12_sections">12</label>
      </li>
    </ul>
  </form>
</div>
<div class="home__main-filters-axesdistance">
  <p id="filters-axesdistance">Межосевое расстояние</p>
  <form>
    <ul>
      <li>
        <input type="checkbox" id="20cm">
        <label for="20cm">20 см</label>
      </li>
      <li>
        <input type="checkbox" id="35cm">
        <label for="35cm">35 см</label>
      </li>
      <li>
        <input type="checkbox" id="50cm">
        <label for="50cm">50 см</label>
      </li>
    </ul>
  </form>
</div>
<div class="home__main-filters-heatingarea">
  <p id="filters-heatingarea">Площадь отопления</p>
  <form>
    <ul>
      <li>
        <input type="checkbox" id="area_more_19">
        <label for="area_more_19">Более 19 м²</label>
      </li>
      <li>
        <input type="checkbox" id="area_less_8">
        <label for="area_less_8">Менее 8 м²</label>
      </li>
      <li>
        <input type="checkbox" id="area_from_10_to_14">
        <label for="area_from_10_to_14">от 10 до 14 м²</label>
      </li>
      <li>
        <input type="checkbox" id="area_from_15_to_26">
        <label for="area_from_15_to_26">от 15 до 26 м²</label>
      </li>
    </ul>
  </form>
</div>
<div class="home__main-filters-color">
  <p id="filters-color">Цвет</p>
  <form>
    <ul>
      <li>
        <input type="checkbox" id="red">
        <label for="red">Красный</label>
      </li>
      <li>
        <input type="checkbox" id="yellow">
        <label for="yellow">Желтый</label>
      </li>
      <li>
        <input type="checkbox" id="green">
        <label for="green">Зеленый</label>
      </li>
      <li>
        <input type="checkbox" id="blue">
        <label for="blue">Синий</label>
      </li>
      <li>
        <input type="checkbox" id="violet">
        <label for="violet">Фиолетовый</label>
      </li>
      <li>
        <input type="checkbox" id="pink">
        <label for="pink">Розовый</label>
      </li>
      <li>
        <input type="checkbox" id="beige">
        <label for="beige">Бежевый</label>
      </li>
      <li>
        <input type="checkbox" id="white">
        <label for="white">Белый</label>
      </li>
      <li>
        <input type="checkbox" id="black">
        <label for="black">Черный</label>
      </li>
      <li>
        <input type="checkbox" id="grey">
        <label for="grey">Серый</label>
      </li>
    </ul>
  </form>
</div>
<div id="filter-apply">Применить</div>
</div>
<div class="home__main-goods">
<div class="home__main-sorting">
  <p><span>2394</span> товаров</p>
  <div>
    <p><span>Цена:</span> По возрастанию</p>
  </div>
</div>
<div class="home__main-add-sorting">
  <p id="main-filters">Фильтры</p>
  <p>Сортировка</p>
</div>
<div class="home__main-goods-list">
  <div class="home__main-goods-card">
    <img
      src=${radiator1}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator2}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator3}
      alt="radiator"
    >
    <p>Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
        src=${radiator1}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator2}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator3}
      alt="radiator"
    >
    <p>Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator1}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator2}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator3}
      alt="radiator"
    >
    <p>Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator1}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator2}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator3}
      alt="radiator"
    >
    <p>Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator1}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator2}
      alt="radiator"
    >
    <p>Биметаллический радиатор Royal Thermo Indigo Super</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
  <div class="home__main-goods-card">
    <img
      src=${radiator3}
      alt="radiator"
    >
    <p>Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico</p>
    <div>
      <p>4 250</p>
      <img
        src=${busket}
        alt="busket"
      >
    </div>
  </div>
</div>
<div id="show_more">
  <p>Показать еще</p>
</div>
</div>
<div class="home__main-text">
<p>Длинный или короткий заголовок SEO текста</p>
<p>Интернет-магазин автоматической водосберегающей сантехники и дизайн радиаторов отопления Сантехническое и отопительное оборудование - основные продукты интернет-магазина "Экон Урфо".</p>
<p>На сайте urfoecon.ru, вы можете выбрать и купить автоматическую водосберегающую сантехнику и дизайн радиаторы отопления. На сайте urfoecon.ru, вы можете выбрать: смесители, душевые, смывные устройства для унитазов и писсуаров, а так же дополнительные товары: сушилки для рук, дозаторы мыла, фены для волос, держатели туалетной бумаги, ведра и другое.</p>
<p>Преимущества автоматической водосберегающей сантехники — экономия денег и воды! Результат будет заметен с первого месяца установки. Обратитесь к нашим специалистам и узнайте вашу выгоду при использовании автоматической водосберегающей сантехники. Звоните или оставляйте заявку на расчет.</p>

<p>Подзаголовок внутри текста</p>
<p>На сайте urfoecon.ru, вы можете выбрать красивые современные модели радиаторов отопления Европейских и Российских производителей. Радиаторы представленные в каталоге,изготовлены из прочных материалов: сталь, алюминий и биметалл. Мы уверены в качестве нашей продукции и предоставляем гарантию до 25 лет на радиаторы отопления. В нашем ассортименте: водяные и электрические радиаторы, высокие, средние и низкие, узкие и широкие, трубчатые и панельные модели, стандартные белые, черные, бежевые и любые цвета по шкале <abbr>RAL</abbr>.</p>
<p>Обратитесь к нашим специалистам и подберите радиаторы, которые гармонично впишутся в ваш интерьер и будут эффективно обогревать ваш дом. Звоните или оставляйте заявку на расчет.</p>
</div>`;

export default heatingMarkup;