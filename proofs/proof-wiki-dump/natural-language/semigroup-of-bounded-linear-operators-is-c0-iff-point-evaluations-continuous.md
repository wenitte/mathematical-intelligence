# 

Source: https://proofwiki.org/wiki/Semigroup_of_Bounded_Linear_Operators_is_C0_iff_Point_Evaluations_Continuous



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a Banach space over $\GF$. 
Let $\family {\map T t}_{t \ge 0}$ be a semigroup of bounded linear operators. 
For each $x \in X$, define $x^\wedge : \hointr 0 \infty \to X$ by: 

$\map {x^\wedge} t = \map T t x$
for each $t \in \hointr 0 \infty$. 

Then $\family {\map T t}_{t \ge 0}$ is a $C_0$ semigroup if and only if $x^\wedge$ is continuous for each $x \in X$. 


Proof
Sufficient Condition
Suppose that $x^\wedge$ is continuous for each $x \in X$.
In particular, for each $x \in X$ we have that $x^\wedge$ is continuous at $0$. 
That is: 

$\ds \lim_{t \mathop \to 0^+} \map T t x = \map T 0 x = x$ for each $x \in X$.
So $\family {\map T t}_{t \ge 0}$ is a $C_0$ semigroup.
$\Box$

Necessary Condition
Suppose that $\family {\map T t}_{t \ge 0}$ is a $C_0$ semigroup.
By Bound on C0 Semigroup, there exists $M \ge 1$ and $\omega \ge 0$ such that: 

$\norm {\map T t}_{\map B X} \le M e^{\omega t}$
for each $t \in \hointr 0 \infty$. 
Let $x \in X$.
We show that $x^\wedge$ is continuous.
We have that: 

$\ds \lim_{t \mathop \to 0^+} \map T t x = x = \map T 0 x$
so $x^\wedge$ is continuous at $0$.
Let $t > 0$ and let $h > 0$.
Then:














\(\ds \norm {\map {x^\wedge} {t + h} - \map {x^\wedge} t}\)

\(=\)







\(\ds \norm {\map T {t + h} x - \map T t x}\)




















\(\ds \)

\(=\)







\(\ds \norm {\map T t \paren {\map T h x - x} }\)





Definition of Semigroup of Bounded Linear Operators














\(\ds \)

\(\le\)







\(\ds \norm {\map T t}_{\map B X} \norm {\map T h x - x}\)





Norm on Bounded Linear Transformation is Submultiplicative














\(\ds \)

\(\le\)







\(\ds M e^{\omega t} \norm {\map T h x - x}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $h \to 0^+$, Definition of C0 Semigroup



That is: 

$\ds \lim_{h \mathop \to 0^+} \norm {\map {x^\wedge} {t + h} - \map {x^\wedge} t} = 0$
Now let $0 \ge h > -t$.
We have: 














\(\ds \norm {\map {x^\wedge} {t + h} - \map {x^\wedge} t}\)

\(=\)







\(\ds \norm {\map T {t + h} x - \map T t x}\)




















\(\ds \)

\(=\)







\(\ds \norm {\map T {t + h} \paren {x - \map T {-h} x} }\)





Definition of Semigroup of Bounded Linear Operators














\(\ds \)

\(\le\)







\(\ds \norm {\map T {t + h} }_{\map B X} \norm {\map T {-h} x - x}\)





Norm on Bounded Linear Transformation is Submultiplicative














\(\ds \)

\(\le\)







\(\ds M e^{\omega \paren {t + h} } \norm {\map T {-h} x - x}\)









We have: 

$\ds \lim_{h \mathop \to 0^-} M e^{\omega \paren {t + h} } = M e^{\omega t}$
Also:

$\ds \lim_{h \mathop \to 0^-} \norm {\map T {-h} x - x} = 0$
from the definition of a $C_0$ semigroup.
From Product Rule for Limits of Functions and Squeeze Theorem, we have: 

$\ds \lim_{h \mathop \to 0^-} \norm {\map {x^\wedge} {t + h} - \map {x^\wedge} t} = 0$
So:

$\ds \lim_{h \mathop \to 0} \norm {\map {x^\wedge} {t + h} - \map {x^\wedge} t} = 0$
So $x^\wedge$ is continuous for each $x \in X$.
$\blacksquare$


Sources
1983: Amnon Pazy: Semigroups of Linear Operators and Applications to Partial Differential Equations ... (previous) ... (next): $1.2$: Strongly Continuous Semigroups of Bounded Linear Operators




