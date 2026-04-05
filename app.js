/* كيف نفهم الإسلام — HOW WE UNDERSTAND ISLAM — app.js v1.0 */
/* Based on "Kayfa Nafham al-Islam" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'كيف نفهم الإسلام',
    splashSub: 'فهم صحيح للإسلام — بسيط وعميق',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة آل عمران ٣: ١٠٤',
    tabHome: 'الرئيسية', tabConcepts: 'المفاهيم', tabPrinciples: 'المبادئ',
    tabQuiz: 'مسابقة', tabExplorer: 'استكشف', tabAbout: 'الكتاب',
    conceptsTitle: 'مفاهيم إسلامية',
    conceptsDesc: '٢٠ مفهوماً من كتاب كيف نفهم الإسلام — كل مفهوم بلغة بسيطة للجميع',
    principlesTitle: 'مبادئ أساسية',
    principlesDesc: 'قواعد ذهبية من الكتاب لفهم الإسلام فهماً صحيحاً',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبر معلوماتك عن الإسلام — ١٥ سؤال مع مساعدات',
    explorerTitle: 'استكشف الكتاب',
    explorerDesc: 'رحلة تفاعلية عبر فصول الكتاب التسعة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية يومية',
    dailyLabel: '✨ فكرة اليوم',
    verse: 'الآية',
    lesson: 'يرى الغزالي: الدرس',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في المفاهيم...',
    youngMode: '🌱 المستكشف الصغير',
    teenMode: '📚 الباحث الشاب',
    xpLabel: 'نقاط الخبرة',
    badgesLabel: 'الأوسمة',
    nextQ: 'السؤال التالي',
    lifeline5050: '📖 حذف إجابتين',
    lifelineHint: '🤲 استخارة',
    lifelineSheikh: '📞 اسأل الشيخ',
    quizCorrect: 'أحسنت! إجابة صحيحة',
    quizWrong: 'إجابة خاطئة',
    quizDone: 'أكملت المسابقة!',
    quizScore: 'النتيجة',
    quizRestart: 'أعد المسابقة',
    quizStart: 'ابدأ المسابقة',
    splashFeatures: [
      '٢٠ مفهوماً إسلامياً بلغة بسيطة',
      'مسابقة "من يريد أن يكون عالماً؟"',
      'وضعان: مستكشف صغير + باحث شاب',
      'نظام نقاط وأوسمة'
    ],
  },
  en: {
    appTitle: 'How We Understand Islam',
    splashSub: 'A correct understanding of Islam — simple and deep',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Imran 3:104',
    tabHome: 'Home', tabConcepts: 'Concepts', tabPrinciples: 'Principles',
    tabQuiz: 'Quiz', tabExplorer: 'Explorer', tabAbout: 'Book',
    conceptsTitle: 'Islamic Concepts',
    conceptsDesc: '20 concepts from How We Understand Islam — each one explained simply for everyone',
    principlesTitle: 'Core Principles',
    principlesDesc: 'Golden rules from the book for understanding Islam correctly',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge about Islam — 15 questions with lifelines',
    explorerTitle: 'Explore the Book',
    explorerDesc: 'An interactive journey through the book\'s nine chapters',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Daily Duas',
    dailyLabel: '✨ Today\'s Insight',
    verse: 'Verse',
    lesson: 'Al-Ghazali sees: Lesson',
    share: 'Share',
    searchPlaceholder: 'Search concepts...',
    youngMode: '🌱 Young Explorer',
    teenMode: '📚 Teen Scholar',
    xpLabel: 'Experience Points',
    badgesLabel: 'Badges',
    nextQ: 'Next Question',
    lifeline5050: '📖 Remove Two',
    lifelineHint: '🤲 Guidance',
    lifelineSheikh: '📞 Ask the Sheikh',
    quizCorrect: 'Well done! Correct answer',
    quizWrong: 'Wrong answer',
    quizDone: 'Quiz complete!',
    quizScore: 'Score',
    quizRestart: 'Restart Quiz',
    quizStart: 'Start Quiz',
    splashFeatures: [
      '20 Islamic concepts in simple language',
      '"Who Wants to Be a Scholar?" quiz',
      'Two modes: Young Explorer + Teen Scholar',
      'Points and badges system'
    ],
  },
  fr: {
    appTitle: 'Comment Comprendre l\'Islam',
    splashSub: 'Une compréhension correcte de l\'Islam — simple et profonde',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Imran 3:104',
    tabHome: 'Accueil', tabConcepts: 'Concepts', tabPrinciples: 'Principes',
    tabQuiz: 'Quiz', tabExplorer: 'Explorer', tabAbout: 'Livre',
    conceptsTitle: 'Concepts Islamiques',
    conceptsDesc: '20 concepts de Comment Comprendre l\'Islam — chacun expliqué simplement pour tous',
    principlesTitle: 'Principes Fondamentaux',
    principlesDesc: 'Règles d\'or du livre pour comprendre correctement l\'Islam',
    quizTitle: 'Qui Veut Être Savant ?',
    quizDesc: 'Testez vos connaissances sur l\'Islam — 15 questions avec aides',
    explorerTitle: 'Explorer le Livre',
    explorerDesc: 'Un voyage interactif à travers les neuf chapitres du livre',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Quotidiennes',
    dailyLabel: '✨ Pensée du Jour',
    verse: 'Verset',
    lesson: 'Al-Ghazali voit: Leçon',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les concepts...',
    youngMode: '🌱 Jeune Explorateur',
    teenMode: '📚 Chercheur Ado',
    xpLabel: 'Points d\'Expérience',
    badgesLabel: 'Badges',
    nextQ: 'Question Suivante',
    lifeline5050: '📖 Supprimer Deux',
    lifelineHint: '🤲 Guidance',
    lifelineSheikh: '📞 Demander au Sheikh',
    quizCorrect: 'Bravo ! Bonne réponse',
    quizWrong: 'Mauvaise réponse',
    quizDone: 'Quiz terminé !',
    quizScore: 'Score',
    quizRestart: 'Recommencer le Quiz',
    quizStart: 'Commencer le Quiz',
    splashFeatures: [
      '20 concepts islamiques en langage simple',
      'Quiz « Qui Veut Être Savant ? »',
      'Deux modes : Jeune Explorateur + Chercheur Ado',
      'Système de points et badges'
    ],
  }
};

// ═══════════════ CONCEPTS DATA (20 concepts) ═══════════════
const CONCEPTS = [
  {
    id:1, emoji:'🧭', theme:'basics',
    ar:{title:'الإسلام بساطة لا تعقيد',desc:'يرى الغزالي أن أبرز سمات الإسلام البساطة والسهولة في عقائده وعباداته. التعقيد الفلسفي تشويه للدين. التشوهات والتمثيلات الخاطئة هي المشكلة وليس الدين نفسه.',young:'الإسلام سهل ومفهوم للجميع — الله أراد لنا ديناً بسيطاً',verse:'يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ',verseRef:'البقرة ١٨٥',lesson:'يرى الغزالي: لا تعقّد دينك — ابحث عن الفهم البسيط والواضح'},
    en:{title:'Islam Is Simplicity, Not Complexity',desc:'Islam is the religion of natural disposition — simple in its essence, clear in its rulings. Complexity came from people, not from the religion itself. God wanted a religion everyone can understand.',young:'Islam is easy and understandable for everyone — God wanted a simple religion for us',verse:'يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ',verseRef:'Al-Baqarah 185',lesson:'Al-Ghazali sees: Don\'t overcomplicate your religion — seek simple and clear understanding'},
    fr:{title:'L\'Islam Est Simplicité, Pas Complexité',desc:'L\'Islam est la religion de la nature — simple dans son essence, clair dans ses règles. La complexité vient des gens, pas de la religion elle-même. Dieu a voulu une religion compréhensible pour tous.',young:'L\'Islam est facile et compréhensible pour tous — Dieu a voulu une religion simple',verse:'يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ',verseRef:'Al-Baqarah 185',lesson:'Al-Ghazali voit: Ne compliquez pas votre religion — cherchez la compréhension simple et claire'}
  },
  {
    id:2, emoji:'🤝', theme:'basics',
    ar:{title:'الإسلام دين شامل',desc:'الإسلام ليس مجرد صلاة وصيام. هو نظام حياة كامل: عبادة وعمل، أخلاق ومعاملات، سياسة واقتصاد. فصل الدين عن الحياة يشوّه الإسلام.',young:'الإسلام يعلّمنا كل شيء: الصلاة والأخلاق والعمل والمعاملة الحسنة',verse:'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي',verseRef:'المائدة ٣',lesson:'يرى الغزالي: طبّق الإسلام في كل جوانب حياتك — ليس فقط في المسجد'},
    en:{title:'Islam Is a Complete Way of Life',desc:'Islam is not just prayer and fasting. It is a complete life system: worship and work, ethics and dealings, politics and economics. Separating religion from life distorts Islam.',young:'Islam teaches us everything: prayer, good manners, work, and treating others well',verse:'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي',verseRef:'Al-Ma\'idah 3',lesson:'Al-Ghazali sees: Apply Islam in all aspects of your life — not just in the mosque'},
    fr:{title:'L\'Islam Est un Mode de Vie Complet',desc:'L\'Islam ne se limite pas à la prière et au jeûne. C\'est un système de vie complet : adoration et travail, éthique et transactions, politique et économie. Séparer la religion de la vie déforme l\'Islam.',young:'L\'Islam nous enseigne tout : la prière, les bonnes manières, le travail et le bon traitement des autres',verse:'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي',verseRef:'Al-Ma\'idah 3',lesson:'Al-Ghazali voit: Appliquez l\'Islam dans tous les aspects de votre vie — pas seulement à la mosquée'}
  },
  {
    id:3, emoji:'🔍', theme:'ummah',
    ar:{title:'عدونا الأول في داخلنا',desc:'يقول الغزالي: بلية هذه الأمة جاءت من داخلها قبل خارجها. فسدت موارد الهداية وحواضن الأجيال الناشئة. طُوي العلم الإسلامي الصحيح. الفساد الداخلي — الجهل والظلم والتفرقة — أخطر من أي عدو خارجي.',young:'لنصلح أنفسنا أولاً قبل أن نلوم الآخرين',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'الرعد ١١',lesson:'يرى الغزالي: ابدأ بإصلاح نفسك — التغيير يبدأ من الداخل'},
    en:{title:'Our First Enemy Is Within',desc:'Before blaming external enemies, we must fix ourselves. Internal corruption is more dangerous than any external enemy. Ignorance, injustice, and division are our real diseases.',young:'Let\'s fix ourselves first before blaming others',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'Ar-Ra\'d 11',lesson:'Al-Ghazali sees: Start by fixing yourself — change begins from within'},
    fr:{title:'Notre Premier Ennemi Est en Nous',desc:'Avant de blâmer les ennemis extérieurs, nous devons nous corriger. La corruption interne est plus dangereuse que tout ennemi externe. L\'ignorance, l\'injustice et la division sont nos vraies maladies.',young:'Corrigeons-nous d\'abord avant de blâmer les autres',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'Ar-Ra\'d 11',lesson:'Al-Ghazali voit: Commencez par vous corriger — le changement commence de l\'intérieur'}
  },
  {
    id:4, emoji:'📚', theme:'science',
    ar:{title:'الإسلام والعلم حليفان',desc:'العلم فريضة في الإسلام — ليس العلم الشرعي فقط بل كل علم نافع. الإسلام يشجع على البحث والاكتشاف. المسلمون تخلفوا عندما تركوا العلم.',young:'الإسلام يحب العلم! كل علم مفيد هو عبادة',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',lesson:'يرى الغزالي: تعلّم شيئاً جديداً كل يوم — العلم عبادة'},
    en:{title:'Islam and Science Are Allies',desc:'Knowledge is an obligation in Islam — not just religious knowledge but all beneficial knowledge. Islam encourages research and discovery. Muslims fell behind when they abandoned learning.',young:'Islam loves knowledge! Every useful science is worship',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 9',lesson:'Al-Ghazali sees: Learn something new every day — knowledge is worship'},
    fr:{title:'L\'Islam et la Science Sont Alliés',desc:'Le savoir est une obligation en Islam — pas seulement le savoir religieux mais tout savoir bénéfique. L\'Islam encourage la recherche et la découverte. Les musulmans ont reculé quand ils ont abandonné le savoir.',young:'L\'Islam aime le savoir ! Toute science utile est une adoration',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 9',lesson:'Al-Ghazali voit: Apprenez quelque chose de nouveau chaque jour — le savoir est une adoration'}
  },
  {
    id:5, emoji:'🚫', theme:'ummah',
    ar:{title:'لا للتعصب المذهبي',desc:'التعصب لمذهب واحد يفرّق الأمة. الحق ليس حكراً على مذهب. علينا أن نأخذ الحكمة أينما وجدناها ونتوحد على الأصول لا الفروع.',young:'لا تتعصب لرأي واحد — الإسلام واسع ويقبل اختلاف العلماء',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',lesson:'يرى الغزالي: احترم الاختلاف — الأمة تتوحد على الأصول لا على الفروع'},
    en:{title:'No to Sectarian Fanaticism',desc:'Blind loyalty to one school of thought divides the Ummah. Truth is not exclusive to one school. We should take wisdom wherever we find it and unite on fundamentals, not secondary issues.',young:'Don\'t be biased to one opinion — Islam is broad and accepts scholarly differences',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Al-Imran 103',lesson:'Al-Ghazali sees: Respect differences — the Ummah unites on fundamentals, not on secondary matters'},
    fr:{title:'Non au Fanatisme Sectaire',desc:'La loyauté aveugle à une seule école de pensée divise la Oumma. La vérité n\'est pas l\'exclusivité d\'une seule école. Prenons la sagesse partout où nous la trouvons et unissons-nous sur les fondamentaux.',young:'Ne sois pas partial pour une seule opinion — l\'Islam est large et accepte les différences entre savants',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Al-Imran 103',lesson:'Al-Ghazali voit: Respectez les différences — la Oumma s\'unit sur les fondamentaux'}
  },
  {
    id:6, emoji:'👩', theme:'women',
    ar:{title:'حقوق المرأة في الإسلام',desc:'الإسلام كرّم المرأة وأعطاها حقوقاً سلبتها بعض التقاليد الجاهلة. المرأة شريكة الرجل في بناء المجتمع. ظلم المرأة ليس من الإسلام في شيء.',young:'الإسلام يحترم المرأة ويعطيها حقوقها كاملة — ظلمها ليس من الدين',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨',lesson:'يرى الغزالي: عامل المرأة بالعدل والاحترام — هذا هو الإسلام الحقيقي'},
    en:{title:'Women\'s Rights in Islam',desc:'Islam honored women and gave them rights that some ignorant traditions stripped away. Women are partners of men in building society. Oppressing women has nothing to do with Islam.',young:'Islam respects women and gives them full rights — oppressing them is not from the religion',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Al-Baqarah 228',lesson:'Al-Ghazali sees: Treat women with justice and respect — this is true Islam'},
    fr:{title:'Les Droits de la Femme en Islam',desc:'L\'Islam a honoré la femme et lui a donné des droits que certaines traditions ignorantes lui ont enlevés. La femme est partenaire de l\'homme dans la construction de la société. Opprimer la femme n\'a rien à voir avec l\'Islam.',young:'L\'Islam respecte la femme et lui donne tous ses droits — l\'opprimer n\'est pas de la religion',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Al-Baqarah 228',lesson:'Al-Ghazali voit: Traitez les femmes avec justice et respect — c\'est le vrai Islam'}
  },
  {
    id:7, emoji:'⚖️', theme:'justice',
    ar:{title:'العدالة الاجتماعية',desc:'الإسلام يرفض الفقر المدقع والغنى الفاحش. الزكاة والصدقة ليست تطوعاً بل فريضة لتحقيق التوازن. المجتمع المسلم يتكافل ولا يترك أحداً يجوع.',young:'في الإسلام لا نترك أحداً يجوع — نتشارك ونتكافل',verse:'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ لِّلسَّائِلِ وَالْمَحْرُومِ',verseRef:'المعارج ٢٤-٢٥',lesson:'يرى الغزالي: تصدّق اليوم ولو بشيء بسيط — المشاركة أساس المجتمع'},
    en:{title:'Social Justice',desc:'Islam rejects extreme poverty and extreme wealth. Zakat and charity are not optional but obligations to achieve balance. A Muslim society cooperates and leaves no one hungry.',young:'In Islam, we don\'t leave anyone hungry — we share and support each other',verse:'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ لِّلسَّائِلِ وَالْمَحْرُومِ',verseRef:'Al-Ma\'arij 24-25',lesson:'Al-Ghazali sees: Give charity today, even something small — sharing is the foundation of society'},
    fr:{title:'Justice Sociale',desc:'L\'Islam rejette la pauvreté extrême et la richesse excessive. La zakat et l\'aumône ne sont pas optionnelles mais des obligations pour atteindre l\'équilibre. Une société musulmane coopère et ne laisse personne affamé.',young:'En Islam, on ne laisse personne avoir faim — on partage et on s\'entraide',verse:'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ لِّلسَّائِلِ وَالْمَحْرُومِ',verseRef:'Al-Ma\'arij 24-25',lesson:'Al-Ghazali voit: Donnez en charité aujourd\'hui, même peu — le partage est le fondement de la société'}
  },
  {
    id:8, emoji:'🕊️', theme:'basics',
    ar:{title:'الإسلام دين الوسطية',desc:'لا إفراط ولا تفريط. الإسلام يرفض الغلو والتشدد كما يرفض التساهل والتمييع. الوسطية هي منهج القرآن.',young:'الإسلام يعلّمنا التوازن — لا تبالغ ولا تقصّر',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ١٤٣',lesson:'كن وسطياً في كل شيء — لا تتشدد ولا تتساهل'},
    en:{title:'Islam Is the Religion of Balance',desc:'Neither excess nor negligence. Islam rejects extremism and rigidity just as it rejects laxity and dilution. Moderation is the Quranic methodology.',young:'Islam teaches us balance — don\'t go to extremes',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'Al-Baqarah 143',lesson:'Be moderate in everything — neither too strict nor too lax'},
    fr:{title:'L\'Islam Est la Religion de l\'Équilibre',desc:'Ni excès ni négligence. L\'Islam rejette l\'extrémisme et la rigidité tout comme il rejette le laxisme. La modération est la méthodologie coranique.',young:'L\'Islam nous enseigne l\'équilibre — pas d\'extrêmes',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'Al-Baqarah 143',lesson:'Soyez modéré en tout — ni trop strict ni trop laxiste'}
  },
  {
    id:9, emoji:'⛔', theme:'ummah',
    ar:{title:'نقد التصوف المنحرف',desc:'الغزالي يفرّق بين التصوف الحقيقي (تزكية النفس) والتصوف المنحرف (الخرافات والبدع). الزهد الحقيقي لا يعني ترك العمل والدنيا بل إتقان العمل مع عدم التعلق.',young:'الزهد الحقيقي = تعمل بجد لكن لا تجعل المال أهم شيء',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'القصص ٧٧',lesson:'اعمل للدنيا والآخرة معاً — لا تهمل أيّاً منهما'},
    en:{title:'Critique of Deviant Sufism',desc:'Al-Ghazali distinguishes between true Sufism (purifying the soul) and deviant Sufism (superstitions and innovations). True asceticism doesn\'t mean abandoning work but mastering it without attachment.',young:'True devotion = work hard but don\'t make money the most important thing',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'Al-Qasas 77',lesson:'Work for both this world and the next — don\'t neglect either one'},
    fr:{title:'Critique du Soufisme Déviant',desc:'Al-Ghazali distingue le vrai soufisme (purification de l\'âme) du soufisme déviant (superstitions et innovations). Le vrai ascétisme ne signifie pas abandonner le travail mais le maîtriser sans attachement.',young:'La vraie dévotion = travailler dur mais ne pas faire de l\'argent la chose la plus importante',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'Al-Qasas 77',lesson:'Travaillez pour ce monde et l\'au-delà — ne négligez aucun des deux'}
  },
  {
    id:10, emoji:'🏛️', theme:'justice',
    ar:{title:'محاربة الاستبداد السياسي',desc:'الإسلام يرفض الاستبداد والطغيان. الحاكم في الإسلام خادم للشعب لا سيّد عليه. الشورى فريضة والنقد البنّاء واجب.',young:'الحاكم في الإسلام يخدم الناس — ليس العكس',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٣٨',lesson:'لا تقبل الظلم — الإسلام يأمرك بالإصلاح'},
    en:{title:'Fighting Political Despotism',desc:'Islam rejects despotism and tyranny. A ruler in Islam is a servant of the people, not a master over them. Consultation is an obligation and constructive criticism is a duty.',young:'A leader in Islam serves the people — not the other way around',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Ash-Shura 38',lesson:'Don\'t accept injustice — Islam commands you to work for reform'},
    fr:{title:'Combattre le Despotisme Politique',desc:'L\'Islam rejette le despotisme et la tyrannie. Un dirigeant en Islam est un serviteur du peuple, pas un maître. La consultation est une obligation et la critique constructive est un devoir.',young:'Un dirigeant en Islam sert le peuple — pas l\'inverse',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Ash-Shura 38',lesson:'N\'acceptez pas l\'injustice — l\'Islam vous ordonne de travailler pour la réforme'}
  },
  {
    id:11, emoji:'💡', theme:'science',
    ar:{title:'العقل والنقل معاً',desc:'الإسلام لا يطلب إيماناً أعمى. القرآن يدعو للتفكر والتدبر. العقل والوحي لا يتعارضان بل يتكاملان.',young:'الإسلام يريدك أن تفكّر وتسأل — ليس أن تقلّد بلا فهم',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'النساء ٨٢',lesson:'فكّر وتأمل — الله أعطاك عقلاً لتستخدمه'},
    en:{title:'Reason and Revelation Together',desc:'Islam does not demand blind faith. The Quran calls for reflection and contemplation. Reason and revelation don\'t contradict each other — they complement each other.',young:'Islam wants you to think and ask questions — not to follow blindly',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'An-Nisa 82',lesson:'Think and reflect — God gave you a mind to use it'},
    fr:{title:'Raison et Révélation Ensemble',desc:'L\'Islam ne demande pas une foi aveugle. Le Coran appelle à la réflexion et la contemplation. La raison et la révélation ne se contredisent pas — elles se complètent.',young:'L\'Islam veut que tu réfléchisses et poses des questions — pas que tu suives aveuglément',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'An-Nisa 82',lesson:'Réfléchissez et contemplez — Dieu vous a donné un esprit pour l\'utiliser'}
  },
  {
    id:12, emoji:'🌍', theme:'basics',
    ar:{title:'الإسلام للعالم كله',desc:'الإسلام ليس ديناً عربياً فقط. هو رسالة عالمية لكل البشر بلا تمييز عرقي أو لغوي. تفوّق العربي على الأعجمي ليس وارداً في الإسلام.',young:'الإسلام لكل الناس — لا فرق بين عربي وغيره إلا بالتقوى',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',lesson:'احترم كل الناس — التقوى هي المعيار لا اللون أو الجنسية'},
    en:{title:'Islam Is for the Whole World',desc:'Islam is not just an Arab religion. It is a universal message for all humanity without racial or linguistic discrimination. The superiority of an Arab over a non-Arab has no basis in Islam.',young:'Islam is for everyone — no difference between Arab and non-Arab except in piety',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'Al-Hujurat 13',lesson:'Respect all people — piety is the standard, not color or nationality'},
    fr:{title:'L\'Islam Est pour le Monde Entier',desc:'L\'Islam n\'est pas une religion uniquement arabe. C\'est un message universel pour toute l\'humanité sans discrimination raciale ou linguistique.',young:'L\'Islam est pour tout le monde — pas de différence entre Arabe et non-Arabe sauf la piété',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'Al-Hujurat 13',lesson:'Respectez tous les gens — la piété est le critère, pas la couleur ou la nationalité'}
  },
  {
    id:13, emoji:'💪', theme:'ummah',
    ar:{title:'أسباب ضعف المسلمين',desc:'ضعف المسلمين ليس من الإسلام بل من ابتعادهم عنه. الجهل والتفرقة والركون للدنيا أضعفت الأمة. العلاج في العودة للإسلام الصحيح.',young:'المسلمون ضعفوا لأنهم ابتعدوا عن الإسلام الصحيح — ليس بسبب الإسلام',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',verseRef:'آل عمران ١٣٩',lesson:'لا تيأس — العودة للإسلام الصحيح هي الحل'},
    en:{title:'Reasons for Muslim Weakness',desc:'Muslim weakness comes not from Islam but from distancing from it. Ignorance, division, and attachment to worldly life weakened the Ummah. The cure is returning to true Islam.',young:'Muslims became weak because they moved away from true Islam — not because of Islam',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',verseRef:'Al-Imran 139',lesson:'Don\'t despair — returning to true Islam is the solution'},
    fr:{title:'Raisons de la Faiblesse des Musulmans',desc:'La faiblesse des musulmans ne vient pas de l\'Islam mais de leur éloignement. L\'ignorance, la division et l\'attachement au monde ont affaibli la Oumma. Le remède est le retour au vrai Islam.',young:'Les musulmans se sont affaiblis en s\'éloignant du vrai Islam — pas à cause de l\'Islam',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',verseRef:'Al-Imran 139',lesson:'Ne désespérez pas — le retour au vrai Islam est la solution'}
  },
  {
    id:14, emoji:'🎓', theme:'science',
    ar:{title:'التعليم فريضة لا رفاهية',desc:'طلب العلم فريضة على كل مسلم ومسلمة. الأمة التي لا تتعلم محكومة بالتبعية. يجب أن نتقن العلوم الدنيوية كما نتقن العلوم الشرعية.',young:'التعلم واجب على كل مسلم — العلوم كلها مهمة',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',lesson:'لا تتوقف عن التعلم — اقرأ كتاباً جديداً هذا الشهر'},
    en:{title:'Education Is an Obligation, Not a Luxury',desc:'Seeking knowledge is obligatory for every Muslim, male and female. A nation that doesn\'t learn is destined for dependence. We must master worldly sciences as we master religious ones.',young:'Learning is obligatory for every Muslim — all sciences are important',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'Al-Alaq 1',lesson:'Never stop learning — read a new book this month'},
    fr:{title:'L\'Éducation Est une Obligation, Pas un Luxe',desc:'La quête du savoir est obligatoire pour tout musulman, homme ou femme. Une nation qui n\'apprend pas est destinée à la dépendance. Nous devons maîtriser les sciences mondaines comme les sciences religieuses.',young:'Apprendre est obligatoire pour chaque musulman — toutes les sciences sont importantes',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'Al-Alaq 1',lesson:'Ne cessez jamais d\'apprendre — lisez un nouveau livre ce mois-ci'}
  },
  {
    id:15, emoji:'🕌', theme:'basics',
    ar:{title:'العبادة أوسع من الصلاة',desc:'العبادة ليست محصورة في الصلاة والصيام. كل عمل صالح بنية خالصة هو عبادة: العمل، الدراسة، مساعدة الناس، حتى الابتسامة.',young:'كل شيء جيد تفعله لله هو عبادة — حتى الابتسامة!',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',verseRef:'الأنعام ١٦٢',lesson:'حوّل كل عمل يومي إلى عبادة بالنية الصادقة'},
    en:{title:'Worship Is Broader Than Prayer',desc:'Worship is not limited to prayer and fasting. Every good deed done with sincere intention is worship: work, study, helping others, even smiling.',young:'Everything good you do for God is worship — even smiling!',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',verseRef:'Al-An\'am 162',lesson:'Turn every daily action into worship through sincere intention'},
    fr:{title:'L\'Adoration Est Plus Large que la Prière',desc:'L\'adoration ne se limite pas à la prière et au jeûne. Chaque bonne action faite avec une intention sincère est adoration : travailler, étudier, aider les autres, même sourire.',young:'Tout ce que tu fais de bien pour Dieu est adoration — même sourire !',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',verseRef:'Al-An\'am 162',lesson:'Transformez chaque action quotidienne en adoration par l\'intention sincère'}
  },
  {
    id:16, emoji:'🛡️', theme:'justice',
    ar:{title:'لا للاستبداد الديني',desc:'لا كهنوت في الإسلام. لا أحد يحتكر فهم الدين. العلماء يرشدون لكن لا يحكمون بدل الله. الإسلام حرّر العقول من سلطة رجال الدين.',young:'في الإسلام لا أحد يحتكر الحق — كل إنسان يستطيع فهم دينه',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',lesson:'تعلم دينك بنفسك — لا تجعل أحداً يفكر عنك'},
    en:{title:'No to Religious Despotism',desc:'There is no clergy class in Islam. No one monopolizes understanding of religion. Scholars guide but do not rule in place of God. Islam freed minds from the authority of religious clergy.',young:'In Islam, no one monopolizes the truth — everyone can understand their religion',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'Al-Baqarah 256',lesson:'Learn your religion yourself — don\'t let anyone think for you'},
    fr:{title:'Non au Despotisme Religieux',desc:'Il n\'y a pas de clergé en Islam. Personne ne monopolise la compréhension de la religion. Les savants guident mais ne gouvernent pas à la place de Dieu. L\'Islam a libéré les esprits de l\'autorité du clergé.',young:'En Islam, personne ne monopolise la vérité — chacun peut comprendre sa religion',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'Al-Baqarah 256',lesson:'Apprenez votre religion par vous-même — ne laissez personne penser à votre place'}
  },
  {
    id:17, emoji:'🌱', theme:'modernity',
    ar:{title:'الإسلام يصلح لكل زمان',desc:'الإسلام ليس ديناً جامداً. أصوله ثابتة لكن فروعه تتكيف مع كل عصر. الاجتهاد باب مفتوح والتجديد مطلوب.',young:'الإسلام يتكيف مع كل عصر — الأصول ثابتة لكن التطبيق يتجدد',verse:'لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا',verseRef:'المائدة ٤٨',lesson:'لا تخف من الجديد — الإسلام يشجع الاجتهاد والتجديد'},
    en:{title:'Islam Is Suitable for Every Era',desc:'Islam is not a rigid religion. Its foundations are fixed but its applications adapt to every age. Independent reasoning is an open door and renewal is required.',young:'Islam adapts to every era — the foundations are fixed but the application is renewed',verse:'لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا',verseRef:'Al-Ma\'idah 48',lesson:'Don\'t fear the new — Islam encourages independent reasoning and renewal'},
    fr:{title:'L\'Islam Convient à Chaque Époque',desc:'L\'Islam n\'est pas une religion rigide. Ses fondements sont fixes mais ses applications s\'adaptent à chaque époque. Le raisonnement indépendant est une porte ouverte et le renouveau est requis.',young:'L\'Islam s\'adapte à chaque époque — les fondements sont fixes mais l\'application se renouvelle',verse:'لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا',verseRef:'Al-Ma\'idah 48',lesson:'N\'ayez pas peur du nouveau — l\'Islam encourage le raisonnement et le renouveau'}
  },
  {
    id:18, emoji:'👨‍👩‍👧', theme:'women',
    ar:{title:'المرأة والتعليم',desc:'حرمان المرأة من التعليم جريمة ضد الإسلام. النبي قال: "طلب العلم فريضة على كل مسلم" — ومسلم تشمل الرجل والمرأة. المرأة المتعلمة تبني أجيالاً واعية.',young:'تعليم البنات واجب في الإسلام — مثل الأولاد تماماً',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',lesson:'شجع كل فتاة حولك على التعلم — هذا من صميم الإسلام'},
    en:{title:'Women and Education',desc:'Depriving women of education is a crime against Islam. The Prophet said: "Seeking knowledge is an obligation upon every Muslim" — and Muslim includes men and women. Educated women build aware generations.',young:'Educating girls is obligatory in Islam — just like boys',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 9',lesson:'Encourage every girl around you to learn — this is the essence of Islam'},
    fr:{title:'La Femme et l\'Éducation',desc:'Priver la femme d\'éducation est un crime contre l\'Islam. Le Prophète a dit : « La quête du savoir est une obligation pour tout musulman » — et musulman inclut hommes et femmes. Les femmes éduquées construisent des générations conscientes.',young:'Éduquer les filles est obligatoire en Islam — tout comme les garçons',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 9',lesson:'Encouragez chaque fille autour de vous à apprendre — c\'est l\'essence de l\'Islam'}
  },
  {
    id:19, emoji:'🤲', theme:'basics',
    ar:{title:'الأخلاق جوهر الإسلام',desc:'الإسلام ليس مجرد شعائر. الأخلاق هي لبّ الدين. النبي قال: "إنما بُعثت لأتمم مكارم الأخلاق". المسلم بلا أخلاق كالشجرة بلا ثمر.',young:'الأخلاق الحسنة هي أهم شيء في الإسلام — كن لطيفاً وصادقاً',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'القلم ٤',lesson:'حسّن خلقاً واحداً هذا الأسبوع: الصدق أو الصبر أو الكرم'},
    en:{title:'Ethics Are the Essence of Islam',desc:'Islam is not just rituals. Ethics are the core of religion. The Prophet said: "I was sent to perfect good character." A Muslim without ethics is like a tree without fruit.',young:'Good manners are the most important thing in Islam — be kind and honest',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'Al-Qalam 4',lesson:'Improve one character trait this week: honesty, patience, or generosity'},
    fr:{title:'L\'Éthique Est l\'Essence de l\'Islam',desc:'L\'Islam ne se résume pas aux rituels. L\'éthique est le cœur de la religion. Le Prophète a dit : « J\'ai été envoyé pour parfaire les bonnes mœurs. » Un musulman sans éthique est comme un arbre sans fruit.',young:'Les bonnes manières sont la chose la plus importante en Islam — sois gentil et honnête',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'Al-Qalam 4',lesson:'Améliorez un trait de caractère cette semaine : honnêteté, patience ou générosité'}
  },
  {
    id:20, emoji:'❤️', theme:'modernity',
    ar:{title:'لماذا أنا مسلم؟',desc:'الفصل الأخير من الكتاب: لأن الإسلام يحترم عقلي، يحرر إرادتي، يساوي بين الناس، يحقق العدالة، ويربط بين الدنيا والآخرة في توازن جميل.',young:'أنا مسلم لأن الإسلام يحترم عقلي ويعدل بين الناس ويجعل حياتي ذات معنى',verse:'وَمَنْ أَحْسَنُ دِينًا مِّمَّنْ أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ',verseRef:'النساء ١٢٥',lesson:'اكتب ٣ أسباب شخصية لماذا أنت فخور بإسلامك'},
    en:{title:'Why I Am Muslim',desc:'The book\'s final chapter: Because Islam respects my mind, frees my will, equalizes between people, achieves justice, and connects this world and the next in beautiful balance.',young:'I am Muslim because Islam respects my mind, is fair to everyone, and gives my life meaning',verse:'وَمَنْ أَحْسَنُ دِينًا مِّمَّنْ أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ',verseRef:'An-Nisa 125',lesson:'Write 3 personal reasons why you are proud of your Islam'},
    fr:{title:'Pourquoi Je Suis Musulman',desc:'Le dernier chapitre du livre : Parce que l\'Islam respecte mon esprit, libère ma volonté, égalise entre les gens, réalise la justice, et relie ce monde et l\'au-delà dans un bel équilibre.',young:'Je suis musulman parce que l\'Islam respecte mon esprit, est juste envers tous et donne un sens à ma vie',verse:'وَمَنْ أَحْسَنُ دِينًا مِّمَّنْ أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ',verseRef:'An-Nisa 125',lesson:'Écrivez 3 raisons personnelles pour lesquelles vous êtes fier de votre Islam'}
  }
];

// ═══════════════ PRINCIPLES DATA (9 golden rules) ═══════════════
const PRINCIPLES_DATA = [
  {id:1,emoji:'📖',ar:{title:'افهم قبل أن تحكم',desc:'لا تحكم على الإسلام من تصرفات المسلمين. افهم الإسلام من مصادره: القرآن والسنة.'},en:{title:'Understand Before You Judge',desc:'Don\'t judge Islam by the behavior of Muslims. Understand Islam from its sources: the Quran and Sunnah.'},fr:{title:'Comprendre Avant de Juger',desc:'Ne jugez pas l\'Islam par le comportement des musulmans. Comprenez-le par ses sources : le Coran et la Sunnah.'}},
  {id:2,emoji:'🔗',ar:{title:'لا تفصل الدين عن الحياة',desc:'الإسلام منهج حياة متكامل. فصله عن السياسة أو الاقتصاد أو الأخلاق يشوّهه.'},en:{title:'Don\'t Separate Religion from Life',desc:'Islam is a complete life system. Separating it from politics, economics, or ethics distorts it.'},fr:{title:'Ne Séparez Pas la Religion de la Vie',desc:'L\'Islam est un système de vie complet. Le séparer de la politique, l\'économie ou l\'éthique le déforme.'}},
  {id:3,emoji:'⚖️',ar:{title:'التوازن في كل شيء',desc:'لا إفراط ولا تفريط. الوسطية هي منهج الإسلام في العبادة والمعاملة والحكم.'},en:{title:'Balance in Everything',desc:'Neither excess nor negligence. Moderation is the Islamic approach in worship, dealings, and governance.'},fr:{title:'L\'Équilibre en Tout',desc:'Ni excès ni négligence. La modération est l\'approche islamique dans l\'adoration, les relations et la gouvernance.'}},
  {id:4,emoji:'🔬',ar:{title:'العلم قبل العمل',desc:'تعلّم أولاً ثم اعمل. العمل بجهل أخطر من عدم العمل. طلب العلم فريضة.'},en:{title:'Knowledge Before Action',desc:'Learn first, then act. Acting in ignorance is more dangerous than not acting. Seeking knowledge is obligatory.'},fr:{title:'Le Savoir Avant l\'Action',desc:'Apprenez d\'abord, puis agissez. Agir par ignorance est plus dangereux que ne pas agir. Chercher le savoir est obligatoire.'}},
  {id:5,emoji:'🤝',ar:{title:'الوحدة في التنوع',desc:'الاختلاف في الفروع طبيعي ومقبول. الوحدة تكون في الأصول والمقاصد الكبرى.'},en:{title:'Unity in Diversity',desc:'Differences in secondary matters are natural and acceptable. Unity is in the fundamentals and major objectives.'},fr:{title:'L\'Unité dans la Diversité',desc:'Les différences dans les détails sont naturelles et acceptables. L\'unité est dans les fondamentaux et les grands objectifs.'}},
  {id:6,emoji:'💪',ar:{title:'الإصلاح يبدأ من النفس',desc:'لا تنتظر الآخرين. ابدأ بنفسك. التغيير الحقيقي يبدأ من الداخل.'},en:{title:'Reform Starts with the Self',desc:'Don\'t wait for others. Start with yourself. Real change begins from within.'},fr:{title:'La Réforme Commence par Soi',desc:'N\'attendez pas les autres. Commencez par vous-même. Le vrai changement commence de l\'intérieur.'}},
  {id:7,emoji:'👁️',ar:{title:'انظر بعين الرحمة',desc:'الإسلام دين الرحمة. النقد البنّاء مطلوب لكن بأدب ورفق، لا بتكفير وتبديع.'},en:{title:'Look with Mercy',desc:'Islam is a religion of mercy. Constructive criticism is needed but with politeness and gentleness, not with accusations of disbelief.'},fr:{title:'Regardez avec Miséricorde',desc:'L\'Islam est une religion de miséricorde. La critique constructive est nécessaire mais avec politesse et douceur, pas avec des accusations d\'incroyance.'}},
  {id:8,emoji:'🌅',ar:{title:'التجديد لا التبديل',desc:'التجديد في الإسلام يعني تحديث الفهم لا تغيير الأصول. نجدد الطريقة لا الرسالة.'},en:{title:'Renewal, Not Replacement',desc:'Renewal in Islam means updating understanding, not changing fundamentals. We renew the method, not the message.'},fr:{title:'Renouveau, Pas Remplacement',desc:'Le renouveau en Islam signifie actualiser la compréhension, pas changer les fondamentaux. On renouvelle la méthode, pas le message.'}},
  {id:9,emoji:'🌟',ar:{title:'كن قدوة حسنة',desc:'أفضل دعوة للإسلام هي أخلاقك وسلوكك. الناس يحكمون على الإسلام من خلالك.'},en:{title:'Be a Good Example',desc:'The best invitation to Islam is your character and behavior. People judge Islam through you.'},fr:{title:'Soyez un Bon Exemple',desc:'La meilleure invitation à l\'Islam est votre caractère et votre comportement. Les gens jugent l\'Islam à travers vous.'}}
];

// ═══════════════ QUIZ DATA — "Who Wants to Be a Scholar?" (15 questions) ═══════════════
const QUIZ_DATA = [
  {
    ar:{q:'ما معنى أن الإسلام دين الفطرة؟',a:['أنه يناسب الطبيعة البشرية','أنه دين صعب ومعقد','أنه للعرب فقط','أنه يحتاج وسيطاً'],correct:0,hint:'الغزالي يقول: الإسلام يناسب كل إنسان بطبيعته'},
    en:{q:'What does it mean that Islam is the religion of natural disposition?',a:['It suits human nature','It is difficult and complex','It is only for Arabs','It needs an intermediary'],correct:0,hint:'Al-Ghazali says: Islam suits every person by nature'},
    fr:{q:'Que signifie que l\'Islam est la religion de la nature?',a:['Il convient à la nature humaine','Il est difficile et complexe','Il est réservé aux Arabes','Il a besoin d\'un intermédiaire'],correct:0,hint:'Al-Ghazali dit: l\'Islam convient à chaque personne par nature'}
  },
  {
    ar:{q:'حسب الغزالي، ما أول سبب لضعف الأمة الإسلامية؟',a:['الفساد الداخلي والجهل','الأعداء الخارجيين','قلة المال','ضعف الجيوش'],correct:0,hint:'الآية: "إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم"'},
    en:{q:'According to Al-Ghazali, what is the first cause of Muslim weakness?',a:['Internal corruption and ignorance','External enemies','Lack of money','Weak armies'],correct:0,hint:'The verse: "God does not change a people until they change themselves"'},
    fr:{q:'Selon Al-Ghazali, quelle est la première cause de faiblesse musulmane?',a:['La corruption interne et l\'ignorance','Les ennemis extérieurs','Le manque d\'argent','Les armées faibles'],correct:0,hint:'Le verset: "Dieu ne change un peuple que s\'il change lui-même"'}
  },
  {
    ar:{q:'ما موقف الغزالي من التعصب المذهبي؟',a:['يرفضه ويدعو للوحدة','يؤيده ويدافع عنه','يراه ضرورياً','لم يتحدث عنه'],correct:0,hint:'آية الوحدة: "واعتصموا بحبل الله جميعاً"'},
    en:{q:'What is Al-Ghazali\'s stance on sectarian fanaticism?',a:['He rejects it and calls for unity','He supports and defends it','He sees it as necessary','He didn\'t discuss it'],correct:0,hint:'The unity verse: "Hold firmly to the rope of God together"'},
    fr:{q:'Quelle est la position d\'Al-Ghazali sur le fanatisme sectaire?',a:['Il le rejette et appelle à l\'unité','Il le soutient et le défend','Il le voit comme nécessaire','Il n\'en a pas parlé'],correct:0,hint:'Le verset de l\'unité: "Accrochez-vous tous à la corde de Dieu"'}
  },
  {
    ar:{q:'ماذا يقول الغزالي عن حقوق المرأة في الإسلام؟',a:['الإسلام كرّمها والتقاليد ظلمتها','المرأة ليس لها حقوق','هذا ليس موضوعاً مهماً','الأمر مختلف عليه'],correct:0,hint:'الآية: "ولهن مثل الذي عليهن بالمعروف"'},
    en:{q:'What does Al-Ghazali say about women\'s rights in Islam?',a:['Islam honored her, traditions oppressed her','Women have no rights','This is not an important topic','It\'s debatable'],correct:0,hint:'The verse: "And women have rights similar to their obligations"'},
    fr:{q:'Que dit Al-Ghazali sur les droits de la femme en Islam?',a:['L\'Islam l\'a honorée, les traditions l\'ont opprimée','Les femmes n\'ont pas de droits','Ce n\'est pas un sujet important','C\'est discutable'],correct:0,hint:'Le verset: "Et les femmes ont des droits similaires à leurs obligations"'}
  },
  {
    ar:{q:'ما العلاقة بين الإسلام والعلم حسب الكتاب؟',a:['حليفان — العلم فريضة','متعارضان — الدين ضد العلم','لا علاقة بينهما','العلم الشرعي فقط مطلوب'],correct:0,hint:'أول آية نزلت: "اقرأ باسم ربك الذي خلق"'},
    en:{q:'What is the relationship between Islam and science in the book?',a:['Allies — knowledge is obligatory','Contradictory — religion vs science','No relationship','Only religious knowledge matters'],correct:0,hint:'The first verse revealed: "Read in the name of your Lord who created"'},
    fr:{q:'Quelle est la relation entre l\'Islam et la science dans le livre?',a:['Alliés — le savoir est obligatoire','Contradictoires — religion vs science','Aucune relation','Seul le savoir religieux compte'],correct:0,hint:'Le premier verset révélé: "Lis au nom de ton Seigneur qui a créé"'}
  },
  {
    ar:{q:'ماذا يعني "الوسطية" في الإسلام؟',a:['التوازن بين الإفراط والتفريط','التساهل في كل شيء','التشدد في كل شيء','عدم الاهتمام بالدين'],correct:0,hint:'"وكذلك جعلناكم أمة وسطاً"'},
    en:{q:'What does "moderation" mean in Islam?',a:['Balance between excess and negligence','Being lenient in everything','Being strict in everything','Not caring about religion'],correct:0,hint:'"And thus We have made you a balanced nation"'},
    fr:{q:'Que signifie la « modération » en Islam?',a:['L\'équilibre entre excès et négligence','Être indulgent en tout','Être strict en tout','Ne pas se soucier de la religion'],correct:0,hint:'"Et ainsi Nous avons fait de vous une nation équilibrée"'}
  },
  {
    ar:{q:'ما موقف الغزالي من التصوف؟',a:['يقبل الحقيقي ويرفض المنحرف','يرفضه كلياً','يقبله كلياً','لم يتحدث عنه'],correct:0,hint:'التصوف الحقيقي = تزكية النفس، المنحرف = خرافات وبدع'},
    en:{q:'What is Al-Ghazali\'s view on Sufism?',a:['Accepts true, rejects deviant','Rejects it completely','Accepts it completely','Didn\'t discuss it'],correct:0,hint:'True Sufism = soul purification, Deviant = superstitions and innovations'},
    fr:{q:'Quelle est la vue d\'Al-Ghazali sur le soufisme?',a:['Accepte le vrai, rejette le déviant','Le rejette complètement','L\'accepte complètement','N\'en a pas parlé'],correct:0,hint:'Vrai soufisme = purification de l\'âme, Déviant = superstitions et innovations'}
  },
  {
    ar:{q:'لماذا يرفض الغزالي الاستبداد السياسي؟',a:['لأن الإسلام يأمر بالشورى والعدل','لأنه يحب الفوضى','لأسباب شخصية','لم يرفضه'],correct:0,hint:'"وأمرهم شورى بينهم" — الشورى فريضة'},
    en:{q:'Why does Al-Ghazali reject political despotism?',a:['Because Islam commands consultation and justice','Because he likes chaos','For personal reasons','He didn\'t reject it'],correct:0,hint:'"And their affair is consultation among them" — consultation is obligatory'},
    fr:{q:'Pourquoi Al-Ghazali rejette-t-il le despotisme politique?',a:['Parce que l\'Islam ordonne la consultation et la justice','Parce qu\'il aime le chaos','Pour des raisons personnelles','Il ne l\'a pas rejeté'],correct:0,hint:'"Et leur affaire est consultation entre eux" — la consultation est obligatoire'}
  },
  {
    ar:{q:'ما معنى العبادة الشاملة في الإسلام؟',a:['كل عمل صالح بنية خالصة','الصلاة والصيام فقط','الذهاب للمسجد فقط','الدعاء فقط'],correct:0,hint:'"قل إن صلاتي ونسكي ومحياي ومماتي لله رب العالمين"'},
    en:{q:'What does comprehensive worship mean in Islam?',a:['Every good deed with sincere intention','Only prayer and fasting','Only going to the mosque','Only supplication'],correct:0,hint:'"Say: my prayer, worship, life, and death are for God, Lord of the worlds"'},
    fr:{q:'Que signifie l\'adoration globale en Islam?',a:['Chaque bonne action avec intention sincère','Seulement la prière et le jeûne','Seulement aller à la mosquée','Seulement l\'invocation'],correct:0,hint:'"Dis: ma prière, mon adoration, ma vie et ma mort sont pour Dieu, Seigneur des mondes"'}
  },
  {
    ar:{q:'هل الإسلام يشجع الإيمان الأعمى؟',a:['لا — القرآن يدعو للتفكر والتدبر','نعم — لا تسأل','أحياناً','في بعض المواضيع فقط'],correct:0,hint:'"أفلا يتدبرون القرآن" — دعوة صريحة للتفكير'},
    en:{q:'Does Islam encourage blind faith?',a:['No — the Quran calls for reflection','Yes — don\'t question','Sometimes','Only in some topics'],correct:0,hint:'"Do they not contemplate the Quran?" — a clear call to think'},
    fr:{q:'L\'Islam encourage-t-il la foi aveugle?',a:['Non — le Coran appelle à la réflexion','Oui — ne questionnez pas','Parfois','Seulement pour certains sujets'],correct:0,hint:'"Ne méditent-ils pas le Coran?" — un appel clair à la réflexion'}
  },
  {
    ar:{q:'ما الفرق بين التجديد والتبديل في الإسلام؟',a:['التجديد يحدّث الفهم، التبديل يغير الأصول','لا فرق بينهما','كلاهما مرفوض','كلاهما مطلوب'],correct:0,hint:'نجدد الطريقة لا الرسالة'},
    en:{q:'What is the difference between renewal and replacement in Islam?',a:['Renewal updates understanding, replacement changes fundamentals','No difference','Both are rejected','Both are required'],correct:0,hint:'We renew the method, not the message'},
    fr:{q:'Quelle est la différence entre renouveau et remplacement en Islam?',a:['Le renouveau actualise la compréhension, le remplacement change les fondamentaux','Pas de différence','Les deux sont rejetés','Les deux sont requis'],correct:0,hint:'On renouvelle la méthode, pas le message'}
  },
  {
    ar:{q:'كم عدد صفحات كتاب "كيف نفهم الإسلام" تقريباً؟',a:['حوالي ١٦٦ صفحة','حوالي ٥٠٠ صفحة','حوالي ٥٠ صفحة','حوالي ١٠٠٠ صفحة'],correct:0,hint:'كتاب مركّز وعميق — ليس طويلاً جداً'},
    en:{q:'Approximately how many pages is "How We Understand Islam"?',a:['About 166 pages','About 500 pages','About 50 pages','About 1000 pages'],correct:0,hint:'A focused and deep book — not too long'},
    fr:{q:'Combien de pages fait environ "Comment Comprendre l\'Islam"?',a:['Environ 166 pages','Environ 500 pages','Environ 50 pages','Environ 1000 pages'],correct:0,hint:'Un livre concentré et profond — pas trop long'}
  },
  {
    ar:{q:'ما الرسالة الأخيرة للكتاب في فصل "لماذا أنا مسلم"؟',a:['الإسلام يحترم العقل ويحقق العدالة','المسلمون أفضل من غيرهم','الإسلام للعرب فقط','لا حاجة للتفكير في الدين'],correct:0,hint:'الغزالي: الإسلام يحرر العقل ويحترم الإنسان'},
    en:{q:'What is the book\'s final message in "Why I Am Muslim"?',a:['Islam respects the mind and achieves justice','Muslims are better than others','Islam is only for Arabs','No need to think about religion'],correct:0,hint:'Al-Ghazali: Islam frees the mind and respects humanity'},
    fr:{q:'Quel est le message final du livre dans "Pourquoi Je Suis Musulman"?',a:['L\'Islam respecte l\'esprit et réalise la justice','Les musulmans sont meilleurs que les autres','L\'Islam est réservé aux Arabes','Pas besoin de réfléchir à la religion'],correct:0,hint:'Al-Ghazali: l\'Islam libère l\'esprit et respecte l\'humanité'}
  },
  {
    ar:{q:'ما موقف الإسلام من العدالة الاجتماعية حسب الكتاب؟',a:['يفرض التكافل ويرفض الفقر المدقع','لا علاقة له بالاقتصاد','يدعم الأغنياء فقط','لم يتحدث عن ذلك'],correct:0,hint:'"والذين في أموالهم حق معلوم للسائل والمحروم"'},
    en:{q:'What is Islam\'s stance on social justice according to the book?',a:['Mandates solidarity and rejects extreme poverty','Has nothing to do with economics','Only supports the rich','Didn\'t discuss this'],correct:0,hint:'"And in their wealth is a known right for the beggar and the deprived"'},
    fr:{q:'Quelle est la position de l\'Islam sur la justice sociale selon le livre?',a:['Impose la solidarité et rejette la pauvreté extrême','N\'a rien à voir avec l\'économie','Ne soutient que les riches','N\'en a pas parlé'],correct:0,hint:'"Et dans leurs biens il y a un droit connu pour le mendiant et le privé"'}
  },
  {
    ar:{q:'من هو مؤلف كتاب "كيف نفهم الإسلام"؟',a:['الشيخ محمد الغزالي','ابن تيمية','الإمام الشافعي','يوسف القرضاوي'],correct:0,hint:'عالم مصري لُقب بأديب الدعوة — ١٩١٧-١٩٩٦'},
    en:{q:'Who is the author of "How We Understand Islam"?',a:['Sheikh Mohammed al-Ghazali','Ibn Taymiyyah','Imam Ash-Shafi\'i','Yusuf al-Qaradawi'],correct:0,hint:'Egyptian scholar nicknamed "The Literary Preacher" — 1917-1996'},
    fr:{q:'Qui est l\'auteur de "Comment Comprendre l\'Islam"?',a:['Sheikh Mohammed al-Ghazali','Ibn Taymiyyah','Imam Ash-Shafi\'i','Yusuf al-Qaradawi'],correct:0,hint:'Savant égyptien surnommé « Le Littéraire de la Prédication » — 1917-1996'}
  }
];

// ═══════════════ EXPLORER DATA (9 chapters) ═══════════════
const CHAPTERS = [
  {id:1,emoji:'🧭',ar:{title:'الإسلام وبساطته',desc:'الإسلام دين الفطرة البسيط الذي يفهمه الجميع'},en:{title:'Islam\'s Simplicity',desc:'Islam is the simple religion of natural disposition understood by all'},fr:{title:'La Simplicité de l\'Islam',desc:'L\'Islam est la religion simple de la nature comprise par tous'}},
  {id:2,emoji:'🔍',ar:{title:'تشخيص أمراض الأمة',desc:'العدو الأول داخلي: الجهل والفساد والتفرقة'},en:{title:'Diagnosing the Ummah\'s Problems',desc:'The first enemy is internal: ignorance, corruption, and division'},fr:{title:'Diagnostiquer les Maux de la Oumma',desc:'Le premier ennemi est interne: ignorance, corruption et division'}},
  {id:3,emoji:'📚',ar:{title:'الإسلام والتعليم',desc:'طلب العلم فريضة — الديني والدنيوي معاً'},en:{title:'Islam and Education',desc:'Seeking knowledge is obligatory — both religious and worldly'},fr:{title:'L\'Islam et l\'Éducation',desc:'La quête du savoir est obligatoire — religieux et mondain'}},
  {id:4,emoji:'🚫',ar:{title:'نقد التعصب المذهبي',desc:'التعصب يفرّق الأمة — الحق أوسع من مذهب واحد'},en:{title:'Critique of Sectarian Fanaticism',desc:'Fanaticism divides — truth is broader than one school'},fr:{title:'Critique du Fanatisme Sectaire',desc:'Le fanatisme divise — la vérité est plus large qu\'une école'}},
  {id:5,emoji:'⛔',ar:{title:'نقد التصوف المنحرف',desc:'الفرق بين تزكية النفس والخرافات'},en:{title:'Critique of Deviant Sufism',desc:'The difference between soul purification and superstitions'},fr:{title:'Critique du Soufisme Déviant',desc:'La différence entre purification de l\'âme et superstitions'}},
  {id:6,emoji:'👩',ar:{title:'حقوق المرأة',desc:'الإسلام كرّم المرأة والتقاليد ظلمتها'},en:{title:'Women\'s Rights',desc:'Islam honored women, traditions oppressed them'},fr:{title:'Les Droits de la Femme',desc:'L\'Islam a honoré la femme, les traditions l\'ont opprimée'}},
  {id:7,emoji:'🏛️',ar:{title:'محاربة الاستبداد',desc:'الشورى فريضة والاستبداد حرام'},en:{title:'Fighting Despotism',desc:'Consultation is obligatory, despotism is forbidden'},fr:{title:'Combattre le Despotisme',desc:'La consultation est obligatoire, le despotisme est interdit'}},
  {id:8,emoji:'⚖️',ar:{title:'العدالة الاجتماعية',desc:'التكافل الاجتماعي فريضة لا تطوع'},en:{title:'Social Justice',desc:'Social solidarity is an obligation, not voluntary'},fr:{title:'Justice Sociale',desc:'La solidarité sociale est une obligation, pas du volontariat'}},
  {id:9,emoji:'❤️',ar:{title:'لماذا أنا مسلم',desc:'خلاصة: الإسلام يحترم العقل ويحقق العدالة'},en:{title:'Why I Am Muslim',desc:'Summary: Islam respects the mind and achieves justice'},fr:{title:'Pourquoi Je Suis Musulman',desc:'Résumé: l\'Islam respecte l\'esprit et réalise la justice'}}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء طلب العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'ربي زدني علماً'},en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente mon savoir'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ',tr:'اللهم اهدنا فيمن هديت'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ',tr:'O God, guide us among those You have guided'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ',tr:'O Dieu, guide-nous parmi ceux que Tu as guidés'}},
  {ar:{label:'دعاء الفهم',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ',tr:'اللهم فهمني في الدين'},en:{label:'Dua for Understanding',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ',tr:'O God, grant me understanding in religion'},fr:{label:'Dua pour la Compréhension',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ',tr:'O Dieu, accorde-moi la compréhension en religion'}},
  {ar:{label:'دعاء الوحدة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا',tr:'اللهم ألف بين قلوبنا'},en:{label:'Dua for Unity',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا',tr:'O God, unite our hearts'},fr:{label:'Dua pour l\'Unité',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا',tr:'O Dieu, unis nos cœurs'}},
  {ar:{label:'دعاء العدل',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ',tr:'ربنا افتح بيننا وبين قومنا بالحق'},en:{label:'Dua for Justice',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ',tr:'Our Lord, judge between us and our people with truth'},fr:{label:'Dua pour la Justice',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ',tr:'Notre Seigneur, juge entre nous et notre peuple avec vérité'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, accorde-nous patience et affermis nos pas'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('kn-lang') || 'ar';
let theme = localStorage.getItem('kn-theme') || 'compass';
const themes = ['compass','night','dawn'];
const themeIcons = ['🧭','🌙','🌅'];
const themeNames = {compass:'بوصلة',night:'ليل هادئ',dawn:'فجر'};
let ageMode = localStorage.getItem('kn-age') || 'teen';
let currentConceptIdx = -1;

// ═══════════════ XP & BADGES SYSTEM ═══════════════
function getXP() { return parseInt(localStorage.getItem('kn-xp') || '0'); }
function addXP(n) { const xp = getXP() + n; localStorage.setItem('kn-xp', xp); checkBadges(); return xp; }
function getBadges() { return JSON.parse(localStorage.getItem('kn-badges') || '[]'); }
function earnBadge(id) {
  const badges = getBadges();
  if (!badges.includes(id)) { badges.push(id); localStorage.setItem('kn-badges', JSON.stringify(badges)); return true; }
  return false;
}
const BADGES = [
  {id:'beginner',emoji:'🌟',ar:'مبتدئ',en:'Beginner',fr:'Débutant',condition:()=>true},
  {id:'reader',emoji:'📖',ar:'قارئ',en:'Reader',fr:'Lecteur',condition:()=>{const r=parseInt(localStorage.getItem('kn-cards-read')||'0');return r>=10;}},
  {id:'scholar',emoji:'🧠',ar:'عالم',en:'Scholar',fr:'Savant',condition:()=>localStorage.getItem('kn-quiz-done')==='true'},
  {id:'persistent',emoji:'🔥',ar:'مثابر',en:'Persistent',fr:'Persévérant',condition:()=>{const s=parseInt(localStorage.getItem('kn-streak')||'0');return s>=7;}},
  {id:'expert',emoji:'🏆',ar:'خبير',en:'Expert',fr:'Expert',condition:()=>localStorage.getItem('kn-quiz-perfect')==='true'}
];
function checkBadges() {
  BADGES.forEach(b => { if (b.condition()) earnBadge(b.id); });
}

function trackCardRead() {
  const count = parseInt(localStorage.getItem('kn-cards-read') || '0') + 1;
  localStorage.setItem('kn-cards-read', count);
  addXP(10);
}

// ═══════════════ QUIZ STATE ═══════════════
let quizState = { current: 0, score: 0, answered: [], lifelines: { fifty: true, hint: true, sheikh: true }, active: false, questions: [] };

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  earnBadge('beginner');
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderConcepts();
  renderPrinciples();
  renderQuiz();
  renderExplorer();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  if (!el) return;
  const featuresEl = document.getElementById('splashFeatures');
  if (!featuresEl) return;
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (!s) return;
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('kn-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabConcepts', t.tabConcepts); set('tabPrinciples', t.tabPrinciples);
  set('tabQuiz', t.tabQuiz); set('tabExplorer', t.tabExplorer); set('tabAbout', t.tabAbout);
  set('conceptsTitle', t.conceptsTitle); set('conceptsDesc', t.conceptsDesc);
  set('principlesTitle', t.principlesTitle); set('principlesDesc', t.principlesDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('explorerTitle', t.explorerTitle); set('explorerDesc', t.explorerDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderConcepts(); renderPrinciples(); renderQuiz(); renderExplorer(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (!featuresEl) return;
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('kn-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (!el) return;
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ AGE MODE ═══════════════
function toggleAgeMode() {
  ageMode = ageMode === 'teen' ? 'young' : 'teen';
  localStorage.setItem('kn-age', ageMode);
  renderConcepts();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('click');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CONCEPTS.length;
  const c = CONCEPTS[dayIdx];
  const cd = c[lang];
  const xp = getXP();
  const badges = getBadges();
  const xpBar = `<div class="xp-bar-wrap"><div class="xp-bar-label">${t.xpLabel}: ${xp} XP</div><div class="xp-bar-bg"><div class="xp-bar-fill" style="width:${Math.min(xp/500*100,100)}%"></div></div></div>`;
  const badgeHTML = badges.length > 0 ? `<div class="badges-row">${BADGES.filter(b=>badges.includes(b.id)).map(b=>`<span class="badge-item" title="${b[lang]}">${b.emoji}</span>`).join('')}</div>` : '';
  const modeBtn = `<button class="age-toggle" onclick="toggleAgeMode()">${ageMode==='young'?t.youngMode:t.teenMode}</button>`;

  (document.getElementById('dailyCard')||{}).innerHTML= `
    ${xpBar}${badgeHTML}${modeBtn}
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${ageMode==='young'?cd.young:cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=concepts]').click()">${t.tabConcepts} &#8594;</div>
  `;
  const sections = [
    {icon:'🧭',tab:'concepts',title:t.tabConcepts,desc:lang==='ar'?'٢٠ مفهوماً إسلامياً':lang==='fr'?'20 concepts islamiques':'20 Islamic concepts'},
    {icon:'📏',tab:'principles',title:t.tabPrinciples,desc:lang==='ar'?'٩ قواعد ذهبية':lang==='fr'?'9 règles d\'or':'9 golden rules'},
    {icon:'🏆',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'من يريد أن يكون عالماً؟':lang==='fr'?'Qui veut être savant ?':'Who wants to be a scholar?'},
    {icon:'🗺️',tab:'explorer',title:t.tabExplorer,desc:lang==='ar'?'رحلة عبر الفصول':lang==='fr'?'Voyage à travers les chapitres':'Journey through chapters'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CONCEPTS ═══════════════
function renderConcepts() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="conceptsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterConcepts(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CONCEPTS.map((c, i) => {
    const d = c[lang];
    const descText = ageMode === 'young' ? d.young : d.desc;
    return `
    <div class="concept-card scroll-reveal" id="concept-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="concept-head" onclick="toggleCard('concept-${c.id}');trackCardRead()">
        <span class="concept-num">${c.id}</span>
        <span class="concept-emoji">${c.emoji}</span>
        <span class="concept-title">${d.title}</span>
        <span class="concept-chev">&#9660;</span>
      </div>
      <div class="concept-body">
        <div class="concept-inner">
          <p class="concept-desc">${descText}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.lesson}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareConcept(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('conceptsContainer')||{}).innerHTML= searchBar + cards;
}

function filterConcepts(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.concept-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.concept-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareConcept(idx) {
  const c = CONCEPTS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.lesson}\n\n— كيف نفهم الإسلام | How We Understand Islam`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text: text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copié !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: PRINCIPLES ═══════════════
function renderPrinciples() {
  (document.getElementById('principlesContainer')||{}).innerHTML= PRINCIPLES_DATA.map(p => {
    const d = p[lang];
    return `
    <div class="about-card principle-item scroll-reveal">
      <div class="principle-emoji">${p.emoji}</div>
      <div class="principle-title">${d.title}</div>
      <div class="principle-desc">${d.desc}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ — "Who Wants to Be a Scholar?" ═══════════════
function renderQuiz() {
  const t = T[lang];
  if (!quizState.active) {
    (document.getElementById('quizContainer')||{}).innerHTML= `
      <div class="quiz-intro">
        <div class="quiz-intro-icon">🏆</div>
        <p class="quiz-intro-text">${t.quizDesc}</p>
        <div class="quiz-lifelines-preview">
          <span>${t.lifeline5050}</span>
          <span>${t.lifelineHint}</span>
          <span>${t.lifelineSheikh}</span>
        </div>
        <button class="quiz-start-btn" onclick="startQuiz()">${t.quizStart}</button>
      </div>`;
    return;
  }
  renderQuizQuestion();
}

function startQuiz() {
  // Shuffle and pick 15
  const shuffled = [...QUIZ_DATA].sort(() => Math.random() - 0.5);
  quizState = { current: 0, score: 0, answered: [], lifelines: { fifty: true, hint: true, sheikh: true }, active: true, questions: shuffled };
  addXP(5);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const qs = quizState.questions;
  if (quizState.current >= qs.length) {
    finishQuiz();
    return;
  }
  const q = qs[quizState.current][lang];
  const progress = `${quizState.current + 1}/${qs.length}`;
  const lifelineHTML = `
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
      <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
      <button class="lifeline-btn ${quizState.lifelines.sheikh?'':'used'}" onclick="useSheikh()" ${quizState.lifelines.sheikh?'':'disabled'}>${t.lifelineSheikh}</button>
    </div>`;
  const answersHTML = q.a.map((a, i) => `<button class="quiz-answer" id="qa-${i}" onclick="answerQuiz(${i})">${a}</button>`).join('');

  (document.getElementById('quizContainer')||{}).innerHTML= `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(quizState.current/qs.length)*100}%"></div></div>
    <div class="quiz-progress-text">${progress}</div>
    <div class="quiz-score-display">${t.quizScore}: ${quizState.score}</div>
    ${lifelineHTML}
    <div class="quiz-question-card">
      <div class="quiz-q-number">${quizState.current + 1}</div>
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-answers">${answersHTML}</div>
      <div class="quiz-hint-box hidden" id="quizHintBox"></div>
    </div>`;
}

function answerQuiz(idx) {
  const q = quizState.questions[quizState.current][lang];
  const correct = q.correct;
  const btns = document.querySelectorAll('.quiz-answer');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    if (i === idx && idx !== correct) b.classList.add('wrong');
  });
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    showToast(T[lang].quizCorrect);
    playSound('success');
  } else {
    showToast(T[lang].quizWrong);
    playSound('click');
  }
  quizState.answered.push(idx);
  setTimeout(() => {
    quizState.current++;
    renderQuizQuestion();
  }, 1500);
}

function finishQuiz() {
  const t = T[lang];
  const total = quizState.questions.length;
  const pct = Math.round(quizState.score / total * 100);
  localStorage.setItem('kn-quiz-done', 'true');
  if (pct === 100) localStorage.setItem('kn-quiz-perfect', 'true');
  addXP(20);
  checkBadges();
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A true scholar!'; }
  else if (pct >= 50) { emoji = '📚'; title = lang==='ar'?'جيد — واصل التعلم':lang==='fr'?'Bien — continuez à apprendre':'Good — keep learning'; }
  else { emoji = '🌱'; title = lang==='ar'?'بداية طيبة — أعد المحاولة':lang==='fr'?'Bon début — réessayez':'Good start — try again'; }

  (document.getElementById('quizContainer')||{}).innerHTML= `
    <div class="quiz-result">
      <div class="qr-emoji">${emoji}</div>
      <div class="qr-score">${quizState.score}/${total} (${pct}%)</div>
      <div class="qr-title">${title}</div>
      <button class="quiz-start-btn" onclick="quizState.active=false;renderQuiz()">${t.quizRestart}</button>
    </div>`;
  playSound('success');
  if (pct >= 80) launchConfetti();
}

function useFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = quizState.questions[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => {
    const btn = document.getElementById('qa-' + i);
    if (btn) { btn.style.opacity = '0.2'; btn.disabled = true; }
  });
  document.querySelectorAll('.lifeline-btn')[0].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[0].disabled = true;
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = quizState.questions[quizState.current][lang];
  const correct = q.correct;
  const btn = document.getElementById('qa-' + correct);
  if (btn) btn.style.boxShadow = '0 0 12px rgba(2,119,189,.5)';
  document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[1].disabled = true;
  playSound('click');
}

function useSheikh() {
  if (!quizState.lifelines.sheikh) return;
  quizState.lifelines.sheikh = false;
  const q = quizState.questions[quizState.current][lang];
  const hintBox = document.getElementById('quizHintBox');
  if (!hintBox) return;
  if (hintBox) { hintBox.textContent = '📞 ' + q.hint; hintBox.classList.remove('hidden'); }
  document.querySelectorAll('.lifeline-btn')[2].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[2].disabled = true;
  playSound('click');
}

// ═══════════════ RENDER: EXPLORER ═══════════════
function renderExplorer() {
  (document.getElementById('explorerContainer')||{}).innerHTML= CHAPTERS.map(ch => {
    const d = ch[lang];
    return `
    <div class="about-card explorer-card scroll-reveal">
      <div class="explorer-num">${ch.id}</div>
      <div class="explorer-emoji">${ch.emoji}</div>
      <div class="explorer-title">${d.title}</div>
      <div class="explorer-desc">${d.desc}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"كيف نفهم الإسلام" يقدم رؤية الشيخ الغزالي للإسلام كدين شامل وبسيط وحديث. يتناول في ١٦٦ صفحة بساطة الإسلام، تشخيص أمراض الأمة، أهمية التعليم والعلم، نقد التعصب المذهبي والتصوف المنحرف، حقوق المرأة، محاربة الاستبداد، والعدالة الاجتماعية. يختم بفصل "لماذا أنا مسلم".',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "كيف نفهم الإسلام" — الشيخ محمد الغزالي — دار نهضة مصر','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"How We Understand Islam" presents Sheikh al-Ghazali\'s vision of Islam as a comprehensive, simple, and modern religion. In 166 pages, it covers Islam\'s simplicity, diagnosing the Ummah\'s problems, the importance of education and science, critique of sectarian fanaticism and deviant Sufism, women\'s rights, fighting despotism, and social justice. It ends with the chapter "Why I Am Muslim."',
      sourcesTitle: 'Sources',
      sources: ['"How We Understand Islam" (Kayfa Nafham al-Islam) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tiré du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique égyptien, surnommé « Le Littéraire de la Prédication ». Auteur de plus de 94 livres. Diplômé d\'Al-Azhar, professeur à l\'Université Emir Abdelkader de Constantine (Algérie). Lauréat du Prix Roi Faysal. Connu pour le renouveau, la lutte contre la rigidité et la défense des droits des femmes en Islam.',
      bookTitle: 'À Propos du Livre',
      bookDesc: '« Comment Comprendre l\'Islam » présente la vision du Sheikh al-Ghazali de l\'Islam comme une religion complète, simple et moderne. En 166 pages, il couvre la simplicité de l\'Islam, le diagnostic des maux de la Oumma, l\'importance de l\'éducation et de la science, la critique du fanatisme sectaire et du soufisme déviant, les droits de la femme, la lutte contre le despotisme et la justice sociale. Il se termine par le chapitre « Pourquoi Je Suis Musulman ».',
      sourcesTitle: 'Sources',
      sources: ['« Comment Comprendre l\'Islam » (Kayfa Nafham al-Islam) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-card about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-card about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-card about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-card about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-card about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "كيف نفهم الإسلام" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ مفهوم، ١٥ سؤال مسابقة، نظام نقاط وأوسمة.'},
      {title:'🌱 الأوضاع',body:'المستكشف الصغير (٧-١٢ سنة): نصوص مبسطة. الباحث الشاب (١٣+): المحتوى الكامل.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين المفاهيم. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/kayfa-nafham'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"How We Understand Islam" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 concepts, 15-question quiz, points and badges system.'},
      {title:'🌱 Modes',body:'Young Explorer (ages 7-12): simplified text. Teen Scholar (13+): full content.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate between concepts. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/kayfa-nafham'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Comment Comprendre l\'Islam » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalités',body:'Trois langues (AR/EN/FR), 3 thèmes, 20 concepts, quiz de 15 questions, système de points et badges.'},
      {title:'🌱 Modes',body:'Jeune Explorateur (7-12 ans) : texte simplifié. Chercheur Ado (13+) : contenu complet.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les flèches (gauche/droite) pour naviguer entre les concepts. Échap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/kayfa-nafham'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#0277BD','#4FC3F7','#FF8C61','#FFD54F','#66BB6A','#B388FF','#E57373'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel) return;
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel) return;
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.concept-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const conceptsPanel = document.getElementById('panel-concepts');
      if (!conceptsPanel) return;
      if (!conceptsPanel || !conceptsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'conceptsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.concept-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentConceptIdx >= 0 && currentConceptIdx < cards.length) cards[currentConceptIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentConceptIdx = Math.max(0, Math.min(cards.length - 1, currentConceptIdx + dir));
      cards[currentConceptIdx].classList.add('open');
      cards[currentConceptIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  const m = document.getElementById('toastMsg');
  if (!m) return;
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
