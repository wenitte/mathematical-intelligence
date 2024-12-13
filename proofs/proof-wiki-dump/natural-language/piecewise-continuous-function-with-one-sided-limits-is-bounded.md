# 

Source: https://proofwiki.org/wiki/Piecewise_Continuous_Function_with_One-Sided_Limits_is_Bounded

Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$.
Let $f$ be a piecewise continuous function with one-sided limits.

Then $f$ is a bounded piecewise continuous function.


Proof
Let $f$ be a piecewise continuous function with one-sided limits.
By definition, there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that $f$ is continuous on $\openint {x_{i − 1} } {x_i}$ for every $i \in \set {1, 2, \ldots, n}$.

For every $i \in \set {1, 2, \ldots, n}$, we define a function $f_i$ with domain $\closedint {x_{i − 1} } {x_i}$, as follows:
$\quad\map {f_i} x := \begin{cases}
\ds \lim_{x \mathop \to x_{i − 1}^+} \map f x & : x = x_{i - 1} \\
\map f x & : x \in \openint {x_{i - 1} } {x_i} \\
\ds \lim_{x \mathop \to x_i^-} \map f x & : x = x_i
\end{cases}$
The one-sided limits in this definition exist because $f$ is piecewise continuous with one-sided limits.

We have that $f$ is continuous on $\openint {x_{i - 1} } {x_i}$.
We also have that $f_i = f$ on $\openint {x_{i - 1} } {x_i}$.
Therefore $f_i$ is also continuous on $\openint {x_{i - 1} } {x_i}$.

By definition, $f_i$ is right-continuous at $x_{i − 1}$ and left-continuous at $x_i$.
Therefore, $f_i$ is continuous throughout its domain $\closedint {x_{i − 1} } {x_i}$.

By Continuous Function on Compact Subspace of Euclidean Space is Bounded and Closed Real Interval is Compact in Metric Space, $f_i$ is bounded.
Therefore, $f_i$ is bounded on $\closedint {x_{i − 1} } {x_i}$.
We have that $\openint {x_{i - 1} } {x_i}$ constitutes a subset of $\closedint {x_{i − 1} } {x_i}$.
Thus $f_i$ is also bounded on $\openint {x_{i - 1} } {x_i}$.

As $f_i = f$ on $\openint {x_{i - 1} } {x_i}$, $f$ is also bounded on $\openint {x_{i - 1} } {x_i}$.

We have that:

$f$ is bounded on the intervals $\openint {x_{i - 1} } {x_i}$
and

the set of these intervals is finite.
Hence the set of bounds of $f$ on these intervals is itself bounded.
The bound of this set of bounds serves as a bound for $f$ on each of the intervals $\openint {x_{i - 1} } {x_i}$.
Therefore, this bound is a bound for $f$ on the union of these intervals.

That is, $f$ is bounded on the union of $\openint {x_{i - 1} } {x_i}$ for all $i \in \set {1, 2, \ldots, n}$.

The only points left to consider are the points in the set $\set {x_0, x_1, \ldots, x_n}$. 
Since this set is finite, the maximum $\map \max {\size {\map f {x_0} }, \size {\map f {x_1} }, \ldots, \size {\map f {x_n} } }$ is finite and serves as a bound for $f$ on $\set {x_0, x_1, \ldots, x_n}$.

Thus $f$ is bounded on the whole of its domain $\closedint a b$.
Hence $f$ is a bounded piecewise continuous function.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter Two: $\S 1$. Piecewise-Continuous Functions




