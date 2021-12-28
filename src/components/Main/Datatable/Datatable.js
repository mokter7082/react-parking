import React, { useEffect, useMemo, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useFullPageLoader from "../../../Hooks/useFullPageLoader";
import useAuth from "../../../Hooks/useAuth";
import Header from "./Header/Header";
import PaginationComponent from "./Pagination/Pagination";
import Search from "./Search/Search";

const Datatable = () => {
  const { defaultPark, loader } = useAuth();
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const ITEMS_PER_PAGE = 10;

  const headers = [
    { name: "SL", field: "id", sortable: false },
    { name: "Image", field: "image", sortable: true },
    { name: "Division", field: "division", sortable: true },
    { name: "Local", field: "local", sortable: false },
  ];
  // useEffect(() => {
  //   const getData = () => {
  //     showLoader();

  //     fetch("http://parkingkoi.xyz/laravel_api/public/monthly-places-v2")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         hideLoader();
  //         setDefaultpark(json);
  //       });
  //   };

  //   getData();
  // }, []);
  const parkData = useMemo(() => {
    let parkedData = defaultPark;

    if (search) {
      parkedData = parkedData.filter(
        (parke) =>
          parke.division.toLowerCase().includes(search.toLowerCase()) ||
          parke.local.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(parkedData.length);

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting?.order === "asc" ? 1 : -1;
      parkedData = parkedData?.sort(
        (a, b) => reversed * a[sorting.field]?.localeCompare(b[sorting?.field])
      );
    }

    //Current Page slice
    return parkedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [defaultPark, currentPage, search, sorting]);
  return (
    <>
      {/* <ExternalInfo page="datatable" /> */}

      <Container>
        <div className="row w-100">
          <div className="col py-3 co-md-12 text-center">
            <div className="col-md-6 ms-2 text-center">
              <Search
                onSearch={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <Table className="table table-bordered" responsive>
              <Header
                headers={headers}
                onSorting={(field, order) => setSorting({ field, order })}
              />
              <tbody>
                {parkData.map((park, index) => (
                  <tr>
                    <th scope="row" key={park.id}>
                      {index + 1}
                    </th>
                    <td>
                      <img
                        src={park.image_url}
                        alt=""
                        style={{ height: "100px", width: "100px" }}
                      />
                    </td>
                    <td>{park.division}</td>
                    <td>{park.local}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="col-md-6 mx-auto">
              <PaginationComponent
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </Container>
      <div class="col-md-6 mx-auto text-center">{loader}</div>
    </>
  );
};

export default Datatable;
