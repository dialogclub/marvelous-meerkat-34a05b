"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Language = "uk" | "ru" | "en";

const copy = {
  uk: {
    nav: ["Зустріч", "Питання", "Формат", "Принципи", "Архів"],
    join: "Долучитися",
    soon: "Незабаром · Vision Cinema",
    type: "Синемалогія",
    title: "Револьвер",
    subtitle: "Гангстерський трилер, який виявляється партією проти самого себе.",
    intro: "Ґай Річі зняв кіно, яке британська критика назвала провалом, а глядачі — головоломкою, яку хочеться пройти ще раз. Сім років одиночної камери, борг, який неможливо повернути, і голос у голові, що дає поради. Хто тут насправді грає — і проти кого?",
    meta: ["Дата й час — незабаром", "Троїцька площа, 3", "Vision Cinema"],
    cta: "Хочу на зустріч",
    scroll: "Дізнатися більше",
    quote: "Найсильніший суперник — той, кого ти щоранку приймаєш за себе.",
    contextEyebrow: "Гра, его, ми",
    contextTitle: "Давня гра.\nЗнайомий суперник.",
    contextText: "Джейк Ґрін виходить після семи років одиночної камери з формулою виграшу в будь-якій грі та бажанням помститися. Але замість помсти отримує двох кредиторів, які забирають його гроші, його правила і врешті — його впевненість у тому, хто він. Річі перетворює гангстерський сюжет на притчу про его, і саме за це фільм або люблять, або не пробачають.",
    contextNote: "Ми не розгадуватимемо фільм як ребус із єдиною відповіддю. Нас цікавить, чому історія про шахрая так точно описує розмову кожного з нас із самим собою.",
    questionsEyebrow: "Про що говоритимемо",
    questionsTitle: "П’ять входів\nу фільм",
    questions: [
      ["Ворог усередині", "Фільм стверджує, що найнебезпечніший суперник живе в нас самих. Де в житті ми впізнаємо цей голос?"],
      ["Правила гри", "Формула Джейка працює в шахах, картах і бізнесі. Чому вона перестає працювати, коли гра йде про нас самих?"],
      ["Ціна гордості", "Страх, жадібність, гордість: що з цього рухає героєм — і чим ми платимо за власні «непрощення»?"],
      ["Мова головоломки", "Ліфти, дзеркала, шахи, номери поверхів: як Річі перетворює трилер на схему свідомості?"],
      ["Наша партія", "Проти кого граємо ми — і в який момент можна встати з-за столу?"],
    ],
    lensesEyebrow: "Оптики розмови",
    lensesTitle: "Дивитися\nщедріше",
    lensesIntro: "Складний фільм не потребує вироку. Він потребує кількох способів бачити — одночасно.",
    lenses: [
      ["Філософія", "Свобода і залежність від правил, ілюзія контролю, межа між «я» і тим, хто говорить від мого імені."],
      ["Семіотика", "Замкнений простір, гра, борг, дзеркало: знаки, з яких складено фільм, і те, як вони обертаються проти героя."],
      ["Психологія", "Его і тінь, страх утрати, гнів як паливо і момент, коли людина відпускає потребу перемогти."],
    ],
    formatEyebrow: "Як це відбувається",
    formatTitle: "Не лекція.\nНе рецензія.",
    formatText: "Це простір, де кожен може принести свій погляд, посперечатися без бажання перемогти й знайти несподівані сенси разом з іншими.",
    steps: [["01", "Дивимося", "Уважно до образу й до власної реакції."], ["02", "Витримуємо паузу", "Не поспішаємо перетворювати досвід на висновок."], ["03", "Говоримо", "Від першої особи — без діагнозів і остаточних істин."], ["04", "Слухаємо", "Чужий погляд не заперечує наш, а розширює його."]],
    hostsEyebrow: "Ведучі кола",
    hostsTitle: "Ті, хто\nтримає коло",
    hosts: [["Снежана", "ведуча кола"], ["Антон", "ведучий кола"]],
    valuesEyebrow: "Етика діалогу",
    valuesTitle: "Кожен голос\nзмінює картину.",
    values: [["Цікавість замість оцінки", "Перш ніж заперечити, ставимо ще одне питання."], ["Турбота замість змагання", "Не доводимо, хто зрозумів фільм краще."], ["Щедрість інтерпретації", "Залишаємо місце для складності, тиші й таємниці."]],
    finalEyebrow: "Наступна зустріч",
    finalTitle: "«Револьвер» не пояснює себе — і саме тому не відпускає.",
    finalText: "Приходь. Подивимося, посперечаємося і спробуємо зрозуміти, з ким ми насправді граємо, коли думаємо, що граємо з іншими.",
    archiveEyebrow: "Попередні зустрічі",
    archiveTitle: "Що ми вже\nобговорили",
    archiveIntro: "Кожна розмова залишає після себе питання, яке продовжує працювати. Ось три, з якими ми ще не попрощалися.",
    archive: [
      ["Люк Бессон · 2014", "Люсі", "Міф про 10 % мозку, знання без досвіду й час як єдина міра існування.", "Що зникає з людини першим, коли зникають страх, біль і сумнів?"],
      ["Девід Фінчер · 1999", "Бійцівський клуб", "Споживання, тінь, чоловіча лють і ціна бунту, спрямованого на самого себе.", "Проти кого насправді бунт, якщо суперник — ти сам?"],
      ["Пітер Вір · 1989", "Товариство мертвих поетів", "Покликання і послух, ціна власного голосу, вчитель як провокація свободи.", "Чи можна навчити свободи — і хто платить за цей урок?"],
    ],
    addressLabel: "Місце",
    dateLabel: "Коли",
    contactEyebrow: "Організаційні питання",
    contactName: "Вероніка Кудлай",
    contactRole: "адміністраторка клубу",
    contactText: "Запис, дати, місця за столом і всі організаційні питання — до неї.",
    footer: "Кіно як простір спільного мислення",
    rights: "Дивитися — означає співтворити",
  },
  ru: {
    nav: ["Встреча", "Вопросы", "Формат", "Принципы", "Архив"],
    join: "Присоединиться",
    soon: "Скоро · Vision Cinema",
    type: "Синемалогия",
    title: "Револьвер",
    subtitle: "Гангстерский триллер, который оказывается партией против самого себя.",
    intro: "Гай Ричи снял кино, которое британская критика назвала провалом, а зрители — головоломкой, которую хочется пройти заново. Семь лет одиночной камеры, долг, который невозможно вернуть, и голос в голове, дающий советы. Кто здесь на самом деле играет — и против кого?",
    meta: ["Дата и время — скоро", "Троицкая площадь, 3", "Vision Cinema"],
    cta: "Хочу на встречу",
    scroll: "Узнать больше",
    quote: "Самый сильный соперник — тот, кого ты каждое утро принимаешь за себя.",
    contextEyebrow: "Игра, эго, мы",
    contextTitle: "Давняя игра.\nЗнакомый соперник.",
    contextText: "Джейк Грин выходит после семи лет одиночной камеры с формулой выигрыша в любой игре и желанием отомстить. Но вместо мести получает двух кредиторов, которые забирают его деньги, его правила и в конце концов — его уверенность в том, кто он. Ричи превращает гангстерский сюжет в притчу об эго, и именно за это фильм либо любят, либо не прощают.",
    contextNote: "Мы не будем разгадывать фильм как ребус с единственным ответом. Нам интересно, почему история о мошеннике так точно описывает разговор каждого из нас с самим собой.",
    questionsEyebrow: "О чём будем говорить",
    questionsTitle: "Пять входов\nв фильм",
    questions: [
      ["Враг внутри", "Фильм утверждает, что самый опасный соперник живёт в нас самих. Где в жизни мы узнаём этот голос?"],
      ["Правила игры", "Формула Джейка работает в шахматах, картах и бизнесе. Почему она перестаёт работать, когда игра идёт о нас самих?"],
      ["Цена гордости", "Страх, жадность, гордость: что из этого движет героем — и чем мы платим за собственные «непрощения»?"],
      ["Язык головоломки", "Лифты, зеркала, шахматы, номера этажей: как Ричи превращает триллер в схему сознания?"],
      ["Наша партия", "Против кого играем мы — и в какой момент можно встать из-за стола?"],
    ],
    lensesEyebrow: "Оптики разговора",
    lensesTitle: "Смотреть\nщедрее",
    lensesIntro: "Сложному фильму не нужен приговор. Ему нужны несколько способов видеть — одновременно.",
    lenses: [
      ["Философия", "Свобода и зависимость от правил, иллюзия контроля, граница между «я» и тем, кто говорит от моего имени."],
      ["Семиотика", "Замкнутое пространство, игра, долг, зеркало: знаки, из которых собран фильм, и то, как они оборачиваются против героя."],
      ["Психология", "Эго и тень, страх потери, гнев как топливо и момент, когда человек отпускает потребность победить."],
    ],
    formatEyebrow: "Как это происходит",
    formatTitle: "Не лекция.\nНе рецензия.",
    formatText: "Это пространство, где каждый может предложить свой взгляд, поспорить без желания победить и вместе с другими найти неожиданные смыслы.",
    steps: [["01", "Смотрим", "Внимательно к образу и собственной реакции."], ["02", "Выдерживаем паузу", "Не спешим превращать опыт в вывод."], ["03", "Говорим", "От первого лица — без диагнозов и окончательных истин."], ["04", "Слушаем", "Чужой взгляд не отменяет наш, а расширяет его."]],
    hostsEyebrow: "Ведущие круга",
    hostsTitle: "Те, кто\nдержит круг",
    hosts: [["Снежана", "ведущая круга"], ["Антон", "ведущий круга"]],
    valuesEyebrow: "Этика диалога",
    valuesTitle: "Каждый голос\nменяет картину.",
    values: [["Любопытство вместо оценки", "Прежде чем возразить, задаём ещё один вопрос."], ["Забота вместо соревнования", "Не доказываем, кто понял фильм лучше."], ["Щедрость интерпретации", "Оставляем место для сложности, тишины и тайны."]],
    finalEyebrow: "Следующая встреча",
    finalTitle: "«Револьвер» не объясняет себя — и именно поэтому не отпускает.",
    finalText: "Приходи. Посмотрим, поспорим и попробуем понять, с кем мы на самом деле играем, когда думаем, что играем с другими.",
    archiveEyebrow: "Предыдущие встречи",
    archiveTitle: "Что мы уже\nобсудили",
    archiveIntro: "Каждый разговор оставляет после себя вопрос, который продолжает работать. Вот три, с которыми мы ещё не попрощались.",
    archive: [
      ["Люк Бессон · 2014", "Люси", "Миф о 10 % мозга, знание без опыта и время как единственная мера существования.", "Что исчезает из человека первым, когда исчезают страх, боль и сомнение?"],
      ["Дэвид Финчер · 1999", "Бойцовский клуб", "Потребление, тень, мужская ярость и цена бунта, направленного на самого себя.", "Против кого на самом деле бунт, если соперник — ты сам?"],
      ["Питер Уир · 1989", "Общество мёртвых поэтов", "Призвание и послушание, цена собственного голоса, учитель как провокация свободы.", "Можно ли научить свободе — и кто платит за этот урок?"],
    ],
    addressLabel: "Место",
    dateLabel: "Когда",
    contactEyebrow: "Организационные вопросы",
    contactName: "Вероника Кудлай",
    contactRole: "администратор клуба",
    contactText: "Запись, даты, места за столом и все организационные вопросы — к ней.",
    footer: "Кино как пространство совместного мышления",
    rights: "Смотреть — значит участвовать в создании",
  },
  en: {
    nav: ["Gathering", "Questions", "Format", "Principles", "Archive"],
    join: "Join us",
    soon: "Coming soon · Vision Cinema",
    type: "Cinemalogy",
    title: "Revolver",
    subtitle: "A gangster thriller that turns out to be a game against yourself.",
    intro: "Guy Ritchie made a film British critics called a failure and audiences call a puzzle worth replaying. Seven years in solitary, a debt that cannot be repaid, and a voice in the head offering advice. Who is really playing here — and against whom?",
    meta: ["Date & time — coming soon", "3 Troitska Square", "Vision Cinema"],
    cta: "Save me a place",
    scroll: "Discover more",
    quote: "The strongest opponent is the one you mistake for yourself every morning.",
    contextEyebrow: "Game, ego, us",
    contextTitle: "An old game.\nA familiar opponent.",
    contextText: "Jake Green walks out after seven years in solitary with a formula for winning any game and a hunger for revenge. Instead of revenge he gets two loan sharks who take his money, his rules and, eventually, his certainty about who he is. Ritchie turns a gangster plot into a parable about the ego — which is exactly why the film is either loved or never forgiven.",
    contextNote: "We will not solve the film like a riddle with a single answer. We are interested in why a story about a con man describes so precisely the conversation each of us has with ourselves.",
    questionsEyebrow: "What we will discuss",
    questionsTitle: "Five ways\ninto the film",
    questions: [
      ["The enemy within", "The film insists the most dangerous opponent lives inside us. Where in our lives do we recognise that voice?"],
      ["The rules of the game", "Jake’s formula works in chess, cards and business. Why does it stop working when the game is about ourselves?"],
      ["The price of pride", "Fear, greed, pride: which of them drives the hero — and what do we pay for our own refusals to forgive?"],
      ["The language of the puzzle", "Lifts, mirrors, chess, floor numbers: how does Ritchie turn a thriller into a diagram of consciousness?"],
      ["Our own game", "Who are we really playing against — and at what point can we leave the table?"],
    ],
    lensesEyebrow: "Ways of seeing",
    lensesTitle: "Look more\ngenerously",
    lensesIntro: "A difficult film does not need a verdict. It needs several ways of seeing — held together.",
    lenses: [
      ["Philosophy", "Freedom and dependence on rules, the illusion of control, the line between ‘I’ and whoever speaks in my name."],
      ["Semiotics", "Enclosed space, the game, the debt, the mirror: the signs the film is built from, and how they turn against the hero."],
      ["Psychology", "Ego and shadow, fear of loss, anger as fuel, and the moment a person lets go of the need to win."],
    ],
    formatEyebrow: "How it works",
    formatTitle: "Not a lecture.\nNot a review.",
    formatText: "A space where everyone can bring a point of view, disagree without needing to win, and make unexpected meaning with others.",
    steps: [["01", "We watch", "Attentive to the image and our own response."], ["02", "We pause", "We do not rush to turn experience into a conclusion."], ["03", "We speak", "In the first person — without diagnoses or final truths."], ["04", "We listen", "Another view does not cancel ours; it expands it."]],
    hostsEyebrow: "Circle facilitators",
    hostsTitle: "Those who\nhold the circle",
    hosts: [["Snezhana", "circle facilitator"], ["Anton", "circle facilitator"]],
    valuesEyebrow: "The ethics of dialogue",
    valuesTitle: "Every voice\nchanges the picture.",
    values: [["Curiosity over judgement", "Before disagreeing, we ask one more question."], ["Care over competition", "No one needs to prove they understood the film best."], ["Generous interpretation", "We leave room for complexity, silence and mystery."]],
    finalEyebrow: "Our next gathering",
    finalTitle: "Revolver never explains itself — which is exactly why it will not let go.",
    finalText: "Come along. We will watch, disagree, and try to understand who we are really playing against when we think we are playing others.",
    archiveEyebrow: "Previous gatherings",
    archiveTitle: "What we have\nalready discussed",
    archiveIntro: "Every conversation leaves behind a question that keeps working. Here are three we have not said goodbye to yet.",
    archive: [
      ["Luc Besson · 2014", "Lucy", "The 10% brain myth, knowledge without experience, and time as the only measure of existence.", "What leaves a person first when fear, pain and doubt leave?"],
      ["David Fincher · 1999", "Fight Club", "Consumption, the shadow, male rage, and the price of a rebellion aimed at oneself.", "Who is the rebellion really against, if the opponent is you?"],
      ["Peter Weir · 1989", "Dead Poets Society", "Vocation and obedience, the cost of one’s own voice, the teacher as a provocation to freedom.", "Can freedom be taught — and who pays for the lesson?"],
    ],
    addressLabel: "Place",
    dateLabel: "When",
    contactEyebrow: "Planning and booking",
    contactName: "Veronika Kudlai",
    contactRole: "club administrator",
    contactText: "Contact her about registration, dates, seats at the table, and any practical questions.",
    footer: "Cinema as a space for thinking together",
    rights: "To watch is to co-create",
  },
};

