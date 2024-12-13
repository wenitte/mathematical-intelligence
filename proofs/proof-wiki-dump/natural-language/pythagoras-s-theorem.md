# 

Source: https://proofwiki.org/wiki/Pythagoras%27s_Theorem

  This article was Featured Proof between 22 July 2008 and 27 July 2008.




Theorem
Let $\triangle ABC$ be a right triangle with $c$ as the hypotenuse.
Then:

$a^2 + b^2 = c^2$


Proof 1
Consider the triangle shown below.


We can take $4$ copies of this triangle and form them into a square using isometries, specifically rotations and translations.
This new figure is shown below.


This figure is clearly a square, since all the angles are right angles, and the lines connecting the corners are easily seen to be straight.

Now to calculate the area of this figure.
On the one hand, we can add up the area of the component parts of the square.
Specifically, we can add up the $4$ triangles and the inner square.
Thus we calculate the area of the large square to be:

$4 \paren {\dfrac 1 2 a b} + c^2 = 2 a b + c^2$
On the other hand, we can similarly calculate the area of the large square to be:

$\paren {a + b}^2 = a^2 + 2 a b + b^2$
Now these two expressions have to be equal, since they both represent the area of the square.

Thus:

$a^2 + 2 a b + b^2 = 2 a b + c^2 \iff a^2 + b^2 = c^2$
$\blacksquare$


Proof 2

We have:

$\dfrac b c = \dfrac d b$
and:

$\dfrac a c = \dfrac e a$
using the fact that all the triangles involved are similar.
That is:

$b^2 = c d$
$a^2 = c e$
Adding, we now get:

$a^2 + b^2 = c d + c e = c \paren {d + e} = c^2$
$\blacksquare$


Proof 3

The area of the big square is $c^2$.
It is also equal to $4 \dfrac {a b} 2 + \paren {a - b}^2$.
So:














\(\ds c^2\)

\(=\)







\(\ds 4 \frac {a b} 2 + \paren {a - b}^2\)




















\(\ds \)

\(=\)







\(\ds 2 a b + a^2 - 2 a b + b^2\)




















\(\ds \)

\(=\)







\(\ds a^2 + b^2\)









$\blacksquare$


Proof 4

Dissect the square on the left (which has area $c^2$) as shown.
Rearrange the pieces to make the two squares on the right, with areas $a^2$ and $b^2$.
$\blacksquare$


Proof 5

The two squares both have the same area, that is, $\paren {a + b}^2$.
The one on the left has four triangles of area $\dfrac {a b} 2$ and a square of area $c^2$.
The one on the right has four triangles of area $\dfrac {a b} 2$ and two squares: one of area $a^2$ and one of area $b^2$.
Take away the triangles from both of the big squares and you are left with $c^2 = a^2 + b^2$.
$\blacksquare$


Proof 6

We have that $CH = BS = AB = AJ$.
Hence the result follows directly from Pythagoras's Theorem for Parallelograms.
$\blacksquare$


Proof 7

Let $\triangle ABC$ be a right triangle and $h_c$ the altitude from $c$.
We have:

$\angle CAB \cong \angle DCB$
$\angle ABC \cong \angle ACD$
Then we have:

$\triangle ADC \sim \triangle ACB \sim \triangle CDB$
Use the fact that if $\triangle XYZ \sim \triangle X'Y'Z'$ then by Ratio of Areas of Similar Triangles:

$\dfrac {\paren {XYZ} } {\paren {X' Y' Z'} } = \dfrac {XY^2} {X'Y'^2}$
where $\paren {XYZ}$ denotes the area of $\triangle XYZ$.
This gives us:

$\dfrac {\paren {ADC} } {\paren {ACB} } = \dfrac {AC^2} {AB^2}$
and

$\dfrac {\paren {CDB} } {\paren {ACB} } = \dfrac {BC^2} {AB^2}$
Taking the sum of these two equalities we obtain:

$\dfrac {\paren {ADC} } {\paren {ACB} } + \dfrac {\paren {CDB} } {\paren {ACB} } = \dfrac {BC^2} {AB^2} + \dfrac {AC^2} {AB^2}$
Thus:

$\dfrac {\overbrace {\paren {ADC} + \paren {CDB} }^{\paren {ACB} } } {\paren {ACB} } = \dfrac {BC^2 + AC^2} {AB^2}$
Thus:

$AB^2 = BC^2 + AC^2$
as desired.
$\blacksquare$


Proof 8
Let $\Box ABCD$ be an arbitrary rectangle with opposing sides $AB = CD$ and $AD = BC$.

Let $O$ be the point where the diameters of $\Box ABCD$ meet.
By Diagonals of Rectangle are Equal:

$AC = BD$
By Diameters of Parallelogram Bisect each other:

$OA = OB = OC = OD$
Let a circle be constructed on center $O$ with radius $OA$.
Then $\Box ABCD$ is inscribed in the circle.
This also follows from the converse to Thales' Theorem.


This page has been identified as a candidate for refactoring.In particular: 2 separate proofs hereUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
By Ptolemy's Theorem:

$AD \cdot BC + AB \cdot CD = AC \cdot BD$
But $AD = BC$ and $AB = CD$ and $AC = BD$ so:

$AD \cdot AD + AB \cdot AB = AC \cdot AC$
Hence the result follows.
$\blacksquare$


Algebraic Proof
We start with the algebraic definitions for sine and cosine:

$\ds \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!} = x - \frac {x^3} {3!} + \frac {x^5} {5!} - \cdots$
$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} = 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \cdots$

