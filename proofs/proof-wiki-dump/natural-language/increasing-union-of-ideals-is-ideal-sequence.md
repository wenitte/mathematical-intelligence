# 

Source: https://proofwiki.org/wiki/Increasing_Union_of_Ideals_is_Ideal/Sequence

Theorem
Let $R$ be a ring.
Let $S_0 \subseteq S_1 \subseteq S_2 \subseteq \dotsb \subseteq S_i \subseteq \dotsb$ be ideals of $R$.

Then the increasing union $S$:

$\ds S = \bigcup_{i \mathop \in \N} S_i$
is an ideal of $R$.


Proof
Let $\ds S = \bigcup_{i \mathop \in \N} S_i$.
From Increasing Union of Subrings is Subring, we have that $S$ is a subring of $R$.
Now we need to show that it is an ideal of $R$.

Let $a \in S$.
Then $\exists i \in \N: a \in S_i$.
Let $b \in R$.
Then $a b \in S_i$ and $b a \in S_i$, as $S_i$ is an ideal of $R$.
Thus $a b \in S$ and $b a \in S$.
So $S$ is an ideal of $R$.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.3$: Some properties of subrings and ideals: Lemma $2.13 \ \text{(ii)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $17$




