# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Positive_Rationals_is_Non-Cyclic

Theorem
Let $\struct {\Q_{>0}, \times}$ be the multiplicative group of positive rational numbers.

Then $\struct {\Q_{>0}, \times}$ is not a cyclic group.


Proof
Aiming for a contradiction, suppose $\struct {\Q_{>0}, \times}$ is cyclic.
Then $\struct {\Q_{>0}, \times}$ has a generator $x$ such that $x > 1$.
It would follow that:

$\Q = \set {\ldots, x^{-2}, x^{-1}, 1, x, x^2, \ldots}$
where the elements are arranged in ascending order.
But then consider $y \in \Q: y = \dfrac {1 + x} 2$.
So $1 < y < x$ and so $y \notin \Q$.
From this contradiction it is concluded that there can be no such single generator of $\struct {\Q_{>0}, \times}$.
Therefore, by definition, $\struct {\Q_{>0}, \times}$ is not a cyclic group.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $17$




