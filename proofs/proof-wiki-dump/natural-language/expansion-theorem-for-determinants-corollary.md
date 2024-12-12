# 

Source: https://proofwiki.org/wiki/Expansion_Theorem_for_Determinants/Corollary

Corollary to Expansion Theorem for Determinants
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $D = \map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $a_{p q}$ be an element of $\mathbf A$.
Let $A_{p q}$ be the cofactor of $a_{p q}$ in $D$.
Let $\delta_{rs}$ be the Kronecker delta.
Then:

$(1): \quad \ds \forall r \in \closedint 1 n: \sum_{k \mathop = 1}^n a_{r k} A_{s k} = \delta_{r s} D$
$(2): \quad \ds \forall r \in \closedint 1 n: \sum_{k \mathop = 1}^n a_{k r} A_{k s} = \delta_{r s} D$

That is, if you multiply each element of a row or column by the cofactor of another row or column, the sum of those products is zero.


Proof
Let $D'$ be the determinant obtained by replacing row $s$ with row $r$.
Let $a'_{ij}$ be an element of $D'$.
Then:

$a'_{ij} = \begin {cases} a_{ij} & : i \ne s \\ a_{rj} & : i = s \end {cases}$
Let the cofactor of $a'_{ij}$ in $D'$ be denoted by $A'_{i j}$.
Then:

$\forall k \in \closedint 1 n: A'_{s k} = A_{s k}$

So by the Expansion Theorem for Determinants:

$\ds D' = \sum_{k \mathop = 1}^n a'_{s k} A'_{s k}$

But the $r$th and $s$th rows are identical.
So by Square Matrix with Duplicate Rows has Zero Determinant:

$D' = 0$
Hence the result.

The result for columns follows from Determinant of Transpose. 
$\blacksquare$





