# 

Source: https://proofwiki.org/wiki/Real_Addition_Identity_is_Zero



Theorem
The identity of real number addition is $0$:

$\exists 0 \in \R: \forall x \in \R: x + 0 = x = 0 + x$


Corollary
$\forall x, y \in \R: x + y = x \implies y = 0$


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}$, where $\eqclass {\sequence {x_n} } {}$ and $\eqclass {\sequence {y_n} } {}$ are such equivalence classes.
From the definition of real addition, $x + y$ is defined as $\eqclass {\sequence {x_n} } {} + \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n + y_n} } {}$.
Let $\sequence {0_n}$ be such that $\forall i: 0_n = 0$.
Then we have:














\(\ds \eqclass {\sequence {0_n} } {} + \eqclass {\sequence {x_n} } {}\)

\(=\)







\(\ds \eqclass {\sequence {0_n + x_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {0 + x_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {}\)









Similarly for $\eqclass {\sequence {x_n} } {} + \eqclass {\sequence {0_n} } {}$.
Thus the identity element of $\struct {\R, +}$ is the real number $0$.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.2$ Operations with Real Numbers: $(7)$




