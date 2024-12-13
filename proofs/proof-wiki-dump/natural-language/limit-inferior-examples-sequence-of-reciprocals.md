# 

Source: https://proofwiki.org/wiki/Limit_Inferior/Examples/Sequence_of_Reciprocals

Example of Limit Inferior
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{>0}: a_n = \dfrac 1 n$

The limit inferior of $\sequence {a_n}$ is given by:

$\ds \map {\liminf_{n \mathop \to \infty} } {a_n} = 0$


Proof
From Sequence of Reciprocals is Null Sequence, $\sequence {a_n}$ is convergent:

$\ds \lim_{n \mathop \to \infty} \dfrac 1 n = 0$

Let $L$ be the set of all real numbers which are the limit of some subsequence of $\sequence {a_n}$.
By Limit of Subsequence equals Limit of Real Sequence, all such subsequences have limit $0$.

Hence by definition of limit inferior:

$\ds \map {\liminf_{n \mathop \to \infty} } {a_n} = \inf \set 0 = 0$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Lim sup and lim inf: $\S 5.14$: Example $\text {(i)}$




