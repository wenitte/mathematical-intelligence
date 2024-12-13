# 

Source: https://proofwiki.org/wiki/Ore%27s_Theorem



Theorem
Let $G = \struct {V, E}$ be a simple graph of order $n \ge 3$.
Let $G$ be an Ore graph, that is:

For each pair of non-adjacent vertices $u, v \in V$:
$(1): \quad \deg u + \deg v \ge n$

Then $G$ is Hamiltonian.


Proof
From Ore Graph is Connected it is not necessary to demonstrate that $G$ is connected.

Aiming for a contradiction, suppose it were possible to construct a graph that fulfils condition $(1)$ which is not Hamiltonian.
For a given $n \ge 3$, let $G$ be the graph with the most possible edges such that $G$ is non-Hamiltonian which satisfies $(1)$.

Although it does not contain a Hamilton cycle, $G$ has to contain a Hamiltonian path $\tuple {v_1, v_2, \ldots, v_n}$.
Otherwise it would be possible to add further edges to $G$ without making $G$ Hamiltonian.

Since $G$ is not Hamiltonian, $v_1$ is not adjacent to $v_n$, otherwise $\tuple {v_1, v_2, \ldots, v_n, v_1}$ would be a Hamilton cycle.
By $(1)$, we have that:

$\deg v_1 + \deg v_n \ge n$
By the Pigeonhole Principle, for some $i$ such that $2 \le i \le n - 1$, $v_i$ is adjacent to $v_1$, and $v_{i - 1}$ is adjacent to $v_n$.
But the cycle $\tuple {v_1, v_2, \ldots, v_{i - 1}, v_n, v_{n - 1}, \ldots, v_i, v_1}$ is then a Hamilton cycle.
So $G$ is Hamiltonian after all.
$\blacksquare$


Also see
Hamiltonian Graph is not necessarily Ore Graph, demonstrating that the converse of Ore's Theorem does not hold.
Dirac's Theorem


Source of Name
This entry was named for Øystein Ore.


Historical Note
Ore's Theorem was demonstrated by Øystein Ore in $1960$.





