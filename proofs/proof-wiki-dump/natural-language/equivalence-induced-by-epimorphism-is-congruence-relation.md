# 

Source: https://proofwiki.org/wiki/Equivalence_Induced_by_Epimorphism_is_Congruence_Relation

Theorem
Let $\struct {S, \oplus}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \oplus} \to \struct {T, *}$ be an epimorphism.
Let $\RR_\phi$ be the equivalence induced by $\phi$.

Then the induced equivalence $\RR_\phi$ is a congruence relation for $\oplus$.


Proof
Let $x, x', y, y' \in S$ such that:

$x \mathrel {\RR_\phi} x' \land y \mathrel {\RR_\phi} y'$

By definition of induced equivalence:














\(\ds x \mathrel {\RR_\phi} x'\)

\(\leadsto\)







\(\ds \map \phi x = \map \phi {x'}\)




















\(\ds y \mathrel {\RR_\phi} y'\)

\(\leadsto\)







\(\ds \map \phi y = \map \phi {y'}\)










Then:














\(\ds \map \phi {x \oplus y}\)

\(=\)







\(\ds \map \phi x * \map \phi y\)





Definition of Epimorphism (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \map \phi {x'} * \map \phi {y'}\)





equality shown above














\(\ds \)

\(=\)







\(\ds \map \phi {x' \oplus y'}\)





Definition of Epimorphism (Abstract Algebra)




Thus $\paren {x \oplus y} \mathrel {\RR_\phi} \paren {x' \oplus y'}$ by definition of induced equivalence.
So $\RR_\phi$ is a congruence relation for $\oplus$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.5$




