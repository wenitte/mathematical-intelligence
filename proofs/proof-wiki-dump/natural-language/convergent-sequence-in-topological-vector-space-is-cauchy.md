# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Topological_Vector_Space_is_Cauchy

Theorem
Let $\struct {X, \tau}$ be a topological vector space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a convergent sequence with $x_n \to x$.

Then $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy. 


Proof
Let $V$ be an open neighborhood of ${\mathbf 0}_X$. 
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$, there exists a symmetric open neighborhood $U$ of ${\mathbf 0}_X$ such that: 

$U + U \subseteq V$
Since $x_n \to x$, there exists $N \in \N$ such that: 

$x_n \in x + U$
for $n \ge N$. 
Since $U$ is symmetric, we have $U = -U$ and so: 

$-x_m \in -x + U$
for $m \ge N$.
Then we have: 

$x_n - x_m \in U + U \subseteq V$
for $n, m \ge N$.
So $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy.
$\blacksquare$





