# 

Source: https://proofwiki.org/wiki/Orthogonal_Group_is_Subgroup_of_General_Linear_Group

Theorem
Let $k$ be a field.
Let $\map {\operatorname O} {n, k}$ be the $n$th orthogonal group on $k$.
Let $\GL {n, k}$ be the $n$th general linear group on $k$.

Then $\map {\operatorname O} {n, k}$ is a subgroup of $\GL {n, k}$.


Proof
From Unit Matrix is Orthogonal, the unit matrix $\mathbf I_n$ is orthogonal.
Let $\mathbf A, \mathbf B \in \map {\operatorname O} {n, k}$.
Then, by definition, $\mathbf A$ and $\mathbf B$ are orthogonal.
Then by Inverse of Orthogonal Matrix is Orthogonal:

$\mathbf B^{-1}$ is a orthogonal matrix.
By Product of Orthogonal Matrices is Orthogonal Matrix:

$\mathbf A \mathbf B^{-1}$ is a orthogonal matrix.
Thus by definition of orthogonal group:

$\mathbf A \mathbf B^{-1} \in \map {\operatorname O} {n, k}$
Hence the result by One-Step Subgroup Test.
$\blacksquare$





