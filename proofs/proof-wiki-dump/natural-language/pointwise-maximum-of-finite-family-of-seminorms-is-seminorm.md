# 

Source: https://proofwiki.org/wiki/Pointwise_Maximum_of_Finite_Family_of_Seminorms_is_Seminorm



Theorem
Let $\struct {K, \norm {\,\cdot\,}_K}$ be a normed division ring.
Let $X$ be a vector space over $K$. 
Let $\II$ be a set of seminorms on $X$.

Define: 

$\ds q = \max_{p \mathop \in \II} p$
where $\max$ denotes the pointwise maximum over $\II$. 


Proof
Proof of $(\text N 2)$
Let $\lambda \in K$ and $x \in X$. 
Then: 














\(\ds \map q {\lambda x}\)

\(=\)







\(\ds \max_{p \mathop \in \II} \map p {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \max_{p \mathop \in \II} \norm \lambda_K \map p x\)





$(\text N 2)$ in the definition of the seminorm














\(\ds \)

\(=\)







\(\ds \norm \lambda_K \max_{p \mathop \in \II} \map p x\)




















\(\ds \)

\(=\)







\(\ds \norm \lambda_K \max_{p \mathop \in \II} \map p x\)









proving $(\text N 2)$.
$\Box$


Proof of $(\text N 3)$
Let $x, y \in X$. 
Then for each $p \in \II$ we have: 














\(\ds \map p {x + y}\)

\(\le\)







\(\ds \map p x + \map p y\)





$(\text N 3)$ in the definition of the seminorm














\(\ds \)

\(\le\)







\(\ds \max_{p \mathop \in \II} \map p x + \max_{p \mathop \in \II} \map p y\)





Definition of Pointwise Maximum of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map q x + \map q y\)









Taking pointwise maximums over $p \in \II$ we have: 

$\map q {x + y} \le \map q x + \map q y$
$\blacksquare$





