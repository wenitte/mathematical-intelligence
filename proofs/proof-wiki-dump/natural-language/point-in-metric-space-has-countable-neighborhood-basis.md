# 

Source: https://proofwiki.org/wiki/Point_in_Metric_Space_has_Countable_Neighborhood_Basis

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.

Then there exists a basis for the neighborhood system of $a$ which is countable.


Proof
Consider the countable set:

$\BB_a := \set {\map {B_\epsilon} a: \exists n \in \Z_{>0}: \epsilon = \dfrac 1 n}$
That is, let $\BB_a$ be the set of all open $\epsilon$-balls of $a$ such that $\epsilon$ is of the form $\dfrac 1 n$ for (strictly) positive integral $n$.
Let $N$ be a neighborhood of $a$.
Then by definition of neighborhood:

$\exists \epsilon' \in \R_{>0}: \map {B_{\epsilon'} } a \subseteq N$
From Between two Real Numbers exists Rational Number:

$\exists \epsilon \in \Q: 0 < \epsilon < \epsilon'$
Let $\epsilon$ be expressed in canonical form as:

$\epsilon = \dfrac p q$
where $p$ and $q$ are coprime integers and $q > 0$.
Then:

$\epsilon := \dfrac 1 q \le \dfrac p q$
Thus $0 < \epsilon < \epsilon'$.
So:














\(\ds x\)

\(\in\)







\(\ds \map {B_\epsilon} a\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, a}\)

\(<\)







\(\ds \epsilon\)





Definition of Open Ball of Metric Space








\(\ds \leadsto \ \ \)





\(\ds \map d {x, a}\)

\(<\)







\(\ds \epsilon'\)





as $\epsilon < \epsilon'$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {B_{\epsilon'} } a\)





Definition of Open Ball of Metric Space








\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} a\)

\(\subseteq\)







\(\ds \map {B_{\epsilon'} } a\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} a\)

\(\subseteq\)







\(\ds N\)





Subset Relation is Transitive



From Open Ball is Neighborhood of all Points Inside, $\map {B_\epsilon} a$ is a neighborhood of $a$.
But as $\epsilon = \dfrac 1 q$ where $q \in \Z_{>0}$ it follows that:

$\map {B_\epsilon} a \in \set {\map {B_\epsilon} a: \exists n \in \Z_{>0}: \epsilon = \dfrac 1 n}$
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $5$




