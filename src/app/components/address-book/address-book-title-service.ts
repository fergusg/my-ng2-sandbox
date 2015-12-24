export default class AddressBookTitleService {
    public callCount: number = 0;

    public getTitle(): string {
        this.callCount++;
        return "My Address Book";
    }
}
