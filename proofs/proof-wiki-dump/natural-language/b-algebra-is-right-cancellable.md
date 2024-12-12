# 

Source: https://proofwiki.org/wiki/B-Algebra_is_Right_Cancellable

Theorem
Let $\struct {X, \circ}$ be a $B$-algebra.

Then $\circ$ is right-cancellable for $X$. That is:

$\forall x, y, z \in X: x \circ z = y \circ z \implies x = y$


Proof
Let $x, y \in X$.
Then:














\(\ds \paren {x \circ y} \circ \paren {0 \circ y}\)

\(=\)







\(\ds x \circ \paren {\paren {0 \circ y} \circ \paren {0 \circ y} }\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x \circ 0\)





$B$-Algebra Axiom $(\text A 1)$














\(\ds \)

\(=\)







\(\ds x\)





$B$-Algebra Axiom $(\text A 2)$




Now if for some $z \in X$ we have $x \circ z = y \circ z$, then also:

$\paren {x \circ z} \circ \paren {0 \circ z} = \paren {y \circ z} \circ \paren {0 \circ z}$
which by the above implies $x = y$.

Hence the result.
$\blacksquare$





