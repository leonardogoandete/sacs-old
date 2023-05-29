import { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, useBreakpointValue, TableContainer } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ReactJsPagination from "react-js-pagination";
import ReactPaginate from "react-paginate";

export function ListarChamados() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Defina os dados da tabela
    const tableData = [
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },
        {
            numeroChamado: "001",
            dataAbertura: "2023-05-28",
            status: "Em andamento",
            assunto: "Problema de rede",
            departamento: "TI - Redes e Comunicações",
        },
        {
            numeroChamado: "002",
            dataAbertura: "2023-05-29",
            status: "Concluído",
            assunto: "Atualização de software",
            departamento: "TI - Suporte técnico",
        },

        // Adicione mais itens aqui
    ];

    // Número de linhas por página
    const rowsPerPage = 10;

    // Cálculo do número total de páginas
    const pageCount = Math.ceil(tableData.length / rowsPerPage);

    // Função para exibir as linhas da tabela de acordo com a página atual
    const renderTableData = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        return tableData.slice(startIndex, endIndex).map((row, index) => (
            <Tr key={index}>
                <Td>{row.numeroChamado}</Td>
                <Td>{row.dataAbertura}</Td>
                <Td>{row.status}</Td>
                <Td>{row.assunto}</Td>
                <Td>{row.departamento}</Td>
            </Tr>
        ));
    };


    // Função para atualizar a página atual ao clicar na paginação
    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Box p={4}>
            <TableContainer overflowX="auto">
                <Table variant="striped">
                    <Thead>
                        <Tr>
                            <Th>Número do Chamado</Th>
                            <Th>Data de Abertura</Th>
                            <Th>Status</Th>
                            <Th>{isMobile ? "Assunto" : "Assunto (Descrição)"}</Th>
                            <Th>Departamento</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.numeroChamado}</Td>
                                <Td>{row.dataAbertura}</Td>
                                <Td>{row.status}</Td>
                                <Td>{row.assunto}</Td>
                                <Td>{row.departamento}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center" mt={4}>
                <ReactJsPagination
                    activePage={currentPage}
                    itemsCountPerPage={rowsPerPage}
                    totalItemsCount={tableData.length}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    prevPageText={<ChevronLeftIcon />}
                    nextPageText={<ChevronRightIcon />}
                    prevPageClassName="pagination-icon"
                    nextPageClassName="pagination-icon"
                    innerClass="pagination"
                />
            </Box>





            <Box display="flex" justifyContent="center" mt={4}>
                <ReactPaginate
                    previousLabel={<ChevronLeftIcon />}
                    nextLabel={<ChevronRightIcon />}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </Box>

        </Box>
    );
}
