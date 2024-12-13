# 

Source: https://proofwiki.org/wiki/Length_of_Fibonacci_String_is_Fibonacci_Number



Theorem
Let $S_n$ denote the $n$th Fibonacci string.
Let $\map \len {S_n}$ denote the length of $S_n$.

Then:

$\map \len {S_n} = F_n$
where $F_n$ denotes the $n$th Fibonacci number.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\map \len {S_n} = F_n$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \map \len {S_1}\)

\(=\)







\(\ds \map \len {\text a}\)





Definition of Fibonacci String














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Length of String














\(\ds \)

\(=\)







\(\ds F_1\)





Definition of Fibonacci Number: $F_1 = 1$



Thus $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds \map \len {S_2}\)

\(=\)







\(\ds \map \len {\text b}\)





Definition of Fibonacci String














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Length of String














\(\ds \)

\(=\)







\(\ds F_2\)





Definition of Fibonacci Number: $F_2 = 1$



Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, for all $j$ such that $1 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

$\map \len {S_k} = F_k$
and:

$\map \len {S_{k - 1} } = F_{k - 1}$

from which it is to be shown that:

$\map \len {S_{k + 1} } = F_{k + 1}$


Induction Step
This is the induction step:














\(\ds \map \len {S_{k + 1} }\)

\(=\)







\(\ds \map \len {S_k S_{k - 1} }\)





Definition of Fibonacci String














\(\ds \)

\(=\)







\(\ds \map \len {S_k} + \map \len {S_{k - 1} }\)





Definition of Length of String














\(\ds \)

\(=\)







\(\ds F_k + F_{k - 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds F_{k + 1}\)





Definition of Fibonacci Number



So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: \map \len {S_n} = F_n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $36$




