# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/87_-_Another_Street_Puzzle/Solution



Modern Puzzles by Henry Ernest Dudeney: $87$
Another Street Puzzle
A long street in Brussels has all the odd numbers of the houses on one side and all the even numbers on the other.
$(1)$ If a man lives in an odd-numbered house and all the numbers on one side of him, added together, equal the numbers on the other side,
how many houses are there, and what is the number of his house?
$(2)$ If a man lives on the even side and all the numbers on one side of him equal those on the other side,
how many houses are there, and what is his number?
We will assume that there are more than fifty houses on each side of the street and fewer than five hundred.


Solution
$(1): \quad$ The man lives at no. $239$ in a street with $169$ odd-numbered houses.
$(2): \quad$ The man lives at no. $408$ in a street with $208$ even-numbered houses.


Proof
Odd-Numbered Side
Let there be $m$ houses in the street, where we are told $50 < m < 500$.
Let the man live at no. $n = 2 k + 1$.
We have that:














\(\ds 1 + 3 + \cdots + \paren {2 k - 1}\)

\(=\)







\(\ds \paren {2 k + 3} + \paren {2 k + 5} + \cdots + \paren {2 m - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{j \mathop = 1}^k \paren {2 j - 1}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^m \paren {2 j - 1} - \sum_{j \mathop = 1}^{k + 1} \paren {2 j - 1}\)














\(\ds \leadsto \ \ \)





\(\ds k^2\)

\(=\)







\(\ds m^2 - \paren {k + 1}^2\)





Odd Number Theorem








\(\ds \leadsto \ \ \)





\(\ds 2 \paren {k^2 + k} + 1\)

\(=\)







\(\ds m^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds 2 \dfrac {\paren {2 k + 1}^2 - 1} 4 + 1\)

\(=\)







\(\ds m^2\)





Completing the Square








\(\ds \leadsto \ \ \)





\(\ds \paren {2 k + 1}^2 + 1\)

\(=\)







\(\ds 2 m^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds n^2 + 1\)

\(=\)







\(\ds 2 m^2\)





as $n = 2 k + 1$




Hence this problem is equivalent to finding the answers to Pell's equation:

$n^2 - 2 m^2 = -1$
From Solution to Pell's Equation, the solutions to this are:

${p_r}^2 - 2 {q_r}^2 = \paren {-1}^r$ for $r = 1, 2, 3, \ldots$
where $\dfrac {p_r} {q_r}$ are the convergent of the Continued Fraction Expansion of $\sqrt 2$.
It is the odd integer values of $r$ that we need in order to make the right hand side equal to $-1$.

From Continued Fraction Expansion of Root 2:
The sequence of convergents to the continued fraction expansion of the square root of $2$ begins:

$\dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \dfrac {1393} {985}, \dfrac {3363} {2378}, \ldots$

Hence we have $n$ and $m$ as:

$\begin{array} {r|r} m & n \\ \hline
1 & 1 \\
5 & 7 \\

29 & 41  \\
169 & 239 \\
985 & 1393 \\
\end{array}$
Because there are between $20$ and $500$ houses in the street, we know the man lives at no. $239$ in a street with $169$ houses on the odd-number side.
$\Box$


Even-Numbered Side
Let there be $m$ houses in the street, where we are told $50 < m < 500$.
Let the man live at no. $n$.
Let us suppose all the house numbers were divided by $2$.
Then the man is living on a street where the houses go $1$, $2$, $3$, $\ldots$, $m$.
This is then the same problem as $85$ - The House Number in the same collection.
In this case, the man lives at no. $204$ in a street of $288$ houses.
So, when we multiply the house numbers by $2$ so they are back up to what they were, we find that the man lives at no. $408$.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $87$. -- Another Street Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $170$. Another Street Puzzle




