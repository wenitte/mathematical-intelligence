# 

Source: https://proofwiki.org/wiki/Multiplication_of_Polynomials_is_Commutative

Theorem
Multiplication of polynomials is commutative.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\set {X_j: j \in J}$ be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\set {X_j: j \in J}$.
Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
$\ds g = \sum_{k \mathop \in Z} b_k \mathbf X^k$
be arbitrary polynomials in the indeterminates $\set {X_j: j \in J}$ over $R$.
Then:














\(\ds f \circ g\)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {\sum_{p \mathop + q \mathop = k} a_p b_q} \mathbf X^k\)





Definition of Polynomial Multiplication














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {\sum_{p \mathop + q \mathop = k} a_q b_p} \mathbf X^k\)





Addition of multiindices is commutative, and $p$ and $q$ are bound variables














\(\ds \)

\(=\)







\(\ds g \circ f\)





Definition of Polynomial Multiplication



Therefore, $f \circ g = g \circ f$ for all polynomials $f$ and $g$.
Therefore, polynomial multiplication is commutative.
$\blacksquare$





