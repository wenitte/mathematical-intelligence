# 

Source: https://proofwiki.org/wiki/Functor_between_Monoid_Categories

Theorem
Let $\left({S, \circ}\right)$ and $\left({T, *}\right)$ be monoids.
Let $\mathbf S$ and $\mathbf T$ be the associated monoid categories.
Let $F: \mathbf S \to \mathbf T$ be a functor.

Then the morphism functor $F_1$ of $F$ is a monoid homomorphism.


Proof
By definition of monoid category, we have:

$\mathbf S_1 = S, \mathbf T_1 = T$
which in particular are sets.
Hence the morphism functor $F_1: \mathbf S_1 \to \mathbf T_1$ is a mapping $F_1: S \to T$.

For $F_1$ to be a monoid homomorphism, it suffices to show that the following hold:

$F_1 \left({e_S}\right) = e_T$
$\forall s_1, s_2 \in S: F_1 \left({s_1 \circ s_2}\right) = F_1 \left({s_1}\right) * F_1 \left({s_2}\right)$
Since all $s_1, s_2 \in S$ are composable morphisms of $\mathbf S$, these conditions are exactly equivalent to $F$ being a functor.
Hence the result.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.4.13$




