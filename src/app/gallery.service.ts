import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


export class Gallery {
  constructor(
    public date: string = '',
    public name: string = '',
    public stub: string = '',
    public images: Array<string> = []) { }
}

function mapGalleries(response:Response): Gallery[]{
   return response.json().map(toGallery)
}
function mapGallery(response:Response): Gallery{
   return toGallery(response.json());
}

interface GalleryImage {
    img: string;
    thumb: string;
}

function toGallery(r:any): Gallery{
  let images = r.images || [];
  for (let i in images) {
    images[i] = <GalleryImage>({
      img: 'http://www.richtrove.com/' + r.stub + '/' + images[i].replace('thumbnails','images'),
      thumb: 'http://www.richtrove.com/' + r.stub + '/' + images[i],
    });
  }
  let gallery = <Gallery>({
    date: r.date,
    name: r.name,
    stub: r.stub.replace(/\//g, '--'),
    images: images
  });
  return gallery;
}

@Injectable()
export class GalleryService {
  private baseUrl: string = '';

  constructor(private http : Http){
  }

  getAll(): Observable<Gallery[]>{
    let galleries$ = this.http
      .get(`${this.baseUrl}/api/albums.json`, {headers: this.getHeaders()})
      .map(mapGalleries);
      return galleries$;
  }

  get(id: string): Observable<Gallery> {
    id = id.replace('/', '--')
    let gallery$ = this.http
      .get(`${this.baseUrl}/api/albums/${id}.json`, {headers: this.getHeaders()})
      .map(mapGallery);
      return gallery$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
