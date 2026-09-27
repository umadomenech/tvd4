const FAVORITES_KEY = 'tvd-favorites';

/* =========================================================
   DATOS DE TEMPORADAS
========================================================= */

const SEASON_DATA = {
  'temporada-1': {
    title: 'Temporada 1',
    image: 'imagenes/Temporadas/1 temp.jpg',
    description: 'Elena Gilbert descubre un secreto oscuro en Mystic Falls cuando se enamora de Stefan Salvatore y se enfrenta al misterio de los vampiros que habitan la ciudad.'
  },

  'temporada-2': {
    title: 'Temporada 2',
    image: 'imagenes/Temporadas/2 temp.jpg',
    description: 'Aparece el peligroso Klaus y la historia se complica con traiciones, nuevos enemigos y la lucha por proteger a los seres queridos frente a un fin inminente.'
  },

  'temporada-3': {
    title: 'Temporada 3',
    image: 'imagenes/Temporadas/3 temp.jpg',
    description: 'Elena y sus amigos enfrentan los efectos del sacrificio, al tiempo que las decisiones del pasado regresan para cambiar el futuro de Mystic Falls y sus relaciones.'
  },

  'temporada-4': {
    title: 'Temporada 4',
    image: 'imagenes/Temporadas/4 temp.jpg',
    description: 'La llegada de los Originales altera todo el equilibrio del pueblo, mientras Elena busca respuestas sobre su destino y las consecuencias del amor verdadero.'
  },

  'temporada-5': {
    title: 'Temporada 5',
    image: 'imagenes/Temporadas/5 temp.jpg',
    description: 'Elena despierta en una dimensión cercana a la muerte y debe volver a la realidad mientras sus seres queridos viven el dolor de su ausencia y la amenaza del misterio.'
  },

  'temporada-6': {
    title: 'Temporada 6',
    image: 'imagenes/Temporadas/6 temp.jpg',
    description: 'En un nuevo comienzo, los protagonistas intentan seguir adelante mientras un antiguo enemigo reaparece y los secretos del pueblo vuelven a abrir heridas del pasado.'
  },

  'temporada-7': {
    title: 'Temporada 7',
    image: 'imagenes/Temporadas/7 temp.jpg',
    description: 'El conflicto entre vampiros, brujas y una nueva amenaza se intensifica, y cada elección de los personajes tendrá un costo muy alto para la comunidad.'
  },

  'temporada-8': {
    title: 'Temporada 8',
    image: 'imagenes/Temporadas/8 temp.jpg',
    description: 'La última temporada reúne a los personajes en una batalla final por la supervivencia, el amor y la verdad, cerrando un capítulo épico de Mystic Falls.'
  }
};


/* =========================================================
   PERSONAJES PRINCIPALES
========================================================= */

