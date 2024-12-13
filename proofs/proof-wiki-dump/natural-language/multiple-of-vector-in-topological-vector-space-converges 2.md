# 

Source: https://proofwiki.org/wiki/Multiple_of_Vector_in_Topological_Vector_Space_Converges

Theorem
Let $K$ be a topological field. 
Let $\struct {X, \tau}$ be a topological vector space. 
Let $x \in X$.
Let $\lambda \in K$. 
Let $\sequence {\lambda_n}_{n \mathop \in \N}$ be a sequence in $K$ such that $\lambda_n \to \lambda$. 

Then: 

$\lambda_n x \to \lambda x$


Proof
From the definition of a topological vector space, the map $f : K \times \struct {X, \tau} \to X$ defined by:

$\map f {\lambda, y} = \lambda y$
is continuous. 
From Horizontal Section of Continuous Function is Continuous, we therefore have the map $c_x : X \to X$ defined by: 

$\map {c_x} \lambda = \lambda x$
is continuous.
From Continuous Mapping is Sequentially Continuous, $c_x$ is sequentially continuous.
So we have: 

$\lambda_n x \to \lambda x$
$\blacksquare$





