# 

Source: https://proofwiki.org/wiki/Real-Valued_Continuous_Function_with_Compact_Support_is_Uniformly_Continuous

Theorem
Let $f : \R \to \R$ be a continuous function such that:

the support $\map \supp f$ is compact.

Then $f$ is uniformly continuous.


Proof
Since $\map \supp f$ is compact, we can take $\alpha > 0$ such that:

$\map \supp f \subseteq \closedint {-\alpha} \alpha$
and $\map f x = 0$ for $\cmod x \ge \alpha$. 
From the Heine-Cantor Theorem, $f$ is uniformly continuous on $\closedint {-\alpha - 1} {\alpha + 1}$.
Let $\epsilon > 0$.
Then there exists $\delta' > 0$ such that for $x, y \in \closedint {-\alpha - 1} {\alpha + 1}$ with $\size {x - y} < \delta$ we have:

$\size {\map f x - \map f y} < \epsilon$
Take $\delta = \min \set {\delta', 1/2}$.
Take $x, y \in \R$ with $\size {x - y} < \delta'$. 
If $x, y \in \closedint {-\alpha - 1} {\alpha + 1}$, we have $\size {\map f x - \map f y} < \epsilon$ since $\size {x - y} < \delta' \le \delta$. 
Suppose that $x \in \closedint {-\alpha - 1} {\alpha + 1}$ but $y \in \R \setminus \closedint {-\alpha - 1} {\alpha + 1}$.
Then either $y > \alpha + 1$, in which case $x > \alpha + 1/2$ since $\size {x - y} > 1/2$.
Similarly, if $y < -\alpha - 1$, then $x < -\alpha - 1/2$. 
In either case, $x \in \R \setminus \closedint {-\alpha} \alpha$, so $\map f x = 0$.
Then $\map f x = \map f y = 0$, so $\size {\map f x - \map f y} = 0 < \epsilon$ in this case. 
Hence for all $x, y \in \R$ with $\size {x - y} < \delta$, we have $\size {\map f x - \map f y} < \epsilon$.
So $f$ is uniformly continuous.
$\blacksquare$





