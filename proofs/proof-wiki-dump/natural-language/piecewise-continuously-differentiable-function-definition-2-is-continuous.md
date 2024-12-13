# 

Source: https://proofwiki.org/wiki/Piecewise_Continuously_Differentiable_Function/Definition_2_is_Continuous


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$.
Let $f$ satisfy Piecewise Continuously Differentiable Function/Definition 2.

Then $f$ is continuous.


Proof
$f$ satisfies the conditions of a Piecewise Continuously Differentiable 
Function by Definition 2.
Therefore, there exists a finite subdivision $\set {x_0, \ldots, x_n}$ of $\closedint a b$, $x_0 = a$ and $x_n = b$, such that $f$ is continuously differentiable on $\closedint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.
Here, the derivatives at $x_{i - 1}$ and $x_i$ are understood as one-sided derivatives.

$f$ is differentiable on $\closedint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.
Therefore, by Differentiable Function is Continuous, $f$ is continuous at every point of $\closedint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.
Here, the continuities at $x_{i - 1}$ and $x_i$ are one-sided.

We use this result to go through every point of every $\closedint {x_{i - 1} } {x_i}$ in order to establish the continuity of $f$ there:

$f$ is continuous on $\closedint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.
$\openint {x_{i - 1} } {x_i}$ is a subset of $\closedint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.
Therefore, $f$ is continuous at every point of $\openint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.

$x_0$ ($= a$) is the leftmost point in the domain of $f$.
$f$ is right-continuous at $x_0$.
Therefore, $f$ is continuous at $x_0$.

$x_n$ ($= b$) is the rightmost point in the domain of $f$.
$f$ is left-continuous at $x_n$.
Therefore, $f$ is continuous at $x_n$.

$f$ is continuous at every point $x_i$, $i \in \set {1, \ldots, n - 1}$, because $f$ is both left- and right-continuous at these points.

All in all, we have found that $f$ is continuous at every point of $\closedint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$.
$f$ is therefore continuous at every point of the union of those intervals: $\ds \bigcup_{i \mathop = 1}^n \closedint {x_{i - 1}} {x_i}$.
$\ds \bigcup_{i \mathop = 1}^n \closedint {x_{i - 1}} {x_i}$ equals $\closedint a b$, the domain of $f$.
Therefore, $f$ is continuous as $f$ is continuous at every point of its domain.
$\blacksquare$





