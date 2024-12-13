# 

Source: https://proofwiki.org/wiki/Kernel_of_Magma_Homomorphism_is_Submagma

Theorem
Let $\struct {S, *}$ be a magma.
Let $\struct {T, \circ}$ be an algebraic structure with an identity $e$.
Let $\phi: S \to T$ be a homomorphism.

Then the kernel of $\phi$ is a submagma of $\struct {S, *}$.

That is:

$\struct {\map {\phi^{-1} } e, *}$ is a submagma of $\struct {S, *}$
where $\map {\phi^{-1} } e$ denote the preimage of $e$.


Proof
Let $x, y \in \map {\phi^{-1} } e$.
By the definition of a magma, $S$ is closed under $*$.
That is:

$\forall x, y \in S: x * y \in S$
Hence:

$x * y \in \Dom \phi$
It is to be shown that:

$x * y \in \map {\phi^{-1} } e$
Thus:














\(\ds x, y\)

\(\in\)







\(\ds \map {\phi^{-1} } e\)





by hypothesis








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds e\)





Definition of Kernel of Magma Homomorphism












\(\, \ds \land \, \)

\(\ds \map \phi y\)

\(=\)







\(\ds e\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x \circ \map \phi y\)

\(=\)







\(\ds e\)





Definition of Identity Element








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi {x * y}\)

\(=\)







\(\ds e\)





Definition of Homomorphism (Abstract Algebra)








\(\ds \leadstoandfrom \ \ \)





\(\ds x*y\)

\(\in\)







\(\ds \map {\phi^{-1} } e\)





Definition of Preimage of Element under Mapping




Hence the result.
$\blacksquare$





