# 

Source: https://proofwiki.org/wiki/Particular_Point_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.
Then $\tau_p$ is a topology on $S$, and $T$ is a topological space.


Proof
We have by definition that $\O \in \tau_p$, and as $p \in S$ we have that $S \in \tau_p$.

Now let $U_1, U_2 \in \tau_p$.
By definition $p \in U_1$ and $p \in U_2$, and so $p \in U_1 \cap U_2$ by definition of set intersection.
So $U_1 \cap U_2 \in \tau_p$.

Now let $\UU \subseteq \tau_p$.
We have that $\forall U \in \UU: p \in U$.
Hence from Subset of Union $p \in \bigcup \UU$.

So all the properties are fulfilled for $\tau_p$ to be a topology on $S$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology




