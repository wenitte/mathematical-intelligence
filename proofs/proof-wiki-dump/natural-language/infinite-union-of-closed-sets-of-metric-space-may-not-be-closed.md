# 

Source: https://proofwiki.org/wiki/Infinite_Union_of_Closed_Sets_of_Metric_Space_may_not_be_Closed

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $V_1, V_2, V_3, \ldots$ be an infinite set of closed sets of $M$.

Then it is not necessarily the case that $\ds \bigcup_{n \mathop \in \N} V_n$ is itself a closed set of $M$.


Proof
Consider the closed real interval:

$\closedint {\dfrac 1 n} 1 \subseteq \R$
From Closed Real Interval is Closed Set, $\closedint {\dfrac 1 n} 1$  is closed in $\R$ for all $n \in \N$.
But:

$\ds \bigcup_{n \mathop \in \N} \closedint {\dfrac 1 n} 1 = \hointl 0 1$
The result follows from Half-Open Real Interval is neither Open nor Closed.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets




