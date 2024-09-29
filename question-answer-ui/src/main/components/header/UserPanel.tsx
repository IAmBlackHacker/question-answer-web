import profile_image from "../../statics/images/profile.png";

export function UserPanel({name} : {name: string}) {
    return <div className={"d-flex"}>
        <div className={"profile-image"}>
            <img src={profile_image} alt={"profile"} className={"rounded-circle img-object-fit-contain"}/>
        </div>
        <div className={"p-2 fw-bold text-primary d-flex align-items-center"}>
            {name}
        </div>
    </div>
}
