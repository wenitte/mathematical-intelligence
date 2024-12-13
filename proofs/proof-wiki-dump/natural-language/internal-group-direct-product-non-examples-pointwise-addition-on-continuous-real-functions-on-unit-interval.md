# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product/Non-Examples/Pointwise_Addition_on_Continuous_Real_Functions_on_Unit_Interval

Example of Structure which is not Internal Group Direct Product
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $G = \struct {\map {\mathscr C} J, +}$ be the group formed on $\map {\mathscr C} J$ by pointwise addition.

Let $\struct {H, +}$ and $\struct {K, +}$ be the algebraic substructures of $G$ such that:

$H := \set {f \in G: \forall x \in J: \map f x \ge 0}$
$K := \set {f \in G: \forall x \in J: \map f x \le 0}$
Then, while $G$, $H$ and $K$ fulfil the $3$ conditions of Conditions for Internal Group Direct Product, $G$ is not the internal group direct product of $H$ and $K$.


Proof
From Pointwise Addition on Continuous Real Functions on Closed Unit Interval forms Group we have that $G$ is indeed a group.

Recall from Conditions for Internal Group Direct Product:
$G$ is the internal group direct product of $H$ and $K$ if and only if:

$(1): \quad \forall h \in H, k \in K: h + k = k + h$
$(2): \quad G = H + K$
$(3): \quad H \cap K = \set e$
where:

$e$ is the identity element of $G$
$H$ and $K$ are subgroups of $G$.

From Pointwise Addition on Real-Valued Functions is Commutative:

$\forall h \in H, h \in K: h + k = k + h$
and so condition $(1)$ is fulfilled.
Condition $(3)$ is satisfied by $f_0$, defined as:

$\forall x \in J: \map {f_0} x = 0$
Now let $f \in G$.
Let $h: J \to \R$ be defined as:

$\forall x \in J: \map h x = \begin{cases} \map f x & : \map f x > 0 \\ 0 & : \map f x \le 0 \end{cases}$
We have that $h \in H$ by definition.
Let $k: J \to \R$ be defined as:

$\forall x \in J: \map k x = \begin{cases} \map f x & : \map f x < 0 \\ 0 & : \map f x \ge 0 \end{cases}$
We have that $k \in K$ by definition.

Then we have:

$\forall x \in J: \map f x = \begin{cases} \map h x & : \map h x > 0 \\ \map k x & : \map k x \le 0 \end{cases}$
Hence:

$f = h + k$
and such $h$ and $k$ are unique for any given $f$.
Hence we have that:

$G = H + K$
and so condition $(2)$ is fulfilled.
$\Box$

But we have that:

$\forall h \in H: -h \in K$
and:

$\forall k \in K: -k \in H$
and so elements of $H$ and $K$ do not have inverses in those sets.
Hence neither $H$ nor $K$ is a group.
Hence neither $H$ nor $K$ is a subgroup of $G$.
Thus $G$ is not the internal group direct product of $H$ and $K$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.17 \ \text {(b)}$




