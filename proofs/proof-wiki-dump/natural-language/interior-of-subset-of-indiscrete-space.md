# 

Source: https://proofwiki.org/wiki/Interior_of_Subset_of_Indiscrete_Space

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Let $H \subsetneqq S$ (that is, let $H$ be a proper subset of $S$).

Then:

$H^\circ = H^{\circ -} = H^{\circ - \circ} = \O$
where:

$H^\circ$ denotes the interior of $H$
$H^-$ denotes the closure of $H$.


Proof
As $H \subsetneqq S$, it follows that $H \ne S$.
So the only open subset of $H$ is $\O$.
So by definition:

$H^\circ = \O$
From Empty Set is Closed in Topological Space, $\O$ is closed in $T$.
From Closed Set Equals its Closure:

$\O^- = \O$
From Empty Set is Element of Topology, $\O$ is open in $T$.
From Interior of Open Set:

$\O^\circ = \O$
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $6$




