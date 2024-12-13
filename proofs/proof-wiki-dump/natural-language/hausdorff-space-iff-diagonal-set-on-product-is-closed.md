# 

Source: https://proofwiki.org/wiki/Hausdorff_Space_iff_Diagonal_Set_on_Product_is_Closed

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\Delta_S$ be the diagonal set on $S$:

$\Delta_S = \set {\tuple {x, x} \in S \times S: x \in S}$
where $S \times S$ is the Cartesian product of $S$ with itself.
Let $T^2 = \struct {S \times S, \TT}$ be the product space with product topology $\TT$.

Then $T$ is a $T_2$ (Hausdorff) space if and only if $\Delta_S$ is closed in $T^2$.


Proof
Suppose $T$ is a $T_2$ (Hausdorff) space.
Let $\Delta: S \to S \times S$ be the diagonal mapping on $S$.
We have that $\map \Delta S$ consists of all the elements of $S \times S$ whose coordinates are equal.

$\map \Delta S = \set {\tuple {x, x} \in S \times S: x \in S} = \set {\tuple {x, y} \in S \times S: x = y}$
By definition, $\Delta_S$ is the same set as $\map \Delta S$.

Now consider $H := \relcomp {S \times S} {\map \Delta S}$, its complement in $S \times S$.
We have that $H$ consists of all the elements of $S \times S$ whose coordinates are different:

$H = \set {\tuple {x, y} \in S \times S: x \ne y}$
Let $\tuple{x, y} \in H$.
Because $T$ is a $T_2$ space:

$\exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$
Because $U \cap V = \O$ it follows that $U \times V \cap \map \Delta S = \O$.
That is:

$U \times V \subseteq H$
Now from Natural Basis of Product Topology of Finite Product, we have that $U \times V$ is an element of the natural basis of $T^2 = \struct {S \times S, \TT}$.
Hence $H$ is open in $T^2$.
Therefore, by definition, $\Delta_S$ is closed in $T^2 = \struct {S \times S, \TT}$.
$\Box$

Now suppose $\Delta_S$ is closed in $T^2 = \struct {S \times S, \TT}$.
Then $H = \set {\tuple {x, y} \in S \times S: x \ne y}$ is open in $T^2$.
Let $\tuple {x, y} \in H$.
We have that $x \ne y$ by the nature of $H$.
Then there exists an element $U \times V$ in the natural basis of $T^2$, and therefore open in $T^2$.
As $U \times V \subseteq H$ it follows that $U \cap V = \O$.
From Natural Basis of Product Topology of Finite Product, as $U \times V$ is open in $T^2$, then $U$ and $V$ are both open in $T$.
So, for any $\tuple {x, y}$ we have $U, V \subseteq S$ such that $x \in U, y \in V, U \cap V = \O$.
So $T$ is a $T_2$ (Hausdorff) space.
$\blacksquare$


Also see
Open Projection and Closed Graph Implies Quotient is Hausdorff, a generalization for quotient spaces




