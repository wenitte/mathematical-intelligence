# 

Source: https://proofwiki.org/wiki/Second_Hyperoperation_is_Multiplication_Operation



Theorem
The $2$nd hyperoperation is the multiplication operation restricted to the positive integers:

$\forall x, y \in \Z_{\ge 0}: H_2 \left({x, y}\right) = x \times y$


Proof
By definition of the hyperoperation sequence:

$\forall n, x, y \in \Z_{\ge 0}: H_n \left({x, y}\right) = \begin{cases}
y + 1 & : n = 0 \\
x & : n = 1, y = 0 \\
0 & : n = 2, y = 0 \\
1 & : n > 2, y = 0 \\
H_{n - 1} \left({x, H_n \left({x, y - 1}\right)}\right) & : n > 0, y > 0 \end{cases}$

Thus the $2$nd hyperoperation is defined as:

$\forall x, y \in \Z_{\ge 0}: H_2 \left({x, y}\right) = \begin{cases}
0 & : y = 0 \\
H_1 \left({x, H_2 \left({x, y - 1}\right)}\right) & : y > 0 \end{cases}$

From First Hyperoperation is Addition Operation:

$(1): \quad \forall x, y \in \Z_{\ge 0}: H_2 \left({x, y}\right) = \begin{cases}
0 & : y = 0 \\
x + H_2 \left({x, y - 1}\right) & : y > 0 \end{cases}$

The proof proceeds by induction.
For all $y \in \Z_{\ge 0}$, let $P \left({y}\right)$ be the proposition:

$\forall x \in \Z_{\ge 0}: H_2 \left({x, y}\right) = x \times y$


Basis for the Induction
$P \left({0}\right)$ is the case:














\(\ds H_2 \left({x, 0}\right)\)

\(=\)







\(\ds 0\)





from $(1)$














\(\ds \)

\(=\)







\(\ds x \times 0\)










Thus $P \left({0}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({k}\right)$ is true, where $k \ge 0$, then it logically follows that $P \left({k + 1}\right)$ is true.

So this is the induction hypothesis:

$\forall x \in \Z_{\ge 0}: H_2 \left({x, k}\right) = x \times k$

from which it is to be shown that:

$\forall x \in \Z_{\ge 0}: H_2 \left({x, k + 1}\right) = x \times \left({k + 1}\right)$


Induction Step
This is the induction step:















\(\ds H_2 \left({x, k + 1}\right)\)

\(=\)







\(\ds x + H_2 \left({x, \left({k + 1}\right) - 1}\right)\)





from $(1)$














\(\ds \)

\(=\)







\(\ds x + H_2 \left({x, k}\right)\)




















\(\ds \)

\(=\)







\(\ds x + \left({x \times k}\right)\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds x \times \left({k + 1}\right)\)









So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall x, y \in \Z_{\ge 0}: H_2 \left({x, y}\right) = x \times y$
$\blacksquare$





