# 

Source: https://proofwiki.org/wiki/Magic_Square_of_Order_3_is_Unique

Theorem
Up to rotations and reflections, the magic square of order $3$ is unique:


$\begin {array} {|c|c|c|} \hline 2 & 7 & 6 \\ \hline 9 & 5 & 1 \\ \hline 4 & 3 & 8 \\ \hline \end {array}$


Proof
Let $M_3$ denote the magic square of order $3$.
Each row, column and diagonal of $M_3$ must be a different set of $3$ elements of $\N_9$, where $\N_9$ denotes the set $\set {1, 2, 3, 4, 5, 6, 7, 8, 9}$.

The sets of $3$ elements of $\N_9$ adding to $15$ can be stated:

$\set {1, 5, 9}, \set {1, 6, 8}$
$\set {2, 4, 9}, \set {2, 5, 8}, \set {2, 6, 7}$
$\set {3, 4, 8}, \set {3, 5, 7}$
$\set {4, 5, 6}$

The number of rows, columns and diagonals of $M_3$ passing through each cell of $M_3$ depends upon where in $M_3$ that cell is positioned.

The corner cells are each on one row, one column and one diagonal
The edge cells are each on one row and one column
The center cells is on one row, one column and both diagonals.

Thus the center cell has to contain an integer which is in at least $4$ of the $3$-element subsets of $\N^*_9$ above.
There is only one such element, which is $5$.
Thus $5$ goes in the center square of $M_3$.

By a similar analysis, it is seen that:

the corner cells contain $2, 4, 6, 8$
the edge cells contain $1, 3, 7, 9$.

Without loss of generality, let $2$ be placed in the upper left corner of $M_3$.
There is no $3$-element subset of $\N^*_9$ adding to $15$ containing both $1$ and $2$.
It follows that $1$ cannot be placed on either the upper edge or left hand edge.
Thus $1$ must go into the right hand edge or the bottom edge.
Without loss of generality, let $1$ be placed on the right hand edge.

Up to rotations and reflections, the placements of these three elements is unique.
Hence $M_3$ so far looks like this:

$\begin {array} {|c|c|c|}
\hline 2 &    &   \\
\hline   &  5 & 1 \\
\hline   &    &   \\
\hline
\end {array}$
The population of the remaining cells is forced:

$\begin {array} {|c|c|c|}
\hline 2 &   &   \\
\hline 9 & 5 & 1 \\
\hline   &   & 8 \\
\hline
\end {array}$


$\begin {array} {|c|c|c|}
\hline 2 &   & 6 \\
\hline 9 & 5 & 1 \\
\hline 4 &   & 8 \\
\hline
\end {array}$


$\begin {array} {|c|c|c|}
\hline 2 & 7 & 6 \\
\hline 9 & 5 & 1 \\
\hline 4 & 3 & 8 \\
\hline
\end {array}$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $9$
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Puzzles from China: The First Magic Square: $59$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $9$




