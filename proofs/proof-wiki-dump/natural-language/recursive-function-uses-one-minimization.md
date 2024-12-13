# 

Source: https://proofwiki.org/wiki/Recursive_Function_uses_One_Minimization

Theorem
Every recursive function can be obtained from the basic primitive recursive functions using:

substitution
primitive recursion
at most one minimization on a function.


Proof
Let $f: \N^k \to \N$ be any recursive function.
Consider the minimization operation on the $k + 2$-ary relation $\map \RR {n_1, n_2, \ldots, n_k, y}$:

$\mu y \mathrel \RR \tuple {n_1, n_2, \ldots, n_k, y}$
Consider the 
From Minimization on Relation Equivalent to Minimization on Function, this is equivalent to:

$\map {\mu y} {\map {\overline {\operatorname{sgn} } } {\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} } = 0}$.

So we can rewrite the statement of Kleene's Normal Form Theorem as:

$(1) \quad \map f {n_1, n_2, \ldots, n_k} \approx \map U {\map {\mu z} {\map {\overline {\operatorname{sgn} } } {\map {\chi_\RR} {e, n_1, n_2, \ldots, n_k, z} } = 0} }$.
From the proof of that theorem, we have that $T_k$ is primitive recursive.
Hence from the definition of characteristic function, so is $\chi_{T_k}$.


This article, or a section of it, needs explaining.In particular: What is $T_k$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We also know that $\overline {\operatorname{sgn} }$ is primitive recursive.
We also have by hypothesis that $U$ is primitive recursive.
Hence all of $\chi_{T_k}$, $\overline {\operatorname{sgn} }$ and $U$ can be defined without using minimization.
So the only minimization involved in obtaining the values of $f$ in $(1)$ is the one explicitly mentioned in $(1)$.
Hence the result.
$\blacksquare$





