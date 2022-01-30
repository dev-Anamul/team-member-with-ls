/* eslint-disable prettier/prettier */

const form = document.querySelector('.form');
const renderDiv = document.querySelector('.render_div');
const allDevInfArr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    /// // get form data
    const skills = document.querySelectorAll('input[type="checkbox"]:checked');

    const name = document.getElementById('name').value;
    const img = document.getElementById('img').value;
    const devGender = document.querySelector('input[name="gender"]:checked').value;

    const fblLnk = document.getElementById('facebook').value;
    const whatsAppLInk = document.getElementById('whatsapp').value;
    const youTubeLink = document.getElementById('youtube').value;
    const linkedInLink = document.getElementById('linkedin').value;
    const twitterLInk = document.getElementById('twitter').value;

    const skillArr = [];
    skills.forEach((el) => (skillArr.push(el.value)));

    const devInfObj = {
        name,
        img,
        devGender,
        skillArr,
        fblLnk,
        whatsAppLInk,
        youTubeLink,
        linkedInLink,
        twitterLInk,
    };

    allDevInfArr.push(devInfObj);
    setDataIntoLocal(allDevInfArr);
    const devDataArray = getDataFromLocal('data');
    renderHtml(devDataArray, renderDiv);
   console.log(allDevInfArr);
});

const getDataDev = getDataFromLocal('data');
renderHtml(getDataDev, renderDiv);
