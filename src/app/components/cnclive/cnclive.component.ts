import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-cnclive',
  templateUrl: './cnclive.component.html',
  styleUrls: ['./cnclive.component.scss']
})
export class CncliveComponent implements OnInit {
   
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  filedata.append('id',this.files[0]);
  this.http.post('URL',filedata)
  .subscribe(res=>{
    console.log(res);
  })
}

}