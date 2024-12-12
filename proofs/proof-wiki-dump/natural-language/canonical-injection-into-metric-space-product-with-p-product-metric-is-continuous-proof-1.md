# 

Source: https://proofwiki.org/wiki/Canonical_Injection_into_Metric_Space_Product_with_P-Product_Metric_is_Continuous/Proof_1

Theorem
Let $M_1 = \struct {A_1, d}$ and $M_2 = \struct {A_2, d'}$ be metric spaces.
Let $\AA := A_1 \times A_2$ be the cartesian product of $A_1$ and $A_2$.

Let $\MM = \struct {\AA, d_p}$ denote the metric space on $\AA$ where $d_p: \AA \to \R$ is one of the $p$-product metrics on $\AA$:

$\map {d_p} {x, y} := \begin {cases}
\paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p} & : p \in \Z_{>0} \\
\ds \max_{i \mathop = 1}^n \set {\map d {x_1, y_1}, \map {d'} {x_2, y_2} } & : p = \infty
\end {cases}$
where:

$x = \tuple {x_1, x_2}$
$y = \tuple {y_1, y_2}$

Let $a \in A_1$ and $b \in A_2$ be fixed and arbitrary.
Let:

$i_b: A_1 \to \AA$ be the mapping defined as:
$\forall x \in A_1: \map {i_b} x = \tuple {x, b}$
$i_a: A_2 \to \AA$ be the mapping defined as:
$\forall y \in A_2: \map {i_a} y = \tuple {a, y}$

Then $i_b$ and $i_a$ are continuous in $M_1$ and $M_2$ respectively.


Proof
Let $\pr_1: \MM \to M_1$ and $\pr_2: \MM \to T_2$ be the first and second projections from $\MM$ onto its factors.
From Projection from Metric Space Product with P-Product Metric is Continuous, both $\pr_1$ and $\pr_2$ are continuous
The result follows from Continuous Mapping to Product Space.
$\blacksquare$





