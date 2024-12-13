# 

Source: https://proofwiki.org/wiki/Isolated_Point_in_Metric_Space_iff_Isolated_Point_in_Topological_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $T = \struct {A, \tau}$ be the topological space with the topology induced by $d$.
Let $H \subseteq A$.
Let $x \in H$
Then:

$x$ is an isolated point of $H$ in $M$ if and only if $x$ is an isolated point of $H$ in $T$


Proof
From Open Balls form Local Basis for Point of Metric Space, the set:

$\BB_x = \set {\map {B_\epsilon} x : \epsilon \in \R_{>0} }$
is a local basis of $x$.

From Local Basis Test for Isolated Point:

$x$ is an isolated point of $H$ in $T$ if and only if $\exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H = \set x$

By definition of an isolated point in $M$:

$x$ is an isolated point of $H$ in $T$ if and only if $x$ is an isolated point of $H$ in $M$
$\blacksquare$





