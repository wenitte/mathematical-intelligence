# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_First-Countable

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is first-countable.


Proof
Let $x \in S: x \ne p$.
Consider the set $U_x = \set {x, p} \subseteq S$.
Now let $V \in \tau_p$ be an open set in $S$ such that $x \in V$.
So $x \in V$, by definition of $V$, and $p \in V$ as $V$ is open.
It follows directly that $U_x \subseteq V$.
So $\set {U_x}$ is a local basis at $x$ which is (trivially) countable.
If $x = p$ then $U_x = \set p$ and the same argument still applies.
So every element of $T$ has a countable local basis.
Hence $T$ is first-countable by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $7$




