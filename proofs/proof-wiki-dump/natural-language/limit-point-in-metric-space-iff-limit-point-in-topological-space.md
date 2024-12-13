# 

Source: https://proofwiki.org/wiki/Limit_Point_in_Metric_Space_iff_Limit_Point_in_Topological_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $T = \struct {A, \tau}$ be the topological space with the topology induced by $d$.
Let $H \subseteq A$.

Then:

$x \in H$ is a limit point in $M$ if and only if $x$ is a limit point in $T$


Proof
From Open Balls form Local Basis for Point of Metric Space, the set:

$\BB_x = \set{\map {B_\epsilon} x : \epsilon \in \R_{>0}}$
is a local basis of $x$.

From Local Basis Test for Limit Point:

$x$ is a limit point of $H$ in $T$ if and only if $\forall \epsilon \in \R_{>0}: H \cap \map {B_\epsilon} x \setminus \set x \ne \O$

By definition of a limit point in $M$:

$x$ is a limit point of $H$ in $T$ if and only if $x$ is an limit point of $H$ in $M$
$\blacksquare$





