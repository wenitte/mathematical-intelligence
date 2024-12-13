# 

Source: https://proofwiki.org/wiki/Real_Multiplication_Distributes_over_Addition/Algebraic_Proof

Theorem
The operation of multiplication on the set of real numbers $\R$ is distributive over the operation of addition:

$\forall x, y, z \in \R:$
$x \times \paren {y + z} = x \times y + x \times z$
$\paren {y + z} \times x = y \times x + z \times x$


Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}, z = \eqclass {\sequence {z_n} } {}$, where $\eqclass {\sequence {x_n} } {}$, $\eqclass {\sequence {y_n} } {}$ and $\eqclass {\sequence {z_n} } {}$ are such equivalence classes.
From the definition of real multiplication, $x \times y$ is defined as:

$\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n \times y_n} } {}$
From the definition of real addition, $x + y$ is defined as:

$\eqclass {\sequence {x_n} } {} + \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n + y_n} } {}$
Thus:














\(\ds x \times \paren {y + z}\)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {} \times \paren {\eqclass {\sequence {y_n} } {} + \eqclass {\sequence {z_n} } {} }\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n + z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n \times \paren {y_n + z_n} } } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {\paren {x_n \times y_n} + \paren {x_n \times z_n} } } {}\)





Rational Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n \times y_n} } {} + \eqclass {\sequence {x_n \times z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \paren {\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} } + \paren {\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {z_n} } {} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times z}\)









By Real Addition is Commutative and Real Multiplication is Commutative, it follows that:

$\paren {y + z} \times x = \paren {y \times x} + \paren {z \times x}$
$\blacksquare$





