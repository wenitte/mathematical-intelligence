# 

Source: https://proofwiki.org/wiki/Normed_Dual_of_Normed_Vector_Space_is_Separable_iff_Closed_Unit_Ball_is_Metrizable



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a normed vector space over $\GF$.
Let $w$ be the weak topology on $X$. 
Let $X^\ast$ be the normed dual space of $X$.
Let $B_X^-$ be the closed unit ball of $X$. 

Then $X^\ast$ is separable if and only if $\struct {B_X^-, w}$ is metrizable.


Proof
Let $X^{\ast \ast}$ be the second normed dual.
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation.

Necessary Condition
Suppose that $X^\ast$ is separable.
From Closed Unit Ball in Normed Dual Space of Separable Normed Vector Space is Weak-* Metrizable:

$\struct {B_{X^{\ast \ast} }^-, w^\ast}$ is metrizable.
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry, we have: 

$\iota B_X^- \subseteq B_{X^{\ast \ast} }^-$.
So:

$\struct {\iota B_X^-, w^\ast}$ is metrizable.
From Evaluation Linear Transformation on Normed Vector Space is Weak to Weak-* Homeomorphism onto Image, $\struct {X, w}$ is homeomorphic to $\struct {X^{\ast \ast}, w^\ast}$. 
From Restriction of Homeomorphism is Homeomorphism, $\struct {B_X^-, w}$ is homeomorphic to $\struct {\iota B_X^-, w^\ast}$.
So $\struct {B_X^-, w}$ is metrizable.
$\Box$

Sufficient Condition
Suppose that $\struct {B_X^-, w}$ is metrizable.
From Metric Space is First-Countable, $\struct {B_X^-, w}$ is first-countable.
Let $\sequence {U_n}_{n \in \N}$ be a countable local basis for ${\mathbf 0}_X$. 
Then there exists a finite subset $F_n \subseteq X^\ast$ and $\epsilon_n > 0$ such that:

$U_n = \set {x \in B_X^- : \cmod {\map g x} < \epsilon_n \text { for each } g \in F_n}$
Let: 

$\ds Z = \map \cl {\map \span {\bigcup_{n \mathop = 1}^\infty F_n} }$
From Countable Union of Finite Sets is Countable, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty F_n$ is countable.
From Closed Linear Span of Countable Set in Topological Vector Space is Separable, we have that $Z$ is separable. 
To finish, we show that $Z = X^\ast$.
Let $f \in X^\ast$ and $\epsilon > 0$. 
From Open Sets in Weak Topology of Topological Vector Space: 

$V = \set {x \in B_X^- : \cmod {\map f x} < \epsilon}$ is open in $\struct {B_X^-, w}$.
Then there exists $n \in \N$ such that $U_n \subseteq V$. 
Let: 

$\ds F = \bigcap_{g \in F_n} \ker g$
From Set of Linear Subspaces is Closed under Intersection, $F$ is a vector subspace of $X$.
Then we have: 

$g \restriction_F = 0$ for each $g \in F_n$.
So since $U_n \subseteq V$, we have: 

$\cmod {\map f x} < \epsilon$
for each $x \in F$.
So, we have: 

$\norm {f \restriction_F}_{F^\ast} \le \epsilon$
Hence by: 

Hahn-Banach Theorem: Real Vector Space if $\GF = \R$
Hahn-Banach Theorem: Complex Vector Space if $\GF = \C$
there exists $\tilde f \in X^\ast$ such that: 

$\tilde f \restriction_F = \tilde f \restriction_F$
with:

$\norm {\tilde f}_{X^\ast} \le \epsilon$
So:

$\ds \bigcap_{g \in F_n} \ker g \subseteq \map \ker {f - \tilde f}$
From Condition for Linear Dependence of Linear Functionals in terms of Kernel, we have: 

$f - \tilde f \in \map \span {F_n} \subseteq Z$
So, we have: 

$\norm {f - \paren {f - \tilde f} }_{X^\ast} \le \epsilon$
with $f - \tilde f \in Z$. 
So:

$\map d {f, Z} \le \epsilon$
This holds for all $\epsilon > 0$, so we have $\map d {f, Z} = 0$. 
From Point at Distance Zero from Closed Set is Element, we have $f \in Z$. 
So we indeed have $Z = X^\ast$.
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Proposition $3.28$