export default function CinemaVision({ initialLang = "uk" }: { initialLang?: Language }) {
  const lang = initialLang;
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const lines = (value: string) => value.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>);

  return <main id="top">
    <header className="siteHeader shell">
      <Link className="brand" href={lang === "uk" ? "/" : `/${lang}`}><b>cinema</b><span>.vision</span></Link>
      <nav aria-label={{ uk: "Головна навігація", ru: "Главная навигация", en: "Main navigation" }[lang]}>
        <a href="#gathering">{t.nav[0]}</a><a href="#questions">{t.nav[1]}</a><a href="#format">{t.nav[2]}</a><a href="#principles">{t.nav[3]}</a><a href="#archive">{t.nav[4]}</a>
      </nav>
      <div className="headerTools"><div className="languages" aria-label={{ uk: "Мова", ru: "Язык", en: "Language" }[lang]}><Link className={lang === "uk" ? "active" : ""} aria-current={lang === "uk" ? "page" : undefined} href="/">UA</Link><span>/</span><Link className={lang === "ru" ? "active" : ""} aria-current={lang === "ru" ? "page" : undefined} href="/ru">RU</Link><span>/</span><Link className={lang === "en" ? "active" : ""} aria-current={lang === "en" ? "page" : undefined} href="/en">EN</Link></div><a className="smallCta" href="#visit">{t.join}<span>↗</span></a></div>
    </header>

    <section className="odysseyHero shell" id="gathering">
      <div className="heroKicker"><i />{t.soon}</div>
      <div className="heroGrid">
        <div className="heroTitle"><span>{t.type}</span><h1>{t.title}</h1></div>
        <div className="sunMark" aria-hidden="true"><div className="orbit"/><div className="sun"/><span>ἐγώ</span></div>
      </div>
      <div className="heroFoot">
        <div className="heroCopy"><h2>{t.subtitle}</h2><p>{t.intro}</p></div>
        <div className="heroMeta">{t.meta.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}<a href="https://t.me/kudlai_veronika" target="_blank" rel="noreferrer">{t.cta}<span>↗</span></a></div>
      </div>
      <a className="scrollCue" href="#myth"><span>↓</span>{t.scroll}</a>
    </section>

    <section className="quoteBand"><p>“{t.quote}”</p></section>

    <section className="context shell" id="myth">
      <div className="sectionLabel">01 — {t.contextEyebrow}</div>
      <div className="contextBody"><h2>{lines(t.contextTitle)}</h2><div><p>{t.contextText}</p><aside>{t.contextNote}</aside></div></div>
    </section>

    <section className="questions" id="questions"><div className="shell">
      <div className="sectionLabel">02 — {t.questionsEyebrow}</div>
      <div className="questionsHead"><h2>{lines(t.questionsTitle)}</h2><span aria-hidden="true">✦</span></div>
      <ol>{t.questions.map((item, index) => <li key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></li>)}</ol>
    </div></section>

    <section className="lenses shell">
      <div className="sectionLabel">03 — {t.lensesEyebrow}</div>
      <div className="splitHead"><h2>{lines(t.lensesTitle)}</h2><p>{t.lensesIntro}</p></div>
      <div className="lensCards">{t.lenses.map((lens, index) => <article key={lens[0]}><span>0{index + 1}</span><div className={`symbol symbol${index + 1}`} aria-hidden="true"/><h3>{lens[0]}</h3><p>{lens[1]}</p></article>)}</div>
    </section>

    <section className="format" id="format"><div className="shell">
      <div className="sectionLabel">04 — {t.formatEyebrow}</div>
      <div className="formatIntro"><h2>{lines(t.formatTitle)}</h2><p>{t.formatText}</p></div>
      <div className="steps">{t.steps.map(step => <article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
    </div></section>

    <section className="hosts"><div className="shell">
      <div className="sectionLabel">05 — {t.hostsEyebrow}</div>
      <div className="hostsIntro"><h2>{lines(t.hostsTitle)}</h2><div className="hostMark" aria-hidden="true"><span>2</span><i /></div></div>
      <div className="hostGrid">
        <article className="hostCard hostCardPhoto">
          <div className="hostPortrait"><Image src="/snezhana.jpg" alt={`${t.hosts[0][0]} — ${t.hosts[0][1]}`} fill sizes="(max-width: 650px) 100vw, (max-width: 900px) 55vw, 38vw" /></div>
          <div className="hostInfo"><span>01</span><h3>{t.hosts[0][0]}</h3><p>{t.hosts[0][1]}</p><a href="https://t.me/SnezhaBil" target="_blank" rel="noreferrer">@SnezhaBil <i aria-hidden="true">↗</i></a></div>
        </article>
        <article className="hostCard hostCardType">
          <div className="hostCompass" aria-hidden="true"><i /><i /><span>ο</span></div>
          <div className="hostInfo"><span>02</span><h3>{t.hosts[1][0]}</h3><p>{t.hosts[1][1]}</p><a href="tel:+380670092929">+380 67 009 29 29</a><a href="https://t.me/Anton8848" target="_blank" rel="noreferrer">@Anton8848 <i aria-hidden="true">↗</i></a></div>
        </article>
      </div>
    </div></section>

    <section className="values shell" id="principles">
      <div className="sectionLabel">06 — {t.valuesEyebrow}</div>
      <div className="valuesGrid"><h2>{lines(t.valuesTitle)}</h2><div>{t.values.map((value, index) => <article key={value[0]}><span>{index + 1}</span><h3>{value[0]}</h3><p>{value[1]}</p></article>)}</div></div>
    </section>

    <section className="archive" id="archive"><div className="shell">
      <div className="sectionLabel">07 — {t.archiveEyebrow}</div>
      <div className="splitHead archiveHead"><h2>{lines(t.archiveTitle)}</h2><p>{t.archiveIntro}</p></div>
      <div className="archiveGrid">{t.archive.map((item, index) => <article key={item[1]}><span>0{index + 1}</span><small>{item[0]}</small><h3>{item[1]}</h3><p>{item[2]}</p><em>{item[3]}</em></article>)}</div>
    </div></section>

    <section className="visit" id="visit"><div className="shell">
      <div className="sectionLabel">08 — {t.finalEyebrow}</div>
      <h2>{t.finalTitle}</h2><p className="visitIntro">{t.finalText}</p>
      <div className="visitCard"><div><span>{t.addressLabel}</span><b>{t.meta[1]}</b><small>{t.meta[2]}</small></div><div><span>{t.dateLabel}</span><b>{t.meta[0]}</b></div><a href="https://t.me/kudlai_veronika" target="_blank" rel="noreferrer">{t.cta}<span>↗</span></a></div>
      <aside className="adminContact" aria-labelledby="admin-contact-name">
        <div className="adminContactLabel">{t.contactEyebrow}</div>
        <div className="adminContactIntro"><h3 id="admin-contact-name">{t.contactName}</h3><span>{t.contactRole}</span><p>{t.contactText}</p></div>
        <div className="adminContactLinks"><a href="tel:+380682641212">+380 68 264 12 12</a><a href="https://t.me/kudlai_veronika" target="_blank" rel="noreferrer">@kudlai_veronika <span aria-hidden="true">↗</span></a></div>
      </aside>
    </div></section>

    <footer className="shell"><div className="brand"><b>cinema</b><span>.vision</span></div><p>{t.footer}</p><div className="footerLang"><Link aria-current={lang === "uk" ? "page" : undefined} href="/">UA</Link><Link aria-current={lang === "ru" ? "page" : undefined} href="/ru">RU</Link><Link aria-current={lang === "en" ? "page" : undefined} href="/en">EN</Link></div><small>© 2026 · {t.rights}</small></footer>
  </main>;
}
