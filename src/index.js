import "./pages/style.css"; 

const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.nav_mobile');
const searchButton = document.querySelector('.header__button-search');
const header = document.querySelector('.header__container');
const mobileSearch = document.querySelector('.header__search_mobile');
const submenu = document.querySelector('.header__submenu');
const submenuLink = document.querySelector('.header__submenu-link');
const submenuLinkArrow = document.querySelector('.header__submenu-arrow');
const footerInfoButton = document.querySelector('.footer__mobile-button_info');
const footerInfoButtonSpan = document.querySelector('.footer__mobile-button-span_info');
const footerInfoMenu = document.querySelector('.footer__dropdown_info');
const footerContactsButton = document.querySelector('.footer__mobile-button_contacts');
const footerContactsButtonSpan = document.querySelector('.footer__mobile-button-span_contacts');
const footerContactsMenu = document.querySelector('.footer__dropdown_contacts');
const footerEquipButton = document.querySelector('.footer__mobile-button_equip');
const footerEquipButtonSpan = document.querySelector('.footer__mobile-button-span_equip');
const footerEquipMenu = document.querySelector('.footer__dropdown_equip');
const footerOffersButton = document.querySelector('.footer__mobile-button_offers');
const footerOffersButtonSpan = document.querySelector('.footer__mobile-button-span_offers');
const footerOffersMenu = document.querySelector('.footer__dropdown_offers');

function mobileMenuToggle() {
    mobileMenu.classList.toggle('nav_open');
}

function mobileSearchToggle() {
    mobileSearch.classList.toggle('header__search_open');
    mobileSearch.classList.toggle('header__search_mobile');
    header.classList.toggle('header__container_no-border');
}

function submenuToggle() {
    submenu.classList.toggle('header__submenu_open');
    submenuLinkArrow.classList.toggle('header__submenu-arrow_active');
}

function footerDropdownToggle(menu, span) {
    menu.classList.toggle('footer__dropdown_open');
    span.classList.toggle('footer__mobile-button-span_active');
}

burger.addEventListener('click', mobileMenuToggle);
searchButton.addEventListener('click', mobileSearchToggle);
submenuLink.addEventListener('click', submenuToggle);
footerInfoButton.addEventListener('click', () => {
    footerDropdownToggle(footerInfoMenu, footerInfoButtonSpan);
});
footerContactsButton.addEventListener('click', () => {
    footerDropdownToggle(footerContactsMenu, footerContactsButtonSpan);
});
footerOffersButton.addEventListener('click', () => {
    footerDropdownToggle(footerOffersMenu, footerOffersButtonSpan);
});
footerEquipButton.addEventListener('click', () => {
    footerDropdownToggle(footerEquipMenu, footerEquipButtonSpan);
});