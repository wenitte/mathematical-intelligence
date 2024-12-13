# 

Source: https://proofwiki.org/wiki/Piecewise_Continuous_Function_with_One-Sided_Limits_is_Uniformly_Continuous_on_Each_Piece

Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$.
Let $f$ be piecewise continuous with one-sided limits:
$f$ is piecewise continuous with one-sided limits if and only if:

there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that, for all $i \in \set {1, 2, \ldots, n}$:
$(1): \quad f$ is continuous on $\openint {x_{i − 1} } {x_i}$
$(2): \quad$ the one-sided limits $\ds \lim_{x \mathop \to {x_{i − 1} }^+} \map f x$ and $\ds \lim_{x \mathop \to {x_i}^-} \map f x$ exist.

Then:

for all $i \in \set {1, 2, \ldots, n}$, $f$ is uniformly continuous on $\openint {x_{i − 1} } {x_i}$.


Proof
We have that $f$ is continuous on $\openint {x_{i − 1} } {x_i}$ for every $i \in \set {1, 2, \ldots, n}$.
Since $f$ is piecewise continuous with one-sided limits, the one-sided limits:

$\ds \lim_{x \mathop \to {x_{i−1} }^+} \map f x$
and:

$\ds \lim_{x \mathop \to {x_i}^-} \map f x$
exist for every $i \in \set {1, 2, \ldots, n}$.

Thus, from Extendability Theorem for Function Continuous on Open Interval, a function $f_i$ exists that satisfies:

$f_i$ is defined on $\closedint {x_{i − 1} } {x_i}$
$f_i$ is continuous on $\closedint {x_{i − 1} } {x_i}$
$f_i$ equals $f$ on $\openint {x_{i − 1} } {x_i}$
for an arbitrary $i$ in $\set {1, 2, \ldots, n}$.

From Continuous Function on Closed Real Interval is Uniformly Continuous, $f_i$ is uniformly continuous on $\closedint {x_{i − 1} } {x_i}$.
We have that $\openint {x_{i − 1} } {x_i}$ is a subset of $\closedint {x_{i − 1} } {x_i}$.
Hence $f_i$ is uniformly continuous on $\openint {x_{i − 1} } {x_i}$.
As $f_i$ equals $f$ on $\openint {x_{i − 1} } {x_i}$, $f$ also is uniformly continuous on $\openint {x_{i − 1} } {x_i}$.
Since $i$ is arbitrary, this results holds for all $i \in \set {1, 2, \ldots, n}$.
$\blacksquare$





