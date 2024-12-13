# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/250_-_Adjusting_the_Counters/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $250$
Adjusting the Counters
Place $25$ counters in a square in the order shown.

Then it is a good puzzle to put them all into regular order so that the first line reads $1 \ 2 \ 3 \ 4 \ 5$, and the second $6 \ 7 \ 8 \ 9 \ 10$,
and so on to the end, by taking up one counter in each hand and making them change places.
The puzzle is to determine the fewest possible exchanges in which this can be done.


Solution
The task can be accomplished in $19$ exchanges:

$(1): \quad \tuple {1, 7}, \tuple {7, 20}, \tuple {20, 16}, \tuple {16, 11}, \tuple {11, 2} \tuple {2, 24}$
$(2): \quad \tuple {3, 10}, \tuple {10, 23}, \tuple {23, 14}, \tuple {14, 18}, \tuple {18, 5}$
$(3): \quad \tuple {4, 19}, \tuple {19, 9}, \tuple {9, 22}$
$(4): \quad \tuple {6, 12}, \tuple {12, 15}, \tuple {15, 13}, \tuple {13, 25}$
$(5): \quad \tuple {17, 21}$


Proof
First we identify the permutation required to perform the operation.
We present it in two-row notation as follows

$\begin{pmatrix}
7 & 24 & 10 & 19 & 3 & 12 & 20 & 8 & 22 & 23 &  2 & 15 & 25 & 18 & 13 & 11 & 21 &  5 &  9 & 16 & 17 &  4 & 14 &  1 &  6 \\
1 &  2 &  3 &  4 & 5 &  6 &  7 & 8 &  9 & 10 & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 & 25 \end{pmatrix}$
From this we can identify the cycles and hence present it in cycle notation:

$\begin{pmatrix} 1 & 7 & 20 & 16 & 11 & 2 & 24 \end{pmatrix}
\begin{pmatrix} 3 & 10 & 23 & 14 & 18 & 5 \end{pmatrix}
\begin{pmatrix} 4 & 19 & 9 & 22 \end{pmatrix}
\begin{pmatrix} 6 & 12 & 15 & 13 & 25 \end{pmatrix}
\begin{pmatrix} 17 & 21 \end{pmatrix}$
Then it is seen that the exchanges should be done as:

$(1): \quad \tuple {1, 7}, \tuple {7, 20}, \tuple {20, 16}, \tuple {16, 11}, \tuple {11, 2} \tuple {2, 24}$
$(2): \quad \tuple {3, 10}, \tuple {10, 23}, \tuple {23, 14}, \tuple {14, 18}, \tuple {18, 5}$
$(3): \quad \tuple {4, 19}, \tuple {19, 9}, \tuple {9, 22}$
$(4): \quad \tuple {6, 12}, \tuple {12, 15}, \tuple {15, 13}, \tuple {13, 25}$
$(5): \quad \tuple {17, 21}$
The squareness of the array of numbers to be arranged is irrelevant.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $250$. -- Adjusting the Counters
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $375$. Adjusting the Counters




