const fs = import('fs');
const path = import('path')

StartGen();

async function StartGen(){
    await genList();
    await CreateList('games.json');
}

// gen list
function genList(){
    const jsonsInDir = fs.readdirSync('games').filter(file => path.extname(file) === '.json');
    jsonsInDir.forEach(file => {
      const fileData = fs.readFileSync(path.join('games', file));
      const json = JSON.parse(fileData.toString());
    });
}

function listItem (linkItem){
        let li = document.createElement('li');
        li.textContent = linkItem;
        return li;
}

function CreateList(list){
    const listContainer = document.getElementById('Gamelist');
    list.forEach(link => {
        let newListItem = listItem(link);   
        listContainer.appendChild(newListItem)
    });
}

