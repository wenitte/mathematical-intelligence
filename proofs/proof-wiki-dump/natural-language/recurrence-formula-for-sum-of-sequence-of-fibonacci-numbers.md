# 

Source: https://proofwiki.org/wiki/Recurrence_Formula_for_Sum_of_Sequence_of_Fibonacci_Numbers



Theorem
Let $g_n$ be the sum of the first $n$ Fibonacci numbers.
Then:

$\forall n \ge 2: g_n = g_{n - 1} + g_{n - 2} + 1$


Proof
Let $F_n$ be the $n$th Fibonacci number.
By definition:

$F_0 = 0, F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, \ldots$
Hence, $g_n$, the sum of the first $n$ Fibonacci numbers is

$g_0 = 0, g_1 = 1, g_2 = 2, g_3 = 4, g_4 = 7, \ldots$

Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds \sum_{j \mathop = 0}^n F_j = g_n = g_{n - 1} + g_{n - 2} + 1$


Basis for the Induction
$\map P 2$ is the case $g_2 = g_1 + g_0 + 1$, which holds:

$2 = 1 + 0 + 1$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{j \mathop = 0}^k F_j = \sum_{j \mathop = 0}^{k - 1} F_j + \sum_{j \mathop = 0}^{k - 2} F_j + 1$

Then we need to show:

$\ds \sum_{j \mathop = 0}^{k + 1} F_j = \sum_{j \mathop = 0}^k F_j + \sum_{j \mathop = 0}^{k - 1} F_j + 1$


Induction Step
This is our induction step:














\(\ds g_{k + 1}\)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k + 1} F_j\)





Definition of $g_k$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^k F_j + F_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} F_j + \sum_{j \mathop = 0}^{k - 2} F_j + 1 + F_{k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} F_j + \sum_{j \mathop = 0}^{k - 2} F_j + 1 + (F_k + F_{k - 1})\)





Definition of Fibonacci Numbers: $F_{k + 1} = F_k + F_{k - 1}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^k F_j + \sum_{j \mathop = 0}^{k - 1} F_j + 1\)





pulling terms into summations














\(\ds \)

\(=\)







\(\ds g_k + g_{k - 1} + 1\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \ge 2: g_n = g_{n - 1} + g_{n - 2} + 1$
where $g_n$ is the sum of the first $n$ Fibonacci numbers.
$\blacksquare$





