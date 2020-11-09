import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  opts: number[] = [1.6, -2.44, 7.4, -0.81];
  res: number = 25000;
  dataset = [];

  ngOnInit() {
    this.calcolaDataset();
  }

  calcolaDataset() {
    for (let i = 0; i < 1000; i++) {
      const rnd1 = this.getRandomArbitrary(0, 10000);
      const rnd2 = this.getRandomArbitrary(0, 10000);
      const rnd3 = this.getRandomArbitrary(0, 10000);

      const rnd4 =
        this.res -
        (this.opts[0] * rnd1 + this.opts[1] * rnd2 + this.opts[2] * rnd3) /
          this.opts[3];
      this.dataset.push({
        data1: rnd1,
        data2: rnd2,
        data3: rnd3,
        data4: rnd4
      });
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}
