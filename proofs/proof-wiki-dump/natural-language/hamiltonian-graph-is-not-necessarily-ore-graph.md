# 

Source: https://proofwiki.org/wiki/Hamiltonian_Graph_is_not_necessarily_Ore_Graph

Theorem
Let $G = \struct {V, E}$ be a simple graph of order $n \ge 3$.
Let $G$ be a Hamiltonian graph.

Then $G$ is not necessarily an Ore graph.


Proof
Proof by Counterexample:
Recall the definition of an Ore graph:

For each pair of non-adjacent vertices $u, v \in V$:
$\deg u + \deg v \ge n$

Let $n \in \N$ such that $n \ge 5$.
Consider the cycle graph $C_n$.
We have from Cycle Graph is Hamiltonian that $C_n$ is a Hamiltonian graph.
We also have from Cycle Graph is 2-Regular that all the vertices of $C_n$ are of degree $2$.
Let $u, v \in C_n$ such that $u$ and $v$ are non-adjacent.
Such a pair is always possible to find in $C_n$.
Then:

$\deg u + \deg v  = 4 < n$
so $C_n$ is not an Ore graph.
$\blacksquare$


Also see
Dirac's Theorem
Ore's Theorem




