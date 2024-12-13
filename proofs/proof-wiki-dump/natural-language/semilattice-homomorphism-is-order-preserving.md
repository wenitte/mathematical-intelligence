# 

Source: https://proofwiki.org/wiki/Semilattice_Homomorphism_is_Order-Preserving

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be semilattices.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a semilattice homomorphism.
Let $\preceq_1$ be the ordering on $S$ defined by:

$a \preceq_1 b \iff \paren {a \circ b} = b$
Let $\preceq_2$ be the ordering on $T$ defined by:

$x \preceq_2 y \iff \paren {x * y} = y$

Then:

$\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$ is order-preserving.


Proof













\(\ds a \preceq_1 b\)

\(\leadstoandfrom\)







\(\ds a \circ b = b\)





Definition of the ordering $\preceq_1$














\(\ds \)

\(\leadsto\)







\(\ds \map \phi { a \circ b} = \map \phi b\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi a * \map \phi b = \map \phi b\)





Definition of Semilattice Homomorphism














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi a \preceq_2 \map \phi b\)





Definition of the ordering $\preceq_2$



$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces ... (previous) ... (next): Chapter $\text I$: Preliminaries, Definition $1.3$




