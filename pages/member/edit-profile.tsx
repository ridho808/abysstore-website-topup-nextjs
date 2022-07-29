import SideBar from "../../component/organism/Sidebar";

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
        <SideBar ActiveMenu="Settings"/>
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="position-relative me-20">
                                <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" />
                                <div
                                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path
                                            d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M14 11V17" stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M10 11V17" stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                   <img src="/icon/upload.svg" alt="..." width={90} height={90}/>
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                        <div className="pt-30">
                            <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Full
                                Name</label>
                            <input type="text" className="form-control rounded-pill text-lg" id="name" name="name"
                                aria-describedby="name" placeholder="Enter your name"/>
                        </div>
                        <div className="pt-30">
                            <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email
                                Address</label>
                            <input type="email" className="form-control rounded-pill text-lg" id="email" name="email"
                                aria-describedby="email" placeholder="Enter your email address"/>
                        </div>
                        <div className="pt-30">
                            <label htmlFor="phone" className="form-label text-lg fw-medium color-palette-1 mb-10">Phone</label>
                            <input type="tel" className="form-control rounded-pill text-lg" id="phone" name="phone"
                                aria-describedby="phone" placeholder="Enter your phone number"/>
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button">Save My Profile</button>
                        </div>
                    </form>

                </div>


            </div>
        </main>
    </section>
  )
}
