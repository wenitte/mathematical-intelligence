# 

Source: https://proofwiki.org/wiki/Permutation_of_Cosets/Corollary_2

Corollary to Permutation of Cosets
Let $G$ be a group.
Let $p$ be the smallest prime such that:

$p \divides \order G$
where $\divides$ denotes divisibility.

Let $\exists H: H \le G$ such that $\order H = p$.
Then $H$ is a normal subgroup of $G$.


Proof
Apply Permutation of Cosets: Corollary 1 to $H$ to find some $N \lhd G$ such that: 

$\index G N \divides p!$
Because $\index G N \divides \order G$, it divides $\gcd \set {\order G, p!}$.
Because $p$ is the smallest prime dividing $\order G$, it follows that:

$\gcd \set {\order G, p!} = p$
Thus:

$\index G N = p = \index G H$
Because $N \subseteq H$, it must follow that $N = H$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Corollary $9.25$




