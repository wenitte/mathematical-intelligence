# 

Source: https://proofwiki.org/wiki/First_Hyperoperation_is_Addition_Operation



Theorem
The $1$st hyperoperation is the addition operation restricted to the positive integers:

$\forall x, y \in \Z_{\ge 0}: H_1 \left({x, y}\right) = x + y$


Proof
By definition of the hyperoperation sequence:

$\forall n, x, y \in \Z_{\ge 0}: H_n \left({x, y}\right) = \begin{cases}
y + 1 & : n = 0 \\
x & : n = 1, y = 0 \\
0 & : n = 2, y = 0 \\
1 & : n > 2, y = 0 \\
H_{n - 1} \left({x, H_n \left({x, y - 1}\right)}\right) & : n > 0, y > 0 \end{cases}$

Thus the $1$st hyperoperation is defined as:

$\forall x, y \in \Z_{\ge 0}: H_1 \left({x, y}\right) = \begin{cases}
x & : y = 0 \\
H_0 \left({x, H_1 \left({x, y - 1}\right)}\right) & : y > 0 \end{cases}$

From Zeroth Hyperoperation is Successor Function:

$(1): \quad \forall x, y \in \Z_{\ge 0}: H_1 \left({x, y}\right) = \begin{cases}
x & : y = 0 \\
H_1 \left({x, y - 1}\right) + 1 & : y > 0 \end{cases}$

The proof proceeds by induction.
For all $y \in \Z_{\ge 0}$, let $P \left({y}\right)$ be the proposition:

$\forall x \in \Z_{\ge 0}: H_1 \left({x, y}\right) = x + y$


Basis for the Induction
$P \left({0}\right)$ is the case:














\(\ds H_1 \left({x, 0}\right)\)

\(=\)







\(\ds x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds x + 0\)










Thus $P \left({0}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({k}\right)$ is true, where $k \ge 0$, then it logically follows that $P \left({k + 1}\right)$ is true.

So this is the induction hypothesis:

$\forall x \in \Z_{\ge 0}: H_1 \left({x, k}\right) = x + k$

from which it is to be shown that:

$\forall x \in \Z_{\ge 0}: H_1 \left({x, k + 1}\right) = x + k + 1$


Induction Step
This is the induction step:















\(\ds H_1 \left({x, k + 1}\right)\)

\(=\)







\(\ds H_1 \left({x, \left({k + 1}\right) - 1}\right) + 1\)





from $(1)$














\(\ds \)

\(=\)







\(\ds H_1 \left({x, k}\right) + 1\)




















\(\ds \)

\(=\)







\(\ds \left({x + k}\right) + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds x + k + 1\)









So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall x, y \in \Z_{\ge 0}: H_1 \left({x, y}\right) = x + y$
$\blacksquare$





