import { Footer } from "flowbite-react";

  
  export default function Footr(){

    return(    <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src={require("../assets/logo.png")}
              alt="Flowbite Logo"
              name="Colis Privé"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <button className='btn btn-lg'> DEVENIR CLIENT </button>

          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </Footer>
    );
  
}