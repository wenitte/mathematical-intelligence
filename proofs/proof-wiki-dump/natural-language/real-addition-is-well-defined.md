# 

Source: https://proofwiki.org/wiki/Real_Addition_is_Well-Defined

Theorem
The operation of addition on the set of real numbers $\R$ is well-defined.


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers:

$\eqclass {\sequence {x_n} } {} \equiv \eqclass {\sequence {y_n} } {} \iff \forall \epsilon > 0: \exists n \in \N: \forall i, j > n: \size {x_i - y_j} < \epsilon$

Let $x = \eqclass {\sequence {x_n} } {}$ and $y = \eqclass {\sequence {y_n} } {}$, where $\eqclass {\sequence {x_n} } {}$ and $\eqclass {\sequence {y_n} } {}$ are such equivalence classes.
From the definition of real addition, $x + y$ is defined as:

$\eqclass {\sequence {x_n} } {} + \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n + y_n} } {}$.

We need to show that:

$\sequence {x_n}, \sequence {x'_n} \in \eqclass {\sequence {x_n} } {}, \sequence {y_n}, \sequence {y'_n} \in \eqclass {\sequence {y_n} } {} \implies \sequence {x_n + y_n} = \sequence {x'_n + y'_n}$
That is:

$\forall \epsilon > 0: \exists N: \forall i, j > N: \size {\paren {x_i + y_i} - \paren {x'_j + y'_j} } < \epsilon$

Let $\epsilon > 0$, such that:

$\exists N_1: \forall i, j \ge N_1: \size {x_i - x'_j} < \epsilon / 2$
$\exists N_2: \forall i, j \ge N_2: \size {y_i - y'_j} < \epsilon / 2$
Now let $N = \max \set {N_1, N_2}$.
Then we have:

$\forall i, j \ge N: \size {x_i - x'_j} + \size {y_i - y'_j} < \epsilon$
But:














\(\ds \epsilon\)

\(>\)







\(\ds \size {x_i - x'_j} + \size {y_i - y'_j}\)




















\(\ds \)

\(>\)







\(\ds \size {\paren {x_i - x'_j} + \paren {y_i - y'_j} }\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \size {\paren {x_i + y_i} - \paren {x'_j + y'_j} }\)









So:

$\forall i, j \ge N: \size {\paren {x_i + y_i} - \paren {x'_j + y'_j} } < \epsilon$
Hence the result.
$\blacksquare$





