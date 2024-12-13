# 

Source: https://proofwiki.org/wiki/Non-Closed_Set_of_Real_Numbers_is_not_Compact



Theorem
Let $\R$ be the set of real numbers considered as an Euclidean space.
Let $S \subseteq \R$ be non-closed in $\R$.

Then $S$ is not a compact subspace of $\R$.


Proof 1
Consider the complement of $S$ in $\R$:

$S' = \relcomp \R S = \R \setminus S$
As $S$ is not closed, by definition $S'$ is not open.
Thus by definition there exists $x \in S'$ such that:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \notin S'$
where $\map {B_\epsilon} x$ denotes the open $\epsilon$-ball of $x$.
That is:

$\forall \epsilon \in \R_{>0}: \exists y \in S: y \in \map {B_\epsilon} x$
That is, for all positive $\epsilon$ there exists a $y$ within $\epsilon$ of $x$.

From Union of Open Sets of Metric Space is Open:

$O_\epsilon := \openint \gets {x - \epsilon} \cup \openint {x + \epsilon} \to$
is an open set of $\R$.
Let $\CC = \set {O_\epsilon: \epsilon \in \R_{>0} }$.
Then:

$\ds \bigcup \CC = \R \setminus \set x \supseteq S$
as $x \notin S$.
So $\CC$ is an open cover of $S$.

Let $\FF \subseteq \CC$ be a finite subset of $\CC$.
Then:

$\ds \bigcup \FF = \openint \gets {x - \epsilon'} \cup \openint {x + \epsilon'} \to$
for some $\epsilon' \in \R_{>0}$.
But, as has been seen, there exists $y \in S$ closer to $x$ than $\epsilon'$.
Thus $\ds \bigcup \FF$ does not cover $S$.

This construction demonstrates an open cover $\CC$ of $S$ which has no finite subcover.
So, by definition, $S$ is not a compact subspace of $\R$.
$\blacksquare$


Proof 2
From:

Real Number Line is Metric Space
Metric Space is Hausdorff
Compact Subspace of Hausdorff Space is Closed
the result follows by the rule of transposition.
$\blacksquare$


Proof 3
By the rule of transposition, it suffices to show that if $S$ is a compact subspace of $\R$, then $S$ is closed.

Consider the relative complement of $S$ in $\R$:

$T = \relcomp \R S = \R \setminus S$
It remains to be shown that $T$ is open in $\R$.

Let $x \in T$.
For all strictly positive real numbers $\epsilon \in \R_{>0}$, it follows from Union of Open Sets of Metric Space is Open that:

$O_\epsilon := \openint \gets {x - \epsilon} \cup \openint {x + \epsilon} \to$
is open in $\R$.
Let $\CC = \set {O_\epsilon: \epsilon \in \R_{>0} }$.
Then:

$\ds \bigcup \CC = \R \setminus \set x \supseteq S$
as $x \notin S$.
So $\CC$ is an open cover for $S$.

Let $\GF$ be a finite subcover of $\CC$ for $S$.
Then:

$\ds \bigcup \GF = \openint \gets {x - \delta} \cup \openint {x + \delta} \to  \supseteq S$
for some strictly positive real number $\delta \in \R_{>0}$.
By the rule of transposition, it follows that:

$\openint {x - \delta} {x + \delta} \subseteq T$
Hence, $T$ is open in $\R$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness




