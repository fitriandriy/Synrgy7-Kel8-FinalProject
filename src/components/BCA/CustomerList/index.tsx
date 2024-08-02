import React from "react";
import CustomerItem from "../CustomerItem";
import { Card, Flex } from "antd";
import "./style.css";

type TContactList = {
  pathUrl: string;
  header: string;
  contacts: { name: string; type: string; number: string; isFavorite?: boolean; avatar: string }[];
};

export default function CustomerList({ header, contacts }: TContactList) {

  return (
    <div className="text-primary-100 w-full">
      <h5 className="font-bold mb-3 text-body-small md:text-heading-5">{`${header} (${contacts.length})`}</h5>
      {contacts.length !== 0 ? (
        <Card
          className="lg:p-0 py-[23px] px-[18px] rounded-xl shadow-[0px_5px_30px_0px_#0000000D] lg:shadow-none lg:border-none"
          id="contact-list"
        >
          <Flex vertical gap={12}>
            {contacts.map((contact, index) => (
              <Card className="border-white lg:border-primary-300" id="contact-item" key={index}>
                <CustomerItem  no={""} service_name={""} account_name={""} bank_name={""} account_number={""} user_image_path={""} {...contact} />
              </Card>
            ))}
          </Flex>
        </Card>
      ) : (
        <p className="text-neutral-300 text-center font-bold text-caption-large md:text-body-large">Daftar Kosong</p>
      )}
    </div>
  );
}