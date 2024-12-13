# 

Source: https://proofwiki.org/wiki/Induced_Structure_from_Doubleton_is_Isomorphic_to_External_Direct_Product_with_Self

Theorem
Let $A$ be a set.
Let $\struct {S, \odot}$ be an algebraic structure.
Let $S^A$ denote the set of mappings from $A$ to $S$.
Let $\struct {S^A, \odot}$ denote the algebraic structure on $S^A$ induced by $\odot$.

Then $\struct {S^A, \odot}$ is isomorphic to the external direct product of $\struct {S, \odot}$ with itself.


Proof
Let $A = \set {a, b}$ where $a$ and $b$ are arbitrary.
Let $\phi: S^A \to S^2$ be defined as:

$\forall f \in S^A: \map \phi f = \tuple {\map f a, \map f b}$

We are to show that $\phi$ is an isomorphism.

First we demonstrate that $\phi$ is a homomorphism.
So, let $f, g \in S^A$.
Recall that:

by definition of pointwise operation:
$\forall f, g \in S^A: \map {\paren {f \odot g} } x = \map f x \odot \map g x$
by definition of external direct product:
$\forall \tuple {x_1, x_2}, \tuple {y_1, y_2} \in S \times S: \tuple {x_1, x_2} \odot \tuple {y_1, y_2} = \tuple {x_1 \odot y_1, x_2 \odot y_2}$

We have:














\(\ds \map \phi {f \odot g}\)

\(=\)







\(\ds \tuple {\map {\paren {f \odot g} } a, \map {\paren {f \odot g} } b}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \tuple {\map f a \odot \map g a, \map f b \odot \map g b}\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \tuple {\map f a, \map f b} \odot {\map g a, \map g b}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \map \phi f \odot \map \phi g\)





Definition of $\phi$



and so $\phi$ has been shown to be a homomorphism.
$\Box$

It remains to be shown that $\phi$ is a bijection.
Let $\map \phi f = \map \phi g$.

We have:














\(\ds \map \phi f\)

\(=\)







\(\ds \map \phi g\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {\map f a, \map f b}\)

\(=\)







\(\ds \tuple {\map g a, \map g b}\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \map f a\)

\(=\)







\(\ds \map g a\)





Equality of Ordered Pairs












\(\, \ds \land \, \)

\(\ds \map f b\)

\(=\)







\(\ds \map g b\)














\(\ds \leadsto \ \ \)





\(\ds f\)

\(=\)







\(\ds g\)





Equality of Mappings



Thus by definition $\phi$ is an injection.

Let $\tuple {s_1, s_2} \in S$ be arbitrary.
By the nature of $S^A$, there exists a mapping $h: A \to S$ such that:

$\map h a = s_1$
$\map h b = s_2$
Hence:

$\map \phi h = \tuple {s_1, s_2}$
As $\tuple {s_1, s_2}$ is arbitrary, it follows that $\phi$ is a surjection.

Thus $\phi$ is both an injection and a surjection, hence by definition a bijection.
$\Box$

We have that $\phi$ is a homomorphism which is a bijection.
That is, $\phi$ is an isomorphism.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.11 \ \text{(d)}$




