# 

Source: https://proofwiki.org/wiki/Rank_Function/Examples/Sum_of_Powers_of_Prime_Factors

Example of Rank Function
Consider the relational structure $\struct {\Z_{>0}, \divides}$ formed from the strictly positive integers $\Z_{>0}$ under the divisor relation $\divides$.

Let $\operatorname {rk}_1: \Z_{<0} \to \N$ defined as:

$\forall n \in \Z_{<0}: \map {\operatorname {rk}_1} n = \ds \sum_{k \mathop \in \Z_{>0} } \map {i_k} n$
where:

$\ds n = \prod_{k \mathop \in \Z_{>0} } {p_k}^{\map {i_k} n}$
is the prime decomposition of $n$.

That is, $\operatorname {rk}_1$ is the sum of the exponents of the prime divisors of $n$ in the prime decomposition of $n$.

Then $\operatorname {rk}_1$ is a rank function for $\RR$.


Proof
Let $m, n \in \Z_{>0}$ such that $m \divides n$ and $m \ne n$.
Let $p^i \divides m$ for some prime number $p$.
Then:

$p^j \divides n$
where $j \ge i$.
Hence:

$\ds \sum_{k \mathop \in \Z_{>0} } \map {i_k} m \le \sum_{k \mathop \in \Z_{>0} } \map {i_k} n$
But because $m \ne n$ there must be some $\map {i_k} m < \map {i_k} n$.
Hence:

$\ds \sum_{k \mathop \in \Z_{>0} } \map {i_k} m < \sum_{k \mathop \in \Z_{>0} } \map {i_k} n$
and it follows by definition that $\operatorname {rk}_1$ is a rank function for $\RR$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $17$




