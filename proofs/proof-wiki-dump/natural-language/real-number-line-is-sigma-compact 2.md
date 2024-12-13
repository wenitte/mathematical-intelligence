# 

Source: https://proofwiki.org/wiki/Real_Number_Line_is_Sigma-Compact

Theorem
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.

Then $\struct {\R, \tau_d}$ is $\sigma$- compact.


Proof
We have that a Real Number Line satisfies all Separation Axioms.
Specifically, $\struct {\R, \tau_d}$ is a Hausdorff space.
Consider $\CC$ the set of subsets of $\R$ defined as:

$\CC = \set {\closedint n {n + 1}: n \in \Z}$
where $\closedint n {n + 1}$ is the closed real interval between successive integers.
By the Heine-Borel Theorem, each element of $\CC$ is compact.
$\CC$ itself is countable, as there is a (trivial) one-to-one-correspondence between $\CC$ and $\Z$.
Every element of $\R$ is contained in at least one of the elements of $\CC$.
Thus $\R$ is the union of $\CC$.
Hence, by definition, $\R$ is $\sigma$-compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $28$. Euclidean Topology: $4$




