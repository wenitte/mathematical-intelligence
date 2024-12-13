# 

Source: https://proofwiki.org/wiki/Restriction_of_Non-Continuous_Mapping_on_Metric_Space_to_Subspace_may_be_Continuous

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be a metric spaces.
Let $f: A_1 \to A_2$ be a mapping.
Let $Y \subseteq A_1$.
Let $f {\restriction_Y}: Y \to A_2$ be the restriction of $f$ to $Y$.

Let $f {\restriction_Y}$ be $\tuple {d_Y, d_2}$-continuous.
Then it is not necessarily the case that $f$ is also $\tuple {d_1, d_2}$-continuous.


Proof
Proof by Counterexample:
Let $f: \R \to \R$ be given by:

$\map f x = \begin {cases}
0 & : x \in \Q \\
1 & : x \in \R \setminus \Q
\end {cases}$
where $\Q$ is the set of rational numbers.
Then $f {\restriction_\Q}: \Q \to \R$ is the constant function $f_0$ with value $0$.
By Constant Mapping is Continuous, $f {\restriction_\Q}$ is continuous at every point.
However, $f$ is not continuous at any point on $\R$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.6$




