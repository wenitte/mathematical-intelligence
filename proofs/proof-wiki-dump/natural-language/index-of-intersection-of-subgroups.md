# 

Source: https://proofwiki.org/wiki/Index_of_Intersection_of_Subgroups



Theorem
Let $G$ be a group.
Let $H, K$ be subgroups of finite index of $G$.

Then:

$\index G {H \cap K} \le \index G H \index G K$
where $\index G H$ denotes the index of $H$ in $G$.
Note that here the symbol $\le$ is being used with its meaning less than or equal to.

Equality holds if and only if $H K = \set {h k: h \in H, k \in K} = G$.


Corollary
Let $H$ be a subgroup of $G$.
Let $K$ be a subgroup of finite index of $G$.
Then:

$\index H {H \cap K} \le \index G K$


Proof
Note that $H \cap K$ is a subgroup of $H$.
From Tower Law for Subgroups, we have:

$\index G {H \cap K} = \index G H \index H {H \cap K}$
From Index in Subgroup, also:

$\index H {H \cap K} \le \index G K$
Combining these results yields the desired inequality.

Again from Index in Subgroup, it follows that:

$\index H {H \cap K} = \index G K$
if and only if $H K = G$.
$\blacksquare$


Sources
1967: John D. Dixon: Problems in Group Theory ... (previous) ... (next): $1$: Subgroups: $1.\text{T}.2$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 39 \beta$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Exercise $9$




