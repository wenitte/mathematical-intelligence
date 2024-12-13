# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/46_-_A_Square_Family/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $46$
A Square Family
A man had nine children, all born at regular intervals,
and the sum of the squares of their ages was equal to the square of his own.
What were the ages of each?
Every age was an exact number of years.


Solution
$2, 5, 8, 11, 14, 17, 20, 23, 26$.


Proof
Let $a$ years be the age of the youngest child.
Let $d$ years be the interval between consecutive children.
Let $f$ be the age of the father.
We have:














\(\ds f^2\)

\(=\)







\(\ds a^2 + \paren {a + d}^2 + \paren {a + 2 d}^2 + \cdots + \paren {a + 8 d}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^8 \paren {a + d i}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^8 \paren {a^2 + 2 a d i + \paren {d i}^2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^8 a^2 + \sum_{i \mathop = 0}^8 2 a d i + \sum_{i \mathop = 0}^8 d^2 i^2\)




















\(\ds \)

\(=\)







\(\ds a^2 \sum_{i \mathop = 0}^8 1 + 2 a d \sum_{i \mathop = 1}^8 i + d^2 \sum_{i \mathop = 1}^8 i^2\)





as two of the summations vanish at $i = 0$














\(\ds \)

\(=\)







\(\ds 9 a^2 + 2 a d \dfrac {8 \paren {8 + 1} } 2 + d^2 \dfrac {8 \paren {8 + 1} \paren {2 \times 8 + 1} } 6\)





Closed Form for Triangular Numbers, Sum of Sequence of Squares














\(\ds \)

\(=\)







\(\ds 9 a^2 + 72 a d + 204 d^2\)





evaluating



We have that $f^2$ is a multiple of $3$ and so because it is square a multiple of $9$.
So $9 a^2 + 72 a d + 204 d^2$ is also a multiple of $9$ and so $204 d^2$ is a multiple of $9$.
That is, $d^2$ is a multiple of $9$ and so $d$ is a multiple of $3$.
Because of the nature of the question, it can be assumed that $d = 3$, as otherwise there is the unfeasible gap of $48$ years between eldest and youngest child.

So we have:














\(\ds \paren {3 b}^2\)

\(=\)







\(\ds 9 a^2 + 216 a + 1836\)





for some integer $b$








\(\ds \leadsto \ \ \)





\(\ds b^2\)

\(=\)







\(\ds a^2 + 24 a + 204\)




















\(\ds \)

\(=\)







\(\ds \paren {a + 12}^2 + 60\)









We now need to find two squares which differ by $60$.
By the Odd Number Theorem we have:














\(\ds 14^2 + \paren {2 \times 14 + 1}\)

\(=\)







\(\ds 15^2\)




















\(\ds 15^2 + \paren {2 \times 15 + 1}\)

\(=\)







\(\ds 16^2\)














\(\ds \leadsto \ \ \)





\(\ds 16^2 - 14^2\)

\(=\)







\(\ds 60\)










Thus if $14 = a + 12$ then $a = 2$ and we have:

$48^2 = 2^2 + 5^2 + 8^2 + 11^2 + 14^2 + 17^2 + 20^2 + 23^2 + 26^2$
and the solution is complete.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $46$. -- A Square Family
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $41$. A Square Family




