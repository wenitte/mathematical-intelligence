# 

Source: https://proofwiki.org/wiki/Multiple_of_Ring_Product

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $x, y \in \struct {R, +, \circ}$.

Then:

$\forall n \in \Z_{> 0}: \paren {n \cdot x} \circ y = n \cdot \paren {x \circ y} = x \circ \paren {n \cdot y}$
where $n \cdot x$ denotes the $n$th multiple of $x$.


Proof
By definition:

$\ds n \cdot x := \sum_{j \mathop = 1}^n x$
Thus:














\(\ds \paren {n \cdot x} \circ y\)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^n x} \circ y\)





Definition of Integral Multiple




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {x \circ y}\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds n \cdot \paren {x \circ y}\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds x \circ \paren {\sum_{j \mathop = 1}^n y}\)





General Distributivity Theorem from $(1)$














\(\ds \)

\(=\)







\(\ds x \circ \paren {n \cdot y}\)





Definition of Integral Multiple



$\blacksquare$





