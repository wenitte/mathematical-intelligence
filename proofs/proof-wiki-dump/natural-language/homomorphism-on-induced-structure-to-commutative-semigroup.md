# 

Source: https://proofwiki.org/wiki/Homomorphism_on_Induced_Structure_to_Commutative_Semigroup

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\struct {T, \oplus}$ be a commutative semigroup.
Let $T^S$ be the set of all mappings from $S$ to $T$.
Let $f$ and $g$ be homomorphisms from $S$ into $T$.
Let $f \oplus' g$ be the pointwise operation on $T^S$ induced by $\oplus$.

Then $f \oplus' g$ is a homomorphism from $\struct {S, \circ}$ into $\struct {T, \oplus}$.


Proof
Let $\struct {T, \oplus}$ be a commutative semigroup.
Let $x, y \in S$.
Then:














\(\ds \map {\paren {f \oplus' g} } {x \circ y}\)

\(=\)







\(\ds \map f {x \circ y} \oplus \map g {x \circ y}\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \paren {\map f x \oplus \map f y} \oplus \paren {\map g x \oplus \map g y}\)





$f$ and $g$ are homomorphisms














\(\ds \)

\(=\)







\(\ds \paren {\map f x \oplus \map g x} \oplus \paren {\map f y \oplus \map g y}\)





$\oplus$ is Commutative and Associative














\(\ds \)

\(=\)







\(\ds \map {\paren {f \oplus' g} } x \oplus \map {\paren {f \oplus' g} } Y\)





Definition of Pointwise Operation



$\blacksquare$

Notice that for this to work, $\oplus$ needs to be both associative and commutative.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.7: \ 1^\circ$




