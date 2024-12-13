# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Locally_Convex_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\tau$ be the standard topology on the locally convex space $\struct {X, \set {\norm {\, \cdot \,} } }$.

Then $\tau$ consists precisely of the open sets of $\struct {X, \norm {\, \cdot \,} }$.


Proof
Let $U \subseteq X$. 
From Open Sets in Standard Topology of Locally Convex Space, we have $U \in \tau$ if and only if:

for each $x \in U$ there exists $\epsilon > 0$ such that:
$\set {y \in X : \norm {y - x} < \epsilon} \subseteq U$
That is if and only if for each $x \in U$ there exists $\epsilon > 0$ such that: 

$\map {B_\epsilon} x \subseteq U$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.
So from the definition of an open set of $\struct {X, \norm {\, \cdot \,} }$, this is equivalent to $U$ being an open set of $\struct {X, \norm {\, \cdot \,} }$.
$\blacksquare$





