# 

Source: https://proofwiki.org/wiki/Norm_Topology_Induced_by_Metric_Induced_by_Norm

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$. 
Let $d$ be the metric induced on $X$ by $\norm {\, \cdot \,}$.

Then the open sets of $\struct {X, d}$ as a metric space are precisely the open sets of $\struct {X, \norm {\, \cdot \,} }$ as a normed vector space. 


Proof
For $\epsilon > 0$ and $x \in X$, let $\map {B_\epsilon^d} x$ be the open ball in $\struct {X, d}$ with radius $\epsilon$ and center $x$. 
For $\epsilon > 0$ and $x \in X$, let $\map {B_\epsilon^{\norm {\, \cdot \,} } } x$ be the open ball in $\struct {X, \norm {\, \cdot \,} }$ with radius $\epsilon$ and center $x$. 

Recall the definition of Open Set of Metric Space:
Let $M = \struct {A, d}$ be a metric space.
Let $U \subseteq A$.

Then $U$ is an open set in $M$ if and only if it is a neighborhood of each of its elements.
That is:

$\forall y \in U: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} y \subseteq U$
where $\map {B_\epsilon} y$ is the open $\epsilon$-ball of $y$.

Recall the definition of Open Set in Normed Vector Space:
Let $V = \struct {X, \norm {\,\cdot\,} }$ be a normed vector space.
Let $U \subseteq X$.

Then $U$ is an open set in $V$ if and only if:

$\forall x \in U: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \subseteq U$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.

It is therefore sufficient to show that $\map {B_\epsilon^d} x = \map {B_\epsilon^{\norm {\, \cdot \,} } } x$.
Let $y \in X$.
We have $y \in \map {B_\epsilon^d} x$ if and only if:

$\map d {x, y} < \epsilon$
This is equivalent to:

$\norm {x - y} < \epsilon$
This is then equivalent to:

$y \in \map {B_\epsilon^{\norm {\, \cdot \,} } } x$
Hence we have: 

$\map {B_\epsilon^d} x = \map {B_\epsilon^{\norm {\, \cdot \,} } } x$
$\blacksquare$





