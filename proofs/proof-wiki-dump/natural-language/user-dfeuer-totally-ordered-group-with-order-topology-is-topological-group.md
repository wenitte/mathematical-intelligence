# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Totally_Ordered_Group_with_Order_Topology_is_Topological_Group

{{tidy}}
{{proofread}}



Theorem
Let $\struct {G, \le}$ be a totally ordered group.
Let $\tau$ be the $\le$-order topology over $G$.

Then $\struct {G, \circ, \tau}$ is a topological group.


Proof 1
Multiplication is Continuous
Let $\mu: G \times G \to G$ be defined by

$\map \mu {x, y} = x \circ y$
Let $\tuple {x, y} \in \map {\mu^{-1} } {\dot \uparrow} z$.
Then $x \circ y > z$ by the definition of strict upper closure.
Thus since $\le$ is compatible with $\circ$:

$(1): \quad x > z \circ y^{-1}$
$(2): \quad y > x^{-1} \circ z$


Case 1
Suppose $\exists y': y > y' > x^{-1} \circ z$.
Then $x \circ y' > z$ by compatibility, so

$x > z \circ y'^{-1}$ by compatibility.
Thus $\tuple {x, y} \in {\dot\uparrow}(z\circ y'^{-1})\times {\dot\uparrow}(y')$.
If $(p,q) \in {\dot\uparrow}(z\circ y'^{-1}) \times {\dot\uparrow}(y')$, then by Operating on Ordered Group Inequalities:

$p \circ q > z$
so 

${\dot\uparrow}(z\circ y'^{-1})\times {\dot\uparrow}(y') \subseteq \mu^{-1} ({\dot\uparrow} z)$.
Therefore: $(x,y) \in {\dot\uparrow}(z\circ y'^{-1})\times {\dot\uparrow}\paren {y'} \subseteq \mu^{-1} ({\dot\uparrow} z)$.


Case 2
Suppose on the other hand that $\set {y' \in G: y > y' > x^{-1} \circ z} = \O$.
We have $\paren {x^{-1} \circ z}^> = y^\le$ by Upper Closure is Strict Upper Closure of Immediate Predecessor, where $y^\le$ is the upper closure of $y$.
$(x,y) \in {\dot\uparrow}(z \circ y^{-1})\times {\dot\uparrow} (x^{-1} \circ z)$ by $(1)$ and $(2)$.
Suppose that $(p,q) \in {\dot\uparrow}(z \circ y^{-1})\times {\dot\uparrow} (x^{-1} \circ z) = {\dot\uparrow}(z \circ y^{-1})\times {\bar\uparrow} y$.
Then by Operating on Ordered Group Inequalities:

$p \circ q > z$
so

$(p,q) \in \mu^{-1}({\dot\uparrow}z)$
Thus

$(x,y) \in {\dot\uparrow}(z \circ y^{-1})\times {\dot\uparrow} (x^{-1} \circ z) \subseteq \mu^{-1}({\dot\uparrow} z)$.

By Dual Pairs, strict lower closure is dual to strict upper closure.
Thus by the Duality Principle, it follows that the preimage under $\mu$ of a strict lower closure is also open in $G \times G$.

By definition of order topology, the strict upper closures and strict lower closures of elements of $G$ form a subbase for $\tau$.
By the Continuity Test using Sub-Basis, we conclude that multiplication is continuous.
$\Box$


Inversion is continuous
Since the group inverse mapping, $\operatorname{inv}$, is its own inverse and Inversion Mapping Reverses Ordering in Ordered Group:

$\operatorname{inv}^{-1}({\dot\uparrow} z) = {\dot\downarrow} (z^{-1})$
Similarly:

$\operatorname{inv}^{-1}({\dot\downarrow} z) = {\dot\uparrow} (z^{-1})$
Since up-sets and down-sets of elements of $G$ form a subbase for $\tau$, the group inverse mapping is continuous.
$\Box$
Since multiplication and inversion are $\tau$-continuous, $(G,\circ,\tau)$ is a topological group.
$\blacksquare$


