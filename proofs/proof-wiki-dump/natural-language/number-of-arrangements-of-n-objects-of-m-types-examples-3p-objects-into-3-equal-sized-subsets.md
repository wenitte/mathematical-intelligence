# 

Source: https://proofwiki.org/wiki/Number_of_Arrangements_of_n_Objects_of_m_Types/Examples/3p_Objects_into_3_Equal_Sized_Subsets

Example of Use of Number of Arrangements of $n$ Objects of $m$ Types
Let $S$ be a collection of $3 p$ objects.
Let $S$ need to be partitioned into $3$ subsets of size $p$.
The total number $N$ of ways this can be done is:

$N = \dfrac {\paren {3 p}!}  {\paren {p!}^3 \times 3!}$


Proof
From Number of Arrangements of $n$ Objects of $3$ Types, we can partition $S$ into $3$ subsets in $\dfrac {\paren {3 p}!}  {\paren {p!}^3}$ different ways.
However, each of these subsets is of the same size $p$.
Hence they cannot be counted as different.
So we have counted $3!$ ways which are apparently all different, but are in fact the same.
Hence we need to divide our total by $3!$

Hence $N$ can be given by:

$N = \dfrac {\paren {3 p}!}  {\paren {p!}^3 \times 3!}$
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The number of ways of dividing $3 p$ things into three equal groups each containing $p$ things




