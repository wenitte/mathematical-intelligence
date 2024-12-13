# 

Source: https://proofwiki.org/wiki/Open_Balls_form_Local_Basis_of_Metric_Space

Theorem
Let $\struct {M, d}$ be a metric space. 
Let $\tau$ be the topology on $M$ induced by $d$. 
Let $x \in X$. 
For each $\epsilon > 0$, let $\map {B_\epsilon} x$ be the open $\epsilon$-ball around $x$.
Let $\BB_x = \set {\map {B_\epsilon} x : \epsilon > 0}$.

Then $\BB_x$ is a local basis at $x$. 


Proof
Let $U$ be an open neighborhood of $x$. 
From the definition of an open set in $\struct {M, d}$:

there exists $\epsilon > 0$ such that $\map {B_\epsilon} x \subseteq U$.
Hence:

there exists $V \in \BB_x$ such that $V \subseteq U$.
So $\BB_x$ is a local basis at $x$.
$\blacksquare$