const PRINCIPAL_CHARACTERS = [
  {
    id: 'elena-gilbert',
    characterName: 'ELENA GILBERT',
    characterRole: 'Doppelgänger / Vampira',
    characterImage: 'imagenes/personajes principales/Elena gilbert.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Elena es una joven de Mystic Falls que intenta reconstruir su vida después de perder a sus padres en un accidente. Todo cambia cuando conoce a Stefan Salvatore y descubre que él es un vampiro. A partir de ese momento queda involucrada en un mundo sobrenatural lleno de vampiros, brujas y hombres lobo. Es empática, valiente y muy protectora con sus seres queridos, incluso cuando eso significa ponerse en peligro.',
    actorName: 'NINA DOBREV',
    actorType: 'ACTRIZ',
    actorImage: 'imagenes/personajes principales/Nina d.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Nina Dobrev fue la encargada de darle vida tanto a Elena Gilbert como a Katherine Pierce, dos personajes completamente opuestos. Su interpretación le permitió mostrar diferentes facetas a lo largo de la serie, desde la Elena sensible y protectora hasta la personalidad manipuladora y desafiante de Katherine. Su trabajo en The Vampire Diaries fue el papel que la convirtió en una figura reconocida internacionalmente.'
  },

  {
    id: 'damon-salvatore',
    characterName: 'DAMON SALVATORE',
    characterRole: 'Vampiro',
    characterImage: 'imagenes/personajes principales/Damon.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Damon es el hermano mayor de Stefan y uno de los vampiros más poderosos de Mystic Falls. Al principio se presenta como una persona impulsiva, sarcástica y aparentemente indiferente a los demás. Sin embargo, detrás de esa personalidad existe un personaje mucho más vulnerable, marcado por su pasado y por la relación complicada con su hermano. A medida que avanza la historia, Damon demuestra que es capaz de cambiar y de arriesgarlo todo por las personas que ama.',
    actorName: 'IAN SOMERHALDER',
    actorType: 'ACTOR',
    actorImage: 'imagenes/personajes principales/Ian.jpg',
    actorImagePosition: 'center 18%',
    actorDescription: 'Ian Somerhalder convirtió a Damon en uno de los personajes más populares de la serie gracias a su combinación de sarcasmo, humor y vulnerabilidad. Su interpretación permitió mostrar la evolución de Damon, que comienza como un vampiro impulsivo y cruel y termina enfrentándose constantemente a sus propios conflictos. Somerhalder también dirigió varios episodios de la serie durante sus ocho temporadas.'
  },

  {
    id: 'stefan-salvatore',
    characterName: 'STEFAN SALVATORE',
    characterRole: 'Vampiro',
    characterImage: 'imagenes/personajes principales/stefan.jpg',
    characterImagePosition: 'center 12%',
    characterDescription: 'Stefan es el hermano menor de Damon y uno de los primeros vampiros que Elena conoce. A diferencia de su hermano, intenta llevar una vida tranquila y controlar su necesidad de sangre para no lastimar a los demás. Es sensible, protector y muy comprometido con quienes quiere, aunque su pasado como vampiro y su dificultad para controlar su lado más oscuro lo persiguen constantemente. Su historia está marcada por su relación con Elena, su vínculo con Damon y su lucha por conservar su humanidad.',
    actorName: 'PAUL WESLEY',
    actorType: 'ACTOR',
    actorImage: 'imagenes/personajes principales/Paul.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Paul Wesley interpretó a Stefan y también a su versión más oscura, conocida como “Ripper Stefan”. Esta dualidad permitió que el actor mostrara dos lados muy diferentes del mismo personaje: el vampiro tranquilo y protector y aquel que pierde el control frente a su necesidad de sangre. Además de actuar, Wesley dirigió varios episodios de la serie.'
  },

  {
    id: 'bonnie-bennett',
    characterName: 'BONNIE BENNETT',
    characterRole: 'Bruja',
    characterImage: 'imagenes/personajes principales/Bonnie.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Bonnie es una joven bruja descendiente de una antigua familia con una importante historia relacionada con la magia. Al principio descubre sus poderes de manera inesperada y debe aprender a controlarlos mientras intenta proteger a sus amigos. Es una de las personas más leales del grupo y muchas veces está dispuesta a sacrificarse por los demás. A lo largo de la serie desarrolla sus habilidades y se convierte en una de las brujas más poderosas del universo de The Vampire Diaries.',
    actorName: 'KAT GRAHAM',
    actorType: 'ACTRIZ',
    actorImage: 'imagenes/personajes principales/Kat.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Kat Graham interpretó a Bonnie durante las ocho temporadas, acompañando una de las evoluciones más importantes de la serie. Su personaje comienza descubriendo poco a poco sus poderes y termina convirtiéndose en una de las brujas más poderosas del universo de The Vampire Diaries. Graham también incorporó su experiencia como cantante y bailarina a su carrera artística, desarrollándose en diferentes áreas del entretenimiento.'
  },

  {
    id: 'caroline-forbes',
    characterName: 'CAROLINE FORBES',
    characterRole: 'Vampira',
    characterImage: 'imagenes/personajes principales/Caroline.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Caroline comienza siendo una adolescente insegura, competitiva y muy preocupada por la opinión de los demás. Después de convertirse en vampira, descubre nuevas capacidades y comienza a desarrollar una personalidad mucho más segura, independiente y decidida. A pesar de atravesar numerosas pérdidas y situaciones difíciles, mantiene su capacidad para preocuparse por los demás. Con el tiempo se convierte en una de las personas más fuertes y protectoras de Mystic Falls.',
    actorName: 'CANDICE KING',
    actorType: 'ACTRIZ',
    actorImage: 'imagenes/personajes principales/Cadnice.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Candice King fue clave para mostrar la transformación de Caroline a lo largo de la historia. La actriz logró acompañar el cambio del personaje desde una adolescente insegura hasta una mujer independiente, decidida y capaz de enfrentarse a situaciones sobrenaturales. Caroline terminó convirtiéndose en una de las figuras centrales de la serie y posteriormente apareció también en The Originals y Legacies.'
  },

  {
    id: 'klaus-mikaelson',
    characterName: 'KLAUS MIKAELSON',
    characterRole: 'Vampiro Original / Híbrido',
    characterImage: 'imagenes/personajes principales/Klaus.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Klaus es uno de los vampiros originales y el primer híbrido de vampiro y hombre lobo. Es extremadamente poderoso, inteligente y manipulador, y durante gran parte de la historia representa una de las mayores amenazas para los protagonistas. Sin embargo, detrás de su comportamiento cruel existe una profunda necesidad de sentirse querido y aceptado por su familia. Su obsesión por proteger a sus hermanos y construir su propia familia muestra un lado mucho más vulnerable del personaje.',
    actorName: 'JOSEPH MORGAN',
    actorType: 'ACTOR',
    actorImage: 'imagenes/personajes principales/Joseph.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Joseph Morgan construyó a Klaus como uno de los grandes antagonistas de The Vampire Diaries, combinando su lado amenazante con momentos de vulnerabilidad. La popularidad del personaje fue tan grande que Klaus pasó de ser un enemigo de los protagonistas a convertirse en el personaje principal de The Originals. Morgan volvió a interpretar al personaje durante las cinco temporadas de ese spin-off.'
  },

  {
    id: 'katherine-pierce',
    characterName: 'KATHERINE PIERCE',
    characterRole: 'Doppelgänger / Vampira',
    characterImage: 'imagenes/personajes principales/Katherine.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Katherine es una vampira que ha pasado siglos escapando de quienes intentaban capturarla o matarla. Es extremadamente inteligente, manipuladora y capaz de utilizar a otras personas para conseguir lo que quiere. A diferencia de Elena, Katherine suele priorizar su propia supervivencia y tiene una personalidad mucho más desafiante. Su pasado está conectado con los hermanos Salvatore y es responsable de algunos de los conflictos más importantes de la historia.',
    actorName: 'NINA DOBREV',
    actorType: 'ACTRIZ',
    actorImage: 'imagenes/personajes principales/Nina d.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Interpretar a Katherine fue uno de los mayores desafíos de Nina Dobrev, ya que debía diferenciarla completamente de Elena a pesar de tratarse de dos personajes físicamente idénticos. Katherine se caracteriza por su seguridad, ironía y capacidad para manipular a los demás, permitiendo que Dobrev explorara un registro mucho más oscuro y desafiante que el de Elena.'
  },

  {
    id: 'alaric-saltzman',
    characterName: 'ALARIC SALTZMAN',
    characterRole: 'Humano / Cazador de vampiros',
    characterImage: 'imagenes/personajes principales/Alaric.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Alaric llega a Mystic Falls buscando respuestas sobre la muerte de su esposa, sin saber que el pueblo está profundamente relacionado con el mundo sobrenatural. Con el tiempo descubre la existencia de los vampiros y se convierte en uno de sus principales enemigos y cazadores. También desarrolla un vínculo muy cercano con Elena y Jeremy, convirtiéndose en una figura paterna para ellos. Su historia está marcada por numerosas pérdidas y por su constante lucha para proteger a su familia y amigos.',
    actorName: 'MATT DAVIS',
    actorType: 'ACTOR',
    actorImage: 'imagenes/personajes principales/Mat davis.jpg',
    actorImagePosition: 'center 12%',
    actorDescription: 'Matt Davis interpretó a Alaric como un personaje que pasa de ser un profesor con un pasado misterioso a convertirse en uno de los principales protectores de los jóvenes de Mystic Falls. Su relación con Elena y Jeremy le da un importante papel de figura paterna dentro del grupo. Davis continuó interpretando a Alaric en Legacies, donde el personaje adquiere todavía más protagonismo.'
  },

  {
    id: 'jeremy-gilbert',
    characterName: 'JEREMY GILBERT',
    characterRole: 'Humano / Cazador',
    characterImage: 'imagenes/personajes principales/Jeremy.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Jeremy es el hermano menor de Elena y comienza la serie como un adolescente que intenta superar la pérdida de sus padres. Su vida cambia cuando descubre que los vampiros y otras criaturas sobrenaturales realmente existen. A medida que se involucra cada vez más en estos conflictos, desarrolla habilidades especiales y termina convirtiéndose en un cazador de vampiros. Su relación con Elena y su deseo de proteger a las personas que quiere son fundamentales para su evolución.',
    actorName: 'STEVEN R. MCQUEEN',
    actorType: 'ACTOR',
    actorImage: 'imagenes/personajes principales/Steven R. McQueen.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Steven R. McQueen acompañó la evolución de Jeremy desde un adolescente que intenta superar la pérdida de sus padres hasta convertirse en un cazador de vampiros. Su personaje atraviesa algunas de las situaciones más difíciles de la serie y su relación con Elena es una de las conexiones familiares más importantes de la historia.'
  },

  {
    id: 'tyler-lockwood',
    characterName: 'TYLER LOCKWOOD',
    characterRole: 'Hombre lobo / Híbrido',
    characterImage: 'imagenes/personajes principales/Tyler.jpg',
    characterImagePosition: 'center top',
    characterDescription: 'Tyler pertenece a una de las familias más antiguas de Mystic Falls y descubre que lleva una maldición de hombre lobo. Su transformación lo obliga a enfrentarse a una parte de sí mismo que no puede controlar fácilmente. Con el tiempo aprende a aceptar su naturaleza y termina convirtiéndose también en un híbrido. Su evolución está marcada por sus relaciones, sus conflictos familiares y su decisión de luchar contra quienes amenazan a las personas que quiere.',
    actorName: 'MICHAEL TREVINO',
    actorType: 'ACTOR',
    actorImage: 'imagenes/personajes principales/Micheal.jpg',
    actorImagePosition: 'center top',
    actorDescription: 'Michael Trevino interpretó la transformación de Tyler desde un adolescente impulsivo hasta un personaje que debe aprender a controlar una naturaleza que no eligió. Su historia como hombre lobo y posteriormente como híbrido lo conecta directamente con algunos de los conflictos sobrenaturales más importantes de la serie. Además, Tyler fue uno de los personajes que permitió explorar más profundamente el universo de los hombres lobo dentro de The Vampire Diaries.'
  }
];


