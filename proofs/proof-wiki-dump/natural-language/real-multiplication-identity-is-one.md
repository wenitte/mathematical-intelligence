# 

Source: https://proofwiki.org/wiki/Real_Multiplication_Identity_is_One



Theorem
The identity element of real number multiplication is the real number $1$:

$\exists 1 \in \R: \forall a \in \R_{\ne 0}: a \times 1 = a = 1 \times a$


Corollary
$\forall x \in \R_{\ne 0}: x \times y = x \implies y = 1$


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}$, where $\eqclass {\sequence {x_n} } {}$ and $\eqclass {\sequence {y_n} } {}$ are such equivalence classes.
From the definition of real multiplication, $x \times y$ is defined as:

$\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n \times y_n} } {}$

Let $\sequence {1_n}$ be such that $\forall i: 1_n = 1$.
Then we have:














\(\ds \eqclass {\sequence {1_n} } {} \times \eqclass {\sequence {x_n} } {}\)

\(=\)







\(\ds \eqclass {\sequence {1_n \times x_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {1 \times x_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {}\)










Similarly for $\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {1_n} } {}$.

So the identity element of $\struct {\R_{\ne 0}, \times}$ is the real number $1$.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.2$ Operations with Real Numbers: $(7)$




