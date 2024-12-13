# 

Source: https://proofwiki.org/wiki/Path_as_Parameterization_of_Contour/Corollary_1

Theorem
Let $\closedint a b$ be a closed real interval.
Let $\gamma: \closedint a b \to \C$ be a path.
Let there exist $n \in \N$ and a subdivision $\set {a_0, a_1, \ldots, a_n}$ of $\closedint a b$ such that:

$\gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ is a smooth path for all $k \in \set {1, \ldots, n}$
where $\gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ denotes the restriction of $\gamma$ to $\closedint {a_{k - 1} } {a_k}$.

Then there exists a contour $C$ with parameterization $\gamma$.

If $\gamma$ is a closed path, then $C$ is a closed contour.


Proof
By definition of closed path, we have

$\map \gamma a = \map {\gamma_1} {a_0} = \map {\gamma_n} {a_n}$
so:

$C_1$ has start point $\map \gamma a$
and:

$C_n$ has end point $\map \gamma a$.

By definition, it follows that $C$ is a closed contour.
$\blacksquare$





