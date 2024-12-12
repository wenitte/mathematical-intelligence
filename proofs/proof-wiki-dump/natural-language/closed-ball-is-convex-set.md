# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Convex_Set

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\map { {B_r}^-} x$ be a closed ball in $X$ with radius $r \in \R_{>0}$ and center $x \in X$.

Then $\map { {B_r}^-} x$ is convex.


Proof
Let $y \in \map { {B_1}^-} {\mathbf 0}$.

From Norm Axiom $\text N 2$: Positive Homogeneity, it follows that:

$\norm {r y} = r \norm y$
It follows that:

$y \in \map { {B_1}^-} {\mathbf 0}$, if and only if $r y \in \map { {B_r}^-} {\mathbf 0}$

As $\norm {r y - \mathbf 0} = \norm {\paren {r y + x} - x}$, it follows that:

$r y \in \map { {B_r}^-} {\mathbf 0}$
if and only if:

$r y + x \in \map { {B_r}^-} {\mathbf x}$

It follows that:

$\map { {B_r}^-} {\mathbf x} = r \map { {B_1}^-} {\mathbf 0} + x$

From Closed Unit Ball is Convex Set, it follows that $\map { {B_1}^-} {\mathbf 0}$ is convex.
From Dilation of Convex Set in Vector Space is Convex, it follows that $r \map { {B_1}^-} {\mathbf 0}$ is convex.
From Translation of Convex Set in Vector Space is Convex, it follows that $r \map { {B_1}^-} {\mathbf 0} + x$ is convex.
$\blacksquare$


Sources
1997: Reinhold Meise and Dietmar Vogt: Introduction to Functional Analysis: $\S 5$: Normed Spaces




