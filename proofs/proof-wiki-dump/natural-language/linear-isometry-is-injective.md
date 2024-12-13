# 

Source: https://proofwiki.org/wiki/Linear_Isometry_is_Injective

Theorem
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be normed vector spaces.
Let $T : X \to Y$ be a linear isometry.

Then $T$ is injective.


Corollary
$T$ is an isometric isomorphism if and only if it is surjective.


Proof
Let $x, y \in X$. 
We have: 

$\norm {\map T {x - y} }_Y = \norm {T x - T y}_Y$
from the definition of a linear transformation.
Since $T$ is a linear isometry, we have: 

$\norm {\map T {x - y} }_Y = \norm {x - y}_X$
So:

$\norm {T x - T y}_Y = 0$
if and only if:

$\norm {x - y}_X = 0$
Since the norm is positive definite, this gives:

$T x = T y$
if and only if:

$x = y$
So $T$ is injective.
$\blacksquare$





