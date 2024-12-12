# 

Source: https://proofwiki.org/wiki/B-Algebra_is_Commutative_iff_x(xy)%3Dy



Theorem
Let $\struct {X, \circ}$ be a $B$-algebra.

Then $\struct {X, \circ}$ is commutative if and only if:

$\forall x, y \in X: x \circ \paren {x \circ y} = y$


Proof
Necessary Condition
Let $x, y \in X$:














\(\ds x \circ \paren {x \circ y}\)

\(=\)







\(\ds \paren {x \circ \paren {0 \circ y} } \circ x\)





Identity: $x \circ \paren {y \circ z} = \paren {x \circ \paren {0 \circ z} }  \circ y$














\(\ds \)

\(=\)







\(\ds \paren {y \circ \paren {0 \circ x} } \circ x\)





$\struct {X, \circ}$ is commutative














\(\ds \)

\(=\)







\(\ds y \circ \paren {x \circ x}\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds y \circ 0\)





$B$-Algebra Axiom $(\text A 1)$














\(\ds \)

\(=\)







\(\ds y\)





$B$-Algebra Axiom $(\text A 2)$



$\Box$


Sufficient Condition
Let $x, y \in X$:














\(\ds \paren {x \circ \paren {0 \circ y} } \circ y\)

\(=\)







\(\ds x \circ \paren {y \circ \paren {0 \circ \paren {0 \circ y} } }\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x \circ \paren {y \circ y}\)





Identity: $x \circ y = x \circ \paren {0 \circ \paren {0 \circ y} }$














\(\ds \)

\(=\)







\(\ds y \circ \paren {x \circ x}\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x \circ 0\)





$B$-Algebra Axiom $(\text A 2)$














\(\ds \)

\(=\)







\(\ds x\)





$B$-Algebra Axiom $(\text A 1)$














\(\ds \)

\(=\)







\(\ds y \circ \paren {y \circ x}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds y \circ \paren {y \circ \paren {0 \circ \paren {0 \circ x} } }\)





Identity: $x \circ y = x \circ \paren {0 \circ \paren {0 \circ y} }$














\(\ds \)

\(=\)







\(\ds \paren {y \circ \paren {0 \circ x} } \circ y\)





$B$-Algebra Axiom $(\text A 3)$




Hence:

$\paren {x \circ \paren {0 \circ y} } \circ y = \paren {y \circ \paren {0 \circ x} } \circ y$
From $B$-Algebra is Right Cancellable, we have:

$x \circ \paren {0 \circ y} = y \circ \paren {0 \circ x}$
and hence commutativity.
$\blacksquare$





