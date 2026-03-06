// Static content data — converted from backend/data.py
// This file replaces the FastAPI backend for static deployment on Vercel.

export const CONTENT = {
    home: {
        title: "Powerlifting Italia",
        subtitle: "Forza. Tecnica. Sacrificio.",
        description:
            "Il Powerlifting è uno sport di forza che si basa su tre movimenti fondamentali: " +
            "\nSQUAT: il re degli esercizi" +
            "\nPANCA PIANA: la regina della precisione" +
            "\nSTACCO DA TERRA: il principe della forza\n\n" +
            "Che tu sia un principiante od un atleta esperto, questo sito è la tua guida completa per imparare la tecnica, migliorare la mobilità e portare la tua Forza al livello successivo.",
        videos: [],
    },

    squat: {
        title: "Squat",
        subtitle: "Il re degli esercizi",
        description:
            "Lo Squat è considerato il re degli esercizi di forza. Coinvolge praticamente tutta la muscolatura del corpo, " +
            "con un focus particolare su quadricipiti, glutei, femorali e core. Lo Squat viene eseguito " +
            "con il bilanciere posizionato sulla schiena (low bar o high bar), scendendo fino alla 'rottura' del parallelo, " +
            "cioè quando l'anca scende sotto il livello del ginocchio. " +
            "La tecnica è fondamentale: una buona posizione dei piedi, una corretta respirazione ed un movimento fluido sono " +
            "elementi imprescindibili per un sollevamento sicuro, valido da gara e pesante. In una competizione di Powerlifting, " +
            "il movimento può iniziare solamente dopo il comando 'Squat' del Capopedana. Terminato il movimento, è necessario " +
            "attendere il comando 'Rack' per riposizionare il bilanciere sugli appoggi. In caso contrario, il sollevamento " +
            "sarà considerato nullo.",
        tips: [
            "Fai un unrack preciso: pancia fuori, anca sotto, bilanciere che allunga il trapezio",
            "2 passi piccoli indietro, piedi larghezza spalle o più, punte leggermente divaricate",
            "Prendi aria senza muoverti troppo, ASPETTA",
            "Parti lentamente, stando a centro piede. Ginocchia aperte, fatti spazio",
            "Come entri in buca, così ne esci",
            "Chiudi il movimento, espira SENZA PERDERE TENSIONE. ASPETTA. Riparti",
        ],
        videos: [
            {
                title: "Tecnica dello Squat – Tutorial Completo",
                videoId: "gsNoPYwWXeM",
                description:
                    "Tutorial completo sulla tecnica dello squat: unrack, posizione dei piedi, discesa in buca e risalita.",
            },
            {
                title: "Squat Low Bar vs High Bar",
                videoId: "Dy_UzE2BNBI",
                description:
                    "Confronto dettagliato tra le due varianti di Squat più usate nel Powerlifting.",
            },
            {
                title: "Errori comuni nello Squat",
                videoId: "u_Q3bBq7YKY",
                description:
                    "I difetti tecnici più frequenti nello Squat e come correggerli.",
            },
            {
                title: "Come aumentare lo Squat",
                videoId: "9bL-GRMJB5c",
                description:
                    "Strategie pratiche per incrementare il massimale nello Squat.",
            },
        ],
        tecnica: [
            {
                title: "Squat – Analisi Tecnica Approfondita",
                videoId: "gsNoPYwWXeM",
                description:
                    "Analisi frame-by-frame della posizione, del bracing e della traiettoria del bilanciere.",
            },
            {
                title: "Setup e Unrack dello Squat",
                videoId: "Dy_UzE2BNBI",
                description:
                    "Come eseguire un unrack sicuro e preciso, posizionamento dei piedi e attivazione del core prima di scendere.",
            },
        ],
        varianti: [
            {
                title: "High Bar vs Low Bar Squat",
                videoId: "Dy_UzE2BNBI",
                description:
                    "High Bar (bilanciere alto, busto verticale) vs Low Bar (bilanciere basso, busto inclinato): differenze muscolari e di tecnica.",
            },
            {
                title: "Paused Squat – Come e Perché Usarlo",
                videoId: "9bL-GRMJB5c",
                description:
                    "Il Paused Squat elimina l'effetto elastico e costruisce forza pura in buca. Fondamentale per chi vuole migliorare il punto di sticking.",
            },
        ],
        storico: [
            {
                title: "Squat 220kg – 1° gara SLI",
                videoId: "P3RYGShaBQk",
                description:
                    "Esempio di alzata da gara: unrack preciso, discesa controllata, chiusura pulita. Da usare come riferimento tecnico.",
            },
            {
                title: "Squat 180kg PR Personale",
                videoId: "u_Q3bBq7YKY",
                description:
                    "Nuovo record personale. Notare la posizione dei piedi e la stabilità del core nella discesa.",
            },
        ],
    },

    panca: {
        title: "Panca Piana",
        subtitle: "La regina della precisione",
        description:
            "La Panca Piana è l'esercizio di spinta per eccellenza nel Powerlifting, e probabilmente il più popolare " +
            "in ogni palestra. Allena principalmente il petto ed " +
            "i tricipiti, ma ci sono infiniti muscoli secondari coinvolti (specialmente quelli di stabilizzazione). " +
            "In gara il movimento inizia dopo il comando 'Start' e si muove finchè il bilanciere non tocca il petto. " +
            "Al comando 'Press', l'atleta può spingere il bilanciere verso l'alto fino all'estensione completa delle braccia. " +
            "Dopo il comando 'Rack', l'atleta può riposizionare il bilanciere sugli appoggi. " +
            "Il setup sulla panca è cruciale: un corretto posizionamento scapolare, una presa morbida ed una solida tenuta di gambe " +
            "(leg drive) renderanno l'alzata sicura assicurando la massima performance.",
        tips: [
            "Metti gli indici sui segni degli 81 cm (larghezza massima consentita)",
            "Alza il culo e striscia sulla panca fino ad arrivare sotto al bilanciere, usando l'attrito per deprimere le scapole. Fai l'unrack meticolosamente, pensando di spingere sulla panca piuttosto che spingere via il bilanciere",
            "Mentre porti in posizione il bilanciere, mantieni l'assetto scapolare guadagnato nei punti precedenti",
            "Appoggia LENTAMENTE il culo sulla panca, mantenendo la tensione. ASPETTA",
            "Respira. ASPETTA. Puntati contro il bilanciere. ASPETTA",
            "Parti lentamente senza perdere tensione. Mentre il bilanciere scende, pensa di avvicinartici",
            "Fermo netto. il bilanciere non si muove. Parti piano tenendo le scapole",
            "Espira SENZA PERDERE TENSIONE. ASPETTA. Riparti",
        ],
        videos: [
            {
                title: "Tecnica della Panca Piana – Guida Completa",
                videoId: "rT7DgCr-3pg",
                description:
                    "Guida completa su setup, arco, leg drive e traiettoria del bilanciere nella Panca Piana.",
            },
            {
                title: "Setup perfetto per la Panca Piana",
                videoId: "rxD321l2svE",
                description:
                    "Come posizionarsi sulla panca: retrazione scapolare, presa, posizione dei piedi e unrack.",
            },
            {
                title: "Come aumentare la Panca Piana",
                videoId: "vcnOWM-fRl0",
                description:
                    "Metodi e programmazione per incrementare progressivamente il massimale in panca.",
            },
            {
                title: "Errori comuni nella Panca Piana",
                videoId: "52ONPV3S8-I",
                description:
                    "Gli errori tecnici più diffusi nella Panca Piana e come correggerli prima che diventino abitudini.",
            },
        ],
        tecnica: [
            {
                title: "Setup e Arco – La Base della Panca Piana",
                videoId: "rxD321l2svE",
                description:
                    "Il setup è il 80% della panca: scapole depresse, leg drive, unrack controllato. Ogni dettaglio spiegato passo per passo.",
            },
            {
                title: "Traiettoria del Bilanciere e Leg Drive",
                videoId: "rT7DgCr-3pg",
                description:
                    "La traiettoria corretta del bilanciere nella discesa e nella spinta, e come usare le gambe per massimizzare la forza.",
            },
        ],
        varianti: [
            {
                title: "Close Grip Bench Press – Presa Stretta",
                videoId: "vcnOWM-fRl0",
                description:
                    "Presa più stretta degli 81 cm per isolare i tricipiti e rinforzare il lockout. Ideale come complementare alla panca da gara.",
            },
            {
                title: "Paused Bench Press – Panca con Pausa",
                videoId: "52ONPV3S8-I",
                description:
                    "La variante obbligatoria in gara: il bilanciere tocca il petto e rimane fermo prima della spinta. Sviluppa forza reale partendo da zero.",
            },
        ],
        storico: [
            {
                title: "Panca 130kg – Gara Regionale",
                videoId: "rT7DgCr-3pg",
                description:
                    "Alzata completa da gara: setup solido, arco mantenuto, leg drive evidente. Comando 'Press' rispettato.",
            },
            {
                title: "Panca 120kg PR",
                videoId: "rxD321l2svE",
                description:
                    "Record personale in allenamento. Buona retrazione scapolare e tocco pulito al petto.",
            },
        ],
    },

    stacco: {
        title: "Stacco da Terra",
        subtitle: "Il principe della forza",
        description:
            "Lo Stacco da Terra è l'esercizio che consente di sollevare i pesi maggiori nel Powerlifting. " +
            "Coinvolge tutta la catena posteriore: femorali, glutei, lombari, trapezi ecc con importanti differenze fra stacco sumo e stacco regular (o convenzionale). " +
            "Entrambe le modalità sono valide in gara. La chiave è mantenere la schiena neutra, il bilanciere vicino al corpo " +
            "per tutta la durata del movimento e l'anca carica sempre. " +
            "Lo stacco non possiede una fase negativa (eccentrica) prima di quella positiva (concentrica). " +
            "Per questo motivo è fondamentale partire da una posizione di massima tensione e non mollare mai la presa sul bilanciere. " +
            "In gara, l'atleta può iniziare il movimento liberamente, " +
            "ma dovrà aspettare il comando 'Giù' per poter appoggiare il bilanciere.",
        tips: [
            "Scendi in squat verso il bilanciere, SENZA PENSARE al bilanciere",
            "Quando le mani toccano il bilanciere, afferralo SENZA CAMBIARE POSIZIONE, prendi aria e ASPETTA",
            "NON stringere il bilanciere",
            "Inizia a spingere con i piedi, come se volessi entrare nel terreno",
            "Aspetta il massimo allungamento delle braccia per partire: non sei tu a decidere quando staccare il bilanciere da terra. Bilanciere a contatto con le tibie per tutta l'alzata",
            "Vai prima tutto su, poi tutto indietro",
        ],
        videos: [
            {
                title: "Tecnica dello Stacco da Terra – Tutorial",
                videoId: "op9kVnSso6Q",
                description:
                    "Tutorial completo sullo Stacco: posizione di partenza, bracing, leg drive e chiusura del movimento.",
            },
            {
                title: "Stacco Conventional vs Sumo",
                videoId: "r0MkFmkSBf8",
                description:
                    "Confronto tra le due varianti da gara: differenze muscolari, meccaniche e di tecnica.",
            },
            {
                title: "Errori comuni nello Stacco",
                videoId: "XxMHCbbjbEU",
                description:
                    "I difetti più frequenti nello Stacco (schiena che si arrotonda, perdita del bilanciere, rounding lombare) e come eliminarli.",
            },
            {
                title: "Programma per aumentare lo Stacco",
                videoId: "6d7Cqnm0-v4",
                description:
                    "Schema di programmazione specifico per aumentare il massimale nello Stacco da Terra.",
            },
        ],
        tecnica: [
            {
                title: "Setup e Bracing nello Stacco",
                videoId: "op9kVnSso6Q",
                description:
                    "Come avvicinarsi al bilanciere, trovare la posizione di partenza ottimale ed eseguire il bracing corretto prima di staccare.",
            },
            {
                title: "Leg Drive e Traiettoria del Bilanciere",
                videoId: "XxMHCbbjbEU",
                description:
                    "La spinta con i piedi e il mantenimento del bilanciere incollato alle tibie: le due chiavi per uno stacco potente e sicuro.",
            },
        ],
        varianti: [
            {
                title: "Stacco Convenzionale vs Sumo – Quale Scegliere",
                videoId: "r0MkFmkSBf8",
                description:
                    "Come scegliere la variante più adatta alla propria morfologia: leve, mobilità dell'anca e forza dei muscoli coinvolti.",
            },
            {
                title: "Romanian Deadlift – Tecnica e Benefici",
                videoId: "6d7Cqnm0-v4",
                description:
                    "Il RDL è il complementare per eccellenza dello stacco: allena i femorali in allungamento e costruisce la catena posteriore senza sovraccaricare il SNC.",
            },
        ],
        storico: [
            {
                title: "Stacco 250kg – Gara Nazionale",
                videoId: "op9kVnSso6Q",
                description:
                    "Massimale in gara: partenza esplosiva, bilanciere incollato alle tibie, chiusura con anca bloccata. Attesa del comando 'Giù'.",
            },
            {
                title: "Stacco 230kg PR Allenamento",
                videoId: "XxMHCbbjbEU",
                description:
                    "Record personale in sala pesi. Notare il bracing pre-stacco e la fase di bloccaggio in cima.",
            },
        ],
    },

    mobilita: {
        title: "Mobilità",
        subtitle: "Muoviti meglio, solleva di più",
        description:
            "La mobilità è spesso il fattore limitante nei Powerlifters. Una buona mobilità di caviglie, fianchi, " +
            "spalle e torace permette di raggiungere posizioni ottimali nello Squat, nella Panca e nello Stacco, " +
            "riducendo il rischio di infortuni e massimizzando la forza espressa. Dedicare anche solo 10-15 minuti " +
            "al giorno agli esercizi di mobilità porta a miglioramenti significativi nel lungo periodo.",
        tips: [],
        videos: [],
    },

    stretching: {
        title: "Stretching",
        subtitle: "Recupera e previeni gli infortuni",
        description:
            "Lo stretching è parte integrante del recupero di un Powerlifter. Distinto dalla mobilità (che lavora " +
            "sulla capacità articolare attiva), lo stretching si occupa di allungare i muscoli e ridurne la tensione " +
            "residua dopo un allenamento intenso. Si distingue tra stretching statico (post allenamento) e dinamico " +
            "(pre allenamento), spesso incluso nella routine di riscaldamento/mobilità. Includere entrambi nella propria routine porta a muscoli più elastici, meno DOMS " +
            "e una carriera sportiva più lunga.",
        tips: [],
        videos: [],
    },

    dips: {
        title: "Dips",
        subtitle: "I cavalieri dell'ipertrofia",
        description:
            "I Dips alle parallele sono uno degli esercizi complementari più efficaci per un powerlifter, " +
            "ed un esercizio fondamentale per uno streetlifter. " +
            "Coinvolgono in modo primario i tricipiti ed il pettorale inferiore, muscoli fondamentali per la " +
            "Panca Piana. A differenza della panca, i Dips permettono un range di movimento " +
            "completo e naturale per l'articolazione della spalla. Esistono due varianti principali: " +
            "inclinato dinamicamente in avanti (orientato alla prestazione) e verticale (complementare generico). " +
            "Per i powerlifter è consigliata la variante verticale con il busto eretto, mentre l'altra variante necessita un lavoro specifico di apprendimento.",
        tips: [
            "Scendi dal rialzo lentamente, lasciando che la zavorra allunghi e precarichi il pettorale",
            "Respira, stabilizza, ASPETTA",
            "Scendi finchè la testa della spalle si trova sotto al livello del gomito",
            "Come entri in 'buca', così ne esci",
            "Chiudi il movimento senza perdere tensione. ASPETTA",
        ],
        videos: [
            {
                title: "Dips alle Parallele – Tecnica Corretta",
                videoId: "2z8JmcrW-As",
                description:
                    "Posizione del busto, angolo al gomito e controllo del movimento per eseguire i Dips in modo sicuro ed efficace.",
            },
            {
                title: "Dips con Peso – Come Progredire",
                videoId: "yN6Q1UI_xkE",
                description:
                    "Come e quando aggiungere carico ai Dips usando cintura zavorrata o giubbotto.",
            },
            {
                title: "Dips per Tricipiti: Massimizzare il Lockout",
                videoId: "wjUmnZH528Y",
                description:
                    "Come usare i Dips per potenziare specificamente il lockout della Panca Piana.",
            },
        ],
        tecnica: [
            {
                title: "Tecnica dei Dips – Busto e Gomiti",
                videoId: "2z8JmcrW-As",
                description:
                    "Come impostare il busto (verticale per tricipiti, inclinato per petto), dove tenere i gomiti e come controllare la discesa senza rimbalzi.",
            },
            {
                title: "Dips Zavorrati – Tecnica con il Carico",
                videoId: "yN6Q1UI_xkE",
                description:
                    "Le accortezze tecniche da adottare quando si aggiunge peso: stabilità del core, velocità di discesa e posizione del disco.",
            },
        ],
        varianti: [
            {
                title: "Dips Verticali vs Inclinati – Differenze",
                videoId: "wjUmnZH528Y",
                description:
                    "Busto eretto = tricipiti, busto inclinato = pettorale inferiore. Spiega quando usare ciascuna variante in base all'obiettivo.",
            },
            {
                title: "Assisted Dips con Elastico",
                videoId: "2z8JmcrW-As",
                description:
                    "Come usare una banda elastica per ridurre il peso e permettere a chi è alle prime armi di eseguire il movimento corretto fin da subito.",
            },
        ],
        storico: [
            {
                title: "Dips +60kg – Sessione di Forza",
                videoId: "yN6Q1UI_xkE",
                description:
                    "Dips zavorrati con 60kg extra alla cintura. Tecnica verticale mantenuta, discesa controllata fino a 90° al gomito.",
            },
            {
                title: "Dips +40kg PR",
                videoId: "wjUmnZH528Y",
                description:
                    "Record personale nei dips ponderati. Da questo video si nota il miglioramento nel controllo eccentrico rispetto alle sessioni precedenti.",
            },
        ],
    },

    trazioni: {
        title: "Trazioni",
        subtitle: "I ninja della schiena",
        description:
            "Le Trazioni alla sbarra sono l'esercizio di tirata verticale per eccellenza. " +
            "Allenano principalmente il grande dorsale, i bicipiti ed i muscoli della schiena alta, " +
            "che sono essenziali per mantenere il bilanciere a contatto col corpo nello Stacco e per la stabilità " +
            "durante lo Squat. Le varianti principali si differenziano per presa: " +
            "prona (pull-up), supina (chin-up) e neutra. " +
            "Per i powerlifter, le trazioni zavorrate preferibili sono in presa prona, perché non necessitano " +
            "di un condizionamento specifico di gomiti e polsi. " +
            "In ogni caso, sono un complementare di altissimo valore: " +
            "una schiena forte e larga è sinonimo di sicurezza su tutte e tre le alzate.",
        tips: [
            "Scendi dal rialzo lentamente, lasciando che la zavorra allunghi e precarichi il dorsale",
            "Respira, attiva, ASPETTA",
            "Punta il petto verso la sbarra, non il mento. Stai sempre vicino alla sbarra",
            "Tieni le gambe morbide ed in linea con la parte superiore del corpo",
            "Arriva con il mento sopra e davanti alla sbarra",
            "Scendi senza perdere la tensione accumulata, senza lasciarti andare a peso morto alla fine",
        ],
        videos: [
            {
                title: "Trazioni – Tecnica Perfetta da Zero",
                videoId: "eGo4IYlbE5g",
                description:
                    "Guida completa per imparare le trazioni: dead hang, retrazione scapolare, traiettoria e discesa controllata.",
            },
            {
                title: "Pull-up vs Chin-up: Differenze e Utilizzo",
                videoId: "t3nGUXSRFNg",
                description:
                    "Presa prona vs supina: quali muscoli lavora ciascuna variante e quando preferirla nel proprio programma.",
            },
            {
                title: "Trazioni Ponderate – Come Aggiungere Peso",
                videoId: "vc1E5CfRfos",
                description:
                    "Come e quando introdurre il peso nelle trazioni usando cintura, giubbotto o manubrio.",
            },
        ],
        tecnica: [
            {
                title: "Dead Hang e Retrazione Scapolare",
                videoId: "eGo4IYlbE5g",
                description:
                    "Partire dal dead hang completo e attivare le scapole prima della trazione: il fondamento tecnico per una trazione efficace e sicura.",
            },
            {
                title: "Gomiti verso il Basso, Petto verso la Sbarra",
                videoId: "t3nGUXSRFNg",
                description:
                    "Come portare i gomiti verso il basso e indietro (non verso fuori) per massimizzare l'attivazione del dorsale e completare il range di movimento.",
            },
        ],
        varianti: [
            {
                title: "Pull-up, Chin-up e Neutral Grip – Quale Usare",
                videoId: "t3nGUXSRFNg",
                description:
                    "Le tre prese principali (prona, supina, neutra) a confronto: muscoli coinvolti, difficoltà e contesto d'uso per powerlifter.",
            },
            {
                title: "Trazioni Ponderate – La Progressione Avanzata",
                videoId: "vc1E5CfRfos",
                description:
                    "Come usare cintura zavorrata o giubbotto per trasformare le trazioni in un vero esercizio di forza massimale.",
            },
        ],
        storico: [
            {
                title: "Trazioni Chin-up 52,5kg – 1° gara SLI",
                videoId: "hyemQWpldOA",
                description: "Standard da gara.",
            },
        ],
    },

    complementari: {
        title: "Complementari",
        subtitle: "Esercizi che fanno la differenza",
        description:
            "Gli esercizi complementari sono quelli che non fanno parte delle alzate principali di powerlifting e streetlifting" +
            "ma che contribuiscono in modo decisivo alla loro progressione. " +
            "Un atleta intelligente lavora sui propri punti deboli attraverso esercizi mirati: " +
            "Stacchi Rumeni e Good Morning per la catena posteriore, " +
            "Military Press per spalle e tricipiti, Barbell Row per la schiena alta, " +
            "Front Squat per il core e la postura. " +
            "Includere regolarmente questi esercizi nel programma riduce il rischio di infortuni " +
            "e colma i gap tecnici che limitano le alzate principali.",
        tips: [],
        videos: [
            { title: "To Be Done", videoId: "", description: "To Be Done" },
        ],
    },
}
