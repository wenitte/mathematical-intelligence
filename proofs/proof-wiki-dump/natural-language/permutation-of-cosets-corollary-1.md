# 

Source: https://proofwiki.org/wiki/Permutation_of_Cosets/Corollary_1

Theorem
Let $G$ be a group.
Let $H \le G$ such that $\index G H = n$ where $n \in \Z$.

Then:

$\exists N \lhd G: N \lhd H: n \divides \index G H \divides n!$


Proof
Apply Permutation of Cosets to $H$ and let $N = \map \ker \theta$.
Then:

$N \lhd G$ and $N \lhd H$
so from the Correspondence Theorem:

$H / N \le G / N$
such that:

$\index {G / N} {H / N} = n$
Thus:

$n \divides \index G N$
Also by Permutation of Cosets:

$\exists K \in S_n: G / N \cong K$
Thus:

$\index G N \divides n!$
as required.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Corollary $9.23$




