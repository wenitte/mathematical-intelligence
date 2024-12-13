# 

Source: https://proofwiki.org/wiki/Laplace%27s_Expansion_Theorem



Theorem
Let $D$ be the determinant of order $n$.
Let $r_1, r_2, \ldots, r_k$ be integers such that:

$1 \le k < n$
$1 \le r_1 < r_2 < \cdots < r_k \le n$
Let $\map D {r_1, r_2, \ldots, r_k \mid u_1, u_2, \ldots, u_k}$ be an order-$k$ minor of $D$.
Let $\map {\tilde D} {r_1, r_2, \ldots, r_k \mid u_1, u_2, \ldots, u_k}$ be the cofactor of $\map D {r_1, r_2, \ldots, r_k \mid u_1, u_2, \ldots, u_k}$.

Then:

$\ds D = \sum_{1 \mathop \le u_1 \mathop < \cdots \mathop < u_k \mathop \le n} \map D {r_1, r_2, \ldots, r_k \mid u_1, u_2, \ldots, u_k} \, \map {\tilde D} {r_1, r_2, \ldots, r_k \mid u_1, u_2, \ldots, u_k}$

A similar result applies for columns.


Proof
Let us define $r_{k + 1}, r_{k + 2}, \ldots, r_n$ such that:

$1 \le r_{k + 1} < r_{k + 2} < \cdots < r_n \le n$
$\rho = \tuple {r_1, r_2, \ldots, r_n}$ is a permutation on $\N^*_n$.
Let $\sigma = \tuple {s_1, s_2, \ldots, s_n}$ be a permutation on $\N^*_n$.
Then by Permutation of Determinant Indices we have:














\(\ds D\)

\(=\)







\(\ds \sum_\sigma \map \sgn \rho \, \map \sgn \sigma \prod_{j \mathop = 1}^n a_{\map \rho j \, \map \sigma j}\)




















\(\ds \)

\(=\)







\(\ds \sum_\sigma \paren {-1}^{\sum_{i \mathop = 1}^k \paren {r_i + s_i} } \map \sgn {\map \rho {r_1, \ldots, r_k} } \, \map \sgn {\map \sigma {s_1, \ldots, s_k} } \map \sgn {\map \rho {r_{k + 1}, \ldots, r_n} } \, \map \sgn {\map \sigma {s_{k + 1}, \ldots, s_n} } \prod_{j \mathop = 1}^n a_{\map \rho j \, \map \sigma j}\)









We can obtain all the permutations $\sigma$ exactly once by separating the numbers $1, \ldots, n$ in all possible ways into a set of $k$ and $n - k$ numbers.
We let $\tuple {s_1, \ldots, s_k}$ vary over the first set and $\tuple {s_{k + 1}, \ldots, s_n}$ over the second set.
So the summation over all $\sigma$ can be replaced by:

$\tuple {u_1, \ldots, u_n} = \map \sigma {1, \ldots, n}$
$u_1 < u_2 < \cdots < u_k, u_{k + 1} < u_{k + 2} < \cdots < u_n$
$\tuple {s_1, \ldots, s_k} = \map \sigma {u_1, \ldots, u_k}$
$\tuple {s_{k + 1}, \ldots, s_n} = \map \sigma {u_{k + 1}, \ldots, u_n}$

Thus we get:














\(\ds D\)

\(=\)







\(\ds \sum_{\map \sigma {u_1, \ldots, u_n} } \paren {-1}^{\sum_{i \mathop = 1}^k \paren {r_i + u_i} } \sum_{\map \sigma {u_1, \ldots, u_k} } \, \map \sgn {\map \rho {r_1, \ldots, r_k} } \, \map \sgn {\map \sigma {s_1, \ldots, s_k} } \prod_{j \mathop = 1}^k a_{\map \rho j \, \map \sigma j}\)




















\(\ds \)

\(\times\)







