# 

Source: https://proofwiki.org/wiki/Scalar_Multiplication_on_Locally_Convex_Space_is_Continuous

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \PP}$ be a locally convex space over $\GF$ equipped with the standard topolgoy.
Let $\struct {\GF \times X, \tau}$ be the Cartesian product $\GF \times X$ equipped with the product topology.
Let $\circ : \struct {\GF \times X, \tau} \to \struct {X, \PP}$ be the scalar multiplication defined on $X$.

Then $\circ : \struct {\GF \times X, \tau} \to \struct {X, \PP}$ is a continuous mapping.


Proof
From the definition of the standard topology, the topology on $\struct {X, \PP}$ has sub-basis: 

$\SS = \set {\map {B_p} {x, \epsilon} : p \in \PP, \, \epsilon > 0}$
where we define: 

$\map {B_p} {x, \epsilon} = \set {y \in X : \map p {y - x} < \epsilon}$
for each $p \in \PP$ and $\epsilon > 0$.
From Continuity Test using Sub-Basis, it suffices to show that: 

$\circ^{-1} \sqbrk {\map {B_p} {x_0, \epsilon} } \in \tau$ for each $p \in \PP$, $\epsilon > 0$ and $x_0 \in X$.
That is: 

$\set {\tuple {\lambda, x} \in \GF \times X : \map p {\lambda x - x_0} < \epsilon}$
For brevity, let: 

$U_{x_0} = \set {\tuple {\lambda, x} \in \GF \times X : \map p {\lambda x - x_0} < \epsilon}$
Let $\tuple {\lambda, x} \in U_{x_0}$ and $\tuple {\lambda', x'} \in \GF \times X$.
We then have: 














\(\ds \map p {\lambda' x' - x_0}\)

\(=\)







\(\ds \map p {\lambda' x' - x_0 + \lambda x - \lambda x + \lambda x' - \lambda x'}\)




















\(\ds \)

\(=\)







