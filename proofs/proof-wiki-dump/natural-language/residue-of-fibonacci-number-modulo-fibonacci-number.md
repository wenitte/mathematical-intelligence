# 

Source: https://proofwiki.org/wiki/Residue_of_Fibonacci_Number_Modulo_Fibonacci_Number



Theorem
Let $F_n$ denote the $n$th Fibonacci number.
Let $m, r$ be non-negative integers.

Then:

$F_{m n + r} \equiv \paren {\begin{cases} F_r & : m \bmod 4 = 0 \\
\paren {-1}^{r + 1} F_{n - r} & : m \bmod 4 = 1 \\
\paren {-1}^n F_r & : m \bmod 4 = 2 \\
\paren {-1}^{r + 1 + n} F_{n - r} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$


Proof
Lemma
$F_{m n + 1} \equiv \paren {\begin{cases} F_1 & : m \bmod 4 = 0 \\
F_{n - 1} & : m \bmod 4 = 1 \\
\paren {-1}^n F_1 & : m \bmod 4 = 2 \\
\paren {-1}^n F_{n - 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$
$\Box$

We prove the result for all $r$ by induction on $r$:
For all $r \in \N$, let $\map P r$ be the proposition:

$F_{m n + r} \equiv \paren {\begin{cases} F_r & : m \bmod 4 = 0 \\
\paren {-1}^{r + 1} F_{n - r} & : m \bmod 4 = 1 \\
\paren {-1}^n F_r & : m \bmod 4 = 2 \\
\paren {-1}^{r + 1 + n} F_{n - r} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$


Basis for the Induction
$\map P 0$ is the case:

$F_{m n} \equiv \paren {\begin{cases} F_0 & : m \bmod 4 = 0 \\
\paren {-1} F_n & : m \bmod 4 = 1 \\
\paren {-1}^n F_0 & : m \bmod 4 = 2 \\
\paren {-1}^{1 + n} F_n & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$

$\; \, \equiv 0 \pmod {F_n}$
This fact follows from Divisibility of Fibonacci Number.

$\map P 1$ is the case:

$F_{m n + 1} \equiv \paren {\begin{cases} F_1 & : m \bmod 4 = 0 \\
F_{n - 1} & : m \bmod 4 = 1 \\
\paren {-1}^n F_1 & : m \bmod 4 = 2 \\
\paren {-1}^n F_{n - 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$
This is our lemma.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P {k - 1}$ and $\map P {k - 2}$ are true, where $k \ge 2$, then it logically follows that $\map P k$ is true.

So this is our induction hypotheses:

$F_{m n + k - 1} \equiv \paren {\begin{cases} F_{k - 1} & : m \bmod 4 = 0 \\
\paren {-1}^k F_{n - k + 1} & : m \bmod 4 = 1 \\
\paren {-1}^n F_{k - 1} & : m \bmod 4 = 2 \\
\paren {-1}^{k + n} F_{n - k + 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$

$F_{m n + k - 2} \equiv \paren {\begin{cases} F_{k - 2} & : m \bmod 4 = 0 \\
\paren {-1}^{k + 1} F_{n - k + 2} & : m \bmod 4 = 1 \\
\paren {-1}^n F_{k - 2} & : m \bmod 4 = 2 \\
\paren {-1}^{k + 1 + n} F_{n - k + 2} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$

Then we need to show:

$F_{m n + k} \equiv \paren {\begin{cases} F_k & : m \bmod 4 = 0 \\
\paren {-1}^{k + 1} F_{n - k} & : m \bmod 4 = 1 \\
\paren {-1}^n F_k & : m \bmod 4 = 2 \\
\paren {-1}^{k + 1 + n} F_{n - k} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$


Induction Step
This is our induction step:














\(\ds F_{m n + k}\)

\(=\)







\(\ds F_{m n + k - 1} + F_{m n + k - 2}\)





Definition of Fibonacci Numbers














\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_{k - 1} + F_{k - 2} & : m \bmod 4 = 0 \\
           \paren {-1}^k F_{n - k + 1} + \paren {-1}^{k + 1} F_{n - k + 2} & : m \bmod 4 = 1 \\
           \paren {-1}^n F_{k - 1} + \paren {-1}^n F_{k - 2} & : m \bmod 4 = 2 \\
           \paren {-1}^{k + n} F_{n - k + 1} + \paren {-1}^{k + 1 + n} F_{n - k + 2} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)






Induction hypotheses














\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_{k - 1} + F_{k - 2} & : m \bmod 4 = 0 \\
           \paren {-1}^{k + 1} \paren {F_{n - k + 2} - F_{n - k + 1} } & : m \bmod 4 = 1 \\
           \paren {-1}^n \paren {F_{k - 1} + F_{k - 2} } & : m \bmod 4 = 2 \\
           \paren {-1}^{k + 1 + n} \paren {F_{n - k + 2} - F_{n - k + 1} } & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)





















\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_k & : m \bmod 4 = 0 \\
           \paren {-1}^{k + 1} F_{n - k} & : m \bmod 4 = 1 \\
           \paren {-1}^n F_k & : m \bmod 4 = 2 \\
           \paren {-1}^{k + 1 + n} F_{n - k} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)






Definition of Fibonacci Numbers




So $\map P {k - 2} \land \map P {k - 1} \implies \map P k$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$F_{m n + r} \equiv \paren {\begin{cases} F_r & : m \bmod 4 = 0 \\
\paren {-1}^{r + 1} F_{n - r} & : m \bmod 4 = 1 \\
\paren {-1}^n F_r & : m \bmod 4 = 2 \\
\paren {-1}^{r + 1 + n} F_{n - r} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $32$




