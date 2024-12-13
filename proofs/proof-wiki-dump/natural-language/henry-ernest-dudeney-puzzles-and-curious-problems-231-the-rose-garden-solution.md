# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/231_-_The_Rose_Garden/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $231$
The Rose Garden
A man has a rectangular garden, and wants to make exactly half of it into a large bed of roses,
with a gravel path of uniform width round it.
Can you find a general rule that will apply equally to any rectangular garden, whatever its proportions?
All the measurements must be made in the garden.
A plain ribbon, no shorter than the length of the garden, is all the material required.


Solution

Construct $AD$ one quarter the length of $AB$.
Construct $AF$ and $DE$ one quarter the length of $BC$.
Construct $EG = DF$.
Then $AG$ is the required width of the path.


Proof
Let the length and breadth of the garden be $a$ and $b$.
Let $c$ be the width of the path.
We have:














\(\ds \paren {a - 2 c} \paren {b - 2 c}\)

\(=\)







\(\ds \dfrac {a b} 2\)














\(\ds \leadsto \ \ \)





\(\ds 2 \paren {a b - 2 a c - 2 b c + 4 c^2}\)

\(=\)







\(\ds a b\)





multiplying out and clearing fractions








\(\ds \leadsto \ \ \)





\(\ds 8 c^2 - 4 \paren {a + b} c + a b\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds \dfrac {4 \paren {a + b} \pm \sqrt {\paren {4 \paren {a + b} }^2 - 4 \times 8 \times a b} } {2 \times 8}\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \dfrac {a + b \pm \sqrt {a^2 + b^2} } 4\)





simplifying



It is apparent that it is the negative square root of $\sqrt {a^2 + b^2}$ we need in the above, as the positive one would result in the path being wider than the garden.
Hence:

$c = \dfrac {a + b - \sqrt {a^2 + b^2} } 4$
$\Box$

Now we investigate the geometry.
Let $a = AB$ and $b = BC$.
We have that:














\(\ds AD\)

\(=\)







\(\ds \dfrac a 4\)




















\(\ds AF\)

\(=\)







\(\ds \dfrac b 4\)




















\(\ds AE\)

\(=\)







\(\ds \dfrac a 4 + \dfrac b 4 = \dfrac {a + b} 4\)














\(\ds \leadsto \ \ \)





\(\ds AG\)

\(=\)







\(\ds AE - EG\)














\(\ds \leadsto \ \ \)





\(\ds EG = DF\)

\(=\)







\(\ds \sqrt {\paren {\dfrac a 4}^2 + \paren {\dfrac b 4}^2}\)





Pythagoras's Theorem








\(\ds \leadsto \ \ \)





\(\ds EG = DF\)

\(=\)







\(\ds \dfrac {\sqrt {a^2 + b^2} } 4\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds AG\)

\(=\)







\(\ds \dfrac {\sqrt {a^2 + b^2} } 4\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds AG\)

\(=\)







\(\ds AE - EG\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a + b} 4 - \dfrac {\sqrt {a^2 + b^2} } 4\)









and it is seen that $AG$ is the same as what was calculated algebraically above.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $231$. -- The Rose Garden
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $279$. The Rose Garden




