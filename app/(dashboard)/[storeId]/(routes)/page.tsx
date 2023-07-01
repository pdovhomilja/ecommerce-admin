import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const store = await prismadb.store.findUnique({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{store?.name}</h2>
      <p>{store?.id}</p>
    </div>
  );
};

export default DashboardPage;
