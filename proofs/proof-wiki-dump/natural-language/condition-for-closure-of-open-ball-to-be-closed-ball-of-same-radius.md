# 

Source: https://proofwiki.org/wiki/Condition_for_Closure_of_Open_Ball_to_be_Closed_Ball_of_Same_Radius



Theorem
Let $\struct {M, d}$ be a metric space.

The following statements are equivalent:

$(1) \quad$ for all $x \in X$ and $r > 0$ we have $\map \cl {\map {B_r} x} = \map { {B_r}^-} x$, where $\cl$ denotes closure
$(2) \quad$ for each $\epsilon > 0$ and  $x, y \in X$ with $x \ne y$, there exists $z \in X$ with $\map d {z, y} < \epsilon$ and $\map d {x, z} < \map d {x, y}$.


Proof
$(1)$ implies $(2)$
Suppose that $(1)$ holds. 
Let $\epsilon > 0$. 
Let $x, y \in X$ have $x \ne y$.
We aim to show that there exists $z \in X$ with $\map d {z, y} < \epsilon$ and $\map d {x, z} < \map d {x, y}$.
Let $r = \map d {x, y}$. 
From $(1)$, we have $\map \cl {\map {B_r} x} = \map { {B_r}^-} x$.
So $y \in \map \cl {\map {B_r} x}$. 
Hence by the definition of topological closure, for each $\epsilon > 0$ we have:

$\map {B_\epsilon} y \cap \map {B_r} x \ne \O$
Let $z \in \map {B_\epsilon} y \cap \map {B_r} x$.
Then $\map d {y, z} < \epsilon$ and $\map d {x, z} < r = \map d {x, y}$.
$\Box$


$(2)$ implies $(1)$
Suppose that $(2)$ holds.
Let $x \in X$ and $r > 0$.
From Closure of Open Ball in Metric Space, we have:

$\map \cl {\map {B_r} x} \subseteq \map { {B_r}^-} x$
It remains to show that:

$\map { {B_r}^-} x \subseteq \map \cl {\map {B_r} x}$
Since $\map {B_r} x \subseteq \map \cl {\map {B_r} x}$, we only need to show that if $y \in X$ has $\map d {x, y} = r$, then $y \in \map \cl {\map {B_r} x}$.
Let $y \in X$ have $\map d {x, y} = r$.
Let $\epsilon > 0$. 
Then there exists $z \in X$ such that $\map d {x, z} < \map d {x, y} = r$ and $\map d {z, y} < \epsilon$. 
So we have $z \in \map {B_\epsilon} y$ and $z \in \map {B_r} x$. 
So $\map {B_\epsilon} y \cap \map {B_r} x \ne \O$ for each $\epsilon > 0$.
Hence by the definition of closure, we have $y \in \map \cl {\map {B_r} x}$.
Hence we obtain $\map \cl {\map {B_r} x} = \map { {B_r}^-} x$.
$\blacksquare$


Sources
Joel David Hamkins (https://math.stackexchange.com/users/413/JDH), When is the closure of an open ball equal to the closed ball?, URL (version: 2012-11-02): https://math.stackexchange.com/q/108010




