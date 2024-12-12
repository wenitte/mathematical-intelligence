# 

Source: https://proofwiki.org/wiki/Convex_Absorbing_Set_contained_between_Sets_in_terms_of_Minkowski_Functional

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.
Let $C$ be a convex absorbing set.
Let $\mu_C$ be the Minkowski functional of $C$. 

Then we have: 

$\set {x \in X : \map {\mu_C} x < 1} \subseteq C \subseteq \set {x \in X : \map {\mu_C} x \le 1}$


Proof
Let $x \in X$ be such that $\map {\mu_C} x < 1$.
Then: 

$\inf \set {t > 0 : \dfrac x t \in C} < 1$
So there exists $t < 1$ such that $x \in t C$.
From Absorbing Set in Vector Space contains Zero Vector, we have that ${\mathbf 0}_X \in C$. 
So, we have, since $C$ is convex: 

$x = x + \paren {1 - t} {\mathbf 0}_X \in t C + \paren {1 - t} C \subseteq C$
So $x \in C$.
So we have: 

$\set {x \in X : \map {\mu_C} x < 1} \subseteq C$

Now let $x \in C$.
We clearly have: 

$1 \in \set {t > 0 : \dfrac x t \in C}$
So:

$\map {\mu_C} x = \inf \set {t > 0 : \dfrac x t \in C} \le 1$
Hence we obtain the inclusion: 

$C \subseteq \set {x \in X : \map {\mu_C} x \le 1}$
$\blacksquare$





