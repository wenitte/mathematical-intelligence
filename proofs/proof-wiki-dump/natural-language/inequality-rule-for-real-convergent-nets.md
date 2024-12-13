# 

Source: https://proofwiki.org/wiki/Inequality_Rule_for_Real_Convergent_Nets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {\Lambda, \preceq}$ be a directed set.

Let $\family {x_\lambda}_{\lambda \mathop \in \Lambda}$ and $\family {y_\lambda}_{\lambda \mathop \in \Lambda}$ be indexed families of elements in $\R$.
Let $\family {x_\lambda}_{\lambda \mathop \in \Lambda}$ and $\family {y_\lambda}_{\lambda \mathop \in \Lambda}$ be convergent to the following limits:

$\ds \lim_{\lambda \mathop \in \Lambda} x_\lambda = l$
$\ds \lim_{\lambda \mathop \in \Lambda} y_\lambda = m$

Let there exist $\lambda \in \Lambda$ such that:

$\forall \mu \in \Lambda : \lambda \preceq \mu: x_\mu \le y_\mu$

Then:

$l \le m$


Proof
Aiming for a contradiction, suppose

$l > m$

Let $\epsilon = \dfrac {\paren{l - m}} 2$.
Hence:

$\epsilon > 0$
and:

$(1) \quad l - \epsilon = m + \epsilon$

By definition of convergence:

$\exists \lambda_1 \in \Lambda : \forall \mu \in \Lambda : \lambda_1 \preceq \mu \implies \size{l - x_\mu} < \epsilon$
and:

$\exists \lambda_2 \in \Lambda : \forall \mu \in \Lambda : \lambda_2 \preceq \mu \implies \size{m - y_\mu} < \epsilon$

From Closed Interval Defined by Absolute Value:

$(2) \quad \forall \mu \in \Lambda : \lambda_1 \preceq \mu \implies l - \epsilon < x_\mu$
and:

$(3) \quad \forall \mu \in \Lambda : \lambda_2 \preceq \mu \implies m + \epsilon > y_\mu$

By definition of directed set:

$\exists \mu \in \Lambda : \lambda, \lambda_1, \lambda_2 \preceq \mu$

We have:














\(\ds x_\mu\)

\(>\)







\(\ds l - \epsilon\)





from $(2)$














\(\ds \)

\(=\)







\(\ds m + \epsilon\)





from $(1)$














\(\ds \)

\(>\)







\(\ds y_\mu\)





from $(3)$




This contradicts the hypothesis:

$\forall \mu \in \Lambda : \lambda \preceq \mu: x_\mu \le y_\mu$

Hence:

$l \le m$
$\blacksquare$





