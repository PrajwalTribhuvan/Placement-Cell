import React, { useState } from "react";
import { Collapse, Button } from 'reactstrap';
import { BsCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import "./OurRecruiters.css";
import directiLogo from "../Asset/company_logos/directi.png";
import dotnetLogo from "../Asset/company_logos/dotnet.png";
import intelLogo from "../Asset/company_logos/Intel-Logo-2005.png";
import nutanixLogo from "../Asset/company_logos/Nutanix-Logo.wine.png";
import postmanLogo from "../Asset/company_logos/postman.png";
import buyhatkeLogo from "../Asset/company_logos/buyhatke.png";
import accoliteLogo from "../Asset/company_logos/accolite.png";
import ackoLogo from "../Asset/company_logos/acko.png";
import expediaLogo from "../Asset/company_logos/expedia.png";
import linkedinLogo from "../Asset/company_logos/linkedin.png";
import paytmLogo from "../Asset/company_logos/paytm.png";
import quantiphiLogo from "../Asset/company_logos/quantiphi.png";
import ONEmgLogo from "../Asset/company_logos/1mg.png";
import codenationLogo from "../Asset/company_logos/codenation.png";
import collegeduniaLogo from "../Asset/company_logos/collegedunia.png";
import goldmansachsLogo from "../Asset/company_logos/goldmansachs.png";
import hashedInLogo from "../Asset/company_logos/hashedin.jpeg";
import infoobjectsLogo from "../Asset/company_logos/infoobjects.jpg";
import jdaLogo from "../Asset/company_logos/jda.png";
import joshtechnologyLogo from "../Asset/company_logos/joshtechnology.png";
import maqsoftwareLogo from "../Asset/company_logos/maqsoftware.png";
import mavenhiveLogo from "../Asset/company_logos/mavenhive.png";
import nagarroLogo from "../Asset/company_logos/nagarro.png";
import nineleapsLogo from "../Asset/company_logos/nineleaps.jpg";
import sokratiLogo from "../Asset/company_logos/sokarti.png";
import tcsLogo from "../Asset/company_logos/tcs.jpg";
import travelokaLogo from "../Asset/company_logos/traveloka.png";
import valuefyLogo from "../Asset/company_logos/valuefy.jpg";
import vassarlabsLogo from "../Asset/company_logos/vassarlabs.jpeg";
import vehanttechnologiesLogo from "../Asset/company_logos/vehanttechnologies.png";
import wickedrideLogo from "../Asset/company_logos/wickedride.png";
import zenefitsLogo from "../Asset/company_logos/zenefits.jpeg";
import kleanLogo from "../Asset/company_logos/klean.png";
import googleLogo from "../Asset/company_logos/googlei.png";
import polestarLogo from "../Asset/company_logos/polestar.jpeg";
import wiproLogo from "../Asset/company_logos/wipro.jpeg";
import Microsoft from "../Asset/company_logos/Microsoft.png";
import ShipsyLogo from "../Asset/company_logos/shipsy.png";
import flipkartLogo from "../Asset/company_logos/flipkart.jpeg";
import mindtickleLogo from "../Asset/company_logos/mindtickle.png";
import sabreLogo from "../Asset/company_logos/sabre.png";
import xebiaLogo from "../Asset/company_logos/xebia.png";
import bizongoLogo from "../Asset/company_logos/bizongo.jpeg";
import infoedgeLogo from "../Asset/company_logos/infoedge.jpeg";
import infotechhubLogo from "../Asset/company_logos/infotechhub.png";
import nucleusLogo from "../Asset/company_logos/nucleus.png";
import nykaaLogo from "../Asset/company_logos/nykaa.jpeg";
import samsungLogo from "../Asset/company_logos/samsung.png";
import americanExpressLogo from "../Asset/company_logos/americanexpress.png";
import juspayLogo from "../Asset/company_logos/juspay.png";
import whitepandaLogo from "../Asset/company_logos/whitepanda.png";
import virtusaLogo from "../Asset/company_logos/virtusa.png";
import goibiboLogo from "../Asset/company_logos/goibibo.png";
import amazonLogo from "../Asset/company_logos/amazon.png";
import tekionLogo from "../Asset/company_logos/tekion.png";
import gradeupLogo from "../Asset/company_logos/gradeup-logo.png";
import ucLogo from "../Asset/company_logos/uc.jpg";
import jioLogo from "../Asset/company_logos/jio.jpg";
import pubLogo from "../Asset/company_logos/pub.png";
import onineLogo from "../Asset/company_logos/onine.jpg";
import nferenceLogo from "../Asset/company_logos/nference.svg";
import abbLogo from "../Asset/company_logos/abb.png";
import clarivateLogo from "../Asset/company_logos/clarivate.png";
import delhiveryLogo from "../Asset/company_logos/delhivery.png";
import cardekhoLogo from "../Asset/company_logos/cardekho.jpeg";
import gameskraftLogo from "../Asset/company_logos/gameskraft.png";
import practoLogo from "../Asset/company_logos/practo.png";
import deloitteLogo from "../Asset/company_logos/dlite.png";
import tripockLogo from "../Asset/company_logos/tripock.png";
import niLogo from "../Asset/company_logos/ni.png";
import capdgeminiLogo from "../Asset/company_logos/capgemini.webp";
import zomatologo from "../Asset/company_logos/zomato.png";
import gaugelogo from "../Asset/company_logos/gauge.png";
import symphonylogo from "../Asset/company_logos/symphony.jpg";
import ecorp from "../Asset/company_logos/314ecorp.jpeg";
import amd from "../Asset/company_logos/amd.jpg"
import bigbasket from "../Asset/company_logos/bigbasket.jpg"
import byjus from "../Asset/company_logos/byjus.png"
import cognitio from "../Asset/company_logos/cognitio.png"
import cognizant from "../Asset/company_logos/cognizant.png"
import cogoport from "../Asset/company_logos/cogoport.jpg"
import accenture from "../Asset/company_logos/accenture.png" 
import albatronix from "../Asset/company_logos/albatronix.png"
import cred from "../Asset/company_logos/cred.png"
import darwinbox from "../Asset/company_logos/darwinbox.jpg"
import dolcera from "../Asset/company_logos/dolcera.png"
import fis from "../Asset/company_logos/FIS.png"
import ganit from "../Asset/company_logos/ganit.png"
import gupshup from "../Asset/company_logos/gupshup.png"
import increff from "../Asset/company_logos/increff.png"
import indiamart from "../Asset/company_logos/indiamart.png"
import infosys from "../Asset/company_logos/infosys.png"
import inframarket from "../Asset/company_logos/inframarket.jpg"
import innominds from "../Asset/company_logos/innominds.png"
import ixigo from "../Asset/company_logos/ixigo.png"
import larsentoubro from "../Asset/company_logos/larsentoubro.png"
import mathworks from "../Asset/company_logos/mathworks.png"
import neosoft from "../Asset/company_logos/neosoft.png"
import nvidia from "../Asset/company_logos/nvidia.png"
import netmeds from "../Asset/company_logos/netmeds.png"
import paynearby from "../Asset/company_logos/paynearby.png"
import pristyn from "../Asset/company_logos/pristyn.png"
import parkplus from "../Asset/company_logos/parkplus.jpg"
import samsungsds from "../Asset/company_logos/SamsungSDS.png"
import sawolabds from "../Asset/company_logos/sawo.png"
import servicenow from "../Asset/company_logos/ServiceNow.png"
import sourcewiz from "../Asset/company_logos/sourcewiz.png"
import techcurator from "../Asset/company_logos/techcurator.jpg"
import techolution from "../Asset/company_logos/techolution.png"
import tejas from "../Asset/company_logos/tejas.jpg"
import trifacta from "../Asset/company_logos/trifacta.png"
import undostres from "../Asset/company_logos/undostres.jpg"
import walmartglobaltech from "../Asset/company_logos/walmartglobaltech.jpeg"
import mthree from "../Asset/company_logos/mthree.webp"
import zsassociates from "../Asset/company_logos/zsassociates.png"
import zycus from "../Asset/company_logos/zycus.png"
import thrillophilia from "../Asset/company_logos/thrillophilia.png"
import sportsapp from "../Asset/company_logos/sportsapp.png"
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";

export default function OurRecruiters() {
  const [isOpenFirst] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="pr-outer-container">
      <h1 className="pr-main-heading">Our Recruiter's</h1>
      <Collapse isOpen={isOpenFirst}>
        <div className="pr-inner-wrapper">
          <div className="pr-inner-box">
            <div className="pr-inner-row">
              <img src={amazonLogo} alt="Amazon" />
              <img src={flipkartLogo} alt="Flipkart" />
              <img src={ecorp} alt="314ecorp" />
              <img src={ackoLogo} alt="Acko" />
              <img src={intelLogo} alt="Intel" />
            </div>

            <div className="pr-inner-row">
              <img src={americanExpressLogo} alt="American Express" />
              <img src={amd} alt="AMD" />
              <img src={bigbasket} alt="BigBasket" />
              <img src={byjus} alt="Byjus" />
              <img src={capdgeminiLogo} alt="Capgemini" />
            </div>

            <div className="pr-inner-row">
              <img src={codenationLogo} alt="Codenation" />
              <img src={cognitio} alt="cognitio" />
              <img src={cognizant} alt="Cognizant" />
              <img src={cogoport} alt="Cogoport" />
              <img src={accenture} alt="Accenture" />
            </div>

            <div className="pr-inner-row">
              <img src={albatronix} alt="Albatronix" />
              <img src={cred} alt="Cred" />
              <img src={darwinbox} alt="DarwinBox" />
              <img src={deloitteLogo} alt="Deloitte" />
              <img src={dolcera} alt="Dolcera" />
            </div>

            <div className="pr-inner-row">
              <img src={fis} alt="FIS" />
              <img src={gameskraftLogo} alt="Gameskraft" />
              <img src={ganit} alt="Ganit" />
              <img src={gupshup} alt="Gupshup" />
              <img src={increff} alt="Increff" />
            </div>

            <div className="pr-inner-row">
              <img src={indiamart} alt="Indiamart" />
              <img src={infoedgeLogo} alt="Infoedge" />
              <img src={infosys} alt="Infosys" />
              <img src={inframarket} alt="Inframrket" />
              <img src={innominds} alt="Innominds" />
            </div>

            <div className="pr-inner-row">
              <img src={ixigo} alt="Ixigo" />
              <img src={jioLogo} alt="Jio" />
              <img src={joshtechnologyLogo} alt="Josh Technology Group" />
              <img src={larsentoubro} alt="Larsen Tourbo" />
              <img src={maqsoftwareLogo} alt="MAQ Software" />
            </div>

            <div className="pr-inner-row">
              <img src={mathworks} alt="Mathworks" />
              <img src={dotnetLogo} alt="Dotnet" />
              <img src={mindtickleLogo} alt="Mind Tickle" />
              <img src={nagarroLogo} alt="nagarro" />
              <img src={niLogo} alt="National Instruments" />
            </div>

            <div className="pr-inner-row">
              <img src={neosoft} alt="Neosoft" />
              <img src={netmeds} alt="Netmeds" />
              <img src={nferenceLogo} alt="Nference" />
              <img src={sportsapp} alt="sportsapp" />
              <img src={nucleusLogo} alt="Nucleus" />
            </div>

            <div className="pr-inner-row">
              <img src={nutanixLogo} alt="Nutanix" />
              <img src={nvidia} alt="nvidia" />
              <img src={onineLogo} alt="o9 solutions" />
              <img src={parkplus} alt="parkplus" />
              <img src={paynearby} alt="Paynearby" />
            </div>

            <div className="pr-inner-row">
              <img src={paytmLogo} alt="Paytm" />
              <img src={postmanLogo} alt="Postman" />
              <img src={practoLogo} alt="Practo" />
              <img src={pristyn} alt="pristyn" />
              <img src={pubLogo} alt="Publicis Sapients" />
            </div>

            <div className="pr-inner-row">
              <img src={sabreLogo} alt="Sabre" />
              <img src={samsungLogo} alt="Samsung" />
              <img src={samsungsds} alt="Samsung sds" />
              <img src={sawolabds} alt="Sawo Labs" />
              <img src={servicenow} alt="Service Now" />
            </div>

            <div className="pr-inner-row">
              <img src={ShipsyLogo} alt="shipsy" />
              <img src={sourcewiz} alt="SourceWiz" />
              <img src={tcsLogo} alt="TATA Consultancy Services" />
              <img src={techcurator} alt="Tech Curator" />
              <img src={techolution} alt="Techolution" />
            </div>

            <div className="pr-inner-row">
              <img src={tejas} alt="tejas" />
              <img src={tekionLogo} alt="Tekion Corp" />
              <img src={thrillophilia} alt="thrillophilia" />
              <img src={trifacta} alt="Trifacta" />
              <img src={undostres} alt="Undostres" />
            </div>

            <div className="pr-inner-row">
              <img src={vassarlabsLogo} alt="Vassar Labs" />
              <img src={walmartglobaltech} alt="Walmart Global Tech" />
              <img src={mthree} alt="Wiley Mthree" />
              <img src={zsassociates} alt="ZS Associates" />
              <img src={zycus} alt="Zycus" />
            </div>
          </div>
        </div>

      </Collapse>
      <Footer/>
      <Copyright/>
    </div>

  );
}