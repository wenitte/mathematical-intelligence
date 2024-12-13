# 

Source: https://proofwiki.org/wiki/Open_Set_Less_One_Point_is_Open

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $U \subseteq M$ be an open set of $M$.
Let $\alpha \in U$.
Then $U \setminus \set \alpha$ is open in $M$.


Corollary
Let $S = \set {\alpha_1, \alpha_2, \ldots, \alpha_n} \subseteq U$ be a finite set of points in $U$.
Then $U \setminus S$ is open in $M$.


Proof
Let $x \in U \setminus \set \alpha$.
Let $\delta = \map d {x, \alpha}$.
Let $\map {B_\epsilon} x \subseteq U$ be an open $\epsilon$-ball of $x$ in $U$.
Let $\zeta = \min \set {\epsilon, \delta}$.
Then:

$\map {B_\epsilon} x \subseteq U \setminus \set \alpha$
The result follows.
$\blacksquare$





