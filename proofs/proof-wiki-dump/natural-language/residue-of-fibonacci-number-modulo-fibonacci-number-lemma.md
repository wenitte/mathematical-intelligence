# 

Source: https://proofwiki.org/wiki/Residue_of_Fibonacci_Number_Modulo_Fibonacci_Number/Lemma



Theorem
Let $F_n$ denote the $n$th Fibonacci number.
Let $m$ be a non-negative integer.

Then:

$F_{m n + 1} \equiv \paren {\begin{cases} F_1 & : m \bmod 4 = 0 \\
F_{n - 1} & : m \bmod 4 = 1 \\
\paren {-1}^n F_1 & : m \bmod 4 = 2 \\
\paren {-1}^n F_{n - 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$


Proof
We prove this by induction on $m$.
For all $m \in \N$, let $\map P m$ be the proposition:

$F_{m n + 1} \equiv \paren {\begin{cases} F_1 & : m \bmod 4 = 0 \\
F_{n - 1} & : m \bmod 4 = 1 \\
\paren {-1}^n F_1 & : m \bmod 4 = 2 \\
\paren {-1}^n F_{n - 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$


Basis for the Induction
$\map P 0$ is the case:

$F_1 \equiv F_1 \pmod {F_n}$
So $\map P 0$ is true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P m$ is true then it logically follows that $\map P {m + 1}$ is true.

So this is our induction hypothesis:

$F_{m n + 1} \equiv \paren {\begin{cases} F_1 & : m \bmod 4 = 0 \\
F_{n - 1} & : m \bmod 4 = 1 \\
\paren {-1}^n F_1 & : m \bmod 4 = 2 \\
\paren {-1}^n F_{n - 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}$

Then we need to show:














\(\ds F_{\paren {m + 1} n + 1}\)

\(\equiv\)







\(\ds \paren {\begin{cases} F_1 & : \paren {m + 1} \bmod 4 = 0 \\
           F_{n - 1} & : \paren {m + 1} \bmod 4 = 1 \\
           \paren {-1}^n F_1 & : \paren {m + 1} \bmod 4 = 2 \\
           \paren {-1}^n F_{n - 1} & : \paren {m + 1} \bmod 4 = 3 \end{cases} } \pmod {F_n}\)





















\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_{n - 1} & : m \bmod 4 = 0 \\
           \paren {-1}^n & : m \bmod 4 = 1 \\
           \paren {-1}^n F_{n - 1} & : m \bmod 4 = 2 \\
           1 & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)












Induction Step
This is our induction step:














\(\ds F_{\paren {m + 1} n + 1}\)

\(=\)







\(\ds F_{m n + r - 1} F_n + F_{m n + r} F_{n + 1}\)





Honsberger's Identity














\(\ds \)

\(\equiv\)







\(\ds F_{m n + r} F_{n + 1} \quad \pmod {F_n}\)




















\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_1 F_{n + 1} & : m \bmod 4 = 0 \\
           F_{n - 1} F_{n + 1} & : m \bmod 4 = 1 \\
           \paren {-1}^n F_1 F_{n + 1} & : m \bmod 4 = 2 \\
           \paren {-1}^n F_{n - 1} F_{n + 1} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)






induction hypothesis














\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_{n + 1} & : m \bmod 4 = 0 \\
           F_{n - 1} F_{n + 1} - F_n^2 & : m \bmod 4 = 1 \\
           \paren {-1}^n F_{n + 1} & : m \bmod 4 = 2 \\
           \paren {-1}^n \paren {F_{n - 1} F_{n + 1} - F_n^2} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)





















\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_n + F_{n - 1} & : m \bmod 4 = 0 \\
           F_{n - 1} F_{n + 1} - F_n^2 & : m \bmod 4 = 1 \\
           \paren {-1}^n \paren {F_n + F_{n - 1} } & : m \bmod 4 = 2 \\
           \paren {-1}^n \paren {F_{n - 1} F_{n + 1} - F_n^2} & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)






Definition of Fibonacci Numbers














\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_n + F_{n - 1} & : m \bmod 4 = 0 \\
           \paren {-1}^n & : m \bmod 4 = 1 \\
           \paren {-1}^n \paren {F_n + F_{n - 1} } & : m \bmod 4 = 2 \\
           \paren {-1}^n \paren {-1}^n & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)






Cassini's Identity














\(\ds \)

\(\equiv\)







\(\ds \paren {\begin{cases} F_{n - 1} & : m \bmod 4 = 0 \\
           \paren {-1}^n & : m \bmod 4 = 1 \\
           \paren {-1}^n F_{n - 1} & : m \bmod 4 = 2 \\
           1 & : m \bmod 4 = 3 \end{cases} } \pmod {F_n}\)










So $\map P m \implies \map P {m + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$





