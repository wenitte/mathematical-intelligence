# 

Source: https://proofwiki.org/wiki/Neighborhoods_in_Standard_Discrete_Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space where $d$ is the standard discrete metric.
Let $a \in A$.

Then $\set a$ is a neighborhood of $a$ which forms a basis for the system of neighborhoods of $a$.


Proof
By definition of the standard discrete metric:

$\map d {x, y} = \begin {cases} 0 & : x = y  \\ 1 & : x \ne y \end {cases}$
Let $\epsilon \in \R_{>0}$ such that $\epsilon < 1$.
Then:














\(\ds \map {B_\epsilon} a\)

\(=\)







\(\ds \set {x \in A: \map d {x, a} < \epsilon}\)





Definition of Open $\epsilon$-Ball of $a$








\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} a\)

\(=\)







\(\ds \set a\)









So by definition $\set a$ is a neighborhood of $a$.

Let $\NN_a$ be the system of neighborhoods of $a$.
Let $N \in \NN_a$ be a neighborhood of $a$.
Then:














\(\ds a\)

\(\in\)







\(\ds N\)





Point in Metric Space is Element of its Neighborhood








\(\ds \leadsto \ \ \)





\(\ds \set a\)

\(\subseteq\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} a\)

\(\subseteq\)







\(\ds N\)





for all $\epsilon \in \R_{>0}$ such that $\epsilon < 1$



Hence the result by definition of basis of a system of neighborhoods.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $1$




