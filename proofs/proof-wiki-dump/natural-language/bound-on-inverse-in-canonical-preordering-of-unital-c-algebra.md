# 

Source: https://proofwiki.org/wiki/Bound_on_Inverse_in_Canonical_Preordering_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\le_A$ be the canonical preordering on $A$.
Let $a \in A$ and $\alpha, \beta > 0$ be such that:

$\alpha {\mathbf 1}_A \le_A a \le_A \beta {\mathbf 1}_A$

Then:

$\beta^{-1} {\mathbf 1}_A \le_A a^{-1} \le_A \alpha^{-1} {\mathbf 1}_A$


Proof
Since $\beta^{-1} {\mathbf 1}_A \le_A a$ and ${\mathbf 0}_A \le_A \beta^{-1} {\mathbf 1}_A$, we have:

$a$ is positive
since $\le_A$ is a preordering.
In particular, $a$ is Hermitian.
From Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we have:

$\map {\sigma_A} a \subseteq \closedint \alpha \beta$
Since $\alpha > 0$, we have that $0 \not \in \map {\sigma_A} a$.
Hence $a$ is invertible.
From Spectrum of Inverse of Element of Unital Algebra, we have:

$\map {\sigma_A} {a^{-1} } = \set {t^{-1} : t \in \map {\sigma_A} a}$
Since $0 < \alpha \le t \le \beta$ for each $t \in \map {\sigma_A} a$, we have:

$\beta^{-1} \le t \le \alpha^{-1}$
Hence we have:

$\map {\sigma_A} {a^{-1} } \subseteq \closedint {\beta^{-1} } {\alpha^{-1} }$
Applying Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum again we have:

$\beta^{-1} {\mathbf 1}_A \le_A a^{-1} \le_A \alpha^{-1} {\mathbf 1}_A$
$\blacksquare$





