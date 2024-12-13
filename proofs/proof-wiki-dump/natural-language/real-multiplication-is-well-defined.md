# 

Source: https://proofwiki.org/wiki/Real_Multiplication_is_Well-Defined

Theorem
The operation of multiplication on the set of real numbers $\R$ is well-defined.


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}$, where $\eqclass {\sequence {x_n} } {}$ and $\eqclass {\sequence {y_n} } {}$ are such equivalence classes.
From the definition of real multiplication, $x \times y$ is defined as $\eqclass {\sequence {x_n} } {} \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n \times y_n} } {}$.

We need to show that:

$\sequence {x_n}, \sequence {x'_n} \in \eqclass {\sequence {x_n} } {}, \sequence {y_n}, \sequence {y'_n} \in \eqclass {\sequence {y_n} } {} \implies \sequence {x_n \times y_n} = \sequence {x'_n \times y'_n}$
That is:

$\forall \epsilon > 0: \exists N: \forall i, j > N: \size {\paren {x_i \times y_i} - \paren {x'_j \times y'_j} } < \epsilon$

As $\eqclass {\sequence {x_n} } {}$ and $\eqclass {\sequence {y_n} } {}$ are Cauchy sequences, from Cauchy Sequence in Metric Space is Bounded they are bounded.
Let $B_x = 2 \map \sup {\sequence {x_n} }$ and $B_y = 2 \map \sup {\sequence {y_n} }$.
Let $B = \max \set {B_x, B_y}$.

Now let $\epsilon > 0$. Then:

$\exists N_1: \forall i, j > N_1: \size B \size {x_i - x'_j} < \epsilon / 2$
$\exists N_2: \forall i, j > N_2: \size B \size {y_i - y'_j} < \epsilon / 2$
Now let $N = \max \set {N_1, N_2}$.
Then we have:

$\forall i, j \ge N: \size B \size {x_i - x'_j} + \size B \size {y_i - y'_j} < \epsilon$
So:














\(\ds \epsilon\)

\(>\)







\(\ds \size B \size {x_i - x'_j} + \size B \size {y_i - y'_j}\)




















\(\ds \)

\(\ge\)







\(\ds \size {B \paren {x_i - x'_j} + B \paren {y_i - y'_j} }\)





Triangle Inequality














\(\ds \)

\(\ge\)







\(\ds \size {\paren {x_i - x'_j} \paren {y_i + y'_j} + \paren {y_i - y'_j} \paren {x_i + x'_j} }\)




















\(\ds \)

\(=\)







\(\ds \size {x_i y_i - x'_j y_i + x_i y'_j - x'_j y'_j + x_i y_i + x'_j y_i - x_i y'_j - x'_j y'_j}\)




















\(\ds \)

\(=\)







\(\ds \size {2 x_i y_i - 2 x'_j y'_j}\)




















\(\ds \)

\(=\)







\(\ds \size {x_i y_i - x'_j y'_j}\)









Hence the result.
$\blacksquare$





