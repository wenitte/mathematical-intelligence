# 

Source: https://proofwiki.org/wiki/Integer_Addition_is_Associative



Theorem
The operation of addition on the set of integers $\Z$ is associative:

$\forall x, y, z \in \Z: x + \paren {y + z} = \paren {x + y} + z$


Proof 1
From the formal definition of integers, $\eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.
From Integers under Addition form Abelian Group, the integers under addition form a group, from which associativity follows from Group Axiom $\text G 1$: Associativity.
$\blacksquare$


Proof 2
Let $a, b, c, d, e, f \in \N$ such that:

$x = \eqclass {a, b} {}$, $y = \eqclass {c, d} {}$ and $z = \eqclass {e, f} {}$.

Then:














\(\ds x + \paren {y + z}\)

\(=\)







\(\ds \eqclass {a, b} {} + \paren {\eqclass {c, d} {} + \eqclass {e, f} {} }\)





Definition of Integer














\(\ds \)

\(=\)







\(\ds \eqclass {a, b} {} + \eqclass {c + e, d + f} {}\)





Definition of Integer Addition














\(\ds \)

\(=\)







\(\ds \eqclass {a + \paren {c + e}, b + \paren {d + f} } {}\)





Definition of Integer Addition














\(\ds \)

\(=\)







\(\ds \eqclass {\paren {a + c} + e, \paren {b + d} + f} {}\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds \eqclass {a + c, b + d} {} + \eqclass {e, f} {}\)





Definition of Integer Addition














\(\ds \)

\(=\)







\(\ds \paren {\eqclass {a, b} {} + \eqclass {c, d} {} } + \eqclass {e, f} {}\)





Definition of Integer Addition














\(\ds \)

\(=\)







\(\ds \paren {x + y} + z\)





Definition of Integer



$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 1$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (next): $\S 1$




