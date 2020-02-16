import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../courses.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  coursesLoaded: boolean = false;
  firstLoaded: boolean = true;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.notifyLoadCoursesExternally.subscribe(
      courseId => this.loadCourses(courseId)
    )
  }

  userGroupConfirmed(event) {
    // console.log('loading courses for: ' + event.target.value);
    this.loadCourses(event.target.value);
  }

  loadCourses(courseId: string) {
    this.coursesLoaded = !this.coursesService.loadCoursesForGroup(courseId);
    this.firstLoaded = false;
  }
}
