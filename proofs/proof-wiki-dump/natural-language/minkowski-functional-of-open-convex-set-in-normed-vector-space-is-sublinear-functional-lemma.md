# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_is_Sublinear_Functional/Lemma

Lemma
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $C$ be an open convex subset of $X$ with $0 \in C$.

Then if:

$\lambda \in \set {t > 0 : t^{-1} x \in C}$
we have: 

$\hointr \lambda \infty \subseteq \set {t > 0 : t^{-1} x \in C}$
Further: 

$\openint {\map {p_C} x} \infty \subseteq \set {t > 0 : t^{-1} x \in C}$
where $p_C$ is the Minkowski functional of $C$. 


Proof
Let: 

$t \in \set {t > 0 : t^{-1} x \in C}$
Then:

$t^{-1} x \in C$
Then from convexity, for all $\alpha \ge 1$ we have: 

$\alpha^{-1} t^{-1} x + \paren {1 - \alpha^{-1} } \times 0 \in C$
that is: 

$\alpha t \in \set {t > 0 : t^{-1} x \in C}$
so:

$\hointr t \infty \subseteq \set {t > 0 : t^{-1} x \in C}$

Now let: 

$\lambda \in \openint {\map {p_C} x} \infty$
Then:

$\map {p_C} x < \lambda$
From the definition of infimum, there exists: 

$\alpha \in \set {t > 0 : t^{-1} x \in C}$
such that: 

$\map {p_C} x < \alpha < \lambda$
Then, from the above computation we have: 

$\openint \alpha \infty \subseteq \set {t > 0 : t^{-1} x \in C}$
And, since $\alpha < \lambda$, we have: 

$\lambda \in \openint \alpha \infty$
so:

$\lambda \in \set {t > 0 : t^{-1} x \in C}$
So, we obtain: 

$\openint {\map {p_C} x} \infty \subseteq \set {t > 0 : t^{-1} x \in C}$
$\blacksquare$





