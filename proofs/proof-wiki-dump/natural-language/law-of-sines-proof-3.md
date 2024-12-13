# 

Source: https://proofwiki.org/wiki/Law_of_Sines/Proof_3



Theorem
Let $\triangle ABC$ be a triangle whose sides $a, b, c$ are such that $a$ is opposite $A$, $b$ is opposite $B$ and $c$ is opposite $C$.
Then:

$\dfrac a {\sin A} = \dfrac b {\sin B} = \dfrac c {\sin C} = 2 R$
where $R$ is the circumradius of $\triangle ABC$.


Proof
Acute Case
Let $\triangle ABC$ be acute.


Construct the circumcircle of $\triangle ABC$.
Let its radius be $R$.
Construct its diameter $BX$ through $B$.
By Thales' Theorem, $\angle BAX$ is a right angle.
From Angles in Same Segment of Circle are Equal:

$\angle AXB = \angle ACB$
Then:














\(\ds \sin \angle AXB\)

\(=\)







\(\ds \dfrac {AB} {BX}\)





Definition of Sine of Angle








\(\ds \leadsto \ \ \)





\(\ds \sin \angle ACB\)

\(=\)







\(\ds \dfrac c {2 R}\)














\(\ds \leadsto \ \ \)





\(\ds 2 R\)

\(=\)







\(\ds \dfrac c {\sin C}\)









The same construction can be applied to each of the remaining vertices of $\triangle ABC$.
Hence the result.
$\Box$

Let $\triangle ABC$ be obtuse.


As for the acute case, construct the circumcircle of $\triangle ABC$.
Let its radius be $R$.
Construct its diameter $BX$ through $B$.
By Thales' Theorem, $\angle BCX$ is a right angle.
We note that $\Box ABXC$ is a cyclic quadrilateral.
From Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles:

$\angle BXC = 180 \degrees - A$
Hence using a similar argument to the acute case:














\(\ds a\)

\(=\)







\(\ds 2 R \sin \angle BXC\)




















\(\ds \)

\(=\)







\(\ds 2 R \map \sin {180 \degrees - A}\)




















\(\ds \)

\(=\)







\(\ds 2 R \sin A\)









and the result follows.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: The sine formula




