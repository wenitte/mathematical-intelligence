# 

Source: https://proofwiki.org/wiki/Incidence_of_Double_Letters_in_Fibonacci_String



Theorem
Let $S_n$ denote the $n$th Fibonacci string.
Then:

$(1):\quad$ There are no instances of $2$ $\text a$'s together
$(2):\quad$ There are no instances of $3$ $\text b$'s together
in $S_n$.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

There are no instances of $2$ $\text a$'s or $3$ $\text b$'s together in $S_n$.

$\map P 1$ is the case:

$S_1 = \text a$


Basis for the Induction
$\map P 2$ is the case:

$S_2 = \text b$
$\map P 3$ is the case:

$S_3 = \text {ba}$

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, for all $j$ such that $2 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

There are no instances of $2$ $\text a$'s or $3$ $\text b$'s together in $S_k$.
and:

There are no instances of $2$ $\text a$'s or $3$ $\text b$'s together in $S_{k - 1}$.

from which it is to be shown that:

There are no instances of $2$ $\text a$'s or $3$ $\text b$'s together in $S_{k + 1}$.


Induction Step
This is the induction step:
By definition of Fibonacci string:

$S_{k + 1} = S_k S_{k - 1}$
concatenated.
By the induction hypothesis, neither $S_k$ nor $S_{k - 1}$ have any double $\text a$'s or triple $\text b$'s.

The only way for $S_{k + 1}$ to have a double $\text a$ is for $S_n$ to end with $\text a$ and for $S_{k - 1}$ to begin with $\text a$.
But from Fibonacci String Begins with ba, for all $k > 2$, $S_{k - 1}$ begins with $\text b$.
When $k = 2$, $S_{k - 1}$ does begin with $\text a$, but then $S_{k + 1} = \text {ba}$, which has no double $\text a$.

Similarly, the only way for $S_{k + 1}$ to have a triple $\text b$, either $S_k$ must end with double $\text b$ or $S_{k - 1}$ must begin with double $\text b$.
From Fibonacci String Begins with ba, $S_{k - 1}$ does not begin with double $\text b$.
From Fibonacci String Ends with ab or ba, $S_k$ does not begin with double $\text b$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

For all $n \in \Z_{>0}$, there are no instances of $2$ $\text a$'s or $3$ $\text b$'s together in $S_n$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $36$




