# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_Sigma-Compact_Spaces_is_not_always_Sigma-Compact

Theorem
Let $I$ be an indexing set with infinite cardinality.
Let $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be a family of topological spaces indexed by $I$.
Let $\ds \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$.

Let each of $\struct {S_\alpha, \tau_\alpha}$ be $\sigma$-compact.

Then it is not necessarily the case that $\struct {S, \tau}$ is also $\sigma$-compact.


Proof
Let $T = \struct {\Z_{\ge 0}, \tau}$ be the topological space formed by the discrete topology on the set of positive integers.
Let $T' = \struct {\ds \prod_{\alpha \mathop \in \Z_{\ge 0} } \struct {\Z_{\ge 0}, \tau}_\alpha, \tau'}$ be the countable Cartesian product of $\struct {\Z_{\ge 0}, \tau}$ indexed by $\Z_{\ge 0}$ with the product topology $\tau'$.

From Countable Discrete Space is Sigma-Compact, $T$ is $\sigma$-compact.
From Countable Product of Countable Discrete Spaces is not Sigma-Compact, $T'$ is not $\sigma$-compact.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




