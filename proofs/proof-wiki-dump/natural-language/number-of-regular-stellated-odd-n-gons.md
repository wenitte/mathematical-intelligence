# 

Source: https://proofwiki.org/wiki/Number_of_Regular_Stellated_Odd_n-gons

Theorem
Let $n \in \Z_{>0}$ be a strictly positive odd integer.
Then there are $\dfrac {n - 1} 2$ distinct regular stellated $n$-gons.


Proof
Let $P$ be a regular stellated $n$-gons.
Let the $n$ vertices of $P$ be $p_1, p_2, \dotsc, p_n$.
These will be arranged on the circumference of a circle $C$, dividing $C$ into $n$ arcs of equal length.
Once we have chosen the first side of $P$, the others are all the same length and are completely determined by that first side.

Without loss of generality, the first vertex of $P$ is chosen to be $p_1$
We can choose that first side as follows:

$p_1 p_2, p_1 n_3, \ldots, p_1 p_{n - 1}, p_1 p_n$
But we have that:

$\size {p_1 p_2} = \size {p_1 p_n}$
$\size {p_1 p_3} = \size {p_1 p_{n - 1} }$
and so on, down to:

$\size {p_1 p_{\paren {n - 1} / 2} }= \size {p_1 p_{\paren {n + 1} / 2} }$
where $\size {p_a p_b}$ denotes the length of the line $p_1 p_b$.
So for the $n - 1$ lines that are chosen for the first side of $P$, each is paired with another of the same length.
Hence there are $\dfrac {n - 1} 2$ ways of choosing the first side of $P$.
Thus there are $\dfrac {n - 1} 2$ distinct regular stellated $n$-gons.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-3}$ Wilson's Theorem: Theorem $\text {3-5}$




