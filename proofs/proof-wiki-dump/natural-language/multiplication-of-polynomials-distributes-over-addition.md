# 

Source: https://proofwiki.org/wiki/Multiplication_of_Polynomials_Distributes_over_Addition


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Multiplication of polynomials is left- and right- distributive over addition.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\set {X_j: j \in J}$ be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\set {X_j: j \in J}$.
Let

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
$\ds g = \sum_{k \mathop \in Z} b_k \mathbf X^k$
$\ds h = \sum_{k \mathop \in Z} c_k \mathbf X^k$
be  arbitrary polynomials in the indeterminates $\set{X_j: j \in J}$ over $R$.
By Multiplication of Polynomials is Commutative, it is sufficient to prove that $\circ$ is left distributive over addition only.
Then














\(\ds f \circ \paren {g + h}\)

\(=\)







\(\ds \sum_{k \mathop \in Z} \sum_{p \mathop + q \mathop = k} a_p \paren {b_q + c_q} \mathbf X^k\)





by the definitions of polynomial multiplication and addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \sum_{p \mathop + q \mathop = k} \paren {a_p b_q + a_p c_q} \mathbf X^k\)





by the properties of finite sums














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in Z} \sum_{p \mathop + q \mathop = k} a_p b_q \mathbf  X^k + \sum_{k \mathop \in Z} \sum_{p + q = k} a_p c_q \mathbf X^k\)





by the properties of finite sums














\(\ds \)

\(=\)







\(\ds f \circ g + f \circ h\)





by the definitions of polynomial multiplication and addition



Therefore, $f \circ \paren {g + h} = f \circ g + f \circ h$ for all polynomials $f, g, h$.
Therefore, polynomial multiplication is distributive over addition.
$\blacksquare$





