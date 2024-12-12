# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Primitive_Recursive/General_Case

Theorem
The constant function of $k$ variables: $f_c^k: \N^k \to \N$, defined as:

$\map {f_c^k} {n_1, n_2, \ldots, n_k} = c$ where $c \in \N$
is primitive recursive‎.


Proof
For $k \ge 1$, let $f_c^k$ be the constant function of $k$ variables with value $c$.
We know from Constant Function is Primitive Recursive that $f_c^1$ is primitive recursive‎.
Now:

$\map {f_c^k} {n_1, n_2, \ldots, n_k} = \map {f_c^1} {n_1} = \map {f_c^1} {\map {\pr_1^k} {n_1, n_2, \ldots, n_k} }$
where $\pr_1^k$ is a projection function which is basic primitive recursive.
So $f_c^k$ is obtained from the primitive recursive‎ function $f_c^1$ and the basic primitive recursive function $\pr_1^k$ by substitution.
Hence by definition, $f_c^k$ is primitive recursive‎.
$\blacksquare$





