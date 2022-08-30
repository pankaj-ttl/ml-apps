import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-cnclive',
  templateUrl: './cnclive.component.html',
  styleUrls: ['./cnclive.component.scss']
})
export class CncliveComponent implements OnInit {
  
  baseurl = "http://172.28.77.122:2000/";
  url1 = this.baseurl;
  model_id=1;

   
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  files: File[] = [];
  constructor(private http: HttpClient){}


onSelect(event: { addedFiles: any; }) {
  console.log(event);
  this.files.push(...event.addedFiles);
  console.log('files',...event.addedFiles)
}


onRemove(event: File) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

onUpload(){
  const filedata=new FormData();
  filedata.append('file',this.files[0]);
  filedata.append('model','2');
  let response: any[] = []
  console.log(this.model_id)
  this.http.post(`${ this.baseurl}upload-csv`,filedata)
  .subscribe(res=>{
    console.log(res);
    response.push(res);
    console.log(response);
    let bar_url = ""
    let hist_url = ""
     response.forEach(e => { bar_url = e.plot_urls[0]
                           hist_url = e.plot_urls[1]})
    
                           console.log(bar_url)
    console.log(hist_url)
    this.url1 = this.baseurl + bar_url;
    console.log('url1',this.url1);
    // let url2 = this.baseurl + hist_url;
    
    console.log(this.url1);
  })
  
}

}