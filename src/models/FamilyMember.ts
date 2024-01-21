class FamilyMember
{
    id: string;
    firstName: string;
    lastName: string;
    birthDate?: string;
    deathDate?: string;
    imageURL?: string;
    notes?: string;
    constructor(firstName: string, lastName: string, birthDate?: string, deathDate?: string, imageURL?: string, notes?: string)
    {
        this.id = Date.now().toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.imageURL = imageURL;
        this.notes = notes;
    }
}

export default FamilyMember;