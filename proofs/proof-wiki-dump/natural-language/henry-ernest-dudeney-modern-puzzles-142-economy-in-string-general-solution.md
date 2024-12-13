# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/142_-_Economy_in_String/General_Solution



Modern Puzzles by Henry Ernest Dudeney: $142$
Economy in String
Owing to the scarcity of string a lady found herself in this dilemma.
In making up a parcel for her son, she was limited to using $12$ feet of string, exclusive of knots,
which passed round the parcel once lengthways and twice round its girth, as shown in the illustration.

What was the largest rectangular parcel that she could make up, subject to these conditions?


General Result
Let the string pass:

$a$ times along length $x$
$b$ times along breadth $y$
$c$ times along depth $z$.
Let the string be length $m$.
Then the maximum volume $xyz$ of the parcel is given by:

$x y z = \dfrac {m^2} {27 a b c}$
where:














\(\ds x\)

\(=\)







\(\ds \dfrac m {3 a}\)




















\(\ds y\)

\(=\)







\(\ds \dfrac m {3 b}\)




















\(\ds z\)

\(=\)







\(\ds \dfrac m {3 c}\)











Proof 1
We have that:

$a x + b y + c z = m$
The maximum area of $x y$ is found as follows:
Put:














\(\ds a x + b y\)

\(=\)







\(\ds n\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac {n - b y} a\)














\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds \dfrac {n y} a - \dfrac {b y^2} a\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac \d {\d y} x y\)

\(=\)







\(\ds \dfrac n a - \dfrac {2 b y} a\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac n {2 b}\)














\(\ds \leadsto \ \ \)





\(\ds b y\)

\(=\)







\(\ds \dfrac n 2\)









Similarly also by differentiation with respect to $x$:

$a x = \dfrac n 2$
and so:

$a x = b y$

Similarly:

$a x = b y = c z = \dfrac m 3$
and so:














\(\ds x\)

\(=\)







\(\ds \dfrac m {3 a}\)




















\(\ds y\)

\(=\)







\(\ds \dfrac m {3 b}\)




















\(\ds z\)

\(=\)







\(\ds \dfrac m {3 c}\)









Hence:

$x y z = \dfrac {m^2} {27 a b c}$
$\blacksquare$


Proof 2
We have that:

$a x + b y + c z = m$
Then:














\(\ds x y z\)

\(=\)







\(\ds \frac 1 {a b c} \sqrt[3] {\paren {a x} \paren {b y} \paren {c z} }^3\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {a b c} \paren {\frac {a x + b y + c z} 3}^3\)





Cauchy's Mean Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {a b c} \paren {\frac m 3}^3\)




















\(\ds \)

\(=\)







\(\ds \frac {m^3} {27 a b c}\)









Equality holds when $a x = b y = c z = \dfrac m 3$.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $142$. -- Economy in String
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $313$. Economy in String




