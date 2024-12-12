# 

Source: https://proofwiki.org/wiki/Cofactor_Sum_Identity


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: including categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J_n$ be the $n \times n$ matrix of all ones.
Let $A$ be an $n \times n$ matrix.
Let $A_{ij}$ denote the cofactor of element $\tuple {i, j}$ in $\map \det A$, $1 \le i, j \le n$.

Then:

$\ds \map \det {A -J_n} = \map \det A - \sum_{i \mathop  = 1}^n \sum_{j \mathop = 1}^n A_{ij} $


Proof
Let $P_j$ equal matrix $A$ with column $j$ replaced by ones, $1\le j \le n$.
Then by the Expansion Theorem for Determinants applied to column $j$ of $P_j$:

$\ds \sum_{j \mathop = 1}^n \map \det {P_j} = \sum_{j \mathop = 1}^n \sum_{i \mathop = 1}^n A_{ij}$
To complete the proof it suffices to prove the equivalent identity:

$\ds \map \det {A -J_n} = \map \det A - \sum_{j \mathop = 1}^n \map \det {P_j}$
Expansion of left hand side $\map \det {A - J_n}$ for the $2 \times 2$ case illustrates how determinant theorems will be used:














\(\ds A\)

\(=\)







\(\ds \begin {pmatrix} a & b \\ c & d \end {pmatrix}\)





where $A$ is an arbitrary $2 \times 2$ matrix














\(\ds J_2\)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 \\ 1 & 1 \end {pmatrix}\)





$J_2$ is the $2 \times 2$ ones matrix














\(\ds \map \det {A -J_2}\)

\(=\)







\(\ds \map \det {\begin {matrix} a - 1 & b - 1 \\ c - 1 & d - 1 \end {matrix} }\)





matrix subtraction














\(\ds \)

\(=\)







\(\ds \map \det {\begin {matrix} a & b - 1 \\ c & d - 1 \end {matrix} } - \map \det {\begin {matrix} 1 & b - 1 \\ 1 & d - 1 \end {matrix} }\)





Determinant as Sum of Determinants














\(\ds \)

\(=\)







\(\ds \map \det {\begin {matrix} a & b - 1 \\ c & d - 1 \end {matrix} } - \map \det {\begin {matrix} 1 & b \\ 1 & d \end {matrix} }\)





Multiple of Row Added to Row of Determinant














\(\ds \)

\(=\)







\(\ds \map \det {\begin {matrix} a & b \\ c & d \end {matrix} } - \map \det {\begin {matrix} a & 1 \\ c & 1 \end {matrix} } - \map \det {\begin {matrix} 1 & b \\ 1 & d \end {matrix} }\)





Determinant as Sum of Determinants














\(\ds \)

\(=\)







\(\ds \map \det A - \map \det {P_2} - \map \det {P_1}\)





Definition of $P_1$ and $P_2$














\(\ds \)

\(=\)







\(\ds \map \det A - \sum_{j \mathop = 1}^2 \map \det {P_j}\)





equivalent identity verified for $n = 2$




Let $A$ be an $n \times n$ matrix.
Let matrix $Q_m$ equal ones matrix $J_n$ with zeros replacing all entries in columns $1$ to $m$. 
For example, for $n = 5$ and $m = 2$:

$Q_2 = \begin {pmatrix}
0 & 0 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 1 \\
\end {pmatrix}$

Induction on $m$ will be applied to prove the induction identity:

$\ds \map \det {A - J_n} = \map \det {A - Q_m} - \sum_{j \mathop = 1}^m \map \det {P_j}$
for $1 \le m \le n$.


Induction step $m = 1$














\(\ds \map \det {A - J_n}\)

\(=\)







\(\ds \map \det {A - Q_1} - \map \det {P_1 - Q_1}\)





$P_1$ equals $A$ with column $1$ all ones.
Determinant as Sum of Determinants















\(\ds \map \det {P_1 - Q_1}\)

\(=\)







\(\ds \map \det {P_1}\)





Add ones in column 1 to columns $2 \cdots n$,
Replacement Rule for Determinant Columns















\(\ds \map \det {A - J_n}\)

\(=\)







\(\ds \map \det {A - Q_1} - \map \det {P_1}\)





combining equations





Induction step $m = k$ and $k < n$ implies $m = k + 1$














\(\ds \map \det {A - J_n}\)

\(=\)







\(\ds \map \det {A - Q_k} - \sum_{j \mathop = 1}^k \map \det {P_j}\)





Induction hypothesis $m = k$














\(\ds \map \det {A - Q_k}\)

\(=\)







\(\ds \map \det {A - Q_{k + 1} } - \map \det {P_{k + 1} - Q_{k + 1} }\)





Determinant as Sum of Determinants on column $k + 1$














\(\ds \map \det {P_{k + 1} - Q_{k + 1} }\)

\(=\)







\(\ds \map \det {P_{k + 1} }\)





Add ones in column $k + 1$ to columns $k + 2 \cdots n$
Multiple of Row Added to Row of Determinant















\(\ds \map \det {A - J_n}\)

\(=\)







\(\ds \map \det {A - Q_{k + 1} } - \map \det {P_{k + 1} } - \sum_{j \mathop = 1}^k \map \det {P_j}\)





combining preceding three equations














\(\ds \map \det {A - J_n}\)

\(=\)







\(\ds \map \det {A - Q_{k + 1} } - \sum_{j \mathop = 1}^{k + 1} \map \det {P_j}\)





Induction completed.





Conclusion

Matrix  $A-Q_n$ equals $A$ because $Q_n$ is the zero matrix.
Let $m = n$ in the induction identity, then:

$\ds \map \det {A - J_n} = \map \det A - \sum_{j \mathop = 1}^n \map \det {P_j}$
$\blacksquare$





