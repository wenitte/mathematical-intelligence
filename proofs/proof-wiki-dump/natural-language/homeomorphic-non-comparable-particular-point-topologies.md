# 

Source: https://proofwiki.org/wiki/Homeomorphic_Non-Comparable_Particular_Point_Topologies

Theorem
Let $S$ be a set with at least two elements.
Let $p, q \in S: p \ne q$.
Let $\tau_p$ and $\tau_q$ be the particular point topologies on $S$ by $p$ and $q$ respectively.

Then the topological spaces $T_p = \struct {S, \tau_p}$ and $T_q = \struct {S, \tau_q}$ are homeomorphic.
However, $\tau_p$ and $\tau_q$ are not comparable.


Proof
We can set up the mapping $\phi: S \to S$:

$\forall x \in S: \map \phi x = \begin {cases}
q & : x = p \\
p & : x = q \\
x & : \text {otherwise} \end {cases}$
It is straightforward to show that $\phi$ is a homeomorphism.

However, we have, for example, that $\set q \notin \tau_p$ and $\set p \notin \tau_q$.
So neither $\tau_p$ nor $\tau_q$ are a subset of the other.
Hence by definition $\tau_p$ and $\tau_q$ are not comparable. 
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $8$




