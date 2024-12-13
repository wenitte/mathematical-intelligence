# 

Source: https://proofwiki.org/wiki/Path_as_Parameterization_of_Contour


This article is complete as far as it goes, but it could do with expansion.In particular: Generalise to Real Cartesian SpaceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $\closedint a b$ be a closed real interval.
Let $\gamma: \closedint a b \to \C$ be a path.
Let there exist $n \in \N$ and a subdivision $\set {a_0, a_1, \ldots, a_n}$ of $\closedint a b$ such that:

$\gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ is a smooth path for all $k \in \set {1, \ldots, n}$
where $\gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } }$ denotes the restriction of $\gamma$ to $\closedint {a_{k - 1} } {a_k}$.

Then there exists a contour $C$ with parameterization $\gamma$.


Corollary 1
If $\gamma$ is a closed path, then $C$ is a closed contour.


Corollary 2
If $\gamma$ is a Jordan arc, then $C$ is a simple contour, and if $\gamma$ is a Jordan curve, then $C$ is a simple closed contour.


Proof
Put $\gamma_k = \gamma {\restriction_{\closedint {a_{k - 1} } {a_k} } } : \closedint {a_{k - 1} } {a_k} \to \C$.
By definition, it follows that there exists a directed smooth curve $C_k$ with parameterization $\gamma_k$.
For all $k \in \set {1, \ldots, n - 1}$, we have:

$\map {\gamma_k} {a_k} = \map {\gamma_{k + 1} } {a_k}$

Define the contour $C$ as the concatenation $C_1 \cup C_2 \cup \ldots \cup C_n$.
Then, it follows by definition that $\gamma$ is a possible parameterization of $C$.
$\blacksquare$





