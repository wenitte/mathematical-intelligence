# 

Source: https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_by_Norm_of_Subdivision



Theorem
Let $f, \alpha$ be real functions that are bounded on $\closedint a b$.
Suppose there exists some $A \in \R$ where, for every $\epsilon > 0$, there exists some $\delta_\epsilon > 0$ such that:

For every finite subdivision $P$ of $\closedint a b$, if the norm $\norm P < \delta_\epsilon$, then:
For every Riemann-Stieltjes sum $\map S {P, f, \alpha}$:
$\size {\map S {P, f, \alpha} - A} < \epsilon$

Then, $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \alpha = A$


Corollary
Let $f$ be a real function that is bounded on $\closedint a b$.
Suppose $f$ is Riemann integrable on $\closedint a b$.
Let $\iota$ be the identity mapping on $\closedint a b$.

Then, $f$ is Riemann-Stieltjes integrable with respect to $\iota$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \iota = \int_a^b \map f x \rd x$
where the integral on the right is understood to denote the Riemann integral.


Proof
Let $\epsilon > 0$ be arbitrary.
By hypothesis, let $\delta_\epsilon > 0$ be such that, for every subdivision $P$ with $\norm P < \delta_\epsilon$:

$\size {\map S {P, f, \alpha} - A} < \epsilon$
By Existence of Subdivision with Small Norm, let $P_\epsilon$ be a subdivision of $\closedint a b$ such that:

$\norm {P_\epsilon} < \delta_\epsilon$

Let $P$ be a subdivision that is finer than $P_\epsilon$.
Then:














\(\ds \norm P\)

\(\le\)







\(\ds \norm {P_\epsilon}\)





Norm of Refinement is no Greater than Norm of Subdivision














\(\ds \)

\(<\)







\(\ds \delta_\epsilon\)





Definition of $P_\epsilon$



Thus, by hypothesis:

$\size {\map S {P, f, \alpha} - A} < \epsilon$
But, since $P$ finer than $P_\epsilon$ and $\epsilon > 0$ were arbitrary:

$\ds \int_a^b f \rd \alpha = A$
by definition of the Riemann-Stieltjes integral.
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.): Chapter $7$ The Riemann-Stieltjes Integral: Exercise $7.3$




