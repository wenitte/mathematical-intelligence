# 

Source: https://proofwiki.org/wiki/Canonical_Injection_into_Metric_Space_Product_with_P-Product_Metric_is_Continuous/Proof_2

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
We want to show that:

$\forall c_1 \in A_1: \forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map d {x, c} < \delta \implies \map {d_p} {\map {i_b} x, \map {i_b} c} < \epsilon$
and:

$\forall c_2 \in A_2: \forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map {d'} {x, c} < \delta \implies \map {d_p} {\map {i_a} c, \map {i_a} x} < \epsilon$

Let $c_1$ and $c_2$ in $A_1$ and $A_2$ respectively be arbitrary.
Let $\epsilon \in \R_{>0}$ also be arbitrary.
Let $\delta = \epsilon$.

Let $x \in A_1$ such that $\map d {x, c_1} < \delta$.
We have:














\(\ds \map {d_p} {\map {i_b} x, \map {i_b} {c_1} }\)

\(=\)







\(\ds \map {d_p} {\tuple {x, b}, \tuple {c_1, b} }\)





Definition of $i_b$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\paren {\paren {\map d {x, {c_1} } }^p + \paren {\map {d'} {b, b} }^p}^{1/p} & : p \in \Z_{>0} \\
\ds \max_{i \mathop = 1}^n \set {\map d {x, c_1}, \map {d'} {b, b} } & : p = \infty
\end {cases}\)






Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\paren {\paren {\map d {x, {c_1} } }^p + 0^p}^{1/p} & : p \in \Z_{>0} \\
\ds \max_{i \mathop = 1}^n \set {\map d {x, {c_1} }, 0} & : p = \infty
\end {cases}\)






Metric Space Axiom $(\text M 1)$ applied to $\map {d'} {b, b}$














\(\ds \)

\(=\)







\(\ds \map d {x, {c_1} }\)





after simplification














\(\ds \)

\(<\)







\(\ds \epsilon\)





as $\epsilon = \delta$



We have that $c_1$ and $\epsilon$ are arbitrary.
Hence, by definition, $i_b$ is continuous in $M_1$.
$\Box$

Let $y \in A_2$ such that $\map d {y, c_2} < \delta$.
We have:














\(\ds \map {d_p} {\map {i_a} y, \map {i_a} {c_2} }\)

\(=\)







\(\ds \map {d_p} {\tuple {a, y}, \tuple {a, c_2} }\)





Definition of $i_a$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\paren {\paren {\map d {a, a} }^p + \paren {\map {d'} {y, c_2} }^p}^{1/p} & : p \in \Z_{>0} \\
\ds \max_{i \mathop = 1}^n \set {\map d {a, a}, \map {d'} {y, c_2} } & : p = \infty
\end {cases}\)






Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\paren {0^p + \paren {\map {d'} {y, c_2} }^p}^{1/p} & : p \in \Z_{>0} \\
\ds \max_{i \mathop = 1}^n \set {0, \map {d'} {y, c_2} } & : p = \infty
\end {cases}\)






Metric Space Axiom $(\text M 1)$ applied to $\map d {a, a}$














\(\ds \)

\(=\)







\(\ds \map d {y, {c_2} }\)





after simplification














\(\ds \)

\(<\)







\(\ds \epsilon\)





as $\epsilon = \delta$



We have that $c_2$ and $\epsilon$ are arbitrary.
Hence, by definition, $i_a$ is continuous in $M_2$.
$\blacksquare$





