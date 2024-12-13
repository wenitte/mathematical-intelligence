# 

Source: https://proofwiki.org/wiki/Restriction_of_Homomorphism_is_Homomorphism

Theorem
Let $\struct {S, \circ}$ and $\struct {T, \odot}$ be algebraic structures.
Let $\phi: S \to T$ be a homomorphism.
Let $A \subseteq S$ be a subset of $S$.

Then the restriction of $\phi$ to $A \times \Img A$ is also a homomorphism.


Proof









\(\ds \forall x, y \in A: \, \)



\(\ds \map \phi {x \circ_A y}\)

\(=\)







\(\ds \map \phi {x \circ y}\)





Definition of Restriction of Operation














\(\ds \)

\(=\)







\(\ds \map \phi x \odot \map \phi y\)





as $x, y \in S$














\(\ds \)

\(=\)







\(\ds \map \phi x \odot_{\Img A} \map \phi y\)





Definition of Restriction of Operation



$\blacksquare$





