# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Change_of_Basis_Matrix



Theorem
Let $R$ be a ring with unity.
Let $G$ be a finite-dimensional unitary $R$-module.
Let $A = \sequence {a_n}$ and $B = \sequence {b_n}$ be ordered bases of $G$.

The following definitions of the concept of Change of Basis Matrix are equivalent:

Definition 1
The matrix of change of basis from $A$ to $B$ is the matrix whose columns are the coordinate vectors of the elements of the new basis $\sequence {b_n}$ relative to the original basis $\sequence {a_n}$.

Definition 2
Let $I_G$ be the identity linear operator on $G$.
Let $\sqbrk {I_G; \sequence {a_n}, \sequence {b_n} }$ be the matrix of $I_G$ relative to $\sequence {b_n}$ and $\sequence {a_n}$.

Then $\sqbrk {I_G; \sequence {a_n}, \sequence {b_n} }$ is called the matrix corresponding to the change of basis from $\sequence {a_n}$ to $\sequence {b_n}$.


Proof
It will be shown that the two matrices defined are equal column-wise.

Let $\ds b_i = \sum_{j \mathop = 1}^n c_{i j} a_j$ for $i$ ranging from $1$ to $n$, where $c_{i j}$'s are scalars.
The uniqueness of the above expression is justified by Expression of Vector as Linear Combination from Basis is Unique.

Then by definition of coordinate vector, the $i$th column of the matrix defined in definition 1 is:

$\begin {bmatrix} c_{i 1} & c_{i 2} & \ldots & c_{in} \end {bmatrix}^\intercal$

We also have:

$\ds \map {I_G} {b_i} = b_i = \sum_{j \mathop = 1}^n c_{i j} a_j$

This article contains statements that are justified by handwavery.In particular: The above needs to be clarifiedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So by definition of relative matrix, the $i$th column of the matrix defined in definition 2 is:

$\begin {bmatrix} c_{i 1} & c_{i 2} & \ldots & c_{i n} \end {bmatrix}^\intercal$

The two matrices are equal, so the two definitions are equivalent.
$\blacksquare$





