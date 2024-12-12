# 

Source: https://proofwiki.org/wiki/Derivative_at_Maximum_or_Minimum/Proof_2

Theorem
Let $f$ be a real function which is differentiable on the open interval $\openint a b$.
Let $f$ have a local minimum or local maximum at $\xi \in \openint a b$.

Then:

$\map {f'} \xi = 0$


Proof
By definition of local maximum:

$(1): \quad \map f {\xi + \epsilon} - \map f \xi < 0$
for sufficiently small $\epsilon \in \R_{>0}$.
Similarly, definition of local minimum:

$(2): \quad \map f {\xi + \epsilon} - \map f \xi > 0$
for sufficiently small $\epsilon \in \R_{>0}$.
Let it be assumed that $\map f {\xi + \epsilon}$ can be expanded, using Taylor's Theorem, in positive integer powers of $\epsilon$
Then:

$(3): \quad \map f {\xi + \epsilon} - \map f \xi = \epsilon \map {f'} \xi + \dfrac {\epsilon^2 \map {f' '} \xi} 2 + \map \OO {\epsilon^3}$
where $\map \OO {\epsilon^3}$ denotes big-$\OO$ notation.
That is, the quantity $\dfrac {\map \OO {\epsilon^3} } {\epsilon^3}$ is bounded.
From $(1)$ and $(2)$, at a local maximum or local minimum, the sign of $\map f {\xi + \epsilon} - \map f \xi$ is independent the sign of $\epsilon$ itself.
So from $(3)$ it follows that $\map {f'} \xi = 0$.
$\blacksquare$


Sources
1963: Charles Fox: An Introduction to the Calculus of Variations (2nd ed.) ... (previous) ... (next): Chapter $\text I$. The First Variation: $1.2$. Ordinary maximum and minimum theory




