# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_Preserves_Transitivity

Theorem
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be relational structures.
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be (relationally) isomorphic.

Then $\RR_1$ is a transitive relation if and only if $\RR_2$ is a transitive relation.


Proof
Let $\phi: S \to T$ be a relation isomorphism.
By Inverse of Relation Isomorphism is Relation Isomorphism it follows that $\phi^{-1}: T \to S$ is also a relation isomorphism.
Without loss of generality, it is therefore sufficient to prove only that if $\RR_1$ is transitive, then $\RR_2$ is also transitive.

So, suppose $\RR_1$ is a transitive relation.

Let $y_1, y_2, y_3 \in T$ such that $y_1 \mathrel {\RR_2} y_2$ and $y_2 \mathrel {\RR_2} y_3$.
Let $x_1 = \map {\phi^{-1} } {y_1}$, $x_2 = \map {\phi^{-1} } {y_2}$ and $x_3 = \map {\phi^{-1} } {y_3}$.
As $\phi$ is a bijection it follows from Inverse Element of Bijection that:

$y_1 = \map \phi {x_1}$
$y_2 = \map \phi {x_2}$
$y_3 = \map \phi {x_3}$

As $\phi^{-1}$ is a relation isomorphism it follows that:

$x_1 = \map {\phi^{-1} } {y_1} \mathrel {\RR_1} \map {\phi^{-1} } {y_2} = x_2$
$x_2 = \map {\phi^{-1} } {y_2} \mathrel {\RR_1} \map {\phi^{-1} } {y_3} = x_3$
As $\RR_1$ is a transitive relation it follows that:

$x_1 \mathrel {\RR_1} x_3$
As $\phi$ is a relation isomorphism it follows that:

$y_1 = \map \phi {x_1} \mathrel {\RR_2} \map \phi {x_3} = y_3$

Hence if $y_1 \mathrel {\RR_2} y_2$ and $y_2 \mathrel {\RR_2} y_3$, then also:

$y_1 \mathrel {\RR_2} y_3$
Hence, $\RR_2$ is a transitive relation, by definition.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(c)}$




