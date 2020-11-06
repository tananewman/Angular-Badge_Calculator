import { Component } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Component({
  selector: "calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent {
  constructor() {}

  private inputValue$$: Subject<number | string> = new BehaviorSubject<
    number | string
  >("0");
  public inputValue$: Observable<
    number | string
  > = this.inputValue$$.asObservable();
}
