import React from 'react'
import "../../Assets/Styles/Footer.css"

function Footer() {
  return (
    <div>

            <footer class="bg-dark text-light pt-4 pb-3">
        <div class="container">
            <div class="row">
            <hr class="bg-secondary hr-Bg-Editting pb-3" />


            
            <div class="col-md-4 mb-3">
                <h5>Tech Blog</h5>
                <p class="small">A place to explore tech updates, articles, and tips.</p>
            </div>

            
            <div class="col-md-4 mb-3">
                <h6>Navigation</h6>
                <ul class="list-unstyled">
                <li><a href="/" class="text-light text-decoration-none">Home</a></li>
                <li><a href="/latest" class="text-light text-decoration-none">Latest</a></li>
                <li><a href="/categories" class="text-light text-decoration-none">Categories</a></li>
                <li><a href="/about" class="text-light text-decoration-none">About</a></li>
                </ul>
            </div>

            
            <div class="col-md-4 mb-3">
                <h6>Contact</h6>
                <p class="small mb-1">Email: <a href="mailto:techblog@example.com" class="text-light text-decoration-none">techblog@example.com</a>
                </p>
                <p class="small mb-0">Phone: +123 456 7890</p>
            </div>

            </div>
            <hr class="bg-secondary" />
            <div class="text-center small">
            &copy; 2025 Tech Blog. All rights reserved.
            </div>
        </div>
        </footer>

    </div>
  )
}

export default Footer
