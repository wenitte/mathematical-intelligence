# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Non-Unity_Variant_of_Echelon_Form



Theorem
The following definitions of the concept of Non-Unity Variant of Echelon Matrix are equivalent:

Definition 1
$\mathbf A$ is in non-unity echelon form if and only if:

$(1): \quad$ Each row (except perhaps row $1$) starts with a sequence of zeroes
$(2): \quad$ Except when for row $k$ and row $k + 1$ are zero rows, the number of zeroes in this initial sequence in row $k + 1$ is strictly greater than the number of zeroes in this initial sequence in row $k$
$(3): \quad$ The non-zero rows appear before any zero rows.
Definition 2
$\mathbf A$ is in non-unity echelon form if and only if it contains no adjacent rows of the form:
$\quad \begin {pmatrix}
0 & 0 & \cdots & 0 & x_1 & x_2 & \cdots \\
0 & 0 & \cdots & 0 & y_1 & y_2 & \cdots \\
\end {pmatrix}$
where:

$(1): \quad y_1 \ne 0$
$(2): \quad x_1$ can be any value at all, including $0$.


Proof
For ongoing brevity in this proof, the term non-unity echelon matrix will be used to refer to this variant echelon matrix in which the leading coefficients are not necessarily equal to $1$.


$(1)$ implies $(2)$
Let $\mathbf A$ be an non-unity echelon matrix by definition $1$.
Then, apart from zero rows, each row starts with strictly more zeroes than the one before it.
Aiming for a contradiction, suppose there exist adjacent rows in $\mathbf A$ of the form:

$\begin {pmatrix}
0 & 0 & \cdots & 0 & x_1 & x_2 & \cdots \\
0 & 0 & \cdots & 0 & y_1 & y_2 & \cdots \\
\end {pmatrix}$
where $y_1 \ne 0$.
If $x_1 \ne 0$, then the $2$nd of these rows starts with the same number of zeroes as the row before it.
If $x_1 = 0$, then the $2$nd of these rows starts with fewer zeroes as the row before it.
In both cases, this contradicts our definition of a non-unity echelon matrix.
That is, there there exist no adjacent rows in $\mathbf A$ of the form:

$\begin {pmatrix}
0 & 0 & \cdots & 0 & x_1 & x_2 & \cdots \\
0 & 0 & \cdots & 0 & y_1 & y_2 & \cdots \\
\end {pmatrix}$
where $y_1 \ne 0$.

That is $\mathbf A$ is a non-unity echelon matrix by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\mathbf A$ be a non-unity echelon matrix by definition $2$.
Then by definition there exist no adjacent rows in $\mathbf A$ of the form:

$\begin {pmatrix}
0 & 0 & \cdots & 0 & x_1 & x_2 & \cdots \\
0 & 0 & \cdots & 0 & y_1 & y_2 & \cdots \\
\end {pmatrix}$
where $y_1 \ne 0$.
Suppose row $k$ does not start with a sequence of zeroes.
Then it cannot start with strictly more zeroes than the previous row unless $k = 1$, in which case there is no previous row.
Hence criterion $1$ of definition $1$ is satisfied.

Suppose row $k$, where $k > 1$, is not a zero row.
Let its leading coefficient be in column $r$.
Then the leading coefficient of row $k - 1$ must be in column $s$ where $s < r$.
That is, row $k$ starts with strictly more zeroes than row $k - 1$.
Hence criterion $2$ of definition $1$ is satisfied.

Suppose row $k$ is a zero row such that $k < m$.
Then by definition row $k + 1$ cannot have a leading coefficient.
So row $k + 1$ and all rows following must be zero rows.
Hence criterion $3$ of definition $1$ is satisfied.

Thus $\mathbf A$ is a non-unity echelon matrix by definition $1$.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations




