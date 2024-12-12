# 

Source: https://proofwiki.org/wiki/Comparison_Test_for_Convergence_of_Power_Series

Theorem
Let $A = \ds \sum_{n \mathop \ge 0} a_n z^n$ and $B = \ds \sum_{n \mathop \ge 0} b_n z^n$ be power series in $\C$.
Let $R_A$ and $R_B$ be the radii of convergence of $A$ and $B$ respectively.

Let $\cmod {b_n} \le \cmod {a_n}$ for all $n \in \N$.
Then $R_A \le R_B$.


Proof
Aiming for a contradiction, suppose $R_A > R_B$.
Let $z_0 \in \C$ such that $R_B < \cmod {z_0} < R_A$.
Then $A$ is convergent at $z_0$ but $B$ is divergent at $z_0$.
But by the Comparison Test, if $A$ is convergent at $z_0$ then $B$ is also convergent at $z_0$.
From this contradiction it follows that there can be no such $z_0$.
That is:

$R_A \le R_B$
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $4$




