# 

Source: https://proofwiki.org/wiki/Boundary_of_Boundary_is_not_necessarily_Equal_to_Boundary

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.
Let $\partial H$ denote the boundary of $H$.

While it is true that:

$\map \partial {\partial H} \subseteq \partial H$
it is not necessarily the case that:

$\map \partial {\partial H} = \partial H$


Proof
From Boundary of Boundary is Contained in Boundary, we have that:

$\map \partial {\partial H} \subseteq \partial H$
It remains to be proved that the equality does not always hold.

Proof by Counterexample:
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Let $H \subseteq S$ such that $H \ne \O$ and $H \ne S$.

From Boundary of Subset of Indiscrete Space:

$\partial H = S$

From Boundary of Boundary of Subset of Indiscrete Space:

$\map \partial {\partial H} = \O$
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




