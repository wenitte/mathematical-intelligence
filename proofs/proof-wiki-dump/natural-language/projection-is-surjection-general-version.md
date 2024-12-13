# 

Source: https://proofwiki.org/wiki/Projection_is_Surjection/General_Version

Theorem
For all non-empty sets $S_1, S_2, \ldots, S_j, \ldots, S_n$, the $j$th projection $\pr_j$ on $\ds \prod_{i \mathop = 1}^n S_i$ is a surjection.


Proof
Consider the $j$th projection.
As long as none of $S_1, S_2, \ldots, S_n$ is the empty set, then:

$\ds \forall x \in S_j: \exists \tuple {s_1, s_2, \ldots, s_{j - 1}, x, s_{j + 1}, \ldots, s_n} \in \prod_{k \mathop = 1}^n S_k: \map {\pr_j} {\tuple {s_1, s_2, \ldots, s_{j - 1}, x, s_{j + 1}, \ldots, s_n} } = x$
Hence the result.
$\blacksquare$





