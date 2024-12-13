# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_not_Compact/Proof_2

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $I = \openint a b$ be an open real interval.

Then $I$ is not compact.


Proof
It suffices to demonstrate this for a particular open interval: we use $\openint 0 1$.
Consider the set of open intervals $\openint {\dfrac 1 n} 1$ for all $n \in \Z_{>1}$.
Each of these is an open set in $\openint 0 1$.
Also:

$\openint 0 1 = \ds \bigcup_{n \mathop \ge 2} \openint {\dfrac 1 n} 1$
Thus $\ds \bigcup_{n \mathop \ge 2} \openint {\dfrac 1 n} 1$ is an open cover for $\openint 0 1$.
Note that:

$\forall x \in \openint 0 1: \exists n \in \Z: n > \dfrac 1 x$
and so:

$x \in \openint {\dfrac 1 n} 1$
Consider a finite subcover of $\ds \bigcup_{n \mathop \ge 2} \openint {\dfrac 1 n} 1$.
It will be in the form:

$\set {\openint {\dfrac 1 {n_1} } 1, \openint {\dfrac 1 {n_2} } 1, \ldots, \openint {\dfrac 1 {n_r} } 1}$
But this is just $\openint {\dfrac 1 N} 1$, where $N = \max \set {n_1, n_2, \ldots, n_r}$.
So no finite subcover of $\ds \bigcup_{n \mathop \ge 2} \openint {\dfrac 1 n} 1$ can be a cover for $\openint 0 1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.2$: Definition of compactness
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): compact




