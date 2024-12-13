# 

Source: https://proofwiki.org/wiki/Law_of_Cosines/Proof_2



Theorem
Let $\triangle ABC$ be a triangle whose sides $a, b, c$ are such that $a$ is opposite $A$, $b$ is opposite $B$ and $c$ is opposite $C$.
Then:

$c^2 = a^2 + b^2 - 2 a b \cos C$


Proof
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


Also known as
The Law of Cosines is also known as the Cosine Rule or Cosine Law.
It is known in France as Théorème d'Al-Kashi (Al-Kashi's Theorem) after Jamshīd al-Kāshī, who is believed to have first discovered it.





