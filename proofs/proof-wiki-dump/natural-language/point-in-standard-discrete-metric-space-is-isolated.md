# 

Source: https://proofwiki.org/wiki/Point_in_Standard_Discrete_Metric_Space_is_Isolated

Theorem
Let $M = \struct {S, d}$ be the standard discrete metric space on a set $A$.
Let $H \subseteq S$ be a subset of $S$.
Let $\alpha \in H$.

The $\alpha$ is an isolated point of $H$.


Proof
By definition of the standard discrete metric:

$\map d {x, y} = \begin {cases} 0 & : x = y  \\ 1 & : x \ne y \end {cases}$
Let $\alpha \in H$.
Let $\map {B_1} \alpha$ be the open $1$-ball of $\alpha$ in $M$.
Thus:














\(\ds \map {B_1} \alpha \cap H\)

\(=\)







\(\ds \set {y \in H: \map d {\alpha, y} < 1}\)




















\(\ds \)

\(=\)







\(\ds \set \alpha\)









Hence the result by definition of isolated point.
$\blacksquare$





