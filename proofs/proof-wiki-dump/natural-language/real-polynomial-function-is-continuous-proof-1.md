# 

Source: https://proofwiki.org/wiki/Real_Polynomial_Function_is_Continuous/Proof_1



Theorem
A (real) polynomial function is continuous at every point.
Thus a (real) polynomial function is continuous on every interval of $\R$.


Proof
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





