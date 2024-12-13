# 

Source: https://proofwiki.org/wiki/Permanent/Examples/Matrix_whose_Entries_are_Product_of_Row_and_Column_Indices

Example of Permanent
The square matrix of the form:

$\begin{pmatrix}
1 \times 1 & 1 \times 2 & \cdots & 1 \times m \\
2 \times 1 & 2 \times 2 & \cdots & 2 \times m \\
\vdots & \vdots & \ddots & \vdots \\
m \times 1 & m \times 2 & \cdots & m \times m
\end{pmatrix}$
has a permanent of $\paren {n!}^3$.


Proof
There are $n!$ terms in a permanent.
By its structure, each one of these has one element from each row multitplied by one element from each column.
Thus each term of the permanent consists of:

$\paren {1 \times 2 \times \cdots \times n} \times \paren {1 \times 2 \times \cdots \times n}$
in some order, that is:

$\paren {n!}^2$
As has been stated, there are $n!$ of these.
Thus the permanent of this matrix is $n! \paren {n!}^2$.
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $15$




