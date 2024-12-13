# 

Source: https://proofwiki.org/wiki/Projection_from_Metric_Space_Product_with_Euclidean_Metric_is_Continuous/Proof_1

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\AA := A_1 \times A_2$ be the cartesian product of $A_1$ and $A_2$.

Let $\MM = \struct {\AA, d}$ denote the metric space on $\AA$ where $d: \AA \to \R$ is the Euclidean metric on $\AA$:

$\map d {x, y} := \sqrt {\paren {\map {d_1} {x_1, y_1} }^2 + \paren {\map {d_2} {x_2, y_2} }^2}$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.

Let $\pr_1: \MM \to M_1$ and $\pr_2: \MM \to M_2$ denote the first projection and second projection respectively on $\MM$.
Then $\pr_1$ and $\pr_2$ are both ‎continuous on $\MM$.


Proof
The Euclidean metric is an instance of the $p$-product metric:

$\map {d_p} {x, y} := \paren {\paren {\map {d_1} {x_1, y_1} }^p + \paren {\map {d_2} {x_2, y_2} }^p}^{1/p}$
where $p = 2$.
The result is therefore seen to be an instance of Projection from Metric Space Product with P-Product Metric is Continuous.
$\blacksquare$





