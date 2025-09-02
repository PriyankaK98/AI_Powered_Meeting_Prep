import { LightningElement, api, track } from 'lwc';
import getMeetingData from '@salesforce/apex/MeetingPrepService.getMeetingPrep';

export default class MeetingPrep extends LightningElement {
    @api recordId; // Account Id
    @track meetingPrep;
    @track error;

    handleGenerate() {
        this.meetingPrep = null;
        this.error = null;

        getMeetingData({ accountId: this.recordId })
            .then(result => {
                this.meetingPrep = result;
            })
            .catch(error => {
                this.error = error.body ? error.body.message : error.message;
            });
    }
}