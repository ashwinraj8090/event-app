import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-danger-subtle">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b><i>Celebraze Events</i></b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/AboutUs">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ContactUs">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/faqPage">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
