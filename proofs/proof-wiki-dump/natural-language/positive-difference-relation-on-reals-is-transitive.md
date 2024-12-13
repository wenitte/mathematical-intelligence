# 

Source: https://proofwiki.org/wiki/Positive_Difference_Relation_on_Reals_is_Transitive

Theorem
Let $P \subseteq \R$ be a subset of the real numbers such that:

$(1): \quad 1 \in P$
$(2): \quad a, b \in P \implies a + b \in P$
$(3): \quad$ For all $x \in \R$, exactly one of these is true:
$x \in P$
$x = 0$
$-x \in P$

Let $Q \subseteq \R \times \R$ be the relation on $\R$ defined as:

$Q = \set {\tuple {a, b} \in \R:  a - b \in P}$

Then $Q$ is a transitive relation.


Proof
Let $a - b \in P$ and $b - c \in P$.
By condition $(2)$:

$\paren {a - b} + \paren {b - c} \in P$
Simplifying:

$a - c \in P$
The result follows by definition of transitive relation.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $1$




