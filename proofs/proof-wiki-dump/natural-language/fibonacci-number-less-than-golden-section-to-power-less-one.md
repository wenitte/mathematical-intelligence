# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_less_than_Golden_Section_to_Power_less_One



Theorem
For all $n \in \N_{> 0}$:

$F_n \le \phi^{n - 1}$
where:

$F_n$ is the $n$th Fibonacci number
$\phi$ is the golden section: $\phi = \dfrac {1 + \sqrt 5} 2$


Proof
The proof proceeds by induction.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$F_n \le \phi^{n - 1}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$F_1 = 1 = \phi^0 = \phi^{1 - 1}$
It is also necessary to demonstrate $\map P 2$ is true:

$F_2 = 1 \le \dfrac {1 + \sqrt 5} 2 = \phi = \phi^{2 - 1}$
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, for all $1 \le k \le n$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$F_k \le \phi^{k - 1}$

from which it is to be shown that:

$F_{k + 1} \le \phi^k$


Induction Step
This is the induction step:















\(\ds F_{k + 1}\)

\(=\)







\(\ds F_{k - 1} + F_k\)





Definition of Fibonacci Numbers














\(\ds \)

\(\le\)







\(\ds \phi^{k - 2} + \phi^{k - 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \phi^{k - 2} \paren {1 + \phi}\)




















\(\ds \)

\(=\)







\(\ds \phi^{k - 2} \paren {\phi^2}\)





Square of Golden Mean equals One plus Golden Mean














\(\ds \)

\(=\)







\(\ds \phi^k\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{> 0}: F_n \le \phi^{n - 1}$
$\blacksquare$


Also see
Fibonacci Number greater than Golden Section to Power less Two


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: $(3)$




