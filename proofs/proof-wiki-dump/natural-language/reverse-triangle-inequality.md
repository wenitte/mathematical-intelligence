# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality



Theorem
Let $M = \struct {X, d}$ be a metric space.

Then:

$\forall x, y, z \in X: \size {\map d {x, z} - \map d {y, z} } \le \map d {x, y}$


Normed Division Ring
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Then:

$\forall x, y \in R: \norm {x - y} \ge \bigsize {\norm x - \norm y}$


Normed Vector Space
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Then:

$\forall x, y \in X: \norm {x - y} \ge \size {\norm x - \norm y}$


Real and Complex Numbers
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\cmod {x - y} \ge \size {\cmod x - \cmod y}$


Seminormed Vector Space
Let $\struct {K, +, \circ}$ be a division ring with norm $\norm {\,\cdot\,}_K$.
Let $X$ be a vector space over $K$.
Let $p$ be a seminorm on $X$.

Then:

$\forall x, y \in X : \size {\map p x - \map p y} \le \map p {x - y}$

This article, or a section of it, needs explaining.In particular: $\size {\map p x - \map p y}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Let $M = \struct {X, d}$ be a metric space.
By Metric Space Axiom $(\text M 2)$: Triangle Inequality, we have:

$\forall x, y, z \in X: \map d {x, y} + \map d {y, z} \ge \map d {x, z}$
By subtracting $\map d {y, z}$ from both sides:

$\map d {x, y} \ge \map d {x, z} - \map d {y, z}$

Now we consider 2 cases. 


Case $1$
Suppose $\map d {x, z} - \map d {y, z} \ge 0$.
Then:

$\map d {x, z} - \map d {y, z} = \size {\map d {x, z} - \map d {y, z} }$
and so:

$\map d {x, y} \ge \size {\map d {x, z} - \map d {y, z} }$


Case 2
Suppose $\map d {x, z} - \map d {y, z} < 0$.
Applying Metric Space Axiom $(\text M 2)$: Triangle Inequality again, we have:

$\forall x, y, z \in X: \map d {y, x} + \map d {x, z} \ge \map d {y, z}$
Hence:

$\map d {x, y} \ge \map d {y, z} - \map d {x, z}$
Since we assumed $\map d {x, z} - \map d {y, z} < 0$, we have that:

$\map d {y, z} - \map d {x, z} > 0$
and so:

$\map d {y, z} - \map d {x, z} = \size {\map d {y, z} - \map d {x, z} }$
Thus we obtain:

$\map d {x, y} \ge \size {\map d {x, z} - \map d {y, z} }$
Since these cases are exhaustive, we have shown that:

$\forall x, y, z \in X: \map d {x, y} \ge \size {\map d {x, z} - \map d {y, z} }$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 2$




