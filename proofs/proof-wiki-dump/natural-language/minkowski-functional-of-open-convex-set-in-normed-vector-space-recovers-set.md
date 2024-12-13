# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_recovers_Set

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $C$ be an open convex subset of $X$ with $0 \in C$.
Let $p_C$ be the Minkowski functional for $C$. 

Then: 

$C = \set {x \in X : \map {p_C} x < 1}$


Proof
We first show that: 

$\set {x \in X : \map {p_C} x < 1} \subseteq C$
Suppose that: 

$x \in \set {x \in X : \map {p_C} x < 1}$
Then: 

$\inf \set {t > 0 : t^{-1} x \in C} < 1$
from the definition of a Minkowski functional.
So, there exists $0 < \alpha < 1$ such that: 

$\alpha^{-1} x \in C$
Since $C$ is convex and $0 \in C$, we have: 

$\alpha \paren {\alpha^{-1} x} + \paren {1 - \alpha} \times 0 \in C$
so:

$x \in C$
So we have: 

$\set {x \in X : \map {p_C} x < 1} \subseteq C$

Now we show that: 

$C \subseteq \set {x \in X : \map {p_C} x < 1}$
Let:

$x \in C$
Since $C$ is open, there exists $\epsilon > 0$ such that for all $y \in X$ with: 

$\norm {y - x} < \epsilon$
we have $y \in C$. 
So, we have: 

$\ds \paren {1 + \frac \epsilon 2} x \in C$
So:

$\ds \frac 2 {2 + \epsilon} \in \set {t > 0 : t^{-1} x \in C}$
So from the definition of infimum, we have: 

$\ds \map {p_C} x \le \frac 2 {2 + \epsilon}$
So:

$\map {p_C} x < 1$
We therefore have: 

$C \subseteq \set {x \in X : \map {p_C} x < 1}$

So, from the definition of set equality, we have: 

$C = \set {x \in X : \map {p_C} x < 1}$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.1$: The Minkowski Functional




