import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{background: 'linear-gradient(135deg, #3e2723 0%, #ffb74d 100%)'}}>
            <div className="card shadow-lg border-0" style={{maxWidth: '500px', width: '100%', background: 'rgba(44, 27, 18, 0.95)'}}>
                <div className="card-body text-center">
                    <h1 className="display-5 fw-bold mb-3" style={{color: '#ffb74d', letterSpacing: '2px', textShadow: '0 2px 8px #3e2723'}}>โทรศัพท์สีชาเย็น</h1>
                    <p className="lead mb-4" style={{color: '#ffe0b2'}}>ยินดีต้อนรับสู่เว็บไซต์เปิดตัวสินค้าใหม่ โทรศัพท์สีชาเย็น!</p>
                    <div className="d-flex justify-content-center mb-4">
                        <img src="https://www.apple.com/th/iphone-17-pro/images/overview/cameras/pro-video/prores__da2ay2urzh4y_large_2x.jpg" alt="โทรศัพท์มสีชาเย็น" className="img-fluid rounded-4 shadow" style={{maxWidth: '350px', border: '6px solid #ffb74d', background: '#4e342e'}} />
                    </div>
                    <a href="/contact" className="btn px-4 py-2 fw-bold" style={{background: 'linear-gradient(90deg, #ffb74d 0%, #a1887f 100%)', color: '#3e2723', border: 'none', borderRadius: '30px', boxShadow: '0 2px 8px rgba(255,183,77,0.2)'}}>ติดต่อเรา</a>
                </div>
            </div>
            <footer className="mt-5 text-center w-100">
                <hr className="my-4" style={{borderColor: '#a1887f'}} />
                <span style={{fontSize: '1rem', color: '#ffe0b2'}}>สงวนลิขสิทธิ์ 2024 by YourCompany</span>
            </footer>
        </div>
    );
}

export default Home;
