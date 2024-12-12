# 

Source: https://proofwiki.org/wiki/Composite_of_Total_Relations_is_Total

Theorem
Let $A$ be a set.
Let $\RR$ and $\SS$ be total relations on $A$.

Then their composite $\RR \circ \SS$ is also total.


Proof
Recall the definition of composition of relations:
Let $\RR_1 \subseteq S_1 \times T_1$ and $\RR_2 \subseteq S_2 \times T_2$ be relations.

Then the composite of $\RR_1$ and $\RR_2$ is defined and denoted as:

$\RR_2 \circ \RR_1 := \set {\tuple {x, z} \in S_1 \times T_2: \exists y \in S_2 \cap T_1: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}$

Hence in this particular context:

$\RR \circ \SS := \set {\tuple {x, z} \in A \times A: \exists y \in A: \tuple {x, y} \in \SS \land \tuple {y, z} \in \RR}$

Let $x$ and $y$ in $A$ be arbitrary.
Because $\SS$ is total, either $x \mathrel \SS y$ or $y \mathrel \SS x$.
Without loss of generality, suppose $x \mathrel \SS y$.
From Relation is Connected and Reflexive iff Total, $\RR$ is reflexive.
That is:

$y \mathrel \RR y$
Thus we have:

$\exists y \in A: \tuple {x, y} \in \SS \land \tuple {y, y} \in \RR$
and so by definition of composition of relations:

$\tuple {x, y} \in \RR \circ \SS$

Similarly for $y \mathrel \SS x$:

$\exists x \in A: \tuple {y, x} \in \SS \land \tuple {x, x} \in \RR$
giving:

$\tuple {y, x} \in \RR \circ \SS$

So, by definition, $\RR \circ \SS$ is total.
$\blacksquare$





