# 

Source: https://proofwiki.org/wiki/Inclusion_of_Natural_Numbers_in_Integers_is_Epimorphism



Theorem
Let $\mathbf{Mon}$ be the category of monoids.
Let $\struct {\N, +}$ denote the monoid of natural numbers as on Natural Numbers under Addition form Commutative Monoid.
Let $\struct {\Z, +}$ denote the additive group of integers.
Denote with $\iota: \N \to \Z$ the inclusion mapping.

Then $\iota: \N \to \Z$ is an epimorphism in $\mathbf{Mon}$.


Proof
Let $\struct {M, \circ}$ be a monoid with identity $e$.
Let $f, g: \Z \to M$ be monoid homomorphisms such that:

$f \circ \iota = g \circ \iota$
that is, by definition of inclusion, such that:

$\forall n \in \N: \map f n = \map g n$

Now $\iota$ will be epic if we can show that $f = g$.
The morphism property of $f$ and $g$ yields that, for any $m > 0$:

$\map f {- m} = \map f {-1} \circ \cdots \circ \map f {-1}$
$\map g {- m} = \map g {-1} \circ \cdots \circ \map g {-1}$
with on the right hand side $m$ copies of $\map f {-1}$ and $\map g {-1}$, respectively.
It thus is necessary and sufficient to show that $\map f {-1} = \map g {-1}$.

To this end, compute:














\(\ds \map f {-1}\)

\(=\)







\(\ds \map f {-1} \circ e\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \map f {-1} \circ \map g 0\)





Definition of Monoid Homomorphism














\(\ds \)

\(=\)







\(\ds \map f {-1} \circ \map g {1 + \paren {-1} }\)




















\(\ds \)

\(=\)







\(\ds \map f {-1} \circ \map g 1 \circ \map g {-1}\)





Definition of Monoid Homomorphism














\(\ds \)

\(=\)







\(\ds \map f {-1} \circ \map f 1 \circ \map g {-1}\)





By the assumption on $f$ and $g$














\(\ds \)

\(=\)







\(\ds \map f {\paren {-1} + 1} \circ \map g {-1}\)





Definition of Monoid Homomorphism














\(\ds \)

\(=\)







\(\ds \map f 0 \circ \map g {-1}\)




















\(\ds \)

\(=\)







\(\ds e \circ \map g {-1}\)





Definition of Monoid Homomorphism














\(\ds \)

\(=\)







\(\ds \map g {-1}\)





Definition of Identity Element



Hence the result.
$\blacksquare$


Caution
The theorem statement does not assert that $\iota$ is an abstract-algebraic epimorphism.
This is plainly false, as $\iota$ is not a surjection.


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.1$: Example $2.5$




