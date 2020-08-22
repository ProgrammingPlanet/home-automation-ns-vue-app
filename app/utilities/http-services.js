const { default: axios } = require("axios")

const network = 'LOCAL';

const baseurls = {
    INTERNET: 'http://pi.hackerworld.tk:1050/',
    LOCAL: 'http://192.168.43.229:8080/'
}

const urls = {
    root: 'api/',
    test: 'api/',
    getspaces: 'api/thing/spaces',
    getspacecount: 'api/thing/spacecount'
}


const baseurl = baseurls[network];

axios.defaults.headers.common['Host'] = 'laravel.loc';
axios.defaults.baseURL = baseurl;


function request(config,callback)
{
    axios(config).then(
        result => {
            callback(result.data);
        },
        error => {
            callback({status:0,msg:error.toJSON().message});
        }
    );
}



/* User Functions */

function getspaces(self)
{
    self.loading = true;
    request({
        url: urls.getspaces,
        method: 'GET'
    },response => {
        if(response.status){
            var results = response.result;
            results.forEach(result => {
                result.icon = baseurl + result.icon;
            });
            self.Spaces = response.result;
        }
        else{
            console.log(response.msg);
        }
        self.loading = false;
    });
}

function getspacecount(self)
{
    self.loading = true;
    request({
        url: urls.getspacecount,
        method: 'GET',
        params: { space_id: self.space.id}
    }, response => {
        if (response.status) {
            var counts = Array.from(Array(response.result.count),(_,i)=>i+1);
            self.spacescount = counts;
            // console.log(counts);
        }
        else {
            console.log(response.msg);
        }
        self.loading = false;
    });
}



export {
    getspaces, getspacecount
}