# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_is_Well-Defined

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$.
Let $C$ be an open convex subset of $X$ with $0 \in C$.

Then, for each $x \in X$:

$\set {t > 0 : t^{-1} x \in C} \ne \O$
and so the Minkowski functional of $C$ is well-defined.


Proof
If $x = 0$, then: 

$t^{-1} x \in C$
for all $t > 0$, so:

$\set {t > 0 : t^{-1} x \in C} = \openint 0 \infty$
Now take $x \ne 0$. 
Since $C$ is open, there exists $\delta > 0$ such that for all $x \in X$ with: 

$\norm x < \delta$
we have $x \in C$.
Note that we have, from positive homogeneity: 

$\ds \norm {\frac \delta {2 \norm x} x} = \frac \delta 2$
so:

$\dfrac \delta {2 \norm x} x \in C$
We therefore have:

$\dfrac {2 \norm x} \delta \in \set {t > 0 : t^{-1} x \in C}$
so in particular: 

$\set {t > 0 : t^{-1} x \in C} \ne \O$
We also have that:

$t \ge 0$ for all $t \in \set {t > 0 : t^{-1} x \in C}$
So, from the Continuum Property:

$\set {t > 0 : t^{-1} x \in C}$ has an infimum.
So:

$\ds \inf \set {t > 0 : t^{-1} x \in C}$ is well-defined.
Since $x \in X$ was arbitrary, we have: 

the Minkowski functional of $C$ is well-defined
$\blacksquare$





