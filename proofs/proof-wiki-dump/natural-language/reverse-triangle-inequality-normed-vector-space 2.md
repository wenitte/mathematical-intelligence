# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Normed_Vector_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Then:

$\forall x, y \in X: \norm {x - y} \ge \size {\norm x - \norm y}$


Proof
Let $d$ denote the metric induced by $\norm {\, \cdot \,}$, that is:

$\map d {x, y} = \norm {x - y}$
From Metric Induced by Norm is Metric we have that $d$ is indeed a  metric.
Then, from the Reverse Triangle Inequality as applied to metric spaces:

$\forall x, y, z \in X: \size {\norm {x - z} - \norm {y - z} } \le \norm {x - y}$
Then:

$\forall x, y \in X: \size {\norm x - \norm y} = \size {\norm {x - 0} - \norm {y - 0} } \le \norm {x - y}$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed spaces




