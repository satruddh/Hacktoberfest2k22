let V;
let adjListArray=[];
function Graph(v)
{   
    V = v
    for (let i = 0; i < V; i++) {
        adjListArray.push([]);
    }
}

function addEdge(src,dest)
{
        adjListArray[src].push(dest);
        adjListArray[dest].push(src);
}
 
function DFSUtil(v,visited)
{
        visited[v] = true;
        console.log(v + " ")
        for (let x = 0; x < adjListArray[v].length; x++)
        {
            if (!visited[adjListArray[v][x]])
                DFSUtil(adjListArray[v][x], visited);
        }
}
 
function connectedComponents()
{
        let visited = new Array(V);
        for(let i = 0; i < V; i++)
        {
            visited[i] = false;
        }
        for (let v = 0; v < V; ++v)
        {
            if (!visited[v])
            {
                DFSUtil(v, visited);
                document.write("<br>");
            }
        }
}
Graph(5);
 
addEdge(1, 0);
addEdge(2, 1);
addEdge(3, 4);
console.log("Connected Component");
connectedComponents();
