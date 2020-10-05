const url =
  'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=';
const form = document.getElementById('search');
const input = document.getElementById('input');
const error = document.getElementById('error');
const displayData = document.getElementById('data');
let orgNumber = '';

const listElements = (companyInfo) => {
  const list = Object.keys(companyInfo)
    .map((key) => {
      if (typeof companyInfo[key] === 'object') {
        return `<li>${key}: ${companyInfo[key].city}</li>`;
      }
      return `<li>${key}: ${companyInfo[key]}</li>`;
    })
    .join('');

  return `
    <ul>
    ${list}
    </ul>
  `;
};

const formatData = (data) => {
  if (!data?._embedded?.enheter[0])
    throw new Error('Data is not formatted correctly');
  const base = data._embedded.enheter[0];
  const companyInfo = {
    name: base.navn,
    registered: base.registreringsdatoEnhetsregisteret,
    address: {
      city: base.forretningsadresse.kommune,
    },
  };
  return companyInfo;
};

const fetchData = async () =>
  fetch(url + orgNumber).catch((e) => (error.innerHTML = e));

const render = async () => {
  try {
    const response = await fetchData();
    if (response.status !== 200) throw new Error('Could not find company');
    const companyData = await response.json();
    const formatedData = formatData(companyData);
    const list = listElements(formatedData);
    displayData.innerHTML = list;
  } catch (err) {
    error.innerHTML = err.message;
  }
};

const handleSubmitEvent = (e) => {
  e.preventDefault();
  if (!orgNumber) {
    error.innerHTML = 'Fyll ut org.nr';
    return;
  }
  render();
};

const handleChangeEvent = (e) => {
  orgNumber = e.target.value;
};

input.addEventListener('change', handleChangeEvent);
form.addEventListener('submit', handleSubmitEvent);
