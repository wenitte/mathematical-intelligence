# 

Source: https://proofwiki.org/wiki/Binet-Cauchy_Identity



Theorem
$\ds \paren {\sum_{i \mathop = 1}^n a_i c_i} \paren {\sum_{j \mathop = 1}^n b_j d_j} = \paren {\sum_{i \mathop = 1}^n a_i d_i} \paren {\sum_{j \mathop = 1}^n b_j c_j} + \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}$
where all of the $a, b, c, d$ are elements of a commutative ring.
Thus the identity holds for $\Z, \Q, \R, \C$.


Proof 1
Expanding the last term:














\(\ds \)

\(\)







\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i c_i b_j d_j + a_j c_j b_i d_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i d_i b_j c_j + a_j d_j b_i c_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i c_i b_j d_j + a_j c_j b_i d_i} + \sum_{i \mathop = 1}^n a_i c_i b_i d_i\)





These new terms are the same














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i d_i b_j c_j + a_j d_j b_i c_i} - \sum_{i \mathop = 1}^n a_i d_i b_i c_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n a_i c_i b_j d_j - \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n a_i d_i b_j c_j\)





Completing the sums














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n a_i c_i} \paren {\sum_{j \mathop = 1}^n b_j d_j} - \paren {\sum_{i \mathop = 1}^n a_i d_i} \paren {\sum_{j \mathop = 1}^n b_j c_j}\)





Factoring terms indexed by $i$ and $j$




Hence the result.
$\blacksquare$


Proof 2
This is a special case of the Cauchy-Binet Formula:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where:

$\mathbf A$ is an $m \times n$ matrix
$\mathbf B$ is an $n \times m$ matrix.
For $1 \le j_1, j_2, \ldots, j_m \le n$:
$\mathbf A_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
$\mathbf B_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.

In this case $m = 2$, giving:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop \le n} \map \det {\mathbf A_{j_1 j_2} } \, \map \det {\mathbf B_{j_1 j_2} }$



This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Also known as
The Binet-Cauchy Identity is also known as Binet's formula.


Source of Name
This entry was named for Jacques Philippe Marie Binet and Augustin Louis Cauchy.


Historical Note
The Binet-Cauchy Identity is a special case of the Cauchy-Binet Formula, which was presented by Jacques Philippe Marie Binet and Augustin Louis Cauchy on the same day in $1812$.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $30$




