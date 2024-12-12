# 

Source: https://proofwiki.org/wiki/Complete_Graph_is_Hamiltonian_for_Order_Greater_than_2

Theorem
Let $n \in \Z$ be an integer such that $n > 2$.
Let $K_n$ denote the complete graph of order $n$.

Then $K_n$ is Hamiltonian.


Proof
First we note that when $n = 2$ there is one edge in $K_n$.
So if you start at one vertex $u$ and travel along that edge to the other vertex $v$, you cannot return to $u$ except by using that same edge.
Consequently $K_2$ is not Hamiltonian.
$\Box$

Let $n = 4$.
Let us take two vertices $u, v$ of $K_n$:

From Complete Graph is Regular, the degrees of $u$ and $v$ are given by:

$\map \deg u = \map \deg v = n - 1$
Let us remove the edge $u v$ which joins them.
Let the resulting graph be denoted $G$.
We now have that:

$\map \deg u = \map \deg v = n - 2$
From Ore's Theorem, $G$ is Hamiltonian if for each pair of non-adjacent vertices $u, v \in V$:

$\deg u + \deg v \ge n$
In $G$, we have that:
Hence:














\(\ds \deg u + \deg v\)

\(=\)







\(\ds 2 \paren {n - 2}\)




















\(\ds \)

\(=\)







\(\ds n + \paren {n - 4}\)




















\(\ds \)

\(\ge\)







\(\ds n\)





as $n \ge 4$



Thus $G$ is Hamiltonian.
A Hamiltonian graph with another edge added is still Hamiltonian.
Thus restoring the edge $u v$ to $G$ to turn it back into $K_n$ means that $K_n$ is Hamiltonian.
$\Box$

When $n = 3$ we cannot use this theorem, as you then find for the resulting $G$:

$\deg u + \deg v = 2$
which is less than $3$.
Instead we inspect the complete graph $K_3$ and see it is is the cycle graph $C_3$


The result follows from Cycle Graph is Hamiltonian.
$\blacksquare$





