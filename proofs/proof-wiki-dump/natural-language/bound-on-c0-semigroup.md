# 

Source: https://proofwiki.org/wiki/Bound_on_C0_Semigroup

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a Banach space over $\GF$. 
Let $\family {\map T t}_{t \ge 0}$ be a $C_0$ semigroup. 
Let $\struct {\map B X, \norm {\, \cdot \,}_{\map B X} }$ be the space of bounded linear transformations equipped with the canonical norm.

Then there exists $M \ge 1$ and $\omega \ge 0$ such that: 

$\norm {\map T t}_{\map B X} \le M e^{\omega t}$
for each $t \in \hointr 0 \infty$. 


Proof
We first show that $\norm {\map T t}_{\map B X}$ is bounded on $\closedint 0 \delta$ for some $\delta > 0$.
Aiming for a contradiction, suppose $\norm {\map T t}_{\map B X}$ is unbounded on $\closedint 0 \delta$ for each $\delta > 0$.
Then for each $n \in \N$ we can pick $t_n \in \closedint 0 {\frac 1 n}$ such that $\norm {\map T {t_n} }_{\map B X} \ge n$.
Then, we have: 

$\ds \sup_{n \mathop \in \N} \norm {\map T {t_n} }_{\map B X} = \infty$
By definition, each $\map T {t_n}$ is a linear operator.
So we can apply Principle of Condensation of Singularities to obtain: 

$\ds \sup_{n \mathop \in \N} \norm {\map T {t_n} x} = \infty$
for some $x \in X$.
But since: 

$\ds \lim_{t \mathop \to 0^+} \map T {t_n} x = x$
and:

$\ds \lim_{n \mathop \to \infty} t_n = 0$ by the Squeeze Theorem
we must have that:

$\ds \sup_{n \mathop \in \N} \norm {\map T {t_n} x} < \infty$
by Convergent Sequence in Normed Vector Space is Bounded.
So we have a contradiction, and there exists $\delta > 0$ such that $\norm {\map T t}_{\map B X}$ is bounded on $\closedint 0 \delta$.
Suppose that: 

$\norm {\map T t}_{\map B X} \le M$
for $t \in \closedint 0 \delta$.
Since $\map T 0 = I$, we have $M \ge 1$. 
Now for general $t \ge 0$, write: 

$t = N \delta + r$ for $N \in \Z_{\ge 0}$ and $r \in \hointr 0 \delta$.
Then we have:














\(\ds \norm {\map T t}_{\map B X}\)

\(=\)







\(\ds \norm {\map T {N \delta + r} }_{\map B X}\)




















\(\ds \)

\(=\)







\(\ds \norm {\map T {N \delta} \map T r}_{\map B X}\)





Definition of Semigroup of Bounded Linear Operators














\(\ds \)

\(=\)







\(\ds \norm {\paren {\map T \delta}^N \map T r}_{\map B X}\)




















\(\ds \)

\(\le\)







\(\ds \norm {\paren {\map T \delta}^N}_{\map B X} \norm {\map T r}_{\map B X}\)





Norm on Bounded Linear Transformation is Submultiplicative














\(\ds \)

\(\le\)







\(\ds \norm {\map T \delta}_{\map B X}^N \norm {\map T r}_{\map B X}\)





Bound on Norm of Power of Element in Normed Algebra














\(\ds \)

\(=\)







\(\ds M^{N + 1}\)





since $r \in \closedint 0 \delta$



Since $t = N \delta + r$, we have: 

$\ds \frac t \delta = N + \frac r \delta \ge N$
so we have:














\(\ds M^{N + 1}\)

\(=\)







\(\ds M M^N\)




















\(\ds \)

\(\le\)







\(\ds M M^{\frac t \delta}\)




















\(\ds \)

\(=\)







\(\ds M e^{\frac t \delta \log M}\)









Taking: 

$\ds \omega = \frac {\log M} \delta$
we have:

$\ds \norm {\map T t}_{\map B X} \le M e^{\omega t}$
for each $t \in \hointr 0 \infty$.
$\blacksquare$


Sources
1983: Amnon Pazy: Semigroups of Linear Operators and Applications to Partial Differential Equations ... (previous) ... (next): $1.2$: Strongly Continuous Semigroups of Bounded Linear Operators




