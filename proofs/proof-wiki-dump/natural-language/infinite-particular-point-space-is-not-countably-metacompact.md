# 

Source: https://proofwiki.org/wiki/Infinite_Particular_Point_Space_is_not_Countably_Metacompact

Theorem
Let $T = \struct {S, \tau_p}$ be an infinite particular point space.

Then $T$ is not countably metacompact.


Proof
Suppose $T$ is a countable particular point space.
Let $\CC$ be the open cover of $T$ defined as:

$\CC = \set {\set {x, p}: x \in S}$
$\CC$ is countable and has no open refinement except $\CC$ itself.
But $\CC$ is not point finite because $\forall U \in \CC: p \in U$, and $\CC$ is (countably) infinite.

Now suppose $T$ is an uncountable particular point space.
Let $S' \subseteq S$ be a countable subset of $S$.

Let $\CC$ be the open cover of $T$ defined as:

$\CC = \set {\set {x, p}: x \in S'} \cup \set {S \setminus S' \cup \set p}$

$\CC$ is also countable and has no open refinement except $\CC$ itself.

And similarly, $\CC$ is not point finite because $\forall U \in \CC: p \in U$, and $\CC$ is (countably) infinite.

Hence the result by definition of countably metacompact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $9 \text { - } 10$. Infinite Particular Point Topology: $19$




