# 

Source: https://proofwiki.org/wiki/Definition_by_Cases_is_Primitive_Recursive/Corollary

Corollary to Definition by Cases is Primitive Recursive
Let $\RR_1, \RR_2, \ldots, \RR_k$ be primitive recursive relations on $\N^l$ such that:

$\forall i, j \in \set{1, 2, \ldots, k}: \RR_i \implies \lnot \RR_j$, that is, all relations are mutually exclusive
$\forall \tuple {n_1, n_2, \ldots, n_l} \in \N^l: \exists i \in \set {1, 2, \ldots, k}: \map {\RR_i} {n_1, n_2, \ldots, n_l}$, that is, the set of relations is exhaustive.
Let $\forall i \in \set {1, 2, \ldots, k}: g_i: \N^l \to \N$  be primitive recursive functions.
Let $f: \N^l \to \N$ be defined as:
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
Immediate from Definition by Cases is Primitive Recursive and Set Operations on Primitive Recursive Relations.
$\blacksquare$





