# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_not_Compact

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space.

Then $T$ is not a compact space.


Proof
From the definition, $T$ is a compact space if every open cover of $T$ has a finite subcover.

Let $N \subset S$ be a countably infinite set such that $p \notin N$.
Then $\relcomp S N$ is open in $T$ by the definition of the Fortissimo space.
Let $q \in S$ such that $q \ne p$.
As $p \in \relcomp S {\set q}$ it follows that $\set q$ is open in $T$.
Then:

$\ds S = \relcomp S N \cup \paren {\bigcup_{q \mathop \in N} \set q}$
Let $\CC$ be defined as:

$\CC := \set {\set q: q \in N} \cup \set {\relcomp S N}$
Then from the above, $\CC$ is an open cover of $S$.
But all the sets of $\CC$ are pairwise disjoint.
Therefore $\CC$ can have no finite subcover.
Hence the space cannot be compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $1$




