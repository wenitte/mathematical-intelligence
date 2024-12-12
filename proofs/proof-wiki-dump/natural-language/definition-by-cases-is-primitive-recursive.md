# 

Source: https://proofwiki.org/wiki/Definition_by_Cases_is_Primitive_Recursive

Theorem
Let $\RR_1, \RR_2, \ldots, \RR_k$ be primitive recursive relations on $\N^l$ such that:

$\forall i, j \in \set{1, 2, \ldots, k}: \RR_i \implies \lnot \RR_j$, that is, all relations are mutually exclusive
$\forall \tuple {n_1, n_2, \ldots, n_l} \in \N^l: \exists i \in \set {1, 2, \ldots, k}: \map {\RR_i} {n_1, n_2, \ldots, n_l}$, that is, the set of relations is exhaustive.
Let $\forall i \in \set {1, 2, \ldots, k}: g_i: \N^l \to \N$  be primitive recursive functions.

Then the function $f: \N^l \to \N$ defined as:
$\quad \map f {n_1, n_2, \ldots, n_l} = \begin{cases}
\map {g_1} {n_1, n_2, \ldots, n_l} & : \map {\RR_1} {n_1, n_2, \ldots, n_l} \\
\map {g_2} {n_1, n_2, \ldots, n_l} & : \map {\RR_2} {n_1, n_2, \ldots, n_l} \\
\quad \vdots & \quad \vdots \\
\map {g_k} {n_1, n_2, \ldots, n_l} & : \map {\RR_k} {n_1, n_2, \ldots, n_l}
\end{cases}$
is primitive recursive.


Corollary
The definition can be made more flexible by defining $f$ as follows:
$\quad \map f {n_1, n_2, \ldots, n_l} = \begin {cases}
\map {g_1} {n_1, n_2, \ldots, n_l} & : \map {\RR_1} {n_1, n_2, \ldots, n_l} \\
\map {g_2} {n_1, n_2, \ldots, n_l} & : \map {\RR_2} {n_1, n_2, \ldots, n_l} \\
\quad \vdots & \quad \vdots \\
\map {g_{k - 1} } {n_1, n_2, \ldots, n_l} & : \map {\RR_{k - 1} } {n_1, n_2, \ldots, n_l} \\
\map {g_k} {n_1, n_2, \ldots, n_l} & : \text {otherwise}
\end {cases}$
where "otherwise" can be replaced by:

$\map {\RR_k} {n_1, n_2, \ldots, n_l} = \lnot \paren {\map {\RR_1} {n_1, n_2, \ldots, n_l} \lor \map {\RR_2} {n_1, n_2, \ldots, n_l} \lor \ldots \lor \map {\RR_{k - 1} } {n_1, n_2, \ldots, n_l} }$
Thus we need to define only $k - 1$ mutually exclusive relations as the "otherwise" case takes care of the default case.


Proof
We have:














\(\ds \map f {n_1, n_2, \ldots, n_l}\)

\(=\)







\(\ds \map {g_1} {n_1, n_2, \ldots, n_l} \times \map {\chi_{\RR_1} } {n_1, n_2, \ldots, n_l}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map {g_2} {n_1, n_2, \ldots, n_l} \times \map {\chi_{\RR_2} } {n_1, n_2, \ldots, n_l}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map {g_k} {n_1, n_2, \ldots, n_l} \times \map {\chi_{\RR_k} } {n_1, n_2, \ldots, n_l}\)









because if $\tuple {n_1, n_2, \ldots, n_l} \in \N^k$, there is a unique $r$ such that $\map {\RR_r} {n_1, n_2, \ldots, n_l}$.
Then $\map {\chi_{\RR_r} } {n_1, n_2, \ldots, n_l} = 1$ and $\map {\chi_{\RR_s} } {n_1, n_2, \ldots, n_l} = 0$ for $s \ne r$.
Then the value of the right hand side is $\map {g_r} {n_1, n_2, \ldots, n_l}$ as required.

Since $\RR_1, \RR_2, \ldots, \RR_k$ are primitive recursive, the functions $\chi_{\RR_1}, \chi_{\RR_2}, \ldots, \chi_{\RR_k}$ are primitive recursive as well.
Hence $f$ is obtained by substitution from:

the primitive recursive function $\operatorname{add}$
the primitive recursive functions $g_j$
the primitive recursive functions $\chi_{\RR_j}$.
Hence the result.
$\blacksquare$





