# 

Source: https://proofwiki.org/wiki/Martingale_Composed_with_Convex_Function_is_Submartingale

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a $\sequence {\FF_t}_{t \ge 0}$-martingale.
Let $f : \R \to \R$ be a convex function such that $\map f {X_t}$ is integrable for each $t \in \hointr 0 \infty$. 

Then $\sequence {\map f {X_t} }_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-submartingale. 


Proof
Since $\sequence {X_t}_{t \ge 0}$ is a martingale, we have: 

$X_t$ is $\FF_t$-measurable
for each $t \in \hointr 0 \infty$. 
From Convex Real Function is Measurable and Composition of Measurable Mappings is Measurable:

$\map f {X_t}$ is $\FF_t$-measurable
for each $t \in \hointr 0 \infty$.
So $\sequence {\map f {X_t} }_{t \ge 0}$ is $\sequence {\FF_t}_{t \ge 0}$-adapted. 
Now let $s, t \in \hointr 0 \infty$ be such that $0 \le s < t$. 
Let $\expect {\map f {X_t} \mid \FF_s}$ be a version of the conditional expectation of $\map f {X_t}$ given $\FF_s$.
We then have: 














\(\ds \expect {\map f {X_t} \mid \FF_s}\)

\(\ge\)







\(\ds \map f {\expect {X_t \mid \FF_s} }\)





almost surely, by Conditional Jensen's Inequality














\(\ds \)

\(=\)







\(\ds \map f {X_s}\)





almost surely, Definition of Martingale



So $\sequence {\map f {X_t} }_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-submartingale.
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): Proposition $3.12$




