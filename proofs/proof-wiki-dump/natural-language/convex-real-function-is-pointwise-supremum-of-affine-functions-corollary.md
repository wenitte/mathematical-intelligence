# 

Source: https://proofwiki.org/wiki/Convex_Real_Function_is_Pointwise_Supremum_of_Affine_Functions/Corollary

Corollary to Convex Real Function is Pointwise Supremum of Affine Functions
Let $f : \R \to \R$ be a convex real function. 

Then there exists a countable set $\mathcal S \subseteq \R^2$ such that: 

$\ds \map f x = \sup_{\tuple {a, b} \in \mathcal S} \paren {a x + b}$
for each $x \in \R$. 


Proof
For each $x \in \R$, construct $c_x$, $\phi_x$ and $g_x$ as in Convex Real Function is Pointwise Supremum of Affine Functions.
That is, define $g_x : \R \setminus \set x \to \R$ to have: 

$\ds \map {g_x} y = \frac {\map f y - \map f x} {y - x}$
for each $y \in \R \setminus \set x$.
Define also: 

$c_x = \sup \set {\map {g_x} y : y < x}$
and:

$\map {\phi_x} y = \map f x + c_x \paren {y - x}$
for each $y \in \R$. 
Then we have: 

$\map f x = \sup \set {\map {\phi_y} x : y \in \R}$
We will now show:

$\map f x = \sup \set {\map {\phi_y} x : y \in \Q}$
for each $x \in \R$. 
Note that from Supremum of Subset, we have: 

$\sup \set {\map {\phi_y} x : y \in \Q} \le \sup \set {\map {\phi_y} x : y \in \R} = \map f x$
From Monotone Convergence Theorem (Real Analysis): Increasing Sequence, it is sufficient to construct a sequence of rational numbers $\sequence {q_n}_{n \in \N}$ such that: 

$\map {\phi_{q_n} } x \to \map f x$
From Rational Sequence Increasing to Real Number, there exists an increasing sequence of rational numbers with $q_n \to x$.
Since $q_n \le q_{n + 1}$, by Supremum of Subset we have: 

$\sup \set {\map {g_x} y : y < q_n} \le \sup \set {\map {g_x} y : y < q_{n + 1} }$
and so:

$c_{q_n} \le c_{q_{n + 1} }$
for each $n \in \N$.
We also have, since $q_n \le x$: 

$\sup \set {\map {g_x} y : y < q_n} \le \sup \set {\map {g_x} y : y < x}$
and so: 

$c_{q_n} \le c_x$
for each $n \in \N$. 
If $c_{q_1} \ge 0$, then we have:

$c_{q_n} \ge 0$ for each $n \in \N$
and hence: 

$\size {c_{q_n} } \le \size {c_x}$ for each $n \in \N$.
If $c_{q_1} < 0$, then $\sequence {\size {c_{q_n} } }_{n \in \N}$ is a decreasing sequence until we hit an $m \in \N$ such that $c_{q_m} \ge 0$. 
If no such $m \in \N$ exists, then the sequence is simply decreasing. 
We conclude from these observations that: 

$\size {c_{q_n} } \le \max \set {\size {c_{q_1} }, \size {c_x} }$ for each $n \in \N$.
So, we now have:














\(\ds \size {\map {\phi_{q_n} } x - \map f x}\)

\(=\)







\(\ds \size {c_{q_n} } \size {x - q_n}\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\size {c_{q_1} }, \size {c_x} } \size {x - q_n}\)









We then have: 

$\size {x - q_n} \to 0$ as $n \to \infty$
and so: 

$\map {\phi_{q_n} } x \to \map f x$
by the Squeeze Theorem.
We therefore have: 

$\map f x = \sup \set {\map {\phi_y} x : y \in \Q}$
and so setting:

$\mathcal S = \set {\tuple {c_y, \map f y - c_y y} : y \in \Q}$
we obtain: 

$\ds \map f x = \sup_{\tuple {a, b} \in \mathcal S} \paren {a x + b}$
for each $x \in \R$, for a countable $\mathcal S$. 
$\blacksquare$





