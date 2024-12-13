# 

Source: https://proofwiki.org/wiki/Poles_of_Gamma_Function

Theorem
The gamma function $\Gamma: \C \to \C$ is analytic throughout the complex plane except at $\set {0, -1, -2, -3, \dotsc}$ where it has simple poles.


Proof
First we examine the location of the poles.
We examine the Weierstrass form of the Gamma function:

$\dfrac 1 {\map \Gamma z} = z e^{\gamma z} \ds \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac z n} e^{-z / n} }$
The factors of the continued product clearly do not tend to zero.
So the continued product is zero only if one of the factors is zero.
This occurs when $1 + \dfrac z n = 0$.
This occurs at $z \in \set {-1, -2, \dotsc}$.

We also have the expression outside the continued product to consider.
From Exponential Tends to Zero and Infinity, the exponential function is never $0$.
So this expression is zero whenever $z = 0$.
Furthermore, if some factor in the continued product is zero, this excludes the possibility that any other factor is zero.
So the zeros are simple.
Hence:

$\dfrac 1 {\map \Gamma z} = 0 \iff z \in \set {0, -1, -2, -3, \ldots}$
Therefore $\Gamma$ has simple poles at these points.

Next we show that $\Gamma$ is analytic on $\map \Re z > 0$. 
By Gamma Difference Equation this proves that $\Gamma$ is analytic on $\C \setminus \set {0, -1, -2, -3, \dotsc}$.

Let the functions $\Gamma_n$ be defined by

$\ds \map {\Gamma_n} z = \int_0^n t^{z - 1} e^{-t} \rd t$
Clearly each $\Gamma_n$ is analytic.
So by Uniform Limit of Analytic Functions is Analytic it is sufficient to show that $\Gamma_n \to \Gamma$ locally uniformly.
By Modulus of Complex Integral:

$\ds \cmod {\map \Gamma z - \map {\Gamma_n} Z } \le \int_n^\infty t^{x - 1} e^{-t} \rd t$
where $x = \map \Re z$. 
Let $a \in \C$ with $\map \Re a > 0$.
Let $D$ be an open disk of radius $r$ about $a$.
By definition of exponential function, we have the expansion:

$e^z = 1 + z + \dfrac {z^2} 2 + \dotsb$
from which we see that:

$\forall \alpha \in \R_{>0}: z^\alpha = \map \oo {e^z}$
where $\oo$ denotes little-$\oo$ notation.
In particular:

$\exists c \in \R_{>0}: \forall t \ge 1: e^{-t} \le c t^{-\map \Re a - r - 1}$
Then:














\(\ds \cmod {\map \Gamma z - \map {\Gamma_n} z}\)

\(\le\)







\(\ds \int_n^\infty t^{x - 1} c t^{-\map \Re a -r - 1} \rd t\)




















\(\ds \)

\(\le\)







\(\ds c\int_n^\infty t^{-2} \rd t\)




















\(\ds \)

\(\le\)







\(\ds \frac c n\)









So $\Gamma_n \to \Gamma$ uniformly in $D$, and the proof is complete.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Gamma Function: $33$




