# 

Source: https://proofwiki.org/wiki/Point_in_Set_Closure_iff_Limit_of_Net



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $E \subseteq X$ be a subset. 
Let $\map \cl E$ be the closure of $E$ in $\struct {X, \tau}$.

Then $x \in \map \cl E$ if and only if there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ in $E$ converging to $x$. 


Proof
Necessary Condition
Let $x \in \map \cl E$.
Let $\Lambda$ be the set of open neighborhoods of $x$ in $\struct {X, \tau}$. 
From Open Neighborhoods of Point form Directed Ordering, $\struct {\Lambda, \supseteq}$ is a directed set.
For each $U \in \Lambda$, we have $U \cap E \ne \O$ from the definition of closure.
So for each $U \in \Lambda$ we can pick $x_U \in U \cap E$, forming a net $\family {x_U}_{U \in \Lambda}$ valued in $E$.
We show that $\family {x_U}_{U \in \Lambda}$ converges to $x$.
Let $V$ be an open neighborhood of $x$ in $\struct {X, \tau}$.
Then if $U \supseteq V$, we have $x_V \in V \cap E \subseteq U \cap E \subseteq U$.
Hence $\family {x_U}_{U \in \Lambda}$ converges to $x$.
$\Box$

Sufficient Condition
Let $x \in X$.
Suppose that there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ in $E$ converging to $x$.
Let $U$ be an open neighborhood of $x$ in $\struct {X, \tau}$.
Then since $\family {x_\lambda}_{\lambda \in \Lambda}$ converges, there exists $\lambda_0 \in \Lambda$ such that: 

$x_\lambda \in U$ for all $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.
In particular, $x_{\lambda_0} \in U$, hence $x_{\lambda_0} \in U \cap E$.
So $U \cap E \ne \O$ for each open neighborhood $U$ of $x$.
So $x \in \map \cl E$ from the definition of closure.
$\blacksquare$





