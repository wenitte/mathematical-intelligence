# 

Source: https://proofwiki.org/wiki/Power_of_Real_Number_greater_than_One_is_Unbounded_Above

Theorem
Let $x \in \R$ be a real number such that $x > 1$.
Let set $S = \set {x^n: n \in \N}$.

Then $S$ is unbounded above.


Proof
Aiming for a contradiction, suppose $S$ were bounded above.
Then $S$ has a supremum $B$.
As $x > 1$, it follows that $\dfrac B x < B$ and so therefore $\dfrac B x$ can not be an upper bound.
Therefore:

$\exists n \in \N: x^n > \dfrac B x \implies x^{n + 1} > B$
So $B$ can not be an upper bound.
From that contradiction it can be concluded that $S$ can not have an upper bound.
So by Proof by Contradiction it follows that $S$ is unbounded above.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.6 \ (2)$




