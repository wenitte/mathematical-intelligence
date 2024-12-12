# 

Source: https://proofwiki.org/wiki/Applesellers%27_Problem/Variant



Problem
Three women, $A$, $B$ and $C$, carried apples to a market to sell.
$A$ had sold $20$,
$B$ had sold $30$,
and $C$ had sold $40$.
They sold at the same price, the one as the other,
and, each having sold all their apples,
brought home as much money as each other.
How could this be?


Solution
During the first part of the day, they sold their apples at $1$ penny each.
During the second part of the day, they sold them at $3$ pence each.

$A$ sold $2$ at $1$ penny and $18$ at $3$ pence each.
$B$ sold $17$ at $1$ penny and $13$ at $3$ pence each.
$C$ sold $32$ at $1$ penny and $8$ at $3$ pence each.
Hence each one made $56$ pence.
$\blacksquare$


Proof
In order for this to make sense, the two separate prices for the different times of day needs to be assumed.
Hence we need to determine:

the two price tiers
the total sum made
the number each sold at each tier.
This is a system of Diophantine equations which has a number of solutions.

A general solution is given by:
$A$ sold $m$ at $k \paren {n - 10}$ pence and $\paren {20 - m}$ at $k n$ pence each.
$B$ sold $\paren {m + n}$ at $k \paren {n - 10}$ pence and $\paren {30 - m - n}$ at $k n$ pence each.
$C$ sold $\paren {m + 2 n}$ at $k \paren {n - 10}$ pence and $\paren {40 - m - 2 n}$ at $k n$ pence each.
Each one made $10 k \paren {2 n - m}$ pence.

where $m, n \in \N$, $0 \le m \le 20$, $n > 10$, $m + 2 n \le 40$, $k \in \R$.

Under these constraints there are $100$ choices for $\tuple {m, n}$ and (uncountably) infinite choices for $k$.
The solution given above is the particular solution $\tuple {m, n, k} = \tuple {2, 15, 0.2}$.


Historical Note
This puzzle is typical of those found in collections of Victorian amusements.


Sources
1633: Henry van Etten: Mathematicall Recreations (translated by William Oughtred from Récréations Mathématiques)
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Henry van Etten: $123$




