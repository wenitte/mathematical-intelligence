# 

Source: https://proofwiki.org/wiki/Linear_Mappings_between_Vector_Spaces_form_Vector_Space



Theorem
Let $\struct {F, +, \times}$ be a field whose unity is $1_F$.
Let $X, Y$ be vector spaces over the same field $\struct {F, +, \times}$.
Let $\map \LL {X, Y}$ be the set of linear mappings.
Let $x \in X$.
Define pointwise addition $T + S \in \map \LL {X, Y}$ such that:

$\forall x \in X: \map {\paren {T + S} } x := \map T x + \map S x$
For $\alpha \in F$, define pointwise scalar multiplication $\alpha \cdot T$ such that:

$\forall x \in X: \map {\paren {\alpha \cdot T} } x := \alpha \cdot \map T x$
Let $\mathbf 0: X \to Y$ be the zero mapping.

Then $\struct {\map \LL {X, Y}, +, \, \cdot \,}$ is a vector space over $\struct {F, +, \times}$.


Proof
Let $T, S, P \in \map \LL {X, Y}$ such that:

$T, S, P: X \to Y$
Let $\lambda, \mu \in F$.


Vector Space Axiom $(\text V 0)$: Closure
$\forall x \in X: \map T x, \map S x \in Y$.
By assumption, $Y$ is a vector space.
By Vector Space Axiom $(\text V 0)$: Closure, $T + S \in \map \LL {X, Y}$
$\Box$


Vector Space Axiom $(\text V 1)$: Commutativity
$\forall x \in X: \map T x, \map S x \in Y$.
By assumption, $Y$ is a vector space.
By Vector Space Axiom $(\text V 1)$: Commutativity, $T + S = S + T$
$\Box$


Vector Space Axiom $(\text V 2)$: Associativity
$\forall x \in X: \map T x, \map S x, \map P x \in Y$.
By assumption, $Y$ is a vector space.
By Vector Space Axiom $(\text V 2)$: Associativity, $\paren {T + S} + P = T + \paren {S + P}$.
$\Box$


Vector Space Axiom $(\text V 3)$: Identity













\(\ds \map {\paren {\mathbf 0 + T} } x\)

\(=\)







\(\ds \map {\mathbf 0} x + \map T x\)





Definition of Pointwise Addition of Linear Transformations














\(\ds \)

\(=\)







\(\ds \mathbf 0_Y + \map T x\)





Definition of Zero Mapping














\(\ds \)

\(=\)







\(\ds \map T x\)





Vector Space Axiom $(\text V 3)$: Identity



$\Box$


Vector Space Axiom $(\text V 4)$: Inverses
We have that:

$\forall x \in X: \map T x \in Y$
By assumption, $Y$ is a vector space.
By Vector Space Axiom $(\text V 4)$: Inverses:

$\forall x \in X  \exists \paren {- \map T x}: \map T x + \paren {-\map T x} = \mathbf 0_Y$

$\Box$


Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition













\(\ds \map {\paren { \paren {\lambda + \mu} \cdot T} } x\)

\(=\)







\(\ds \paren {\lambda + \mu} \cdot \map T x\)





Definition of Pointwise Scalar Multiplication of Linear Operators














\(\ds \)

\(=\)







\(\ds \lambda \cdot \map T x + \mu \cdot \map T x\)





$\forall x \in X: \map T x \in Y$, Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \cdot T} } x + \map {\paren {\mu\cdot T} } x\)





Definition of Pointwise Scalar Multiplication of Linear Operators














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \cdot T + \mu \cdot T} } x\)





Definition of Pointwise Addition of Linear Transformations



$\Box$


Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition













\(\ds \lambda \cdot \map {\paren {T + S} } x\)

\(=\)







\(\ds \lambda \cdot \paren {\map T x + \map S x}\)





Definition of Pointwise Addition of Linear Transformations














\(\ds \)

\(=\)







\(\ds \lambda \cdot \map T x + \lambda \cdot \map S x\)





$\forall x \in X: \map T x, \map S x \in Y$, Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \cdot T} } x + \map {\paren {\lambda \cdot S} } x\)





Definition of Pointwise Scalar Multiplication of Linear Operators














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \cdot T + \mu \cdot S} } x\)





Definition of Pointwise Addition of Linear Transformations



$\Box$


Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication













\(\ds \map {\paren {\paren {\lambda \times \mu} \cdot T} } x\)

\(=\)







\(\ds \paren {\lambda \times \mu} \cdot \map T x\)





Definition of Pointwise Scalar Multiplication of Linear Operators














\(\ds \)

\(=\)







\(\ds \lambda \cdot \paren {\mu \cdot \map T x}\)





$\forall x \in X: \map T x \in Y$, Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication














\(\ds \)

\(=\)







\(\ds \lambda \cdot \map {\paren {\mu \cdot T} } x\)





Definition of Pointwise Scalar Multiplication of Linear Operators














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \cdot \paren {\mu \cdot T} } } x\)





Definition of Pointwise Scalar Multiplication of Linear Operators



$\Box$


Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication













\(\ds \map {\paren {1_F \cdot T} } x\)

\(=\)







\(\ds 1_F \cdot \map T x\)





Definition of Pointwise Scalar Multiplication of Linear Operators














\(\ds \)

\(=\)







\(\ds \map T x\)





$\forall x \in X : \map T x \in Y$, Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




