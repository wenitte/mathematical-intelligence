# 

Source: https://proofwiki.org/wiki/Count_of_a%27s_and_b%27s_in_Fibonacci_String



Theorem
Let $S_n$ denote the $n$th Fibonacci string.
Then for $n \ge 3$, $S_n$ has:

$F_{n - 2}$ instances of $\text a$
$F_{n - 1}$ instances of $\text b$.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 3}$, let $\map P n$ be the proposition:

$S_n$ has $F_{n - 2}$ instances of $\text a$ and $F_{n - 1}$ instances of $\text b$.


Basis for the Induction
$\map P 3$ is the case:

$S_n = \text {ba}$
It can be seen that $S_n$ has $F_1 = 1$ instance of $\text a$ and $F_2 = 1$ instance of $\text b$.
Thus $\map P 3$ is seen to hold.

$\map P 4$ is the case:

$S_n = \text {bab}$
It can be seen that $S_n$ has $F_2 = 1$ instance of $\text a$ and $F_3 = 2$ instances of $\text b$.
Thus $\map P 4$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, for all $j$ such that $4 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

$S_k$ has $F_{k - 2}$ instances of $\text a$ and $F_{k - 1}$ instances of $\text b$
and:

$S_{k - 1}$ has $F_{k - 3}$ instances of $\text a$ and $F_{k - 2}$ instances of $\text b$

from which it is to be shown that:

$S_{k + 1}$ has $F_{k - 1}$ instances of $\text a$ and $F_k$ instances of $\text b$.


Induction Step
This is the induction step:
By definition of Fibonacci string:

$S_{k + 1} = S_k S_{k - 1}$
concatenated.
By the induction hypothesis:

$S_k$ has $F_{k - 2}$ instances of $\text a$ and $F_{k - 1}$ instances of $\text b$
and:

$S_{k - 1}$ has $F_{k - 3}$ instances of $\text a$ and $F_{k - 2}$ instances of $\text b$

So:

$S_{k + 1}$ has $F_{k - 2} + F_{k - 3}$ instances of $\text a$
and so by definition of Fibonacci numbers:

$S_{k + 1}$ has $F_{k - 1}$ instances of $\text a$
and:

$S_{k + 1}$ has $F_{k - 1} + F_{k - 2}$ instances of $\text b$
and so by definition of Fibonacci numbers:

$S_{k + 1}$ has $F_k$ instances of $\text b$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

for all $n \in \Z$ such that $n \ge 3$: $S_n$ has $F_{n - 2}$ instances of $\text a$ and $F_{n - 1}$ instances of $\text b$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $36$