From these, we derive the proof that $\cos^2 x + \sin^2 x = 1$.
Then from the Equivalence of Definitions of Trigonometric Functions, we can use the geometric interpretation of sine and cosine:


$\sin \theta = \dfrac {\text{Opposite}} {\text{Hypotenuse}}$
$\cos \theta = \dfrac {\text{Adjacent}} {\text{Hypotenuse}}$
Let $\text{Adjacent} = a, \text{Opposite} = b, \text{Hypotenuse} = c$, as in the diagram at the top of the page.

Thus:














\(\ds \cos^2 x + \sin^2 x\)

\(=\)







\(\ds 1\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac a c}^2 + \paren {\frac b c}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds a^2 + b^2\)

\(=\)







\(\ds c^2\)





multiplying both sides by $c^2$



$\blacksquare$


The Classic Proof

Let $ABC$ be a right triangle whose angle $BAC$ is a right angle.
Construct squares $BDEC$ on $BC$, $ABFG$ on $AB$ and $ACKH$ on $AC$.
Construct $AL$ parallel to $BD$ (or $CE$).
Since $\angle BAC$ and $\angle BAG$ are both right angles, from Two Angles making Two Right Angles make Straight Line it follows that $CA$ is in a straight line with $AG$.
For the same reason $BA$ is in a straight line with $AH$.

We have that $\angle DBC = \angle FBA$, because both are right angles.
We add $\angle ABC$ to each one to make $\angle FBC$ and $\angle DBA$.
By common notion 2, $\angle FBC = \angle DBA$.
By Triangle Side-Angle-Side Congruence, $\triangle ABD = \triangle FBC$.
We have that the parallelogram $BDLM$ is on the same base $BD$ and between the same parallels $BD$ and $AL$ as the triangle $\triangle ABD$.
So, by Parallelogram on Same Base as Triangle has Twice its Area, the parallelogram $BDLM$ is twice the area of $\triangle ABD$.
Similarly, we have that the parallelogram $ABFG$ (which happens also to be a square) is on the same base $FB$ and between the same parallels $FB$ and $GC$ as the triangle $\triangle FBC$.
So, by Parallelogram on Same Base as Triangle has Twice its Area, the parallelogram $ABFG$ is twice the area of $\triangle FBC$.
So $BDLM = 2 \triangle ABD = 2 \triangle FBC = ABFG$.

By the same construction, we have that $CELM = 2 \triangle ACE = 2 \triangle KBC = ACKH$.
But $BDLM + CELM$ is the whole of the square $BDEC$.
Therefore the area of the square $BDEC$ is equal to the combined area of the squares $ABFG$ and $ACKH$.
$\blacksquare$


Also known as
Pythagoras's Theorem was known to the Pythagoreans as the Theorem of the Bride, from its numerological significance.
To the ancient Chinese it was called the Gougu theorem.


Also see
Pythagoras's Theorem (Inner Product Space), a generalisation to the context of inner product spaces.
Definition:Pythagorean Triangle
Definition:Pythagorean Triple
Sum of Squares of Sine and Cosine
Square equals Sum of Squares implies Right Triangle: its inverse


Source of Name
This entry was named for Pythagoras of Samos.


Historical Note
Pythagoras's Theorem, or at least certain specific instances of it, was known to the ancient Egyptians, and it may date back further than that.
Little is actually known about Pythagoras himself, and it is uncertain whether he actually proved it or not.
Some traditional sources suggest that when he discovered this theorem, he was so delighted he sacrificed an ox to the gods in thanksgiving. However, given his philosophical outlook, this is vanishingly unlikely.


... there are even jokes about it ...
Once upon a time there were three ladies of the First Peoples of America sitting around the campfire.
On a reindeer skin sat a lady who was the mother of a fine young warrior who weighed $140$ pounds.
On a buffalo skin sat a lady who was the mother of a fine young warrior who weighed $160$ pounds.
The third lady, as well she might, was sitting on the skin of a hippopotamus, as she herself weighed a mighty $300$ pounds.

As you can see:

The squaw on the hippopotamus is equal to the sons of the squaws on the other two hides.


Sources
Pythagorean Theorem and its many proofs - $96$ proofs of Pythagoras's Theorem
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Pythagoras' Theorem
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Pythagoras' theorem
1990: William Dunham: Journey Through Genius ... (previous) ... (next): Chapter $1$: Hippocrates' Quadrature of the Lune ($\text {ca. 440}$ b.c.)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.1$: The Pythagorean Theorem
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Nine Chapters
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Pythagoras' theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Pythagoras' theorem
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $2$: The Logic of Shape: Pythagoras
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Pythagoras' Theorem




