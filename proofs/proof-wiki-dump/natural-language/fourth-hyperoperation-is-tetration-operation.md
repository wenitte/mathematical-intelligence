# 

Source: https://proofwiki.org/wiki/Fourth_Hyperoperation_is_Tetration_Operation



Theorem
The $4$th hyperoperation is the tetration operation restricted to the positive integers:

$\forall x, y \in \Z_{\ge 0}: H_4 \left({x, y}\right) = x \uparrow \uparrow y$
where $\uparrow \uparrow$ denotes tetration:

$x \uparrow \uparrow n := \begin{cases}
1 & : n = 0 \\
x \uparrow \left({x \uparrow \uparrow \left({n - 1}\right)}\right) & : n > 0 \\
\end{cases}$

In this context, $x \uparrow y$ is the Knuth notation for powers:

$x \uparrow y := x^y$


Proof
By definition of the hyperoperation sequence:

$\forall n, x, y \in \Z_{\ge 0}: H_n \left({x, y}\right) = \begin{cases}
y + 1 & : n = 0 \\
x & : n = 1, y = 0 \\
0 & : n = 2, y = 0 \\
1 & : n > 2, y = 0 \\
H_{n - 1} \left({x, H_n \left({x, y - 1}\right)}\right) & : n > 0, y > 0 \end{cases}$

Thus the $4$th hyperoperation is defined as:

$\forall x, y \in \Z_{\ge 0}: H_4 \left({x, y}\right) = \begin{cases}
1 & : y = 0 \\
H_3 \left({x, H_4 \left({x, y - 1}\right)}\right) & : y > 0 \end{cases}$

From Third Hyperoperation is Integer Power Operation:

$(1): \quad \forall x, y \in \Z_{\ge 0}: H_4 \left({x, y}\right) = \begin{cases}
1 & : y = 0 \\
x \uparrow H_3 \left({x, y - 1}\right) & : y > 0 \end{cases}$

The proof proceeds by induction.
For all $y \in \Z_{\ge 0}$, let $P \left({y}\right)$ be the proposition:

$\forall x \in \Z_{\ge 0}: H_4 \left({x, y}\right) = x \uparrow \uparrow y$


Basis for the Induction
$P \left({0}\right)$ is the case:














\(\ds H_4 \left({x, 0}\right)\)

\(=\)







\(\ds 1\)





from $(1)$














\(\ds \)

\(=\)







\(\ds x \uparrow \uparrow 0\)





Definition of Tetration




Thus $P \left({0}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({k}\right)$ is true, where $k \ge 0$, then it logically follows that $P \left({k + 1}\right)$ is true.

So this is the induction hypothesis:

$\forall x \in \Z_{\ge 0}: H_4 \left({x, k}\right) = x \uparrow \uparrow k$

from which it is to be shown that:

$\forall x \in \Z_{\ge 0}: H_4 \left({x, k + 1}\right) = x \uparrow \uparrow \left({k + 1}\right)$


Induction Step
This is the induction step:















\(\ds H_4 \left({x, k + 1}\right)\)

\(=\)







\(\ds x \uparrow H_4 \left({x, \left({k + 1}\right) - 1}\right)\)





from $(1)$














\(\ds \)

\(=\)







\(\ds x \uparrow H_4 \left({x, k}\right)\)




















\(\ds \)

\(=\)







\(\ds x \uparrow \left({x \uparrow \uparrow k}\right)\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds x \uparrow \uparrow \left({k + 1}\right)\)





Definition of Tetration



So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall x, y \in \Z_{\ge 0}: H_3 \left({x, y}\right) = x \uparrow \uparrow y$
$\blacksquare$





