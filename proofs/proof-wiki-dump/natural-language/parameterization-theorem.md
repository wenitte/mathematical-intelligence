# 

Source: https://proofwiki.org/wiki/Parameterization_Theorem

Theorem
Let $m, n \in \N$ be natural numbers.
There exists a primitive recursive function $S^m_n : \N^{1 + m} \to \N$ such that, for $e, x_1, \dotsc, x_m$:

If $e$ is not the code for a URM program, $\map {S^m_n} {e, x_1, \dotsc, x_m} = 0$
Otherwise, let $P$ be that program.
Let $f$ be the $m + n$-arity function computed by $P$.
Then $\map {S^m_n} {e, x_1, \dotsc, x_m}$ is the code for a URM program $P'$ computing a function $g : \N^n \to \N$, such that:
$\map g {y_1, \dotsc, y_n} = \map f {x_1, \dotsc, x_m, y_1, \dotsc, y_n}$ whenever $f$ is defined, and undefined otherwise.


Proof
Let $N$ be an abbreviation for:

$m + n + x_1 + \dotso + x_m$
in the following definition.
Define:

$\map {S^m_n} {e, x_1, \dotsc, x_m} = \begin{cases}
{\map p 1}^{\map \beta {\map C {n, m + n}}} \times \dotso \times {\map p n}^{\map \beta {\map C {1, 1 + m}}}
\times {\map p {1 + n}}^{\map \beta {\map Z 1}} \times \dotso \times {\map p {m + n}}^{\map \beta {\map Z m}} \\
\ds \times \prod_{i = 1}^{x_1} {\map p {m + n + i}}^6 \times \dotso \times \prod_{i = 1}^{x_m} {\map p {m + n + x_1 + \dotso + x_{m - 1} + i}}^{6 \times m} \\
\ds \times \prod_{i = 1}^{\map {\operatorname{len}} {\map {\operatorname{Offset}} {e, N}} {\dot -} N} {\map p {N + i}}^{\paren {\map {\operatorname{Offset}} {e, N}}_{N + i}}
& : e \in \texttt{Prog} \\
0 & : e \notin \texttt{Prog}
\end{cases}$

First, observe that ellipses each range over either $m$ or $n$.
As these are fixed, the formula is indeed closed.
Also note that the only instances of $\beta$, the Unique Code for URM Instruction, appear as constants.
That the function is primitive recursive then follows from:

Definition by Cases is Primitive Recursive
Set of Codes for URM Programs is Primitive Recursive
Constant Function is Primitive Recursive
Addition is Primitive Recursive
Multiplication is Primitive Recursive
Bounded Product is Primitive Recursive
Prime Enumeration Function is Primitive Recursive
Exponentiation is Primitive Recursive
Prime Exponent Function is Primitive Recursive
Cut-Off Subtraction is Primitive Recursive
Offset URM Program is Primitive Recursive

When $e$ is a code for a program, the value of the function is a product of distinct prime powers.
Thus, when interpreted as a program, each power is the code number for an instruction.

The first $n$ instructions are:
$\map C {n - k + 1, n + m - k + 1}$
The next $m$ instructions are:
$\map Z k$
Next, for each $i$, there are $x_i$ copies of:
$\map S i$
which is the instruction coded by $6 \times i$
The remaining instructions are copied from the result of calling $\operatorname {Offset}$
Specifically, every instruction from $\operatorname {Offset}$, except for the $\map C {1,1}$ at the start, is placed at the same line number.

Fix all of $e, x_1, \dotsc, x_m, y_1, \dotsc, y_n \in \N$.
Let $e' = \map {\operatorname{Offset}} {e, N}$.
Let $e' ' = \map {S^m_n} {e, x_1, \dotsc, x_m}$.
By the definition of $\operatorname {Offset}$, $e'$ computes the same function as $e$.
Thus, if $Q$ is the program coded by $e'$, it suffices to prove that $Q$ and $P'$ produce the same output (or both do not halt) on corresponding inputs.

The $0$-th stage of $Q$ consists of values $x_1$ through $x_m$ in registers $R_1$ through $R_m$, respectively; $y_1$ through $y_n$ in $R_{m + 1}$ through $R_{m + n}$; and $0$ in every other register.
As the first $N$ instructions in Q are all $\map C {1,1}$, which does not change any registers value.
Thus, the $N$-th stage consists of the same values in registers but the instruction pointer at $N + 1$.

The $0$-th stage of $P'$ consists of values $y_1$ through $y_n$ in registers $R_1$ through $R_n$.
The next $n$ executed instructions have the effect of copying those $y_j$ values into registers $R_{m + 1}$ through $R_{m + n}$.
At the $n$-th stage, the copying is complete.

Note that there may still be values in registers $R_1$ through $R_m$, depending on $m$ and $n$.
Over the next $m$ executed instructions, the registers $R_1$ through $R_m$ are set to $0$.
At the $m + n$-th stage, registers $R_1$ through $R_m$ contain $0$, and registers $R{m + 1}$ through $R_{m + n}$ contain $y_1$ through $y_n$.
The following section of instructions increments each of $R_1$ through $R_m$ until they reach the values $x_1$ through $x_m$.
For example, the next $x_1$ instructions are all $\map S 1$, so at the $m + n + x_1 + 1$-th state, $R_1 = x_1$, and the rest are unchanged.
The pattern continues, until at the $N$-th stage, $R_1$ through $R_m$ contain $x_1$ through $x_m$, and $R_{m + 1}$ through $R_{m + n}$ contain $y_1$ through $y_n$.
Thus, the $N$-th states of $Q$ and $P'$ are identical, which is the basis for the induction.
$\Box$
The induction hypothesis is:

The $k$-th stages of $Q$ and $P'$ are identical, with instruction pointer $> N$.

Suppose the hypothesis holds for $k$.
Then, as the instruction pointer is $> N$, both $Q$ and $P'$ have the same instruction at that index.
Since the same instruction is executed in the same state, the resulting states are also identical, satisfying the first part of the hypothesis.

Lastly, the only way for the instruction pointer to decrease is by executing a Jump instruction.
But by definition of $\operatorname{Offset}$, every such instruction has a destination $> N$.
Therefore, the new instruction pointer is also $> N$.
$\Box$
Hence, $P'$ computes the desired function.
$\blacksquare$





