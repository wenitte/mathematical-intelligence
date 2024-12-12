# 

Source: https://proofwiki.org/wiki/Characterization_of_Unit_Open_Balls_of_Norms_of_Euclidean_Space



Theorem
Let $\struct {\R^n, \norm \cdot}$ be the Euclidean $n$-space. 
Let $K \subseteq \R^n$ be a non-empty open set of $\struct {\R^n, \norm \cdot}$.

Then there exists a norm $\norm \cdot_* : \R^n \to \R$ such that: 

$\set {x \in \R^n : \norm x_* < 1} = K$
if and only if:

$(1): \quad$ $K$ is bounded in $\struct {\R^n, \norm \cdot}$
$(2): \quad$ $K$ is convex
$(3): \quad$ $K$ is symmetric.

That is: 

an open set $K \subseteq \R^n$ is the unit ball of some norm on $\R^n$ if and only if $K$ is bounded, (with respect to the Euclidean norm), convex and symmetric.


Proof
Necessary Condition
Proof of $(1)$
Suppose that $\norm \cdot_* : \R^n \to \R$ is a norm on $\R^n$ with: 

$\set {x \in \R^n : \norm x_* < 1} = K$
From Norms on Finite-Dimensional Real Vector Space are Equivalent, there exists $M > 0$ such that: 

$\norm x \le M \norm x_*$
for each $x \in \R^n$.
So, for each $x \in K$, we have: 

$\norm x < M$
So $K$ is bounded.
$\Box$


Proof of $(2)$
From Open Ball is Convex Set, we have that $K$ is convex.
$\Box$


Proof of $(3)$
Let $x \in K$. 
Then we have: 

$\norm x_* < 1$
We have: 

$\norm {-x}_* = \size {-1} \norm x = \norm x$
so we also have: 

$\norm {-x}_* < 1$
So:

$-x \in K$.
So $K$ is symmetric.
$\Box$


Sufficient Condition
Suppose that $K \subseteq \R^n$ satisfies:

$(1): \quad$ $K$ is bounded in $\struct {\R^n, \norm \cdot}$
$(2): \quad$ $K$ is convex
$(3): \quad$ $K$ is symmetric.

We first show that $0 \in K$.
Since $K$ is not empty, we can pick $x \in K$. 
Since $K$ is symmetric, we have $-x \in K$. 
Then since $K$ is convex, we have: 

$\ds \frac 1 2 x + \frac 1 2 \paren {-x} = 0 \in K$
So we can consider the Minkowski functional for $K$, $p_K$.

We show that $p_K$ gives a norm. 
From Minkowski Functional of Open Convex Set in Normed Vector Space is Bounded, there exists a real number $c > 0$ such that: 

$\map {p_K} x \ge c \norm x$ for all $x \in X$.
From Minkowski Functional of Open Convex Set in Normed Vector Space is Sublinear Functional, we have that: 

$\map {p_K} {x + y} \le \map {p_K} x + \map {p_K} y$ for each $x, y \in \R^n$
and:

$\map {p_K} {\lambda x} = \lambda \map {p_K} x = \size \lambda \map {p_K} x$ for each $\lambda \in \R_{\ge 0}$ and $x \in \R^n$.
So Norm Axiom $\text N 3$: Triangle Inequality and half of Norm Axiom $\text N 2$: Positive Homogeneity of the norm axioms are satisfied. 
It remains to show that: 

$\map {p_K} x = 0$ if and only if $x = 0$
and:

$\map {p_K} {\lambda x} = \size \lambda \map {p_K} x$ for each $\lambda \in \R_{< 0}$ and $x \in \R^n$.
Since $K$ is bounded, there exists $R > 0$ such that whenever $x \in K$, we have: 

$\norm x < R$
Then, for each $x \in \R^n \setminus \set 0$, we have: 

$\ds \frac {2 R} {\norm x} x \not \in K$
So:

$\ds \frac {\norm x} {2 R} \not \in \set {t > 0 : t^{-1} x \in K}$
From Minkowski Functional of Open Convex Set in Normed Vector Space is Sublinear Functional: Lemma, we have: 

$\openint {\map {p_C} x} \infty \subseteq \set {t > 0 : t^{-1} x \in K}$
So, we must have: 

$\ds \frac {\norm x} {2 R} \le \map {p_C} x$
for $x \in \R^n \setminus \set 0$.
This clearly holds for $x = 0$ also.
Then, if $\map {p_K} x = 0$, we have: 

$\norm x \le 0$
So from positive definiteness, we have: 

$x = 0$
So:

$\map {p_K} x = 0$
verifying Norm Axiom $\text N 2$: Positive Homogeneity.
Now it just remains to show that: 

$\map {p_K} {\lambda x} = \size \lambda \map {p_K} x$ for each $\lambda \in \R_{< 0}$ and $x \in \R^n$.
Let $\lambda < 0$ and $x \in \R^n$.
Since $K$ is symmetric, for $t > 0$ we have $t^{-1} x \in K$ if and only if $-t^{-1} x \in K$.
That is, if and only if $\paren {-\lambda t}^{-1} \paren {\lambda x} \in K$. 
Since $\lambda > 0$, this gives:

$t^{-1} x \in K$ if and only if $\paren {\size \lambda t}^{-1} \paren {\lambda x} \in K$
So: 

$t \in \set {t > 0 : t^{-1} x \in K}$ if and only if $\size \lambda t \in \set {t > 0 : t^{-1}\paren {\lambda x} \in K}$
So we have: 

$\set {t > 0 : t^{-1} \paren {\lambda x} \in K} = \size \lambda \set {t > 0 : t^{-1} x \in K}$
and so:

$\map {p_K} {\lambda x} = \size \lambda \map {p_K} x$
from Multiple of Infimum.
So $p_K$ satisfies Norm Axiom $\text N 2$: Positive Homogeneity. 
So $p_K$ is a norm on vector space.

So, defining $\norm \cdot_\ast : \R^n \to \R$ by: 

$\norm x_\ast = \map {p_K} x$
for each $x \in \R^n$ gives a norm.
Further, from Minkowski Functional of Open Convex Set in Normed Vector Space recovers Set, we have: 

$\set {x \in \R^n : \norm x_\ast < 1} = K$
So $\norm \cdot_\ast$ is the required norm.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $3.1$: Norms




