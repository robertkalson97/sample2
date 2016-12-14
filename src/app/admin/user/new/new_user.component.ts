import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AdminService } from '../../../_services/index';

@Component({
    templateUrl: 'new_user.component.html',
    styleUrls: ['new_user.component.scss']
})

export class NewUserComponent implements OnInit{
    private model: any = {};
    private loading = false;
    private user_emails: String[] = [];
    
    constructor(
        private router: Router,
        private adminService: AdminService,
        private alertService: AlertService) { }

    ngOnInit() {
      this.getEmails();
    }
    
    register() {
        if (this.user_emails.indexOf(this.model.email) === -1) {
            this.loading = true;
            this.model.company = JSON.parse(localStorage.getItem('currentUser'));
            this.model.available_tokens = 0;
            this.adminService.addUser(this.model)
                .subscribe(
                    data => {
                        this.alertService.success('Successfully added', true);
                        this.adminService.sendInvitationToUser(data)
                        .subscribe(
                            data => {
                                this.router.navigate(['/admin/manage_user']);
                            },
                            error => {
    
                            }
                        );
                    },
                    error => {
                        console.log("service error");
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }
    }
    
    getEmails() {
      this.adminService.getUsers().subscribe(
        data => {
            for (let index in data) {
                this.user_emails.push(data[index].email);
            }
            console.log(this.user_emails);
        },
        error => console.log(error),
        () => {this.loading = false}
      );
    }
}
