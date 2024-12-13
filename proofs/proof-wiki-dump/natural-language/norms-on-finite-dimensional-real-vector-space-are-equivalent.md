# 

Source: https://proofwiki.org/wiki/Norms_on_Finite-Dimensional_Real_Vector_Space_are_Equivalent



Theorem
Norms on finite-dimensional real vector space are equivalent.


Proof
We will prove that all norms are equivalent to $\norm {\, \cdot \,}_2$.
By definition, two norms are equivalent on $\R^d$ if and only if:

$ \exists m, M \in \R_{> 0} : \forall \mathbf x \in \R^d : m \norm {\mathbf x}_a \le \norm {\mathbf x}_b \le M \norm {\mathbf x}_a$


"Less or equal" condition
Let $\set {\mathbf e_1 \dots \mathbf e_n}$ be a standard basis in $\R^d$.
We have that each $\mathbf x \in \R^d$ is uniquely expressible as:

$\ds \mathbf x = \sum_{i \mathop = 1}^d x_i \mathbf e_i$
where $x_i$ is a scalar.

Then:














\(\ds \norm {\sum_{i \mathop = 1}^d x_i \mathbf e_i}\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^d \norm {x_i \mathbf e_i}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^d \size {x_i} \norm {\mathbf e_i}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\sum_{i \mathop = 1}^d \size {x_i} \norm {\mathbf e_i} }^2 }\)




















\(\ds \)

\(\le\)







\(\ds \sqrt {\sum_{i \mathop = 1}^d \norm {\mathbf e_i}^2} \sqrt {\sum_{j \mathop = 1}^d \size {x_j}^2 }\)





Cauchy's Inequality














\(\ds \)

\(\le\)







\(\ds \sqrt {\sum_{i \mathop = 1}^d \norm {\mathbf e_i}^2} \norm {\mathbf x}_2\)





Definition of $p$-norm














\(\ds \)

\(=\)







\(\ds M \norm {\mathbf x}_2\)





where we define $\ds M := \sqrt {\sum_{i \mathop = 1}^d \norm {\mathbf e_i}^2}$



By definition of norm, its image is the set of non-negative real numbers: $M \in \R_{\ge 0}$.
But $M$ is independent of $\mathbf x$.
Hence:

$\exists M \in \R_{\ge 0} : \forall \mathbf x \in \R^d : \norm {\mathbf x} \le M \norm {\mathbf x}_2$
$\Box$


Existence of $m$
Let $K := \set {\mathbf y \in \R^d : \norm {\mathbf y}_2 = 1}$ be a unit sphere in $\struct {\R^d, \norm {\, \cdot \,}_2}$.
By Unit Sphere is Closed in Normed Vector Space, $K$ is closed in $\struct {\R^d, \norm{\, \cdot \,}_2}$.
By definition, $K$ is bounded in $\struct {\R^d, \norm{\, \cdot \,}_2}$.
Hence, by the Heine-Borel theorem, $K$ is a compact set.
By Norm on Vector Space is Continuous Function, the map $\norm {\, \cdot \,} : K \to \R_{\ge 0}$ is continuous from $\struct {K, \norm {\, \cdot \,}_2}$ to $\struct {\R_{\ge 0}, \size {\, \cdot \,}}$:

$\forall \mathbf y_1, \mathbf y_2 \in K : \size {\norm {\mathbf y_1} - \norm {\mathbf y_2}} \le \norm {\mathbf y_1 - \mathbf y_2} \le M \norm {\mathbf y_1 - \mathbf y_2}_2$
By the Extreme Value Theorem, $\norm {\, \cdot \,} : K \to \R_{\ge 0}$ attains a minimum value $m$ for some $\mathbf y \in K$.

Suppose $m = 0$.
Then:














\(\ds \norm {\mathbf y}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf y\)

\(=\)







\(\ds 0\)





Norm Axiom $\text N 2$: Positive Homogeneity








\(\ds \leadsto \ \ \)





\(\ds \mathbf y\)

\(\notin\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(>\)







\(\ds 0\)










Furthermore:

$\forall \mathbf y \in \R^d : \norm {\mathbf y}_2 = 1 : \norm {\mathbf y} \ge m$
$\Box$


"Greater or equal" condition
Suppose $\mathbf x = 0$.
Then we have equality.
Suppose $\mathbf x \ne 0$.
Let $\ds \mathbf y = \frac {\mathbf x} {\norm {\mathbf x}_2}$.
We have that $\norm {\mathbf y}_2 = 1$ and $\mathbf y \in K$.
Then:














\(\ds m\)

\(\le\)







\(\ds \norm {\mathbf y}\)




















\(\ds \)

\(=\)







\(\ds \norm {\frac {\mathbf x} {\norm {\mathbf x}_2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {\mathbf x} } {\norm {\mathbf x}_2}\)









This implies that:

$m \norm {\mathbf x}_2 \le \norm {\mathbf x}$
But once again, $m$ is independent of $\mathbf x$.
Therefore:

$\exists m, M : \forall \mathbf x \in \R^d : m \norm {\mathbf x}_2 \le \norm {\mathbf x} \le M \norm {\mathbf x}_2$
By definition, all norms are equivalent to $\norm{\, \cdot \,}_2$.
By Norm Equivalence is Equivalence, the equivalence relation $\norm {\, \cdot \,} \sim \norm {\, \cdot \,}_2$ is transitive.
Thus, all norms are equivalent.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




