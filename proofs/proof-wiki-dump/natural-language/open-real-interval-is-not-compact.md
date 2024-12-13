# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_not_Compact



Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $I = \openint a b$ be an open real interval.

Then $I$ is not compact.


Proof 1
From Open Real Interval is not Closed Set, $I$ is not a closed set of $\R$.
The result follows by definition of compact.
$\blacksquare$


Proof 2
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


Proof 3
We have that $\struct {\R, \size {\, \cdot \,}}$ is a normed vector space.
Also, $I$ is bounded by $a$ and $b$.
Consider a sequence $\ds \sequence {x_n}_{n \mathop \in \N}$ with $\ds x_n = a + \frac {b - a} {2n}$.
Let $\epsilon \in \R_{\mathop > 0}$.
Let $\ds N = \frac {b - a} {2 \epsilon}$.
Then for all $n \in \N$ such that $n > N$ we have that:














\(\ds \size {a + \frac {b - a} {2n} - a}\)

\(=\)







\(\ds \size {\frac {b - a} {2n} }\)




















\(\ds \)

\(<\)







\(\ds \frac {b - a} {2N}\)





$b > a$














\(\ds \)

\(=\)







\(\ds \frac {b - a} 2 \frac {2 \epsilon} {b - a}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence, $\sequence {x_n}_{n \mathop \in \N}$ converges to $a$.
By Limit of Subsequence equals Limit of Real Sequence, every subsequence of $\sequence {x_n}_{n \mathop \in \N}$ converges to $a$ as well.
However, $a \notin I$.
By definition, $I$ is not compact.
$\blacksquare$


Also see
Closed Real Interval is Compact in Metric Space


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness




