# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Separable_iff_Weakly_Separable



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$.
Let $w$ be the weak topology on $X$.

Then $\struct {X, \norm {\, \cdot \,} }$ is separable if and only if $\struct {X, w}$ is separable. 


Proof
Necessary Condition
This follows from Separable Topological Space remains Separable in Coarser Topology.
$\blacksquare$

Sufficient Conditon
Suppose that $\struct {X, w}$ is separable.
Let $D$ be a countable dense subset of $\struct {X, w}$.
From Set Closure Preserves Set Inclusion, we have: 

$\map {\cl_w} D \subseteq \map {\cl_w} {\map \span D}$
So that: 

$\map {\cl_w} {\map \span D} = X$
From Mazur's Theorem, we then have: 

$\map \cl {\map \span D} = X$
From Closed Linear Span of Countable Set in Topological Vector Space is Separable, we have: 

$\struct {\map \cl {\map \span D}, \norm {\, \cdot \,} }$ is separable.
So $\struct {X, \norm {\, \cdot \,} }$ is separable.
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Proposition $3.26$




