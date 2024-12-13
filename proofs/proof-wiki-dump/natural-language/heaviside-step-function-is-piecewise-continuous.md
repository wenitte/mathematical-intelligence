# 

Source: https://proofwiki.org/wiki/Heaviside_Step_Function_is_Piecewise_Continuous

Theorem
Let $c \ge 0$ be a constant real number.

The Heaviside step function:

$\map {\mu_c} t = \begin {cases} 1 & : t > c \\ 0 & : t < c \end {cases}$
is piecewise continuous for any interval of the form:

$\closedint {c - M} {c + M}$
where $M > 0$ is some arbitrarily large constant.


Proof
Let the finite subdivision of $\mu_c$ be:

$\set {c - M, c, c + M}$

Let $\epsilon > 0$.
For $t \to \paren {c - M}^+$, choose $\delta$ to be any number at all, because:

$c - M < t < c - M + \delta \implies \size {\map {\mu_c} t - 0} = \size {0 - 0} < \epsilon$
holds, from True Statement is implied by Every Statement.
The case for $t \to c^-$ is proved similarly.

For $t \to c^+$, again, choose $\delta$ to be any number at all, because:

$c - \delta < t < c \implies \size {\map {\mu_c} t - 1} = \size {1 - 1} < \epsilon$
holds, from True Statement is implied by Every Statement.
The case for $t \to \paren {c + M}^-$ is proved similarly.

For all other $t$, we invoke Continuity of Heaviside Step Function.
$\blacksquare$





