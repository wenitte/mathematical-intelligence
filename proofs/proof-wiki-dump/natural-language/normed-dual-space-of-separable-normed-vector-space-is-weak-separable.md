# 

Source: https://proofwiki.org/wiki/Normed_Dual_Space_of_Separable_Normed_Vector_Space_is_Weak-*_Separable

Theorem
Let $X$ be a separable normed vector space.
Let $X^\ast$ be the normed dual space of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$.

Then $\struct {X^\ast, w^\ast}$ is separable. 


Proof
Let $B^-_{X^\ast}$ be the closed unit ball of $X^\ast$.
From Closed Unit Ball in Normed Dual Space of Separable Normed Vector Space is Weak-* Separable, $\struct {B^-_{X^\ast}, w^\ast}$ is separable space.
Let $S$ be a countable dense subset of $B^-_{X^\ast}$. 
For $n \in \N$, we have: 

$\map {\cl_{w^\ast} } {n S} = n B^-_{X^\ast}$
from Dilation of Closure of Set in Topological Vector Space is Closure of Dilation.
Now, note that: 

$\ds \bigcup_{n \mathop = 1}^\infty n S$ is countable
from Countable Union of Countable Sets is Countable.
From Closure of Union contains Union of Closures, we therefore have: 














\(\ds \map {\cl_{w^\ast} } {\bigcup_{n \mathop = 1}^\infty n S}\)

\(\supseteq\)







\(\ds \bigcup_{n \mathop = 1}^\infty \map {\cl_{w^\ast} } {n S}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty B^-_{X^\ast}\)




















\(\ds \)

\(=\)







\(\ds X^\ast\)









So:

$\ds \map {\cl_{w^\ast} } {\bigcup_{n \mathop = 1}^\infty n S} = X^\ast$
So $\struct {X^\ast, w^\ast}$ is separable. 
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Proposition $3.25$




