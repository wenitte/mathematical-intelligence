# 

Source: https://proofwiki.org/wiki/Closed_Extension_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\tau^*_p$ be the closed extension topology of $\tau$.

Then $\tau^*_p$ is a topology on $S^*_p = S \cup \set p$.


Proof
By definition:

$\tau^*_p = \set {U \cup \set p: U \in \tau} \cup \set \O$

We have that $\O \in \tau^*_p$ by definition.
We also have that $S \in \tau$ so $S \cup \set p \in \tau^*_p$.
Now let $U_1, U_2 \in \tau^*_p$.
Then $U_1^* = U_1 \setminus \set p \in \tau, U_2^* = U_2 \setminus \set p \in \tau$.
Then $p \in U_1$ and $p \in U_2$ and so $p \in U_1 \cap U_2$.
So $U_1 \cap U_2 = \paren {U_1^* \cap U_2^*} \cup \set p \in \tau^*_p$. 

Finally consider $\UU \subseteq \tau^*_p$.

$\ds \bigcup \UU = \bigcup_{U \mathop \in \UU} \paren {U \setminus \set p} \cup \set p$
So $\ds \bigcup \UU \in \tau^*_p$.

So $\tau^*_p$ is a topology on $S \cup \set p$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $20$




