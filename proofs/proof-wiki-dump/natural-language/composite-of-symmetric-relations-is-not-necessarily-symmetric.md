# 

Source: https://proofwiki.org/wiki/Composite_of_Symmetric_Relations_is_not_necessarily_Symmetric

Theorem
Let $A$ be a set.
Let $\RR$ and $\SS$ be symmetric relations on $A$.

Then their composite $\RR \circ \SS$ is not necessarily symmetric.


Proof
Proof by Counterexample:
Let:














\(\ds A\)

\(=\)







\(\ds \set {1, 2, 3}\)




















\(\ds \RR\)

\(=\)







\(\ds \set {\tuple {1, 2}, \tuple {2, 1} }\)




















\(\ds \SS\)

\(=\)







\(\ds \set {\tuple {2, 3}, \tuple {3, 2} }\)









We note that both $\RR$ and $\SS$ are symmetric relations on $A$.

We have by definition of composition of relations that:

$\RR \circ \SS = \set {\tuple {x, z} \in A \times A: \exists y \in A: \tuple {x, y} \in \SS \land \tuple {y, z} \in \RR}$

By inspection, we see that:

$\RR \circ \SS = \set {\tuple {3, 1} }$
demonstrating that $\RR \circ \SS$ is not symmetric.
$\blacksquare$





