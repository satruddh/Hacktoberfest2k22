document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    tambahkanBuku();
  });
  if(isStorageExist()){
    loadDataFromStorage()
  }
});
const listBuku = [];
function tambahkanBuku() {
  const judulBuku = document.getElementById("judul").value;
  const penulisBuku = document.getElementById("penulis").value;
  const tahunBuku = document.getElementById("tahun").value;
  let selesai = document.getElementById("selesai").checked;
  const generatedId = generateId();

  const bookObject = generateBook(
    judulBuku,
    penulisBuku,
    tahunBuku,
    selesai,
    generatedId
  );
  listBuku.push(bookObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData()
}
function generateId() {
  return +new Date();
}
function generateBook(judul, penulis, tahun, selesai, id) {
  return {
    id,
    judul,
    penulis,
    tahun,
    selesai,
  };
}
const RENDER_EVENT = "render-buku";
document.addEventListener(RENDER_EVENT, function () {
  const bukuYangBelumSelesaiDibaca = document.getElementById(
    "container-buku-belum-selesai"
  );
  bukuYangBelumSelesaiDibaca.innerHTML = "";
  const bukuYangSelesaiDibaca = document.getElementById(
    "container-buku-selesai"
  );
  bukuYangSelesaiDibaca.innerHTML = "";
  for (const itemBuku of listBuku) {
    let bookElement = makeBook(itemBuku);
    if (!itemBuku.selesai) {
      bukuYangBelumSelesaiDibaca.append(bookElement);
    } else {
      bukuYangSelesaiDibaca.append(bookElement);
    }
  }
});
function makeBook(bookObject) {
  const bookTitle = document.createElement("h3");
  bookTitle.innerText = bookObject.judul;
  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = bookObject.penulis;
  const bookYear = document.createElement("p");
  bookYear.innerText = bookObject.tahun;
  const container = document.createElement("div");

  container.append(bookTitle, bookAuthor, bookYear);
  if (!bookObject.selesai) {
    const bookDoneBtn = document.createElement("button");
    bookDoneBtn.innerText = "tandai telah selesai";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("button");
    deleteBtn.innerText = "hapus buku";
    bookDoneBtn.classList.add("button");
    bookDoneBtn.addEventListener("click", function () {
      addBookToCompleted(bookObject.id);
    });
    deleteBtn.addEventListener("click", function () {
      removeBook(bookObject.id);
    });
    container.append(bookDoneBtn, deleteBtn);
  } else {
    const bookNotDoneBtn = document.createElement("button");
    bookNotDoneBtn.innerText = "belum selesai dibaca";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("button");
    deleteBtn.innerText = "hapus buku";
    bookNotDoneBtn.classList.add("button");
    deleteBtn.addEventListener("click", function () {
      removeBook(bookObject.id);
    });
    bookNotDoneBtn.addEventListener('click', function(){
      UndoBookFromCompleted(bookObject.id)
    })
    container.append(bookNotDoneBtn, deleteBtn);
  }
  return container;
}
function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);
  if (bookTarget == null) return;
  bookTarget.selesai = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData()
}
function findBook(bookId) {
  for (const itemBuku of listBuku) {
    if (itemBuku.id === bookId) {
      return itemBuku;
    }
  }
}
function findBookIndex(bookId) {
  for (const index in listBuku) {
    if (listBuku[index].id === bookId) {
      return index;
    }
    return -1;
  }
}
function removeBook(bookId) {
  const bookTarget = findBookIndex(bookId);
  if (bookTarget === -1) return;
  listBuku.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData()
}
function UndoBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);
  if (bookTarget == null) return;
  bookTarget.selesai = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData()
}

const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOKSHELF_APPS';
function isStorageExist(){
  if(typeof(Storage) === undefined){
    alert("browser kamu tidak mendukung local storage");
    return false
  } 
  return true
}
document.addEventListener(SAVED_EVENT, function(){
  console.log(localStorage.getItem(STORAGE_KEY))
})
function saveData(){
  if(isStorageExist()){
    const parsed = JSON.stringify(listBuku)
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT))
  }
}
function loadDataFromStorage(){
  const serializedData = localStorage.getItem(STORAGE_KEY)
  let data = JSON.parse(serializedData)
  if (data !== null){
    for (const book of data){
      listBuku.push(book)
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT))
}