# 

Source: https://proofwiki.org/wiki/Characteristic_Function_Measurable_iff_Set_Measurable



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $E \subseteq X$.

Then the following are equivalent:

$(1): \quad E \in \Sigma$; that is, $E$ is a $\Sigma$-measurable set
$(2): \quad \chi_E: X \to \set {0, 1}$, the characteristic function of $E$, is $\Sigma$-measurable


Proof
$(1)$ implies $(2)$
Assume that $E \in \Sigma$.

It is clear that $x \notin \set {0, 1}$ implies $\map {\chi_E^{-1} } x = \O$.
Hence Preimage of Union under Mapping and Characteristic Function Determined by 1-Fiber yield, for any $\alpha \in \R$:

$\set {x \in X: \map {\chi_E} x \ge \alpha} = \begin{cases} \O & \text{if $1 < \alpha$}\\
E & \text{if } 0 < \alpha \le 1 \\
X & \text{if } \alpha \le 0 \end{cases}$
Since $\Sigma$ is a $\sigma$-algebra, $X \in \Sigma$.
By assumption, also $E \in \Sigma$.
Lastly, Sigma-Algebra Contains Empty Set ensures $\O \in \Sigma$.

This establishes $(4)$ of Characterization of Measurable Functions.
Hence $\chi_E$ is $\Sigma$-measurable.
$\Box$


$(2)$ implies $(1)$
Assume that $\chi_E$ is $\Sigma$-measurable.

Since for all $x \in X$, it holds that:

$\map {\chi_E} x > 0 \iff x \in E$
it follows that:

$E = \map {\chi^{-1} } {\openint 0 {+\infty} }$
and thus $E \in \Sigma$ as $\chi_E$ is $\Sigma$-measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.5 \ \text{(i)}$




