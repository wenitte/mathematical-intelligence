# 

Source: https://proofwiki.org/wiki/Prefix_of_Fibonacci_String



Theorem
Let $n \in \Z_{>1}$.
Let $S_n$ denote the $n$th Fibonacci string.
Let $m \in \Z$ such that $1 < m \le n$.
Let $F_m$ denote the $m$th Fibonacci number.

The prefix of $S_n$ of length $F_m$ is the Fibonacci string $S_m$.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 3}$, let $\map P n$ be the proposition:

for all $m \in \Z$ such that $1 < m \le n$, the prefix of $S_n$ of length $F_m$ is $S_m$.


Basis for the Induction
$\map P 3$ is the case:

$S_3 = \text{ba}$
For $m = 2$, $S_3$ starts with $S_2 = \text{b}$, which is the prefix of $S_3$ of length $F_2 = 1$.
Thus $\map P 3$ is seen to hold.

$\map P 4$ is the case:

$S_4 = \text{bab}$

For $m = 2$, $S_4$ starts with $S_2 = \text{b}$, which is the prefix of $S_4$ of length $F_2 = 1$.
For $m = 3$, $S_4$ starts with $S_3 = \text{ba}$, which is the prefix of $S_4$ of length $F_3 = 2$.

Thus $\map P 4$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, for all $j$ such that $4 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

for all $m \in \Z$ such that $1 < m \le k$, the prefix of $S_k$ of length $F_m$ is $S_m$.

from which it is to be shown that:

for all $m \in \Z$ such that $1 < m \le k + 1$, the prefix of $S_{k + 1}$ of length $F_m$ is $S_m$.


Induction Step
This is the induction step:
By definition of Fibonacci string:

$S_{k + 1} = S_k S_{k - 1}$
concatenated.
Thus the prefix of $S_{k + 1}$ of length $F_k$ is $S_k$.
By the induction hypothesis, for all $m \in \Z$ such that $1 < m < k - 1$, the prefix of $S_k$ of length $F_m$ is $S_m$.
But we also have that the prefix of $S_{k + 1}$ of length $F_k$ is $S_k$. 

So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

for all $m \in \Z$ such that $1 < m \le n$, the prefix of $S_n$ of length $F_m$ is $S_m$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $36$




