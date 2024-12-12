# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_plus_Constant_in_terms_of_Fibonacci_Numbers



Theorem
Let $c$ be a number.
Let $\sequence {b_n}$ be the sequence defined as:

$b_n = \begin{cases}
0 & : n = 0 \\
1 & : n = 1 \\
b_{n - 2} + b_{n - 1} + c & : n > 1
\end{cases}$

Then $\sequence {b_n}$  can be expressed in Fibonacci numbers as:

$b_n = c F_{n - 1} + \paren {c + 1} F_n - c$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$b_n = c F_{n - 1} + \paren {c + 1} F_n - c$


Basis for the Induction
$\map P 0$ is the case:














\(\ds c F_{-1} + \paren {c + 1} F_0 - c\)

\(=\)







\(\ds \paren {-1}^0 c F_1 + \paren {c + 1} F_0 - c\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds c \times 1 + \paren {c + 1} \times 0 - c\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds b_0\)





by definition



Thus $\map P 0$ is seen to hold.

$\map P 1$ is the case:














\(\ds c F_0 + \paren {c + 1} F_1 - c\)

\(=\)







\(\ds c \times 0 + \paren {c + 1} \times 1 - c\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds b_1\)





by definition



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P {k - 1}$ and $\map P k$ are true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$b_{k - 1} = c F_{k - 2} + \paren {c + 1} F_{k - 1} - c$
$b_k = c F_{k - 1} + \paren {c + 1} F_k - c$

from which it is to be shown that:

$b_{k + 1} = c F_k + \paren {c + 1} F_{k + 1} - c$


Induction Step
This is the induction step:















\(\ds b_{k + 1}\)

\(=\)







\(\ds b_{k - 1} + b_k + c\)





by definition














\(\ds \)

\(=\)







\(\ds \paren {c F_{k - 2} + \paren {c + 1} F_{k - 1} - c} + \paren {c F_{k - 1} + \paren {c + 1} F_k - c} + c\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds c \paren {F_{k - 2} + F_{k - 1} } + \paren {c + 1} \paren {F_{k - 1} + F_k} - 2 c + c\)




















\(\ds \)

\(=\)







\(\ds c F_k + \paren {c + 1} F_{k + 1} - c\)





Definition of Fibonacci Number



So $\map P {k - 1} \land \map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: b_n = c F_{n - 1} + \paren {c + 1} F_n - c$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $13 \ \text{(b)}$




