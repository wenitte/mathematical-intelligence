# 

Source: https://proofwiki.org/wiki/Lucas_Number_as_Sum_of_Fibonacci_Numbers



Theorem
Let $L_k$ be the $k$th Lucas number, defined as:

$L_n = \begin{cases}
2 & : n = 0 \\
1 & : n = 1 \\
L_{n - 1} + L_{n - 2} & : \text{otherwise} \end{cases}$

Then:

$L_n = F_{n - 1} + F_{n + 1}$

where $F_k$ is the $k$th Fibonacci number.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$L_n = F_{n - 1} + F_{n + 1}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$L_1 = 1 = F_0 + F_2$
which holds by definition of the Fibonacci numbers.
This is our basis for the induction.


Induction Hypothesis
Let us make the supposition that, for some $k \in \N: k \ge 1$, the proposition $\map P j$ holds for all $j \in \N: 1 \le j \le k$.
We shall show that it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$L_j = F_{j - 1} + F_{j + 1}$

Then we need to show:

$L_{k + 1} = F_k + F_{k + 2}$


Induction Step
This is our induction step:














\(\ds L_{k + 1}\)

\(=\)







\(\ds L_{k - 1} + L_k\)




















\(\ds \)

\(=\)







\(\ds F_{k - 2} + F_k + F_{k - 1} + F_{k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {F_{k - 2} + F_{k - 1} } + \paren {F_k + F_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds F_k + F_{k + 2}\)









So $\map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N, n \ge 1: L_n = F_{n - 1} + F_{n + 1}$
$\blacksquare$





