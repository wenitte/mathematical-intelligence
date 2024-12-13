# 

Source: https://proofwiki.org/wiki/Polynomial_Addition_is_Commutative

Theorem
Addition of polynomials is commutative.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity with zero $0_R$.
Let $\set {X_j: j \in J}$ be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\set {X_j: j \in J}$.

Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
$\ds g = \sum_{k \mathop \in Z} b_k \mathbf X^k$
be arbitrary polynomials in the indeterminates $\set {X_j: j \in J}$ over $R$.

Then:














\(\ds f + g\)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {a_k + b_k} \mathbf X^k\)





Definition of Addition of Polynomial Forms














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {b_k + a_k} \mathbf X^k\)





because addition in $R$ is commutative














\(\ds \)

\(=\)







\(\ds g + f\)





Definition of Addition of Polynomial Forms



So $f + g = g + f$ for all polynomials $f$ and $g$.
Therefore polynomial addition is commutative.
$\blacksquare$





