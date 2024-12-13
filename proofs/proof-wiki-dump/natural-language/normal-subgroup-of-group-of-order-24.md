# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_of_Group_of_Order_24

Theorem
Let $G$ be a group of order $24$.
Then $G$ has either:

a normal subgroup of order $8$
or:

a normal subgroup of order $4$.


Proof
We note that:

$24 = 3 \times 2^3$
Hence a Sylow $2$-subgroup of $G$ is of order $8$.

Let $n_2$ denote the number of Sylow $2$-subgroups of $G$.
By the Fourth Sylow Theorem:

$n_2 \equiv 1 \pmod 2$ (that is, $n_2$ is odd
and from the Fifth Sylow Theorem:

$n_2 \divides 24$
where $\divides$ denotes divisibility.
It follows that $n_3 \in \set {1, 3}$.

Suppose $n_2 = 1$.
Let $P$ denote the unique Sylow $2$-subgroup of $G$.
From Sylow $p$-Subgroup is Unique iff Normal, $P$ is normal.
This is therefore the required normal subgroup of order $8$.
$\Box$

Suppose $n_2 = 3$.
Let $S_1$, $S_2$ and $S_3$ denote the $3$ Sylow $2$-subgroups of $G$.
Each has order $8$, as noted earlier.
Consider the product $S_1 S_2$.
By Order of Subgroup Product:

$\order {S_1 S_2} = \dfrac {2^3 2^3} {2^r}$
where:

$\order {S_1 S_2}$ denotes the order of $S_1 S_2$
$\order {S_1 \cap S_2} = 2^r$

As $S_1 S_2 \subseteq G$ and $\order G = 24$:

$\order {S_1 S_2} \le 24$
Hence:














\(\ds 2^3 2^3\)

\(\le\)







\(\ds \order {S_1 S_2} \times 2^r\)














\(\ds \leadsto \ \ \)





\(\ds 64\)

\(\le\)







\(\ds 24 \times 2^r\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(\ge\)







\(\ds 2\)









As $S_1 \cap S_2$ is a proper subgroup of $S_1$, it can have no more than $2^2 = 4$ elements.
So if $G$ has $3$ Sylow $2$-subgroups, the intersection of any $2$ of them is of order $4$.

Let $T = S_1 \cap S_2$, so that $\order T = 4$.
We have that:

$\index T {S_1} = 2$
where $\index T {S_1}$ denotes the index of $T$ in $S_1$.
From Subgroup of Index 2 is Normal, $T$ is normal in $S_1$.
Similarly, $T$ is normal in $S_2$.

Thus $S_1$ and $S_2$ are both subgroups of the normalizer $\map {N_G} T$ of $T$ in $G$.
Thus $H = \gen {S_1, S_2}$ is a subgroup of $\map {N_G} T$.
Hence $T$ is a normal subgroup of $H$.
As $H$ is a subgroup of $\map {N_G} T$, it contains $S_1 S_2$ as a subset.
But $S_1 S_2$ contains $\dfrac {2^6} {2^2} = 16$ elements.
The only subgroup of $G$ containing $16$ elements has to be $G$ itself.
So $H = G$ and so $\map {N_G} T = G$.
That is, $T$ is a normal subgroup of $G$.

This is therefore the required normal subgroup of order $4$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(6)$ Groups of order $24$: Proposition $12.7$




