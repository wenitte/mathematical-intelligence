# 

Source: https://proofwiki.org/wiki/Matrix_whose_Determinant_is_Fibonacci_Number



Theorem
The $n \times n$ determinant:

$D_n = \begin{vmatrix}
1 & -1 & 0 & 0 & \cdots & 0 & 0 & 0 \\
1 & 1 & -1 & 0 & \cdots & 0 & 0 & 0 \\
0 & 1 & 1 & -1 & \cdots & 0 & 0 & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \cdots & 1 & 1 & -1 \\
0 & 0 & 0 & 0 & \cdots & 0 & 1 & 1 \\
\end{vmatrix}$
evaluates to $F_{n + 1}$.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

$D_n = F_{n + 1}$


Basis for the Induction
$\map P 2$ is the case:














\(\ds D_2\)

\(=\)







\(\ds \begin {vmatrix} 1 & -1 \\ 1 & 1 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 \times 1} - \paren {-1 \times 1}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds F_3\)





Definition of Fibonacci Number




Thus $\map P 2$ is seen to hold.

$\map P 3$ is the case:














\(\ds D_3\)

\(=\)







\(\ds \begin {vmatrix} 1 & -1 & 0 \\ 1 & 1 & -1 \\ 0 & 1 & 1 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 \times \begin {vmatrix} 1 & -1 \\ 1 & 1 \end {vmatrix} } - \paren {\paren {-1} \times \begin {vmatrix} 1 & -1 \\ 0 & 1 \end {vmatrix} } + \paren {0 \times \begin {vmatrix} 1 & 1 \\ 0 & 1 \end {vmatrix} }\)





Expansion Theorem for Determinants: expanding by $1$st row














\(\ds \)

\(=\)







\(\ds 1 \times D_2 + 1 \times \paren {1 \times 1}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 2 + 1\)





from above














\(\ds \)

\(=\)







\(\ds F_3 + F_2\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_4\)





Definition of Fibonacci Number




Thus $\map P 3$ is seen to hold.

$\map P 2$ and $\map P 3$ together form the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ and $\map P {k - 1}$ are true, where $k \ge 3$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:














\(\ds D_k\)

\(=\)







\(\ds F_{k + 1}\)




















\(\ds D_{k - 1}\)

\(=\)







\(\ds F_k\)









from which it is to be shown that:

$D_{k + 1} = F_{k + 2}$


Induction Step
This is the induction step:

Recall the definition of $D_n$:

$D_{k + 1} = \underbrace {\begin{vmatrix}
1 & -1 & 0 & 0 & 0 & \cdots & 0 & 0 & 0 \\
1 & 1 & -1 & 0 & 0 & \cdots & 0 & 0 & 0 \\
0 & 1 & 1 & -1 & 0 & \cdots & 0 & 0 & 0 \\
0 & 0 & 1 & 1 & -1 & \cdots & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 1 & \cdots & 0 & 0 & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
0 & 0 & 0 & 0 & 0 & \cdots & 1 & -1 & 0 \\
0 & 0 & 0 & 0 & 0 & \cdots & 1 & 1 & -1 \\
0 & 0 & 0 & 0 & 0 & \cdots & 0 & 1 & 1 \\
\end{vmatrix} }_{k + 1 \text { columns} }$

Expanding by $1$st row using the Expansion Theorem for Determinants requires the evaluation of $2$ cofactors:

$1 \times C_{1 1}$
and:

$\paren {-1} \times C_{1 2}$
where $C_{r s}$ denotes the determinant of order $k$ obtained from $D_{k + 1}$ by deleting row $r$ and column $s$.

By the construction of $D_{k + 1}$, it can be seen that $C_{1 1}$ is $D_k$.

The structure of $C_{1 2}$ is seen to be:

$C_{1 2} = \paren {-1} \times \underbrace {\begin{vmatrix}
1 & -1 & 0 & 0 & \cdots & 0 & 0 & 0 \\
0 & 1 & -1 & 0 & \cdots & 0 & 0 & 0 \\
0 & 1 & 1 & -1 & \cdots & 0 & 0 & 0 \\
0 & 0 & 1 & 1 & \cdots & 0 & 0 & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \cdots & 1 & -1 & 0 \\
0 & 0 & 0 & 0 & \cdots & 1 & 1 & -1 \\
0 & 0 & 0 & 0 & \cdots & 0 & 1 & 1 \\
\end{vmatrix} }_{k \text { columns} }$

By Determinant with Unit Element in Otherwise Zero Column:

$C_{1 2} = \paren {-1} \times \underbrace {\begin{vmatrix}
1 & -1 & 0 & \cdots & 0 & 0 & 0 \\
1 & 1 & -1 & \cdots & 0 & 0 & 0 \\
0 & 1 & 1 & \cdots & 0 & 0 & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
0 & 0 & 0 & \cdots & 1 & -1 & 0 \\
0 & 0 & 0 & \cdots & 1 & 1 & -1 \\
0 & 0 & 0 & \cdots & 0 & 1 & 1 \\
\end{vmatrix} }_{k - 1 \text { columns} }$

which equals $-D_{k - 1}$.

Putting this together, we have:














\(\ds D_{k + 1}\)

\(=\)







\(\ds 1 \times C_{1 1} + \paren {-1} \times C_{1 2}\)





Expansion Theorem for Determinants














\(\ds \)

\(=\)







\(\ds C_{1 1} - C_{1 2}\)




















\(\ds \)

\(=\)







\(\ds D_k - \paren {-D_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds D_k + D_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds F_{k + 1} + F_k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds F_{k + 2}\)





Definition of Fibonacci Number



So $\map P k \land \map P {k - 1} \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 2}: D_n = F_{n + 1}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $24$




