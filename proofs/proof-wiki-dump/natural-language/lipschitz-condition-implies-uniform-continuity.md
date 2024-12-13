# 

Source: https://proofwiki.org/wiki/Lipschitz_Condition_implies_Uniform_Continuity

Theorem
Let $\struct {M_1, d_1}$ and $\struct {M_2, d_2}$ be metric spaces.
Let $g: M_1 \to M_2$ satisfy the Lipschitz condition.

Then $g$ is uniformly continuous on $M_1$.


Proof
Let $\epsilon > 0$, $x,y \in M_1$. 
Let $K$ be a Lipschitz constant for $g$.

First, suppose that $K \le 0$.
Then:

$\map {d_1} {x, y} \le 0 \map {d_2} {\map g x, \map g y}$ by the Lipschitz condition on $g$.
So $\map {d_1} {x, y} \le 0 \implies \map {d_1} {x, y} = 0 \implies x = y$ for all $x$ and $y$ in $M_1$.
Thus $g$ is a constant function, which is uniformly continuous.

Next, suppose that $K > 0$.
Take $\delta = \epsilon / K$.
Then if $\map {d_1} {x, y} < \delta$, we have:

$K \map {d_1} {x, y} < \epsilon$
By the Lipschitz condition on $g$, we know that:

$\map {d_2} {\map g x, \map g  y} \le K \map {d_1} {x, y}$
These last two statements together imply $\map {d_2} {\map g x, \map g y} < \epsilon$.
Thus, $g$ is uniformly continuous on $M_1$.
$\blacksquare$





