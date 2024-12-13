# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Sandbox

Theorem
Let $\struct {S, *}$ and $\struct {T, \circ}$ be algebraic structures such that $\struct {T, \circ}$ has an identity $e$.
Let $\phi: S \to T$ be a homomorphism.
Let $\map {\phi^{-1} } e$ denote the preimage of $e$.

Then $\struct {\map {\phi^{-1} } e, *}$ is a submagma of $\struct {S, *}$.


Proof
Let $x, y \in \map {\phi^{-1} } e$.
It must be shown that $x*y \in \map {\phi^{-1} } e$.















\(\ds x, y \in \map {\phi^{-1} } e\)

\(\leadstoandfrom\)







\(\ds \paren {\map \phi x = e} \land \paren {\map \phi y = e}\)





Definition of Kernel














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi x \circ \map \phi y = e\)





Definition of Identity Element














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map \phi {x * y} = e\)





Definition of Homomorphism (Abstract Algebra)














\(\ds \)

\(\leadstoandfrom\)







\(\ds x * y \in \map {\phi^{-1} } e\)





Definition of Preimage of Element under Mapping




Hence the result.
$\blacksquare$





