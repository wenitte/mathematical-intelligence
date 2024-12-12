# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Semigroups



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Let $\struct {S, \circ}$ be a semigroup.

Then $\struct {T, *}$ is also a semigroup.


Proof
As $\struct {S, \circ}$ is a semigroup, then by definition it is closed.
As $\phi$ is an epimorphism, it is by definition surjective.
That is:

$T = \phi \sqbrk S$
where $\phi \sqbrk S$ denotes the image of $S$ under $\phi$.
From Morphism Property Preserves Closure it follows that $\struct {T, *}$ is closed.

As $\struct {S, \circ}$ is a semigroup, then by definition $\circ$ is associative.
From Epimorphism Preserves Associativity, $*$ is therefore also associative.

So:

$\struct {T, *}$ is closed
and:

$*$ is associative.
Therefore, by definition, $\struct {T, *}$ is a semigroup.
$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.


Also see
Isomorphism Preserves Semigroups
Epimorphism Preserves Associativity
Epimorphism Preserves Commutativity
Epimorphism Preserves Identity
Epimorphism Preserves Inverses
Epimorphism Preserves Groups
Epimorphism Preserves Distributivity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.2$: Corollary
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.1$




