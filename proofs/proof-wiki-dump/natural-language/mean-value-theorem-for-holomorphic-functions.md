# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem_for_Holomorphic_Functions

Theorem
Let $D$ be a region.
Let $f : D \to \C$ be a holomorphic function.
Let $z \in D$. 
Let $r$ be such that $\map {B_r} z \subseteq D$. 

Then:

$\ds \map f z = \frac 1 {2 \pi} \int_0^{2 \pi} \map f {z + r e^{i \theta} } \rd \theta$


Proof
By Cauchy's Integral Formula, we have: 

$\ds \map f z = \frac 1 {2 \pi i} \oint_{\partial \map {B_r} z} \frac {\map f t} {t - z} \rd t$
where $\partial \map {B_r} z$ is the boundary of $\map {B_r} z$. 
That is, $\partial \map {B_r} z$ is the circle of radius $r$, centred at $z$.
Note that we can parameterise $\partial \map {B_r} z$ by the function $\gamma : \hointr 0 {2 \pi} \to \partial \map {B_r} z$ defined by: 

$\map \gamma \theta = z + r e^{i \theta}$
for each $\theta \in \hointr 0 {2 \pi}$.
Then, by the definition of a contour integral, we have: 














\(\ds \frac 1 {2 \pi i} \oint_{\partial \map {B_r} z} \frac {\map f t} {t - z} \rd t\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_0^{2 \pi} \paren {i r e^{i \theta} \times \frac {\map f {z + r e^{i \theta} } } {z + r e^{i \theta} - z} } \rd \theta\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac i {2 \pi i} \int_0^{2 \pi} \map f {z + r e^{i \theta} } \paren {r e^{i \theta} \times \frac 1 {r e^{i \theta} } } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_0^{2 \pi} \map f {z + r e^{i \theta} } \rd \theta\)









$\blacksquare$





