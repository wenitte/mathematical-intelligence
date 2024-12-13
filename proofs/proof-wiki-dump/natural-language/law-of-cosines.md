# 

Source: https://proofwiki.org/wiki/Law_of_Cosines

  This article was Featured Proof .


Theorem
Let $\triangle ABC$ be a triangle whose sides $a, b, c$ are such that $a$ is opposite $A$, $b$ is opposite $B$ and $c$ is opposite $C$.
Then:

$c^2 = a^2 + b^2 - 2 a b \cos C$


Proof 1
Let $\triangle ABC$ be embedded in a Cartesian coordinate system by identifying:

$C := \tuple {0, 0}$
$B := \tuple {a, 0}$



Thus by definition of sine and cosine:

$A = \tuple {b \cos C, b \sin C}$
By the Distance Formula:

$c = \sqrt {\paren {b \cos C - a}^2 + \paren {b \sin C - 0}^2}$
Hence:














\(\ds c^2\)

\(=\)







\(\ds \paren {b \cos C - a}^2 + \paren {b \sin C - 0}^2\)





squaring both sides of Distance Formula














\(\ds \)

\(=\)







\(\ds b^2 \cos^2 C - 2 a b \cos C + a^2 + b^2 \sin^2 C\)





Square of Difference














\(\ds \)

\(=\)







\(\ds a^2 + b^2 \paren {\sin^2 C + \cos^2 C} - 2 a b \cos C\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds a^2 + b^2 - 2 a b \cos C\)





Sum of Squares of Sine and Cosine



$\blacksquare$


Proof 2
Let $\triangle ABC$ be a triangle.


Case 1: $AC$ greater than $AB$
Using $AC$ as the radius, we construct a circle whose center is $A$.
Now we extend:

$CB$ to $D$
$AB$ to $F$
$BA$ to $G$
$CA$ to $E$.

$D$ is joined with $E$, thus:



Using the Intersecting Chords Theorem we have:

$GB \cdot BF = CB \cdot BD$

$AF$ is a radius, so $AF = AC = b = GA$ and thus:

$GB = GA + AB = b + c$
$BF = AF - AB = b - c$
Thus:














\(\ds \paren {b + c} \paren {b - c}\)

\(=\)







\(\ds a \cdot BD\)














\(\ds \leadsto \ \ \)





\(\ds \frac {b^2 - c^2} a\)

\(=\)







\(\ds BD\)










Next:














\(\ds CD\)

\(=\)







\(\ds CB + BD\)




















\(\ds \)

\(=\)







\(\ds a + \frac {b^2 - c^2} a\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 + b^2 - c^2} a\)









As $CA$ is a radius, $CE$ is a diameter.
By Thales' Theorem, it follows that $\angle CDE$ is a right angle.

Then using the definition of cosine, we have














\(\ds \cos C\)

\(=\)







\(\ds \frac {CD} {CE}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {a^2 + b^2 - c^2} a} } {2 b}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 + b^2 - c^2} {2 a b}\)














\(\ds \leadsto \ \ \)





\(\ds c^2\)

\(=\)







\(\ds a^2 + b^2 - 2 a b \cos C\)









$\Box$


Case 2: $AC$ less than $AB$
When $AC$ is less than $AB$, the point $B$ lies outside the circle and so the diagram needs to be modified accordingly:



This article is complete as far as it goes, but it could do with expansion.In particular: Draw a diagram for the case where $\angle ACB$ is a right angle and where it is a convex angle to show that the formula will be the same.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Now we extend:

$BA$ to $G$
$CA$ to $E$.
Then we construct:

$D$ as the point at which $CB$ intersects the circle
$F$ as the point at which $AB$ intersects the circle.

Finally $D$ is joined to $E$.
Using the Secant Secant Theorem we have:

$GB \cdot BF = CB \cdot BD$

$AF$ is a radius, so $AF = AC = b = GA$ and thus:

$GB = GA + AB = b + c$
$BF = AB - AF = b - c$
Thus:














\(\ds \paren {b + c} \paren {b - c}\)

\(=\)







\(\ds CB \cdot BD\)





Secant Secant Theorem














\(\ds \paren {b + c} \paren {b - c}\)

\(=\)







\(\ds a \cdot BD\)














\(\ds \leadsto \ \ \)





\(\ds \frac {b^2 - c^2} a\)

\(=\)







\(\ds BD\)










Next:














\(\ds CD\)

\(=\)







\(\ds CB - BD\)




















\(\ds \)

\(=\)







\(\ds a - \frac {b^2 - c^2} a\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 - b^2 + c^2} a\)









As $CA$ is a radius, $CE$ is a diameter.
By Thales' Theorem, it follows that $\angle CDE$ is a right angle.

Then using the definition of cosine, we have














\(\ds \cos C\)

\(=\)







\(\ds \frac {CD} {CE}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\dfrac {a^2 - b^2 + c^2} a} } {2 b}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 - b^2 + c^2} {2 a b}\)














\(\ds \leadsto \ \ \)





\(\ds c^2\)

\(=\)







\(\ds a^2 + b^2 - 2 a b \cos C\)









$\Box$


Case 3: $AC = AB$
When $AC = AB$ the points $B$, $D$ and $F$ coincide on the circumference of the circle:


We extend:

$BA$ to $G$
$CA$ to $E$
and immediately:

$GB = CB$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Proof 3
Lemma: Right Triangle
Let $\triangle ABC$ be a right triangle such that $\angle A$ is right.















