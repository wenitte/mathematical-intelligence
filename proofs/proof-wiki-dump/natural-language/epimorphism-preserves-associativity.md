# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Associativity



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Let $\circ$ be an associative operation.

Then $*$ is also an associative operation.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: How necessary really is it to include all this clutter? Is this really the direction we want to go or would the rest of the community be all right with me reversing it out?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ is associative.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.


This article needs proofreading.In particular: Check validity of proof for the case of $S$ being the empty setIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
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
Hence, it is vacuously true that $\circ$ is associative on $S$, when $S$ is empty, as required.

Suppose $S$ is non-empty.
It remains to be shown that:
$\forall u, v, w \in T$, $\exists x, y, z, x \circ y, y \circ z, \paren {x \circ y} \circ z, x \circ \paren {y \circ z } \in \Dom \phi$
And:
$\forall u, v, w \in T, \exists x, y, z \in S: \phi \paren{ x }, \phi \paren{ y }, \phi \paren{ z }, \phi \paren{ x \circ y }, \phi \paren{ y \circ z }, \phi \paren {\paren {x \circ y} \circ z }, \phi \paren{ x \circ \paren {y \circ z } } \in \Cdm \phi$

As an epimorphism is surjective, it follows that:

$\forall u, v, w \in T: \exists x, y, z \in S: \map \phi x = u, \map \phi y = v, \map \phi z = w$
Thus:

$\forall u, v, w \in T: \exists x, y, z \in S: x, y, z \in \Dom \phi$

Similarly, by surjectivity:

$\forall u, v \in T: \exists x, y \in S: \map \phi x = u, \map \phi y = v  \land  \paren{ x \circ y \in S }$
Thus:

$\forall u, v \in T: \exists x, y \in S: x \circ y \in \Dom \phi$

Again, by surjectivity:

$\forall v, w \in T: \exists y, z \in S: \paren{  \map \phi y = v, \map \phi z = w } \land  \paren{ y \circ z \in S }$
Thus:

$\forall v, w \in T: \exists y, z \in S: y \circ z \in \Dom \phi$

As an epimorphism is surjective and $\circ$ is an associative operation:

$\forall u, v, w \in T: \exists x, y, z \in S: \paren{ \map \phi x = u, \map \phi y = v, \map \phi z = w } \land \paren{ {\paren {x \circ y} \circ z} = x \circ \paren {y \circ z } }$
Thus:

$\forall u, v, w \in T, \exists x, y, z \in S: x, y, z \in S: \paren {x \circ y} \circ z, x \circ \paren {y \circ z } \in \Dom \phi$

Hence:
$\forall u, v, w \in T, \exists x, y, z \in S: x, y, z, x \circ y, y \circ z, \paren {x \circ y} \circ z, x \circ \paren {y \circ z } \in \Dom \phi$

As an epimorphism is surjective:
$\forall u, v, w \in T, \exists x, y, z \in S: \phi \paren{ x }, \phi \paren{ y }, \phi \paren{ z }, \phi \paren{ x \circ y }, \phi \paren{ y \circ z }, \phi \paren {\paren {x \circ y} \circ z }, \phi \paren{ x \circ \paren {y \circ z } } \in \Cdm \phi$

Hence:














\(\ds \paren {u * v} * w\)

\(=\)







\(\ds \paren {\map \phi x * \map \phi y} * \map \phi z\)





as $\phi$ is a surjection














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y} * \map \phi z\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {\paren {x \circ y} \circ z}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ \paren {y \circ z} }\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds \map \phi x * \map \phi {y \circ z}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y * \map \phi z}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds u * \paren {v * w}\)





by definition as above



$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.


Also see
Epimorphism Preserves Commutativity
Epimorphism Preserves Identity
Epimorphism Preserves Inverses
Epimorphism Preserves Semigroups
Epimorphism Preserves Groups
Epimorphism Preserves Distributivity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.1$




