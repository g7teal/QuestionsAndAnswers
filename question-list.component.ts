import { Component } from "@angular/core";

@Component({
    selector: 'qa-questions',
    templateUrl: './question-list.component.html'
})
export class QuestionListComponent {
    title: string = 'Question List';
    products: any[] = [
        {
            "questionId": 1,
            "productQuestion": "Leaf Rake",
            "productAnswer": "GDN-0011",
            "date": "March 19, 2021",
            "level": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          }
    ];
}