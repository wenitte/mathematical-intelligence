# 

Source: https://proofwiki.org/wiki/Composite_of_Reflexive_Relations_is_Reflexive

Theorem
Let $A$ be a set.
Let $\RR$ and $\SS$ be reflexive relations on $A$.
Then their composite $\RR \circ \SS$ is also reflexive.


Proof
Recall the definition of composition of relations:
Let $\RR_1 \subseteq S_1 \times T_1$ and $\RR_2 \subseteq S_2 \times T_2$ be relations.

Then the composite of $\RR_1$ and $\RR_2$ is defined and denoted as:

$\RR_2 \circ \RR_1 := \set {\tuple {x, z} \in S_1 \times T_2: \exists y \in S_2 \cap T_1: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}$

Hence in this particular context:

$\RR \circ \SS := \set {\tuple {x, z} \in A \times A: \exists y \in A: \tuple {x, y} \in \SS \land \tuple {y, z} \in \RR}$

Let $x \in A$ be arbitrary.
By definition of reflexive relation:

$\tuple {x, x} \in \SS$
$\tuple {x, x} \in \RR$
and so setting $y = z = x$:

$\tuple {x, x} \in \set {\tuple {x, z} \in A \times A: \exists y \in A: \tuple {x, y} \in \SS \land \tuple {y, z} \in \RR}$
Hence the result.
$\blacksquare$





