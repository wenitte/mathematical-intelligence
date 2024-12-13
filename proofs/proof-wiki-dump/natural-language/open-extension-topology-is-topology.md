# 

Source: https://proofwiki.org/wiki/Open_Extension_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\tau^*_{\bar p}$ be the open extension topology of $\tau$.

Then $\tau^*_{\bar p}$ is a topology on $S^*_p = S \cup \set p$.


Proof
By definition:

$\tau^*_{\bar p} = \set {U: U \in \tau} \cup \set {S^*_p}$

We have that $S^*_p \in \tau^*_{\bar p}$ by definition.
We also have that $\O \in \tau$ so $\O \in \tau^*_{\bar p}$.
Now let $U_1, U_2 \in \tau^*_{\bar p}$.
Then:














\(\ds U_1, U_2\)

\(\in\)







\(\ds \tau\)














\(\ds \leadsto \ \ \)





\(\ds U_1 \cap U_2\)

\(\in\)







\(\ds \tau\)














\(\ds \leadsto \ \ \)





\(\ds U_1 \cap U_2\)

\(\in\)







\(\ds \tau^*_{\bar p}\)










Finally consider $\UU \subseteq \tau^*_{\bar p}$.
Assuming $S^*_p \notin \UU$ we have that $\UU \subseteq \tau$.
So:

$\ds\bigcup \UU \in \tau$
and so:

$\ds \bigcup \UU \in \tau^*_p$
If $S^*_p \in \UU$ then:

$\ds \bigcup \UU = S^*_p \in \tau^*_p$

So $\tau^*_p$ is a topology on $S \cup \set p$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $8$




