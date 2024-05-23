const updateLanguage = () => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
        element.classList.add(i18next.language);
    });
}

const updateDownloadButton = (lang) => {
    const userSystem = /Linux/.test(navigator.userAgent) ? 'debian' : 'windows';
    const downloadButton = document.getElementById('download')
    const i18n = (lang) => {
        const locales = {
            'pt-BR': 'Baixar para ',
            'en': 'Download for ',
            'ru-RU': 'Скачать для '
        }
        return locales[lang] || locales.en
    }

    downloadButton
        .innerText = i18n(lang) + supportedSystems(userSystem).os
}

document.addEventListener('DOMContentLoaded', () => {
    let userLanguage = navigator.languages

    i18next.init({
        lng: userLanguage,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    currentLang:        'English',
                    ptLang:             'Portuguese',
                    enLang:             'English',
                    ruLang:             'Russian',

                    voxelLink:          'The Unstoppable Launcher.',

                    mainTextOne:        'Experience the ultimate',
                    mainTextTwo:        'repacks launcher app',

                    mobileDiscord:      'Meet us on discord',
                    mobileGithub:       "View source code",

                    descriptionOne:     'Hydra is a free, open source',
                    descriptionTwo:     '— and self-sufficient launcher',

                    // downloadButton:     'Download for Windows',
                    changeLog:          'Changelog',
                    sourceCodeButton:   'View Source Code',

                    cardOneTitle:       'Free',
                    cardTwoTitle:       'Open Source',
                    cardThreeTitle:     'No Ads',

                    cardOneTxtOne:      'We',
                    cardOneTxtTwo:      'don\'t care',
                    cardOneTxtThree:    'about',
                    cardOneTxtFour:     'your',
                    cardOneTxtFive:     'money',

                    cardTwoTxtOne:      'Feel free to read',
                    cardTwoTxtTwo:      'our',
                    cardTwoTxtThree:    'source code',

                    cardThreeTxtOne:    'Do you hate ads?',
                    cardThreeTxtTwo:    'We do it too!',
                }
            },
            pt: {
                translation: {
                    currentLang:        'Português',
                    ptLang:             'Português',
                    enLang:             'Inglês',
                    ruLang:             'Russo',

                    voxelLink:          'O Launcher inderrubável.',

                    mainTextOne:        'Conheça o melhor app',
                    mainTextTwo:        'de jogos desbloqueados',

                    mobileDiscord:      'Entre no Discord',
                    mobileGithub:       'Veja o código fonte',

                    descriptionOne:     'Hydra é um launcher grátis,',
                    descriptionTwo:     'autossuficiente e de código aberto',

                    // downloadButton:  'Baixe para Windows',
                    changeLog:          'Changelog',
                    sourceCodeButton:   'Veja o Código Fonte',

                    cardOneTitle:       'Grátis',
                    cardTwoTitle:       'Código aberto',
                    cardThreeTitle:     'Sem anúncios',

                    cardOneTxtOne:      'Nós',
                    cardOneTxtTwo:      'não ligamos',
                    cardOneTxtThree:    'para',
                    cardOneTxtFour:     'o seu',
                    cardOneTxtFive:     'dinheiro',

                    cardTwoTxtOne:      'Sinta-se livre',
                    cardTwoTxtTwo:      'para ler',
                    cardTwoTxtThree:    'nosso código fonte',

                    cardThreeTxtOne:    'Você odeia anúncios?',
                    cardThreeTxtTwo:    'Nós também!',
                }
            },
            ru: {
                translation: {
                    currentLang:        'Русский',
                    ptLang:             'Португальский',
                    enLang:             'Английский',
                    ruLang:             'Русский',

                    voxelLink:          'Неудержимый лаунчер.',

                    mainTextOne:        'Попробуйте лучший',
                    mainTextTwo:        'лаунчер репаков',

                    mobileDiscord:      'Наш дискорд',
                    mobileGithub:       "Посмотреть исходный код",

                    descriptionOne:     'Hydra это бесплатный лаунчер',
                    descriptionTwo:     'с открытым исходным кодом',

                    // downloadButton:     'Download for Windows',
                    changeLog:          'Изменения',
                    sourceCodeButton:   'Посмотреть исходный код',

                    cardOneTitle:       'Бесплатно',
                    cardTwoTitle:       'Открытый код',
                    cardThreeTitle:     'Без рекламы',

                    cardOneTxtOne:      'Нас',
                    cardOneTxtTwo:      'не',
                    cardOneTxtThree:    'волнуют',
                    cardOneTxtFour:     'ваши',
                    cardOneTxtFive:     'деньги',

                    cardTwoTxtOne:      'Читайте',
                    cardTwoTxtTwo:      'наш',
                    cardTwoTxtThree:    'Исходный код',

                    cardThreeTxtOne:    'Ненавидете рекламу?',
                    cardThreeTxtTwo:    'Мы тоже!',
                }
            }
        }
    }, () => {
        updateLanguage()
        updateDownloadButton(i18next.language)
    });
});

const Lang = {
    menu: document.querySelector('.language-box'),
    show: function() {
        this.menu.classList.add('show');
    },
    hide: function() {
        this.menu.classList.remove('show');
    }
};


const changeLanguage = (newLang) => {
    i18next.changeLanguage(newLang, () => {
        updateLanguage();
        updateDownloadButton(newLang)
        Lang.hide();
    });
}
