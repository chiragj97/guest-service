"use client"
import DiscountForm from "@/components/DiscountForm/DiscountForm";
import Layout from "@/components/Layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SearchIcon } from "@/components/icons/icons";
import { Switch } from "@mui/material";
import Image from "next/image";

const Abc = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 container px-5">
          <div className="d-flex align-items-center py-2">
            <div className="d-flex gap-5">
              <div className="d-flex align-items-center gap-1">
                <h6 className="pt-1">Out of order</h6>
                <Switch />
              </div>
              <div className="d-flex align-items-center gap-1">
                <h6 className="pt-1">Staff Allocation</h6>
                <Switch />
              </div>
            </div>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
          <div className="d-flex py-3 align-items-center gap-3">
            <SearchIcon />
            <Image
              className="rounded-circle"
              src="/assets/module.jpg"
              alt="Image"
              width={36}
              height={36}
            />
            <p className="d-flex align-items-center m-0 text-bold">
              Anirudh Jonnalagadda
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="p-2">
            <SearchBar />
          </div>
        </div>
      </div>
      {/* <DiscountForm /> */}
    </Layout>
  );
};

export default Abc;
