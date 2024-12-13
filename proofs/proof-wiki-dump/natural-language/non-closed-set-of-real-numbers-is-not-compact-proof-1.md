# 

Source: https://proofwiki.org/wiki/Non-Closed_Set_of_Real_Numbers_is_not_Compact/Proof_1

Theorem
Let $\R$ be the set of real numbers considered as an Euclidean space.
Let $S \subseteq \R$ be non-closed in $\R$.

Then $S$ is not a compact subspace of $\R$.


Proof
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