/* =========================================================
   FAVORITOS
   ========================================================= */

/*
   El sistema guarda un único objeto en localStorage:

   {
      seasons: [],
      characters: []
   }

   Así no se mezclan temporadas y personajes.
*/

function getFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY));

    // Compatibilidad con el sistema viejo de temporadas.
    if (Array.isArray(stored)) {
      return {
        seasons: stored,
        characters: []
      };
    }

    if (stored && typeof stored === 'object') {
      return {
        seasons: Array.isArray(stored.seasons) ? stored.seasons : [],
        characters: Array.isArray(stored.characters) ? stored.characters : []
      };
    }

  } catch (error) {
    console.error('Error leyendo favoritos:', error);
  }

  return {
    seasons: [],
    characters: []
  };
}


function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}


function isFavorite(type, id) {
  const favorites = getFavorites();

  if (type === 'season') {
    return favorites.seasons.includes(id);
  }

  if (type === 'character') {
    return favorites.characters.includes(id);
  }

  return false;
}


function updateFavoriteButton(button, type, id, label) {
  if (!button) return;

  const active = isFavorite(type, id);

  button.textContent = active ? '★' : '☆';
  button.classList.toggle('is-active', active);
  button.setAttribute('aria-pressed', String(active));

  button.setAttribute(
    'aria-label',
    active
      ? `Quitar ${label} de favoritos`
      : `Agregar ${label} a favoritos`
  );
}


function toggleFavorite(type, id, label) {
  const favorites = getFavorites();

  const listName = type === 'season'
    ? 'seasons'
    : 'characters';

  const index = favorites[listName].indexOf(id);

  if (index !== -1) {
    favorites[listName].splice(index, 1);
  } else {
    favorites[listName].push(id);
  }

  saveFavorites(favorites);

  // Actualizar todas las estrellas correspondientes
  document
    .querySelectorAll(`[data-${type}-id="${id}"] .season-favorite`)
    .forEach((button) => {
      updateFavoriteButton(button, type, id, label);
    });

  // Si estamos en favoritos, volver a renderizar
  if (document.body.classList.contains('favorites-page')) {
    renderFavoritesPage();
  }
}


/* =========================================================
   FAVORITOS DE TEMPORADAS
========================================================= */

function setupSeasonFavorites() {
  const cards = document.querySelectorAll('.season-card');

  cards.forEach((card) => {
    const seasonId = card.dataset.seasonId;
    const button = card.querySelector('.season-favorite');

    if (!seasonId || !button) return;

    const label = `Temporada ${seasonId.replace('temporada-', '')}`;

    updateFavoriteButton(
      button,
      'season',
      seasonId,
      label
    );

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      toggleFavorite(
        'season',
        seasonId,
        label
      );
    });
  });
}


