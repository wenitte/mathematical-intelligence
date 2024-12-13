# 

Source: https://proofwiki.org/wiki/Intersection_of_Algebra_Ideals_is_Ideal

Theorem
Let $K$ be a field.
Let $A$ be an algebra over $K$.
Let $\family {I_\alpha}_{\alpha \mathop \in I}$ be an $I$-indexed family of ideals of $A$.
Let:

$\ds I = \bigcap_{\alpha \mathop \in I} I_\alpha$

Then $I$ is an ideal of $A$.


Proof
From Set of Linear Subspaces is Closed under Intersection, $I$ is a vector subspace of $A$.
Now, let $a, b \in I$.
Then we have $a, b \in I_\alpha$ for all $\alpha \in I$. 
Since $I_\alpha$ is an ideal for each $\alpha \in I$, we have $a b \in I_\alpha$ and $b a \in I_\alpha$ for each $\alpha \in I$.
Hence we have $a b \in I$ and $b a \in I$. 
So $I$ is an ideal of $A$.
$\blacksquare$





