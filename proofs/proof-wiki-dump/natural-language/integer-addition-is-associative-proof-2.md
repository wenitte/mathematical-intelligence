# 

Source: https://proofwiki.org/wiki/Integer_Addition_is_Associative/Proof_2

Theorem
The operation of addition on the set of integers $\Z$ is associative:

$\forall x, y, z \in \Z: x + \paren {y + z} = \paren {x + y} + z$


Proof
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





