# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_by_Power_of_2/Proof_1



Theorem









\(\ds \forall n \in \Z_{\ge 0}: \, \)



\(\ds 2^{n - 1} F_n\)

\(=\)







\(\ds \sum_k 5^k \dbinom n {2 k + 1}\)




















\(\ds \)

\(=\)







\(\ds \dbinom n 1 + 5 \dbinom n 3 + 5^2 \dbinom n 5 + \cdots\)









where:

$F_n$ denotes the $n$th Fibonacci number
$\dbinom n {2 k + 1} \ $ denotes a binomial coefficient.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds 2^{n - 1} F_n = \sum_k 5^k \dbinom n {2 k + 1}$

First note the bounds of the summation.
By definition, $\dbinom n k = 0$ where $k < 0$ or $k > n$.
Thus in all cases in the following, terms outside the range $0 \le k \le n$ can be discarded.

$\map P 0$ is the case:














\(\ds 2^{-1} F_0\)

\(=\)







\(\ds 0\)





Definition of Fibonacci Numbers: $F_0 = 0$










\(\ds \forall k \in \Z: \, \)



\(\ds \)

\(=\)







\(\ds 5^k \dbinom 0 {2 k + 1}\)





Zero Choose n



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 2^0 F_1\)

\(=\)







\(\ds 1\)





Definition of Fibonacci Numbers: $F_1 = 1$














\(\ds \)

\(=\)







\(\ds 5^0 \dbinom 1 {2 \times 0 + 1}\)





One Choose n



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds 2^{r - 1} F_r = \sum_k 5^k \dbinom r {2 k + 1}$

from which it is to be shown that:

$\ds 2^r F_{r + 1} = \sum_k 5^k \dbinom {r + 1} {2 k + 1}$


Induction Step
This is the induction step:














\(\ds 2^r F_{r + 1}\)

\(=\)







\(\ds 2^r \paren {F_{r - 1} + F_r}\)





Definition of Fibonacci Numbers














\(\ds \)

\(=\)







\(\ds 4 \times 2^{r - 2} F_{r - 1} + 2 \times 2^{r - 1} F_r\)




















\(\ds \)

\(=\)







\(\ds 4 \times \sum_k 5^k \dbinom {r - 1} {2 k + 1} + 2 \sum_k 5^k \dbinom r {2 k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 2 \times \sum_k 5^k \dbinom {r - 1} {2 k + 1} + 2 \sum_k 5^k \paren {\dbinom {r - 1} {2 k + 1} + \dbinom r {2 k + 1} }\)










This needs considerable tedious hard slog to complete it.In particular: To handle the awkward boundary cases, consider splitting the cases up into odd and even $r$To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \ds 2^{n - 1} F_n = \sum_k 5^k \dbinom n {2 k + 1}$
$\blacksquare$


Historical Note
This result was discovered by Eugène Charles Catalan.





