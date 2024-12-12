# 

Source: https://proofwiki.org/wiki/Functor_between_Order_Categories

Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \preceq'}$ be ordered sets.
Let $\mathbf S$ and $\mathbf T$ be their associated order categories, respectively.
Let $F: \mathbf S \to \mathbf T$ be a functor.

Then its object functor $F: S \to T$ is a monotone mapping.


Proof
Suppose that for some $a, b \in S$, we have:

$a \preceq b$
Then there is a morphism $a \to b$ in $\mathbf S$.

As $F$ is a functor, it follows that there is a morphism:

$F a \to F b$
in $\mathbf T$ as well, that is:

$F a \preceq' F b$

Hence the result.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.4.8$




