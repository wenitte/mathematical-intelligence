# 

Source: https://proofwiki.org/wiki/Boubaker%27s_Theorem/Proof_of_Uniqueness

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring.
Let $\struct {D, +, \circ}$ be an integral subdomain of $R$ whose zero is $0_D$ and whose unity is $1_D$.
Let $X \in R$ be transcendental over $D$.
Let $D \sqbrk X$ be the ring of polynomial forms in $X$ over $D$.

Consider the following properties:




\(\text {(1)}: \quad\)









\(\ds \sum_{k \mathop = 1}^N {\map {p_n} 0}\)

\(=\)







\(\ds -2N\)










\(\text {(2)}: \quad\)









\(\ds \sum_{k \mathop = 1}^N {\map {p_n} {\alpha_k} }\)

\(=\)







\(\ds 0\)










\(\text {(3)}: \quad\)









\(\ds \valueat {\sum_{k \mathop = 1}^N \frac {\d \map {p_x} x} {\d x} } {x \mathop = 0}\)

\(=\)







\(\ds 0\)










\(\text {(4)}: \quad\)









\(\ds \valueat {\sum_{k \mathop = 1}^N \frac {\d \map { {p_n}^2} x} {\d x^2} } {x \mathop = 0}\)

\(=\)







\(\ds \frac 8 3 N \paren {N^2 - 1}\)









where, for a given positive integer $n$, $p_n \in D \sqbrk X$ is a non-null polynomial such that $p_n$ has $N$ roots $\alpha_k$ in $F$.

Then the subsequence $\sequence {\map {B_{4 n} } x}$ of the Boubaker polynomials is the unique polynomial sequence of $D \sqbrk X$ which verifies simultaneously the four properties $(1) - (4)$.


Proof
Let:

$\struct {R, +, \circ}$ be a commutative ring
$\struct {D, +, \circ}$ be an integral subdomain of $R$ whose zero is $0_D$ and whose unity is $1_D$
$X \in R$ be transcendental over $D$.
It has been demonstrated that the Boubaker Polynomials sub-sequence $\map {B_{4 n} } x$, defined in $D \sqbrk X$ as:

$\ds \map {B_{4 n} } x = 4 \sum_{p \mathop = 0}^{2 n} \frac {n - p} {4 n - p} \binom {4 n - p} p \paren {-1}^p x^{2 \paren {2 n - p} }$
satisfies the properties:




\(\text {(1)}: \quad\)









\(\ds \sum_{k \mathop = 1}^N {\map {p_n} 0}\)

\(=\)







\(\ds -2N\)










\(\text {(2)}: \quad\)









\(\ds \sum_{k \mathop = 1}^N {\map {p_n} {\alpha_k} }\)

\(=\)







\(\ds 0\)










\(\text {(3)}: \quad\)









\(\ds \valueat {\sum_{k \mathop = 1}^N \frac {\d \map {p_x} x} {\d x} } {x \mathop = 0}\)

\(=\)







\(\ds 0\)










\(\text {(4)}: \quad\)









\(\ds \valueat {\sum_{k \mathop = 1}^N \frac {\d \map { {p_n}^2} x} {\d x^2} } {x \mathop = 0}\)

\(=\)







\(\ds \frac 8 3 N \paren {N^2 - 1}\)









with $\valueat {\alpha_k} {k \mathop = 1 \,.\,.\, N}$ roots of $B_{4 n}$.

Suppose there exists another $4 n$-indexed polynomial $\map {q_{4 n} } x$, with $N$ roots $\valueat {\beta_k} {k \mathop = 1 \,.\,.\, N}$ in $F$ and which also satisfies simultaneously properties $(1)$ to $(4)$.
Let:

$\ds \map {B_{4 n} } x = \sum_{p \mathop = 0}^{2 n} a_{4 n, p} x^{2 \paren {2 n - p} }$
and:

$\ds \map {q_{4 n} } x = \sum_{p \mathop = 0}^{2 n} b_{4 n, p} x^{2 \paren {2 n - p} }$
and:

$\d_{4 n, p} = a_{4 n, p} - b_{4 n, p}$ for $p = 0 \,.\,.\, 2 n$
then, simultaneous expressions of conditions $(1)$ and $(3)$ give:

$\quad \ds \sum_{k \mathop = 1}^N \d_{4 n, 2 n} = 0$
$\quad \ds \sum_{k \mathop = 1}^N \d_{4 n, 2 n - 2} = 0$

It has also been demonstrated that $B_{4 n}$ has exactly $4 n - 2$ real roots inside the domain $\closedint {-2} 2$.
So application of conditions $(3)$ and $(4)$ give $4n-2$ linear equation with variables $\bigvalueat {\d_{4 n, p} } {p \mathop = 0 \,.\,.\, 2 n - 3}$.
Finally, since $B_{4 n}$ contains $2 n$ monomial terms (see definition), we obtain a Cramer system in variables $\bigvalueat {\d_{4 n, p} } {p \mathop = 0 \,.\,.\, 2 n}$, with evident solution:

$\bigvalueat {\d_{4 n, p} } {p \mathop = 0 \,.\,.\, 2 n} = 0$
and consequently:

$\bigvalueat {a_{4 n, p} } {p \mathop = 0 \,.\,.\, 2 n} = \bigvalueat {b_{4 n, p} } {p \mathop = 0 \,.\,.\, 2 n}$
which means:

$\map {q_{4 n} } x = \map {B_{4 n} } x$
$\blacksquare$



This article needs to be linked to other articles.In particular: Several instances of referring back to previously demonstrated results need to be addressed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Source of Name
This entry was named for Boubaker Boubaker.





