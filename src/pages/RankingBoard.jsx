import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const data = [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 200 },
    { name: 'Player 3', score: 50 },
    { name: 'Player 4', score: 300 },
    { name: 'Player 5', score: 150 },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

class RankingBoard extends React.Component {
    render() {
        // Sort data in descending order based on score
        const sortedData = data.sort((a, b) => b.score - a.score);

        return (
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Rank</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Score</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((player, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell align="center">{player.name}</TableCell>
                                <TableCell align="center">{player.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default RankingBoard;
