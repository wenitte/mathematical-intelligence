# 

Source: https://proofwiki.org/wiki/Realification_of_Topological_Vector_Space_is_Topological_Vector_Space

Theorem
Let $\struct {X, \tau}$ be a topological vector space over $\C$.
Let $X_\R$ be the realification of $X$.

Then $\struct {X_\R, \tau}$ is a topological vector space over $\R$. 
Further, $\struct {X, \tau}$ is a Hausdorff topological vector space if and only if $\struct {X_\R, \tau}$ is a Hausdorff topological vector space. 


Proof
Since $\struct {X, \tau}$ is a topological vector space, the vector addition map $+_X : X \times X \to X$ is continuous.
Note that the underlying sets and topologies of $X_\R$ and $X$ are identical, we are only restricting the scalar field.
So the vector addition map $+_{X_\R} : X_\R \times X_\R \to X_\R$ is also continuous.
Again since $\struct {X, \tau}$ is a topological vector space, the scalar multiplication map $\circ_X : \C \times X \to X$.
By the definition of realification, the scalar multiplication map $\circ_{X_\R} : \R \times X \to X$ on the realification is precisely the restriction of $\circ_X$ to $\R \times X$.
From Restriction of Continuous Mapping is Continuous, $\circ_{X_\R}$ is therefore continuous. 
So $\struct {X_\R, \tau}$ is a topological vector space over $\R$.
The topology on $X$ and $X_{\R}$ are the same, so $\struct {X, \tau}$ is a Hausdorff topological vector space if and only if $\struct {X_\R, \tau}$ is a Hausdorff topological vector space.
$\blacksquare$





