# 

Source: https://proofwiki.org/wiki/Isomorphism_between_Algebraic_Structures_induces_Isomorphism_between_Induced_Structures

Theorem
Let $A$ be a set.
Let $\struct {S, \odot}$ and $\struct {T, \otimes}$ be algebraic structures.
Let:

$S^A$ denote the set of mappings from $A$ to $S$
$T^A$ denote the set of mappings from $A$ to $T$.
Let:

$\struct {S^A, \odot}$ denote the algebraic structure on $S^A$ induced by $\odot$
$\struct {T^A, \otimes}$ denote the algebraic structure on $T^A$ induced by $\otimes$.

Let $\phi$ be an isomorphism from $S$ to $T$.
Let $\chi: S^A \to T^A$ be the mapping defined as:

$\forall f \in S^A: \map \chi f = \phi \circ f$
where:

$\phi \circ f$ denotes the composition of $\phi$ with $f$.
Then:

$\chi$ is an isomorphism from $\struct {S^A, \odot}$ to $\struct {T^A, \otimes}$


Proof
Let $f: A \to S$ and $g: A \to S$ be arbitrary elements of $S^A$.
We have that $\phi$ is an isomorphism.
Hence $\phi$ is a fortiori a homomorphism which is a bijection.
Hence, from Bijection iff exists Mapping which is Left and Right Inverse, $\phi$ has an inverse mapping $\phi^{-1}: T \to S$ such that:

$\phi \circ \phi^{-1} = I_T$
$\phi^{-1} \circ \phi = I_S$
where $I_S$ and $I_T$ denote the identity mappings on $S$ and $T$ respectively.
From Inverse of Bijection is Bijection, $\phi^{-1}$ is also a bijection.

We have that:














\(\ds \map \chi {f \odot g}\)

\(=\)







\(\ds \phi \circ \paren {f \odot g}\)





Definition of $\chi$














\(\ds \)

\(=\)







\(\ds \paren {\phi \circ f} \otimes \paren {\phi \circ g}\)





Composition of Mappings is Left Distributive over Homomorphism of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \map \chi f \otimes \map \chi g\)





Definition of $\chi$



demonstrating that $\chi$ is a homomorphism.
$\Box$

Then:














\(\ds \map \chi f\)

\(=\)







\(\ds \map \chi g\)





by assumption








\(\ds \leadsto \ \ \)





\(\ds \phi \circ f\)

\(=\)







\(\ds \phi \circ g\)





Definition of $\chi$








\(\ds \leadsto \ \ \)





\(\ds \phi^{-1} \circ \phi \circ f\)

\(=\)







\(\ds \phi^{-1} \circ \phi \circ g\)





as $\phi$ is a bijection








\(\ds \leadsto \ \ \)





\(\ds f\)

\(=\)







\(\ds g\)









Hence $\chi$ is an injection.
$\Box$

Let $g: A \to T$ be an arbitrary element of $T^A$.
As $\phi^{-1}: T \to S$ is a bijection:

$\exists h \in S^A: h = \map {\phi^{-1} } g = \phi^{-1} \circ g$
That is:

$\exists h \in S^A: \map \phi h = g$
As $g$ is arbitrary:

$\forall g \in T^A: \exists h \in S^A: g = \phi \circ h = \map \chi h$
That is, $\chi$ is a surjection.
$\Box$

We have shown that $\chi$ is:

an injection
a surjection
a homomorphism
and so by definition $\chi$ is an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.11 \ \text{(c)}$




