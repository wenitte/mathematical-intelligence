# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Symmetric_Polynomials


This article needs proofreading.In particular: In particular, check the targets for Monomial and the various pages with Monomial in their namesIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $K$ be a field.
Let $f$ a symmetric polynomial over $K$.

Then $f$ can be written uniquely as a polynomial in the elementary symmetric polynomials.


Proof
Let $p \in R := K \sqbrk {x_1, \dotsc, x_n}$ be a symmetric polynomial.
Let $\sigma_1, \dotsc, \sigma_n$ denote the $n$ elementary symmetric polynomials.
Let $<$ be the degree reverse lexicographic monomial order.
Let us denote by $\map {LM} f$ the leading monomial of any $f \in R$, that is to say the unique $<$-largest monomial appearing in $f$.
Then it is straightforward to verify that $\map {LM} {\sigma_k} = x_1 \cdots x_k$ for $1 \le k \le n$:
For $k < n$, any other monomial appearing in $\sigma_k$ must contain a factor $x_j^{\alpha_1}$ with $j > k$ and $\alpha_1 > 0$.
This makes it smaller than $x_1 \cdots x_k$ with respect to $<$.
The case $k = n$ is trivial because $\sigma_n$ consists of only one monomial.

It follows the proof that $p$ may be written as a polynomial in $\sigma_1, \dotsc, \sigma_k$.
Firstly, since $p$ is symmetric, it must have the property:

$\map {LM} p = x_1^{a_1} \dotsm x_n^{a_n}$
with $a_1 \ge a_2 \ge \ldots \ge a_n$.
To see this, assume that $a_i > a_j$ for some $1 \le i < j \le n$.
The monomial:

$x_1^{a_1} \dotsm x_{i - 1}^{a_{i - 1} } \cdot x_i^{a_j} x_j^{a_i} \cdot x_{j + 1}^{a_{j + 1} } \cdots x_n^{a_n}$
must also appear in $p$, and if $a_i > a_j$ then it would be larger than $\map {LM} p$, a contradiction.
Now consider:

$\sigma :=  c \sigma_1^{a_1 - a_2} \cdot \sigma_2^{a_2 - a_3} \cdot \dotsm \cdot \sigma_{n - 1}^{a_{n - 1} - a_n} \cdot \sigma_n^{a_n}$
where $c$ is the coefficient of $\map {LM} p$ in $p$.

Define $\bar p := p - \sigma$.
Because:














\(\ds \map {LM} \sigma\)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map {LM} {\sigma_i^{a_i - a_{i + 1} } }\)




















\(\ds \)

\(=\)







\(\ds x_1^{a_1 - a_2} \cdot \paren {x_1 x_2}^{a_2 - a_3} \cdot \dotsm \cdot \paren {x_1 \ldots x_{n - 1} }^{a_{n - 1} - a_n} \cdot \paren {x_1 \ldots x_n}^{a_n}\)




















\(\ds \)

\(=\)







\(\ds x_1^{a_1} \dotsm x_n^{a_n}\)




















\(\ds \)

\(=\)







\(\ds \map {LM} p\)









the leading monomials in the difference $\bar p$ cancel.

Therefore:

$\map {LM} {\bar p} < \map {LM} p$
Iterate this method, and after finitely many steps one has decomposed $p$ into a polynomial $F \in K \sqbrk {y_1, \dotsc, y_n}$ with $\map F {\sigma_1, \dotsc, \sigma_n} = p$.
The termination of this algorithm follows immediately from Dickson's Lemma.
$\blacksquare$





