# 

Source: https://proofwiki.org/wiki/Affine_Group_of_One_Dimension_as_Semidirect_Product

Theorem
Let $\map {\operatorname{Af}_1} \R$ be the $1$-dimensional affine group on $\R$.
Let $\R^+$ be the additive group of real numbers.
Let $\R^\times$ be the multiplicative group of real numbers.
Let $\phi: \R^\times \to \Aut {\R^+}$ be defined as:

$\forall b \in \R^\times: \map \phi b = \paren {a \mapsto a b}$
Let $\R^+ \rtimes_\phi \R^\times$ be the corresponding semidirect product.

Then:

$\map {\operatorname {Af}_1} \R \cong \R^+ \rtimes_\phi \R^\times$
where $\cong$ denotes (group) isomorphism.


Proof
By definition, a (group) isomorphism is a (group) homomorphism which is a bijection.

Recall the definition of underlying set of $1$-dimensional affine group on $\R$:

$S = \set {f_{a b}: x \mapsto a x + b : a \in \R_{\ne 0}, b \in \R}$
So the bijection $\psi: \map {\operatorname {Af}_1} \R \to \R^+ \rtimes_\phi \R^\times$ defined by $\map \psi {f_{a b} } = \paren {b, a}$ arises naturally.

It remains to show that $\psi$ is a (group) homomorphism:

Let $f_{a b}, f_{c d} \in \map {\operatorname {Af}_1} \R$.
Then:














\(\ds \map {f_{a b} \circ f_{c d} } x\)

\(=\)







\(\ds \map {f_{a b} } {\map {f_{c d} } x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f_{a b} } { c x + d }\)





Definition of Affine Group of One Dimension














\(\ds \)

\(=\)







\(\ds a \paren {c x + d} + b\)





Definition of Affine Group of One Dimension














\(\ds \)

\(=\)







\(\ds \paren{ a \paren{c x } + a d } + b\)





Real Number Axiom $\R \text D$: Distributivity of Multiplication over Addition














\(\ds \)

\(=\)







\(\ds a \paren{c x } + \paren{a d + b }\)





Real Number Axiom $\R \text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds \paren{a c } x + \paren{a d + b }\)





Real Number Axiom $\R \text M1$: Associativity of Multiplication














\(\ds \)

\(=\)







\(\ds f_{\paren {a c} \paren {a d + b} }\)





Definition of Affine Group of One Dimension




Let $\tuple {b, a}, \tuple {d, c} \in \R^+ \rtimes_\phi \R^\times$.
Then:














\(\ds \tuple {b, a} \tuple {d, c}\)

\(=\)







\(\ds \paren {b + \map {\map \phi a} d, a c}\)





Definition of Semidirect Product














\(\ds \)

\(=\)







\(\ds \paren {b + a d, a c}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {a d + b, a c}\)





Real Addition is Commutative




So:

$\map \psi {f_{a b} } \, \map \psi {f_{c d} } = \map \psi {f_{a b} \circ f_{c d} }$
So the bijection $\psi$ is a (group) homomorphism, and thus a (group) isomorphism.
$\blacksquare$


Also see
Affine Group as Semidirect Product




