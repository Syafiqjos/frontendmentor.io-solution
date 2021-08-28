let latestSubsIndex = 0;
const subsType = [
    {
        pricePerMonth: 8,
        pageViews: 10
    },
    {
        pricePerMonth: 12,
        pageViews: 50
    },
    {
        pricePerMonth: 16,
        pageViews: 100
    },
    {
        pricePerMonth: 24,
        pageViews: 500
    },
    {
        pricePerMonth: 36,
        pageViews: 1000
    }
];

let monthlyBilling = true;
const monthlyBillingButton = document.getElementById('pricing-modal__options-switch__monthly-billing')

const sliderNode = document.getElementById('pricing-modal__slider-bar');
const priceCount = document.getElementById('pricing-modal__price-count');
const priceInterval = document.getElementById('pricing-modal__price-interval');
const pageViews = document.getElementById('pricing-modal__page-views');

if (monthlyBillingButton){
    monthlyBillingButton.addEventListener('click', () => {
        monthlyBilling = !monthlyBilling;

        refreshMonthlyBilling(monthlyBilling);

        let data = subsType[latestSubsIndex];
        refreshSliderData(data);
    });
}

if (sliderNode){
    sliderNode.min = 0;
    sliderNode.max = subsType.length - 1;

    sliderNode.addEventListener('input', (e) => {        
        let sliderValue = e.srcElement.value;

        const data = subsType[sliderValue];

        let percentage = Number.parseFloat(sliderValue / (sliderNode.max + 1)) * 1000;

        sliderNode.style.setProperty('--percentage', `${percentage}%`);
        
        latestSubsIndex = sliderValue;
        refreshSliderData(data);
    });
}

// START
refreshMonthlyBilling(true);
refreshSliderData(subsType[0]);

// FUNTION
function refreshSliderData(data){
    if (data){
        const sign = data.pageViews >= 1000 ? 'M' : data.pageViews >= 1 ? 'K' : '';
        let total = sign === 'M' ? data.pageViews / 1000 : data.pageViews;

        pageViews.innerText = `${total}${sign} Pageviews`;

        let totalPrice = 0;
        let billType = '';
        if (monthlyBilling){
            totalPrice = data.pricePerMonth;
            billType = 'month'
        } else {
            let discount = 0.25;
            totalPrice = data.pricePerMonth * 12 * (1 - discount);
            billType = 'year'
        }

        priceCount.innerText = `$${totalPrice}.00`;
        priceInterval.innerText = billType;
    }
}

function refreshMonthlyBilling(monthlyBilling){
    if (monthlyBilling){
        monthlyBillingButton.classList.add('pricing-modal__options-switch--active');
    } else {
        monthlyBillingButton.classList.remove('pricing-modal__options-switch--active');
    }
}