\(\ds \sum_{\map \sigma {u_{k + 1}, \ldots, u_n} } \map \sgn {\map \rho {r_{k + 1}, \ldots, r_n} } \, \map \sgn {\map \sigma {s_{k + 1}, \ldots, s_n} } \prod_{j \mathop = k + 1}^n a_{\map \rho j \, \map \sigma j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map \sigma {u_1, \ldots, u_n} } \paren {-1}^{\sum_{i \mathop = 1}^k \paren {r_i + u_i} } \begin {vmatrix} a_{r_1 u_1} & \cdots & a_{r_1 u_k} \\ \vdots & \ddots & \vdots \\ a_{r_k u_1} & \cdots & a_{r_k u_k} \end {vmatrix} \times \begin {vmatrix} a_{r_{k + 1} u_{k + 1} } & \cdots & a_{r_{k + 1} u_n} \\ \vdots & \ddots & \vdots \\ a_{r_n u_{k + 1} } & \cdots & a_{r_n u_n} \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map \sigma {u_1, \ldots, u_n} } \paren {-1}^{\sum_{i \mathop = 1}^k \paren {r_i + u_i} } \map D {r_1, \ldots, r_k \mid u_1, \ldots, u_k} \times \map D {r_{k + 1}, \ldots, r_n \mid u_{k + 1}, \ldots, u_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map \sigma {u_1, \ldots, u_n} } \map D {r_1, \ldots, r_k \mid u_1, \ldots, u_k} \times \map {\tilde D} {r_1, \ldots, r_k \mid u_1, \ldots, u_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le u_1 \mathop < \cdots \mathop < u_k \mathop \le n} \map D {r_1, \ldots, r_k \mid u_1, \ldots, u_k} \, \map {\tilde D} {r_1, \ldots, r_k \mid u_1, \ldots, u_k} \sum_{u_{k + 1}, \ldots, u_n} 1\)









That last inner sum extends over all integers which satisfy:

$\tuple {u_1, \ldots, u_n} = \map \sigma {1, \ldots, n}$
$u_1 < u_2 < \cdots < u_k, u_{k + 1} < u_{k + 2} < \cdots < u_n$
But for each set of $u_1, \ldots, u_k$, then the integers $u_{k + 1}, \ldots, u_n$ are clearly uniquely determined.
So that last inner sum equals 1 and the theorem is proved.


This article, or a section of it, needs explaining.In particular: I'm not too happy about this, it seems a bit handwavey and imprecise. I'm going to have to revisit it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The result for columns follows from Determinant of Transpose. 
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Comment
This gives us an expansion of the determinant $D$ in terms of $k$ specified rows.
We form all possible order-$k$ minors of $D$ which involve all of these rows, and multiply each of them by their cofactors.
The sum of these products is equal to $D$.


Also known as
This theorem is also known as the Laplace cofactor expansion.


Examples
Arbitrary $3 \times 3$ Matrix
Let $\mathbf A$ be the matrix defined as:

$\mathbf A = \begin {bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end {bmatrix}$
Then $\map \det {\mathbf A}$ can be calculated using Laplace's Expansion Theorem as follows.

Expanding row $2$:














\(\ds \map \det {\mathbf A}\)

\(=\)







\(\ds \paren {-1}^{2 + 1} \times 4 \begin {vmatrix} 2 & 3 \\ 8 & 9 \end {vmatrix}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{2 + 2} \times 5 \begin {vmatrix} 1 & 3 \\ 7 & 9 \end {vmatrix}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{2 + 3} \times 6 \begin {vmatrix} 1 & 2 \\ 7 & 8 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds - 4 \paren {2 \times 9 - 3 \times 8}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 5 \paren {1 \times 9 - 3 \times 7}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds 6 \paren {1 \times 8 - 2 \times 7}\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {24 - 18} + 5 \paren {9 - 21} + 6 \paren {14 - 8}\)




















\(\ds \)

\(=\)







\(\ds 0\)









This shows that $\mathbf A$ is singular.


Also see
Expansion Theorem for Determinants: the special case where $k = 1$


Source of Name
This entry was named for Pierre-Simon de Laplace.


Sources
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.2$: Functions on vectors: $\S 2.2.5$: Determinants




