import '../assets/scss/_Contact.scss';

function Contact() {
  return (
    <>
      <section id="Contact" className='bg-alt'>
        <div className="container">
          <div className="block-title">
            <h4 className="accent">Contact</h4>
            <h2>Get In Touch</h2>
          </div>
          <p>I'm always looking for any new opportunities, so my inbox is always open.
            <br />Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <div className='ctas'>
            <a className="email-link" href="mailto:henrique.f.dutra@gmail.com?subject=Hi%20Henrique!" target="_blank">Email Me</a>
            or
            <a className="tel-link" href="tel:+351927600909" target="_blank">Call Me</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;