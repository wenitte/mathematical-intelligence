# 

Source: https://proofwiki.org/wiki/Ordering_is_Directed_iff_Composite_with_Inverse_is_Trivial_Ordering



Theorem
Let $\struct {S, \RR}$ be an ordered set.

Then $\RR$ is a directed ordering if and only if:

$\RR^{-1} \circ \RR = S \times S$
where:

$\circ$ denotes composite relation
$\RR^{-1}$ denotes inverse relation
$S \times S$ denotes the trivial relation, that is, the Cartesian product of $S$ with itself.


Proof
We are given that $\RR$ is an ordering.


Sufficient Condition
Let $\RR$ be a directed ordering on $S$.

Then by definition:

$\forall x, y \in S: \exists z \in S: x \mathrel \RR z \land y \mathrel \RR z$

By definition of inverse relation:

$\forall x, y \in S: \exists z \in S: z \mathrel {\RR^{-1} } x \land z \mathrel {\RR^{-1} } y$

By definition of composite relation

$\RR^{-1} \circ \RR := \set {\tuple {x, y} \in S \times S: \exists z \in S: \tuple {x, z} \in \RR \land \tuple {z, y} \in \RR^{-1} }$

Let $\tuple {x, y} \in S \times S$ be arbitrary.
Then:

$\exists z \in \RR: \tuple {x, z} \in \R \land \tuple {y, z} \in \R$
That is:

$\exists z \in \RR: \tuple {x, z} \in \R \land \tuple {z, y} \in \R^{-1}$
That is:

$\tuple {x, y} \in \RR^{-1} \circ \RR$
As $\tuple {x, y}$ is arbitrary, it follows that:

$\RR^{-1} \circ \RR = S \times S$
$\Box$


Necessary Condition
Let $\struct {S, \RR}$ be such that:

$\RR^{-1} \circ \RR = S \times S$
Then by definition of composite relation:

$\RR^{-1} \circ \RR = S \times S =  \set {\tuple {x, y} \in S \times S: \exists z \in S: \tuple {x, z} \in \RR \land \tuple {z, y} \in \RR^{-1} }$
That is:

$\forall \tuple {x, y} \in S \times S: \exists z \in S: \tuple {x, z} \in \RR \land \tuple {z, y} \in \RR^{-1}$
That is, by definition of inverse relation:

$\forall \tuple {x, y} \in S \times S: \exists z \in S: \tuple {x, z} \in \RR \land \tuple {y, z} \in \RR$
That is, $\RR$ is a directed ordering.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.28$




