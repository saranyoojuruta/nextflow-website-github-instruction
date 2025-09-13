import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{background: 'linear-gradient(135deg, #4e342e 0%, #ffb74d 100%)'}}>
            <div className="card shadow-lg border-0" style={{maxWidth: '500px', width: '100%', background: 'rgba(44, 27, 18, 0.97)'}}>
                <div className="card-body">
                    <h2 className="mb-4 text-center fw-bold" style={{color: '#ffb74d', textShadow: '0 2px 8px #3e2723'}}>ติดต่อเรา</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{color: '#ffe0b2'}}>ชื่อ</label>
                            <input type="text" className="form-control rounded-3" id="name" placeholder="กรอกชื่อของคุณ" style={{background: '#3e2723', color: '#fff', border: '1px solid #ffb74d'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{color: '#ffe0b2'}}>อีเมล</label>
                            <input type="email" className="form-control rounded-3" id="email" placeholder="กรอกอีเมลของคุณ" style={{background: '#3e2723', color: '#fff', border: '1px solid #ffb74d'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" style={{color: '#ffe0b2'}}>ข้อความ</label>
                            <textarea className="form-control rounded-3" id="message" rows="4" placeholder="กรอกข้อความของคุณ" style={{background: '#3e2723', color: '#fff', border: '1px solid #ffb74d'}}></textarea>
                        </div>
                        <button type="submit" className="btn w-100 fw-bold" style={{background: 'linear-gradient(90deg, #ffb74d 0%, #a1887f 100%)', color: '#3e2723', borderRadius: '30px', boxShadow: '0 2px 8px rgba(255,183,77,0.2)'}}>ส่งข้อความ</button>
                    </form>
                </div>
            </div>
            <footer className="mt-5 text-center w-100">
                <hr className="my-4" style={{borderColor: '#a1887f'}} />
                <span style={{fontSize: '1rem', color: '#ffe0b2'}}>สงวนลิขสิทธิ์ 2024 by YourCompany</span>
            </footer>
        </div>
    );
}

export default Contact;
