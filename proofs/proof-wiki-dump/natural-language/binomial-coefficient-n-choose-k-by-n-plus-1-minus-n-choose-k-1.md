# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_n_Choose_k_by_n_Plus_1_Minus_n_Choose_k_%2B_1



Theorem
Let $\sequence {A_{n k} }$ be a sequence defined on $n, k \in \Z_{\ge 0}$ as:

$A_{n k} = \begin{cases} 1 & : k = 0 \\
0 & : k \ne 0, n = 0 \\
A_{\paren {n - 1} k} + A_{\paren {n - 1} \paren {k - 1} } + \dbinom n k & : \text{otherwise}
\end{cases}$

Then the closed form for $A_{n k}$ is given as:

$A_{n k} = \paren {n + 1} \dbinom n k - \dbinom n {k + 1}$


Proof
The proof proceeds by induction on $n$.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$A_{n k} = \paren {n + 1} \dbinom n k - \dbinom n {k + 1} + \dbinom n k$


Basis for the Induction
$\map P 0$ is the case $A_{0 k}$:
Let $k = 0$.
Then:














\(\ds A_{0 k}\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \paren {0 + 1} \dbinom 0 0 - \dbinom 0 {0 + 1}\)





Zero Choose n




Let $k > 0$.
Then:














\(\ds A_{0 k}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \paren {0 + 1} \dbinom 0 k - \dbinom 0 {k + 1}\)





Zero Choose n




Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 0$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$A_{r k} = \paren {r + 1} \dbinom r k - \dbinom r {k + 1}$

from which it is to be shown that:

$A_{\paren {r + 1} k} = \paren {r + 2} \dbinom {r + 1} k - \dbinom {r + 1} {k + 1}$


Induction Step
This is the induction step:














\(\ds A_{\paren {r + 1} k}\)

\(=\)







\(\ds A_{r k} + A_{r \paren {k - 1} } + \dbinom {r + 1} k\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {r + 1} \dbinom r k - \dbinom r {k + 1} + \paren {r + 1} \dbinom r {k - 1} - \dbinom r k + \dbinom {r + 1} k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {r + 1} \paren {\dbinom r k + \dbinom r {k - 1} } - \paren {\dbinom r {k + 1} + \dbinom r k} + \dbinom {r + 1} k\)




















\(\ds \)

\(=\)







\(\ds \paren {r + 1} \dbinom {r + 1} k - \dbinom {r + 1} {k + 1} + \dbinom {r + 1} k\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \paren {r + 2} \dbinom {r + 1} k - \dbinom {r + 1} {k + 1}\)









So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n, k \in \Z_{\ge 0}: A_{n k} = \paren {n + 1} \dbinom n k - \dbinom n {k + 1}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $59$




