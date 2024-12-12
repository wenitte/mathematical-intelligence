# 

Source: https://proofwiki.org/wiki/Function_Obtained_by_Minimization_from_URM_Computable_Relations

Theorem
Let $\RR$ be a URM computable $k+1$-ary relation on $\N^{k + 1}$.
Let the function $f: \N^{k + 1} \to \N$ be a URM computable function.
Let $g: \N^k \to \N$ be the function obtained by minimization from $f$ thus:

$\map g {n_1, n_2, \ldots, n_k} \approx \mu y \map \RR {n_1, n_2, \ldots, n_k, y}$

Then $g$ is also URM computable.


Proof
From Minimization on Relation Equivalent to Minimization on Function, minimization on $\RR$ is equivalent to minimization on $\overline{\operatorname{sgn} } \circ \chi_\RR$.
We have that a Primitive Recursive Function is URM Computable.
By definition, if $\RR$ is URM computable then so is its characteristic function $\chi_\RR$.
We have that $\overline{\operatorname{sgn} }$ is primitive recursive and thus URM computable.
Thus, from Function Obtained by Substitution from URM Computable Functions, $\overline{\operatorname{sgn} } \circ \chi_\RR$ is URM computable.
$\blacksquare$





