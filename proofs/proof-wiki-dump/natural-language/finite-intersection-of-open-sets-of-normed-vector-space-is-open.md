# 

Source: https://proofwiki.org/wiki/Finite_Intersection_of_Open_Sets_of_Normed_Vector_Space_is_Open



Theorem
Let $M = \struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $U_1, U_2, \ldots, U_n$ be open in $M$.

Then $\ds \bigcap_{i \mathop = 1}^n U_i$ is open in $M$.

That is, a finite intersection of open subsets is open.


Proof
Let $\ds x \in \bigcap_{i \mathop = 1}^n U_i$.
For each $i \in \closedint 1 n$, we have $x \in U_i$.
Thus:

$\exists \epsilon_i > 0: \map {B_{\epsilon_i}} x \subseteq U_i$
where $\map {B_{\epsilon_i}} x$ is the open $\epsilon_i$-ball of $x$.

Let $\ds \epsilon = \min_{i \mathop = 1}^n \set {\epsilon_i}$.
So:

$\epsilon > 0$.
Let $y \in \map {B_\epsilon} x$.
Then $\norm {x - y} < \epsilon$
Hence:

$\forall i \in \closedint 1 n : \norm {x - y} < \epsilon_i$
In other words:

$\map {B_\epsilon} x \subseteq \map {B_{\epsilon_i}} x \subseteq U_i$
for all $i \in \closedint 1 n$.

So:

$\ds \map {B_\epsilon} x \subseteq \bigcap_{i \mathop = 1}^n U_i$
The result follows.
$\blacksquare$


Also see
Finite Intersection of Open Sets is Open


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




