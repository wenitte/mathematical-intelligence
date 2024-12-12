# 

Source: https://proofwiki.org/wiki/Banach-Schauder_Theorem/Lemma_1

Lemma
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be Banach spaces.
Let $T : X \to Y$ be a surjective bounded linear transformation.
Let $y \in Y$ and $r > 0$ be such that:

$\map {B_Y} {y, r} \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
where:

$\map {B_Y} {y, r}$ denotes the open ball in $Y$ centered at $y$ with radius $r$
$\map {B_X} {0, m}$ denotes the open ball in $X$ centered at $0 \in X$ with radius $m$
$\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ denotes the topological closure of $T \sqbrk {\map {B_X} {0, m} }$.

Then: 

$\map {B_Y} {0, r} \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$


Proof
From Open Ball is Convex Set, we have: 

$\map {B_X} {0, m}$ is convex.
Then, from Image of Convex Set under Linear Transformation is Convex, we have: 

$T \sqbrk {\map {B_X} {0, m} }$ is convex.
From Closure of Convex Subset in Normed Vector Space is Convex, we have: 

$\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ is convex.
From Open Ball Centred at Origin in Normed Vector Space is Symmetric:

$\map {B_X} {0, m}$ is symmetric.
From Image of Symmetric Set under Linear Transformation is Symmetric, we have: 

$T \sqbrk {\map {B_X} {0, m} }$ is symmetric.
From Closure of Symmetric Subset of Normed Vector Space is Symmetric:

$\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ is symmetric.
Let $x \in \map {B_Y} {0, r}$.
Then $x$ can be written in the form: 

$x = r u$
for $u$ with $\norm u_Y < 1$, in particular: 

$\ds u = \frac x r$
Since $\map {B_Y} {y, r} \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$, we have: 

$y + r u \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
and:

$y - r u \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
Since $\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ is symmetric, we have: 

$-y + r u \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
Writing:

$\ds r u = \frac 1 2 \paren {y + r u} + \frac 1 2 \paren {-y + r u}$
we have: 

$r u \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
since $\paren {T \sqbrk {\map {B_X} {0, m} } }^-$ is convex.
So: 

$x \in \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
So:

$\map {B_Y} {0, r} \subseteq \paren {T \sqbrk {\map {B_X} {0, m} } }^-$
$\blacksquare$





