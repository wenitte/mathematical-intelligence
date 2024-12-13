# 

Source: https://proofwiki.org/wiki/Separability_of_Normed_Vector_Space_preserved_under_Isometric_Isomorphism

Theorem
Let $\struct {X, \norm \cdot_X}$ be a separable normed vector space.
Let $\struct {Y, \norm \cdot_Y}$ be a normed vector space that is isometrically isomorphic to $\struct {X, \norm \cdot_X}$.
Let $T : X \to Y$ be an isometric isomorphism between $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$.

Then $\struct {Y, \norm \cdot_Y}$ is separable.


Proof
Let $\mathcal S = \set {x_n : n \in \N}$ be a countable everywhere dense subset of $X$. 
We show that $\map T {\mathcal S} = \set {T x_n : n \in \N}$ is a countable everywhere dense subset of $Y$.
Let $y \in Y$ and $\epsilon > 0$. 
Since $T$ is a bijection, there exists $x \in X$ such that $y = T x$.
Since $\mathcal S$ is everywhere dense in $X$, there exists $j \in \N$ such that: 

$\norm {x - x_j}_X < \epsilon$
Since $T$ is a linear isometry, we have: 

$\norm {\map T {x - x_j} }_Y = \norm {x - x_j}_X$
and so: 

$\norm {\map T {x - x_j} }_Y < \epsilon$
That is: 

$\norm {T x - T x_j}_Y < \epsilon$
so:

$\norm {y - T x_j}_Y < \epsilon$
Since $\epsilon > 0$ and $y \in Y$ were arbitrary, and $T x_j \in \map T {\mathcal S}$, we have that:

$\map T {\mathcal S}$ is everywhere dense in $Y$.
From Image of Countable Set under Mapping is Countable, we have: 

$\map T {\mathcal S}$ is countable.
So:

$\struct {Y, \norm \cdot_Y}$ is separable.
$\blacksquare$





