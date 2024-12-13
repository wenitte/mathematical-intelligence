# 

Source: https://proofwiki.org/wiki/Queen%27s_Tour



Theorem
Consider a chessboard $\CC$ of size $n \times n$ such that $n > 2$.
Then the shortest queen's tour on $\CC$ is of $2 n - 2$ moves.

For $n < 5$ it is necessary for the queen to move outside the boundary of the chessboard in order for this to happen.


Proof
First it is shown that at least $2 n - 2$ moves are needed.
Let there be $R$ rows and $S$ columns which have none of the given moves on them.
The $R \times S$-square segment of this chessboard has a $2 R + 2 S - 4$ squares on its edge if $R$ and $S$ are both greater than $1$.
Each diagonal moves covers at most $2$ of these boundary square.
Thus in the set of moves there are at least:

$R + S - 2$ diagonal moves
$n - R$ horizontal moves
$n - S$ vertical moves.
Thus there are at least $2 n - 2$ moves needed to cover the entire chessboard.
$\Box$

It remains to demonstrate that no more than $2 n - 2$ moves are needed.
The proof proceeds by induction.
Let us raise the following hypothesis:
For all $n \in \Z_{\ge 3}$, let $\map P n$ be the proposition:

A chessboard of size $n \times n$ has a queen's tour $T$ of $2 n - 2$ moves such that $T$ exits from the top right square:



Basis for the Induction
$\map P 3$ is the case:

A chessboard of size $3 \times 3$ has a queen's tour $T$ of $4$ moves such that $T$ exits from the top right square:
This is demonstrated as follows:


Thus $\map P 3$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

A chessboard of size $k \times k$ has a queen's tour of $2 k - 2$ moves such that $T$ exits from the top right square

from which it is to be shown that:

A chessboard of size $\paren {k + 1} \times \paren {k + 1}$ has a queen's tour of $2 \paren {k + 1} - 2 = 2 k$ moves such that $T$ exits from the top right square.


Induction Step
This is the induction step:
Let us take our chessboard of size $k \times k$, and add another row and column to it, so as to make it a $\paren {k + 1} \times \paren {k + 1}$ chessboard
Having drawn our $2 k - 2$ move solution on the original $k \times k$ chessboard, we travel down the column and across the row in another $2$ moves:


This is a queen's tour of $2 k$ move such that $T$ exits from the bottom left square.

It is seen that if the tour on the $k \times k$ chessboard stays entirely inside the chessboard, then so does the tour on the $\paren {k + 1} \times \paren {k + 1}$ chessboard

It remains to rotate the chessboard $180 \degrees$, and we will see $T$ now exits from the top right square.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

For all $n$ greater than $3$, there exists a queen's tour on $\CC$ of $2 n - 2$ moves.

Note from the examples provided, for $n = 5$, the queen does not need to move outside the boundary of the chessboard.
However, for $n = 3$ and $n = 4$, the tour does need to stray outside those boundaries.
$\blacksquare$


Examples
$3 \times 3$ Chessboard

As can be seen, the queen's tour on a $3 \times 3$ chessboard can be achieved in $2 \times 3 - 2 = 4$ moves.
However, the queen needs to go outside the $3 \times 3$ chessboard in order to do it.

$4 \times 4$ Chessboard

As can be seen, the queen's tour on a $4 \times 4$ chessboard can be achieved in $2 \times 4 - 2 = 6$ moves.
However, the queen needs to go outside the $4 \times 4$ chessboard in order to do it.

$5 \times 5$ Chessboard

As can be seen, the queen's tour on a $5 \times 5$ chessboard can be achieved in $2 \times 5 - 2 = 8$ moves.
Notice how the queen does not need to go outside the $5 \times 5$ chessboard in order to do it.

$7 \times 7$ Chessboard

As can be seen, a re-entrant queen's tour on a $7 \times 7$ chessboard can be achieved in $2 \times 7 - 2 = 12$ moves.

$8 \times 8$ Chessboard
 $\qquad$  $\qquad$ 
Here are three examples of a re-entrant queen's tour on a $8 \times 8$ chessboard, achieved in $2 \times 8 - 2 = 14$ moves.


Sources
1954: M.S. Klamkin: Problems for Solution: E1123 (Amer. Math. Monthly Vol. 61: p. 423)  www.jstor.org/stable/2307911
1955: M.S. Klamkin: E1123: Polygonal Path Covering a Square Lattice (Amer. Math. Monthly Vol. 62: p. 124)  www.jstor.org/stable/2308156
1955: John L. Selfridge: E1123: Polygonal Path Covering a Square Lattice (addendum) (Amer. Math. Monthly Vol. 62: p. 443)  www.jstor.org/stable/2307008
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $416$. Sinking the Fishing-Boats




