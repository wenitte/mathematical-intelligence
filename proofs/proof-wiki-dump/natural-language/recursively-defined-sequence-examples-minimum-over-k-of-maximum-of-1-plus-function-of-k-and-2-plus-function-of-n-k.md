# 

Source: https://proofwiki.org/wiki/Recursively_Defined_Sequence/Examples/Minimum_over_k_of_Maximum_of_1_plus_Function_of_k_and_2_plus_Function_of_n-k



Theorem
Consider the integer sequence $\sequence {\map f n}$ defined recusrively as:

$\map f n = \begin{cases} 0 & : n = 1 \\
\ds \min_{0 \mathop < k \mathop < n} \map \max {1 + \map f k, 2 + \map f {n - k} } & : n > 1 \end{cases}$

$\map f n$ has a closed-form expression:

$\map f n = m$ for $F_m < n \le F_{m + 1}$
where $F_m$ denotes the $m$th Fibonacci number.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$\map f n = m$ for $F_m < n \le F_{m + 1}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds 0\)

\(=\)







\(\ds \)




















\(\ds F_0\)

\(<\)

\(\, \ds 1 \, \)

\(\, \ds \le \, \)



\(\ds F_{0 + 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)





Definition of Fibonacci Number: $F_1 = 1$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds 0\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\map f r = m$ for $F_m < r \le F_{m + 1}$

from which it is to be shown that:

$\map f {r + 1} = m$ for $F_m < {r + 1} \le F_{m + 1}$


Induction Step
This is the induction step:


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.













\(\ds \)

\(=\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \)









So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 1}: \map f n = m$ for $F_m < n \le F_{m + 1}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $40$




