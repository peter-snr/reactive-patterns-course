import { Component, OnInit } from '@angular/core';
import {globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON} from './event-bus';
import {testLessons} from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {


  ngOnInit() {

    console.log('Broadcasted all lessons...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE,
      testLessons.slice(0))
  }

  addLesson(val:string) {
    console.log(val);
  }
}
