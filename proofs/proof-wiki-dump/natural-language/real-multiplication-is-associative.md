# 

Source: https://proofwiki.org/wiki/Real_Multiplication_is_Associative

Theorem
The operation of multiplication on the set of real numbers $\R$ is associative:

$\forall x, y, z \in \R: x \times \paren {y \times z} = \paren {x \times y} \times z$


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}, z = \eqclass {\sequence {z_n} } {}$, where $\eqclass {\sequence {x_n} } {}$, $\eqclass {\sequence {y_n} } {}$ and $\eqclass {\sequence {z_n} } {}$ are such equivalence classes.
From the definition of real multiplication, $x \times y$ is defined as $\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n \times y_n} } {}$.

Thus we have:














\(\ds x \times \paren {y \times z}\)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {} \times \paren {\eqclass {\sequence {y_n} } {} \times \eqclass {\sequence {z_n} } {} }\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n \times z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n \times \paren {y_n \times z_n} } } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {\paren {x_n \times y_n} \times z_n} } {}\)





Rational Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n \times y_n} } {} \times \eqclass {\sequence {z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \paren {\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} } \times \eqclass {\sequence {z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times z\)









$\blacksquare$


Sources
1957: Tom M. Apostol: Mathematical Analysis ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: $\text{1-2}$ Arithmetical properties of real numbers: Axiom $2$
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.2$ Operations with Real Numbers: $(4)$




