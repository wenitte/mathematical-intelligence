# 

Source: https://proofwiki.org/wiki/Bounded_Piecewise_Continuous_Function_may_not_have_One-Sided_Limits

Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$, $a < b$. 

Let $f$ be a bounded piecewise continuous function.
$f$ is a bounded piecewise continuous function if and only if:

there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that:
$(1): \quad$ for all $i \in \set {1, 2, \ldots, n}$, $f$ is continuous on $\openint {x_{i − 1} } {x_i}$
$(2): \quad$ $f$ is bounded on $\closedint a b$.

Then it is not necessarily the case that $f$ is a piecewise continuous function with one-sided limits:
$f$ is piecewise continuous with one-sided limits if and only if:

there exists a finite subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint a b$, where $x_0 = a$ and $x_n = b$, such that, for all $i \in \set {1, 2, \ldots, n}$:
$(1): \quad f$ is continuous on $\openint {x_{i − 1} } {x_i}$
$(2): \quad$ the one-sided limits $\ds \lim_{x \mathop \to {x_{i − 1} }^+} \map f x$ and $\ds \lim_{x \mathop \to {x_i}^-} \map f x$ exist.


Proof
Consider the function:

$\map f x = \begin{cases}
0 & : x = a \\
\map \sin {\dfrac 1 {x - a} } & : x \in \hointr a b
\end{cases}$
Consider the (finite) subdivision $\set {a, b}$ of $\closedint a b$.
We observe that $\map \sin {\dfrac 1 {x - a} }$ is continuous on $\openint a b$.
Since $\map f x = \map \sin {\dfrac 1 {x - a} }$ on $\openint a b$, it follows that $f$ is continuous on $\openint a b$.
Also, $f$ is bounded by the bound $1$ on $\closedint a b$.
Therefore $f$ is a bounded piecewise continuous function on the closed interval $\closedint a b$.

We now investigate whether $f$ has one-sided limits at the endpoints of $\closedint a b$.
The function $\map \sin {\dfrac 1 {x - a} }$ varies between $-1$ and $+1$ as $x$ approaches $a$ from above.
Thus it does not converge. 
Since $\map f x = \map \sin {\dfrac 1 {x - a} }$ when $x > a$ we conclude that $\ds \lim_{x \mathop \to a^+} \map f x$ does not exist either.
$f$ has no one-sided limit at $a$.
Hence $f$ is not a piecewise continuous function with one-sided limits.
$\blacksquare$





