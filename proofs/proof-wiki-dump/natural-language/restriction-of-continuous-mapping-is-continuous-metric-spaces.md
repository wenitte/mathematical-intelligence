# 

Source: https://proofwiki.org/wiki/Restriction_of_Continuous_Mapping_is_Continuous/Metric_Spaces

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $S \subseteq M_1$ be a subset of $M_1$.
Let $f: M_1 \to M_2$ be a mapping which is continuous at a point $\alpha \in S$.
Let $f \restriction_S = g: S \to M_2$ be the restriction of $f$ to $S$.

Then $g$ is continuous at $\alpha$.


Proof
Let $\sequence {z_n}$ be a sequence in $S$ such that:

$\ds \lim_{n \mathop \to \infty} z_n = \alpha$
Since $\sequence {z_n}$ and $\alpha$ both lie in $S$:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} \to \alpha$
But:

$\forall n \in \N: \map g {z_n} = \map f {z_n}$
and also:

$\map g \alpha = \map f \alpha$
The result follows from Limit of Function by Convergent Sequences.
$\blacksquare$





