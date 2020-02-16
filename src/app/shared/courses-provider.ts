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
    new Course("Linux Akademie", "linux", "engeto", [
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
            new Answer(" ls -l 0> ", true),
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
          "Který z následujících operátorů je vhodný pro automatizaci procesů?\n",
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
        ),
      ])
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
      ])
    ])
  ];
}
