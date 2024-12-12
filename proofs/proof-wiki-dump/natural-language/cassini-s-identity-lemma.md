# 

Source: https://proofwiki.org/wiki/Cassini%27s_Identity/Lemma



Lemma for Cassini's Identity
$\forall n \in \Z_{>1}: \begin{bmatrix}
F_{n + 1} & F_n \\
F_n       & F_{n - 1}
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^n$


Proof
Basis for the Induction
$\begin{bmatrix}
F_2 & F_1     \\
F_1 & F_0
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^1$


Induction Hypothesis
For $k \in \Z_{>1}$, it is assumed that:

$\begin{bmatrix}
F_{k + 1} & F_k \\
F_k       & F_{k - 1}
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^k$
It remains to be shown that:

$\begin{bmatrix}
F_{k + 2} & F_{k + 1}  \\
F_{k + 1} & F_k
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^{k + 1}$


Induction Step
The induction step follows from conventional matrix multiplication:














\(\ds \begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^{k+1}\)

\(=\)







\(\ds \begin{bmatrix}
F_{k + 1} & F_k \\
F_k       & F_{k - 1}
\end{bmatrix}
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
F_{k + 1} + F_k & F_{k + 1} \\
F_k + F_{k - 1} & F_k
\end{bmatrix}\)





Definition of Matrix Product














\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
F_{k + 2} & F_{k + 1} \\
F_{k + 1} & F_k
\end{bmatrix}\)










So by induction:

$\begin{bmatrix}
F_{n + 1} & F_n \\
F_n       & F_{n - 1}
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $6$




