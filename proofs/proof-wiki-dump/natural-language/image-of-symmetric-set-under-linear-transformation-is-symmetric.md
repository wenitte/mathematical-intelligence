# 

Source: https://proofwiki.org/wiki/Image_of_Symmetric_Set_under_Linear_Transformation_is_Symmetric

Theorem
Let $X$ and $Y$ be vector spaces over a subfield of $\C$.
Let $C$ be a symmetric subset of $X$.
Let $T : X \to Y$ be a linear transformation.

Then $\map T C$ is a symmetric subset of $Y$.


Proof
Let $y \in \map T C$.
Then there exists $x \in C$ such that $y = T x$.
Then from linearity we have $-y = \map T {-x}$. 
Since $C$ is symmetric, we have $-x \in C$.
So $-y \in \map T C$.
So $\map T C$ is symmetric.
$\blacksquare$





