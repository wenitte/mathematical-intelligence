# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_greater_than_Golden_Section_to_Power_less_Two



Theorem
For all $n \in \N_{\ge 2}$:

$F_n \ge \phi^{n - 2}$
where:

$F_n$ is the $n$th Fibonacci number
$\phi$ is the golden section: $\phi = \dfrac {1 + \sqrt 5} 2$


Proof
The proof proceeds by induction.
For all $n \in \N_{\ge 2}$, let $\map P n$ be the proposition:

$F_n \ge \phi^{n - 2}$


Basis for the Induction
$\map P 2$ is true, as this just says:

$F_2 = 1 = \phi^0 = \phi^{2 - 2}$
It is also necessary to demonstrate $\map P 3$ is true:

$F_3 = 2 \ge \dfrac {1 + \sqrt 5} 2 = \phi = \phi^{3 - 2}$
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true for all $2 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$F_j \ge \phi^{j - 2}$ for $2 \le j \le k$

from which it is to be shown that:

$F_{k + 1} \ge \phi^{k - 1}$


Induction Step
This is the induction step:
As we have already shown $\map P 2$ and $\map P 3$, we just need to prove the result for $k \ge 3$.














\(\ds F_{k + 1}\)

\(=\)







\(\ds F_{k - 1} + F_k\)





Definition of Fibonacci Numbers














\(\ds \)

\(\ge\)







\(\ds \phi^{k - 3} + \phi^{k - 2}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \phi^{k - 3} \paren {1 + \phi}\)




















\(\ds \)

\(=\)







\(\ds \phi^{k - 3} \paren {\phi^2}\)





Square of Golden Mean equals One plus Golden Mean














\(\ds \)

\(=\)







\(\ds \phi^{k - 1}\)









So $\map P 2 \land \map P 3 \land \dots \land \map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{\ge 2}: F_n \ge \phi^{n - 2}$
$\blacksquare$


Also see
Fibonacci Number less than Golden Section to Power less One


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $4$




