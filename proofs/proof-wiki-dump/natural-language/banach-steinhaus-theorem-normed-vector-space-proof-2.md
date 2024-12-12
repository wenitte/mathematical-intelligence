# 

Source: https://proofwiki.org/wiki/Banach-Steinhaus_Theorem/Normed_Vector_Space/Proof_2

Theorem
Let $\struct {X, \norm {\,\cdot\,}_X}$ be a Banach space.
Let $\struct {Y, \norm {\,\cdot\,}_Y}$ be a normed vector space.
Let $\family {T_\alpha: X \to Y}_{\alpha \mathop \in A}$ be an $A$-indexed family of bounded linear transformations from $X$ to $Y$.
Suppose that:

$\ds \forall x \in X: \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite.

Then:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha}$ is finite
where $\norm {T_\alpha}$ denotes the norm of the linear transformation $T_\alpha$.


Proof
From Banach Space is F-Space, $\struct {X, \norm {\, \cdot \,}_X}$ can be considered as an $F$-Space.
From Normed Vector Space is Hausdorff Topological Vector Space, $\struct {Y, \norm {\, \cdot \,}_Y}$ can be considered as a topological vector space.
Let $\Gamma = \set {T_\alpha : \alpha \in A}$ and:

$\map \Gamma x = \set {T_\alpha x : \alpha \in A}$
for each $x \in X$. 
By hypothesis, we have:

$\ds \sup_{\alpha \in A} \norm {T_\alpha x}_Y < \infty$ for each $x \in X$.
From Characterization of von Neumann-Boundedness in Normed Vector Space, we have that $\map \Gamma x$ is von Neumann-bounded in $\struct {Y, \norm {\, \cdot \,}_Y}$ for each $x \in X$. 
From Banach-Steinhaus Theorem: $F$-Space, $\Gamma$ is equicontinuous. 
So there exists an open neighborhood $U$ of ${\mathbf 0}_X$ such that:

$T_\alpha \sqbrk U \subseteq \map {B_1^Y} { {\mathbf 0}_Y} \subseteq B^-_Y$ for each $\alpha \in A$.
where:

$\map {B_1^Y} { {\mathbf 0}_Y}$ is the open ball of center ${\mathbf 0}_Y$ and radius $1$ in $\struct {Y, \norm {\, \cdot \,}_Y}$
$B_Y^-$ is the closed unit ball of $\struct {Y, \norm {\, \cdot \,}_Y}$.
From the definition of an open set in a normed vector space, there exists $\delta > 0$ such that:

$\map {B_\delta^X} { {\mathbf 0}_X} \subseteq U$
and so:

$T_\alpha \sqbrk {\map {B_\epsilon^X} { {\mathbf 0}_X} } \subseteq \map {B_1^Y} { {\mathbf 0}_Y}$ for each $\alpha \in A$.
We then have:

$\paren {\delta/2} B_X^- \subseteq \map {B_\delta^X} { {\mathbf 0}_X}$
and:

$\map {B_1^Y} { {\mathbf 0}_Y} \subseteq B_Y^-$
where $B_X^-$ denotes the closed unit ball of $\struct {X, \norm {\, \cdot \,}_X}$. 
Hence by Image of Dilation of Set under Linear Transformation is Dilation of Image, we have: 

$T_\alpha \sqbrk {B_X^-} \subseteq \paren {2/\delta} B_Y^-$ for each $\alpha \in A$.
From Norm of Bounded Linear Transformation in terms of Closed Unit Ball, we have:

$\ds \norm {T_\alpha} \le \frac 2 \delta$ for each $\alpha \in A$.
That is:

$\ds \sup_{\alpha \in A} \norm {T_\alpha} \le \frac 2 \delta$
as required.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $2.6$: Theorem




