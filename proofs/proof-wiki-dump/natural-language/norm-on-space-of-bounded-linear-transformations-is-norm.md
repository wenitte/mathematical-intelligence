# 

Source: https://proofwiki.org/wiki/Norm_on_Space_of_Bounded_Linear_Transformations_is_Norm



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$. 
Let $\map B {X, Y}$ be the space of bounded linear transformations between $X$ and $Y$. 
Let $\norm {\, \cdot \,}_{\map B {X, Y} }$ be the norm on the space of bounded linear transformations.

Then $\norm {\, \cdot \,}_{\map B {X, Y} }$ is indeed a norm on $\map B {X, Y}$.


Proof
From Norm on Bounded Linear Transformation is Finite, $\norm {\, \cdot \,}_{\map B {X, Y} }$ is real-valued.

Proof of Norm Axiom $\text N 1$: Positive Definiteness
First, we have: 

$\norm {\mathbf 0_{\map B {X, Y} } x}_Y = 0$
for each $x \in X$.
So:

$\set {\norm {\mathbf 0_{\map B {X, Y} } x}_Y : \norm x_X = 1} = \set 0$
That is: 

$\norm {\mathbf 0_{\map B {X, Y} } }_{\map B {X, Y} } = 0$
Now suppose that $T \in \map B {X, Y}$ has $\norm T_{\map B {X, Y} } = 0$.
Then from Fundamental Property of Norm on Bounded Linear Transformation, we have: 

$\norm {T x}_Y \le \norm T_{\map B {X, Y} } \norm x_X = 0$
for each $x \in X$. 
Then from Norm Axiom $\text N 1$: Positive Definiteness for $\norm {\, \cdot \,}_Y$, we have $T x = 0$ for each $x \in X$.
So $T = \mathbf 0_{\map B {X, Y} }$. 
This proves Norm Axiom $\text N 1$: Positive Definiteness.
$\Box$

Proof of Norm Axiom $\text N 2$: Positive Homogeneity
Take $\lambda \in \GF$ with $\lambda \ne 0$, $T \in \map B {X, Y}$ and $x \in X$.
Take $M > 0$ such that: 

$\norm {T x}_Y \le M \norm x_X$
Then:














\(\ds \norm {\lambda T x}_Y\)

\(=\)







\(\ds \cmod \lambda \norm {T x}_Y\)





Norm Axiom $\text N 2$: Positive Homogeneity for $\norm {\, \cdot \,}_Y$














\(\ds \)

\(\le\)







\(\ds M \cmod \lambda \norm x_X\)





by hypothesis



Taking the infimum over $M > 0$ we have: 

$\norm {\lambda T x}_Y \le \cmod \lambda \norm T_{\map B {X, Y} } \norm x_X$
So: 

$\norm {\lambda T}_{\map B {X, Y} } \le \cmod \lambda \norm T_{\map B {X, Y} }$
Now suppose that: 

$\norm {\lambda T}_{\map B {X, Y} } < \cmod \lambda \norm T_{\map B {X, Y} }$
Then there exists $m < \cmod \lambda \norm T_{\map B {X, Y} }$ such that: 

$\norm {\lambda T x}_Y \le m \norm x_X$
for each $x \in X$.
Then by Norm Axiom $\text N 2$: Positive Homogeneity for ${\, \norm \,}_Y$ we have: 

$\ds \norm {T x}_Y \le \frac m {\cmod \lambda} \norm x_X$
where:

$\ds \frac m {\cmod \lambda} < \norm T_{\map B {X, Y} }$
This contradicts the definition of $\norm T_{\map B {X, Y} }$, so we must have: 

$\norm {\lambda T}_{\map B {X, Y} } = \cmod \lambda \norm T_{\map B {X, Y} }$
$\Box$

Proof of Norm Axiom $\text N 3$: Triangle Inequality
Let $T, S \in \map B {X, Y}$. 
Then, for each $x \in X$ we have: 














\(\ds \norm {\paren {T + S} x}_Y\)

\(=\)







\(\ds \norm {T x + S x}_Y\)





Definition of Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {T x}_Y + \norm {S x}_Y\)





Norm Axiom $\text N 3$: Triangle Inequality for $\norm {\, \cdot \,}_Y$














\(\ds \)

\(\le\)







\(\ds \paren {\norm T_{\map B {X, Y} } + \norm S_{\map B {X, Y} } } \norm x_X\)





Fundamental Property of Norm on Bounded Linear Transformation



Taking the supremum over $\norm x_X = 1$, we have: 

$\norm {T + S}_{\map B {X, Y} } \le \norm T_{\map B {X, Y} } + \norm S_{\map B {X, Y} }$
$\blacksquare$