Proof 2
{{proofread|Make sure I made all the necessary adjustments correctly when forming this from Proof 1}}
{{improve|For now, this version is much clumsier than Proof 1, but I suspect it can be streamlined greatly, and may have the potential to end up the sleeker.}}
Let $\psi: G \times G \to G$ be defined by

$\psi(x,y) = x^{-1} \circ y$
Let $(x,y) \in \psi^{-1}({\dot\uparrow} z)$.
Then $x^{-1} \circ y > z$ by the definition of strict upper closure.
Thus since $\le$ is compatible with $\circ$:

$(1)\quad x^{-1} > z \circ y^{-1}$
$(2)\quad y > x^{-1} \circ z$
Case 1
Suppose $\exists y': y > y' > x \circ z$.
Then $x^{-1} \circ y' > z$ by compatibility, so

$x^{-1} > z \circ y'^{-1}$ by compatibility.
Since Inversion Mapping Reverses Ordering in Ordered Group:

$x < y' \circ z^{-1}$
Thus $(x,y) \in { \dot \downarrow}(y' \circ z^{-1}) \times { \dot \uparrow}(y')$.
If $(p,q) \in { \dot \downarrow}(y' \circ z^{-1}) \times { \dot \uparrow}(y')$, then by Inversion Mapping Reverses Ordering in Ordered Group:

$p^{-1} > z \circ y'^{-1}$
By Operating on Ordered Group Inequalities:

$p^{-1} \circ q > z$
so 

${ \dot \downarrow}(y' \circ z^{-1}) \times { \dot \uparrow}(y') \subseteq \psi^{-1} ({ \dot \uparrow} z)$.
Therefore: $(x,y) \in { \dot \downarrow}(y' \circ z^{-1})\times { \dot \uparrow}(y') \subseteq \mu^{-1} ({ \dot \uparrow} z)$.


Case 2
Suppose on the other hand that $\{y' \in G: y > y' > x \circ z \} = \varnothing$.
We have ${ \dot \uparrow} (x \circ z) = {\bar\uparrow} y$ by Upper Closure is Strict Upper Closure of Immediate Predecessor, where $\bar\uparrow$ is Up-Set.
$(x^{-1},y) \in { \dot \uparrow}(z \circ y^{-1})\times { \dot \uparrow} (x \circ z)$ by $(1)$ and $(2)$.
Thus $(x,y) \in { \dot \downarrow}(y \circ z^{-1}) \times { \dot \uparrow} (x \circ z)$
Suppose that $(p,q) \in { \dot \downarrow}(y \circ z^{-1}) \times { \dot \uparrow} (x \circ z) = { \dot \downarrow}(y \circ z^{-1}) \times {\bar\uparrow} y$.
Then by Inversion Mapping Reverses Ordering in Ordered Group:
$(p^{-1},q) \in { \dot \uparrow}(z \circ y^{-1}) \times { \dot \uparrow} (x^{-1} \circ z) = { \dot \uparrow}(z \circ y^{-1}) \times {\bar\uparrow} y$
Then by Operating on Ordered Group Inequalities:

$p^{-1} \circ q > z$
so

$(p,q) \in \psi^{-1}({ \dot \uparrow}z)$
Thus

$(x,y) \in { \dot \downarrow}(y \circ z^{-1})\times { \dot \uparrow} (x^{-1} \circ z) \subseteq \psi^{-1}({ \dot \uparrow} z)$.

By Dual Pairs, strict lower closure is dual to strict upper closure.
Thus by the Duality Principle, it follows that the preimage under division of a strict lower closure is also open in $G \times G$.
Since the strict upper closures and strict lower closures of elements of $G$ form a subbase for $\tau$,
we conclude that $\psi$ is continuous.
$\blacksquare$





