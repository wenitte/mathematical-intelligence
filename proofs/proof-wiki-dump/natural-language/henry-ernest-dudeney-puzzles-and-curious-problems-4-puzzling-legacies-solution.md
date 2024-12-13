# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/4_-_Puzzling_Legacies/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $4$
Puzzling Legacies
A man bequeathed a sum of money, a little less than $\pounds 1500$, to be divided as follows:
The five children and the lawyer received such sums that
the square root of the eldest son's share,
the second son's share divided by two,
the third son's share minus $\pounds 2$,
the fourth son's share plus $\pounds 2$,
the daughter's share multiplied by two,
and the square of the lawyer's fee
all worked out at exactly the same sum of money.
No pounds were divided, and no money was left over after the division.
What was the total amount bequeathed?


Solution
The oldest son gets $\pounds 1296$.
The second son gets $\pounds 72$.
The third son gets $\pounds 38$.
The fourth son gets $\pounds 34$.
The daughter gets $\pounds 18$.
The lawyer's fee is $\pounds 6$.
Hence the total amount bequeathed is $\pounds 1464$.


Proof
Let $a$, $b$, $c$, $d$, $e$ and $l$ be the shares received by the eldest son, second son, third son, fourth son, daughter and lawyer respectively.
We have:














\(\ds a + b + c + d + e + l\)

\(=\)







\(\ds 1500\)




















\(\ds l^2\)

\(=\)







\(\ds \sqrt a\)




















\(\ds \)

\(=\)







\(\ds \dfrac b 2\)




















\(\ds \)

\(=\)







\(\ds c - 2\)




















\(\ds \)

\(=\)







\(\ds d + 2\)




















\(\ds \)

\(=\)







\(\ds 2 e\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds l^4\)




















\(\ds b\)

\(=\)







\(\ds 2 l^2\)




















\(\ds c\)

\(=\)







\(\ds l^2 + 2\)




















\(\ds d\)

\(=\)







\(\ds l^2 - 2\)




















\(\ds e\)

\(=\)







\(\ds \dfrac {l^2} 2\)














\(\ds \leadsto \ \ \)





\(\ds l^4 + \dfrac 9 2 l^2 + l\)

\(=\)







\(\ds 1500\)









We can either attempt to solve this quartic formally, or try some integer values of $l$.
There are not many such that $l^4 < 1500$, so this is a feasible approach.














\(\ds 1^4\)

\(=\)







\(\ds 1\)




















\(\ds 2^4\)

\(=\)







\(\ds 16\)




















\(\ds 3^4\)

\(=\)







\(\ds 81\)




















\(\ds 4^4\)

\(=\)







\(\ds 256\)




















\(\ds 5^4\)

\(=\)







\(\ds 625\)




















\(\ds 6^4\)

\(=\)







\(\ds 1296\)




















\(\ds 7^4\)

\(=\)







\(\ds 2401\)









and we have gone far enough.
$5$ is immediately eliminated because $\dfrac 9 2 5^2$ is not an integer.
$4$ looks too small for the numbers under discussion.
So, we try $6$:

$6^4 + \dfrac 9 2 6^2 + 6 = 1296 + 162 + 6 = 1464$
which fits the bill perfectly.
The result follows.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $4$. -- Puzzling Legacies
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $14$. Puzzling Legacies




