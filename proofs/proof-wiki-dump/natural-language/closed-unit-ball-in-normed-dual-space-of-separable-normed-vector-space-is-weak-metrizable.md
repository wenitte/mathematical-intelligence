# 

Source: https://proofwiki.org/wiki/Closed_Unit_Ball_in_Normed_Dual_Space_of_Separable_Normed_Vector_Space_is_Weak-*_Metrizable



Theorem
Let $X$ be a separable normed vector space.
Let $X^\ast$ be the normed dual space of $X$. 
Let $B^-_{X^\ast}$ be the closed unit ball of $X^\ast$. 
Let $w^\ast$ be the weak-$\ast$ topology on $B^-_{X^\ast}$.

Then $\struct {B^-_{X^\ast}, w^\ast}$ is metrizable.


Proof
Let $\sequence {x_n}_{n \in \N}$ be a countable dense subset of $X$.
Let $\sequence {x_n^\wedge }_{n \in \N}$ be the evaluation maps associated with $\sequence {x_n}_{n \in \N}$.
We show that $\sequence {x_n^\wedge }_{n \in \N}$ separates points.
Suppose that: 

$\map {x_n^\wedge } f = \map {x_n^\wedge } g$
for each $f, g \in X^\ast$.
Then: 

$\map f {x_n} = \map g {x_n}$
for each $n \in \N$.
Since $f$ and $g$ are continuous and $\sequence {x_n}_{n \in \N}$ is dense in $X$, we have that $\sequence {x_n^\wedge }_{n \in \N}$ separates points as desired.
Now let $\sigma$ be the initial topology generated by $\sequence {x_n^\wedge \restriction_{B^-_{X^\ast} } }_{n \in \N}$
From Initial Topology Generated by Countable Family of Functions Separating Points is Metrizable, $\sigma$ is metrizable. 
Note that the weak-$\ast$ topology on $B^-_{X^\ast}$ is generated by $\set {y^\wedge \restriction_{B^-_{X^\ast} } : y \in X}$ from Subspace Topology on Initial Topology is Initial Topology on Restrictions.
So $\sigma \subseteq w^\ast$. 
Hence the identity mapping $\iota : \struct {B^-_{X^\ast}, w^\ast} \to \struct {B^-_{X^\ast}, \sigma}$ is continuous.
From the Banach-Alaoglu Theorem, $\struct {B^-_{X^\ast}, w^\ast}$ is compact.
Since $\sigma$ is metrizable, it is Hausdorff from Metric Space is Hausdorff.
From Continuous Bijection from Compact to Hausdorff is Homeomorphism, $\iota$ is a homeomorphism.
Hence $\sigma = w^\ast$, and $\struct {B^-_{X^\ast}, w^\ast}$ is metrizable.
$\blacksquare$


Also see
Weak-* Metrizability of Closed Unit Ball in Normed Dual of Normed Vector Space implies Original Space is Separable shows that the converse of this result is also true.


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Proposition $3.24$



