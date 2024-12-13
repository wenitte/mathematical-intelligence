# 

Source: https://proofwiki.org/wiki/Infinite_Intersection_of_Open_Sets_of_Metric_Space_may_not_be_Open



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {U_n}_{n \mathop \in \N}$ be an infinite sequence of open sets of $M$.

Then it is not necessarily the case that $\ds \bigcap_{n \mathop \in \N} U_n$ is itself an open set of $M$.


Proof
Consider the open real interval $\openint {-\dfrac 1 n} {\dfrac 1 n} \subseteq \R$.
From Open Real Interval is Open Set, $\openint {-\dfrac 1 n} {\dfrac 1 n}$  is open in $\R$ for all $n \in \N_{> 0}$.
But:

$\ds \bigcap_{n \mathop \in \N_{> 0}} \openint {-\dfrac 1 n} {\dfrac 1 n} = \set 0 = \closedint 0 0$
which is a closed interval of $\R$.
The result follows from Closed Real Interval is not Open Set.
$\blacksquare$


Also see
Finite Intersection of Open Sets of Metric Space is Open


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $2.25$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.18$




