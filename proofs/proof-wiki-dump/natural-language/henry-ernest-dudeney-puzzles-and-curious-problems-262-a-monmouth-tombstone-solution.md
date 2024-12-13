# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/262_-_A_Monmouth_Tombstone/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $262$
A Monmouth Tombstone
In the burial ground attached to St. Mary's Church, Monmouth, is this arrangement of letters on one of the tombstones.

$\qquad \begin{array} \\
E & I & N & E & R & N & H & O & J & S & J & O & H & N & R & E & N & I & E \\
I & N & E & R & N & H & O & J & S & E & S & J & O & H & N & R & E & N & I \\
N & E & R & N & H & O & J & S & E & I & E & S & J & O & H & N & R & E & N \\
E & R & N & H & O & J & S & E & I & L & I & E & S & J & O & H & N & R & E \\
R & N & H & O & J & S & E & I & L & E & L & I & E & S & J & O & H & N & R \\
N & H & O & J & S & E & I & L & E & R & E & L & I & E & S & J & O & H & N \\
H & O & J & S & E & I & L & E & R & E & R & E & L & I & E & S & J & O & H \\
O & J & S & E & I & L & E & R & E & \mathbf H & E & R & E & L & I & E & S & J & O \\
H & O & J & S & E & I & L & E & R & E & R & E & L & I & E & S & J & O & H \\
N & H & O & J & S & E & I & L & E & R & E & L & I & E & S & J & O & H & N \\
R & N & H & O & J & S & E & I & L & E & L & I & E & S & J & O & H & N & R \\
E & R & N & H & O & J & S & E & I & L & I & E & S & J & O & H & N & R & E \\
N & E & R & N & H & O & J & S & E & I & E & S & J & O & H & N & R & E & N \\
I & N & E & R & N & H & O & J & S & E & S & J & O & H & N & R & E & N & I \\
E & I & N & E & R & N & H & O & J & S & J & O & H & N & R & E & N & I & E \\
\end{array}$


In how many different ways can these words "$\text{HERE LIES JOHN RENIE}$" be read,
starting at the central $H$ and always passing from one letter to another that is contiguous?


Solution
$45 \, 760$, unless you are allowed to go diagonally, in which case it is $91 \, 520$.


Proof
Let us count the routes on one quadrant of this tombstone.
The total number of routes is then found by multiplying this by $4$.

Thus:
$\qquad \begin{array} \\
\mathbf H & E & R & E & L & I & E & S & J & O \\
E & R & E & L & I & E & S & J & O & H \\
R & E & L & I & E & S & J & O & H & N \\
E & L & I & E & S & J & O & H & N & R \\
L & I & E & S & J & O & H & N & R & E \\
I & E & S & J & O & H & N & R & E & N \\
E & S & J & O & H & N & R & E & N & I \\
S & J & O & H & N & R & E & N & I & E \\
\end{array}$
Let the number of routes from the $H$ to the $E$ at bottom right be $N$.
It is clear by inspection that, in order to spell the epitaph, you need to step one to the right or one down in order.
There is one way to travel to each letter along the top and down the left hand side.
Suppose you are at a given letter $x$.
Then you can get there from the letter to the left or from the letter above.
Hence the number of ways to get to letter $x$ is the sum of the ways from the left or above.
Hence the number of routes to a given letter are given by the entries in Pascal's triangle with the $1$ at the top left corner.
There are $16$ steps to the bottom right, which is reached by going $9$ across and $7$ down.
Hence:














\(\ds N\)

\(=\)







\(\ds \dbinom {16} 7\)




















\(\ds \)

\(=\)







\(\ds \dbinom {20 \, 922 \, 789 \, 888 \, 000} {5040 \times 362 \, 880}\)




















\(\ds \)

\(=\)







\(\ds 11 \, 440\)









Hence the total number of ways the epitaph can be spelt is $4 \times 11 \, 440 = 45 \, 760$.
$\Box$

Suppose you are allowed to go diagonally.
Then when you get to the last $I$, you have a choice as to go either to the final $E$ in the corner, or backwards diagonally to the $E$ behind you.
Hence for every fully orthogonal route there is another using that diagonal.
Hence there are twice as many paths than orthogonal-only routes.
That is:

$2 \times 45 \, 760 = 91 \, 520$
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solution: $262$. -- A Monmouth Tombstone
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $421$. A Monmouth Tombstone




