# 

Source: https://proofwiki.org/wiki/Particular_Point_Topology_with_Three_Points_is_not_T4



Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space such that $S$ is not a singleton or a doubleton.
That is, such that $S$ has more than two distinct elements.

Then $T$ is not a $T_4$ space.


Proof
We have that there are at least three elements of $S$.
So, consider $x, y, p \in S: x \ne y, x \ne p, y \ne p$.
Then $X = \set x, Y = \set y$ are closed in $T$ and $X \cap Y = \O$.
Suppose $U, V \in \tau_p$ are open sets in $T$ such that $X \subseteq U, Y \subseteq V$.
But as $p \in U, p \in V$ we have that $U \cap V \ne \O$.
So $T$ is not a $T_4$ space.
$\blacksquare$


Also see
Sierpiński Space is $T_4$
Sierpiński Space is $T_5$


Mistakes in Sources
Non-Trivial Particular Point Topology is not T4
See 1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Part $\text {II}$: Counterexamples: $8 \text { - } 10: \ 4$ where it is stated that:

Every particular point topology is $T_0$, but since there are no disjoint open sets, none of the higher separation axioms are satisfied unless $X$ has only one point.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $4$




