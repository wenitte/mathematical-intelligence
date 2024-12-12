# 

Source: https://proofwiki.org/wiki/Excluded_Set_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau_{\bar H} }$ be an excluded set space.
Then $\tau_{\bar H}$ is a topology on $S$, and $T$ is a topological space.


Proof
We have by definition that $S \in \tau_{\bar H}$.
Also, as $H \cap \O = \O$, we have that $\O \in \tau_{\bar H}$.

Now let $U_1, U_2 \in \tau_{\bar H}$.
By definition:

$H \cap U_1 = \O$
and:

$H \cap U_2 = \O$
and so by definition of set intersection:

$H \cap \paren {U_1 \cap U_2} = \O$
So:

$U_1 \cap U_2 \in \tau_{\bar H}$

Now let $\UU \subseteq \tau_{\bar H}$.
We have that:

$\forall U \in \UU: H \cap U = \O$
Hence from Subset of Union:

$H \cap \bigcup \UU = \O$

So all the conditions are fulfilled for $\tau_{\bar H}$ to be a topology on $S$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $7$




