# 

Source: https://proofwiki.org/wiki/Intersection_of_Normal_Subgroup_with_Sylow_P-Subgroup

Theorem
Let $P$ be a Sylow $p$-subgroup of a finite group $G$.
Let $N$ be a normal subgroup of $G$.

Then $P \cap N$ is a Sylow $p$-subgroup of $N$.


Proof
Since $N \lhd G$, we see that:

$\gen {P, N} = P N$
from Subset Product with Normal Subgroup as Generator.
Since $P \cap N \le P$, it follows that:

$\order {P \cap N} = p^k$
where $k > 0$.
By Order of Subgroup Product:

$\order {P N} \order {P \cap N} = \order P \order N$
Hence from Lagrange's Theorem:

$\index N {P \cap N} = \index {P N} P$
By Tower Law for Subgroups:

$\index G P = \index G {P N} \index {P N} P$
Thus:

$\index {P N} P \divides \index G P$
where $\divides$ denotes divisibility.
Thus:

$p \nmid \index {P N} P$
so:

$p \nmid \index N {P \cap N}$
Thus $P \cap N$ is a Sylow $p$-subgroup of $N$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Proposition $11.14 \ \text{(i)}$




