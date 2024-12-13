# 

Source: https://proofwiki.org/wiki/Semigroup_of_Bounded_Linear_Operators_Uniformly_Continuous_iff_Continuous_as_Map_from_Non-Negative_Reals_to_Bounded_Linear_Operators



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a Banach space over $\GF$. 
Let $\family {\map T t}_{t \ge 0}$ be a semigroup of bounded linear operators. 
Let $\struct {\map B X, \norm {\, \cdot \,}_{\map B X} }$ be the space of bounded linear transformations equipped with the canonical norm.

Then $\family {\map T t}_{t \ge 0}$ is uniformly continuous if and only if:

the mapping $T : \hointr 0 \infty \to \map B X$ is continuous.


Proof
Necessary Condition
If $T$ is continuous, then in particular it is continuous at $0$.
Since $\map T 0 = I$, we therefore have: 

$\ds \lim_{t \mathop \to 0^+} \norm {\map T t - I}_{\map B X} = 0$
So $\family {\map T t}_{t \ge 0}$ is uniformly continuous.
$\Box$


Sufficient Condition
Suppose that $\family {\map T t}_{t \mathop \ge 0}$ is uniformly continuous.
We have that: 

$\ds \lim_{t \mathop \to 0^+} \norm {\map T t - I}_{\map B X} = 0$
so $T$ is continuous at $0$.
Let $t > 0$ and $h > 0$. 
Then, we have:














\(\ds \norm {\map T {t + h} - \map T t}_{\map B X}\)

\(=\)







\(\ds \norm {\map T t \map T h - \map T t}_{\map B X}\)





Definition of Semigroup of Bounded Linear Operators














\(\ds \)

\(=\)







\(\ds \norm {\map T t \paren {\map T h - I} }_{\map B X}\)




















\(\ds \)

\(\le\)







\(\ds \norm {\map T t}_{\map B X} \norm {\map T h - I}_{\map B X}\)





Norm on Bounded Linear Transformation is Submultiplicative














\(\ds \)

\(\to\)







\(\ds 0\)





as $h \to 0^+$, since $\norm {\map T t}_{\map B X}$ is a fixed real number and $\norm {\map T h - I}_{\map B X} \to 0$ as $t \to 0^+$



so:

$\ds \lim_{h \to 0^+} \norm {\map T {t + h} - \map T t}_{\map B X} = 0$
Now let $-t < h < 0$. 
Then $h + t \in \closedint 0 t$ for all such $h$, so there exists $M > 0$:

$\norm {\map T {t + h} }_{\map B X} \le M$
for all $-t < h < 0$, from Uniformly Continuous Semigroup Bounded on Compact Intervals.
Then we have: 














\(\ds \norm {\map T {t + h} - \map T t}_{\map B X}\)

\(=\)







\(\ds \norm {\map T {t + h} \paren {I - \map T {-h} } }_{\map B X}\)





Definition of Semigroup of Bounded Linear Operators














\(\ds \)

\(\le\)







\(\ds \norm {\map T {t + h} }_{\map B X} \norm {\map T {-h} - I}_{\map B X}\)





Norm on Bounded Linear Transformation is Submultiplicative














\(\ds \)

\(\le\)







\(\ds M \norm {\map T {-h} - I}_{\map B X}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $h \to 0^-$



So we have: 

$\ds \lim_{h \to 0^-} \norm {\map T {t + h} - \map T t}_{\map B X} = 0$
and hence: 

$\ds \lim_{h \to 0} \norm {\map T {t + h} - \map T t}_{\map B X} = 0$
for $t > 0$.
So $T : \hointr 0 \infty \to \map B X$ is continuous.
$\blacksquare$


Sources
1983: Amnon Pazy: Semigroups of Linear Operators and Applications to Partial Differential Equations ... (previous) ... (next): $1.1$: Uniformly Continuous Semigroups of Bounded Linear Operators




