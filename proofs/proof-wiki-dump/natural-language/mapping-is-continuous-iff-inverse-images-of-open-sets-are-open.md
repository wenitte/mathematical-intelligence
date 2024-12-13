# 

Source: https://proofwiki.org/wiki/Mapping_is_Continuous_iff_Inverse_Images_of_Open_Sets_are_Open



Theorem
Let $X$ and $Y$ be normed vector spaces.
Let $f : X \to Y$ be a mapping.

Then:

$f$ is continuous on $X$
if and only if:

for every $V$ open in $Y$, $\map {f^{-1}} V$ is open in $X$.


Corollary
Let $X$ and $Y$ be normed vector spaces.
Let $f : X \to Y$ be a mapping.

Then:

$f$ is continuous on $X$
if and only if:

for every $F$ closed in $Y$, $\map {f^{-1}} F$ is closed in $X$.


Proof
Sufficient Condition
Let $c \in X$.
Let $\epsilon \in \R_{\mathop > 0}$.
Let $V := \map {B_\epsilon} {\map f c}$ be an open ball in $Y$.
By Open Ball is Open Set in Normed Vector Space, $V$ is an open set in $Y$.
Let $\map {f^{-1}} V = \map {f^{-1}} {\map {B_\epsilon} {\map f c}}$ be an open set in $X$.
Note that $\map f c \in \map {B_\epsilon} {\map f c}$.
Hence, $c \in \map {f^{-1}} {\map {B_\epsilon} {\map f c}}$.
By definition of open set:

$\exists \delta > 0 : \map {B_\delta} c \subseteq \map {f^{-1}} {\map {B_\epsilon} {\map f c}}$
In other words:

$\forall x \in X : \norm {x - c} < \delta \implies x \in \map {f^{-1}} {\map {B_\epsilon} {\map f c}}$
or

$\map f x \in \map {B_\epsilon} {\map f c}$
By definition of open ball:

$\norm {\map f x - \map f c} < \epsilon$
But $\epsilon$ was arbitrary.
Hence:

$\forall \epsilon \in \R_{\mathop > 0} : \exists \delta > 0 : \norm {x - c} < \delta \implies \norm {\map f x - \map f c} < \epsilon$
Therefore, $f$ is continuous at $c$.
However, $c \in X$ was arbitrary.
Hence, $f$ is continuous on $X$.
$\Box$


Necessary Condition
Let $f$ be continuous on $X$.
Let $V$ be an open subset of $Y$.
Let $c \in \map {f^{-1}} V$.
Hence $\map f c \in V$.
By definition of an open set:

$\exists \epsilon \in \R_{\mathop > 0} : \map {B_\epsilon} {\map f c} \subseteq V$
By continuity of $f$ at $c$:

$\exists \delta \in \R_{\mathop > 0} : \forall x \in X : \norm {x - c} < \delta \implies \norm {\map f x - \map f c} < \epsilon$
In other words:

$\exists \delta \in \R_{\mathop > 0} : \forall x \in X : \norm {x - c} < \delta \implies \map f x \in \map {B_\epsilon} {\map f c} \subseteq V$
or

$\exists \delta \in \R_{\mathop > 0} : \forall x \in X : \norm {x - c} < \delta \implies \map f x \in V$
$\map f x \in V$ is equivalent to $x \in \map {f^{-1}} V$.
Suppose $\norm {x - c} < \delta$.
By definition of open ball:

$x \in \map {B_\delta} c$
But then:

$x \in \map {B_\delta} c \implies x \in \map {f^{-1}} V$
Hence:

$\map {B_\delta} c \subseteq \map {f^{-1}} V$
But $\delta$ exists for any $c \in \map {f^{-1}} V$.
By definition, $\map {f^{-1}} V$ is open in $X$.
$\blacksquare$


Also see
Real-Valued Mapping is Continuous if Inverse Images of Unbounded Open Intervals are Open


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.2$: Continuous and linear maps. Continuous maps




