# 

Source: https://proofwiki.org/wiki/Constant_Net_is_Convergent

Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $\struct {\Lambda, \preceq}$ be a directed set.
Let $x \in X$. 
Define a net $\family {x_\lambda}_{\lambda \in \Lambda}$ by: 

$x_\lambda = x$ for each $\lambda \in \Lambda$.

Then $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$. 


Proof
Let $U$ be an open neighborhood of $x$.
Let $\lambda_0 \in \Lambda$. 
Then we have $x_\lambda \in U$ for all $\lambda \in \Lambda$, and in particular all $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$. 
So $\family {x_\lambda}_{\lambda \in \Lambda}$ converges to $x$.
$\blacksquare$





