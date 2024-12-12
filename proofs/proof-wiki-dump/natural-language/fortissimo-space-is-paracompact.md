# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_Paracompact

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space.

Then $T$ is a paracompact space.


Proof
Let $\CC$ be an open cover of $T$.
Let $U_p \in \CC$ be an open set in that cover which contains $p$.
All the points of $S \setminus U_p$ are open points by definition of Fortissimo space.
Then $\DD = \set {\set s: s \in S \setminus U_p} \cup \set {U_p}$ is an open refinement of $\CC$.
Take $k \in S$:

If $k = p$, then $U_p$ is a neighbourhood of $k$ which intersects only with $U_p$ from all the subsets in $\DD$
If $k \ne p$, then $\set k$ is a neighbourhood of $k$ which intersects only with $\set k$ from all the subsets in $\DD$
Thus $\DD$ is by definition locally finite.

Hence, by definition, $T$ is a paracompact space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $1$