\(\ds a^2\)

\(=\)







\(\ds b^2 + c^2\)





Pythagoras's Theorem














\(\ds c^2\)

\(=\)







\(\ds a^2 - b^2\)





adding $-b^2$ to both sides and rearranging














\(\ds \)

\(=\)







\(\ds a^2 - 2 b^2 + b^2\)





adding $0 = b^2 - b^2$ to the right hand side














\(\ds \)

\(=\)







\(\ds a^2 - 2 a b \left({\frac b a}\right) + b^2\)





multiplying $2 b^2$ by $\dfrac a a$














\(\ds \)

\(=\)







\(\ds a^2 + b^2 - 2 a b \cos C\)





Definition of Cosine: $\cos C = \dfrac b a$



$\Box$


Acute Triangle
Let $\triangle ABC$ be an acute triangle.


Let $BD$ be dropped perpendicular to $AC$.
Let:














\(\ds h\)

\(=\)







\(\ds BD\)




















\(\ds e\)

\(=\)







\(\ds CD\)




















\(\ds f\)

\(=\)







\(\ds AD\)










We have that $\triangle CDB$ and $\triangle ADB$ are right triangles.
Hence:




\(\text {(1)}: \quad\)









\(\ds c^2\)

\(=\)







\(\ds h^2 + f^2\)





Pythagoras's Theorem




\(\text {(2)}: \quad\)









\(\ds a^2\)

\(=\)







\(\ds h^2 + e^2\)





Pythagoras's Theorem




\(\text {(3)}: \quad\)









\(\ds b^2\)

\(=\)







\(\ds \paren {e + f}^2\)




















\(\ds \)

\(=\)







\(\ds e^2 + f^2 + 2ef\)










\(\text {(4)}: \quad\)









\(\ds e\)

\(=\)







\(\ds a \cos C\)





Definition of Cosine of Angle




Then:














\(\ds c^2\)

\(=\)







\(\ds h^2 + f^2\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a^2 - e^2 + f^2\)





from $(2)$














\(\ds \)

\(=\)







\(\ds a^2 - e^2 + f^2 + 2 e^2 - 2 e^2 + 2 e f - 2 e f\)





adding and subtracting $2 e^2$ and $2 e f$














\(\ds \)

\(=\)







\(\ds a^2 + \paren {e^2 + f^2 + 2 e f} - 2 e \paren {e + f}\)





rearanging














\(\ds \)

\(=\)







\(\ds a^2 + b^2 - 2 a b \cos C\)





using $(3)$ to substitute for $b^2$ and $b$, and $(4)$ to substitute $e$ for $a \cos C$



$\Box$


Obtuse Triangle
Let $\triangle ABC$ be an obtuse triangle.


Let $AC$ be extended and $BD$ be dropped perpendicular to $AC$.
Let:














\(\ds h\)

\(=\)







\(\ds BD\)




















\(\ds e\)

\(=\)







\(\ds CD\)




















\(\ds f\)

\(=\)







\(\ds AD\)










We have that $\triangle CDB$ and $\triangle ADB$ are right triangles.
Hence:




\(\text {(1)}: \quad\)









\(\ds c^2\)

\(=\)







\(\ds h^2 + f^2\)





Pythagoras's Theorem




\(\text {(2)}: \quad\)









\(\ds a^2\)

\(=\)







\(\ds h^2 + e^2\)





Pythagoras's Theorem




\(\text {(3)}: \quad\)









\(\ds e^2\)

\(=\)







\(\ds \paren {b + f}^2\)




















\(\ds \)

\(=\)







\(\ds b^2 + f^2 + 2 b f\)










\(\text {(4)}: \quad\)









\(\ds e\)

\(=\)







\(\ds a \cos C\)





Definition of Cosine of Angle




Then:














\(\ds c^2\)

\(=\)







\(\ds h^2 + f^2\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a^2 - e^2 + f^2\)





from $(2)$














\(\ds \)

\(=\)







\(\ds a^2 - b^2 - f^2 - 2 b f + f^2\)





substituting for $e^2$ from $(3)$














\(\ds \)

\(=\)







\(\ds a^2 - b^2 - 2 b f + 2 b^2 - 2 b^2\)





simplifying and adding and subtracting  $2 b^2$














\(\ds \)

\(=\)







\(\ds a^2 + b^2 - 2 b \paren {b + f}\)





rearranging














\(\ds \)

\(=\)







\(\ds a^2 + b^2 - 2 a b \cos C\)





using $(4)$ to substitute $b + f = e$ with $a \cos C$



$\blacksquare$


Also known as
The Law of Cosines is also known as the Cosine Rule or Cosine Law.
It is known in France as Théorème d'Al-Kashi (Al-Kashi's Theorem) after Jamshīd al-Kāshī, who is believed to have first discovered it.


Also see
Law of Sines
Law of Tangents
Spherical Law of Cosines


Historical Note
The Law of Cosines is believed to have been discovered by Jamshīd al-Kāshī.


Sources
1938: C.V. Durell and Alan Robson: Shorter Advanced Trigonometry ... (next): Chapter $\text I$: Properties of the Triangle
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(7)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.93$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): cosine law
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): cosine rule (law of cosines): 1.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): law of cosines
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): cosine rule (law of cosines): 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): law of cosines
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $5$: Eternal Triangles: Logarithms
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): triangle (iii): The cosine rule
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): triangle (iii): The cosine rule




