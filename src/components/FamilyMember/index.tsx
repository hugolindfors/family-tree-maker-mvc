import React from "react";

import FamilyMember from "../../models/FamilyMember";

let familyMember: FamilyMember = new FamilyMember(
    "Max Hugo Rossbjörn",
    "Lindfors",
    "2003-06-26",
    undefined,
    undefined,
    ""
);

function FamilyMemberComponent()
{
    return (
        <div className="container row border">
            <img src={familyMember.imageURL} alt="Profile Picture" className="col" />
            <div className="col">
                <div className="row">{familyMember.firstName} {familyMember.lastName}</div>
                <div className="row">
                    {familyMember.birthDate ? `* ${familyMember.birthDate}` : ""}
                    {familyMember.deathDate ? ` - † ${familyMember.deathDate}` : ""}
                </div>
            </div>
        </div>
    );
}

export default FamilyMemberComponent;