/* =========================================================
   FAVORITOS DE PERSONAJES
========================================================= */

function setupCharacterFavorites() {
  const cards = document.querySelectorAll('.pp-card');

  cards.forEach((card) => {
    const characterId = card.dataset.characterId;
    const button = card.querySelector('.character-favorite');

    if (!characterId || !button) return;

    const character = PRINCIPAL_CHARACTERS.find(
      (item) => item.id === characterId
    );

    if (!character) return;

    updateFavoriteButton(
      button,
      'character',
      characterId,
      character.characterName
    );

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      toggleFavorite(
        'character',
        characterId,
        character.characterName
      );
    });
  });
}


/* =========================================================
   PERSONAJES PRINCIPALES
========================================================= */

function getPrincipalCardContent(character, view) {

  if (view === 'actor') {
    return {
      image: character.actorImage,
      imagePosition: character.actorImagePosition || 'center top',
      name: character.actorName,
      role: character.actorType,
      description: character.actorDescription
    };
  }

  return {
    image: character.characterImage,
    imagePosition: character.characterImagePosition || 'center top',
    name: character.characterName,
    role: character.characterRole,
    description: character.characterDescription
  };
}


function updatePrincipalCard(card) {
  const characterId = card.dataset.characterId;

  const character = PRINCIPAL_CHARACTERS.find(
    (item) => item.id === characterId
  );

  if (!character) return;

  const view = card.dataset.view || 'character';
  const expanded = card.dataset.expanded === 'true';

  const content = getPrincipalCardContent(
    character,
    view
  );

  const image = card.querySelector('.pp-card-image');
  const name = card.querySelector('.pp-name');
  const role = card.querySelector('.pp-role');
  const description = card.querySelector('.pp-description');
  const moreButton = card.querySelector('.pp-toggle-more');
  const viewButton = card.querySelector('.pp-toggle-view');

  card.classList.add('is-transitioning');

  setTimeout(() => {

    if (image) {
      image.src = content.image;
      image.alt = content.name;
      image.style.objectPosition = content.imagePosition;
    }

    if (name) {
      name.textContent = content.name;
    }

    if (role) {
      role.textContent = content.role;
    }

    if (description) {
      description.textContent = content.description;
      description.classList.toggle(
        'is-expanded',
        expanded
      );
    }

    if (moreButton) {
      moreButton.textContent = expanded
        ? 'VER MENOS'
        : 'VER MÁS';

      moreButton.setAttribute(
        'aria-expanded',
        String(expanded)
      );
    }

    if (viewButton) {
      viewButton.textContent =
        view === 'character'
          ? `VER ${character.actorType}`
          : 'VER PERSONAJE';
    }

    card.classList.remove('is-transitioning');

  }, 170);
}


function togglePrincipalCardExpand(card) {
  const expanded =
    card.dataset.expanded === 'true';

  card.dataset.expanded =
    String(!expanded);

  updatePrincipalCard(card);
}


