# 

Source: https://proofwiki.org/wiki/Cassini%27s_Identity

  This article was Featured Proof between 6 November 2010 and 27 November 2010.




Theorem
Let $F_k$ be the $k$th Fibonacci number.
Then:

$F_{n + 1} F_{n - 1} - F_n^2 = \paren {-1}^n$


Negative Indices
Let $n \in \Z_{<0}$ be a negative integer.
Let $F_n$ be the $n$th Fibonacci number (as extended to negative integers).
Then Cassini's Identity:

$F_{n + 1} F_{n - 1} - F_n^2 = \paren {-1}^n$
continues to hold.


Proof 1
We see that:

$F_2 F_0 - F_1^2 = 1 \times 0 - 1 = -1 = \left({-1}\right)^1$
so the proposition holds for $n = 1$.
We also see that:

$F_3 F_1 - F_2^2 = 2 \times 1 - 1 = \left({-1}\right)^2$
so the proposition holds for $n = 2$.

Suppose the proposition is true for $n = k$, that is:

$F_{k + 1} F_{k - 1} - F_k^2 = \left({-1}\right)^k$
It remains to be shown that it follows from this that the proposition is true for $n = k + 1$, that is:

$F_{k + 2} F_k - F_{k + 1}^2 = \left({-1}\right)^{k + 1}$

So:














\(\ds F_{k + 2} F_k - F_{k + 1}^2\)

\(=\)







\(\ds \left({F_k + F_{k + 1} }\right) F_k - F_{k + 1}^2\)




















\(\ds \)

\(=\)







\(\ds F_k^2 + F_k F_{k + 1} - F_{k + 1}^2\)




















\(\ds \)

\(=\)







\(\ds F_k^2 + F_k F_{k + 1} - F_{k + 1} \left({F_k + F_{k - 1} }\right)\)




















\(\ds \)

\(=\)







\(\ds F_k^2 + F_k F_{k + 1} - F_k F_{k + 1} - F_{k + 1} F_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds F_k^2 - F_{k + 1} F_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds \left({-1}\right) \left({F_{k + 1} F_{k - 1} - F_k^2}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({-1}\right) \left({-1}\right)^k\)




















\(\ds \)

\(=\)







\(\ds \left({-1}\right)^{k + 1}\)










By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$

Note that from the above we have that:

$F_{k + 2} F_k - F_{k + 1}^2 = \left({-1}\right)^{k + 1}$
from which:

$F_{n + 1}^2 - F_n F_{n + 2} = \left({-1}\right)^n$
follows immediately.


Proof 2
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


Also reported as
This is also sometimes reported (slightly less elegantly) as:

$F_{n + 1}^2 - F_n F_{n + 2} = \paren {-1}^n$


Source of Name
This entry was named for Giovanni Domenico Cassini.


Historical Note
Some sources attribute this result to Robert Simson and not to Giovanni Domenico Cassini.
However, it was mentioned as far back as $1608$ in a letter by Johannes Kepler.


Sources
1680: Giovanni Domenico Cassini: (title unknown) (Histoire de l'Académie Royale des Sciences Vol. 1: p. 309)
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $10$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




