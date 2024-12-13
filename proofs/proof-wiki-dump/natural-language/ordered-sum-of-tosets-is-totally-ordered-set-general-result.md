# 

Source: https://proofwiki.org/wiki/Ordered_Sum_of_Tosets_is_Totally_Ordered_Set/General_Result


This page is deprecated.In particular: Ordered Sum as defined in 1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis incompatible with definition of Definition:Order SumTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $S_1, S_2, \ldots, S_n$ all be tosets.
Let $T_n$ be the ordered sum of $S_1, S_2, \ldots, S_n$:

$\forall n \in \N_{>0}: T_n = \begin{cases}
S_1 & : n = 1 \\
T_{n - 1} + S_n & : n > 1
\end{cases}$
Then $T_n$ is a toset.


Proof
From Ordered Sum of Tosets is Totally Ordered Set, $S_1 + S_2$ is a toset.
Suppose $T_{n-1}$ is a toset.
Given that $S_n$ is a toset, it follows from Ordered Sum of Tosets is Totally Ordered Set that $T_{n-1} + S_n$ is also a toset.
The result follows by induction.
$\blacksquare$





