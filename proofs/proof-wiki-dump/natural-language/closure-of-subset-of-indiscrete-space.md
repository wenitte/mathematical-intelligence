# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Indiscrete_Space

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Let $\O \subsetneq H \subseteq S$ (that is, let $H$ be a non-empty subset of $T$).

Then:

$H^- = H^{- \circ} = H^{- \circ -} = S$
where:

$H^\circ$ denotes the interior of $H$
$H^-$ denotes the closure of $H$.


Proof
From Limit Points of Indiscrete Space, every point in $S$ is a limit point of $H$.
So from the definition of closure, $H \ne \O \implies H^-= S$.
From the open set axioms, $S$ is open in $T$.
From Interior of Open Set, $S^\circ = S$.
From Underlying Set of Topological Space is Clopen, $S$ is closed in $T$.
From Closed Set Equals its Closure, $S^- = S$.
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $6$




