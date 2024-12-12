# 

Source: https://proofwiki.org/wiki/Domain_of_Composite_Relation

Theorem
Let $\RR_2 \circ \RR_1$ be a composite relation.

Then the domain of $\RR_2 \circ \RR_1$ is the domain of $\RR_1$:

$\Dom {\RR_2 \circ \RR_1} = \Dom {\RR_1}$


Proof
Let $\RR_1 \subseteq S_1 \times S_2$ and $\RR_2 \subseteq S_2 \times S_3$.
The domain of $\RR_1$ is $S_1$.

The composite of $\RR_1$ and $\RR_2$ is defined as:

$\RR_2 \circ \RR_1 = \set {\tuple {x, z}: x \in S_1, z \in S_3: \exists y \in S_2: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}$

From this definition:

$\RR_2 \circ \RR_1 \subseteq S_1 \times S_3$.
Thus the domain of $\RR_2 \circ \RR_1$ is $S_1$.

Thus:

$\Dom {\RR_2 \circ \RR_1} = S_1 = \Dom {\RR_1}$
$\blacksquare$





