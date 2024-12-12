# 

Source: https://proofwiki.org/wiki/Diameter_of_Closure_of_Subset_is_Diameter_of_Subset

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $S \subseteq A$ be bounded in $M$.

Then:

$\map \diam S = \map \diam {S^-}$
where $\map \diam S$ denotes the diameter of $S$, and $S^-$ denotes the closure of $S$ in $M$.


Proof
Aiming for a contradiction, suppose that $\map \diam S \ne \map \diam {S^-}$.

$S \subseteq S^-$ by Subset of Metric Space is Subset of its Closure, so it then follows that:

$\map \diam S < \map \diam {S^-}$

Then there exists $x, y \in S^-$ such that $\map d {x, y} > \map \diam S$.
By Point in Closure of Subset of Metric Space iff Limit of Sequence there exists sequences $\sequence {x_n}$ and $\sequence {y_n}$ that converge to $x$ and $y$ respectively.

Let $d_\infty: \paren {A \times A} \times \paren {A \times A} \to \R$ be the metric on $A \times A$ defined as:

$\map {d_\infty} {\tuple {x, y}, \tuple {x', y'} } = \max \set {\map d {x, x'}, \map d {y, y'} }$

From this it can be said that $\sequence {\tuple {x_n, y_n} }$ is a sequence of points in $A \times A$ that converge to $\tuple {x, y}$.

Let $\epsilon = \map d {x, y} - \map \diam S$.
From Distance Function of Metric Space is Continuous, there exists a $N \in \N_{> 0}$ such that:

$n \ge N \implies \size {\map d {x_n, y_n} - \map d {x, y} } < \epsilon$

If $\map d {x_n, y_n} - \map d {x, y}$ is non-negative, then:

$\map d {x_n, y_n} \ge \map d {x, y} > \map \diam S$
which is a contradiction.

If $\map d {x_n, y_n} - \map d {x, y}$ is a negative number, then:














\(\ds \size {\map d {x_n, y_n} - \map d {x, y} }\)

\(=\)







\(\ds -\map d {x_n, y_n} + \map d {x, y}\)




















\(\ds \)

\(<\)







\(\ds \map d {x, y} - \map \diam S\)














\(\ds \leadsto \ \ \)





\(\ds -\map d {x_n, y_n}\)

\(<\)







\(\ds -\map \diam S\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x_n, y_n}\)

\(>\)







\(\ds \map \diam S\)









which is again a contradiction.

From Proof by Contradiction it follows that $\map \diam S = \map \diam {S^-}$.
Hence the result.
$\blacksquare$


Sources
1964: Richard R. Goldberg: Methods of Real Analysis $\S 6.5$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 32$




