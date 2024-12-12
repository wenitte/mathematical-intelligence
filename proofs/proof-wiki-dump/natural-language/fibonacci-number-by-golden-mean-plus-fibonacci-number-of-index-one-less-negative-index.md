# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_by_Golden_Mean_plus_Fibonacci_Number_of_Index_One_Less/Negative_Index



Theorem
Let $n \in \Z_{\le 0}$.
Then:

$\phi^n = F_n \phi + F_{n - 1}$
where:

$F_n$ denotes the $n$th Fibonacci number as extended to negative indices
$\phi$ denotes the golden mean.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\le 0}$, let $\map P n$ be the proposition:

$\phi^n = F_n \phi + F_{n - 1}$
This can equivalently be expressed as:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\phi^{-n} = F_{-n} \phi + F_{-n - 1}$

$\map P 0$ is the case:














\(\ds F_0 \times \phi + F_{-1}\)

\(=\)







\(\ds F_0 \times \phi + \paren {-1}^0 F_1\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds F_0 \times \phi + 1\)





Definition of Fibonacci Number $F_1 = 1$














\(\ds \)

\(=\)







\(\ds 0 \times \phi + 1\)





Definition of Fibonacci Number $F_0 = 0$














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \phi^0\)










Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds F_{-1} \times \phi + F_{-2}\)

\(=\)







\(\ds \paren {-1}^0 F_1 \times \phi + \paren {-1}^{-1} F_2\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds 1 \times \phi - F_2\)





Definition of Fibonacci Number $F_1 = 1$














\(\ds \)

\(=\)







\(\ds \phi - 1\)





Definition of Fibonacci Number: $F_2 = 1$














\(\ds \)

\(=\)







\(\ds \dfrac 1 \phi\)





Definition 3 of Golden Mean




Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\phi^{-k} = F_{-k} \phi + F_{-k - 1}$

from which it is to be shown that:

$\phi^{-\paren {k + 1} } = F_{-\paren {k + 1} } \phi + F_{-\paren {k + 1} - 1}$


Induction Step
This is the induction step:















\(\ds F_{-\paren {k + 1} } \phi + F_{-\paren {k + 1} - 1}\)

\(=\)







\(\ds \paren {-1}^{-\paren {k + 1} + 1} F_{k + 1} \phi + \paren {-1}^{-\paren {k + 1} } F_{\paren {k + 1} + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} F_{k + 1} \phi - \paren {-1}^{k + 2} F_{k + 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {F_{k + 1} \phi - \paren {F_{k + 1} + F_k} }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {F_{k + 1} \paren {\phi - 1} - F_k}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {F_{k + 1} \phi^{-1} - F_k}\)





Definition 3 of Golden Mean














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} F_{k + 1} \phi^{-1} + \paren {-1}^{k + 1} F_k\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \phi \paren {F_{-k - 1}  + F_{-k} \phi}\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds \frac 1 \phi \paren {\phi^{-k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \phi^{-\paren {k + 1} }\)










So $\map P k \implies \map P {k + 1}$ and it follows by the Principle of Mathematical Induction that:

$\forall n \in \Z_{\le 0}: \phi^n = F_n \phi + F_{n - 1}$
$\blacksquare$





