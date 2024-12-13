# 

Source: https://proofwiki.org/wiki/Real_Power_Function_for_Positive_Integer_Power_is_Continuous



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Let $f_n: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map {f_n} x = x^n$

Then $f_n$ is continuous on $\R$.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\forall x \in \R: f_n$ is continuous on $\R$.

$\map P 0$ is the case:

$\forall x \in \R: \map {f_0} x = x^0 = 1$
Thus it is seen that $f_0$ is the constant mapping.
It follows from Constant Real Function is Continuous that $f_0$ is continuous on $\R$.
Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:

$\forall x \in \R: \map {f_1} x = x^1 = x$
It follows from Linear Function is Continuous that $f_1$ is continuous on $\R$.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\forall x \in \R: f_k$ is continuous on $\R$.

from which it is to be shown that:

$\forall x \in \R: f_{k + 1}$ is continuous on $\R$.


Induction Step
This is the induction step:










\(\ds \forall x \in \R: \, \)



\(\ds \map {f_{k + 1} } x\)

\(=\)







\(\ds x^{k + 1}\)





Definition of $f_{k + 1}$














\(\ds \)

\(=\)







\(\ds x \times x^k\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \map {f_1} x \times \map {f_k} x\)





Definition of $f_1$ and $f_k$




From the basis for the induction:

$f_1$ is continuous on $\R$.
From the induction hypothesis:

$f_k$ is continuous on $\R$.
It follows from the Product Rule for Continuous Real Functions that $f_{k + 1}$ is continuous on $\R$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: f_n$ is continuous on $\R$.
$\blacksquare$





