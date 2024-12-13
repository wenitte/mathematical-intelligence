# 

Source: https://proofwiki.org/wiki/Inverse_Mapping_in_Induced_Structure_of_Homomorphism_to_Abelian_Group

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\struct {T, \oplus}$ be an abelian group.
Let $f$ be a homomorphism from $S$ into $T$.
Let $f^*$ be the pointwise inverse of $f$.

Then $f^*$ is a homomorphism from $\struct {S, \circ}$ into $\struct {T, \oplus}$.


Proof
Let $\struct {T, \oplus}$ be an abelian group.
Let $x, y \in S$.
Then:














\(\ds \map {f^*} {x \circ y}\)

\(=\)







\(\ds \paren {\map f {x \circ y} }^{-1}\)





Definition of Pointwise Inverse














\(\ds \)

\(=\)







\(\ds \paren {\map f x \oplus \map f y}^{-1}\)





$f$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \paren {\map f y \oplus \map f x}^{-1}\)





Commutativity of $\oplus$














\(\ds \)

\(=\)







\(\ds \paren {\map f x}^{-1} \oplus \paren {\map f y}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \map {f^*} x \oplus \map {f^*} y\)





Definition of Pointwise Inverse



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.7: \ 2^\circ$




