# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/230_-_In_a_Garden/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $230$
In a Garden
Consider a rectangular flower-bed.
If it were $2$ feet broader and $3$ feet longer, it would have been $64$ square feet larger;
if it were $3$ feet broader and $2$ feet longer, it would have been $68$ square feet larger.
What is its length and breadth?


Solution
The flower bed is $10$ feet broad and $14$ feet long.


Proof
Let $a$ and $b$ feet be the length and breadth respectively of the flower bed.
We have:




\(\text {(1)}: \quad\)









\(\ds \paren {a + 3} \paren {b + 2}\)

\(=\)







\(\ds a b + 64\)










\(\text {(2)}: \quad\)









\(\ds \paren {a + 2} \paren {b + 3}\)

\(=\)







\(\ds a b + 68\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 a + 3 b\)

\(=\)







\(\ds 58\)





simplifying $(1)$




\(\text {(4)}: \quad\)









\(\ds 3 a + 2 b\)

\(=\)







\(\ds 62\)





simplifying $(2)$








\(\ds \leadsto \ \ \)





\(\ds \begin {pmatrix} 2 & 3 \\ 3 & 2 \end {pmatrix} \begin {pmatrix} a \\ b \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 58 \\ 62 \end {pmatrix}\)





expressing $(3)$ and $(4)$ in matrix form








\(\ds \leadsto \ \ \)





\(\ds \begin {pmatrix} a \\ b \end {pmatrix}\)

\(=\)







\(\ds \dfrac 1 5 \begin {pmatrix} -2 & 3 \\ 3 & -2 \end {pmatrix} \begin {pmatrix} 58 \\ 62 \end {pmatrix}\)





Inverse of Order 2 Square Matrix














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 14 \\ 10 \end {pmatrix}\)





Definition of Matrix Product (Conventional)



Hence the result.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $230$. -- In a Garden
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $276$. In a Garden




