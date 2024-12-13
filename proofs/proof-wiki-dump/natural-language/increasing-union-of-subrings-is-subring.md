# 

Source: https://proofwiki.org/wiki/Increasing_Union_of_Subrings_is_Subring

Theorem
Let $R$ be a ring.
Let $S_0 \subseteq S_1 \subseteq S_2 \subseteq \ldots \subseteq S_i \subseteq \ldots$ be subrings of $R$.

Then the increasing union $S$:

$\ds S = \bigcup_{i \mathop \in \N} S_i$
is a subring of $R$.


Proof
Let $\ds S = \bigcup_{i \mathop \in \N} S_i$.
Clearly $0_R \in S$.
Let $a, b \in S$.
Then $\exists i, j \in \N: a \in S_i, b \in S_j$.
From the construction, we have that either of $S_i$ and $S_j$ contains the other.
Let $l = \max \set {i, j}$ so $a, b \in S_l$.
Then $a + \paren {-b} \in S_l$ and $a b \in S_l$, as $S_l$ is a subring.
Thus $a + \paren {-b} \in S$ and $a b \in S$.
By the Subring Test, $S$ is a subring of $R$.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.3$: Some properties of subrings and ideals: Lemma $2.13 \ \text{(ii)}$




