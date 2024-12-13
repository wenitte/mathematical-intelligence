# 

Source: https://proofwiki.org/wiki/Set_in_Standard_Discrete_Metric_Space_has_no_Limit_Points

Theorem
Let $M = \struct {S, d}$ be the standard discrete metric space on a set $A$.
Let $H \subseteq S$ be a subset of $S$.

Then $H$ has no limit points.


Proof
By definition of the standard discrete metric:

$\map d {x, y} = \begin {cases} 0 & : x = y \\ 1 & : x \ne y \end {cases}$
Let $\alpha \in S$.

By definition, $\alpha$ is a limit point of $H$ if and only if every deleted $\epsilon$-neighborhood $\map {B_\epsilon} \alpha \setminus \set \alpha$ of $\alpha$ contains a point in $A$:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap H \ne \O$

Let $\map {B_1} \alpha$ be the open $1$-ball of $\alpha$ in $M$.
Thus:














\(\ds \map {B_1} \alpha\)

\(=\)







\(\ds \set {y \in S: \map d {\alpha, y} < 1}\)




















\(\ds \)

\(=\)







\(\ds \set \alpha\)














\(\ds \leadsto \ \ \)





\(\ds \map {B_1} \alpha \setminus \set \alpha\)

\(=\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\map {B_1} \alpha \setminus \set \alpha} \cap H\)

\(=\)







\(\ds \O\)





Intersection with Empty Set



So there exists a deleted $\epsilon$-neighborhood $\map {B_\epsilon} \alpha \setminus \set \alpha$ of $\alpha$ containing no points of $H$.
Hence $\alpha$ is not a limit point of $H$
As $\alpha$ is arbitrary, the result follows.
$\blacksquare$





