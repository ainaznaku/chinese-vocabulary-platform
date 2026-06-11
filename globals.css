"use client";

import { useEffect, useMemo, useState } from "react";

const UI = {
  ru: {
    title: "Платформа китайской лексики",
    choose: "Выберите язык",
    start: "Начать обучение",
    learn: "Обучение",
    relations: "Связи слов",
    lookup: "Поиск слов",
    games: "Игры",
    test: "Тест",
    translation: "Перевод",
    pos: "Часть речи",
    structure: "Структура",
    coll: "Сочетания",
    examples: "Примеры",
    none: "нет данных",
    search: "Поиск слова или предложения",
    onlineDicts: "Онлайн-словари",
    synonym: "Синонимы",
    antonym: "Антонимы",
    homophone: "Омонимы",
    confusing: "易混词",
    alphabet: "Алфавит",
    structureCat: "结构类别",
    posCat: "词性类别",
    frog: "Лягушка",
    memory: "Memory",
    match: "Соединение",
    fill: "Заполни пропуск",
    correct: "Правильно",
    wrong: "Ошибка",
    startTest: "Начать тест"
  },
  en: {
    title: "Chinese Vocabulary Platform",
    choose: "Choose language",
    start: "Start learning",
    learn: "Learning",
    relations: "Word relations",
    lookup: "Word lookup",
    games: "Games",
    test: "Test",
    translation: "Translation",
    pos: "Part of speech",
    structure: "Structure",
    coll: "Collocations",
    examples: "Examples",
    none: "no data",
    search: "Search word or sentence",
    onlineDicts: "Online dictionaries",
    synonym: "Synonyms",
    antonym: "Antonyms",
    homophone: "Homophones",
    confusing: "Confusing words",
    alphabet: "Alphabet",
    structureCat: "Structure",
    posCat: "Part of speech",
    frog: "Frog",
    memory: "Memory",
    match: "Matching",
    fill: "Fill blank",
    correct: "Correct",
    wrong: "Wrong",
    startTest: "Start test"
  },
  zh: {
    title: "汉语词汇学习平台",
    choose: "选择语言",
    start: "开始学习",
    learn: "学习",
    relations: "词语关系",
    lookup: "查词",
    games: "游戏",
    test: "测验",
    translation: "解释",
    pos: "词性",
    structure: "结构",
    coll: "搭配",
    examples: "例句",
    none: "暂无数据",
    search: "输入词语或句子",
    onlineDicts: "在线词典",
    synonym: "同义词",
    antonym: "反义词",
    homophone: "同音词",
    confusing: "易混词",
    alphabet: "字母顺序",
    structureCat: "结构类别",
    posCat: "词性类别",
    frog: "青蛙跳",
    memory: "记忆卡片",
    match: "连线",
    fill: "填空",
    correct: "正确",
    wrong: "错误",
    startTest: "开始测验"
  }
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function Page() {
  const [screen, setScreen] = useState("start");
  const [lang, setLang] = useState("ru");
  const [mode, setMode] = useState("learn");
  const [sub, setSub] = useState("alphabet");
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState([]);
  const [query, setQuery] = useState("");
  const [words, setWords] = useState([]);
  const [relations, setRelations] = useState([]);
  const [game, setGame] = useState("");
  const [frogWord, setFrogWord] = useState(null);
  const [frogOptions, setFrogOptions] = useState([]);
  const [frogLives, setFrogLives] = useState(5);
  const [frogScore, setFrogScore] = useState(0);
  const [frogState, setFrogState] = useState("");
  const [frogFeed, setFrogFeed] = useState("");
  const [frogLock, setFrogLock] = useState(false);
  const [memoryCards, setMemoryCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [matchPairs, setMatchPairs] = useState([]);
  const [matchRight, setMatchRight] = useState([]);
  const [matchDone, setMatchDone] = useState([]);
  const [matchSelected, setMatchSelected] = useState(null);
  const [matchRound, setMatchRound] = useState(1);
  const [memoryRound, setMemoryRound] = useState(1);
  const [frogRound, setFrogRound] = useState(1);
  const [fillRound, setFillRound] = useState(1);
  const [gameLevel, setGameLevel] = useState(1);
  const [levelMessage, setLevelMessage] = useState("");
  const [testItems, setTestItems] = useState([]);
  const [testIndex, setTestIndex] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [testFeedback, setTestFeedback] = useState("");
  const [fillQuestions, setFillQuestions] = useState([]);
  const [fillIndex, setFillIndex] = useState(0);
  const [fillFeedback, setFillFeedback] = useState("");
  const [fillScore, setFillScore] = useState(0);

  const t = UI[lang];

  useEffect(() => {
    Promise.all([
      fetch("/data/words.json").then((r) => r.json()),
      fetch("/data/relations.json").then((r) => r.json()),
      fetch("/data/fill_blank.json").then((r) => r.json())
    ])
      .then(([w, r, f]) => {
        setWords(Array.isArray(w) ? w : []);
        setRelations(Array.isArray(r) ? r : []);
        setFillQuestions(Array.isArray(f) ? f : []);
      })
      .catch(() => {
        setWords([]);
        setRelations([]);
      });
  }, []);

  function meaning(w) {
    if (!w) return "";
    if (lang === "ru") return w.ru || "";
    if (lang === "en") return w.en || "";
    return w.zh || "";
  }

  function dictionaryLinks(word) {
    const q = encodeURIComponent(word || "");
    const ruMeaning = encodeURIComponent((word || "") + " китайский русский перевод значение");
    const enMeaning = encodeURIComponent((word || "") + " Chinese English dictionary meaning");
    const zhMeaning = encodeURIComponent((word || "") + " 汉语词典 解释");

    if (lang === "ru") {
      return [
        ["TrainChinese", "https://www.trainchinese.com/v2/search.php?searchWord=" + q],
        ["BKRS", "https://bkrs.info/slovo.php?ch=" + q],
        ["Google перевод", "https://translate.google.com/?sl=zh-CN&tl=ru&text=" + q + "&op=translate"],
        ["Bing перевод", "https://www.bing.com/translator?from=zh-Hans&to=ru&text=" + q],
        ["Reverso", "https://context.reverso.net/translation/chinese-russian/" + q],
        ["Поиск значения", "https://www.google.com/search?q=" + ruMeaning]
      ];
    }

    if (lang === "en") {
      return [
        ["TrainChinese", "https://www.trainchinese.com/v2/search.php?searchWord=" + q],
        ["MDBG", "https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb=" + q],
        ["Wiktionary", "https://en.wiktionary.org/wiki/" + q],
        ["Google Translate", "https://translate.google.com/?sl=zh-CN&tl=en&text=" + q + "&op=translate"],
        ["Bing Translator", "https://www.bing.com/translator?from=zh-Hans&to=en&text=" + q],
        ["English search", "https://www.google.com/search?q=" + enMeaning]
      ];
    }

    return [
      ["百度汉语", "https://hanyu.baidu.com/s?wd=" + q],
      ["百度搜索", "https://www.baidu.com/s?wd=" + zhMeaning],
      ["汉典", "https://www.zdic.net/hans/" + q],
      ["维基词典", "https://zh.wiktionary.org/wiki/" + q],
      ["必应搜索", "https://www.bing.com/search?q=" + zhMeaning],
      ["谷歌搜索", "https://www.google.com/search?q=" + zhMeaning]
    ];
  }

  function validPool() {
    return visibleWords().filter((w) => {
      const v = String(meaning(w) || "").trim();
      return w.word && v && v !== "暂无数据" && v !== "нет данных" && v !== "no data";
    });
  }

  function goodChineseWord(w) {
    const zh = String(w.zh || "").trim();
    return zh && zh !== "暂无数据" && zh !== "—" && zh !== "-" && !zh.includes("暂无准确中文释义");
  }

  function visibleWords() {
    if (lang === "zh") return words.filter((w) => w.zh && w.zh.trim());
    return words.filter((w) => !w.zhOnly);
  }

  function wordCard(w) {
    return (
      <div className="card">
        <div className="big">{w.word} {w.pinyin}</div>
        {lang === "zh" ? (
          <>
            <b>拼音:</b> {w.pinyin || t.none}<br />
            <b>解释:</b> {w.zh || t.none}<br />
            <b>词性:</b> {w.pos || t.none}<br />
            <b>结构:</b> {w.structure || t.none}<br />
            <b>同义词:</b> {(w.synonyms || []).join("、") || t.none}<br />
            <b>反义词:</b> {(w.antonyms || []).join("、") || t.none}<br />
            <b>同音词:</b> {(w.homophones || []).join("、") || t.none}<br />
            <b>易混词:</b> {(w.confusing || []).join("、") || t.none}<br />
            <b>搭配:</b> {(w.collocations || []).join("、") || t.none}<br />
            <b>例句:</b><br />
            {(w.examples || []).length ? w.examples.map((e, i) => <div key={i}>{e}</div>) : t.none}
            <div className="dictBox">
              <a className="dictBtn" href={"https://www.baidu.com/s?wd=" + encodeURIComponent(w.word + " 百度汉语 词典 解释")} target="_blank" rel="noopener noreferrer">
                百度搜索词典解释
              </a>
              <a className="dictBtn dictBtn2" href={"https://www.bing.com/search?q=" + encodeURIComponent(w.word + " 汉语词典 解释")} target="_blank" rel="noopener noreferrer">
                备用词典搜索
              </a>
            </div>
          </>        ) : (
          <>
            <b>{t.translation}:</b> {meaning(w)}<br />
            <b>{t.pos}:</b> {w.pos || t.none}<br />
            <b>{t.structure}:</b> {w.structure || t.none}<br />
            <b>{lang === "ru" ? "Синонимы" : "Synonyms"}:</b> {(w.synonyms || []).join("、") || t.none}<br />
            <b>{lang === "ru" ? "Антонимы" : "Antonyms"}:</b> {(w.antonyms || []).join("、") || t.none}<br />
            <b>{lang === "ru" ? "Омонимы" : "Homophones"}:</b> {(w.homophones || []).join("、") || t.none}<br />
            <b>{t.confusing}:</b> {(w.confusing || []).join("、") || t.none}<br />
            <b>{t.coll}:</b> {(w.collocations || []).join("、") || t.none}<br />
            <b>{t.examples}:</b><br />
            {(w.examples || []).length ? w.examples.map((e, i) => <div key={i}>{e}</div>) : t.none}
          </>
        )}
      </div>
    );
  }

  const filteredWords = useMemo(() => {
    let arr = visibleWords();
    if (filter) {
      if (sub === "alphabet") arr = arr.filter((w) => w.letter === filter);
      if (sub === "structure") arr = arr.filter((w) => w.structure === filter);
      if (sub === "pos") arr = arr.filter((w) => w.pos === filter);
    }
    return arr;
  }, [words, filter, sub]);

  function levelWords(level = gameLevel) {
    const pool = validPool();
    if (!pool.length) return [];
    const start = ((level - 1) * 100) % pool.length;
    const doubled = [...pool, ...pool];
    return doubled.slice(start, start + Math.min(100, pool.length));
  }

  function gameSize(base = 6) {
    if (gameLevel >= 13) return base + 6;
    if (gameLevel >= 10) return base + 4;
    if (gameLevel >= 7) return base + 3;
    if (gameLevel >= 4) return base + 2;
    return base;
  }

  function roundPool(size = 6, round = 1) {
    const pool = levelWords(gameLevel);
    if (!pool.length) return [];
    const start = ((round - 1) * size) % pool.length;
    const doubled = [...pool, ...pool];
    return doubled.slice(start, start + Math.min(size, pool.length));
  }

  function nextRoundValue(current) {
    return current >= 100 ? 1 : current + 1;
  }

  function advanceLevel(nextGame) {
    setGameLevel((level) => {
      const next = level >= 15 ? 1 : level + 1;
      setLevelMessage((lang === "zh" ? "恭喜进入 Level " : lang === "ru" ? "Открыт Level " : "Level unlocked: ") + next);
      setTimeout(() => setLevelMessage(""), 1800);
      setTimeout(() => nextGame(next), 200);
      return next;
    });
  }

  function newFrog() {
    const pool = levelWords(gameLevel);
    const source = pool.length ? pool : validPool();
    const target = source[Math.floor(Math.random() * source.length)];
    if (!target) return;
    const optionCount = gameLevel >= 10 ? 5 : gameLevel >= 4 ? 4 : 3;
    const wrongPool = source.filter((w) => w.word !== target.word);
    const opts = shuffle([target.word, ...shuffle(wrongPool).slice(0, optionCount - 1).map((w) => w.word)]);
    setFrogWord(target);
    setFrogOptions(opts);
    setFrogState("");
    setFrogFeed("");
    setFrogLock(false);
  }

  function lookupResults() {
    if (!query) return [];
    const q = query.toLowerCase();
    return visibleWords().filter((w) =>
      query.includes(w.word) ||
      w.word.includes(query) ||
      String(w.pinyin || "").toLowerCase().includes(q) ||
      String(meaning(w)).toLowerCase().includes(q)
    ).slice(0, 50);
  }

  function startFrog() {
    setGame("frog");
    setFrogRound((r) => r || 1);
    setFrogLives(5);
    setFrogScore(0);
    setTimeout(newFrog, 0);
  }

  function answerFrog(o, i) {
    if (frogLock || !frogWord) return;
    setFrogLock(true);
    if (o === frogWord.word) {
      const next = frogScore + 1;
      setFrogScore(next);
      setFrogFeed("✓ " + t.correct);
      setTimeout(() => setFrogState("jump" + ["A", "B", "C", "D", "E"][i]), 40);
      setTimeout(() => {
        if (next >= 8) {
          setFrogRound((r) => {
            const nr = nextRoundValue(r);
            if (r >= 100) {
              advanceLevel(() => {
                setFrogScore(0);
                setFrogLives(5);
                setFrogRound(1);
                newFrog();
              });
              return 1;
            }
            return nr;
          });
          setFrogScore(0);
          setFrogLives(5);
          newFrog();
        } else {
          newFrog();
        }
      }, 1300);
    } else {
      const nextLives = frogLives - 1;
      setFrogLives(nextLives);
      setFrogFeed("❌ " + t.wrong + ": " + frogWord.word);
      setTimeout(() => setFrogState("sink"), 40);
      setTimeout(nextLives <= 0 ? startFrog : newFrog, 1300);
    }
  }

  function startMemory(round = memoryRound) {
    setGame("memory");
    const selected = roundPool(gameSize(6), round);
    setMemoryCards(shuffle(selected.flatMap((w, i) => [
      { p: i, text: w.word, open: false, done: false },
      { p: i, text: meaning(w), open: false, done: false }
    ])));
    setFirstCard(null);
  }

  function flipMemory(i) {
    setMemoryCards((old) => {
      const arr = [...old];
      if (!arr[i] || arr[i].done || arr[i].open) return arr;
      arr[i] = { ...arr[i], open: true };
      if (firstCard === null) {
        setFirstCard(i);
      } else {
        if (arr[firstCard].p === arr[i].p) {
          arr[firstCard] = { ...arr[firstCard], done: true };
          arr[i] = { ...arr[i], done: true };
          const allDone = arr.every((c) => c.done || c.p === arr[i].p);
          if (allDone) {
            setTimeout(() => {
              setMemoryRound((r) => {
                const nr = nextRoundValue(r);
                if (r >= 100) {
                  advanceLevel(() => {
                    setMemoryRound(1);
                    startMemory(1);
                  });
                  return 1;
                }
                setTimeout(() => startMemory(nr), 0);
                return nr;
              });
            }, 900);
          }
        } else {
          const a = firstCard;
          const b = i;
          setTimeout(() => {
            setMemoryCards((prev) => prev.map((c, idx) => idx === a || idx === b ? { ...c, open: false } : c));
          }, 650);
        }
        setFirstCard(null);
      }
      return arr;
    });
  }

  function startMatch(round = matchRound) {
    setGame("match");
    const selected = roundPool(gameSize(6), round).filter((w) => meaning(w));
    const pairs = selected.map((w) => [w.word, meaning(w)]);
    setMatchPairs(pairs);
    setMatchRight(shuffle(pairs.map((p) => p[1])));
    setMatchDone([]);
    setMatchSelected(null);
  }

  function pickMatch(v) {
    if (matchDone.includes(v)) return;
    if (!matchSelected) {
      setMatchSelected(v);
      return;
    }
    if (matchSelected === v) {
      setMatchSelected(null);
      return;
    }
    const ok = matchPairs.find((p) => (p[0] === matchSelected && p[1] === v) || (p[1] === matchSelected && p[0] === v));
    if (ok) {
      const nextDone = [...matchDone, ok[0], ok[1]];
      setMatchDone(nextDone);
      if (nextDone.length >= matchPairs.length * 2) {
        setTimeout(() => {
          setMatchRound((r) => {
            const nr = nextRoundValue(r);
            if (r >= 100) {
              advanceLevel(() => {
                setMatchRound(1);
                startMatch(1);
              });
              return 1;
            }
            setTimeout(() => startMatch(nr), 0);
            return nr;
          });
        }, 900);
      }
    }
    setMatchSelected(null);
  }

  function startTest() {
    setTestItems(shuffle(validPool()).slice(0, 10));
    setTestIndex(0);
    setTestScore(0);
    setTestFeedback("");
  }

  function answerTest(o) {
    const q = testItems[testIndex];
    if (!q) return;
    if (o === q.word) {
      setTestScore((s) => s + 1);
      setTestFeedback("✓ " + t.correct);
    } else {
      setTestFeedback("❌ " + t.wrong + ": " + q.word);
    }
    setTimeout(() => {
      setTestIndex((i) => i + 1);
      setTestFeedback("");
    }, 800);
  }


  function startFillBlank() {
    setGame("fill");
    setFillIndex(0);
    setFillScore(0);
    setFillFeedback("");
  }

  function currentFillQuestion() {
    const pool = levelWords(gameLevel);
    if (!pool.length) return null;
    const target = pool[fillIndex % pool.length];
    const wrongs = shuffle(pool.filter((w) => w.word !== target.word)).slice(0, gameLevel >= 7 ? 5 : gameLevel >= 4 ? 4 : 3).map((w) => w.word);
    return {
      answer: target.word,
      sentence: {
        ru: "Заполни пропуск: " + meaning(target) + " = ___",
        en: "Fill in the blank: " + meaning(target) + " = ___",
        zh: "根据解释选择正确词语：" + meaning(target) + " = ___"
      },
      options: shuffle([target.word, ...wrongs])
    };
  }

  function answerFillBlank(option) {
    const q = currentFillQuestion();
    if (!q) return;
    if (option === q.answer) {
      setFillScore((s) => s + 1);
      setFillFeedback("✓ " + t.correct);
    } else {
      setFillFeedback("❌ " + t.wrong + ": " + q.answer);
    }
    setTimeout(() => {
      setFillIndex((i) => {
        const next = i + 1;
        if (next >= 100) {
          advanceLevel(() => {
            setFillIndex(0);
            setFillScore(0);
            startFillBlank();
          });
          return 0;
        }
        return next;
      });
      setFillFeedback("");
    }, 800);
  }

  if (screen === "start") {
    return (
      <div className="start">
        <div className="startCard">
          <h1 className="startTitle">{t.title}</h1>
          <h2>{t.choose}</h2>
          <div className="choiceGrid">
            <button className={"choice " + (lang === "ru" ? "active" : "")} onClick={() => setLang("ru")}>Русский</button>
            <button className={"choice " + (lang === "en" ? "active" : "")} onClick={() => setLang("en")}>English</button>
            <button className={"choice " + (lang === "zh" ? "active" : "")} onClick={() => setLang("zh")}>中文</button>
          </div>
          <button className="startBtn" onClick={() => setScreen("main")}>{t.start}</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>{t.title}</h1>
        <span className="badge">{lang === "ru" ? "Русский" : lang === "en" ? "English" : "中文"}</span>
        <button className="badge" onClick={() => setScreen("start")}>Change</button>
      </header>
      <main>
        <div className="panel">
          <div className="nav">
            {["learn", "relations", "lookup", "games", "test"].map((m) => (
              <button key={m} className={"btn " + (mode === m ? "active" : "")} onClick={() => { setMode(m); setGame(""); setFilter(""); }}>{t[m]}</button>
            ))}
          </div>
        </div>

        {mode === "learn" && (
          <div className="panel">
            <div className="chipGrid">
              <button className={"btn " + (sub === "alphabet" ? "active" : "")} onClick={() => { setSub("alphabet"); setFilter(""); setOpen([]); }}>{t.alphabet}</button>
              <button className={"btn " + (sub === "structure" ? "active" : "")} onClick={() => { setSub("structure"); setFilter(""); setOpen([]); }}>{t.structureCat}</button>
              <button className={"btn " + (sub === "pos" ? "active" : "")} onClick={() => { setSub("pos"); setFilter(""); setOpen([]); }}>{t.posCat}</button>
            </div>
            <div className="chipGrid">
              <button className={"btn " + (!filter ? "active" : "")} onClick={() => { setFilter(""); setOpen([]); }}>All</button>
              {[...new Set(visibleWords().map((w) => sub === "alphabet" ? w.letter : sub === "structure" ? w.structure : w.pos))].sort().slice(0, 200).map((x) => (
                <button key={x} className={"btn " + (filter === x ? "active" : "")} onClick={() => { setFilter(x); setOpen([]); }}>{x}</button>
              ))}
            </div>
            {filteredWords.slice(0, 700).map((w) => (
              <div key={w.word}>
                <button className="wordBtn" onClick={() => setOpen((o) => o.includes(w.word) ? o.filter((x) => x !== w.word) : [...o, w.word])}>
                  <b>{w.word}</b> {w.pinyin}
                </button>
                {open.includes(w.word) && wordCard(w)}
              </div>
            ))}
          </div>
        )}

        {mode === "relations" && (
          <div className="panel">
            <div className="chipGrid">
              {[
                ["synonym", t.synonym],
                ["antonym", t.antonym],
                ["homophone", t.homophone],
                ["confusing", t.confusing]
              ].map(([k, label]) => (
                <button key={k} className={"btn " + (filter === k ? "active" : "")} onClick={() => setFilter(k)}>{label}</button>
              ))}
            </div>
            {relations.filter((r) => !filter || r.type === filter).map((r, i) => (
              <div className="card" key={i}>
                <div className="big">{r.word1} — {r.word2}</div>
                <p>{r[lang] || r.zh}</p>
              </div>
            ))}
          </div>
        )}

        {mode === "lookup" && (
          <div className="panel">
            <input className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search} />

            {query && (
              <div className="onlineDictPanel alwaysDict">
                <b>{t.onlineDicts}: {query}</b>
                <div className="dictLinkGrid">
                  {dictionaryLinks(query).map(([name, url]) => (
                    <a key={name} className="smallDictBtn" href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                  ))}
                </div>
              </div>
            )}

            {query && lookupResults().length === 0 && (
              <div className="notFoundBox">
                {lang === "zh" ? "站内词库暂未找到该词，请使用上方在线词典查询。" : lang === "ru" ? "В базе сайта это слово не найдено. Используй онлайн-словари сверху." : "This word was not found in the site database. Use the online dictionaries above."}
              </div>
            )}

            {query && lookupResults().map((w) => (
              <div key={w.word}>
                {wordCard(w)}
                <div className="onlineDictPanel">
                  <b>{t.onlineDicts}</b>
                  <div className="dictLinkGrid">
                    {dictionaryLinks(w.word).map(([name, url]) => (
                      <a key={name} className="smallDictBtn" href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {mode === "games" && (
          <div className="panel">
            <div className="chipGrid">
              <button className="btn" onClick={startFrog}>{t.frog}</button>
              <button className="btn" onClick={() => startMemory(memoryRound)}>{t.memory}</button>
              <button className="btn" onClick={() => startMatch(matchRound)}>{t.match}</button>
              <button className="btn" onClick={startFillBlank}>{t.fill}</button>
            </div>
            <div className="levelNotice">Level {gameLevel}/15 {levelMessage ? " · " + levelMessage : ""}</div>
            {game === "frog" && frogWord && (
              <div className="froggy">
                <div className="frogTop"><span>♡ {frogLives}</span><span>{t.frog} {frogRound}/100</span><span>{frogScore}/8</span></div>
                <div className="frogQuestion">{lang === "zh" ? "根据解释跳到正确荷叶" : lang === "ru" ? "Прыгни на листок с правильным словом" : "Jump to the leaf with the correct word"}<br /><b>{meaning(frogWord)}</b></div>
                <div className="pond">
                  {frogOptions.map((o, i) => (
                    <button key={o} className={"pad pad" + ["A", "B", "C", "D", "E"][i]} onClick={() => answerFrog(o, i)}><span>{["A", "B", "C", "D", "E"][i]}</span>{o}</button>
                  ))}
                  <div className={"frog " + frogState}>🐸</div>
                </div>
                <div className="frogFeed">{frogFeed}</div>
              </div>
            )}
            {game === "memory" && (
              <div className="gameBox">
                <div className="roundTitle">{lang === "zh" ? "第" + memoryRound + "/100轮" : lang === "ru" ? "Раунд " + memoryRound + "/100" : "Round " + memoryRound + "/100"}</div>
                <div className="memoryGrid">{memoryCards.map((c, i) => (
                <button key={i} className={"memoryCard " + (c.done ? "done" : "")} onClick={() => flipMemory(i)}>{c.open || c.done ? c.text : "?"}</button>
              ))}</div></div>
            )}
            {game === "match" && (
              <div className="gameBox">
                <div className="roundTitle">{lang === "zh" ? "第" + matchRound + "/100轮" : lang === "ru" ? "Раунд " + matchRound + "/100" : "Round " + matchRound + "/100"}</div>
                <div className="matchGrid">
                  <div>
                    {matchPairs.map((p) => (
                      <button key={p[0]} className={"matchCard " + (matchSelected === p[0] ? "selected" : "") + " " + (matchDone.includes(p[0]) ? "done" : "")} onClick={() => pickMatch(p[0])}>{p[0]}</button>
                    ))}
                  </div>
                  <div>
                    {matchRight.map((right) => (
                      <button key={right} className={"matchCard " + (matchSelected === right ? "selected" : "") + " " + (matchDone.includes(right) ? "done" : "")} onClick={() => pickMatch(right)}>{right}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {game === "fill" && (
              <div className="gameBox">
                <div className="roundTitle">Level {gameLevel}/15 · {lang === "zh" ? "第" + (fillIndex + 1) + "/100题" : lang === "ru" ? "Вопрос " + (fillIndex + 1) + "/100" : "Question " + (fillIndex + 1) + "/100"}</div>
                {currentFillQuestion() && (
                  <div>
                    <div className="card">
                      <div className="big">{currentFillQuestion()?.sentence?.[lang]}</div>
                    </div>
                    {(currentFillQuestion()?.options || []).map((o) => (
                      <button className="wordBtn" key={o} onClick={() => answerFillBlank(o)}>{o}</button>
                    ))}
                    <div className="feedback">{fillFeedback}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {mode === "test" && (
          <div className="panel">
            {!testItems.length ? (
              <button className="btn active" onClick={startTest}>{t.startTest}</button>
            ) : testIndex >= testItems.length ? (
              <div><div className="big">{testScore}/{testItems.length}</div><button className="btn active" onClick={startTest}>{t.startTest}</button></div>
            ) : (
              <div>
                <div className="card"><b>{lang === "zh" ? "选择对应的词语" : lang === "ru" ? "Выбери слово по значению" : "Choose the word by meaning"}</b><br /><div className="big">{meaning(testItems[testIndex])}</div></div>
                {shuffle([testItems[testIndex].word, ...shuffle(validPool().filter((w) => w.word !== testItems[testIndex].word)).slice(0, 3).map((w) => w.word)]).map((o) => (
                  <button className="wordBtn" key={o} onClick={() => answerTest(o)}>{o}</button>
                ))}
                <div className="feedback">{testFeedback}</div>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}
