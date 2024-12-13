# 

Source: https://proofwiki.org/wiki/Polynomial_Addition_is_Associative

Theorem
Addition of polynomials is an associative operation.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\set {X_j: j \in J}$ be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\set {X_j: j \in J}$.

Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
$\ds g = \sum_{k \mathop \in Z} b_k \mathbf X^k$
$\ds h = \sum_{k \mathop \in Z} c_k \mathbf X^k$
be arbitrary polynomials in the indeterminates $\set {X_j: j \in J}$ over $R$.

Then:














\(\ds \paren {f + g} + h\)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {\paren {a_k + b_k} + c_k} \mathbf X^k\)





Definition of Addition of Polynomial Forms twice














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {a_k + \paren {b_k + c_k} } \mathbf X^k\)





because $+$ in $R$ is associative














\(\ds \)

\(=\)







\(\ds f + \paren {g + h}\)





Definition of Addition of Polynomial Forms twice



$\blacksquare$





