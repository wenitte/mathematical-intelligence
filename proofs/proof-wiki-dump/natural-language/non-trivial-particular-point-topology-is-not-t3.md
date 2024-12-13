# 

Source: https://proofwiki.org/wiki/Non-Trivial_Particular_Point_Topology_is_not_T3

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space such that $S$ is not a singleton.

Then $T$ is not a $T_3$ space.


Proof
We have that there are at least two distinct elements of $S$.
So, consider $x, p \in S: x \ne p$.
Then $X = \set x$ is closed in $T$ and $p \notin X$.
Suppose $U \in \tau_p$ is an open set in $T$ such that $X \subseteq U$.
We have that $\set p \in \tau_p$ such that $p \in \set p$.
But as $p \in U, p \in \set p$ we have that $U \cap \set p \ne \O$.
So $T$ is not a $T_3$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $4$




