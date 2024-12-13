# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/86_-_A_New_Street_Puzzle/Solution



Modern Puzzles by Henry Ernest Dudeney: $86$
A New Street Puzzle
Brown lived in a street which contained more than twenty houses, but fewer than five hundred,
all numbered one, two, three, four, etc., throughout.
Brown discovered that all the numbers from one upwards to his own number inclusive summed to exactly half the sum of all the numbers from one up to, and including, the last house.
Now what was the number of his house?


Solution
Brown lived at No. $84$ on a street of $119$ houses.


Proof
Let there be $m$ houses in the street, where we are told $20 < m < 500$.
Let the man live at no. $n$.
We have that:














\(\ds 2 \paren {1 + 2 + \cdots + \paren {n - 1} + n}\)

\(=\)







\(\ds 1 + 2 + \cdots + \paren {m - 1} + m\)














\(\ds \leadsto \ \ \)





\(\ds 2 \sum_{k \mathop = 1}^n k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m k\)














\(\ds \leadsto \ \ \)





\(\ds 2 \dfrac {n \paren {n + 1} } 2\)

\(=\)







\(\ds \dfrac {m \paren {m + 1} } 2\)





Closed Form for Triangular Numbers








\(\ds \leadsto \ \ \)





\(\ds 2 \paren {n^2 + n}\)

\(=\)







\(\ds m^2 + m\)





simplification








\(\ds \leadsto \ \ \)





\(\ds 2 \dfrac {\paren {2 n + 1}^2 - 1} 4\)

\(=\)







\(\ds \dfrac {\paren {2 m + 1}^2 - 1} 4\)





Completing the Square








\(\ds \leadsto \ \ \)





\(\ds 2 x^2 - 1\)

\(=\)







\(\ds y^2\)





setting $x = 2 n + 1$ and $y = 2 m + 1$ and simplifying




Hence this problem is equivalent to finding the answers to Pell's equation:

$2 x^2 - 1 = y^2$
or equivalently:

$y^2 - 2 x^2 = -1$
From Solution to Pell's Equation, the solutions to this are:

${p_r}^2 - 2 {q_r}^2 = \paren {-1}^r$ for $r = 1, 2, 3, \ldots$
where $\dfrac {p_r} {q_r}$ are the convergent of the Continued Fraction Expansion of $\sqrt 2$.
It is the odd integer values of $r$ that we need in order to make the right hand side equal to $-1$.

From Continued Fraction Expansion of Root 2:
The sequence of convergents to the continued fraction expansion of the square root of $2$ begins:

$\dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \dfrac {1393} {985}, \dfrac {3363} {2378}, \ldots$

Hence we have $x$ and $y$, and thence $n = \dfrac {x - 1} 2$ and $m = \dfrac {y - 1} 2$ as:

$\begin{array} {r|r} x & y & n & m \\ \hline
1 & 1 & 0 & 0 \\
5 & 7 & 2 & 3 \\

29 & 41 & 14 & 20 \\
169 & 239 & 84 & 119 \\
985 & 1393 & 492 & 696 \\
\end{array}$
Because there are between $20$ and $500$ houses in the street, we know the man lives at no. $84$ in a $119$-house street.
$\blacksquare$


Historical Note
Dudeney references his Amusements in Mathematics, in which he explains how to find the solutions to Pell's equation.


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $86$. -- A New Street Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $169$. A New Street Puzzle




