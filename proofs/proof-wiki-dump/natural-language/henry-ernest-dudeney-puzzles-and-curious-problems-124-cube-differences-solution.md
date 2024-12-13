# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/124_-_Cube_Differences/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $124$
Cube Differences
If we wanted to find a way of making the number $1 \, 234 \, 567$ the difference between two squares,
we could of course write down $517 \, 284$ and $617 \, 283$ --
a half of the number plus $\tfrac 1 2$ and minus $\tfrac 1 2$ respectively to be squared.
But it will be found a little more difficult to discover two cubes the difference of which is $1 \, 234 \, 567$.


Solution
$642^3 - 641^3 = 1 \, 234 \, 567$


Proof
We need to find $a$ and $b$ such that $a^3 - b^3 = 1 \, 234 \, 567$.
The assumption is that $a, b \in \Z_{>0}$ so we are not concerned about negative numbers.
First we use Difference of Two Cubes to obtain:

$a^3 - b^3 = \paren {a - b} \paren {a^2 + a b + b^2}$
We have that:

$1 \, 234 \, 567 = 127 \times 9721$
from which it follows either that:

$a - b = 127$ and $a^2 + b^2 + a b = 9721$
or:

$a - b = 1$ and $a^2 + b^2 + a b = 1 \, 234 \, 567$

Trying the first of these:














\(\ds a - b\)

\(=\)







\(\ds 127\)




















\(\ds a^2 + b^2 + a b\)

\(=\)







\(\ds 9721\)














\(\ds \leadsto \ \ \)





\(\ds a^2 + \paren {a - 127}^2 + a \paren {a - 127}\)

\(=\)







\(\ds 9721\)





substituting $b = a - 127$








\(\ds \leadsto \ \ \)





\(\ds 3 a^2 - 3 \times 127 a + 127^2\)

\(=\)







\(\ds 9721\)














\(\ds \leadsto \ \ \)





\(\ds 3 a^2 - 381 a + 6408\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds a^2 - 127 a + 2136\)

\(=\)







\(\ds 0\)





simplifying



However, the above quadratic does not have integer solutions.

So we try:














\(\ds a - b\)

\(=\)







\(\ds 1\)




















\(\ds a^2 + b^2 + a b\)

\(=\)







\(\ds 1234567\)














\(\ds \leadsto \ \ \)





\(\ds a^2 + \paren {a - 1}^2 + a \paren {a - 1}\)

\(=\)







\(\ds 1234567\)





substituting $b = a - 1$








\(\ds \leadsto \ \ \)





\(\ds 3 a^2 - 3 a + 1\)

\(=\)







\(\ds 1234567\)














\(\ds \leadsto \ \ \)





\(\ds 3 a^2 - 3 a - 1234566\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds a^2 - a - 411522\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {a + 641} \paren {a - 642}\)

\(=\)







\(\ds 0\)





factoring








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds -641 \text { or } 642\)





factoring



It is the positive solution we need here, which leads to:

$a = 642$
$b = 641$
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $124$. -- Cube Differences
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $197$. Cube Differences




