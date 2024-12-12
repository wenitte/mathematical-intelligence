# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Identity



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Let $\struct {S, \circ}$ have an identity element $e_S$.

Then $\struct {T, *}$ has the identity element $\map \phi {e_S}$.


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity $e_S$.
Then:

$\forall x \in S: x \circ e_S = x = e_S \circ x$
Thus:

$\forall x \in S: x \circ e_S, e_S \circ x \in \Dom \phi$
Hence:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi {x \circ e_S}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \map \phi x * \map \phi {e_S}\)





Definition of Morphism Property



and:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi {e_S \circ x}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \map \phi {e_S} * \map \phi x\)





Definition of Morphism Property



The result follows because every element $y \in T$ is of the form $\map \phi x$ with $x \in S$.
$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.


Also see
Group Homomorphism Preserves Identity
Epimorphism Preserves Associativity
Epimorphism Preserves Commutativity
Epimorphism Preserves Inverses
Epimorphism Preserves Semigroups
Epimorphism Preserves Groups
Epimorphism Preserves Distributivity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.1$




