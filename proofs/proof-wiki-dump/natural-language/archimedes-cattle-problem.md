# 

Source: https://proofwiki.org/wiki/Archimedes%27_Cattle_Problem



Classic Problem
The sun god had a herd of cattle consisting of bulls and cows, divided into $4$ herds according to their colour:

white
black
dappled
yellow.
(Accounts vary as to their actual colours, which are arbitrary.)

Among the bulls:

the number of white ones was one half plus one third the number of the black greater than the yellow
the number of the black ones was one quarter plus one fifth the number of the dappled greater than the yellow
the number of the dappled ones was one sixth and one seventh the number of the white greater than the yellow.

Among the cows:

the number of white ones was one third plus one quarter of the total black cattle
the number of the black ones was one quarter plus one fifth the total of the dappled cattle
the number of dappled cattle was one fifth plus one sixth the total of the yellow cattle
the number of the yellow cattle was one sixth plus one seventh the total of the white cattle.

What was the composition of the herd?


Difficult Version
In addition:

All the white and black bulls were arranged in a square
All the dappled and brown bulls were arranged in a triangle.


Solution
Let:

$W$ be the number of white bulls
$B$ be the number of black bulls
$D$ be the number of dappled bulls
$Y$ be the number of yellow bulls
$w$ be the number of white cows
$b$ be the number of black cows
$d$ be the number of dappled cows
$y$ be the number of yellow cows.

Then the conditions can be expressed as:














\(\ds W\)

\(=\)







\(\ds \paren {\frac 1 2 + \frac 1 3} B + Y\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds W - Y\)

\(=\)







\(\ds \frac 5 6 B\)




















\(\ds B\)

\(=\)







\(\ds \paren {\frac 1 4 + \frac 1 5} D + Y\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B - Y\)

\(=\)







\(\ds \frac 9 {20} D\)




















\(\ds D\)

\(=\)







\(\ds \paren {\frac 1 6 + \frac 1 7} W + Y\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds D - Y\)

\(=\)







\(\ds \frac {13} {42} W\)




















\(\ds w\)

\(=\)







\(\ds \paren {\frac 1 3 + \frac 1 4} \paren {B + b}\)










\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 7 {12} \paren {B + b}\)




















\(\ds b\)

\(=\)







\(\ds \paren {\frac 1 4 + \frac 1 5} \paren {D + d}\)










\(\text {(5)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 9 {20} \paren {D + d}\)




















\(\ds d\)

\(=\)







\(\ds \paren {\frac 1 5 + \frac 1 6} \paren {Y + y}\)










\(\text {(6)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {11} {30} \paren {Y + y}\)




















\(\ds y\)

\(=\)







\(\ds \paren {\frac 1 6 + \frac 1 7} \paren {W + w}\)










\(\text {(7)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {13} {42} \paren {W + w}\)









This is a set of $7$ simultaneous equations in $8$ variables, and thus indeterminate.

From $(1)$ to $(3)$ we can find:














\(\ds W\)

\(=\)







\(\ds \frac {742} {297} Y\)




















\(\ds B\)

\(=\)







\(\ds \frac {178} {99} Y\)




















\(\ds D\)

\(=\)







\(\ds \frac {1580} {891} Y\)










Because $\gcd \set {891, 1580} = 1$, we have that $Y$ must be a multiple of $891$: $G$, say.
Hence:














\(\ds W\)

\(=\)







\(\ds 2226 G\)




















\(\ds B\)

\(=\)







\(\ds 1602 G\)




















\(\ds D\)

\(=\)







\(\ds 1580 G\)




















\(\ds Y\)

\(=\)







\(\ds 891 G\)










Substituting into equations $(4)$ to $(7)$, we obtain:














\(\ds 12 w - 7 b\)

\(=\)







\(\ds 11214 G\)




















\(\ds 20b - 9d\)

\(=\)







\(\ds 14220 G\)




















\(\ds 30d - 11y\)

\(=\)







\(\ds 9801 G\)




















\(\ds 42y - 12w\)

\(=\)







\(\ds 28932 G\)










Solving these $4$ equations gives:














\(\ds 4657 w\)

\(=\)







\(\ds 7206360 G\)




















\(\ds 4657 b\)

\(=\)







\(\ds 4893246 G\)




















\(\ds 4657 d\)

\(=\)







\(\ds 3515820 G\)




















\(\ds 4657y\)

\(=\)







\(\ds 5439213G\)









Because $4657$ is a divisor of none of the numbers on the right hand side, it must be the case that

$4657 \divides G$
where $\divides$ denotes divisibility.

Hence the smallest solution is:














\(\ds W\)

\(=\)







\(\ds 10 \, 366 \, 482\)




















\(\ds B\)

\(=\)







\(\ds 7 \, 460 \, 514\)




















\(\ds D\)

\(=\)







\(\ds 7 \, 358 \, 060\)




















\(\ds Y\)

\(=\)







\(\ds 4 \, 149 \, 387\)




















\(\ds w\)

\(=\)







\(\ds 7 \, 206 \, 360\)




















\(\ds b\)

\(=\)







\(\ds 4 \, 893 \, 246\)




















\(\ds d\)

\(=\)







\(\ds 3 \, 515 \, 820\)




















\(\ds y\)

\(=\)







\(\ds 5 \, 439 \, 213\)









$\blacksquare$


Also known as
This problem is also known as:

the bovinum problema (that is, cattle problem in Latin)
Archimedes' Reverse


Source of Name
This entry was named for Archimedes of Syracuse.


Historical Note
There are various interpretations of this problem, as the initial wording can be construed as ambiguous.
In particular, it is not completely clear in the difficult version whether the white and black bulls need to be arranged in a square or a rectangle.
While the problem is attributed to Archimedes of Syracuse, it is far from certain that he was the one who originated it.
It appears, from the arbitrary nature of the numbers selected, and the difficulty of finding a solution, that the problem was contrived with no consideration of what the solution might be, or indeed whether there is one, in the same way that a lecturer in mathematics invents a problem, on the fly, as an illustration of the use of a particular solution technique, without first having checked that the solution will be immediately tractable.

The smallest solution to the Pellian equation $t^2 - 4 \, 729 \, 494 u^2 = 1$ was discovered by A. Amthor and B. Krumbiegel in $1880$, but the corresponding total number of cattle was not actually calculated until $1965$.
This was done by computer. It took $7$ hours and $49$ minutes of computer time, and its printout filled $46$ pages.
This was checked in $1981$ on a more powerful machine, and this took $10$ minutes.
The full solution was published in the Journal of Recreational Mathematics.


Sources
1897: T.L. Heath: The Works of Archimedes
1912: Sir Thomas L. Heath: The Works of Archimedes with the Method of Archimedes
1965: Heinrich Dörrie: 100 Great Problems of Elementary Mathematics (Translated by David Antin)
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Archimedes' Cattle Problem: $16$
Weisstein, Eric W. "Archimedes' Cattle Problem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/ArchimedesCattleProblem.html




