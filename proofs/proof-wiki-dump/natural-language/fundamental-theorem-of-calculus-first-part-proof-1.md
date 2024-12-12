# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/First_Part/Proof_1



Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Let $F$ be a real function which is defined on $\closedint a b$ by:

$\ds \map F x = \int_a^x \map f t \rd t$

Then $F$ is a primitive of $f$ on $\closedint a b$.


Proof
To show that $F$ is a primitive of $f$ on $\closedint a b$, we need to establish the following:

$F$ is continuous on $\closedint a b$
$F$ is differentiable on the open interval $\openint a b$
$\forall x \in \closedint a b: \map {F'} x = \map f x$.


Proof that $F$ is Continuous
We have that $f$ is continuous on $\closedint a b$.
It follows from Continuous Image of Closed Interval is Closed Interval that $f$ is bounded on $\closedint a b$.
Suppose that:

$\forall t \in \closedint a b: \size {\map f t} < \kappa$
Let $x, \xi \in \closedint a b$.
From Sum of Integrals on Adjacent Intervals for Continuous Functions‎, we have that:

$\ds \int_a^x \map f t \rd t + \int_x^\xi \map f t \rd t = \int_a^\xi \map f t \rd t$
That is:

$\ds \map F x + \int_x^\xi \map f t \rd t = \map F \xi$
So:

$\ds \map F x - \map F \xi = -\int_x^\xi \map f t \rd t = \int_\xi^x \map f t \rd t$

From Darboux's Theorem: Corollary:

$\size {\map F x - \map F \xi} < \kappa \size {x - \xi}$

Thus it follows that $F$ is continuous on $\closedint a b$.
$\Box$


Proof that $F$ is Differentiable and $f$ is its Derivative
It is now to be shown that that $F$ is differentiable on $\openint a b$ and that:

$\forall x \in \closedint a b: \map {F'} x = \map f x$

Let $x, \xi \in \closedint a b$ such that $x \ne \xi$.
Then:














\(\ds \frac {\map F x - \map F \xi} {x - \xi} - \map f \xi\)

\(=\)







\(\ds \frac 1 {x - \xi} \paren {\map F x - \map F \xi - \paren {x - \xi} \map f \xi}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x - \xi} \paren {\int_\xi^x \map f t \rd t - \paren {x - \xi} \map f \xi}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x - \xi} \int_\xi^x \paren {\map f t - \map f \xi} \rd t\)





Definite Integral of Function plus Constant, putting $c = \map f \xi$




Now, let $\epsilon > 0$.
If $\xi \in \openint a b$, then $f$ is continuous at $\xi$.
So for some $\delta > 0$:

$\size {\map f t - \map f \xi} < \epsilon$
provided $\size {t - \xi} < \delta$.
So provided $\size {x - \xi} < \delta$ it follows that:

$\size {\map f t - \map f \xi} < \epsilon$
for any $t$ in an interval whose endpoints are $x$ and $\xi$.

So from Darboux's Theorem: Corollary:














\(\ds \size {\frac {\map F x - \map F \xi} {x - \xi} - \map f \xi}\)

\(=\)







\(\ds \frac 1 {\size {x - \xi} } \size {\int_\xi^x \paren {\map f t - \map f \xi} \rd t}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {\size {x - \xi} } \epsilon \size {x - \xi}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









provided $0 < \size {x - \xi} < \delta$.
But that is what this means:

$\dfrac {\map F x - \map F \xi} {x - \xi} \to \map f \xi$ as $x \to \xi$

So $F$ is differentiable on $\openint a b$, and:

$\forall x \in \closedint a b: \map {F'} x = \map f x$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.12$




