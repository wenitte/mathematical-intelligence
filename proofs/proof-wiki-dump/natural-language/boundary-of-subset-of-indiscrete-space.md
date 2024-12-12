# 

Source: https://proofwiki.org/wiki/Boundary_of_Subset_of_Indiscrete_Space

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Let $\O \subsetneq H \subsetneq S$ (that is, let $H$ be a non-empty proper subset of $T$).

Then:

$\partial H = S$
where $\partial H$ denotes the boundary of $H$.

If $H = \O$ or $H = S$ then $\partial H = \O$.


Proof
From Closure of Subset of Indiscrete Space, $H^- = S$, where $H^-$ denotes set closure.
From Interior of Subset of Indiscrete Space, $H^\circ = \O$, where $H^\circ$ denotes set interior.
By definition:

$\partial H = H^- \setminus H^\circ = S \setminus \O = S$

From Open and Closed Sets in Topological Space, $\O$ and $S$ are both closed and open in $T$.
So from Set Clopen iff Boundary is Empty:

$\partial H = \O$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $6$




