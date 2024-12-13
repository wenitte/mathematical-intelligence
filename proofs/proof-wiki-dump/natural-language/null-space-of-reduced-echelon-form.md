# 

Source: https://proofwiki.org/wiki/Null_Space_of_Reduced_Echelon_Form

Theorem
Let $\mathbf A$ be a matrix in the matrix space $\map {\MM_\R} {m, n}$ such that:

$\mathbf A \mathbf x = \mathbf 0$
represents a homogeneous system of linear equations.
The null space of $\mathbf A$ is the same as that of the null space of the reduced row echelon form of $\mathbf A$:

$\map {\mathrm N} {\mathbf A} = \map {\mathrm N} {\map {\mathrm {rref} } {\mathbf A} }$


Proof
By the definition of null space:

$\mathbf x \in \map {\mathrm N} {\mathbf A} \iff \mathbf A \mathbf x = \mathbf 0$
From the corollary to Row Equivalent Matrix for Homogeneous System has same Solutions:

$\mathbf A \mathbf x = \mathbf 0 \iff \map {\mathrm {rref} } {\mathbf A} \mathbf x = \mathbf 0$
Hence the result, by the definition of set equality.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




