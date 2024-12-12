# 

Source: https://proofwiki.org/wiki/Empty_Set_is_Nowhere_Dense

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Then the empty set $\O$ is nowhere dense in $T$.


Proof
From Empty Set is Closed in Topological Space, $\O$ is closed in $T$.
From Closed Set Equals its Closure:

$\O^- = \O$
where $\O^-$ is the the closure of $\O$.
From Empty Set is Element of Topology, $\O$ is open in $T$.
From the definition (trivially) we also have that:

$\O^\circ = \O$
where $\O^\circ$ is the interior of $\O$.
So:

$\struct {\O^-}^\circ = \O$
and so by definition $\O$ is nowhere dense in $T$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $5$




