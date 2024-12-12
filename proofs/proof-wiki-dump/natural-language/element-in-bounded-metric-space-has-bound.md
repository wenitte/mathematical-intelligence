# 

Source: https://proofwiki.org/wiki/Element_in_Bounded_Metric_Space_has_Bound

Theorem
Let $M = \struct {X, d}$ be a metric space.
Let $M' = \struct {Y, d_Y}$ be a subspace of $M$.
Let $M'$ be bounded in $M$.

Then:

$\forall a' \in X: \exists K' \in \R: \forall x \in Y: \map d {x, a'} \le K'$
That is, if there is one element of $X$ which satisfies the condition for $Y$ to be bounded in $M$, they all do.


Proof
Let $a \in X$ such that $\exists K \in \R: \forall x \in Y: \map d {x, a} \le K$.
Let $a' \in X$.














\(\ds \map d {x, a'}\)

\(\le\)







\(\ds \map d {x, a} + \map d {a, a'}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds K + \map d {a, a'}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds K'\)





where $K' = K + \map d {a, a'}$



$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Definitions $2.2.12$




