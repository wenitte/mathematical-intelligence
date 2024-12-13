# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_Preserves_Symmetry

Theorem
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be relational structures.
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be (relationally) isomorphic.

Then $\RR_1$ is a symmetric relation if and only if $\RR_2$ is also a symmetric relation.


Proof
Let $\phi: S \to T$ be a relation isomorphism.
By Inverse of Relation Isomorphism is Relation Isomorphism it follows that $\phi^{-1}: T \to S$ is also a relation isomorphism.
Without loss of generality, it suffices to prove only that if $\RR_1$ is symmetric, then also $\RR_2$ is symmetric.

So, suppose $\RR_1$ is a symmetric relation.

Let $y_1, y_2 \in T$ such that $y_1 \mathrel {\RR_2} y_2$.
Let $x_1 = \map {\phi^{-1} } {y_1}$ and $x_2 = \map {\phi^{-1} } {y_2}$.
As $\phi$ is a bijection it follows from Inverse Element of Bijection that $y_1 = \map \phi {x_1}$ and $y_2 = \map \phi {x_2}$.

As $\phi^{-1}$ is a relation isomorphism it follows that:

$x_1 = \map {\phi^{-1} } {y_1} \mathrel {\RR_1} \map {\phi^{-1} } {y_2} = x_2$
As $\RR_1$ is a symmetric relation it follows that:

$x_2 \mathrel {\RR_1} x_1$
As $\phi$ is a relation isomorphism it follows that:

$y_2 = \map \phi {x_2} \mathrel {\RR_2} \map \phi {x_1} = y_1$

So:

$y_1 \mathrel {\RR_2} y_2 \implies y_2 \mathrel {\RR_2} y_1$
and so by definition $\RR_2$ is a symmetric relation.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(c)}$




