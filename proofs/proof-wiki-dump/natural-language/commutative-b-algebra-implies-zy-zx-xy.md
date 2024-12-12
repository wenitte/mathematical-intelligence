# 

Source: https://proofwiki.org/wiki/Commutative_B-Algebra_Implies_(zy)(zx)%3Dxy

Theorem
Let $\struct {B, \circ}$ be a commutative $B$-algebra. 

Then:

$\forall x, y, z \in X: \paren {z \circ y} \circ \paren {z \circ x} = x \circ y$


Proof
Let $x, y, z \in X$.
Then:














\(\ds \paren {z \circ y} \circ \paren {z \circ x}\)

\(=\)







\(\ds \paren {\paren {z \circ y} \circ \paren {0 \circ x} } \circ z\)





Identity: $x \circ \paren {y \circ z} = \paren {x \circ \paren {0 \circ z} } \circ y$














\(\ds \)

\(=\)







\(\ds \paren {x \circ \paren {0 \circ \paren {z \circ y} } } \circ z\)





Definition of Commutative $B$-Algebra














\(\ds \)

\(=\)







\(\ds x \circ \paren {z \circ \paren {0 \circ \paren {0 \circ \paren {z \circ y} } } }\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x \circ \paren {z \circ \paren {z \circ y} }\)





Identity: $x \circ y = x \circ \paren {0 \circ \paren {0 \circ y} }$ 














\(\ds \)

\(=\)







\(\ds x \circ y\)





$B$-Algebra is Commutative iff $x \circ \paren {x \circ y} = y$



$\blacksquare$





