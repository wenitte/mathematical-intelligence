# 

Source: https://proofwiki.org/wiki/Divisor_Relation_in_Integral_Domain_is_Transitive



Theorem
Let $\struct {D, +, \circ}$ be an integral domain.
Let $x, y, z \in D$.

Then:

$x \divides y \land y \divides z \implies x \divides z$


Corollary
The divisibility relation is a transitive relation on $\Z$, the set of integers.
That is:

$\forall x, y, z \in \Z: x \divides y \land y \divides z \implies x \divides z$


Proof
Let $x \divides y \land y \divides z$.
Then from the definition of divisor, we have:

$x \divides y \iff \exists s \in D: y = s \circ x$
$y \divides z \iff \exists t \in D: z = t \circ y$

Then:

$z = t \circ \paren {s \circ x} = \paren {t \circ s} \circ x$
Thus:

$\exists \paren {t \circ s} \in D: z = \paren {t \circ s} \circ x$
and the result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 26$. Divisibility: Theorem $49 \ \text{(i)}$




