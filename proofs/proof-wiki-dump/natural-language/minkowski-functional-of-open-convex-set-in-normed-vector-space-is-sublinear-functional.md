# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_is_Sublinear_Functional



Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $C$ be an open convex subset of $X$ with $0 \in C$.
Let $p_C$ be the Minkowski functional for $C$. 

Then $p_C$ is a sublinear functional.


Proof
We will show that: 

$(1): \quad \map {p_C} {\lambda x} = \lambda \map {p_C} x$ for each $x \in X$ and $\lambda \in \R_{\ge 0}$
$(2): \quad \map {p_C} {x + y} \le \map {p_C} x + \map {p_C} y$ for each $x, y \in X$.


Proof of $(1)$
If $\lambda = 0$, then $(1)$ follows immediately since: 

$\map {p_C} 0 = 0$
as shown in Minkowski Functional of Open Convex Set in Normed Vector Space is Well-Defined.

Now take $\lambda \ne 0$. 
We then have, for each $x \in X$: 

$t^{-1} x \in C$ if and only if $\paren {\lambda t}^{-1} \paren {\lambda x} \in C$
So:

$t \in \set {t > 0 : t^{-1} x \in C}$ if and only if $\lambda t \in \set {t > 0 : t^{-1} \paren {\lambda x} \in C}$
giving: 

$\set {t > 0 : t^{-1} \paren {\lambda x} \in C} = \lambda \set {t > 0 : t^{-1} x \in C}$
So, from Multiple of Infimum, we have: 

$\inf \set {t > 0 : t^{-1} \paren {\lambda x} \in C} = \lambda \inf \set {t > 0 : t^{-1} x \in C}$
Then from the definition of the Minkowski functional, we have: 

$\map {p_C} {\lambda x} = \lambda \map {p_C} x$
$\Box$


Proof of $(2)$
Lemma
If:

$\lambda \in \set {t > 0 : t^{-1} x \in C}$
we have: 

$\hointr \lambda \infty \subseteq \set {t > 0 : t^{-1} x \in C}$
$\Box$

Now let $x, y \in X$. 
We show that: 

$\map {p_C} {x + y} \le \map {p_C} x + \map {p_C} y$
Let $\epsilon > 0$. 
Pick $\alpha > 0$ such that: 

$\ds \map {p_C} x < \alpha < \map {p_C} x + \frac \epsilon 2$
and pick $\beta$ such that: 

$\ds \map {p_C} y < \beta < \map {p_C} y + \frac \epsilon 2$
Then we have: 

$\alpha^{-1} x \in C$
and:

$\beta^{-1} y \in C$
Note that we have: 

$\ds \frac \alpha {\alpha + \beta} + \frac \beta {\alpha + \beta} = 1$
So, from convexity, we have: 

$\ds \frac \alpha {\alpha + \beta} \paren {\alpha^{-1} x} + \frac \beta {\alpha + \beta} \paren {\beta^{-1} y} \in C$
That is: 

$\ds \frac {x + y} {\alpha + \beta} \in C$
So:

$\alpha + \beta \in \set {t > 0 : t^{-1} \paren {x + y} \in C}$
From the definition of infimum, we have: 

$\map {p_C} {x + y} \le \alpha + \beta < \map {p_C} x + \map {p_C} y + \epsilon$
Since $\epsilon > 0$ was arbitrary, we have: 

$\map {p_C} {x + y} \le \map {p_C} x + \map {p_C} y$
$\Box$

Since $(1)$ and $(2)$ hold, we have that: 

$p_C$ is a sublinear functional.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.1$: The Minkowski Functional




