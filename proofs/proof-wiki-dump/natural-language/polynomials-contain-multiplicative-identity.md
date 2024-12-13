# 

Source: https://proofwiki.org/wiki/Polynomials_Contain_Multiplicative_Identity

Theorem
The set of polynomials has a multiplicative identity.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity with multiplicative identity $1_R$ and additive identity $0_R$.
Let $\set {X_j: j \in J}$ be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\left\{{X_j: j \in J}\right\}$.

Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
be an arbitrary polynomial in the indeterminates $\set {X_j: j \in J}$ over $R$.

Let:

$\ds N = 1_R \mathbf X^0 = \sum_{k \mathop \in Z} b_k \mathbf X^k$
where $b_k = 0_R$ if $k \ne 0$ and $b_0 = 1_R$.

Then:














\(\ds f \circ N\)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {\sum_{p \mathop + q \mathop = k} a_p b_q} \mathbf X^k\)





Definition of Polynomial Multiplication














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \paren {\sum_{p \mathop + 0 \mathop = k} a_p 1_R} \mathbf X^k\)





by the definition of $b_k$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} a_p \mathbf X^k\)





because $1_R$ is a multiplicative identity














\(\ds \)

\(=\)







\(\ds f\)









Therefore:

$f \circ N = f$
for all polynomials $f$.
Therefore $N$ is a multiplicative identity for the set of polynomials.
$\blacksquare$





