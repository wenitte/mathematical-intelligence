# 

Source: https://proofwiki.org/wiki/Characterization_of_Convergent_Net_in_Metric_Space



Theorem
Let $\struct {X, d}$ be a metric space.
Let $\struct {\Lambda, \preceq}$ be a directed set.
Let $\family {x_\lambda}_{\lambda \mathop \in \Lambda}$ be a net in $X$. 
Let $x \in X$. 

Then $\family {x_\lambda}_{\lambda \mathop \in \Lambda}$ converges in $\struct {X, d}$ if and only if:

for each $\epsilon > 0$ there exists $\lambda_0 \in \Lambda$ such that $\map d {x_\lambda, x} < \epsilon$ for $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.


Proof
Necessary Condition
Suppose that $\family {x_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $x$ in $\struct {X, d}$.
Let $\epsilon > 0$. 
From Open Ball is Open Set, the open ball $\map {B_\epsilon} x$ with radius $\epsilon$ and center $x$ is open in $\struct {X, d}$.
Since $\family {x_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $x$, there exists $\lambda_0 \in \Lambda$ such that: 

$x_\lambda \in \map {B_\epsilon} x$ for $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.
That is: 

$\map d {x_\lambda, x} < \epsilon$ for $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.
$\Box$


Sufficient Condition
Suppose that: 

for each $\epsilon > 0$ there exists $\lambda_0 \in \Lambda$ such that $\map d {x_\lambda, x} < \epsilon$ for $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.
Let $U$ be an open neighborhood of $x$ in $\struct {X, \tau}$.
Since $U$ is open, there exists $\epsilon > 0$ such that: 

$\map {B_\epsilon} x \subseteq U$
By hypothesis, there exists $\lambda_0 \in \Lambda$ such that $\map d {x_\lambda, x} < \epsilon$ for $\lambda \in \Lambda$ with $\lambda_0 \preceq \lambda$.
Then for $\lambda_0 \preceq \lambda$ we have $x_\lambda \in \map {B_\epsilon} x \subseteq U$.
$\blacksquare$





