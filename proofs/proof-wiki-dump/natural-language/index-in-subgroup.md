# 

Source: https://proofwiki.org/wiki/Index_in_Subgroup



Theorem
Let $G$ be a group.
Let $H, K$ be subgroups of finite index of $G$.

Then:

$\index H {H \cap K} \le \index G K$
where $\index G K$ denotes the index of $K$ in $G$.

Equality happens if and only if $G = H K$.


Proof
We list out all the left cosets of $H \cap K$ in $H$:

$H / \paren {H \cap K} = \set {h_n \paren {H \cap K}: h_n \in H, n \in I}$
where $I$ is some finite indexing set.

For each pair $h_i, h_j \in H \subseteq G$, where $i \ne j$:

$h_i^{-1} h_j \notin H \cap K \quad$ Cosets are Equal iff Product with Inverse in Subgroup
Since $H$ is a subgroup, $h_i^{-1} h_j \in H$.
Thus:

$h_i^{-1} h_j \notin K$
By Cosets are Equal iff Product with Inverse in Subgroup, $h_i K$ and $h_j K$ are different left cosets.
Hence there must be at least $\index H {H \cap K}$ left cosets of $K$ in $G$, namely $h_n K$ for each $n \in I$.
It follows that $\index H {H \cap K} \le \index G K$.
$\Box$


Equality
Suppose equality holds.
Then the construction above gives all left cosets of $K$ in $G$.
For any $x \in G$, $x \in h_i K$ for some $h_i \in H$.
Hence $G \subseteq H K$.
The inclusion $H K \subseteq G$ is seen from Group Axiom $\text G 0$: Closure.
Hence $G = H K$ by definition of set equality.
$\Box$

Now suppose $G = H K$.
To show equality we must show that the construction above gives all left cosets of $K$ in $G$.

Let $g K$ be a left coset of $K$ in $G$, where $x \in G$.
Since $G = H K$:

$\exists h \in H, k \in K: g = h k$
Then by Left Coset Equals Subgroup iff Element in Subgroup:

$g K = h \paren {k K} = h K$
Since $h \in H$:

$\exists i \in I: h \in h_i \paren {H \cap K}$
By Element in Left Coset iff Product with Inverse in Subgroup:

$h^{-1} h_i \in H \cap K \subseteq K$
Thus by Left Cosets are Equal iff Product with Inverse in Subgroup:

$h_i K = h K = g K$
Hence all left cosets of $K$ in $G$ are obtained in the construction.
This gives equality.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Exercise $9$




