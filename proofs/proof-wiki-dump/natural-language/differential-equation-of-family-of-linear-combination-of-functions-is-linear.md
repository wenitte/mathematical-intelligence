# 

Source: https://proofwiki.org/wiki/Differential_Equation_of_Family_of_Linear_Combination_of_Functions_is_Linear

Theorem
Consider the one-parameter family of curves:

$(1): \quad y = C \map f x + \map g x$

The differential equation that describes $(1)$ is linear and of first order.


Proof
Differentiating $(1)$ with respect to $x$ gives:

$(2): \quad \dfrac {\d y} {\d x} = C \map {f'} x + \map {g'} x$

Rearranging $(1)$, we have:

$C = \dfrac {y - \map g x} {\map f x}$

Substituting for $C$ in $(2)$:














\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac {y - \map g x} {\map f x} \map {f'} x + \map {g'} x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {f'} x} {\map f x} y - \dfrac {\map g x \map {f'} x} {\map f x} + \map g x\)










which leaves:

$\dfrac {\d y} {\d x} - \dfrac {\map {f'} x} {\map f x} y = \map g x \paren {1 - \dfrac {\map {f'} x} {\map f x} }$
which is linear and of first order.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $6$




