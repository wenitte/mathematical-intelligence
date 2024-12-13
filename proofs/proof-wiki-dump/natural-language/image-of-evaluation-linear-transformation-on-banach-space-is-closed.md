# 

Source: https://proofwiki.org/wiki/Image_of_Evaluation_Linear_Transformation_on_Banach_Space_is_Closed

Theorem
Let $\struct {X, \norm \cdot_X}$ be a Banach space.
Let $\struct {X^{\ast \ast}, \norm \cdot_{X^{\ast \ast} } }$ be the second normed dual of $\struct {X, \norm \cdot_X}$.
Let $J : X \to X^{\ast \ast}$ be the evaluation linear transformation.

Then: 

$\map J X$ is closed in $X^{\ast \ast}$.


Theorem
Let $L$ be the limit of a convergent sequence in $\map J X$.
Let $\sequence {j_n}_{n \mathop \in \N}$ be a sequence in $\map J X$ such that: 

$\sequence {j_n}_{n \mathop \in \N}$ converges to $L$.
Note that for each $n \in \N$ there exists $x_n \in X$ such that: 

$j_n = J x_n$
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry, we have: 

$J$ is a linear isometry.
Specifically:

$J$ is a bounded linear transformation.
From Continuity of Linear Transformations, we have: 

$J$ is continuous.
We show that $\sequence {x_n}_{n \mathop \in \N}$ converges to some $x \in X$.
We will then have:

$L = J x \in \map J X$
from continuity.
Note that: 














\(\ds \norm {j_n - j_m}_{X^{\ast \ast} }\)

\(=\)







\(\ds \norm {J x_n - J x_m}_{X^{\ast \ast} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\map J {x_n - x_m} }_{X^{\ast \ast} }\)





Evaluation Linear Transformation on Normed Vector Space is Linear Transformation from Space to Second Normed Dual














\(\ds \)

\(=\)







\(\ds \norm {x_n - x_m}_X\)





Evaluation Linear Transformation on Normed Vector Space is Linear Isometry



Let $\epsilon > 0$. 
Since: 

$\sequence {j_n}_{n \mathop \in \N}$ is convergent
we have, from Convergent Sequence in Normed Vector Space is Cauchy Sequence:

there exists $N \in \N$ such that for all $n, m \ge N$, we have $\norm {j_n - j_m}_X < \epsilon$.
So, for $n, m \ge N$, we have: 

$\norm {x_n - x_m}_X < \epsilon$
Since $\epsilon$ was arbitrary, $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy.
Since $X$ is a Banach space, we have: 

$\sequence {x_n}_{n \mathop \in \N}$ converges to a limit $x \in X$.
Since $J$ is continuous, we obtain:














\(\ds L\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} J x_n\)




















\(\ds \)

\(=\)







\(\ds \map J {\lim_{n \mathop \to \infty} x_n}\)





Continuous Mappings preserve Convergent Sequences














\(\ds \)

\(=\)







\(\ds J x\)









Since: 

$J x \in \map J X$
we have: 

$L \in \map J X$
Since $L$ was an arbitrary limit in $\map J X$, we have: 

$\map J X$ contains each limit of a convergent sequence in $\map J X$
So, from Subset of Metric Space contains Limits of Sequences iff Closed:

$\map J X$ is closed in $X^{\ast \ast}$.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $26.1$: The Second Dual




