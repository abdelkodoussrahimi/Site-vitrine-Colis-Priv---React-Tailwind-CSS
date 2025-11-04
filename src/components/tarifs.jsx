import { useEffect, useState } from "react";
import Data from "./tarifs/ville.json"
import "flowbite/dist/flowbite.css"
import region from "./tarifs/region.json"
import { Label, Pagination,Select } from "flowbite-react";
import Header from "./Header";
import Footr from "./Footer";
import {motion} from 'framer-motion'
import { fadeIn} from '../variants'

export default function Tarifs(){

 const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(Data);
  const [Region, setRegion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // Function to handle region filter
  const handlregion = (id) => {
    if (id === "all") {
      setRegion(data);
    } else {
      const filteredRegions = data.filter((i) => i.region === id);
      setRegion(filteredRegions);
    }
    setCurrentPage(1); // Reset pagination to first page
  };

  // Function to handle search by city (ville)
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredData = data.filter((item) =>
      item.ville.toLowerCase().includes(query.toLowerCase())
    );
    setRegion(filteredData);
    setCurrentPage(1); // Reset pagination to first page
  };

  useEffect(() => {
    setRegion(data);
  }, [data]);

  const filteredRecords = Region.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Region.length / recordsPerPage);

  const onPageChange = (page) => setCurrentPage(page);
    
    return (<>
   <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
  <Header />
  <div className="w-full px-5 sm:px-20">
    <motion.div
      variants={fadeIn('down', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col items-center"
    >
      <div className="font-bold text-2xl">
        <h1>Nos Tarifs</h1>
      </div>
      <div className="pb-4 text-gray-300 w-full max-w-3/4 font-lightn text-bold text-xl text-center">
        Découvrez les tarifs de livraison pour les différentes villes desservies par notre société de livraison dédiée aux paiements à la livraison (COD) et à l&apos;e-commerce. Consultez la liste des villes et les tarifs de livraison correspondants pour planifier votre envoi en toute simplicité.
      </div>
    </motion.div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full sm:w-1/2 px-4 max-w-md"
        >
          <div className="mb-2 text-white">
            <Label htmlFor="countries" />
            Select your country
          </div>
          <Select id="countries" required onChange={(e) => handlregion(e.target.value)}>
            <option value="all">Select All</option>
            {region.map((data, index) => (
              <option key={index} value={data.id}>
                {data.region}
              </option>
            ))}
          </Select>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="relative w-full sm:w-1/2 p-2"
        >
          <div className="absolute px-4 inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for city"
            value={searchQuery}
            onChange={handleSearch}
          />
        </motion.div>
      </div>
      <motion.table
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full text-sm text-left rtl:text-right text-gray-500"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Ville
            </th>
            <th scope="col" className="px-6 py-3">
              Frais livraison
            </th>
            <th scope="col" className="px-6 py-3">
              Frais Retour
            </th>
            <th scope="col" className="px-6 py-3">
              Frais Annule
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((data, i) => (
            <tr key={i} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {data.id}
              </th>
              <td className="px-6 py-4">{data.ville}</td>
              <td className="px-6 py-4">35 DH</td>
              <td className="px-6 py-4">15 DH</td>
              <td className="px-6 py-4">15 DH</td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
    <div className="flex overflow-x-auto sm:justify-center ">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={npage}
        onPageChange={onPageChange}
        previousLabel="Go back"
        nextLabel="Go forward"
        showIcons
      />
    </div>
  </div>
</div>;

   </> )
}

