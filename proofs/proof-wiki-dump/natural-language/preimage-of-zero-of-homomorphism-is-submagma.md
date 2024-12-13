# 

Source: https://proofwiki.org/wiki/Preimage_of_Zero_of_Homomorphism_is_Submagma

Theorem
Let $\struct {S, *}$ be a magma.
Let $\struct {T, \circ}$ be a magma with a zero element $0$.
Let $\phi: S \to T$ be a magma homomorphism.

Then $\struct {\phi^{-1} \sqbrk 0, *}$ is a submagma of $\struct {S, *}$.


Proof
Let $x, y \in \phi^{-1} \sqbrk 0$.
It is to be shown that:

$x * y \in \phi^{-1} \sqbrk 0$
Thus:














\(\ds x, y \in \phi^{-1} \sqbrk 0\)

\(\leadstoandfrom\)







\(\ds \paren {\map \phi x = 0} \land \paren {\map \phi y = 0}\)





Definition of Preimage of Element under Mapping














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi x \circ \map \phi y = 0\)





Definition of Zero Element














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi {x * y} = 0\)





Definition of Homomorphism (Abstract Algebra)














\(\ds \)

\(\leadstoandfrom\)







\(\ds x * y \in \phi^{-1} \sqbrk 0\)





Definition of Preimage of Element under Mapping



Hence the result.
$\blacksquare$





