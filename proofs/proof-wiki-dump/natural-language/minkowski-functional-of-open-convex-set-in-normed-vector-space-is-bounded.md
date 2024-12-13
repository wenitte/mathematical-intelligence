# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_is_Bounded

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $C$ be an open convex subset of $X$ with $0 \in C$.
Let $p_C$ be the Minkowski functional for $C$. 

Then there exists a real number $c > 0$ such that: 

$0 \le \map {p_C} x \le c \norm x$
for each $x \in X$.


Proof
From the definition of the Minkowski functional, we have: 

$\map {p_C} x = \inf \set {t > 0 : t^{-1} x \in C}$
We have:

$t \ge 0$ for every $t \in \set {t > 0 : t^{-1} x \in C}$
so:

$\inf \set {t > 0 : t^{-1} x \in C} \ge 0$
from the definition of infimum. 
If $x = 0$, we have: 

$t^{-1} x \in C$
for each $t > 0$, so:

$\set {t > 0 : t^{-1} x \in C} = \openint 0 \infty$
so:

$\inf \set {t > 0 : t^{-1} x \in C} = 0$
So the desired inequality holds for $x = 0$ for all real numbers $c > 0$. 
Now take $x \ne 0$.
Since $C$ is open, there exists $\delta > 0$ such that for all $x \in X$ with: 

$\norm x < \delta$
we have $x \in C$.
In Minkowski Functional of Open Convex Set in Normed Vector Space is Well-Defined, it is shown that: 

$\dfrac {2 \norm x} \delta \in \set {t > 0 : t^{-1} x \in C}$
So from the definition of infimum, we have: 

$\ds \inf \set {t > 0 : t^{-1} x \in C} \le \frac {2 \norm x} \delta$
That is: 

$\ds \map {p_C} x \le \frac 2 \delta \norm x$
Note that $\delta > 0$ depended only on $C$, so we have: 

$\ds 0 \le \map {p_C} x \le \frac 2 \delta \norm x$
for all $x \in X$, hence the result.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.1$: The Minkowski Functional




