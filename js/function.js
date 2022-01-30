/* eslint-disable array-callback-return */
/// /// Set Data Into local storage

const setDataIntoLocal = (dataArr) => {
    localStorage.removeItem('data');
    const data = dataArr;
    const dataStr = JSON.stringify(data);
    localStorage.setItem('data', dataStr);
};

const getDataFromLocal = (key) => {
    const keyValue = key;
    const data = localStorage.getItem(keyValue);
    const dataArr = JSON.parse(data);
    return dataArr;
};

const renderSkills = (arr) => {
    const arrSkill = arr;
    let skillData = '';
    arrSkill.map((skl) => {
        skillData += `<li class="list-group-item">${skl}</li>`;
    });
    return skillData;
};

const renderHtml = (dataArr, renderDiv) => {
    const renderBox = renderDiv;
    const devDataArr = dataArr;
    let data = '';
    if (!devDataArr) return null;

    devDataArr?.map((obj) => {
        data += `    <div class="col-md-6">
             <div class="card my-2">
              <img
                src="${obj.img}"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h2 class="card-title">${obj.name}</h2>
                <h6 class="card-subtitle text-muted">${obj.devGender}</h6>
                <hr />
                <h4 class="card-title">Skills:</h4>
                <hr />
                <ul class="list-group list-group-flush">
                ${renderSkills(obj.skillArr)}
                </ul>
                <hr />
                <div class="social-link text-center my-4">

                  ${obj.fblLnk ? '<i class="fab fa-facebook"></i>' : ''}
                  ${obj.whatsAppLInk ? '<i class="fab fa-whatsapp"></i>' : ''}
                  ${obj.youTubeLink ? '<i class="fab fa-youtube"></i>' : ''}
                  ${obj.linkedInLink ? '<i class="fab fa-linkedin"></i>' : ''}
                  ${obj.twitterLInk ? '<i class="fab fa-twitter"></i>' : ''}
                </div>
                <div class="mt-3 text-center">
                  <a href="#" class="btn btn-primary">Add to Cart</a>
                  <a href="#" class="btn btn-primary">Delet Product</a>
                </div>
              </div>
            </div>
          </div>`;
    });

    renderBox.innerHTML = data;
};
