# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/141_-_The_First_Boomerang_Puzzle/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $141$
The First "Boomerang" Puzzle
You ask someone to think of any whole number between $1$ and $100$,
and then divide it successively by $3$, $5$ and $7$,
telling you the remainder in each case.
You then immediately announce the number that was thought of.
Can the reader discover a simple method of mentally performing this feat?


Solution
Let $n$ be the number that was thought of.
Let $a$ be the remainder after dividing $n$ by $3$.
Let $b$ be the remainder after dividing $n$ by $5$.
Let $c$ be the remainder after dividing $n$ by $7$.
Then:

multiply $a$ by $70$
multiply $b$ by $21$
multiply $c$ by $15$
Add these up.
If you get a number over $100$, subtract $105$, and continue doing so until you get a number between $1$ and $100$.
This is the number $n$ which was first thought of.
$\blacksquare$


Proof
We have:










\(\ds \exists p \in \Z_{\ge 0}: \, \)



\(\ds n\)

\(=\)







\(\ds 3 p + a\)
















\(\ds \exists q \in \Z_{\ge 0}: \, \)



\(\ds n\)

\(=\)







\(\ds 5 q + b\)
















\(\ds \exists r \in \Z_{\ge 0}: \, \)



\(\ds n\)

\(=\)







\(\ds 7 r + c\)














\(\ds \leadsto \ \ \)





\(\ds 70 n\)

\(=\)







\(\ds 210 p + 70 a\)




















\(\ds 21 n\)

\(=\)







\(\ds 105 q + 21 b\)




















\(\ds 15 n\)

\(=\)







\(\ds 105 r + 15 c\)














\(\ds \leadsto \ \ \)





\(\ds \paren {70 + 21 + 15} n\)

\(=\)







\(\ds \paren {210 p + 105 q + 105 r} + 70 a + 21 b + 15 c\)














\(\ds \leadsto \ \ \)





\(\ds 106 n - 105 k\)

\(=\)







\(\ds 70 a + 21 b + 15 c\)





where $k = 2 p + q + r$








\(\ds \leadsto \ \ \)





\(\ds n + 105 \paren {n - k}\)

\(=\)







\(\ds 70 a + 21 b + 15 c\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\equiv\)







\(\ds 70 a + 21 b + 15 c\)

\(\ds \pmod {105}\)







The result follows.
$\blacksquare$


Historical Note
In the words of Henry Ernest Dudeney:

One of the most ancient forms of arithmetical puzzle is that which I call the "Boomerang."
Everybody has been asked at some time or another to "Think of a number,"
and after going through some process of private calculation, to state the result,
when the questioner promptly tells you the number you thought of.
There are hundreds of varieties of the puzzle.
The oldest recorded example appears to be that given in the Arithmetica by Nicomachus, who died about the year $120$.


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $141$. -- The First "Boomerang" Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $213$. The First "Boomerang" Puzzle




