# 

Source: https://proofwiki.org/wiki/0_in_B-Algebra_is_Left_Cancellable_Element

Theorem
Let $\struct {X, \circ}$ be a $B$-Algebra.
Then:

$\forall x, y \in X: 0 \circ x = 0 \circ y \implies x = y$


Proof
Let $x, y \in X$ and let $0 \circ x = 0 \circ y$.
Then:














\(\ds 0\)

\(=\)







\(\ds x \circ x\)





$B$-Algebra Axiom $(\text A 1)$














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ 0\)





$B$-Algebra Axiom $(\text A 2)$














\(\ds \)

\(=\)







\(\ds x \circ \paren {0 \circ \paren {0 \circ x} }\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x \circ \paren {0 \circ \paren {0 \circ y} }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \circ y} \circ 0\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds x \circ y\)





$B$-Algebra Axiom $(\text A 2)$




So we have shown:

$\forall x, y \in X: 0 \circ x = 0 \circ y \implies x \circ y = 0$
From $B$-Algebra Identity: $x \circ y = 0 \iff x = y$:

$\forall x, y \in X: 0 \circ x = 0 \circ y \implies x = y$
Hence the result.
$\blacksquare$





