import { useState } from 'react';
import Calendar from '../../../component/calendar';
import NavbarClient from '../../../component/navbarClient';
import Footer from '../../../component/footer';

function interview() {
  return (
    <>
    <NavbarClient />
    <br></br><br></br><br></br><br></br>
      <Calendar />
      <br></br><br></br><br></br><br></br>
      <Footer />
    </>

  );
}

export default interview;