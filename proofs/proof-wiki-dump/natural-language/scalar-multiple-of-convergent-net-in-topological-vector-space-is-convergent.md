# 

Source: https://proofwiki.org/wiki/Scalar_Multiple_of_Convergent_Net_in_Topological_Vector_Space_is_Convergent

Theorem
Let $K$ be a topological field. 
Let $X$ be a topological vector space over $K$.
Let $\struct {\Lambda, \preceq}$ be a directed set.
Let $x \in X$ and $\mu \in K$.
Let $\family {x_\lambda}_{\lambda \in \Lambda}$ be a net converging to $x$.

Then $\family {\mu x_\lambda}_{\lambda \in \Lambda}$ converges to $\mu x$.


Proof
For ease of reading, let $\succeq$ be the inverse relation of $\preceq$.
First consider the case $\mu = 0_K$.
Then $\mu x_n = {\mathbf 0}_X$ for each $n \in \N$. 
From Constant Net is Convergent, we have that $\mu x_\lambda$ converges to ${\mathbf 0}_X$. 
So $\sequence {\lambda x_n}_{n \in \N}$  converges to $\mu x$ for $\mu = 0_K$.

Now take $\mu \ne 0_K$.
Let $U$ be an open neighborhood of $\mu x$.
From Dilation of Open Set in Topological Vector Space is Open, $\mu^{-1} U$ is an open neighborhood of $x$.  
Since $\sequence {x_n}_{n \in \N}$ converges, there exists $\lambda_0 \in \Lambda$ such that:

$x_n \in \mu^{-1} U$ for $\lambda \succeq \lambda_0$.
Then, we have:

$\mu x_n \in U$ for $\lambda \succeq \lambda_0$.
Since $U$ was an arbitrary open neighborhood of $\mu x$, we have that  $\sequence {\mu x_\lambda}_{\lambda \in \Lambda}$ converges to $\mu x$ as required.
$\blacksquare$





