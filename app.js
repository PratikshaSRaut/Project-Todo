const addCard = () => {
  const newTaskDetails = {
    id: `${Date.now()}`,
    url: document.getElementById("imgUrl").value,
    title: document.getElementById("taskTitle").value,
    type: document.getElementById("taskType").value,
    desc: document.getElementById("taskDesc").value
  };
  taskContents = document.getElementById("taskContentsRow");
  taskContents.insertAdjacentHTML("beforeend", generateTaskCard(newTaskDetails));
};

const generateTaskCard = ({ id, url, title, type, desc }) => {
  return `<div class="col-md-6 col-lg-4 mt3" id=${id} key=${id}>
      <div class="card">
          <div class="card-header">
              <div class="card-header d-flex  justify-content-end">
                  <button type="button" class="btn btn-outline-info ">
                      <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button class="btn btn-outline-danger">
                      <i class="fas fa-trash"></i>
                  </button>
              </div>
          </div>
          <img src=${url}
              class="card-img-top" alt="Image" >
          <div class="card-body">
              <h5 class="card-title">
                  ${title}
              </h5>
              <p class="card-text">
                  ${desc}
              </p>
              <span class="badge">
                 ${type}
              </span>
          </div>
          <div class="card-footer">
              <button class="btn btn-outline-primary float-end">
                  Open Task
              </button>
          </div>
      </div>
  </div>`;
};
