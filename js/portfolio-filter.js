const filterListItemsArray = document.querySelectorAll(
  '.list-of-products-item',
);
console.log(filterListItemsArray);

const refs = {
  allBtn: document.querySelector('[data-value="AllBtn"]'),
  webBtn: document.querySelector('[data-value="WebsBtn"]'),
  appsBtn: document.querySelector('[data-value="AppsBtn"]'),
  designBtn: document.querySelector('[data-value="DesignBtn"]'),
  marketingBtn: document.querySelector('[data-value="MarkBtn"]'),
};

refs.allBtn.addEventListener('click', onAllBtnClick);
function onAllBtnClick() {
  filterListItemsArray.forEach(filterItem =>
    filterItem.classList.remove('is-hidden'),
  );
}

function addHiddenClass(item) {
  item.classList.add('is-hidden');
}

refs.webBtn.addEventListener('click', onWebBtnClick);
function onWebBtnClick(e) {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Website') {
      addHiddenClass(filterItem);
    }
  });
}

refs.appsBtn.addEventListener('click', onAppsBtnClick);
function onAppsBtnClick(e) {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Application') {
      addHiddenClass(filterItem);
    }
  });
  const projectBoxesLiEl = document.querySelector('#project-boxes');
  projectBoxesLiEl.style.marginRight = '0px';
}

refs.designBtn.addEventListener('click', onDesignBtnClick);
function onDesignBtnClick(e) {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Design') {
      addHiddenClass(filterItem);
    }
  });
}

refs.marketingBtn.addEventListener('click', onMarketingBtnClick);
function onMarketingBtnClick(e) {
  onAllBtnClick();
  filterListItemsArray.forEach(filterItem => {
    if (filterItem.dataset.value !== 'Marketing') {
      addHiddenClass(filterItem);
    }
  });
}