function togglePrincipalCardView(card) {

  const currentView =
    card.dataset.view || 'character';

  card.dataset.view =
    currentView === 'character'
      ? 'actor'
      : 'character';

  // Cuando cambiamos de personaje a actor
  // volvemos a contraer la descripción.
  card.dataset.expanded = 'false';

  updatePrincipalCard(card);
}


function renderPrincipalCharacterCards() {

  const list = document.getElementById('pp-list');

  if (!list) return;

  list.innerHTML = PRINCIPAL_CHARACTERS.map((character) => {

    const favorite = isFavorite(
      'character',
      character.id
    );

    return `
      <article
        class="pp-card"
        data-character-id="${character.id}"
        data-view="character"
        data-expanded="false"
      >

        <button
          class="season-favorite character-favorite ${favorite ? 'is-active' : ''}"
          type="button"
          data-character-id="${character.id}"
          aria-label="${favorite ? 'Quitar' : 'Agregar'} ${character.characterName} de favoritos"
          aria-pressed="${favorite}"
        >${favorite ? '★' : '☆'}</button>

        <div class="pp-card-image-wrap">

          <img
            class="pp-card-image"
            src="${character.characterImage}"
            alt="${character.characterName}"
            style="object-position: ${character.characterImagePosition || 'center top'};"
          >

        </div>

        <div class="pp-card-info">

          <div class="pp-card-copy">

            <h3 class="pp-name">
              ${character.characterName}
            </h3>

            <div class="pp-role">
              ${character.characterRole}
            </div>

            <p class="pp-description">
              ${character.characterDescription}
            </p>

          </div>

          <div class="pp-actions">

            <button
              class="pp-toggle pp-toggle-more"
              type="button"
              aria-expanded="false"
            >
              VER MÁS
            </button>

            <button
              class="pp-toggle pp-toggle-view"
              type="button"
            >
              VER ${character.actorType}
            </button>

          </div>

        </div>

      </article>
    `;

  }).join('');

  setupCharacterFavorites();

  // Botones VER MÁS
  list.querySelectorAll('.pp-card').forEach((card) => {

    const moreButton =
      card.querySelector('.pp-toggle-more');

    const viewButton =
      card.querySelector('.pp-toggle-view');

    if (moreButton) {
      moreButton.addEventListener(
        'click',
        () => {
          togglePrincipalCardExpand(card);
        }
      );
    }

    if (viewButton) {
      viewButton.addEventListener(
        'click',
        () => {
          togglePrincipalCardView(card);
        }
      );
    }

  });
}


/* =========================================================
   FAVORITOS.HTML
========================================================= */

function buildCharacterFavoriteCard(characterId) {

  const character =
    PRINCIPAL_CHARACTERS.find(
      (item) => item.id === characterId
    );

  if (!character) return '';

  return `
    <article
      class="pp-card favorites-character-card"
      data-character-id="${character.id}"
    >

      <button
        class="season-favorite character-favorite is-active"
        type="button"
        data-character-id="${character.id}"
        aria-label="Quitar ${character.characterName} de favoritos"
        aria-pressed="true"
      >★</button>

      <div class="pp-card-image-wrap">

        <img
          class="pp-card-image"
          src="${character.characterImage}"
          alt="${character.characterName}"
          style="object-position: ${character.characterImagePosition || 'center top'};"
        >

      </div>

      <div class="pp-card-info">

        <div class="pp-card-copy">

          <h3 class="pp-name">
            ${character.characterName}
          </h3>

          <div class="pp-role">
            ${character.characterRole}
          </div>

        </div>

      </div>

    </article>
  `;
}


function buildSeasonFavoriteCard(seasonId) {

  const season = SEASON_DATA[seasonId];

  if (!season) return '';

  return `
    <article
      class="season-card"
      data-season-id="${seasonId}"
    >

      <button
        class="season-favorite is-active"
        type="button"
        aria-label="Quitar ${season.title} de favoritos"
        aria-pressed="true"
      >★</button>

      <img
        class="season-poster"
        src="${season.image}"
        alt="${season.title}"
      >

      <div class="season-content">

        <h2 class="season-title">
          ${season.title}
        </h2>

        <p class="season-description">
          ${season.description}
        </p>

      </div>

    </article>
  `;
}


