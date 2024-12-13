# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_between_Finite-Dimensional_Normed_Vector_Spaces_is_Closed

Theorem
Let $m, n \in \N_{> 0}$ be natural numbers.
Let $A \in \R^{m \times n}$ be a matrix.
Let $\ker A = \set {\mathbf x \in \R^n : A \mathbf x = 0}$ be the kernel of $A$.

Then $\ker A$ is a closed subspace of $\R^n$.


Proof
Let $T_A : \R^n \to \R^m$ be the linear transformation such that:

$\forall \mathbf x \in \R^n : T_A \mathbf x := A \mathbf x$
By Linear Transformations between Finite-Dimensional Normed Vector Spaces are Continuous, $T_A : \R^n \to \R^m$ is continuous. 
We have that Singleton in Normed Vector Space is Closed. 
Hence, $\set {\mathbf 0}$ is closed in $\R^n$.
By the corollary of Mapping is Continuous iff Inverse Images of Open Sets are Open, the inverse image of $\set {\mathbf 0}$ under $T_A$ is closed in $\R^n$.
However:

$\map {T^{-1}_A} {\set {\mathbf 0}} = \set {\mathbf x \in \R^n : A \mathbf x = 0} = \ker A$
Hence, $\ker A$ is closed in $\R^n$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




