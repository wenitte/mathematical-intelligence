# 

Source: https://proofwiki.org/wiki/Multiplication_of_Polynomials_is_Associative

Theorem
Multiplication of polynomials is associative.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring with unity with zero $0_R$.
To improve readability of the expressions used, we will write the ring product $\circ$ in multiplicative notation.

Let $\set {X_j: j \in J}$ be a set of indeterminates.
Let $Z$ be the set of all multiindices indexed by $\set {X_j: j \in J}$.
Let:

$\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$
$\ds g = \sum_{k \mathop \in Z} b_k \mathbf X^k$
$\ds h = \sum_{k \mathop \in Z} c_k \mathbf X^k$
be arbitrary polynomials in the indeterminates $\set {X_j: j  \in J}$ over $R$.

Then it follows from Polynomials Closed under Ring Product that:

$\ds f \circ \paren {g \circ h} = \sum_{k \mathop \in Z} m_k \mathbf X^k$
for some $m_k \in R$, and:

$\ds \paren {f \circ g} \circ h = \sum_{k \mathop \in Z} n_k \mathbf X^k$
for some $n_k \in R$.
To establish associativity of $\circ$ we compute $m_k$ and $n_k$, and check that they are equal. 

We have:














\(\ds m_k\)

\(=\)







\(\ds \sum_{r + s \mathop = k} a_r \sum_{p + q \mathop = s} b_p c_q\)





Definition of Multiplication of Polynomial Forms














\(\ds \)

\(=\)







\(\ds \sum_{r + s \mathop = k} \, \sum_{p + q \mathop = s} a_r b_p c_q\)





Distributive property of finite sums














\(\ds \)

\(=\)







\(\ds \sum_{p + q + r \mathop = k} a_r b_p c_q\)





Properties of finite sums




This article, or a section of it, needs explaining.In particular: Sorry, but what I meant by "what properties?" was: Links are needed to the appropriate pages, in accordance with the philosophy of $\mathsf{Pr} \infty \mathsf{fWiki}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Similarly we compute:














\(\ds n_k\)

\(=\)







\(\ds \sum_{r + s \mathop = k} \left({ \sum_{p + q \mathop = r} a_p b_q }\right) c_s\)





Definition of Multiplication of Polynomial Forms














\(\ds \)

\(=\)







\(\ds \sum_{r + s \mathop = k} \, \sum_{p + q \mathop = r} a_p b_q c_s\)





Distributive property of finite sums














\(\ds \)

\(=\)







\(\ds \sum_{p + q + s \mathop = k} a_p b_q c_s\)





Properties of finite sums




This article, or a section of it, needs explaining.In particular: again, links are needed to the appropriate pagesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $p$, $q$, $r$ and $s$ are all dummy variables, it follows that $m_k = n_k$ for all $k \in Z$.
Therefore, $f \circ \paren {g \circ h} = \paren {f \circ g} \circ h$ for all polynomials $f$, $g$ and $h$.

Hence multiplication of polynomials is associative.
$\blacksquare$





