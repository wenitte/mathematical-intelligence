# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_to_Banach_Space_has_Unique_Extension_to_Closure_of_Domain/Corollary_2

Corollary to Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space.
Let $\struct {Y, \norm \cdot_Y}$ be a Banach space.
Let $D$ be an everywhere dense linear subspace of $X$.
Let $T_1 : X \to Y$ and $T_2 : X \to Y$ be bounded linear transformations with: 

$T_1 x = T_2 x$ for all $x \in D$.

Then: 

$T_1 = T_2$


Proof
Define $T_0 : D \to Y$ by: 

$T_0 x = T_1 x = T_2 x$ for all $x \in D$.
Then $T_0$ is a bounded linear transformation, and so from Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain there exists a unique bounded linear transformation extending $T_0$ to $X$.
Since $T_1$ and $T_2$ are both bounded linear transformation extending $T_0$ to $X$, so we must have $T_1 = T_2$.
$\blacksquare$





