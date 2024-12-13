# 

Source: https://proofwiki.org/wiki/Minimization_on_Relation_Equivalent_to_Minimization_on_Function

Theorem
Let $\RR$ be a $k + 1$-ary relation on $\N^{k + 1}$.
Then the function $g: \N^{k + 1} \to \N$ defined as:

$\map g {n_1, n_2, \ldots, n_k, z} = \mu y \ \map \RR {n_1, n_2, \ldots, n_k, y}$
where $\mu y \ \map \RR {n_1, n_2, \ldots, n_k, y}$ is the minimization operation on $\RR$
is equivalent to minimization on a total function.


Proof
We have that $\map \RR {n_1, n_2, \ldots, n_k, y}$ holds if and only if $\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} = 1$, from the definition of the characteristic function of a relation.
This in turn holds if and only if $\map {\overline{\operatorname{sgn} } } {\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} } = 0$, where $\overline{\operatorname{sgn} }$ is the signum-bar function.

Hence we have:

$\mu y \ \map \RR {n_1, n_2, \ldots, n_k, y} \iff \map {\mu y} {\map {\overline{\operatorname{sgn} } } {\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} } = 0}$.

Since $\overline{\operatorname{sgn}}$ and $\chi_\RR$ are total functions, then so is $\overline{\operatorname{sgn} } \circ \chi_\RR$.
$\blacksquare$





