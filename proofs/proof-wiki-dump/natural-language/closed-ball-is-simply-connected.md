# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Simply_Connected

Theorem
Let $\struct {V, \norm {\,\cdot\,} }$ be a normed vector space over $\R$ or $\C$.
Let $d: V \times V \to \R_{\ge 0}$ be the metric induced by the norm $\norm {\,\cdot\,}$ on $V$.
Let $\tau$ be the the topology on $V$ induced by the metric $d$.
Let $v \in V$ and $\epsilon \in \R_{>0}$.
Let $\map {B_\epsilon^-} v$ be the closed $\epsilon$-ball of $v$.
Let $\tau_B$ be the subspace topology on $\map {B_\epsilon} v$ induced by $\tau$.

Then $\struct{ \map {B_\epsilon^-} v, \tau_B }$ is simply connected.


Proof
Normed Vector Space is Hausdorff Topological Vector Space shows that $\struct {V, \tau}$ is a topological vector space.
The result now follows from Closed Ball is Convex Set and Convex Set is Simply Connected.
$\blacksquare$





