# 

Source: https://proofwiki.org/wiki/Indiscrete_Space_is_Non-Meager

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Then $T$ is non-meager.


Proof
Let $H \subseteq S$ such that $H \ne \O$.
From Limit Points of Indiscrete Space, every point of $S$ is a limit point of $H$.
So, by definition:

$H^- = S$
where $H^-$ is the closure of $H$ in $T$.
Now the interior of $S$ is $S$ itself (trivially, by definition).
So:

$\paren {H^-}^\circ = S \ne \O$
where $\paren {H^-}^\circ$ is the interior of the closure of $H$.
So, by definition, $H$ is not nowhere dense.
(Note that if $H = \O$, then Empty Set is Nowhere Dense applies, which is why the stipulation above that $H \ne \O$.)
It follows that $H$ can not be the countable union of nowhere dense subsets of $S$.
So $H$ is, by definition, not meager, so must be non-meager.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $5$




