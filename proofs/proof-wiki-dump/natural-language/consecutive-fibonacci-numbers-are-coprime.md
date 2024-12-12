# 

Source: https://proofwiki.org/wiki/Consecutive_Fibonacci_Numbers_are_Coprime



Theorem
Let $F_k$ be the $k$th Fibonacci number.

Then:

$\forall n \ge 2: \gcd \set {F_n, F_{n + 1} } = 1$
where $\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.

That is, a Fibonacci number and the one next to it are coprime.


Proof
From the definition of Fibonacci numbers:

$F_1 = 1, F_2 = 1, F_3 = 2$

Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\gcd \set {F_n, F_{n + 1} } = 1$


Basis for the Induction
$\map P 2$ is the case:

$\gcd \set {F_2, F_3} = \gcd \set {1, 2} = 1$
Thus $\map P 2$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\gcd \set {F_k, F_{k + 1} } = 1$

Then we need to show:

$\gcd \set {F_{k + 1}, F_{k + 2} } = 1$


Induction Step
This is our induction step:














\(\ds \gcd \set {F_{k + 1}, F_{k + 2} }\)

\(=\)







\(\ds \gcd \set {F_{k + 1}, F_{k + 2} - F_{k + 1} }\)





Common Divisor Divides Integer Combination














\(\ds \)

\(=\)







\(\ds \gcd \set {F_{k + 1}, F_k}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \gcd \set {F_k, F_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds 1\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \ge 2: \gcd \set {F_n, F_{n + 1} } = 1$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Fibonacci sequence (Fibonacci, 1202)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Fibonacci sequence (Fibonacci, 1202)




