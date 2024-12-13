# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/210_-_Pat_and_his_Pig/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $210$
Pat and his Pig
The diagram represents a field $100$ yards square.
Pat is at $A$ and his pig is at $B$.
The pig runs straight for the gateway at $C$.

As Pat can run twice as fast as the pig, you would expect that he would first make straight for the gate and close it.
But this is not Pat's way of doing things.
He goes directly for the pig all the time, thus taking a curved course.
Now, does the pig escape, or does Pat catch it?
And if he catches it, exactly how far does the pig run?


Solution
Pat catches the pig after it has run $66 \tfrac 2 3$ yards towards the gate.


Proof
This can be modelled using the technique of Differential Equation of Perpendicular Pursuit Curve.
Let us rotate the frame of reference so as to make:

the initial position of the pig at the origin of a Cartesian plane
the initial position of the farmer at the point $\tuple {c, 0}$ on this frame
the initial position of the gate at the point $\tuple {0, c}$ on this frame.
Let $P$ be the position of the pig at time $t$.
Let $F$ be the position of the farmer Pat at time $t$.
From Differential Equation of Perpendicular Pursuit Curve, the differential equation describing the path taken by $F$ is:

$\dfrac {\d y} {\d x} = \dfrac 1 2 \paren {\paren {\dfrac x c}^{1 / 2} - \paren {\dfrac c x}^{1 / 2} }$
So we need to solve this for a start.
Simplification is in order.

Thus we have:














\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {\dfrac x c}^{1 / 2} - \paren {\dfrac c x}^{1 / 2} }\)





Differential Equation of Perpendicular Pursuit Curve














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt c} \paren {x^{1 / 2} - \dfrac c {x^{1 / 2} } }\)





extracting $\dfrac 1 {\sqrt c}$ out of the bracket














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt c} \dfrac {x - c} {\sqrt x}\)









This differential equation can be solved by Solution to Separable Differential Equation:

$\ds \int \rd y = \dfrac 1 {2 \sqrt c} \int \dfrac {x - c} {\sqrt x} \rd x + C$













\(\ds \int \rd y\)

\(=\)







\(\ds \dfrac 1 {2 \sqrt c} \int \dfrac {x - c} {\sqrt x} \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac 1 {2 \sqrt c} \paren {\int \sqrt x \rd x - \int \dfrac c {\sqrt x} \rd x} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt c} \paren {\dfrac {2 \sqrt x^3} 3 - 2 c \sqrt x} + C\)





Primitive of $\sqrt {a x + b}$, Primitive of $\dfrac 1 {\sqrt {a x + b} }$














\(\ds \)

\(=\)







\(\ds \dfrac {1 \sqrt x^3} {3 \sqrt c} - \sqrt {c x} + C\)





simplifying




When $y = 0$ we have that $x = c$ and so:














\(\ds 0\)

\(=\)







\(\ds \dfrac {1 \sqrt c^3} {3 \sqrt c} - \sqrt {c \times c} + C\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds -\dfrac c 3 + c\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 c} 3\)









leaving us with:

$y = \dfrac {1 \sqrt x^3} {3 \sqrt c} + \sqrt {c x} + \dfrac {2 c} 3$

The farmer catches his pig when $x = 0$, that is:

$y = 0 + 0 + \dfrac {2 c} 3$
That is, $\dfrac 2 3$ of the way to the gate, or $66 \tfrac 2 3$ yards from $B$.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $210$. -- Pat and his Pig
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $307$. Pat and his Pig




