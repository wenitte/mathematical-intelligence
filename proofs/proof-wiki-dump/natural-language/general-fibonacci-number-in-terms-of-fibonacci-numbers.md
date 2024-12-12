# 

Source: https://proofwiki.org/wiki/General_Fibonacci_Number_in_terms_of_Fibonacci_Numbers



Theorem
Let $r$ and $s$ be numbers, usually integers but not necessarily so limited.
Let $\sequence {a_n}$ be the general Fibonacci sequence:

$a_n = \begin{cases}
r & : n = 0 \\
s & : n = 1 \\
a_{n - 2} + a_{n - 1} & : n > 1
\end{cases}$
Then $a_n$ can be expressed in Fibonacci numbers as:

$a_n = F_{n - 1} r + F_n s$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a_n = F_{n - 1} r + F_n s$


Basis for the Induction
$\map P 0$ is the case:














\(\ds F_{-1} r + F_0 s\)

\(=\)







\(\ds \paren {-1}^0 F_1 r + F_0 s\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds 1 \times r + 0 \times s\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$














\(\ds \)

\(=\)







\(\ds r\)




















\(\ds \)

\(=\)







\(\ds a_0\)





Definition of General Fibonacci Sequence



Thus $\map P 0$ is seen to hold.

$\map P 1$ is the case:














\(\ds F_0 r + F_1 s\)

\(=\)







\(\ds 0 \times r + 1 \times s\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$














\(\ds \)

\(=\)







\(\ds s\)




















\(\ds \)

\(=\)







\(\ds a_1\)





Definition of General Fibonacci Sequence



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P {k - 1}$ and $\map P k$ are true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$a_{k - 1} = F_{k - 2} r + F_{k - 1} s$
$a_k = F_{k - 1} r + F_k s$

from which it is to be shown that:

$a_{k + 1} = F_k r + F_{k + 1} s$


Induction Step
This is the induction step:















\(\ds a_{k + 1}\)

\(=\)







\(\ds a_{k - 1} + a_k\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{k - 2} r + F_{k - 1} s} + \paren {F_{k - 1} r + F_k s}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {F_{k - 2} + F_{k - 1} } r  + \paren {F_{k - 1} + F_k} s\)




















\(\ds \)

\(=\)







\(\ds F_k r + F_{k + 1} s\)





Definition of Fibonacci Number



So $\map P {k - 1} \land \map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: a_n = F_{n - 1} r + F_n s$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $13 \ \text{(a)}$




