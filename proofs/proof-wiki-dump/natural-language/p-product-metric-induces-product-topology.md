# 

Source: https://proofwiki.org/wiki/P-Product_Metric_Induces_Product_Topology

Theorem
Let $M_A = \struct{A, d_A}$ and $M_B = \struct{B, d_B}$ be metric spaces.
Let $\tau_A$ and $\tau_B$ be the topologies on $A$ and $B$ induced by $d_A$ and $d_B$, respectively.

Let $p \ge 1$ be an extended real number.
Let $M = \struct{A \times B, d}$ be the $p$-product of $M_A$ and $M_B$.
We have that $M$ is a metric space.
Let $\tau$ be the topology on $A \times B$ induced by $d$.

Then $\struct{A \times B, \tau}$ is the product space of $\struct{A, \tau_A}$ and $\struct{B, \tau_B}$.


Proof
By $p$-Product Metrics are Lipschitz Equivalent and Lipschitz Equivalent Metrics are Topologically Equivalent, it suffices to consider the case $p = \infty$.

Let $\struct{A \times B, \tau'}$ be the product space of $\struct{A, \tau_A}$ and $\struct{B, \tau_B}$.

By the definition of $d$, it follows that an open ball in $M$ is the (Cartesian) product of an open ball in $M_A$ and an open ball in $M_B$.
Since an open ball is an open set, it follows from Equivalence of Definitions of Analytic Basis that $\tau \subseteq \tau'$.

Let $W \in \tau'$, $\tuple {x, y} \in W$.
By the definition of $\tau'$, it follows from Equivalence of Definitions of Analytic Basis that there exists a $U$ open in $M_A$ and a $V$ open in $M_B$ such that $\tuple {x, y} \in U \times V \subseteq W$.
By the definition of an open set:

There exists a strictly positive real number $\alpha \in \R_{>0}$ such that the open $\alpha$-ball of $x$ in $M_A$ is contained in $U$
There exists a strictly positive real number $\beta \in \R_{>0}$ such that the open $\beta$-ball of $y$ in $M_B$ is contained in $V$
Let $\epsilon = \min \set {\alpha, \beta}$.
Then $\epsilon \in \R_{>0}$, and the open $\epsilon$-ball of $\tuple {x, y}$ in $M$ is contained in $U \times V$.
Hence, $W$ is open in $M$.
That is, $\tau' \subseteq \tau$.

By definition of set equality:

$\tau = \tau'$
as desired.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 14$




