# 

Source: https://proofwiki.org/wiki/Open_Cover_may_not_have_Lebesgue_Number

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\CC$ be an open cover of $M$.

Then it may not necessarily be the case that $\CC$ has a Lebesgue number.


Proof
Let $M := \openint 0 1 \subseteq \R$ under the Euclidean metric.
Let $\CC := \set {\openint {\dfrac 1 n} 1: n \ge 2}$.
For any $\epsilon \in \R_{>0}$, take $n > \dfrac 1 \epsilon$ and $x = \dfrac 1 n$.
There is no $\openint {\dfrac 1 m} 1$ such that $\map {B_\epsilon} x \subseteq \openint {\dfrac 1 m} 1$, since $\map {B_\epsilon} x = \map {B_\epsilon} {\dfrac 1 n} = \openint 0 {\dfrac 1 n + \epsilon}$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness




