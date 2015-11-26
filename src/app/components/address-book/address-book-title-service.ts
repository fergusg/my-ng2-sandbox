export default class AddressBookTitleService {
    public callCount = 0;

    public getTitle() {
        this.callCount++;
        return "My Address Book";
    }
}