# 

Source: https://proofwiki.org/wiki/Excluded_Point_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.
Then $\tau_{\bar p}$ is a topology on $S$, and $T$ is a topological space.


Proof
We have by definition that $S \in \tau_{\bar p}$, and as $p \notin \O$ we have that $\O \in \tau_{\bar p}$.

Now let $U_1, U_2 \in \tau_{\bar p}$.
By definition $p \notin U_1$ and $p \notin U_2$.
By definition of set intersection:

$p \notin U_1 \cap U_2$
So $U_1 \cap U_2 \in \tau_{\bar p}$.

Now let $\UU \subseteq \tau_{\bar p}$.
We have that $\forall U \in \UU: p \notin U$.
Hence from Subset of Union $p \notin \bigcup \UU$.

So all the properties are fulfilled for $\tau_{\bar p}$ to be a topology on $S$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology




