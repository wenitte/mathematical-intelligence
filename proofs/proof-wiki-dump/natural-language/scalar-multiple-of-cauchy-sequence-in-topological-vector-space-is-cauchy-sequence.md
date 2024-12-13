# 

Source: https://proofwiki.org/wiki/Scalar_Multiple_of_Cauchy_Sequence_in_Topological_Vector_Space_is_Cauchy_Sequence

Theorem
Let $K$ be a topological field. 
Let $X$ be a topological vector space over $K$.
Let $\sequence {x_n}_{n \in \N}$ be a Cauchy sequence in $X$.
Let $\lambda \in K$.

Then $\sequence {\lambda x_n}_{n \in \N}$ is a Cauchy sequence in $X$.


Proof
First consider the case $\lambda = 0_K$.
Then $\lambda x_n = {\mathbf 0}_X$ for each $n \in \N$. 
From Constant Sequence in Topological Space Converges, we have that $\lambda x_n \to {\mathbf 0}_X$ as $n \to \infty$.
From Convergent Sequence in Topological Vector Space is Cauchy, $\sequence {\lambda x_n}_{n \in \N}$ is therefore Cauchy.

Now take $\lambda \ne 0$. 
Let $U$ be an open neighborhood of ${\mathbf 0}_X$.
From Dilation of Open Set in Topological Vector Space is Open, $\lambda^{-1} U$ is an open neighborhood of ${\mathbf 0}_X$.
Since $\sequence {x_n}_{n \in \N}$ is Cauchy, there exists $N \in \N$ such that:

$x_n - x_m \in \lambda^{-1} U$ for $n, m \ge N$.
We therefore have:

$\lambda x_n - \lambda x_m \in U$ for $n, m \ge N$.
Since $U$ was an arbitrary open neighborhood of ${\mathbf 0}_X$, we have that $\sequence {\lambda x_n}_{n \in \N}$ is Cauchy.
$\blacksquare$





