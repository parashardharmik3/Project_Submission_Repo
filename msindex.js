var state={
    tasklist:[]
}
var taskcontents = document.querySelector(".task_details");
var taskModal = document.querySelector(".task_modal_body");
var htmlTaskContent = ({ id, title, description, type, url }) => `
   <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
        <div class='card shadow-sm task__card'>
            <div class='card-header d-flex justify-content-end task__card__header'>
              <button type="button" class="btn btn-outline-primary mr-2" name="${id}" onclick="editTask.apply(this, arguments)">
                <i class="fas fa-pencil-alt" name=${id}></i>
              </button>
               <button type="button" class="btn btn-outline-danger mr-2" name="${id}" onclick="deleteTask.apply(this, arguments)">
                <i class="fas fa-trash-alt" name=${id}></i>
              </button>
            </div>
            <div class="card-body">
               ${
                 url
                   ? `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' />`
                   : `<img width='100%' src="https://tse3.mm.bing.net/th?id=OIP.gfPiEBkEoh2CVhk8yV8HLwAAAA&pid=Api&P=0&h=180" alt='card image cap' class='card-img-top md-3 rounded-lg' />`
               }
            <h4 class="card-title">${title}</h4>
            <p class="description trim-3-lines text-muted data-gram_editor='false'">${description}</p>
            <div class="tags text-white d-flex flex-wrap">
              <span class="badge bg-primary m-1">${type}</span>
            </div>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask" id=${id}
              onclick='openTask.apply(this, arguments)'
              >Open Task</button>
            </div>
        </div>
    </div>
`;
var htmlmodalcontent = ({id,title,description,url})=>{
    var date = new Date(parseInt(id));
    return `
    <div>${
        url
          ? `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' />`
          : `<img width='100%' src="https://tse3.mm.bing.net/th?id=OIP.gfPiEBkEoh2CVhk8yV8HLwAAAA&pid=Api&P=0&h=180" alt='card image cap' class='card-img-top md-3 rounded-lg' />`
      }</div>
      <b class="text-sm text-muted">Created on ${date.toDateString()}</b>
      <h2 class='my-3'>${title}</h2>
      <p class='lead'>${description}</p>
    `
}

var updateLocalStorage = () => {
    localStorage.setItem(
      "task",
      JSON.stringify({
        tasks: state.taskList,
      })
    );
  };
  
  var loadInitialData = () => {
    var localStorageCopy = JSON.parse(localStorage.task);
  
    if (localStorageCopy) state.taskList = localStorageCopy.tasks;
  
    state.tasklists.map((cardDate) => {
      taskcontent.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
    });
  };