# 

Source: https://proofwiki.org/wiki/Flos/Problems/Problem_3



Problem from Flos by Leonardo Fibonacci
$3$ men possess a pile of money, their shares being $\dfrac 1 2$, $\dfrac 1 3$ and $\dfrac 1 6$.
Each man takes some money from the pile until nothing is left.
The first man returns $\dfrac 1 2$ of what he took,
the second $\dfrac 1 3$
and the third $\dfrac 1 6$.
When the total so returned is divided equally among the men it is found that each then possess what he is entitled to.
How much money was in the original pile, and how much did each man take from the pile?


Solution
The total amount $T$ cannot be determined by the information given.
All that can be done is determine the proportions of $T$ that each man took.
Hence we can offer an arbitrary number for $T$.

In order for all numbers in question to be integers, we select this number to be $282$.
Then the first man took $198$, the second man took $78$ and the third man took $6$.


Proof
Let $A$, $B$ and $C$ denote the man whose share is $\dfrac 1 2$, $\dfrac 1 3$, and $\dfrac 1 6$ respectively.
Let $a$, $b$ and $c$ be the amounts taken by $A$, $B$ and $C$ respectively.
The total in the original pile is then $T = a + b + c$.

Let $3 x$ be the sum returned equally to $A$, $B$ and $C$.
Before they received a third of this, they had $\dfrac T 2 - x$, $\dfrac T 3 - x$ and $\dfrac T 6 - x$ respectively.
Because these were what they had after they had put back $\dfrac 1 2$, $\dfrac 1 3$ and $\dfrac 1 6$ respectively, we have::














\(\ds a\)

\(=\)







\(\ds 2 \paren {\dfrac T 2 - x}\)




















\(\ds b\)

\(=\)







\(\ds \dfrac 3 2 \paren {\dfrac T 3 - x}\)




















\(\ds c\)

\(=\)







\(\ds \dfrac 6 5 \paren {\dfrac T 6 - x}\)









Thus we have:














\(\ds \paren {2 \paren {\dfrac T 2 - x} } + \dfrac 3 2 \paren {\dfrac T 3 - x} + \dfrac 6 5 \paren {\dfrac T 6 - x}\)

\(=\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac T 2 + \dfrac T 5\)

\(=\)







\(\ds 2 x + \dfrac {3 x} 2 + \dfrac {6 x} 5\)














\(\ds \leadsto \ \ \)





\(\ds 5 T + 2 T\)

\(=\)







\(\ds 20 x + 15 x + 12 x\)














\(\ds \leadsto \ \ \)





\(\ds 7 T\)

\(=\)







\(\ds 47 x\)









This is indeterminate.

Fibonacci picked the simplest integer solution: $T = 47$ and $x = 7$.
This leads to:














\(\ds a\)

\(=\)







\(\ds 33\)




















\(\ds b\)

\(=\)







\(\ds 13\)




















\(\ds c\)

\(=\)







\(\ds 1\)









It is neater to multiply everything by $6$, so as to make it so that the amount given and taken at each stage is an integer.

Checking that the numbers are correct and consistent, we check them against the conditions of the question.
We have that:














\(\ds a\)

\(=\)







\(\ds 198\)














\(\ds \leadsto \ \ \)





\(\ds 198 - \dfrac {198} 2\)

\(=\)







\(\ds 99\)





the amount left after $A$ had given half back


















\(\ds b\)

\(=\)







\(\ds 78\)














\(\ds \leadsto \ \ \)





\(\ds 78 - \dfrac {78} 3\)

\(=\)







\(\ds 52\)





the amount left after $B$ had given a third back


















\(\ds c\)

\(=\)







\(\ds 6\)














\(\ds \leadsto \ \ \)





\(\ds 6 - \dfrac 6 6\)

\(=\)







\(\ds 5\)





the amount left after $C$ had given a sixth back




So there was $99 + 26 + 1 = 126$ to be shared out.

Thus each got $\dfrac {126} 3 = 42$ back, giving them:




\(\text {(A)}: \quad\)









\(\ds 99 + 42\)

\(=\)







\(\ds 141\)

\(\ds = \dfrac {282} 2\)








\(\text {(B)}: \quad\)









\(\ds 52 + 42\)

\(=\)







\(\ds 94\)

\(\ds = \dfrac {282} 3\)








\(\text {(C)}: \quad\)









\(\ds 52 + 42\)

\(=\)







\(\ds 47\)

\(\ds = \dfrac {282} 6\)







$\blacksquare$


Sources
1225: Leonardo Fibonacci: Flos
1981: Howard Eves: Great Moments in Mathematics: Before 1650: Lecture $15$: The Blockhead
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Liber Abaci: $87$




