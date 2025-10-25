// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
let selectedPersonalityType = 'творческий';

// ФУНКЦИИ СТРАНИЦЫ ПРОДУКТА
function selectPersonalityType(type) {
    selectedPersonalityType = type;
    document.querySelectorAll('.personality-type-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadModuleContent(document.querySelector('.module-nav-btn.active').textContent.replace('Модуль ', ''));
}

function showModule(moduleNumber) {
    document.querySelectorAll('.module-nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadModuleContent(moduleNumber);
}

function toggleSubmodule(submoduleId) {
    const content = document.getElementById(submoduleId);
    const arrow = content.previousElementSibling.querySelector('.submodule-arrow');
    
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        arrow.innerHTML = '▼';
    } else {
        content.style.display = 'none';
        arrow.innerHTML = '▶';
    }
}

function loadModuleContent(moduleNumber) {
    const moduleContent = document.getElementById('module-content');
    let content = '';
    
    if (moduleNumber == 1) {
        content = `
            <div id="module-1" class="module-section active">
                <h2 style="color: #4A00E0; font-size: 2.2rem; margin-bottom: 30px; text-align: center;">
                    Модуль 1: Зона вашего максимального роста
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px;">
                    ${getPersonalizedContent(1)}
                </div>
            </div>
        `;
    } else if (moduleNumber == 2) {
        content = `
            <div id="module-2" class="module-section active">
                <h2 style="color: #4A00E0; font-size: 2.2rem; margin-bottom: 30px; text-align: center;">
                    Модуль 2: Наиболее эффективное обучение с вашим типом
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px;">
                    ${getPersonalizedContent(2)}
                </div>
            </div>
        `;
    } else if (moduleNumber == 3) {
        content = `
            <div id="module-3" class="module-section active">
                <h2 style="color: #4A00E0; font-size: 2.2rem; margin-bottom: 30px; text-align: center;">
                    Модуль 3: Синергия типов личностей
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px;">
                    ${getPersonalizedContent(3)}
                </div>
            </div>
        `;
    }
    
    moduleContent.innerHTML = content;
}

function getPersonalizedContent(moduleNumber) {
    const type = selectedPersonalityType;
    let content = '';
    
    if (moduleNumber == 1) {
        content = `
            <div class="submodule-card" onclick="toggleSubmodule('sub1-1')">
                <div class="submodule-header">
                    <h3>🎯 Сильные стороны и их применение</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub1-1" class="submodule-content">
                    ${getTypeSpecificContent(type, 'strengths')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub1-2')">
                <div class="submodule-header">
                    <h3>💼 Идеальные сферы для реализации</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub1-2" class="submodule-content">
                    ${getTypeSpecificContent(type, 'career')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub1-3')">
                <div class="submodule-header">
                    <h3>🚫 Зоны риска и пустых трат</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub1-3" class="submodule-content">
                    ${getTypeSpecificContent(type, 'risks')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub1-4')">
                <div class="submodule-header">
                    <h3>❓ Ключевые вопросы для ясности</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub1-4" class="submodule-content">
                    ${getTypeSpecificContent(type, 'questions')}
                </div>
            </div>
        `;
    } else if (moduleNumber == 2) {
        content = `
            <div class="submodule-card" onclick="toggleSubmodule('sub2-1')">
                <div class="submodule-header">
                    <h3>👑 Ваши ориентиры для роста</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub2-1" class="submodule-content">
                    ${getTypeSpecificContent(type, 'learning_models')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub2-2')">
                <div class="submodule-header">
                    <h3>🌱 Идеальная среда для развития</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub2-2" class="submodule-content">
                    ${getTypeSpecificContent(type, 'learning_environment')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub2-3')">
                <div class="submodule-header">
                    <h3>📚 Персональная формула обучения</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub2-3" class="submodule-content">
                    ${getTypeSpecificContent(type, 'learning_formula')}
                </div>
            </div>
        `;
    } else if (moduleNumber == 3) {
        content = `
            <div class="submodule-card" onclick="toggleSubmodule('sub3-1')">
                <div class="submodule-header">
                    <h3>🤝 Эффективное взаимодействие</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub3-1" class="submodule-content">
                    ${getTypeSpecificContent(type, 'interaction')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub3-2')">
                <div class="submodule-header">
                    <h3>💬 Искусство убеждения</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub3-2" class="submodule-content">
                    ${getTypeSpecificContent(type, 'persuasion')}
                </div>
            </div>
            <div class="submodule-card" onclick="toggleSubmodule('sub3-3')">
                <div class="submodule-header">
                    <h3>❤️ Гармония в отношениях</h3>
                    <span class="submodule-arrow">▶</span>
                </div>
                <div id="sub3-3" class="submodule-content">
                    ${getTypeSpecificContent(type, 'relationships')}
                </div>
            </div>
        `;
    }
    
    return content;
}

function getTypeSpecificContent(type, category) {
    // Вставьте сюда всю функцию getTypeSpecificContent из вашего кода
    // (ту самую большую функцию с contentMap)
    // Я не вставляю её полностью здесь из-за ограничения длины
    return `<div class="type-content"><p>Контент загружается...</p></div>`;
}

// ИНИЦИАЛИЗАЦИЯ
document.addEventListener('DOMContentLoaded', function() {
    loadModuleContent(1);
});
