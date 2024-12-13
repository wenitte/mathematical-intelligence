# 

Source: https://proofwiki.org/wiki/Resolvent_Set_of_Element_in_Closed_Unital_Subalgebra_of_Banach_Algebra_is_Clopen_in_Resolvent_Set

Theorem
Let $A$ be a Banach algebra.
Let $B$ be a closed unital subalgebra of $A$.
Let $x \in B$.
Let $\map {\rho_A} x$ and $\map {\rho_B} x$ be the resolvent sets of $x$ in $A$ and $B$ respectively. 

Then $\map {\rho_B} x$ is clopen in $\map {\rho_A} x$. 


Proof
Let $\map G A$ and $\map G B$ be the group of units of $A$ and $B$ respectively. 
First, from Resolvent Set of Element in Subalgebra we have:

$\map {\rho_B} x \subseteq \map {\rho_A} x$
Define $R : \map {\rho_A} x \to A$ by: 

$\map R \lambda = \paren {\lambda {\mathbf 1}_A - x}^{-1}$
for each $\lambda \in \map {\rho_A} x$. 
From Resolvent Mapping is Continuous: Banach Algebra, $R$ is continuous.
Hence from the definition of a continuous mapping and since $B$ is closed, we have that:

$R^{-1} \sqbrk B$ is closed in $\map {\rho_A} x$.
Note that $\lambda {\mathbf 1}_A - x \in \map G B$ if and only if $\lambda {\mathbf 1}_A - x \in \map G A$ and $\paren {\lambda {\mathbf 1}_A - x}^{-1} \in B$.
That is, $R^{-1} \sqbrk B = \map {\rho_B} x$.
So $\map {\rho_B} x$ is closed in $\map {\rho_A} x$.
From Resolvent Set of Element of Banach Algebra is Open, $\map {\rho_B} x$ is open in $A$.
Hence $\map {\rho_B} x$ is open in $\map {\rho_A} x$.
We conclude that $\map {\rho_B} x$ is clopen in $\map {\rho_A} x$.
$\blacksquare$





