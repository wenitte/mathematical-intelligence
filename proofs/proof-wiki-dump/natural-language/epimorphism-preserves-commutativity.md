# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Commutativity



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Let $\circ$ be a commutative operation.

Then $*$ is also a commutative operation.


Proof

This article needs proofreading.In particular: Check validity of proof for the case of $S$ being the empty setIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ is commutative.
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ is associative.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Suppose $S$ is the empty set.
It follows from the definition of an epimorphism that:
$\phi$ is a surjective homomorphism
By Empty Mapping to Empty Set is Bijective, the empty map is bijective
By definition of bijection, the empty map is an epimorphism.
Therefore, suppose $\phi$ is the empty map, which is indeed an epimorphism.

By definition of a homomorphism, $\phi$ can be defined as:

$\forall \O \in S: \map \phi {\O \circ \O} = \map \phi \O * \map \phi \O$
By Image of Empty Set is Empty Set, $T$ is also the empty set.
It follows from the definition of the homomorphism that the binary operations $\circ$ and $*$ are also the empty map.
Hence, it is vacuously true that $\circ$ is commutative on $S$, when $S$ is empty, as required.

Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ is commutative.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Suppose $S$ is non-empty.
As an epimorphism is surjective, it follows that:

$\forall u, v \in T: \exists x, y \in S: \map \phi x = u, \map \phi y = v$
So:














\(\ds u * v\)

\(=\)







\(\ds \map \phi x * \map \phi y\)





Definition of Surjection














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {y \circ x}\)





Definition of Commutative Operation














\(\ds \)

\(=\)







\(\ds \map \phi y * \map \phi x\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds v * u\)





by definition as above



$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.


Also see
Epimorphism Preserves Associativity
Epimorphism Preserves Identity
Epimorphism Preserves Inverses
Epimorphism Preserves Semigroups
Epimorphism Preserves Groups
Epimorphism Preserves Distributivity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.1$




