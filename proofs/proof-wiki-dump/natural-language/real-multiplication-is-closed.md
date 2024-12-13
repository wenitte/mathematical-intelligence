# 

Source: https://proofwiki.org/wiki/Real_Multiplication_is_Closed

Theorem
The operation of multiplication on the set of real numbers $\R$ is closed:

$\forall x, y \in \R: x \times y \in \R$


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}$, where $\eqclass {\sequence {x_n} } {}$ and $\eqclass {\sequence {y_n} } {}$ are such equivalence classes.
From the definition of real multiplication, $x \times y$ is defined as:

$\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n \times y_n} } {}$

We have that:

$\forall i \in \N: x_i \in \Q, y_i \in \Q$
therefore $x_i \times y_i \in \Q$.
So it follows that:

$\eqclass {\sequence {x_n \times y_n} } {} \in \R$
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 2$. Operations: Example $1$
1973: C.R.J. Clapham: Introduction to Mathematical Analysis ... (previous) ... (next): Chapter $1$: Axioms for the Real Numbers: $2$. Fields: Example $1$




