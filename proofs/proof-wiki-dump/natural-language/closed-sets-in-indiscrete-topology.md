# 

Source: https://proofwiki.org/wiki/Closed_Sets_in_Indiscrete_Topology

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Let $H \subseteq S$.

$H$ is a closed set of $T$ if and only if either $H = S$ or $H = \O$.


Proof
A set $U$ is closed in a topology $\tau$ if and only if:

$\relcomp S U \in \tau$
where $\relcomp S U$ denotes the complement of $U$ in $S$.
That is, the closed sets are the complements of the open sets.
From Open Sets in Indiscrete Topology, in $\tau = \set {\O, S}$, the only open sets are $\O$ and $S$.
Hence the only closed sets in the indiscrete topology on $S$ are:

$\relcomp S \O = S$ from Relative Complement of Empty Set
and:

$\relcomp S S = \O$ from Relative Complement with Self is Empty Set
as stated.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $2$




