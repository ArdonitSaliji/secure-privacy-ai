import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-notice.component.html',
  styleUrl: './privacy-notice.component.css'
})
export class PrivacyNoticeComponent {
  visible = false;

  constructor() { }

  ngOnInit(): void {
    const noticeSeen = localStorage.getItem('privacyNoticeSeen');
    if (!noticeSeen) {
      this.showNotice();
    }
  }

  showNotice() {
    this.visible = true;
  }

  hideNotice() {
    this.visible = false;
    localStorage.setItem('privacyNoticeSeen', 'true');
  }

}
