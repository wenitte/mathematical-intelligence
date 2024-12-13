# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_Open_Set



Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $\openint a b \subset \R$ be an open interval of $\R$.

Then $\openint a b$ is an open set of $\R$.


Corollary
Let $\R$ be the real number line considered as an Euclidean space.
Let $A := \openint a \infty \subset \R$ be an open interval of $\R$.
Let $B := \openint {-\infty} b \subset \R$ be an open interval of $\R$.

Then both $A$ and $B$ are open sets of $\R$.


Proof
Let $c \in \R$ such that $a < c < b$.
Let $\epsilon = \min \set {b - c, c - a}$.
From the definition of positive it follows that $\epsilon \in \R_{>0}$.

Let $\map {B_\epsilon} c = \openint {c - \epsilon} {c + \epsilon}$ be the open $\epsilon$-ball of $c$.
Let $y \in \map {B_\epsilon} c$.
Then:

$\size {c - y} < \epsilon $
implies:

$-\epsilon < c - y < \epsilon$
We have that:














\(\ds a\)

\(=\)







\(\ds c - \paren {c - a}\)




















\(\ds \)

\(\le\)







\(\ds c - \epsilon\)




















\(\ds \)

\(<\)







\(\ds y\)




















\(\ds \)

\(<\)







\(\ds c + \epsilon\)




















\(\ds \)

\(\le\)







\(\ds c + \paren {b - c}\)




















\(\ds \)

\(=\)







\(\ds b\)









In other words:

$y \in \map {B_\epsilon} c \implies y \in \openint a b$
Thus:

$\map {B_\epsilon} c \subseteq \openint a b$
It follows that, by definition, $\openint a b$ is a neighborhood of $c$.
The result follows by definition of open set.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.9$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): open set (of points)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): open set (of points)
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




