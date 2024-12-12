# 

Source: https://proofwiki.org/wiki/Characterisation_of_Real_Symmetric_Positive_Definite_Matrix/Sufficient_Condition

Theorem
Let $A$ be an $n \times n$ symmetric matrix over $\mathbb R$ such that: 

there exists a nonsingular matrix $C$ such that $A = C^\intercal C$.

Then $A$ is positive definite.


Proof
Let $A$ be a symmetric matrix such that: 

there exists an nonsingular matrix $C$ such that $A = C^\intercal C$.
Let $\mathbf v$ be a non-zero vector. 
Then:














\(\ds \mathbf v^\intercal A \mathbf v\)

\(=\)







\(\ds \mathbf v^\intercal C^\intercal C \mathbf v\)




















\(\ds \)

\(=\)







\(\ds \paren {C \mathbf v}^\intercal C \mathbf v\)





Transpose of Matrix Product














\(\ds \)

\(=\)







\(\ds \paren {C \mathbf v} \cdot \paren {C \mathbf v}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \norm {C \mathbf v}^2\)





Dot Product of Vector with Itself














\(\ds \)

\(>\)







\(\ds 0\)





Euclidean Space is Normed Vector Space



So $A$ is positive definite. 
$\blacksquare$





