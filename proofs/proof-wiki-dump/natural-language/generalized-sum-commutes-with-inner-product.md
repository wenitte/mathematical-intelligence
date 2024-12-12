# 

Source: https://proofwiki.org/wiki/Generalized_Sum_Commutes_with_Inner_Product

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be an inner product space.
Let $\Lambda$ be a set. 
Let $\sequence {x_\lambda}_{\lambda \mathop \in \Lambda}$ be a $\Lambda$-indexed family in $\HH$ such that the generalized sum $\ds \sum \set {x_\lambda : \lambda \in \Lambda}$ converges.
Let $y \in \HH$.

Then:

$\ds \sum \set {\innerprod {x_\lambda} y : \lambda \in \Lambda}$ converges
and further:

$\ds \sum \set {\innerprod {x_\lambda} y : \lambda \in \Lambda} = \innerprod {\sum \set {x_\lambda : \lambda \in \Lambda} } y $


Proof
Let $\struct {\FF, \subseteq}$ be the set of finite subsets of $\Lambda$ ordered by inclusion.
Define, for $F \in \FF$:

$\ds \map {s_1} F = \sum \set {\innerprod {x_\lambda} y : \lambda \in \Lambda}$
and:

$\ds \map {s_2} F = \innerprod {\sum \set {x_\lambda : \lambda \in \Lambda} } y$
Noting that $\ds \family {\sum_{\lambda \mathop \in F} x_\lambda}_{F \in \FF}$ converges to $\ds \sum \set {x_\lambda : \lambda \in \Lambda}$, we have that:

$\family {\map {s_2} F}_{\lambda \in \Lambda}$ converges to $\ds \innerprod {\sum \set {x_\lambda : \lambda \in \Lambda} } y$
by Characterization of Continuity in terms of Nets.
From the linearity of $\innerprod \cdot \cdot$ in the first argument we have:

$\map {s_1} F = \map {s_2} F$
Hence since $\family {\map {s_2} F}_{F \in \FF}$ converges to $\ds \innerprod {\sum \set {x_\lambda : \lambda \in \Lambda} } y$, so does $\family {\map {s_1} F}_{F \in \FF}$.
Hence we obtain the convergence of:

$\ds \sum \set {\innerprod {x_\lambda} y : \lambda \in \Lambda}$
and obtain:

$\ds \sum \set {\innerprod {x_\lambda} y : \lambda \in \Lambda} = \innerprod {\sum \set {x_\lambda : \lambda \in \Lambda} } y $
$\blacksquare$





