import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Poke} from '../pokeinterface/poke'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

pokeUrl:string;
poke:Poke={};
pokemon:string | number;
url:string="https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) {}



      getpokemon(url:string):any{
 
     return this.http.get(url);
 
      }

   SearchPokemon(SearchTerm:string | number){
     this.SearchTerm= encodeURIComponent(this.pokemon).trim();
     this.pokeUrl=`${this.url}${this.pokemon}`;



         
    this.getpokemon(this.pokeUrl)
        .subscribe(data=>{
     
       this.poke.name= data.name;
       this.poke.weight= data.weight;
       
      //  this.poke.img= data.sprites.front_default;

  
          });


      }

   }