\(\ds \map p {\lambda x - x_0 - \lambda \paren {x - x'} + \paren {\lambda' - \lambda} x'}\)




















\(\ds \)

\(\le\)







\(\ds \map p {\lambda x - x_0} + \cmod \lambda \map p {x - x'} + \cmod {\lambda' - \lambda} \map p {x'}\)





Seminorm Axiom $\text N 2$: Positive Homogeneity, Seminorm Axiom $\text N 3$: Triangle Inequality



We want to make: 

$\ds \cmod \lambda \map p {x - x'} < \frac {\epsilon - \map p {\lambda x - x_0} } 2$
and:

$\ds \cmod {\lambda' - \lambda} \map p {x'} < \frac {\epsilon - \map p {\lambda x - x_0} } 2$

First suppose that $\lambda = 0$, then the first requirement is satisfied for all $x' \in X$.
Then, for $\lambda' \in \GF$ with: 

$\ds \cmod {\lambda'} < \sqrt {\frac {\epsilon - \map p {x_0} } 2}$
and $x' \in X$ with: 

$\ds \map p {x'} < \sqrt {\frac {\epsilon - \map p {x_0} } 2}$
we have: 

$\ds \cmod {\lambda' - \lambda} \map p {x'} < \frac {\epsilon - \map p {x_0} } 2 = \frac {\epsilon - \map p {\lambda x - x_0} } 2$
So for each $x \in X$, set: 

$\ds \map {\epsilon_1} {0, x} = \map {\epsilon_2} {0, x} = \sqrt {\frac {\epsilon - \map p {x_0} } 2}$
Then, for $\tuple {\lambda', x'} \in \map {B_{\map {\epsilon_1} {0, x} } } {0, \GF} \times \map {B_p} {\map {\epsilon_2} {0, x}, x}$, we have: 

$\map p {\lambda' x' - x_0} < \epsilon$
where $\map {B_{\map {\epsilon_1} {0, x} } } {0, \GF}$ denotes the open ball of radius $\map {\epsilon_1} {0, x}$ and center $0$.

Now take $\lambda \ne 0$.
Using Seminorm Axiom $\text N 3$: Triangle Inequality, we have: 

$\map p {x'} \le \map p {x' - x} + \map p x$
for each $x, x' \in X$.
So it suffices to make: 

$\ds \cmod {\lambda - \lambda'} \map p {x' - x} + \cmod {\lambda - \lambda'} \map p x < \frac {\epsilon - \map p {\lambda x - x_0} } 2$
We split further on cases.
Suppose that $\map p x = 0$, so we are aiming to make: 

$\ds \cmod {\lambda - \lambda'} \map p {x' - x} < \frac {\epsilon - \map p {\lambda x - x_0} } 2$
and:

$\ds \cmod \lambda \map p {x - x'} < \frac {\epsilon - \map p {\lambda x - x_0} } 2$
Then, if $x' \in X$ has: 

$\ds \map p {x - x'} < \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda}$
and $\lambda' \in \GF$ has: 

$\ds \cmod {\lambda - \lambda'} < \cmod \lambda$
we have: 

$\ds \cmod {\lambda - \lambda'} \map p {x - x'} < \cmod \lambda \times \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda} = \frac {\epsilon - \map p {\lambda x - x_0} } 2$
So define:

$\ds \map {\epsilon_1} {\lambda, x} = \cmod \lambda$
and: 

$\ds \map {\epsilon_2} {\lambda, x} = \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda}$
if $\map p x = 0$.
Then for $\tuple {\lambda', x'} \in \map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x}$, we have: 

$\map p {\lambda' x' - x_0} < \epsilon$
Now suppose that $\map p x \ne 0$.
To make: 

$\ds \cmod \lambda \map p {x - x'} < \frac {\epsilon - \map p {\lambda x - x_0} } 2$
we can take $x' \in X$ to have: 

$\ds \map p {x - x'} < \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda}$
Then it suffices to pick $\lambda'$ such that:

$\ds \cmod {\lambda - \lambda'} \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda} < \frac {\epsilon - \map p {\lambda x - x_0} } 4$
and: 

$\ds \cmod {\lambda - \lambda'} \map p x < \frac {\epsilon - \map p {\lambda x - x_0} } 4$
For this, it suffices that: 

$\ds \cmod {\lambda - \lambda'} < \frac {\epsilon - \map p {\lambda x - x_0} } {4 \map p x}$
and: 

$\ds \cmod {\lambda - \lambda'} < \frac {\cmod \lambda} 2$
So, if: 

$\ds \cmod {\lambda - \lambda'} < \min \set {\frac {\epsilon - \map p {\lambda x - x_0} } {4 \map p x}, \, \frac {\cmod \lambda} 2}$
we have: 

$\ds \cmod {\lambda - \lambda'} \map p {x' - x} + \cmod {\lambda - \lambda'} \map p x < \frac {\epsilon - \map p {\lambda x - x_0} } 2$
So, for $\map p x \ne 0$ and $\lambda \ne 0$, take: 

$\ds \map {\epsilon_1} {\lambda, x} = \min \set {\frac {\epsilon - \map p {\lambda x - x_0} } {4 \map p x}, \, \frac {\cmod \lambda} 2}$
and: 

$\ds \map {\epsilon_2} {\lambda, x} = \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda}$
Then for $\tuple {\lambda', x'} \in \map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x}$, we have:

$\map p {\lambda' x' - x_0} < \epsilon$

To recap, for each $\tuple {\lambda, x} \in U_{x_0}$, we have defined: 

$\ds \map {\epsilon_1} {\lambda, x} = \begin{cases}\sqrt {\frac {\epsilon - \map p {x_0} } 2} & \lambda = 0, \\ \cmod \lambda & \lambda \ne 0, \, \map p x = 0 \\ \min \set {\frac {\epsilon - \map p {\lambda x - x_0} } {4 \map p x}, \, \frac {\cmod \lambda} 2} & \lambda \ne 0, \, \map p x \ne 0\end{cases}$
and: 

$\ds \map {\epsilon_2} {\lambda, x} = \begin{cases}\sqrt {\frac {\epsilon - \map p {x_0} } 2} & \lambda = 0, \\ \frac {\epsilon - \map p {\lambda x - x_0} } {2 \cmod \lambda} & \lambda \ne 0\end{cases}$
and these are such that if $\tuple {\lambda', x'} \in \map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x}$, we have:

$\map p {\lambda' x' - x_0} < \epsilon$
so that $\tuple {\lambda', x'} \in U_{x_0}$. 
So, we have: 

$\map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x} \subseteq U_{x_0}$
for each $\tuple {\lambda, x} \in U_{x_0}$.
From Union of Subsets is Subset, we have: 

$\ds \bigcup_{\tuple {\lambda, x} \in U_{x_0} } \map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x} \subseteq U_{x_0}$
On the other hand, for each $\tuple {\lambda, x} \in U_{x_0}$, we have: 

$\tuple {\lambda, x} \in \map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x}$
So we have:

$\ds U_{x_0} = \bigcup_{\tuple {\lambda, x} \in U_{x_0} } \map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x}$
From Natural Basis of Product Topology of Finite Product, we have that: 

$\set {\map {B_{\epsilon_1} } {\lambda, x_1} \times \map {B_p} {\epsilon_2, x_2} : p \in \PP, \, \lambda \in \GF, \, x_1, x_2 \in X, \, \epsilon_1, \epsilon_2 > 0}$
forms a basis for $\struct {\GF \times X, \tau}$. 
So:

$\map {B_{\map {\epsilon_1} {\lambda, x} } } {\lambda, \GF} \times \map {B_p} {\map {\epsilon_2} {\lambda, x}, x} \in \tau$ for each $\tuple {\lambda, x} \in U_{x_0}$
Since topologies are closed under set union, we have $\circ^{-1} \sqbrk {\map {B_p} {x_0, \epsilon} } = U_{x_0} \in \tau$, which is what we wanted.
$\blacksquare$





