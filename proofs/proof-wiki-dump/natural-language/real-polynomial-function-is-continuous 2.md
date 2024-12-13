# 

Source: https://proofwiki.org/wiki/Real_Polynomial_Function_is_Continuous



Theorem
A (real) polynomial function is continuous at every point.
Thus a (real) polynomial function is continuous on every interval of $\R$.


Proof 1
Let $f_n$ be an arbitrary real polynomial function of degree $n$.
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$f_n$ is continuous on $\R$.

$\map P 0$ is the case $f_0$, where $f_0$ is of zero degree.
Such a real polynomial function is a constant function.
It follows from Constant Real Function is Continuous that $f_0$ is continuous on $\R$.
Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:

$f_1$ is continuous on $\R$.
Such a real polynomial function is a linear function.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

An arbitrary real polynomial function of degree $k$ is continuous on $\R$

from which it is to be shown that:

An arbitrary real polynomial function of degree $k + 1$ is continuous on $\R$.


Induction Step
This is the induction step:

$\forall x \in \R: \map {f_{k + 1} } x = a_{k + 1} x^{k + 1} + \map {f_k} x$
for some real polynomial function of degree $k$, where $a_{k + 1} \in \R$

From the induction hypothesis $f_k$ is continuous on $\R$.
From Real Power Function for Positive Integer Power is Continuous‎, the real function $x \mapsto x^{k + 1}$ is continuous.
Hence from the Combined Sum Rule for Continuous Real Functions:

$f_{k + 1}$ is continuous.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: f_n$ is continuous on $\R$.
$\blacksquare$


Proof 2
From Linear Function is Continuous‎, setting $\alpha = 1$ and $\beta = 0$, we have that:

$\ds \lim_{x \mathop \to c} x = c$
Repeated application of the Product Rule for Limits of Real Functions shows us that:

$\ds \forall k \in \N: \lim_{x \mathop \to c} x^k = c^k$

Now let $\map P x = a_n x^N + a_{n - 1} x^{n - 1} + \cdots + a_1 x + a_0$.
By repeated application of the Combined Sum Rule for Limits of Real Functions, we find that:

$\ds \lim_{x \mathop \to c} \map P x = \map P c$

So whatever value we choose for $c$, we have that $\map P x$ is continuous at $c$.

From the definition of continuity on an interval, the second assertion follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.4$: Continuity
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): continuous function (continuous mapping)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): continuous function (continuous mapping, continuous map)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): continuous function (v)




