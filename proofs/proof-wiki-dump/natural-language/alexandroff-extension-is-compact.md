# 

Source: https://proofwiki.org/wiki/Alexandroff_Extension_is_Compact

Theorem
Let $T = \struct {S, \tau}$ be a non-empty topological space.
Let $p$ be a new element not in $S$.
Let $S^* := S \cup \set p$.
Let $T^* = \struct {S^*, \tau^*}$ be the Alexandroff extension on $S$.

Then $T^*$ is a compact topological space.


Proof
Let $\UU$ be an open cover of $T^*$.
At least one $V \in \UU$ contains $p$.
Because $p \notin S$, $V$ is not an open set of $T$.
Therefore, by definition of the Alexandroff extension, $V$ must be the complement relative to $S^*$ of a closed, compact subset $\relcomp {S^*} V$ of $T$.
Because $\relcomp {S^*} V$ is compact, it can be covered by a finite number of sets in $\UU$.
So:

$T^*$ can be covered by $V$
and:

that finite number of sets in $\UU$ are a cover for $\relcomp {S^*} V$.
That is, $\UU$ has a finite subcover.
Hence the result by definition of compact topological space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $34$. One Point Compactification Topology: $1$




