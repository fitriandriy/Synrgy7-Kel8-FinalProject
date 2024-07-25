import Breadcrumb from "../../components/Breadcumb";
import { Card, Flex } from "antd";
import CustomerItem from "../../components/CustomerItem";
import FormTopUp from "../../components/FormTopUp";
import { useParams } from "react-router-dom";

const USER = {
  name: "Felin Agustina",
  type: "OVO",
  number: "088812194203",
  avatar: "https://ui-avatars.com/api/?name=Felin+Agustina&background=EFEFEF&color=115DA9&rounded=true",
};

export default function AmountTopUpPage() {
  const { slug } = useParams<{ slug: string }>();

  const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map((word: string) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  return (
    <div className="container">
      <div className="my-[30px]">
        <Breadcrumb title={slug ? toTitleCase(slug) : 'Transfer'} subtitle="Masukkan Nominal Transaksi" />
      </div>
      <div className="w-full lg:max-w-[546px]">
        <Card className="border-white md:border-primary-300">
          <Flex vertical gap={28}>
            <div>
              <h5 className="text-primary-100 mb-2 text-body-small md:text-heading-5">Penerima</h5>
              <CustomerItem {...USER} />
            </div>
            <FormTopUp pathUrl={`/e-wallet/${slug}`}/>
          </Flex>
        </Card>
      </div>
    </div>
  );
}