function renderFavoritesPage() {

  const list =
    document.getElementById('favorites-list');

  if (!list) return;

  const favorites = getFavorites();

  const characterFavorites =
    favorites.characters.filter((id) =>
      PRINCIPAL_CHARACTERS.some(
        (character) => character.id === id
      )
    );

  const seasonFavorites =
    favorites.seasons.filter(
      (id) => SEASON_DATA[id]
    );


  /* -------------------------
     PERSONAJES
  ------------------------- */

  const characterSection = `

    <section
      class="favorites-category"
      aria-labelledby="favorites-characters-title"
    >

      <h2
        id="favorites-characters-title"
        class="favorites-category-title"
      >
        PERSONAJES FAVORITOS
      </h2>

      ${
        characterFavorites.length
          ? `
            <div class="favorites-grid">
              ${characterFavorites
                .map(buildCharacterFavoriteCard)
                .join('')}
            </div>
          `
          : `
            <div class="favorites-empty favorites-empty-inline">
              <p>
                Todavía no tenés personajes favoritos.
              </p>
            </div>
          `
      }

    </section>
  `;


  /* -------------------------
     TEMPORADAS
  ------------------------- */

  const seasonSection = `

    <section
      class="favorites-category"
      aria-labelledby="favorites-seasons-title"
    >

      <h2
        id="favorites-seasons-title"
        class="favorites-category-title"
      >
        TEMPORADAS FAVORITAS
      </h2>

      ${
        seasonFavorites.length
          ? `
            <div class="favorites-grid">
              ${seasonFavorites
                .map(buildSeasonFavoriteCard)
                .join('')}
            </div>
          `
          : `
            <div class="favorites-empty favorites-empty-inline">
              <p>
                Todavía no tenés temporadas favoritas.
              </p>
            </div>
          `
      }

    </section>
  `;


  list.innerHTML =
    characterSection +
    seasonSection;


  /* -------------------------
     BOTONES DE PERSONAJES
  ------------------------- */

  list
    .querySelectorAll('.favorites-character-card')
    .forEach((card) => {

      const characterId =
        card.dataset.characterId;

      const button =
        card.querySelector('.character-favorite');

      const character =
        PRINCIPAL_CHARACTERS.find(
          (item) => item.id === characterId
        );

      if (!character || !button) return;

      updateFavoriteButton(
        button,
        'character',
        characterId,
        character.characterName
      );

      button.addEventListener(
        'click',
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          toggleFavorite(
            'character',
            characterId,
            character.characterName
          );

        }
      );

    });


  /* -------------------------
     BOTONES DE TEMPORADAS
  ------------------------- */

  list
    .querySelectorAll('.season-card')
    .forEach((card) => {

      const seasonId =
        card.dataset.seasonId;

      const button =
        card.querySelector('.season-favorite');

      if (!seasonId || !button) return;

      const label =
        `Temporada ${seasonId.replace(
          'temporada-',
          ''
        )}`;

      updateFavoriteButton(
        button,
        'season',
        seasonId,
        label
      );

      button.addEventListener(
        'click',
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          toggleFavorite(
            'season',
            seasonId,
            label
          );

        }
      );

    });
}


/* =========================================================
   BOTÓN GENERAL DE FAVORITOS DEL HEADER
========================================================= */

function setupFavoriteLinks() {

  document
    .querySelectorAll('.favorite-link')
    .forEach((button) => {

      button.addEventListener(
        'click',
        () => {

          const target =
            button.dataset.link ||
            'favoritos.html';

          window.location.href = target;

        }
      );

    });
}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    // Año automático del footer
    const year =
      document.getElementById('year');

    if (year) {
      year.textContent =
        new Date().getFullYear();
    }


    // Personajes principales
    if (
      document.getElementById('pp-list')
    ) {
      renderPrincipalCharacterCards();
    }


    // Temporadas
    if (
      document.querySelector('.season-card')
    ) {
      setupSeasonFavorites();
    }


    // Botones del header/footer
    setupFavoriteLinks();


    // Página favoritos
    if (
      document.body.classList.contains(
        'favorites-page'
      )
    ) {
      renderFavoritesPage();
    }

  }
);