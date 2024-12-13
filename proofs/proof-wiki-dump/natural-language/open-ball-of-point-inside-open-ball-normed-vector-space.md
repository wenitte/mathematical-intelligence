# 

Source: https://proofwiki.org/wiki/Open_Ball_of_Point_Inside_Open_Ball/Normed_Vector_Space

Theorem
Let $M = \struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\map {B_\epsilon} x$ be an open $\epsilon$-ball in $M = \struct {X, \norm {\, \cdot \,} }$.
Let $y \in \map {B_\epsilon} x$.

Then:

$\exists \delta \in \R: \map {B_\delta} y \subseteq \map {B_\epsilon} x$

That is, for every point in an open $\epsilon$-ball in a normed vector space, there exists an open $\delta$-ball of that point entirely contained within that open $\epsilon$-ball.


Proof
Let $\delta = \epsilon - \norm {x - y}$.
From the definition of open ball, this is strictly positive, since $y \in \map {B_\epsilon} x$.
If $z \in \map {B_\delta} y$, then $\norm {y - z} < \delta$.
So:

$\norm {x - z} \le \norm {x - y} + \norm {y - z} < \norm {x - y} + \delta = \epsilon$
Thus $z \in \map {B_\epsilon} x$.
So $\map {B_\delta} y \subseteq \map {B_\epsilon} x$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis: Chapter $1$: Normed and Banach spaces




