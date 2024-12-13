# 

Source: https://proofwiki.org/wiki/Open_Ball_of_Point_Inside_Open_Ball/Pseudometric_Space

Theorem
Let $M = \struct {A, d}$ be a pseudometric space.
Let $\map {B_\epsilon} x$ be an open $\epsilon$-ball in $M = \struct {A, d}$.
Let $y \in \map {B_\epsilon} x$.

Then:

$\exists \delta \in \R: \map {B_\delta} y \subseteq \map {B_\epsilon} x$

That is, for every point in an open $\epsilon$-ball in a pseudometric space, there exists an open $\delta$-ball of that point entirely contained within that open $\epsilon$-ball.


Proof
Let $\delta = \epsilon - \map d {x, y}$.
From the definition of open ball, this is strictly positive, since $y \in \map {B_\epsilon} x$.
If $z \in \map {B_\delta} y$, then $\map d {x, y} < \delta$.
So:

$\map d {x, z} \le \map d {x, y} + \map d {y, z} < \map d {x, y} + \delta = \epsilon$
Thus $z \in \map {B_\epsilon} x$.
So $\map {B_\delta} y \subseteq \map {B_\epsilon} x$.
$\blacksquare$





