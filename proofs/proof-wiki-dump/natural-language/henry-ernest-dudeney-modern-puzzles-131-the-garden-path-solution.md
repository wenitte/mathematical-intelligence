# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/131_-_The_Garden_Path/Solution



Modern Puzzles by Henry Ernest Dudeney: $131$
The Garden Path
A man has a rectangular garden, $55$ yards by $40$ yards,
and he makes a diagonal path, one yard wide, exactly in the manner indicated in the diagram.

What is the area of the path?


Solution
$66 \tfrac 2 3$ square yards.


Proof
We solve the general case.
Let $L$ yards be the length of the garden.
Let $B$ yards be the breadth of the garden.
Let $C$ yards be the width of the path.
Let $x$ yards be the length of the boundary between the path and the rest of the garden.
Let $A$ square yards be the area of the path.
Let $y$ be the length of one of the sides of the path.

The path is a parallelogram bounded by two sides of length $x$ and two sides of length $y$.
From Area of Parallelogram:

$A = C x$
Then we have:




\(\text {(1)}: \quad\)









\(\ds x^2\)

\(=\)







\(\ds B^2 + \paren {L - y}^2\)





Pythagoras's Theorem




\(\text {(2)}: \quad\)









\(\ds \dfrac y C\)

\(=\)







\(\ds \dfrac x B\)





Definition of Similar Triangles








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {C x} B\)














\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(=\)







\(\ds B^2 + \paren {L - \dfrac {C x} B}^2\)





substituting for $y$ in $(1)$














\(\ds \)

\(=\)







\(\ds B^2 + L^2 - \dfrac {2 L C x} B + \dfrac {C^2 x^2} {B^2}\)





multiplying out








\(\ds \leadsto \ \ \)





\(\ds \paren {1 - \dfrac {C^2} {B^2} } x^2 + \dfrac {2 L C} B x - \paren {B^2 + L^2}\)

\(=\)







\(\ds 0\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds \paren {B^2 - C^2} x^2 + 2 B L C x - B^2 \paren {B^2 + L^2}\)

\(=\)







\(\ds 0\)





multiplying through by $B^2$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac {-2 B L C \pm \sqrt {\paren {2 B L C}^2 + 4 \paren {B^2 - C^2} B^2 \paren {B^2 + L^2} } } {2 \paren {B^2 - C^2} }\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \dfrac {-2 B L C \pm 2 B \sqrt {\paren {L C}^2 + \paren {B^2 - C^2} \paren {B^2 + L^2} } } {2 \paren {B^2 - C^2} }\)





extracting $2 B$ from the square root




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\pm B \sqrt {\paren {B^2 - C^2} \paren {B^2 + L^2} + C^2 L^2} - B L C} {B^2 - C^2}\)





simplification




Having done that, we now use the numbers given.
We have:














\(\ds B\)

\(=\)







\(\ds 40\)




















\(\ds L\)

\(=\)







\(\ds 55\)




















\(\ds C\)

\(=\)







\(\ds 1\)










Inserting these into $(3)$ above:














\(\ds x\)

\(=\)







\(\ds \dfrac {\pm 40 \sqrt {\paren {40^2 - 1^2} \paren {40^2 + 55^2} + 1^2 55^2} - 40 \times 55 \times 1} {40^2 - 1^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pm 40 \sqrt {\paren {1599} \paren {4625} + 3025} - 2200} {1599}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {40 \times 2720 - 2200} {1599}\)





Positive root needed here














\(\ds \)

\(=\)







\(\ds 66 \tfrac 2 3\)





evaluating



Finally:

$A = C x = 66 \tfrac 2 3$
Hence the area of the path is $66 \tfrac 2 3$ square yards.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $131$. -- The Garden Path
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $261$. The Garden Path




