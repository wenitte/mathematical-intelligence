# 

Source: https://proofwiki.org/wiki/Generated_Topology_is_a_Topology


It has been suggested that this page or section be merged into Synthetic Basis formed from Synthetic Sub-Basis.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $X$ be a set.
Let $\SS \subseteq \powerset X$, where $\powerset X$ is the power set of $X$.
Let $\TT_\SS$ be the generated topology for $\SS$.

Then $\TT_\SS$ is a topology on $X$.


Proof
We show that $\SS^* = \set {\bigcap S: S \subseteq \SS \text{ finite} }$ (cf. the definition of the generated topology) is a basis.
By definition of synthetic basis, we need to prove:

$(1): \quad X = \bigcup \SS^*$
$(2): \quad$ For any $U_1, U_2 \in \SS^*$ and $x \in U_1 \cap U_2$ there is a $U \in \SS^*$ such that $x \in U \subseteq U_1 \cap U_2$

First note that $X = \bigcap \O \in \SS^*$ and therefore $\bigcup \SS^* = X$.
Additionally, if $U_1, U_2 \in \SS^*$, then there exist finite sets $S_1, S_2 \subseteq \SS$ such that $U_1 = \bigcap S_1$ and $U_2 = \bigcap S_2$ by the definition of $\SS^*$.
Thus we have:

$U_1 \cap U_2 = \bigcap \paren {S_1 \cup S_2}$
Because $S_1 \cup S_2$ is again a finite set it follows that $U_1 \cap U_2 \in \SS^*$.
This implies $(2)$.
$\blacksquare$





