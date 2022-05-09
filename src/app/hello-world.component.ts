import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'main',
  template: '<h1> {{ title }} </h1>',
  styles: [' h1 { color: red}; ']
})

export class HelloWorldComponent implements OnInit, OnDestroy {

  title = 'Mamma mia'

  ngOnInit(): void {
    console.log('Componente appena creato');
  }

  ngOnDestroy(): void {
    console.log('Components distrutto');
  }



}
