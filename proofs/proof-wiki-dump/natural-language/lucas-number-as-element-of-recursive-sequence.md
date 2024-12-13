# 

Source: https://proofwiki.org/wiki/Lucas_Number_as_Element_of_Recursive_Sequence



Theorem
Let $L_k$ be the $k$th Lucas number, defined as the sum of two Fibonacci numbers:

$L_n = F_{n - 1} + F_{n + 1}$

Then $L_n$ can be defined as the $n$th element of the recursive sequence:

$L_n = \begin{cases}
2 & : n = 0 \\
1 & : n = 1 \\
L_{n - 1} + L_{n - 2} & : \text{otherwise} \end{cases}$


Proof
Proof by induction:
Let $L_n$ be the Lucas number defined as the sum of two Fibonacci numbers:

$L_n = F_{n - 1} + F_{n + 1}$

For all $n \in \N$, let $\map P n$ be the proposition:

$L_n = \begin{cases}
2 & : n = 0 \\
1 & : n = 1 \\
L_{n - 1} + L_{n - 2} & : \text{otherwise} \end{cases}$


Basis for the Induction
We have that:

$L_0 = F_{-1} + F_1 = 1 + 1 = 2$
$L_1 = F_0 + F_2 = 0 + 1 = 1$
$L_2 = F_1 + F_3 = 1 + 2 = 3$
Thus $\map P 0$, $\map P 1$ and $\map P 2$ hold.

$\map P 3$ is the case:

$L_3 = F_2 + F_4 = 1 + 3 = 4$
So $\map P 3$, as $L_3 = L_1 + L_2$.

This is our basis for the induction.


Induction Hypothesis
Let us make the supposition that, for some $k \in \N: k \ge 1$, the proposition $\map P j$ holds for all $j \in \N: 1 \le j \le k$.
We shall show that it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall 1 \le j \le k: L_j = L_{j - 1} + L_{j - 2}$

Then we need to show:

$L_{k + 1} = L_k + L_{k - 1}$


Induction Step
This is our induction step:














\(\ds L_{k + 1}\)

\(=\)







\(\ds F_k + F_{k + 2}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds F_{k - 2} + F_{k - 1} + F_k + F_{k + 1}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \paren {F_{k - 2} + F_k} + \paren {F_{k - 1} + F_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds L_{k - 1} + L_k\)





by hypothesis



Hence $L_n = L_{n - 2} + L_{n - 1}$ follows by the Second Principle of Mathematical Induction.

That is: $\sequence {L_n}$ is the sequence defined as:

$L_n = \begin{cases}
2 & : n = 0 \\
1 & : n = 1 \\
L_{n - 1} + L_{n - 2} & : \text{otherwise} \end{cases}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $13$




