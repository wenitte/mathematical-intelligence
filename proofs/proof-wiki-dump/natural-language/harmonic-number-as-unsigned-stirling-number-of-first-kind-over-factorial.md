# 

Source: https://proofwiki.org/wiki/Harmonic_Number_as_Unsigned_Stirling_Number_of_First_Kind_over_Factorial



Theorem
$H_n = \dfrac { {n + 1} \brack 2} {n!}$
where:

$H_n$ denotes the $n$th harmonic number
$n!$ denotes the $n$th factorial
$\ds { {n + 1} \brack 2}$ denotes an unsigned Stirling number of the first kind.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$H_n = \dfrac { {n + 1} \brack 2} {n!}$

$\map P 0$ is the case:














\(\ds H_0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 \brack 2} {0!}\)





Unsigned Stirling Number of the First Kind of Number with Greater



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds H_1\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \brack 2} {1!}\)





Unsigned Stirling Number of the First Kind of Number with Self




Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$H_k = \dfrac { {k + 1} \brack 2} {k!}$

from which it is to be shown that:

$H_{k + 1} = \dfrac { {k + 2} \brack 2} {\paren {k + 1}!}$


Induction Step
This is the induction step:















\(\ds \dfrac { {k + 2} \brack 2} {\paren {k + 1}!}\)

\(=\)







\(\ds \dfrac {\paren {k + 1} { {k + 1} \brack 2} + { {k + 1} \brack 1} } {\paren {k + 1}!}\)





Definition of Unsigned Stirling Numbers of the First Kind














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {k + 1} { {k + 1} \brack 2} + k!} {\paren {k + 1}!}\)





Unsigned Stirling Number of the First Kind of n+1 with 1














\(\ds \)

\(=\)







\(\ds \dfrac {\paren { {k + 1} \brack 2} } {k!} + \dfrac 1 {k + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds H_k + \dfrac 1 {k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds H_{k + 1}\)





Definition of Harmonic Number



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: H_n = \dfrac { {n + 1} \brack 2} {n!}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $6$




