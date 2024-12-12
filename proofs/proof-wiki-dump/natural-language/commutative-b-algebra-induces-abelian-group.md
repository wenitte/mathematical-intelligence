# 

Source: https://proofwiki.org/wiki/Commutative_B-Algebra_Induces_Abelian_Group

Theorem
Let $\left({X, \circ }\right)$ be a commutative $B$-algebra.
Let $*$ be the binary operation on $X$ defined as:

$\forall a, b \in X: a * b := a \circ \left({0 \circ b}\right)$

Then the algebraic structure $\left({X, *}\right)$ is an abelian group such that:

$\forall x \in X: 0 \circ x$ is the inverse element of $x$ under $*$.

That is:

$\forall a, b \in X: a * b^{-1} := a \circ b$


Proof
From B-Algebra Induces Group, the algebraic structure $\left({X, *}\right)$ is a group such that:

$\forall x \in X: 0 \circ x$ is the inverse element of $x$ under $*$.

It remains to show that $*$ is a commutative operation.
Let $x, y \in X$:














\(\ds x * y\)

\(=\)







\(\ds x \circ \left({0 \circ y}\right)\)





by definition of $*$














\(\ds \)

\(=\)







\(\ds y \circ \left({0 \circ x}\right)\)





by definition of commutative $B$-algebra














\(\ds \)

\(=\)







\(\ds y * x\)





by definition of $*$



Hence the result.
$\blacksquare$


Also see
Abelian Group Induces Commutative $B$-Algebra




