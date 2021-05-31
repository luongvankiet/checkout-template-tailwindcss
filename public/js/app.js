function onDisplayOrderDetail(e) {
    let onDisplay = e.getAttribute('data-display') === 'true';

    e.querySelector('#title').innerHTML = onDisplay
        ? 'Hiển thị thông tin đơn hàng <i class="fa fa-chevron-down"></i>'
        : 'Ẩn thông tin đơn hàng <i class="fa fa-chevron-up"></i>';

    toggleElement('#order-info');
    toggleElement('#discount');
    e.setAttribute('data-display', ! onDisplay);
}

function onChangePickUpLocationState(e) {
    toggleElement('#pick_at_location_true', e.value === 'true');
    toggleElement('#pick_at_location_false', e.value === 'false');
}

function onChangePromotionCode(e) {
    document.getElementById('promotion-code').value = e.value;

    document.querySelectorAll('.apply-promotion-button').forEach(element => {
        element.toggleAttribute('disabled', ! e.value);
    })
}

function getPromotionCode() {
    return document.getElementById('promotion-code').value;
}

function setPromotionCode() {
    const codeElements = document.querySelectorAll('.code');

    codeElements.forEach(element => {
        element.innerHTML = getPromotionCode();
    })
}

function removePromotionCode() {
    return document.getElementById('promotion-code').value = '';
}

function onRemoveCode() {
    removePromotionCode();
    init();
}

function onApplyCode() {
    const elements = document.querySelectorAll('.promotion-code-input input')
    elements.forEach(element => element.value = '');

    init();
}

function toggleElement(name, force) {
    const elements = document.querySelectorAll(name)

    elements.forEach(element => {
        const display = force ?? element.classList.contains('hidden');
        element.classList.toggle('hidden', !display);
    })
}

function toggleAttribute(name, attribute, force) {
    const elements = document.querySelectorAll(name)

    elements.forEach(element => {
        const force = force ?? element.hasAttribute(attribute);
        element.toggleAttribute(attribute, !force);
    })
}

function init() {
    setPromotionCode()
    toggleElement('.promotion-code-input', !getPromotionCode());
    toggleElement('.promotion-code-detail', !!getPromotionCode());
}

init();
