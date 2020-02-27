import {Course} from './model/course.model';
import {Question} from './model/question.model';
import {QuestionTypes} from './question-types.enum';
import {Answer} from './model/answer.model';
import {Test} from './model/test.model';

export class CoursesProvider {
  getCourses(): Course[] {
    return JSON.parse(JSON.stringify(this.courses));
  }

  loadCoursesForGroup(userGroup: string): Course[] {
    let courses = this.getCourses();

    if(userGroup === 'all')
    {
      return courses;
    }

    return courses.filter(course => course.userGroup === userGroup);
  }

  private courses: Course[] = [
    new Course('Test Course', 'test', 'admin', [
      new Test('Test-o-test','test',[
        new Question('Question 1', QuestionTypes.CHECKBOX, [
          new Answer('Answer is Correct', true),
          new Answer('Answer is Incorrect', false),
          new Answer('Answer is Incorrect', false),
        ]),
        new Question('Question 2', QuestionTypes.CHECKBOX, [
          new Answer('Answer is Incorrect', false),
          new Answer('Answer is Correct', true),
          new Answer('Answer is Incorrect', false),
        ])
      ]),
      new Test('Test-o-second-test','test',[
        new Question('Question 1', QuestionTypes.CHECKBOX, [
          new Answer('Answer is Correct', true),
          new Answer('Answer is Incorrect', false),
          new Answer('Answer is Correct', true),
        ]),
        new Question('Question 2', QuestionTypes.CHECKBOX, [
          new Answer('Answer is Incorrect', false),
          new Answer('Answer is Correct', true),
          new Answer('Answer is Correct', true),
        ])
      ])
    ]),
    new Course("Linux Akademie #1", "linux1", "engeto", [
      new Test("1. Lekce: Práce s Linuxem", "l1", [
        new Question(
          "Ve kterých z níže zmíněných zařízení můžeme najít Linux?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Servery", true),
            new Answer("Superpočítače", true),
            new Answer("Telefony", true),
            new Answer("Chytré domácí spotřebiče", true),
            new Answer("Domácí počítače", true),
            new Answer("Rychlovarné konvice", false),
            new Answer("Bezdrátové myši s Bluetooth", false),
            new Answer(" Kamery z 80. let ", false)
          ]
        ),
        new Question(
          'Které z níže uvedených adres jsou "absolutní adresy"?',
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /home/file1 ", true),
            new Answer("file1", false),
            new Answer("/", true),
            new Answer(" home/file1 ", false)
          ]
        ),
        new Question(
          "Které z níže uvedených systémů NEJSOU opensource?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Unix", true),
            new Answer(" Ubuntu Linux ", false),
            new Answer(" Windows XP ", true),
            new Answer(" Red Hat Enterprise Linux (RHEL) ", false),
            new Answer("Mac OS X", true),
            new Answer("Android", false)
          ]
        ),
        new Question("Jaké jsou výhody Linuxu?", QuestionTypes.CHECKBOX, [
          new Answer(" Linux můžu modifikovat tak, jak mi vyhovuje ", true),
          new Answer(" Linux je spolehlivý ", true),
          new Answer(
            " Linux se snadno používá i bez jakýchkoli IT zkušeností ",
            false
          ),
          new Answer(" Linux je zdarma ", true),
          new Answer(
            " Linux už většinou nainstalováný při zakoupení laptopu, nebo PC ",
            false
          )
        ]),
        new Question(
          "Jaký je rozdíl mezi absolutní a relativní cestou?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(
              " Absolutní cesta je platná pouze z jednoho umístění v systému, protože z něho vychází. ",
              false
            ),
            new Answer(
              " Absolutní cesta funguje vždy, ať už se vyskytujeme v jakémkoli adresáři v rámci stejného systému. ",
              true
            ),
            new Answer(
              " Relativní cesta je platná pouze z jednoho umístění v systému, protože z něho vychází. ",
              true
            ),
            new Answer(
              " Relativní cesta funguje vždy, ať už se vyskytujeme v jakémkoli adresáři v rámci stejného systému. ",
              false
            )
          ]
        ),
        new Question("Co znamená zkratka GUI?", QuestionTypes.CHECKBOX, [
          new Answer(" Graphical Utility Interface ", false),
          new Answer(" Graphical User Interface ", true),
          new Answer(" Graphical User Information ", false),
          new Answer(" Graphical Utility Information ", false)
        ]),
        new Question(
          "Jaké jsou výhody terminálu oproti GUI?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" je více intuitivní ", false),
            new Answer(" soustředíš se pouze na jeden nástroj ", true),
            new Answer(" jednodušší použití pro nové uživatele ", false),
            new Answer(" práce s terminálem je velmi rychlá ", true),
            new Answer(" z jednoho místa lze nastavit prakticky cokoliv ", true)
          ]
        ),
        new Question(
          "Jaký je rozdíl mezi příkazovým řádkem a linuxovým terminálem?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(
              " Příkazový řádek není nástrojem Linuxu a linuxový terminál ano ",
              false
            ),
            new Answer(
              " Linuxový terminál není nástrojem Linuxu a příkazový řádek ano ",
              false
            ),
            new Answer(" Linuxový terminál je druh příkazového řádku ", true),
            new Answer(" Příkazový řádek je druh linuxového terminálu ", false)
          ]
        ),
        new Question(
          "V Linuxu můžu pracovat pouze v příkazovém řádku",
          QuestionTypes.CHECKBOX,
          [new Answer("Ano", false), new Answer("ne", true)]
        ),
        new Question(
          "Jak se nazývá text, nebo symbol, který značí, že je systém připraven vykonat další příkaz?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("command", false),
            new Answer("prompt", true),
            new Answer("Putty", false),
            new Answer("input", false)
          ]
        )
      ]),
      new Test("2. Lekce: Práce se soubory", "l2", [
        new Question(
          "Kterým příkazem zobrazíme seznam souborů v adresáři DIR?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cd DIR", false),
            new Answer("is DIR", true),
            new Answer("mv DIR", false),
            new Answer("cat DIR", false)
          ]
        ),
        new Question(
          "Které příkazy vytvoří prázdný soubor file1?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" touch /home/student/file1 ", true),
            new Answer(" touch file1 file2 ", false),
            new Answer(" touch ../file1 ", true),
            new Answer(" mkdir file1 ", false),
            new Answer(" touch file1/.. ", false)
          ]
        ),
        new Question(
          "Příkaz se skládá ze tří částí, které píšeme v tomto pořadí:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("argument - přepínač - příkaz", false),
            new Answer("přepínač - příkaz - argument", false),
            new Answer("příkaz - přepínač - argument", true),
            new Answer("argument - příkaz - přepínač", false)
          ]
        ),
        new Question("Příkaz...", QuestionTypes.CHECKBOX, [
          new Answer("může obsahovat více argumentů", true),
          new Answer("může obsahovat více přepínačů", true),
          new Answer("se nemůže používat bez argumentů a přepínačů", false),
          new Answer("je program, který provadí určitou operaci", true)
        ]),
        new Question(
          "Jedna a dvě tečky za příkazem...",
          QuestionTypes.CHECKBOX,
          [
            new Answer("reprezentují operátory a odkazují na adresáře", false),
            new Answer("reprezentují operátory a odkazují na soubory", false),
            new Answer("reprezentují argumenty a odkazují na adresáře", true),
            new Answer("reprezentují argumenty a odkazují na soubory", false)
          ]
        ),
        new Question(
          "Jaký je správný zápis příkazu, pokud se chceme dostat z /home/student/Documents/school do /home/student/Files/online",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cd ../online", false),
            new Answer("cd ../Files/online", false),
            new Answer("cd ../../Files/online", true),
            new Answer("cd .././Files/online", false),
            new Answer("cd .././../Files/online", false)
          ]
        ),
        new Question(
          "Kterým příkazem se dostaneme do svého domovského adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cd -", false),
            new Answer("cd ~", true),
            new Answer("cd", true),
            new Answer("cd..", false)
          ]
        ),
        new Question("Přesouváme pomocí příkazu:", QuestionTypes.CHECKBOX, [
          new Answer("ls ..", false),
          new Answer("ls", false),
          new Answer("mv", true),
          new Answer("cd", false)
        ]),
        new Question(
          "Následující příkaz/y vytvoří více souborů:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("touch sound{a..d}.mp3", true),
            new Answer("touch {a..d}", true),
            new Answer("touch sound{a..d}", true),
            new Answer("touch {a..d}.mp3", true)
          ]
        ),
        new Question(
          "Který příkaz slouží pro vypsání obsahu adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("mkdir", false),
            new Answer("pwd", false),
            new Answer("tree", true),
            new Answer("cat", false),
            new Answer("wget", false)
          ]
        ),
        new Question(
          "Jak zkopírujeme adresář DIR s celým obsahem do adresáře NEW?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cp DIR NEW", false),
            new Answer("cp -r DIR NEW", true),
            new Answer("mv -r DIR NEW", false),
            new Answer("cp * NEW", false),
            new Answer("cp NEW DIR", false)
          ]
        ),
        new Question(
          "Mohu v příkazu (např. ls) použít více přepínačů zároveň?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Ano. Můžu napsat např. ls -l -t", true),
            new Answer("Ano. Můžu napsat např. ls -lt", true),
            new Answer("Ne. Vždy můžu použít maximálně jeden přepínač.", false),
            new Answer(
              "Mohu použít více přepínačů, vykoná se ale jen ten první.",
              false
            )
          ]
        ),
        new Question(
          "Máme adresář s názvem Doklady, který obsahuje nějaké dokumenty. Jak vytvoříme kopii tohoto adresáře bez jeho obsahu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cp Doklady kopie", true),
            new Answer("cp kopie Doklady", false),
            new Answer("cp -r Doklady", false),
            new Answer("cp -r Doklady kopie", false),
            new Answer("cp -r kopie Doklady", false)
          ]
        ),
        new Question(
          "Chci si zobrazit prvních 5 řádků ze souboru ahoj.txt. Použiji:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cat 5 ahoj.txt", false),
            new Answer("tail ahoj.txt", false),
            new Answer("head ahoj.txt", false),
            new Answer("head -n5 ahoj.txt", true),
            new Answer("head -5 ahoj.txt", true)
          ]
        ),
        new Question(
          "Můžu příkazem rm mazat soubory i adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Adresáře můžu mazat výhradně příkazem rmdir.", false),
            new Answer(
              "Můžu, ale s jednou výjimkou. Příkaz rm nedokáže smazat prázdný adresář.",
              true
            ),
            new Answer(
              "Můžu, ale při mazání adresářů musím pro příkaz rm použít přepínač -r.",
              true
            )
          ]
        )
      ]),
      new Test("3. Lekce: Dokumentace", "l3", [
        new Question(
          "Jaký je správný zápis pro zobrazení manuálové stránky příkazu mv?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("manual mv", false),
            new Answer("mv man", false),
            new Answer("man mv", true),
            new Answer("mv --man", false)
          ]
        ),
        new Question(
          "Jak se dostanu z manuálových stránek pryč?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Pomocí klávesy backspace", false),
            new Answer("Pomocí příkazu quit", false),
            new Answer("Pomocí klávesy Esc", false),
            new Answer("Pomocí klávesy q", true),
            new Answer(
              "Nijak. Jakmile je jednou otevřu, jsem v nich navždy.",
              false
            )
          ]
        ),
        new Question(
          "Jak snadno zjistím, v jaké sekci manuálových stránkek se hledaný příkaz nachází?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Pomocí příkazu help", false),
            new Answer("Pomocí příkazu whatis", true),
            new Answer("Pomocí vyhledávání s /", true),
            new Answer("Pomocí apropos", true)
          ]
        ),
        new Question("Které tvrzení je pravdivé?", QuestionTypes.CHECKBOX, [
          new Answer(
            "Příkaz apropos je alternativou k příkazu man s přepínačem --apropos.",
            true
          ),
          new Answer(
            "Příkaz apropos prohledává pouze titulky manuálových stránek",
            false
          ),
          new Answer(
            "Příkaz apropos vyhledává pomocí klíčového slova, jehož výskyt potom hledá napříč manuálovými stránkami.",
            true
          ),
          new Answer(
            "Příkaz whatis je alternativou k příkazu man s přepínačem --whatis.",
            true
          ),
          new Answer(
            "Příkaz whatis prohledává pouze titulky manuálových stránek",
            true
          ),
          new Answer(
            "Příkaz whatis vyhledává pomocí klíčového slova, jehož výskyt potom hledá napříč manuálovými stránkami.",
            false
          )
        ]),
        new Question(
          "Co znamená tučné písmo v manuálových stránkách? Znamená to, že:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("zápis musíš nahradit vhodným argumentem.", false),
            new Answer("můžeš použít pouze jednu z možností.", false),
            new Answer("můžeš daný argument opakovat.", false),
            new Answer(
              "musíš napsat přesně tak, jak je napsán v manuálových stránkách.",
              true
            )
          ]
        ),
        new Question(
          "Jaký je anglický ekvivalent k interním příkazům?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("shell builtins", true),
            new Answer("executable files", false),
            new Answer("builtin commands", true)
          ]
        ),
        new Question(
          "Jak zjistíme, jestli je daný příkaz interní, nebo externí?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Pomocí příkazu apropos", false),
            new Answer("Pomocí příkazu whatis", false),
            new Answer("Pomocí příkazu type", true)
          ]
        ),
        new Question(
          "Jaký je rozdíl mezi help a --help?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("To první je přepínač a to druhé příkaz.", false),
            new Answer("To první je příkaz a to druhé přepínač .", true),
            new Answer("help poskytuje nápovědu k interním příkazům.", true),
            new Answer("--help poskytuje nápovědu k interním příkazům.", false)
          ]
        ),
        new Question(
          "Jaký je rozdíl mezi man a -help?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(
              "man poskytuje informace o externích příkazech a --help o interních.",
              false
            ),
            new Answer(
              "man poskytuje informace o interních příkazech a --help o externích.",
              false
            ),
            new Answer("--help vrací kratší nápovědu než man.", true),
            new Answer(
              "--help vrací nápovědu přímo ze souboru daného příkazu",
              true
            ),
            new Answer(
              "man vrací nápovědu přímo ze souboru daného příkazu",
              false
            )
          ]
        ),
        new Question("Jaká je alternativa k --help", QuestionTypes.CHECKBOX, [
          new Answer("help", false),
          new Answer("whatis", true),
          new Answer("--h", true),
          new Answer("-h", false)
        ])
      ]),
      new Test("4. Lekce: Práce s textem", "l4", [
        new Question(
          "Máme seznam žáků ve škole. Chceme si vypsat všechny žáky se jménem Katka. V souboru je ale jméno Katka s velkým i malým počátečním písmenem (Katka i katka). Jak budeme postupovat? Použijeme:",
          QuestionTypes.CHECKBOX,
          [
            new Answer('grep "katka" "Katka" studenti.txt', false),
            new Answer('grep "K/katka" studenti.txt', false),
            new Answer('grep -i "katka" studenti.txt', true),
            new Answer('grep -i "katka"', false)
          ]
        ),
        new Question(
          "Jak zkopírujeme adresář DIR s celým obsahem do adresáře NEW?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cp DIR NEW", false),
            new Answer("cp -r DIR NEW", true),
            new Answer("mv -r DIR NEW", false),
            new Answer("cp * NEW", false),
            new Answer("cp NEW DIR", false)
          ]
        ),
        new Question(
          "Mohu v příkazu (např. ls) použít více přepínačů zároveň?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Ano. Můžu napsat např. ls -l -t", true),
            new Answer("Ano. Můžu napsat např. ls -lt", true),
            new Answer("Ne. Vždy můžu použít maximálně jeden přepínač.", false),
            new Answer(
              'Mohu použít více přepínačů, vykoná se ale jen ten první."',
              false
            )
          ]
        ),
        new Question(
          "Máme adresář s názvem Doklady, který obsahuje nějaké dokumenty. Jak vytvoříme kopii tohoto adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cp Doklady kopie", false),
            new Answer("cp kopie Doklady", false),
            new Answer("cp -r Doklady", false),
            new Answer("cp -r Doklady kopie", true),
            new Answer("cp -r kopie Doklady", false)
          ]
        ),
        new Question(
          "Chci si zobrazit prvních 5 řádků ze souboru ahoj.txt. Použiji:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cat 5 ahoj.txt", false),
            new Answer("tail ahoj.txt", false),
            new Answer("head ahoj.txt", false),
            new Answer("head -n5 ahoj.txt", true),
            new Answer("head -5 ahoj.txt", true)
          ]
        ),
        new Question(
          "Můžu příkazem rm mazat soubory i adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Adresáře můžu mazat výhradně příkazem rmdir.", false),
            new Answer(
              "Můžu, ale s jednou výjimkou. Příkaz rm nedokáže smazat prázdný adresář.",
              false
            ),
            new Answer(
              "Můžu, ale při mazání adresářů musím pro příkaz rm použít přepínač.",
              true
            )
          ]
        ),
        new Question(
          "Vyber správné formy zápisu příkazu tr, které budou mít výstup Alps.",
          QuestionTypes.CHECKBOX,
          [
            new Answer("echo Alpha | tr -d a | tr h s", true),
            new Answer("echo Alpha | tr -d h | tr a s", true),
            new Answer("echo Land | tr Land Alps", true),
            new Answer('tr -d a h s "Alpha"', false),
            new Answer("echo aLPh | tr [:lower:] [:upper:] | tr h s", false)
          ]
        ),
        new Question(
          "Vyber správné varianty použití příkazu cut, které vyfiltrují sloupec s uživateli ze souboru /etc/passwd.",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cut -f1 /etc/passwd", false),
            new Answer('cut -f1 -d":" /etc/passwd', true),
            new Answer("cat /etc/passwd | cut -f1 -d:", true),
            new Answer('cut -f1-3 -d":" /etc/passwd', false),
            new Answer("cut -b 1-10 /etc/passwd", false)
          ]
        ),
        new Question(
          "Který příkaz můžeme použít k očíslování řádků výstupu souboru file1?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("nl file1", true),
            new Answer("cat -n file1", true),
            new Answer('grep -nE ".*" file1', true)
          ]
        ),
        new Question(
          'Jaký bude výstup příkazu echo "Forever_Linux_Admin" | cut -f2 -d"_"?',
          QuestionTypes.CHECKBOX,
          [
            new Answer("Forever", false),
            new Answer("Linux", true),
            new Answer("Admin", false)
          ]
        ),
        new Question("K čemu slouží příkaz diff?", QuestionTypes.CHECKBOX, [
          new Answer("Ukazuje rozdíly ve velikosti souborů.", false),
          new Answer("Vyhledává rozdíly v obsahu souborů po řádcích.", true),
          new Answer("Zobrazuje podrobné informace o souboru.", false),
          new Answer("Vyhledává daný vzor v souboru.", false),
          new Answer(
            "Nahrazuje v souboru všechny výskyty prvního argumentu za argument druhý.",
            false
          )
        ])
      ]),
      new Test("5. Lekce: Vim", "l5", [
        new Question("Co je výhodou editoru Vim?", QuestionTypes.CHECKBOX, [
          new Answer("Příjemné uživatelské rozhraní", false),
          new Answer("Funguje na většině linuxových distribucí", true),
          new Answer("Jednoduché ovládání", false)
        ]),
        new Question(
          "Kterou klávesou opouštím tzv. INSERT mód?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("i", false),
            new Answer("Escape", true),
            new Answer("Enter", false),
            new Answer("q", false)
          ]
        ),
        new Question(
          "Kterou zkratku používáme ve Vim pro skenování souboru?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("w, a, s, d", false),
            new Answer("h, j, k, l", true),
            new Answer("šipky nahoru, dolů, doleva, doprava", false),
            new Answer("1, 2, 3, 4", false)
          ]
        ),
        new Question(
          "Která klávesová zkratka slouží k opuštění editoru bez uložení?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(":wq", false),
            new Answer(":q!", true),
            new Answer(":x", false)
          ]
        ),
        new Question(
          "V jakých módech můžeme pracovat ve vimu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("příkazový", true),
            new Answer("vkládací", true),
            new Answer("mazací", false),
            new Answer("bashovský", false)
          ]
        ),
        new Question(
          "Které z těchto klávesových kombinací lze použít v editoru Vim?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Shift + g", true),
            new Answer("Shift + a", true),
            new Answer("i", true),
            new Answer("dd", true),
            new Answer(":wq", true)
          ]
        ),
        new Question(
          "Co to znamená, že je Vim 'modální' editor?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Znamená to, že pracuje v různých módech.", true),
            new Answer("Znamená to, že do něho můžeme nainstalovat různé moduly pro práci.", false),
            new Answer("Znamená to, že funguje jako modální (vyskakovací) okno a operuje mimo terminál.", false),
            new Answer("Znamená to, že se chová v závislosti na módu, ve kterém se zrovna nacházím.", true)
          ]
        ),
        new Question(
          "Pomocí které zkratky vrátíme zpět poslední změnu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Ctrl + z", false),
            new Answer("u", true),
            new Answer("Ctrl + r", false),
            new Answer("Z", false)
          ]
        ),
        new Question(
          "Jak se dostaneme v NORMAL módu na začátek souboru?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("G", false),
            new Answer("gg", true),
            new Answer("1G", true),
            new Answer("GG", false)
          ]
        ),
        new Question(
          "Kterým příkazem uložení změny a ukončíme Vim?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(":!", false),
            new Answer(":q!", false),
            new Answer(":qw", false),
            new Answer(":wq", true)
          ]
        )
      ]),
      new Test('6. Lekce: Unixový čas', 'l6', [
        new Question(
          "Spadá unixový čas to POSIX standardů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("ano", true),
            new Answer("ne", false)
          ]
        ),
        new Question(
          "Jak můžeme zobrazit aktuální unixový čas?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("date -u", false),
            new Answer("date +%u", false),
            new Answer("date +%s", true),
            new Answer("date -%s", false)
          ]
        ),
        new Question(
          "Jak zobrazíme aktuální rok?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("date +%R", false),
            new Answer("date +%Y", true),
            new Answer("date +%y", false),
            new Answer("date +Y", false)
          ]
        ),
        new Question(
          "Jak zobrazíme datum v tomto formátu?: Wed 12 19",
          QuestionTypes.CHECKBOX,
          [
            new Answer("date +'%A %I %Y'", false),
            new Answer("date +'%a %I %y'", true),
            new Answer("date +'%a %i %y'", false),
            new Answer("date +%a %i %y", false)
          ]
        ),
        new Question(
          "Jak získáme unixový čas pro 10. prosince 2019?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("date +%s '12/10/2019'", false),
            new Answer("date +%s -d '12/10/2019'", true),
            new Answer("date '12/10/2019' +%s", false),
            new Answer("date -d '12/10/2019' +%s", true)
          ]
        )
      ]),
      new Test('6. Lekce: Archivace a komprese', 'l6arch', [
        new Question(
          "Jaký je rozdíl mezi archivací a kompresí?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" U archivace jde o zálohování souborů do dočasné paměti. ", false),
            new Answer(" U archivace jde o zabalení více složek a souborů do jednoho archivu. ", true),
            new Answer(" U archivace jde zmenšování objemu dat daných souborů. ", false),
            new Answer(" U komprese jde o zálohování souborů do dočasné paměti. ", false),
            new Answer(" U komprese jde o zabalení více složek a souborů do jednoho archivu. ", false),
            new Answer(" U komprese jde zmenšování objemu dat daných souborů. ", true)
          ]
        ),
        new Question(
          "Které z následujících příkazů slouží pouze ke kompresi?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("gzip", true),
            new Answer("zip", true),
            new Answer("bzip", true),
            new Answer("xz", true),
            new Answer("tar", false),
            new Answer("unzip", false)
          ]
        ),
        new Question(
          "Vyber správné tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Komprese je vždy součástí procesu archivace. ", false),
            new Answer(" Opakem komprese je dekomprese ", true),
            new Answer(" Existují různé druhy komprese. ", true),
            new Answer(" Čistě kompresní příkazy vždy zachovávají původní soubor. ", false),
            new Answer(" Výsledná velikost kompresovaného souboru může být větší, než velikost původní. ", true)
          ]
        ),
        new Question(
          "Který z následujících příkazů slouží pro vytvoření archivu tar",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" tar -czvf ", true),
            new Answer(" tar -cjvf ", true),
            new Answer(" tar -xzvf ", false),
            new Answer(" tar -cf ", true),
            new Answer(" tar -tvf ", false)
          ]
        ),
        new Question(
          "Který z následujících příkazů neslouží pro vytvoření archivu tar?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" tar -cJvf ", false),
            new Answer(" tar -tvf ", true),
            new Answer(" tar -xf ", true),
            new Answer(" tar -cjvf ", false),
            new Answer(" tar -xzvf ", true)
          ]
        ),
        new Question(
          "Proč je někdy výsledná velikost kompresovaných souborů může být větší, než souhrn velikosti původní souborů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Výsledná velikost kompresovaného souboru nemůže být větší než velikost původní. ", false),
            new Answer(" Protože soubor zahrnuje meta informace. ", true),
            new Answer(" Protože nastala chyba v kompresi. ", false),
            new Answer(" Protože některé kompresní metody používají komplikovaný algoritmus. ", false)
          ]
        ),
        new Question(
          "Soubory v archivu si můžeme zobrazit i bez dekomprese.",
          QuestionTypes.CHECKBOX,
          [
            new Answer("ano", true),
            new Answer("ne", false)
          ]
        ),
        new Question(
          "Který z následujících příkazů slouží pro zobrazení obsahu archivu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" unzip -l ", true),
            new Answer(" tar -tvf ", true),
            new Answer(" gunzip -t ", false),
            new Answer(" Ani jeden. Zobrazit obsah archivu není možné bez extrakce. ", false)
          ]
        ),
        new Question(
          "Mám 2 soubory - s1 a s2. Chci je dát do jednoho zipu. Poradíš mi, jak na to?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" zip s1 s2 archiv.zip ", false),
            new Answer(" zip archiv.zip s1 s2 ", true),
            new Answer(" zip s1.zip s2.zip ", false),
            new Answer(" zip s1 s2 ", false)
          ]
        ),
        new Question(
          "Které z níže uvedených tvrzení je pravdivé?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Zip je používán převážně na unixových systémech. ", false),
            new Answer(" Zip je používán převážně na Windows. ", true),
            new Answer(" Součástí procesu vytvoření archivu je vždy komprese dat. ", false),
            new Answer(" Součástí procesu vytvoření archivu může být komprese dat. ", true)
          ]
        ),
        new Question(
          "Které z níže uvedených tvrzení je pravdivé?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" zip a unzip má stejnou manuálovou stránku. ", false),
            new Answer(" zip a unzip jsou rozdílné příkazy. ", true),
            new Answer(" U zipu jde měnit kompresní algoritmus. ", false),
            new Answer(" Pomocí příkazu zip dokážeme upravovat už existující archiv. ", true)
          ]
        ),
      ]),
      new Test('6. Lekce: Vyhledávání Souborů', 'l6files', [
        new Question(
          "Vyber správné tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" locate je rychlejší než find ", true),
            new Answer(" locate čte data z vlastní databáze cest ", true),
            new Answer(" find používá stejnou databázi cest jako locate jen je pomalejší ", false),
            new Answer(" find umožňuje hledat podle velkého množství parametrů jako velikost souboru nebo dle jeho vlastníka ", true),
            new Answer(" updatedb aktualizuje databázi cest příkazu locate ", true)
          ]
        ),
        new Question(
          "K čemu slouží příkaz file?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Zobrazuje informace o velikosti souboru. ", false),
            new Answer(" Zobrazuje informace o majiteli souboru. ", false),
            new Answer(" Přiřazuje souboru příponu dle typu souboru. ", false),
            new Answer(" Zobrazuje informace o typu souboru. ", true),
            new Answer(" Vyhledává soubory daného jména v systému. ", false)
          ]
        ),
        new Question(
          "K čemu se používá příkaz locate?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Vyhledává soubory daného jména v systému. ", true),
            new Answer(" Jedná se o rychlé vyhledávání názvu cesty k souboru ", true),
            new Answer(" Jedná se o robustní vyhledávání názvu cesty k souboru ", false),
            new Answer(" Slouží pro kopírování a vkládání velkých adresářů ", false)
          ]
        ),
        new Question(
          "Pomocí jakého příkazu můžeme aktualizovat databázi, ze které čerpá příkaz locate?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Pomocí příkazu updatedb. ", true),
            new Answer(" Pomocí příkazu dbupdate. ", false),
            new Answer(" Pomocí příkazu sudo update. ", false),
            new Answer(" Pomocí příkazu update sudo. ", false)
          ]
        ),
        new Question(
          "Jak můžeme vyhledat všechny složky v našem domovském adresáři?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" find ~ -type d ", true),
            new Answer(" find -type d ", false),
            new Answer(" find -d ", false),
            new Answer(" find ~ -type f ", false)
          ]
        ),
      ]),
      new Test('6. Lekce: Velikost Souborů', 'l6fsize', [
        new Question(
          "Pomocí kterého příkazu si zobrazíme typ souborových systémů na našem disku?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" df -T ", true),
            new Answer(" du -T ", false),
            new Answer(" df -S ", false),
            new Answer(" du -S ", false)
          ]
        ),
        new Question(
          "Pomocí kterého příkazu si upravíme zobrazení datové jednotky?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" df -T ", false),
            new Answer(" df -h ", true),
            new Answer(" du -T ", false),
            new Answer(" du -h ", true)
          ]
        ),
        new Question(
          "Pomocí kterého příkazu si zobrazíme velikost jednotlivých souborů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" df -a ", false),
            new Answer(" df -s ", false),
            new Answer(" du -a ", true),
            new Answer(" du -s ", false)
          ]
        ),
        new Question(
          "Pomocí kterého příkazu si zobrazíme součet všech dat v daném adresáři?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" du -s ", true),
            new Answer(" du -sh ", true),
            new Answer(" df -ah ", false),
            new Answer(" df -a ", false)
          ]
        ),
      ]),
      new Test('7. Lekce: Vstupy A Výstupy', 'l7io', [
        new Question(
          "Proč používáme slovo 'standardní', když se bavíme o vstupu, výstupu a chybě?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Protože formát těchto dat je standardizovaný. ", false),
            new Answer(" Protože se s nimi běžně setkáváme. ", false),
            new Answer(" Slovíčko 'standardní' nemá význam. Jedná se jen o konvenci. ", true),
            new Answer(" Slovíčko 'standardní' je přežitkem z minulosti, takže není vhodné ho používat. ", false)
          ]
        ),
        new Question(
          "Jak souhrnně nazýváme standardní vstup, výstup a chybu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" standardní operace ", false),
            new Answer(" standardní cache ", false),
            new Answer(" standardní proudy ", true),
            new Answer(" standardní proměnné ", false)
          ]
        ),
        new Question(
          "V jakém případě dostaneme STDERR?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Když ukládáme výstup do souboru. ", false),
            new Answer(" Když ukládáme výstup do adresáře. ", true),
            new Answer(" Když poskytneme programu nevhodné argumenty. ", true),
            new Answer(" Když neposkytneme žádné argumenty. ", false)
          ]
        ),
        new Question(
          "K čemu můžeme použít STDERR?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Korektní výstup ", false),
            new Answer(" Debugging ", true),
            new Answer(" Informace, které nemusí admin nutně vidět ", true),
            new Answer(" Výstup ze souboru ", false),
            new Answer(" Vstup do příkazu ", false)
          ]
        ),
        new Question(
          "Co můžeme očekávát v případě, že se program vykoná bez problémů.",
          QuestionTypes.CHECKBOX,
          [
            new Answer("STDIN", false),
            new Answer("STDOUT", true),
            new Answer("STDERR", false)
          ]
        ),
      ]),
      new Test('7. Lekce: Přesměrování', 'l7red', [
        new Question(
          "K čemu slouží přesměrování pomocí > ?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Slouží k přesměrování výstupu z příkazu do určitého souboru. ", true),
            new Answer(" Slouží k přesměrování vstupu do určitého souboru. ", false),
            new Answer(" Při přesměrování výstupu přepíše cílový soubor, pokud existuje. ", true),
            new Answer(" Pokud soubor, do kterého chceme přesměrovat, neexistuje, Terminál vypíše chybu. ", false),
            new Answer(" Pokud soubor, do kterého chceme přesměrovat, neexistuje, Terminál ho vytvoří. ", true)
          ]
        ),
        new Question(
          "Jak mám postupovat, když chci výstup z příkazu vložit do souboru, ale nepřepsat celý jeho obsah?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" To není možné, museli bychom vytvořit nový soubor. ", false),
            new Answer(" Můžeme použít přesměrování >, které doplní výstup na konec souboru. ", false),
            new Answer(" Můžeme použít přesměrování >>, které doplní výstup na konec souboru. ", true),
            new Answer(" Můžeme použít přesměrování <, které doplní výstup na konec souboru. ", false)
          ]
        ),
        new Question(
          "Můžeme přesměrovat výstup pomocí > i do adresáře? Např. takto: ls -l > Documents",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Ano. V adresáři se automaticky vytvoří soubor, kam se výstup přesměruje. ", false),
            new Answer(" Ano. Adresář se změní na soubor, který obsahuje výstup přesměrování. ", false),
            new Answer(" Ne. Terminál vypíše chybovou hlášku '-bash: Documents: ls a directory'. ", true),
            new Answer(" Ne. Výstup se dá přesměrovat jen do souboru. ", true)
          ]
        ),
        new Question(
          "Když chci použít výstup z příkazu jako vstup pro jiný příkaz, použiju:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Přesměrování > ", false),
            new Answer(" Přesměrování >> ", false),
            new Answer(" Pipe | ", true)
          ]
        ),
        new Question(
          "Který z následujících příkazů přesměruje výstup?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" ls -l > ", true),
            new Answer(" ls -l 0> ", false),
            new Answer(" ls -l 2> ", false)
          ]
        ),
      ]),
      new Test('7. Lekce: Přesměrování vstupu', 'l7inpred', [
        new Question(
          "Který z následujících operátorů přesměruje vstup ze souboru?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("<", true),
            new Answer("<<", false),
            new Answer("<<<", false)
          ]
        ),
        new Question(
          "Který z následujících operátorů vstup přímo z řetězce?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("<", false),
            new Answer("<<", false),
            new Answer("<<<", true)
          ]
        ),
        new Question(
          "Který z následujících operátorů je vhodný pro automatizaci procesů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("<", false),
            new Answer("<<", true),
            new Answer("<<<", false),
            new Answer("Všechny", false)
          ]
        ),
        new Question(
          "Čím se dá nahradit příkaz cat <<< Text",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" cp Text ", false),
            new Answer(" cat Text ", false),
            new Answer(" echo Text ", true),
            new Answer(" <<< Text ", false)
          ]
        ),
        new Question(
          "Co to značí EOF?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" End or finish ", false),
            new Answer(" End of file ", true),
            new Answer(" Konec souboru ", true),
            new Answer(" Konec řádku ", false)
          ]
        )
      ])
    ]),
    new Course('Linux Akademie #2', 'linux2','engeto', [
      new Test('1. Lekce: Složení OS Linux', '2.1.1', [
        new Question(
          "Jak se jmenuje soubor/program, který je srdcem počítače?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Srdce", false),
            new Answer("Kernel", true),
            new Answer("Jádro", true),
            new Answer(" Základní program ", false)
          ]
        ),
        new Question(
          "Co jsou to systémová volání?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Jedná se o překladače programovacích jazyků. ", false),
            new Answer(" Jedná se o komunikaci různých systémů v rámci sítě. ", false),
            new Answer(" Jedná se o mezivrstvu mezi hardwarem a aplikačními programy. ", false),
            new Answer(" Jedná se o způsob komunikace s kernelem pro přístup k technickým prostředkům (CPU, paměť RAM). ", true)
          ]
        ),
        new Question(
          "Vyber důležité subsystémy jádra Linuxu:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" správa sítě ", true),
            new Answer(" překladač jazyka C ", false),
            new Answer(" řízení procesů ", true),
            new Answer(" správa paměti ", true),
            new Answer(" dokumentace aplikací na systému ", false)
          ]
        ),
        new Question(
          "K čemu jsou tyto důležité subsystémy jádra dobré?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" starají se o management procesů ", true),
            new Answer(" starají se o hlídání hranice mezi aplikačními a systémovými programi ", true),
            new Answer(" starají se o integritu souborových systémů ", false),
            new Answer(" starají se o logování chyb ", false)
          ]
        ),
        new Question(
          "K čemu nám je filesystém?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Slouží k organizaci dat. ", true),
            new Answer(" Slouží k systémovým voláním. ", false),
            new Answer(" Řídí ovladače systému. ", false),
            new Answer(" Slouží k řídění procesů. ", false)
          ]
        ),
      ]),
      new Test('2. Lekce: Správa uživatelů​', '2.2.1', [
        new Question(
          "Příkazem useradd jirka:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" vytvoří uživatele bez domovského adresáře ", false),
            new Answer(" vytvoří uživatele včetně domovského adresáře /home/jirka ", true),
            new Answer(" odstraní uživatel jirka ", false),
            new Answer(" vytvoří uživatele jirka s dodatokovým textem ", false)
          ]
        ),
        new Question(
          "Pro výpis všech aktuálně přihlášených uživatelů použijeme příkaz/y:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("who", true),
            new Answer("groups", false),
            new Answer("users", true),
            new Answer("w", true)
          ]
        ),
        new Question(
          "Příkazem usermod -G users,video,audio jirka zajistíme:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" členství uživatele jirka ve skupinách users,video,audio ", true),
            new Answer(" zrušení členství uživatele jirka ve skupinách users,video,audio ", false),
            new Answer(" odstranění skupin users,video,audio,jirka ", false),
            new Answer(" modifikace uživatelů users, video a audio - přidáni do skupiny jirka ", false)
          ]
        ),
        new Question(
          "Jednorázovou eskalaci práv uživatele zajistíme pomocí příkazu:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("passwd", false),
            new Answer("visudo", false),
            new Answer("sudo", true),
            new Answer("su", false),
            new Answer(" su -c ", true)
          ]
        ),
        new Question(
          "Co je to sudoers?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Jedná se o soubor, který ukládá jména skupin ", false),
            new Answer(" Jedná se o soubor, který ukládá skutečné heslo v šifrovaném formátu pro účet uživatele ", false),
            new Answer(" Jedná se o soubor, ve kterém je specifikováno, kteří uživatelé můžou operovat jako root ", true),
            new Answer(" Jedná se o soubor, ve kterém jsou uloženy základní informace o uživatelských účtech. ", false)
          ]
        ),
        new Question(
          "V jakém souboru najdeme informace o heslech uživatelů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /etc/passwd ", false),
            new Answer(" /etc/group ", false),
            new Answer(" /etc/shadow ", true),
            new Answer(" /etc/sudoers ", false)
          ]
        ),
        new Question(
          "V jakém souboru najdeme informace o uživatelých?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /etc/passwd ", true),
            new Answer(" /etc/group ", false),
            new Answer(" /etc/shadow ", false),
            new Answer(" /etc/sudoers ", false)
          ]
        ),
        new Question(
          "K čemu slouží příkaz visudo?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Používá ke spouštění příkazu jako superuživatel. ", false),
            new Answer(" Používá se ke změně uživatele. ", false),
            new Answer(" Otevře soubor /etc/sudoers v editoru vi. ", true)
          ]
        ),
        new Question(
          "Který/é z těchto příkazů je možné použít pro zjištění všech skupin, do kterých patří uživatel jirka:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" groups jirka ", true),
            new Answer(" cat /etc/group | grep jirka ", true),
            new Answer(" cat /etc/passwd | grep jirka ", false),
            new Answer(" id jirka ", true)
          ]
        ),
        new Question(
          "Který z následujících zápisu v /etc/sudoers není vhodný ani pro systém, který je mimo počítačové sítě?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" ALL ALL=(ALL) ALL ", false),
            new Answer(" ALL ALL=(ALL) NOPASSWD: ALL ", true),
            new Answer(" user ALL=(usename) ALL ", false)
          ]
        ),
      ]),
      new Test('3. Lekce: Vlastnictví Souborů', '2.3.1', [
        new Question(
          "Kdo je to vlastník?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Uživatel k němuž se váže daný soubor ", true),
            new Answer(" Uživatel, který vlastní skupinu ", false),
            new Answer(" Uživatel, který vlastní domovský adresář ", false),
            new Answer(" Uživatel, který vytváří skupinu ", false)
          ]
        ),
        new Question(
          "Pomocí příkazu chown můžeme změnit:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Vlastníka", true),
            new Answer(" Vlasticnou skupinu ", true),
            new Answer(" Jméno souboru ", false),
            new Answer(" Vlastnická práva ", false)
          ]
        ),
        new Question(
          "Kdy je vytvořena vlastnická skupina?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Při vytvoření souboru ", true),
            new Answer(" Při vytvoření 2 a více uživatelů ", false),
            new Answer(" Při vytvoření skupiny ", false)
          ]
        ),
        new Question(
          "Kterým příkazem změníme vlastnickou skupinu i uživatele zároveň?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" chown test:test ", true),
            new Answer(" chown : ", false),
            new Answer(" chgrp test:test ", false),
            new Answer(" chgrp : ", false)
          ]
        ),
        new Question(
          "Kterým z následujích příkazů můžeme změni skupinu souboru?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" chown :test ", true),
            new Answer(" chgrp test ", true),
            new Answer(" chown test:test ", false),
            new Answer(" chgrp test: ", false)
          ]
        ),
      ]),
      new Test('3. Lekce: Přístupová Práva', '2.3.2', [
        new Question(
          "Právo pro zápis do souboru|adresáře má číselnou hodnotu:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("4", false),
            new Answer("2", true),
            new Answer("7", false),
            new Answer("1", false)
          ]
        ),
        new Question(
          "Příkazem chmod 755 /home/jirka/script.sh zajistíme skupině vlastníka souboru:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" právo čtení a zápisu do souboru ", false),
            new Answer(" právo spuštění souboru (jenom) ", false),
            new Answer(" právo čtení a spuštění souboru ", true),
            new Answer(" právo zápisu a spuštění souboru ", false)
          ]
        ),
        new Question(
          "Pro změnu práv adresáře včetně jeho obsahu použijeme příkaz:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" chmod 755 /home/jirka/scripts ", false),
            new Answer(" chmod -v 755 /home/jirka/scripts ", false),
            new Answer(" chmod -Rv 775 /home/jirka/scripts ", true),
            new Answer(" chmod 775 /home/jirka/scripts -R ", true)
          ]
        ),
        new Question(
          "Změnu vlastníka anebo skupiny souboru|adresáře zajistíme pomocí:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("usermod", false),
            new Answer("chmod", false),
            new Answer("chown", true),
            new Answer("chgrp", true)
          ]
        ),
        new Question(
          "Příkazem chmod o=r /home/jirka/script.sh zajistíme:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" právo čtení vlastníkovi a skupině ", false),
            new Answer(" právo zápisu a čtení ostatním ", false),
            new Answer(" právo čtení ostatním ", true),
            new Answer(" právo čtení vlastníkovi,skupině i ostatním ", false)
          ]
        ),
      ]),
      new Test('3. Lekce: Speciální Práva', '2.3.3', [
        new Question(
          "SUID slouží na:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" vykonání příkazu s právy jako uživatel, který jej spustil ", false),
            new Answer(" vykonání příkazu s právy jako superuživatel root ", false),
            new Answer(" vykonání příkazu s právy jako uživatel, který je vlastníkem binárky ", true),
            new Answer(" vykonání příkazu s právy jako skupina, která je vlastníkem příkazu ", false)
          ]
        ),
        new Question(
          "Jakým příkazem mohu nastavit SUID na binárku /sbin/mkfs?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" chown o+s /sbin/mkfs ", false),
            new Answer(" chmod u+s /sbin/mkfs ", true),
            new Answer(" chmod 4755 /sbin/mkfs ", true),
            new Answer(" chmod 2755 /sbin/mkfs ", false)
          ]
        ),
        new Question(
          "Vyber správné tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" SUID se používá k přístupu ke zdrojům (souborům), ke kterým nemáme jako běžný uživatel přístup - např. /etc/shadow ", true),
            new Answer(" SGID se aplikuje na nové soubory ve složce, která má tento příznak nastaven ", true),
            new Answer(" SUID se používá pro příkaz sudo ", true),
            new Answer(" SGID nelze nastavit na složku ", false)
          ]
        ),
        new Question(
          "Sticky bit:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" zabraňuje odstranění souborů ve sdílené složce jinými uživateli ", true),
            new Answer(" opravňuje smazat všechna data superuživatele root ", false),
            new Answer(" je tradiční příznak na složce /tmp ", true),
            new Answer(" je tradiční příznak na složce /var ", false)
          ]
        ),
        new Question(
          "Vyberte pravdivé tvrzení o umask:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" umask přidá sadu nastavených oprávnění (např. 022) k 000 ", false),
            new Answer(" umask odebere sadu oprávnění (např. 022) od 777 nebo 666 ", true),
            new Answer(" pro soubory se používá 777 - umask ", false),
            new Answer(" pro složky se používá 777 - umask ", true)
          ]
        ),
      ]),
      new Test('3. Lekce: ACL', '2.3.4', [
        new Question(
          "K čemu používáme ACL",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" K rozšíření běžných práv pro jednotlivé uživatele. ", true),
            new Answer(" K zúžení běžných práv pro jednotlivé uživatele. ", true),
            new Answer(" K rozšíření běžných práv pro jednotlivé skupiny. ", true),
            new Answer(" K zúžení běžných práv pro jednotlivé skupiny. ", true)
          ]
        ),
        new Question(
          "Který z následujích příkazů nastaví práva pro skupinu student?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" setfacl -m u:student:rwx /etc/services ", false),
            new Answer(" setfacl -m g:student:rwv /etc/services ", true),
            new Answer(" getfacl -m g:student:rwv /etc/services ", false),
            new Answer(" getfacl -m u:student:rwx /etc/services ", false)
          ]
        ),
        new Question(
          "Jak zrušíme všechny ACL pro souboru /etc/services?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" setfacl -x u:student /etc/services ", false),
            new Answer(" setfacl -b /etc/services ", true),
            new Answer(" setfacl /etc/services ", false),
            new Answer(" setfacl -m /etc/services ", false)
          ]
        ),
        new Question(
          "Jak zrušíme všechna ACL pro uživatele student k souboru /etc/services?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" setfacl -m u:student:--- /etc/services ", false),
            new Answer(" setfacl -m g:student:--- /etc/services ", true),
            new Answer(" setfacl -x g:student /etc/services ", true),
            new Answer(" setfacl -x student /etc/services ", false)
          ]
        ),
        new Question(
          "ACL jsou povolena na všech Linuxových systémech.",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Ano", false),
            new Answer("Ne", false)
          ]
        ),
      ]),
      new Test('5. Lekce: Procesy a Signály', '2.5.1', [
        new Question(
          "Co udává hodnota PPID u procesu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" PID jeho rodičovského procesu, ze kterého se proces oddělil ", true),
            new Answer(" User ID uživatele, který ho vytvořil ", false),
            new Answer(" Množství paměti, kterou proces využívá ", false)
          ]
        ),
        new Question(
          "Co se děje s procesem, který je ve stavu RUNNING (Běžící)?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Čeká na volný procesorový čas. ", false),
            new Answer(" Je právě zpracováván procesorem. ", true),
            new Answer(" Proces nedělá nic, jen čeká. ", false)
          ]
        ),
        new Question(
          "Strom procesů zobrazíme příkazem:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" ps aux ", false),
            new Answer(" ps -tree ", false),
            new Answer("pstree", true)
          ]
        ),
        new Question(
          "Jak ovlivní následující blok kodu aktuální shell?{ cat /etc/passwd | wc -l ; ls; }",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Proces se provede v aktuálním shellu ", true),
            new Answer(" Proces se provede v subshellu ", false),
            new Answer(" Proces se neprovede ", false)
          ]
        ),
        new Question(
          "Co je systémové volání fork()?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Vytvoření kopie běžícího procesu ", false),
            new Answer(" Ukončení běžícího procesu ", false),
            new Answer(" Upozornění, že je čas k obědu ", false)
          ]
        ),
        new Question(
          "Který příkaz použijeme pro dynamický (měnící se v čase) výpis procesů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" ps aux ", false),
            new Answer("procs", false),
            new Answer("top", true)
          ]
        ),
        new Question(
          "Kterým příkazem vypíšeme všechny běžící procesy sleep v systému?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" sudo pgrep sleep ", true),
            new Answer(" ps | grep sleep ", true),
            new Answer(" ps aux | grep sleep ", true)
          ]
        ),
        new Question(
          "Co je to /proc?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Adresář, který obsahuje průběžné systémové informace ", true),
            new Answer(" Adresář, který obsahuje soubory uložené na disku ", false),
            new Answer(" Je to virtualní souborový systém (pseudo-souborový systém) ", true),
            new Answer(" Místo, kde kernel posílá aktuální informace procesech ", true)
          ]
        ),
        new Question(
          "Které z následujících příkazů mění prioritu procesů?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("top", false),
            new Answer("ps", false),
            new Answer("nice", true),
            new Answer("renice", true)
          ]
        ),
        new Question(
          "Vyber pravdivá tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Subshell je podproces, který je vytvořen shellem. ", true),
            new Answer(" Subshell můžeme opustit pomocí zkratky Ctrl + D ", false),
            new Answer(" Změny provedé v subshellu ovlivní i jeho rodiče. ", true),
            new Answer(" Subshell můžeme vytvořit příkazem bash ", true)
          ]
        ),
      ]),
      new Test('4. Lekce: Balíčky ', '2.4.1', [
        new Question(
          "Které balíkovací systémy souvisí s Red Hat distribucemi?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("pacman", false),
            new Answer("yum", true),
            new Answer(" apt-get ", false),
            new Answer("rpm", true)
          ]
        ),
        new Question(
          "Nízkoúrovňové balíkovací systémy související s RedHat a Debian rodinami se jmenují:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" dnf ", false),
            new Answer("dpkg", true),
            new Answer("rpm", true),
            new Answer(" apt-get ", false)
          ]
        ),
        new Question(
          "Jak bychom na distribuci RedHatu zjistili, jaké máte nainstalované balíčky?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" yum list ", true),
            new Answer(" rpm -qa ", false),
            new Answer(" rpm -lp ", true),
            new Answer(" rpm -aq ", true)
          ]
        ),
        new Question(
          "Mezi high level operace při práci s balíčky patří:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" rozbalování souborů z balíčku a jejich umístění na správném místě ", true),
            new Answer(" kontrola konfliktů ", true),
            new Answer(" kompilace softwaru ", false),
            new Answer(" kontrola závislosti ", true)
          ]
        ),
        new Question(
          "Místo, kam se ukládají vaše repozitáře:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /etc/apt/repos.d/ ", false),
            new Answer(" /etc/yum.repos.d/ ", true),
            new Answer(" /apt/repos.d/ ", false),
            new Answer(" /repos/ ", false)
          ]
        ),
        new Question(
          "Jak zjistím dodatečnou informaci o nějakém balíčku (krátký popis, verze, ...)?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" yum info package_name ", true),
            new Answer(" yum notes package_name ", false),
            new Answer(" rpm -qi package_name ", true),
            new Answer(" rpm -qf package_name ", false)
          ]
        ),
        new Question(
          "Jak zobrazím seznam konfiguračních souborů pro konkrétní balíček pomocí RPM?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" rpm -qR package_name ", false),
            new Answer(" rpm -qc package_name ", true),
            new Answer(" rpm -ev –nodeps package_name ", false),
            new Answer(" rpm -qi package_name ", false)
          ]
        ),
        new Question(
          "Když pomocí nízkoúrovňového balíkovacího systému (RPM, DPKG) odstraním nějaký balíček...",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" odstraním pouze ten konkétní balíček. ", true),
            new Answer(" odstraním všechny jeho závislosti. ", false),
            new Answer(" budu mít konzistentní systém. ", false),
            new Answer(" tak mohu způsobit, že mi nebude fungovat software, který je na něm závislý. ", true)
          ]
        ),
        new Question(
          "Mezi známé linuxové repozitáře patří například:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("EPEL", true),
            new Answer("Canonical", false),
            new Answer("Repobase", false),
            new Answer(" RPM Fusion ", true)
          ]
        ),
        new Question(
          "Ve výchozích repozitářích u Red Hat nebo Debian distribucí se nachází software, který je:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("zdarma", true),
            new Answer("proprietární", false),
            new Answer("svobodný", true),
            new Answer(" s omezenými autorskými právy ", false)
          ]
        ),
      ]),
      new Test('4. Lekce: Kompilace', '2.4.2', [
        new Question(
          "Co je to kompilace?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" proces, kdy přeložíme zdrojové kódy aplikace do formátu, kterému rozumí počítač ", true),
            new Answer(" proces, kdy přeložíme zdrojové kódy aplikace do binární formy ", true),
            new Answer(" proces, kdy extrahujeme soubory z archivu ", false),
            new Answer(" proces, kdy instalujeme balíček pomocí správce balíčků ", false)
          ]
        ),
        new Question(
          "Binární soubor, zkráceně binárka je:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" soubor, který obsahuje řetězec nul a jedniček ", true),
            new Answer(" spustitelný soubor ", true),
            new Answer(" textový soubor ", false),
            new Answer(" soubor, který pro přečtení třeba nějakým způsobem interpretovat ", true)
          ]
        ),
        new Question(
          "program který build provádí se nazývá:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("sgi", false),
            new Answer("make", true),
            new Answer("gcc", false),
            new Answer("create", false)
          ]
        ),
        new Question(
          "Co je to built?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Konečná fáze kompilace. ", false),
            new Answer(" Synonymum pro kompilaci. ", true),
            new Answer(" Termín nesouvisející s kompilací. ", false),
            new Answer(" Kompilační program. ", false)
          ]
        ),
        new Question(
          "Nový build potřebuji, když:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" chci interpretovat skripty. ", false),
            new Answer(" potřebuji překlad algoritmů zapsaných ve vyšším programovacím jazyce do jazyka nižšího, případně strojového kódu. ", true),
            new Answer(" chci přeložit lidsky čitelný zápis do strojových instrukcí. ", true),
            new Answer(" provedu změny ve zdrojovém kódu programu. ", true)
          ]
        ),
      ]),
      new Test('6. Lekce: Souborové Systémy', '2.6.1', [
        new Question(
          "Jaké vlastnosti má soubor typu Runtime?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Zabírá na disku největší místo ", false),
            new Answer(" Nelze ho odstranit z disku ", false),
            new Answer(" Fyzicky není na disku a obnovuje se po každém restartu ", true)
          ]
        ),
        new Question(
          "Vyberte správné znění jedné z nejznámějších linuxových abstrakcí.",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Vše co jde, je v systému považováno za soubor ", true),
            new Answer(" Vše co jde, je v systému považováno na proces ", false),
            new Answer(" Systém nepoužívá žádné soubory ", false)
          ]
        ),
        new Question(
          "Jaké složky jsou na klasickém linuxovém systému?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /dev ", true),
            new Answer(" /tmp ", true),
            new Answer(" /etc ", true),
            new Answer(" /log ", false)
          ]
        ),
        new Question(
          "K čemu slouží adresář /boot ?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Je to domovský adresář uživatele root ", false),
            new Answer(" Jsou zde uloženy dočasné soubory ", false),
            new Answer(" Jsou zde data potřebná ke startu systému ", true)
          ]
        ),
        new Question(
          "Vyberte pravdivá tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Adresář /proc je \"virtuální souborový systém\" ", true),
            new Answer(" Adresář / je kořenovým adresářem systému ", true),
            new Answer(" Adresář /home je domovským adresářem všech uživatelů ", false)
          ]
        ),
        new Question(
          "Vyber správné tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" složka /etc obsahuje konfigurační soubory pro systém a aplikace ", true),
            new Answer(" složka /boot obsahuje zavaděč systému a mimo jiné obraz kernelu ", true),
            new Answer(" v /tmp můžeme najít dočasné soubory pro práci s pamětí RAM ", false),
            new Answer(" složka /dev obsahuje pouze fyzické zařízení (disk, ...) připojené k počítači ", false)
          ]
        ),
        new Question(
          "Jak definujeme filesystém na Linuxu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" invertovaná struktura podobná seznamu ", false),
            new Answer(" hierarchická struktura, která má tvar klasického stromu ", false),
            new Answer(" hierarchická struktura, která má tvar inverzního stromu ", true),
            new Answer(" potřebná součást (vrstva) pro práci s daty na disku ", true)
          ]
        ),
        new Question(
          "Jaké jsou nejčastější typy formátování na Linuxu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("NFTS", false),
            new Answer("ext4", true),
            new Answer("FAT", false),
            new Answer("HFS+", false),
            new Answer("ext3", true)
          ]
        ),
        new Question(
          "Pokud bychom se chtěli podívat na formát souborových systémů, který z následujících příkazů použijeme?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" tree -d -L 1 ", false),
            new Answer("lsof", false),
            new Answer(" df -T ", true),
            new Answer(" du -h ", false)
          ]
        ),
        new Question(
          "Jak se nazývá databáze, která spravuje soubory ve filesystému?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Boot blok ", false),
            new Answer(" Super blok ", false),
            new Answer(" Inode tabulka ", true),
            new Answer(" Virtuální souborový systém ", false)
          ]
        ),
      ]),
      new Test('6. Lekce: Zařízení', '2.6.2', [
        new Question(
          "Které z následujících zařízení je fyzické i logické?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("HDD", false),
            new Answer("SSD", false),
            new Answer("/mnt", false),
            new Answer("/media", false),
            new Answer("/dev", true),
            new Answer(" /dev/sda ", true)
          ]
        ),
        new Question(
          "Jaké pseudozařízení známe?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("null", true),
            new Answer("random", true),
            new Answer("sdb", false),
            new Answer("full", true),
            new Answer("zero", true),
            new Answer("SATA", false)
          ]
        ),
        new Question(
          "Co je to SCSI/SATA?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Jedná se o pseudozařízení. ", false),
            new Answer(" Jedná se o protokoly, pomocí nichž můžeme komunikovat s externími, fyzickými zařízeními. ", true),
            new Answer(" Jedná se o tzv. proudy dat. ", false),
            new Answer(" Jedná se o jednotlivé oddíly na disku. ", false)
          ]
        ),
        new Question(
          "Které z následujích může být ekvivalentem například k disku C: na Windows?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /dev/sda ", false),
            new Answer(" /dev/sdc ", false),
            new Answer(" /dev/sda1 ", true),
            new Answer(" /dev/sdc1 ", true)
          ]
        ),
        new Question(
          "Vyber správné tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Disk se dělí na oddíly. ", true),
            new Answer(" Oddíly se dělí na disk. ", false),
            new Answer(" Jednotlivé disky se označují čísly. ", false),
            new Answer(" Jednotlivé oddíly se označují čísly. ", true)
          ]
        ),
        new Question(
          "Jak se jmenuje pseudozařízení, které při zápisu příjme a zahodí data, které do něho pošleme, a při čtení nic navrátí?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /dev/zero ", false),
            new Answer(" /dev/null ", true),
            new Answer(" /dev/random ", false),
            new Answer(" /dev/full ", false)
          ]
        ),
        new Question(
          "Co je to fstab?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Je to zařízení, které není ve skutečnosti připojeno k našemu systému. ", false),
            new Answer(" Je to abstraktní vrstva, která se stará o sjednocení způsobu přístupu k našim datům. ", false),
            new Answer(" Je to protokol, pomocí kterého můžeme komunikovat s externími, fyzickými zařízeními. ", false),
            new Answer(" Je to adresář s tabulkou souborových systémů, která se mountují při bootu a adresářích. ", true)
          ]
        ),
        new Question(
          "Do kterého typu zařízení spadá pevný disk?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Znaková", false),
            new Answer("Bloková", true),
            new Answer("Pipe", false),
            new Answer("Socket", false)
          ]
        ),
        new Question(
          "Co je to mountpoint?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Je to adresář, kam můžeme připojit nové zařízení. ", true),
            new Answer(" Jedná se o zařízení, které je fyzické i logické. ", false),
            new Answer(" Jedná se o fyzický vstup pro USB disk. ", false),
            new Answer(" Jedná se o pseudozařízení. ", false)
          ]
        ),
        new Question(
          "Které příkazy nám můžou pomoci bezpečně odebrat fyzické zařízení?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("mount", false),
            new Answer("umount", true),
            new Answer("unmount", false),
            new Answer("lsof", true)
          ]
        ),
      ]),
      new Test('6. Lekce: Inodes a Odkazy', '2.6.2', [
        new Question(
          "Vyber správné tvrzení o inodes:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Každý indo má unikátní číslo v rámci filesystému. ", true),
            new Answer(" Na systému máme omezený počet inodes. ", true),
            new Answer(" Inodes se nacházejí v části filesystému, která je vyhrazená pro samotná data. ", false),
            new Answer(" Inode číslo můžeme vypsat pomocí příkazu ls nebo stat. ", true),
            new Answer(" Některé typy systémů podporují tvorbu nových inodes v průběhu používání disku. ", true)
          ]
        ),
        new Question(
          "Které informace obsahují inodes?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Velikost a název souboru. ", false),
            new Answer(" Přístupové údaje o souborech a vlastnících. ", true),
            new Answer(" Časové známky - atime, ctime a mtime ", true),
            new Answer(" ACL (rozšířené přístupy) ", true)
          ]
        ),
        new Question(
          "V kterých typech filesystémů je počet inodes předem určen?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("ext3", true),
            new Answer("ext4", true),
            new Answer("XFS", false),
            new Answer("JFS", false)
          ]
        ),
        new Question(
          "Který z následujících příkazů slouží pro výpis konkrétních inode/s?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("stat", true),
            new Answer(" stat -i ", false),
            new Answer("ls", false),
            new Answer(" ls -i ", true),
            new Answer(" find / -inum $inode ", true)
          ]
        ),
        new Question(
          "Co je to odkaz?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Soubor, který je vytvořen kopií již existujícího souboru. ", false),
            new Answer(" Soubor, který vytváří nové jméno pro již existující soubor. ", true),
            new Answer(" Soubor, který když smažeme, smažeme i původní soubor. ", false),
            new Answer(" Je to synonymum k inode. ", false)
          ]
        ),
        new Question(
          "Jaký je rozdíl mezi kopií souboru a pevným odkazem na soubor?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Kopie dostane nové místo na disku. ", true),
            new Answer(" Pevný odkaz dostane nové místo na disku. ", false),
            new Answer(" Když změním kopii, změním i původní soubor. ", false),
            new Answer(" Když změním pevným odkaz, změním i původní soubor. ", true),
            new Answer(" Není mezi nimi žádný rozdíl. ", false)
          ]
        ),
        new Question(
          "Jak zjistíme, jestli je daný soubor symbolický odkaz?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Pomocí čísla za přístupovými právy. ", false),
            new Answer(" Pomocí prvního bitu v přístupových právech. ", true),
            new Answer(" Pomocí názvu souboru ", false),
            new Answer(" Pomocí historie souboru ", false)
          ]
        ),
        new Question(
          "Pevný odkaz (hard link) má následující vlastnosti:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Jedná se o odkaz na místo konkrétního souboru na disku. ", true),
            new Answer(" Můžeme ho použít na soubory i složky. ", false),
            new Answer(" Můžeme vytvořit hard link napříč rozdílnými filesystémy. ", false),
            new Answer(" Při vytvoření nového hard linku dochází ke kopírování (duplikaci) dat. ", false)
          ]
        ),
        new Question(
          "Symbolický odkaz (symbolic link) má následující vlastnosti:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Funguje pouze v rámci jednoho filysystému. ", false),
            new Answer(" Jedná se o odkaz na jméno (jako například zástupce ve Windows). ", true),
            new Answer(" Můžeme ho použít na soubory i složky. ", true),
            new Answer(" Příklad vytvoření symbolic linku může být: ln /etc/passwd /tmp/xyz ", false)
          ]
        ),
        new Question(
          "Vyber správné/á tvrzení:",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" Můžeme vytvořit symbolic link dvěma filesystémy (disky). ", true),
            new Answer(" S vytvořením nového symbolic linku vytváříme nový inode ", true),
            new Answer(" Pokud se počet symbolických odkazů rovná nule, soubor je permanentně odstraněn z disku. ", false),
            new Answer(" Příkazem ln /etc/passwd /etc/passwd.link se vytvoří soubor /etc/passwd.link se stejnými právy, velikostí i vlastníkem jako má soubor /etc/passwd ", true)
          ]
        ),
      ]),
    ]),
    new Course("Python Akademie", "python", "engetoB", [
      new Test('exampleTest', 'ext', [
        new Question(
          "example",
          QuestionTypes.CHECKBOX,
          [
            new Answer("answer1", false),
            new Answer("answer2", false),
            new Answer("answer3", false),
            new Answer("answer4", false),
            new Answer("answer5", false),
            new Answer("answer6", false)
          ]
        ),
      ]),
    ])
  ];
}
/*
ng build --prod --output-path docs --base-href /QuizOMatic/
*/
