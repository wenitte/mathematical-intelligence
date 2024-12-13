# 

Source: https://proofwiki.org/wiki/Scalar_Multiple_of_Convergent_Sequence_in_Topological_Vector_Space_is_Convergent

Theorem
Let $K$ be a topological field. 
Let $X$ be a topological vector space over $K$.
Let $x \in X$.
Let $\sequence {x_n}_{n \in \N}$ be a convergent sequence in $X$ with:

$x_n \to x$
Let $\lambda \in K$.

Then $\sequence {\lambda x_n}_{n \in \N}$ is a convergent sequence in $X$ with:

$\lambda x_n \to \lambda x$.


Proof
First consider the case $\lambda = 0_K$.
Then $\lambda x_n = {\mathbf 0}_X$ for each $n \in \N$. 
From Constant Sequence in Topological Space Converges, we have that $\lambda x_n \to {\mathbf 0}_X = \lambda x$ as $n \to \infty$.
So $\sequence {\lambda x_n}_{n \in \N}$ converges for $\lambda = 0$. 

Now take $\lambda \ne 0_K$.
Let $U$ be an open neighborhood of $\lambda x$.
From Dilation of Open Set in Topological Vector Space is Open, $\lambda^{-1} U$ is an open neighborhood of $x$.  
Since $\sequence {x_n}_{n \in \N}$ converges, there exists $N \in \N$ such that:

$x_n \in \lambda^{-1} U$ for $n \ge N$.
Then, we have:

$\lambda x_n \in U$ for $n \ge N$.
Since $U$ was an arbitrary open neighborhood of $\lambda x$, we have that  $\sequence {\lambda x_n}_{n \in \N}$ converges to $\lambda x$ as required.
$\blacksquare$





