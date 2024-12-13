# 

Source: https://proofwiki.org/wiki/Image_of_Cauchy_Sequence_in_Topological_Vector_Space_is_von_Neumann-Bounded

Theorem
Let $\struct {X, \tau}$ be a topological vector space. 
Let $\sequence {x_n}_{n \in \N}$ be a Cauchy sequence. 
Let:

$E = \set {x_n : n \in \N}$

Then $E$ is von Neumann-bounded. 


Proof
Let $W$ be an open neighborhood of ${\mathbf 0}_X$.
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, take a balanced open neighborhood of ${\mathbf 0_X}$, $V \subseteq W$. 
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$, there exists a symmetric open neighborhood $U$ of ${\mathbf 0}_X$ such that: 

$U + U \subseteq V$
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, we can take $U$ to be balanced.
Since $\sequence {x_n}_{n \in \N}$ is Cauchy, there exists $N \in \N$ such that: 

$x_n \in x_N + U$
for $n \ge N$.
From Topological Vector Space as Union of Dilations of Open Neighborhood of Origin, there exists $M \in \N$ such that: 

$x_N \in k U$
Then we have: 

$x_n \in x_N + U \subseteq k U + U \subseteq k \paren {U + U} \subseteq k V$
for $n \ge N$. 
Applying Topological Vector Space as Union of Dilations of Open Neighborhood of Origin again, for each $1 \le j \le N - 1$ we have $r_j \in \N$ such that $x_j \in r_j V$. 
Taking $K = \max \set {r_1, \ldots, r_{N - 1}, k}$, we have: 

$x_n \in K V$ for all $n \in \N$.
Since $V$ is balanced, we have that: 

$x_n \in s V$ for all $s > K$.
That is: 

$x_n \in s W$ for all $s > K$.
$\blacksquare$





