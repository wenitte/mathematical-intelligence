# 

Source: https://proofwiki.org/wiki/Normalizer_of_Sylow_p-Subgroup

Theorem
Let $P$ be a Sylow $p$-subgroup of a finite group $G$.
Let $\map {N_G} P$ be the normalizer of $P$.

Then any $p$-subgroup of $\map {N_G} P$ is contained in $P$.

In particular, $P$ is the unique Sylow $p$-subgroup of $\map {N_G} P$.


Proof
Let $Q$ be a $p$-subgroup of $N = \map {N_G} P$.
Let $\order Q = p^m, \order P = p^n$.
By Normalizer of Subgroup is Largest Subgroup containing that Subgroup as Normal Subgroup:

$P \lhd \map {N_G} P$
thus by Subset Product with Normal Subgroup as Generator:

$\gen {P, Q} = P Q$
Thus by Order of Subgroup Product:

$P Q \le G: \order {P Q} = p^{n + m - s}$
where $\order {P \cap Q} = p^s$.
Since $n$ is the highest power of $p$ dividing $\order G$, this is possible only when $m \le s$.
Since $P \cap Q \le Q, s \le m$ thus we conclude that $m = s$ and therefore $P \cap Q = Q$.
Thus from Intersection with Subset is Subset‎:

$Q \subseteq P$

In particular, if $Q$ is a Sylow $p$-subgroup of $\map {N_G} P$, then $Q = P$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Proposition $11.9$




