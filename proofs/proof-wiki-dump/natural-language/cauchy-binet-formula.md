# 

Source: https://proofwiki.org/wiki/Cauchy-Binet_Formula



Theorem
Let $\mathbf A$ be an $m \times n$ matrix.
Let $\mathbf B$ be an $n \times m$ matrix.
Let $1 \le j_1, j_2, \ldots, j_m \le n$.
Let $\mathbf A_{j_1 j_2 \ldots j_m}$ denote the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
Let $\mathbf B_{j_1 j_2 \ldots j_m}$ denote the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.

Then:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \mathop \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where $\det$ denotes the determinant.


Proof
Let $\tuple {k_1, k_2, \ldots, k_m}$ be an ordered $m$-tuple of integers.
Let $\map \epsilon {k_1, k_2, \ldots, k_m}$ denote the sign of $\tuple {k_1, k_2, \ldots, k_m}$.
Let $\tuple {l_1, l_2, \ldots, l_m}$ be the same as $\tuple {k_1, k_2, \ldots, k_m}$ except for $k_i$ and $k_j$ having been transposed.
Then from Transposition is of Odd Parity:

$\map \epsilon {l_1, l_2, \ldots, l_m} = -\map \epsilon {k_1, k_2, \ldots, k_m}$
Let $\tuple {j_1, j_2, \ldots, j_m}$ be the same as $\tuple {k_1, k_2, \ldots, k_m}$ by arranged into non-decreasing order.
That is:

$j_1 \le j_2 \le \cdots \le j_m$
Then it follows that:

$\map \det {\mathbf B_{k_1 \cdots k_m} } = \map \epsilon {k_1, k_2, \ldots, k_m} \map \det {\mathbf B_{j_1 \cdots j_m} }$
Hence:














\(\ds \map \det {\mathbf A \mathbf B}\)

\(=\)







\(\ds \sum_{1 \mathop \le l_1, \mathop \ldots \mathop , l_m \mathop \le m} \map \epsilon {l_1, \ldots, l_m} \paren {\sum_{k \mathop = 1}^n a_{1 k} b_{k l_1} } \cdots \paren {\sum_{k \mathop = 1}^n a_{m k} b_{k l_m} }\)





Definition of Determinant of Matrix














\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le k_1, \mathop \ldots \mathop , k_m \mathop \le n} a_{1 k_1} \cdots a_{m k_m} \sum_{1 \mathop \le l_1, \mathop \ldots \mathop , l_m \mathop \le m} \map \epsilon {l_1, \ldots, l_m} b_{k_1 l_1} \cdots b_{k_m l_m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le k_1, \mathop \ldots \mathop , k_m \mathop \le n} a_{1 k_1} \cdots a_{m k_m} \map \det {\mathbf B_{k_1 \cdots k_m} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le k_1, \mathop \ldots \mathop , k_m \mathop \le n} a_{1 k_1} \map \epsilon {k_1, \ldots, k_m} \cdots a_{m k_m} \map \det {\mathbf B_{j_1 \cdots j_m} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop \le j_2 \mathop \le \cdots \mathop \le j_m \mathop \le n} \map \det {\mathbf A_{j_1 \cdots j_m} } \map \det {\mathbf B_{j_1 \cdots j_m} }\)









If two $j$s are equal:

$\map \det {\mathbf A_{j_1 \cdots j_m} } = 0$
$\blacksquare$


Examples
Cauchy-Binet Formula: $m = n$
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be a square matrices of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$

That is, the determinant of the product is equal to the product of the determinants.


Cauchy-Binet Formula: $m = 1$
Let $\mathbf A = \sqbrk a_{1 n}$ be a row matrix with $n$ columns.
and $\mathbf B = \sqbrk b_{n 1}$ be a column matrix with $n$ rows.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{j \mathop = 1}^n a_j b_j$
where:

$a_j$ is element $a_{1 j}$ of $\mathbf A$
$b_j$ is element $b_{j 1}$ of $\mathbf B$.


Cauchy-Binet Formula: Matrix by Transpose
Let $\mathbf A$ be an $m \times n$ matrix.
Let $\mathbf A^\intercal$ be the transpose $\mathbf A$.
Let $1 \le j_1, j_2, \ldots, j_m \le n$.
Let $\mathbf A_{j_1 j_2 \ldots j_m}$ denote the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
Let $\mathbf A^\intercal_{j_1 j_2 \ldots j_m}$ denote the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf A^\intercal$.

Then:

$\ds \map \det {\mathbf A \mathbf A^\intercal} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \paren {\map \det {\mathbf A_{j_1 j_2 \ldots j_m} } }^2$
where $\det$ denotes the determinant.


Cauchy-Binet Formula: $m > n$
Let $\mathbf A$ be an $m \times n$ matrix.
Let $\mathbf B$ be an $n \times m$ matrix.
Let $m > n$.
Then:

$\map \det {\mathbf A \mathbf B} = 0$


Cauchy-Binet Formula: $m = 2$
$\ds \paren {\sum_{i \mathop = 1}^n a_i c_i} \paren {\sum_{j \mathop = 1}^n b_j d_j} = \paren {\sum_{i \mathop = 1}^n a_i d_i} \paren {\sum_{j \mathop = 1}^n b_j c_j} + \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}$
where all of the $a, b, c, d$ are elements of a commutative ring.
Thus the identity holds for $\Z, \Q, \R, \C$.


Also known as
The Cauchy-Binet Formula is also known, confusingly, as the Binet-Cauchy Identity, which is a direct consequence of this.


Source of Name
This entry was named for Augustin Louis Cauchy and Jacques Philippe Marie Binet.


Historical Note
The Cauchy-Binet Formula was presented by Augustin Louis Cauchy and Jacques Philippe Marie Binet to Journal de l'École Polytechnique on the same day in $1812$.


Sources
1813: J. Binet: Mémoire sur un système du formules analytiques, et leur application à des considérations géométriques (J. l'École Polytechnique Vol. 9: pp. 280 – 354)
1815: Cauchy: Mémoire sur les fonctions qui ne peuvent obtenir que deux valeurs égales et de signes contraires par suite des transpositions operees entre les variables qu'elles renferment (J. l'École Polytechnique Vol. 10: pp. 29 – 112)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $46$




