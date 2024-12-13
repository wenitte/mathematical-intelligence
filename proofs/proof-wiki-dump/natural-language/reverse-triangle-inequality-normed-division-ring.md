# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Then:

$\forall x, y \in R: \norm {x - y} \ge \bigsize {\norm x - \norm y}$


Proof
Let $0$ be the zero of $\struct {R, \norm {\,\cdot\,} }$.
Let $d$ denote the metric induced by $\norm {\, \cdot \,}$, that is:

$\map d {x, y} = \norm {x - y}$
From Metric Induced by Norm on Normed Division Ring is Metric we have that $d$ is indeed a metric.
Then, from the Reverse Triangle Inequality as applied to metric spaces:

$\forall x, y, z \in R: \bigsize {\norm {x - z} - \norm {y - z} } \le \norm {x - y}$
Then:

$\forall x, y \in R: \bigsize {\norm x - \norm y} = \bigsize {\norm{x - 0} - \norm{y - 0} } \le \norm {x - y}$
$\blacksquare$





