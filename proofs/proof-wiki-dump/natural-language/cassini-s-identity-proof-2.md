# 

Source: https://proofwiki.org/wiki/Cassini%27s_Identity/Proof_2



Theorem
$F_{n + 1} F_{n - 1} - F_n^2 = \paren {-1}^n$


Proof
First we use this Lemma:

$\forall n \in \Z_{>1}: \begin{bmatrix}
F_{n + 1} & F_n \\
F_n       & F_{n - 1}
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^n$

Then the determinant of both sides is taken.
The left hand side follows directly from Determinant of Order 2:

$\begin{bmatrix}
F_{n + 1}  & F_n     \\
F_n        & F_{n - 1}
\end{bmatrix} = F_{n + 1} F_{n - 1} - F_n^2$

Now for the right hand side:

Basis for the Induction
$\begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix} = 1 \times 0 - 1 \times 1 = -1 = \paren {-1}^1$


Induction Hypothesis
For $k \in \Z_{>0}$, it is assumed that:

$\begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix}^k = \paren {-1}^k$

It remains to be shown that:

$\begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix}^{k + 1} = \paren {-1}^{k + 1}$


Induction Step
The induction step follows from Determinant of Matrix Product:

$\begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix}^{k+1} = \begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix}^k \begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix} = \paren {-1}^k \paren {-1} = \paren {-1}^{k + 1}$

Hence by induction:

$\forall n \in \Z_{>0}: \begin{vmatrix}
1 & 1 \\
1 & 0
\end{vmatrix}^n = \paren {-1}^n$
$\blacksquare$


Source of Name
This entry was named for Giovanni Domenico Cassini.


Sources
1968: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms: $\S 1.2.8$ Exercise $6$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(5)$




