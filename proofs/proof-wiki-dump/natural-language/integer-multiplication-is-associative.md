# 

Source: https://proofwiki.org/wiki/Integer_Multiplication_is_Associative

Theorem
The operation of multiplication on the set of integers $\Z$ is associative:

$\forall x, y, z \in \Z: x \times \paren {y \times z} = \paren {x \times y} \times z$


Proof
From the formal definition of integers, $\eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.

Let $x = \eqclass {a, b} {}$, $y = \eqclass {c, d} {}$ and $z = \eqclass {e, f} {}$ for some $x, y, z \in \Z$.

Then:














\(\ds x \times \paren {y \times z}\)

\(=\)







\(\ds \eqclass {a, b} {} \times \paren {\eqclass {c, d} {} \times \eqclass {e, f} {} }\)





Definition of Integer














\(\ds \)

\(=\)







\(\ds \eqclass {a, b} {} \times \eqclass {c e + d f, c f + d e} {}\)





Definition of Integer Multiplication














\(\ds \)

\(=\)







\(\ds \eqclass {a \paren {c e + d f} + b \paren {c f + d e}, a \paren {c f + d e} + b \paren {c e + d f} } {}\)





Definition of Integer Multiplication














\(\ds \)

\(=\)







\(\ds \eqclass {a c e + a d f + b c f + b d e, a c f + a d e + b c e + b d f} {}\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \eqclass {a c e + b d e + a d f + b c f, a c f + b d f + a d e + b c e} {}\)





Natural Number Addition is Commutative and Associative














\(\ds \)

\(=\)







\(\ds \eqclass {\paren {a c + b d} e + \paren {a d + b c} f, \paren {a c + b d} f + \paren {a d + b c} e} {}\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \eqclass {a c + b d, a d + b c} {} \times \eqclass {e, f} {}\)





Definition of Integer Multiplication














\(\ds \)

\(=\)







\(\ds \paren {\eqclass {a, b} {} \times \eqclass {c, d} {} } \times \eqclass {e, f} {}\)





Definition of Integer Multiplication














\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times z\)





Definition of Integer



$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.23: \ \text{(ii)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.10$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 1$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$




