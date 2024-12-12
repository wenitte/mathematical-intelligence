# 

Source: https://proofwiki.org/wiki/Finite_Direct_Sum_of_Noetherian_Module_is_Noetherian

Theorem
Let $A$ be a commutative ring with unity.
Let $n \in \N_{>0}$.
Let $M_1, \ldots, M_n$ be $A$-modules.

Then the direct sum:

$\ds \bigoplus_{i \mathop = 1}^n M_i$
is an $A$-Noetherian module.

Proof
By Direct Sum of Modules is Module, it is an $A$-module.
Thus we only need to show that it is Noetherian.
We prove it by induction.

For $n = 1$, there is nothing to prove.

Let $n \ge 2$.
Suppose that the claim is true for $n-1$, i.e.:

$\ds \bigoplus_{i \mathop = 1}^{n-1} M_i$
is Noetherian.
Then, consider the short exact sequence:

$\ds 0 \longrightarrow \bigoplus_{i \mathop = 1}^{n-1} M_i \stackrel {\alpha} {\longrightarrow} \bigoplus_{i \mathop = 1}^n M_i \stackrel {\beta} {\longrightarrow} M_n \longrightarrow 0$
where:

$\map \alpha {\tuple {x_1, \ldots, x_{n-1} } } := \tuple {x_1, \ldots, x_{n-1}, 0}$
$\map \beta { \tuple {x_1, \ldots, x_n} } := x_n$
Recall that $M_n$ is also Noetherian by hypothesis.
Thus by Short Exact Sequence Condition of Noetherian Modules:

$\ds \bigoplus_{i \mathop = 1}^n M_i$
is Noetherian.
$\blacksquare$





