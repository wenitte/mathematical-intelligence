# 

Source: https://proofwiki.org/wiki/Induced_Structure_Identity

Theorem
Let $\struct {T, \circ}$ be an algebraic structure, and let $S$ be a set.
Let $\struct {T^S, \oplus}$ be the structure on $T^S$ induced by $\circ$.
Let $e$ be an identity for $\circ$.

Then the constant mapping $f_e: S \to T$ defined as:

$\forall x \in S: \map {f_e} x = e$
is the identity for the pointwise operation $\oplus$ induced on $T^S$ by $\circ$.


Proof
Let $\struct {T, \circ}$ be an algebraic structure with an identity $e$.
Let $f \in T^S$.

Then:














\(\ds \map {\paren {f \oplus f_e} } x\)

\(=\)







\(\ds \map f x \circ \map {f_e} x\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \map f x \circ e\)





Definition of Constant Mapping $f_e$














\(\ds \)

\(=\)







\(\ds \map f x\)





$e$ is the identity of $\struct {T, \circ}$














\(\ds \)

\(=\)







\(\ds e \circ \map f x\)





$e$ is the identity of $\struct {T, \circ}$














\(\ds \)

\(=\)







\(\ds \map {f_e} x \circ \map f x\)





Definition of Constant Mapping $f_e$














\(\ds \)

\(=\)







\(\ds \map {\paren {f \oplus f_e} } x\)





Definition of Pointwise Operation



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.6: \ 2^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.4$




