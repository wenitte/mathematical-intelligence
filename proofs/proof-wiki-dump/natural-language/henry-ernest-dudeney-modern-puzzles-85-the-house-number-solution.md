# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/85_-_The_House_Number/Solution



Modern Puzzles by Henry Ernest Dudeney: $85$
The House Number
A man said the house of his friend was in a long street,
numbered on his side one, two, three, and so on,
and that all the numbers on one side of him added up exactly the same as all the numbers on the other side of him.
He said he knew there were more than fifty houses on that side of the street,
but not as many as five hundred.
Can you discover the number of that house?


Solution
The man lived at no. $204$ in a street of $288$ houses.


Proof
Let there be $m$ houses in the street, where we are told $50 < m < 500$.
Let the man live at no. $n$.
We have that:














\(\ds 1 + 2 + \cdots + \paren {n - 1}\)

\(=\)







\(\ds \paren {n + 1} + \paren {n + 2} + \cdots + \paren {m - 1} + m\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{n - 1} k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m k - \sum_{k \mathop = 1}^n k\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {n \paren {n - 1} } 2\)

\(=\)







\(\ds \dfrac {m \paren {m + 1} } 2 - \dfrac {n \paren {n + 1} } 2\)





Closed Form for Triangular Numbers








\(\ds \leadsto \ \ \)





\(\ds m^2 + m - n^2 - n\)

\(=\)







\(\ds n^2 - n\)





simplification




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {m^2 + m} 2\)

\(=\)







\(\ds n^2\)





further simplification




Trying out a few values of $m$, we see:

$\begin{array} {r|r} m & n \\ \hline
1 &  1 \\
8 & 6 \\

49 & 35 \\
288 & 204 \\
1681 & 1189 \\
\end{array}$

Formally, we have:














\(\ds m^2 + m\)

\(=\)







\(\ds 2 n^2\)





from $(1)$ above








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {2 m + 1}^2 - 1} 4\)

\(=\)







\(\ds 2 n^2\)





Completing the Square








\(\ds \leadsto \ \ \)





\(\ds \paren {2 m + 1}^2 - 1\)

\(=\)







\(\ds 8 n^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds x^2 - 2 y^2\)

\(=\)







\(\ds 1\)





setting $x = 2 m + 1$ and $y = 2 n$ and simplifying



From Pell's Equation: $x^2 - 2 y^2 = 1$, we have:

$x^2 - 2 y^2 = 1$
has the positive integral solutions:

$\begin {array} {r|r} x & y \\ \hline
3 & 2 \\
17 & 12 \\
99 & 70 \\
577 & 408 \\
3363 & 2378 \\
\end {array}$
and so on.

Hence we can create the solutions:

$\begin{array} {r|r|r|r} x & y & m = \dfrac {x - 1} 2 & n = \dfrac y 2 \\ \hline
3 &  2 & 1 & 1 \\

17 & 12 & 8 & 6 \\
99 & 70 & 49 & 35\\
577 & 408 & 288 & 204 \\
3363 & 2378 & 1681 & 1189 & \\
\end{array}$

Because there are between $50$ and $500$ houses in the street, we know the man lives at no. $204$ in a $288$-house street.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $85$. -- The House Number
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $168$. The House Number




