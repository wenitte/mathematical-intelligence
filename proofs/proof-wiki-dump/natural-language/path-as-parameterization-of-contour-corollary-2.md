# 

Source: https://proofwiki.org/wiki/Path_as_Parameterization_of_Contour/Corollary_2

Theorem
Let $\closedint a b$ be a closed real interval.
Let $\gamma: \closedint a b \to \C$ be a path.
Let there exist $n \in \N$ and a subdivision $\set {a_0, a_1, \ldots, a_n}$ of $\closedint a b$ such that:

$\gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ is a smooth path for all $k \in \set {1, \ldots, n}$
where $\gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ denotes the restriction of $\gamma$ to $\closedint {a_{k - 1} } {a_k}$.

Then there exists a contour $C$ with parameterization $\gamma$.

If $\gamma$ is a Jordan arc, then $C$ is a simple contour, and if $\gamma$ is a Jordan curve, then $C$ is a simple closed contour.


Proof
Let $k_1, k_2 \in \set {1, \ldots, n}$, and $t_1 \in \hointr {a_{k_1 - 1} } {a_{k_1} }, t_2 \in \hointr {a_{k_2 - 1} } {a_{k_2} }$.
Then by the definition of Jordan arc, or Jordan curve:

$\map \gamma {t_1} \ne \map \gamma {t_2}$
so:

$\map {\gamma_{k_1} } {t_1} \ne \map {\gamma_{k_2} } {t_2}$

Let instead:

$k \in \set {1, \ldots, n}$
and:

$t \in \hointr {a_{k - 1} } {a_k}$ with $t \ne a_1$.

Then by the definition of Jordan arc, or Jordan curve:

$\map \gamma t \ne \map \gamma {a_n}$
so:

$\map {\gamma_k} t \ne \map {\gamma_n} {a_n}$

By definition, it follows that $C$ is a simple contour.

A Jordan curve is a closed path by its definition.
Path as Parameterization of Contour/Corollary 1 shows that if $\gamma$ is a Jordan curve, then $C$ will be closed, so $C$ is a simple closed contour.
$\blacksquare$





