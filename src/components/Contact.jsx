import React, { useState } from "react";

import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [LocalisationAddress, setLocalisationAddress] = useState("");

  const [phoneNum, setPhoneNum] = useState("");
  const [AddressLocalisation, setAddressLocalisation] = useState(""); // État pour stocker le numéro de téléphone

  const handleSelection = (selectedItem) => {
    setSelectedItem(selectedItem);
    setIsOpen(false); // Fermer le sous-menu après la sélection

    // Trouver le numéro de téléphone associé à l'élément sélectionné
    const foundItem = countryList.find(
      (item) => item.name === selectedItem.name
    );
    if (foundItem) {
      setPhoneNum(foundItem.contact);
    } else {
      setPhoneNum("Numéro non trouvé");
    }
  };

  const handleSelectionAddresse = (selectedAddress) => {
    setSelectedAddress(selectedAddress);
    setIsOpenAddress(false); // Fermer le sous-menu après la sélection

    // Trouver le numéro de téléphone associé à l'élément sélectionné
    const foundPays = ListAddress.find(
      (item) => item.name === selectedAddress.name
    );
    if (foundPays) {
      setAddressLocalisation(foundPays.localisation);
    } else {
      setAddressLocalisation("Numéro non trouvé");
    }
  };

  const countryList = [
    { name: "France", contact: "+33 123456789", flag: "france-flag.png" },
    { name: "USA", contact: "+1 987654321", flag: "france-flag.png" },
    {
      name: "Cameroun",
      contact: "+237 678 23 38 15 /693 22 02 18",
      flag: "cameroun-flag.png",
    },
    { name: "Tchad", contact: "+237 693 22 02", flag: "tchad-flag.png" },
    // Ajoutez d'autres pays avec leurs contacts ici
  ];

  const ListAddress = [
    { name: "France", localisation: "Paris", flag: "france-flag.png" },
    { name: "USA", localisation: "New York", flag: "usa.jpg" },
    {
      name: "Cameroun",
      localisation: "Douala, Kotto",
      flag: "cameroun-flag.png",
    },
    { name: "Tchad", localisation: "Djamena", flag: "tchad-flag.png" },
    // Ajoutez d'autres pays avec leurs contacts et drapeaux correspondants ici
  ];

  const handleCountryChange = (event) => {
    const selected = event.target.value;
    setSelectedCountry(selected);

    const selectedContact = countryList.find(
      (country) => country.name === selected
    );
    if (selectedContact) {
      setContactNumber(selectedContact.contact);
    } else {
      setContactNumber("Contact non trouvé");
    }
  };

  const handleAddressChange = (event) => {
    const selected = event.target.value;
    setSelectedAddress(selected);

    const selectedAddress = ListAddress.find(
      (address) => address.name === selected
    );
    if (selectedAddress) {
      setLocalisationAddress(selectedAddress.contact);
    } else {
      setLocalisationAddress("Adresse non trouvé");
    }
  };

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nomError, setNomError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom.trim() === "") {
      setNomError("Veuillez renseigner votre nom.");
    } else {
      setNomError("");
    }

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Veuillez renseigner une adresse e-mail valide.");
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Veuillez écrire votre message.");
    } else {
      setMessageError("");
    }

    // Si tous les champs sont valides, vous pouvez effectuer d'autres actions, comme envoyer les données au serveur
    if (
      nom.trim() !== "" &&
      email.trim() !== "" &&
      email.includes("@") &&
      message.trim() !== ""
    ) {
      // Vos actions à effectuer après la validation du formulaire
      // Par exemple, vous pouvez envoyer les données au serveur ou rediriger l'utilisateur
      window.location.href = "/login";
    }
  };
  const Contact1 = [
    {
      id: 1,
      title: "Appelez-nous:",
      descrition: " 678 23 38 15 / 693 22 02 18",
      image: "src/assets/icons/telephone1.png",
      Alt: "image",
    },
  ];

  const Contact = [
    {
      id: 3,
      title: "Email:",
      descrition: "efficaceinnovation@gmail.com",
      image: "src/assets/icons/enveloppe.jpg ",
      Alt: "image mail",
      pageUrl: "mailto:efficaceinnovation@gmail.com?subject=Objet",
    },
    {
      id: 4,
      title: "Heures d'ouverture:",
      descrition: " 7 jours /7 - 24h /24",
      image: "src/assets/icons/alarm.jpg",
      Alt: "image",
      pageUrl: "#!",
    },
  ];

  return (
    // <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver my-8 py-16'>
    <>
      <div className="bg-Cprimary h-16 text-white font-poppins font-semibold text-4xl text-center py-4 mt-20">
        {" "}
        Contact
      </div>
      <div className="px-4 lg:px-7 max-w-screen-2x1 mx-auto bg-neutralSilver w-screen py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <div className="md:w-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5919426852915!2d9.750972076416037!3d4.103125395870667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e6e35ea0b63%3A0x5fda80bccb6d34a5!2sAngelina%20H%C3%B4tel!5e0!3m2!1sfr!2scm!4v1698831986158!5m2!1sfr!2scm"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="lg:px-0 px-20 mr-7 ml-4 lg:-mr-4  w-[500px]  "
              ></iframe>
            </div>
          </div>

          <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  w-screen py-5">
            <h2 className="text-xl font-semibold  text-Csecondary1 -ml-4  mr-4 ">
              Engagez la conversation <br />{" "}
              <span className="text-Cprimary text-2xl lg:text-center">
                Permettez-nous de vous guider vers de nouveaux sommets dans le
                domaine de l'immobilier.
              </span>
            </h2>

            <div className=" grid lg:grid-cols-2 gap-14 mb-2  items-center lg:-mr-16 lg:-ml-7 mt-7 mr-7 -ml-5  ">
              <div className="flex items-center gap-2 w-full md:w-2/3 lg:w-[310px] h-full  shadow-2xl mb-1 border border-Csecondary1 bg-Cprimary px-2 py-1 shadow-lgrounded-md mx-auto rounded-md hover:scale-95 transition-all duration-300 lg:ml-12  2xl:ml-14">
                <div className="relative  items-center  rounded-md ">
                  <img
                    src="src/assets/icons/telephone1.png"
                    alt=""
                    className="h-16 w-16 mb-2 rounded-full border-2 border-Csecondary1 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-white bg-white"
                  />
                  <div className="relative flex flex-col items-center  rounded-md ml-1">
                    <button
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="bg-Csecondary1 p-1 flex  items-center justify-between font-bold text-lg rounded-lg tracking-wider border-1 border-transparent active:border-Cprimary duration-300 active:text-Cprimary w-44 -mt-16 ml-16  text-white  "
                    >
                      {selectedItem ? (
                        <div>
                          <img
                            src={`src/assets/flags/${selectedItem.flag}`}
                            alt={selectedItem.name}
                            className="inline-block w-4 h-4 ml-2 -mt-1 mr-1  "
                          />
                          <span className="text-white text-lg font-lato">
                            {selectedItem.name}
                          </span>
                        </div>
                      ) : (
                        "Appelez-nous"
                      )}
                      {!isOpen ? (
                        <AiOutlineCaretDown className="h-8" />
                      ) : (
                        <AiOutlineCaretUp className="h-8" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="bg-Csecondary1 absolute -top-6 flex-col items-start rounded-lg p-1 w-44 ml-16 leading-5 text-white overflow-y-auto max-h-52">
                        {countryList.map((item, i) => (
                          <div
                            className="flex w-full p-4 hover:bg-Cprimary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4"
                            key={i}
                            onClick={() => handleSelection(item)}
                          >
                            <h3>
                              <img
                                src={`src/assets/flags/${item.flag}`}
                                alt={item.name}
                                className="inline-block w-4 h-4 ml-2 "
                              />
                            </h3>
                            <h3 className="font-bold mr-4 px-2 ">
                              {item.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    )}
                    {phoneNum !== "" ? (
                      <p className="mt-4 text-white text-base font-lato text-center">
                        Numéro de contact pour {selectedItem.name} : {phoneNum}
                      </p>
                    ) : (
                      <p className="mt-4 text-white text-base font-lato text-center">
                        Numéro non trouvé pour le pays sélectionné.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* addresse */}

              <div className="flex items-center gap-2 w-full md:w-2/3 lg:w-[310px] h-full  shadow-2xl mb-1 border border-Csecondary1 bg-Cprimary px-2 py-1 shadow-lgrounded-md mx-auto rounded-md hover:scale-95 transition-all duration-300 lg:ml-5 xl:ml-7">
                <div className="relative items-center rounded-md ">
                  <img
                    src="src/assets/icons/localisation.png"
                    alt=""
                    className="h-16 w-16 mb-2 rounded-full border-2 border-Csecondary1 uppercase leading-normal  transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-white bg-white"
                  />
                  <div className="relative flex flex-col items-center  rounded-md ml-1">
                    <button
                      onClick={() => setIsOpenAddress((prev) => !prev)}
                      className="bg-Csecondary1 p-1 flex  items-center justify-between font-bold text-lg rounded-lg tracking-wider border-1 border-transparent active:border-Cprimary duration-300 active:text-Cprimary w-44 -mt-16 ml-16 text-white  "
                    >
                      {selectedAddress ? (
                        <div>
                          <img
                            src={`src/assets/flags/${selectedAddress.flag}`}
                            alt={selectedAddress.name}
                            className="inline-block w-4 h-4 ml-2 -mt-1 mr-1"
                          />
                          <span className="text-white text-lg font-lato">
                            {selectedAddress.name}
                          </span>
                        </div>
                      ) : (
                        "Address siège:"
                      )}
                      {!isOpenAddress ? (
                        <AiOutlineCaretDown className="h-8" />
                      ) : (
                        <AiOutlineCaretUp className="h-8" />
                      )}
                    </button>
                    {isOpenAddress && (
                      <div className="bg-Csecondary1 absolute -top-6 flex-col items-start rounded-lg p-1 w-44 ml-16 leading-5 text-white overflow-y-auto max-h-52">
                        {ListAddress.map((address, i) => (
                          <div
                            className="flex w-full p-4 hover:bg-Cprimary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4"
                            key={i}
                            onClick={() => handleSelectionAddresse(address)}
                          >
                            <h3>
                              <img
                                src={`src/assets/flags/${address.flag}`}
                                alt={address.name}
                                className="inline-block w-4 h-4 ml-2 "
                              />
                            </h3>
                            <h3 className="font-bold mr-4 px-2 ">
                              {address.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    )}
                    {AddressLocalisation ? (
                      <p className="mt-4 text-white text-base font-lato text-center">
                        Adresse pour {selectedAddress.name} :{" "}
                        {AddressLocalisation}
                      </p>
                    ) : (
                      <p className="mt-4 text-white text-base font-lato text-center">
                        Adresse non trouvé pour le pays sélectionné.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 
                        <div className='flex items-center gap-2 w-full md:w-2/3 lg:w-[310px] h-full  shadow-2xl mb-1 border border-Csecondary1 bg-Cprimary px-2 py-1 shadow-lgrounded-md mx-auto rounded-md hover:scale-95 transition-all duration-300 '>
                            <img src="src/assets/icons/localisation.png" className='h-16 w-16 -mt-2 rounded-full border-2 border-Csecondary1 uppercase leading-normal text-whit transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-white bg-white' />
                            <div className='text-white'>
                              <h4 className='text-xl text-Csecondary1 font-semibold'>
                                <select id="countries" value={selectedAddress} onChange={handleAddressChange} className="p-1 rounded-md bg-Csecondary1 text-white">
                                  <option value="" disabled hidden>Adresse siège:</option>
                                  {ListAddress.map((address, index) => (
                                    <option key={index} value={address.name}>
                                      <img src="" alt="" />
                                      <img src={`src/assets/flags/${address.flag}`}alt={address.name} className="inline-block w-4 h-4 ml-2" /> 
                                      {address.name}
                                    </option>
                                  ))}
                                </select>
                              </h4>

                              {LocalisationAddress && (
                                <div>
                                  <h2>Adresse pour {selectedAddress} :</h2>
                                  <p>{LocalisationAddress}</p>
                                </div>
                              )}

                            </div>
                          </div> */}

              {/* <div  className='flex items-center gap-2  w-full md:w-2/3 lg:w-[340px] h-full  shadow-2xl mb-1 border border-Csecondary1 bg-Cprimary px-2 py-1 shadow-lgrounded-md mx-auto rounded-md hover:scale-95 transition-all duration-300 lg:ml-4 '>
                                    
                                    <img src="src/assets/icons/localisation.png"  className='h-16 w-16 -mt-2  rounded-full border-2 border-Csecondary1 uppercase leading-normal text-whit transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-white bg-white' />
                                <div className='text-white'>
                         
                                    <h4 className='text-xl text-Csecondary1 font-semibold '> <select id="countries" value={selectedAddress} onChange={handleAddressChange} className="p-1 rounded-md bg-Csecondary1 text-white">
                                        <option  value="" >Addresse siege</option>
                                        {ListAddress.map((address, index) => (
                                        <option key={index} value={address.name}>
                                            {address.name}
                                        </option>
                                        ))}
                                    </select></h4>

                                    {LocalisationAddress && (
                                        <div>
                                          <h2> Addresse pour {selectedAddress} est a :</h2>
                                          <p> {LocalisationAddress}</p>
                                        </div>
                                      )}
                                    
                                </div>
                                     
                               
                                
                            </div> */}
            </div>

            <div className=" grid lg:grid-cols-2 gap-7 mb-2  items-center lg:-mr-12 lg:-ml-7 mt-7 mr-7 -ml-5 ">
              {Contact.map((Contact) => (
                <div
                  key={Contact.id}
                  className="flex items-center gap-2 w-full md:w-2/3 lg:w-[310px] h-full  shadow-2xl mb-1 border border-Csecondary1 bg-Cprimary px-2 py-1 shadow-lgrounded-md mx-auto rounded-md hover:scale-95 transition-all duration-300 2xl:ml-14"
                >
                  <img
                    src={Contact.image}
                    Alt={Contact.Alt}
                    className="h-16 w-16  rounded-full border-2 border-Csecondary1 uppercase leading-normal text-whit transition duration-150 ease-in-out focus:outline-none focus:ring-0 text-white bg-white"
                  />
                  <div className="text-white">
                    <h4 className="text-xl  font-semibold">{Contact.title}</h4>
                    <a href={Contact.pageUrl}>
                      <p>{Contact.descrition}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-8/12 lg:ml-[430px] lg:w-5/12 px-7 mt-4 border-2 border-Cprimary ml-2 mr-2">
        <div className="text-center md:-end-1/2 mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-Csecondary1 pt-5">
            Envoyez-nous un message
          </h2>
        </div>
        <form className="lg:px-14 py-7 pt-2" onSubmit={handleSubmit}>
          {/* Password input */}
          <div className="relative mb-4 text-Cprimary">
            <label htmlFor="Nom">Nom</label>
            <div className="relative w-60">
              <input
                type=""
                name="nom"
                id="nom"
                autoComplete="on"
                onChange={(e) => setNom(e.target.value)}
                className="peer block min-h-[auto] w-80 lg:w-96 rounded border-2  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:text-black data-[te-input-state-active]:placeholder:text-black motion-reduce:transition-none dark:text-black focus:ring-Cprimary focus:border-Cprimary focus:border border-Csecondary1 text-black"
                placeholder="Votre nom"
              />
              {nomError && <p className="text-red-500">{nomError}</p>}
            </div>
          </div>
          {/* Email input */}
          <div
            className="relative mb-6 text-Cprimary"
            data-te-input-wrapper-init
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              className={`peer block min-h-[auto] w-80 lg:w-96  rounded border-2 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:text-black data-[te-input-state-active]:placeholder:text-black motion-reduce:transition-none dark:text-black focus:ring-Cprimary focus:border-Cprimary focus:border border-Csecondary1 text-black `}
              placeholder="contact@efficace.com"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>

          {/* Message input */}

          <div
            className="relative mb-4 text-Cprimary"
            data-te-input-wrapper-init
          >
            <label for="Textarea">Message</label>
            <textarea
              className="peer block min-h-[auto] w-80 lg:w-96  rounded border-2  px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:text-black data-[te-input-state-active]:placeholder:text-black motion-reduce:transition-none dark:text-black focus:ring-Cprimary focus:border-Cprimary focus:border border-Csecondary1 text-black"
              id="Textarea"
              rows="3"
              placeholder="Votre message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <p className="text-red-500">{messageError}</p>}
          </div>

          {/* Submit button */}

          <button
            type="submit"
            className="inline-block  rounded bg-Cprimary  pb-3 pt-3 w-80 lg:w-96  text-base font-serif uppercase leading-normal text-white  transition duration-150 ]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline ml-1 pb-[2px] w-4 h-4 mr-1 "
              viewBox="0 0 512 512"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
            Envoyer
          </button>
        </form>
      </div>

      {/* bout de code test pour dropdown menu delete++++++++++ */}

      {/* <div className=' px-10 mt-10'> 
      
      <div className=' border-4 w-44 relative'>
      <select id="countries" value={selectedCountry} onChange={handleCountryChange}>
        <option  value="">Sélectionnez un pays</option>
        {countryList.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      </div>
      

      <div>
        {contactNumber && (
          <div>
            <h2>Numéro de contact pour {selectedCountry} :</h2>
            <p>{contactNumber}</p>
          </div>
        )}
      </div>
    </div>
   */}

      {/* <div className='relative flex flex-col items-center h-[340px] w-[340px] rounded-md ml-10'>
  <button onClick={() => setIsOpen((prev) => !prev)} className='bg-Csecondary1 p-4 flex w-full items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary'>
    {selectedItem ? (
      <div>
        <img src={`src/assets/flags/${selectedItem.flag}`} alt={selectedItem.name} className="inline-block w-4 h-4 ml-2" />
        <span>{selectedItem.name}</span>
      </div>
    ) : (
      'Dropdown'
    )}
    {!isOpen ? (
      <AiOutlineCaretDown className='h-8' />
    ) : (
      <AiOutlineCaretUp className='h-8' />
    )}
  </button>
  {isOpen && (
    <div className='bg-blue-200 absolute top-20 flex-col items-start rounded-lg p-2 w-full'>
      {ListAddress.map((item, i) => (
        <div className='flex w-full justify-between p-4 hover:bg-Cprimary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4' key={i} onClick={() => {
          setSelectedItem(item);
          setIsOpen(false); // Fermer le sous-menu après la sélection
        }}>
          <h3 className='font-bold'>{item.name}</h3>
          <h3><img src={`src/assets/flags/${item.flag}`} alt={item.name} className="inline-block w-4 h-4 ml-2" /></h3>
        </div>
      ))}
    </div>
  )}
   </div>


   <div className='relative flex flex-col items-center h-[340px] w-[340px] rounded-md ml-10'>
  <button onClick={() => setIsOpen((prev) => !prev)} className='bg-Csecondary1 p-4 flex w-full items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary'>
    {selectedItem ? (
      <div>
        <img src={`src/assets/flags/${selectedItem.flag}`} alt={selectedItem.name} className="inline-block w-4 h-4 ml-2" />
        <span>{selectedItem.name}</span>
      </div>
    ) : (
      'Dropdown'
    )}
    {!isOpen ? (
      <AiOutlineCaretDown className='h-8' />
    ) : (
      <AiOutlineCaretUp className='h-8' />
    )}
  </button>
  {isOpen && (
    <div className='bg-blue-200 absolute top-20 flex-col items-start rounded-lg p-2 w-full'>
      {ListAddress.map((item, i) => (
        <div className='flex w-full justify-between p-4 hover:bg-Cprimary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4' key={i} onClick={() => handleSelection(item)}>
          <h3 className='font-bold'>{item.name}</h3>
          <h3><img src={`src/assets/flags/${item.flag}`} alt={item.name} className="inline-block w-4 h-4 ml-2" /></h3>
        </div>
      ))}
    </div>
  )}
  {phoneNum && (
    <p>Numéro associé au pays sélectionné : {phoneNum}</p>
  )}
  </div> */}

      {/* <div className='relative flex flex-col items-center h-[340px] w-[340px] rounded-md ml-10'>
  <button onClick={() => setIsOpen((prev) => !prev)} className='bg-Csecondary1 p-4 flex w-full items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-Cprimary duration-300 active:text-Cprimary'>
    {selectedItem ? (
      <div>
        <img src={`src/assets/flags/${selectedItem.flag}`} alt={selectedItem.name} className="inline-block w-4 h-4 ml-2 -mt-1 mr-1  " />
        <span>{selectedItem.name}</span>
      </div>
    ) : (
      'Dropdown'
    )}
    {!isOpen ? (
      <AiOutlineCaretDown className='h-8' />
    ) : (
      <AiOutlineCaretUp className='h-8' />
    )}
  </button>
  {isOpen && (
    <div className='bg-blue-200 absolute top-20 flex-col items-start rounded-lg p-2 w-full overflow-y-auto max-h-52'>
      {countryList.map((item, i) => (
        <div className='flex w-full   p-4 hover:bg-Cprimary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4' key={i} onClick={() => handleSelection(item)}>
           <h3><img src={`src/assets/flags/${item.flag}`} alt={item.name} className="inline-block w-4 h-4 ml-2 " /></h3>
          <h3 className='font-bold mr-44 px-2 '>{item.name}</h3>
         
        </div>
      ))}
    </div>
  )}
  {phoneNum && (
    <p>Numéro associé à {selectedItem.name} : {phoneNum}</p>
   
  )}
  </div> */}

      {/* <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver py-16 mt-20'>
                <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                    <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl font-semibold text-neutral-800 mb-6 lg:leading-snug'> Les membres de l'équipe sont purement jeunes et dynamiques.</h2>
                    <div className='flex items-center justify-center gap-8'>
                      <button className='btn-primary px-4 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Avoir une demo   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='inline-block ml-2'>
                        <path d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004" stroke="white"/>
                        </svg></button>  
                    </div>
                    <a href="mailto:efficaceinnovation@gmail.com?subject=Objet">efficaceinnovation@gmail.com</a>
                    <a class="icons" href="tel:+237 678 23 38 15">
                      <span class="lnr lnr-phone-handset"></span>
                      <span className="text-[#263238]"> <a class="btns" href="tel:+237 678 23 38 15">+237 678 23 38 15</a></span> 
                    </a>
                    </div>
                    
                </div>
            </div> */}
    </>
  );
};

export default Contact;
