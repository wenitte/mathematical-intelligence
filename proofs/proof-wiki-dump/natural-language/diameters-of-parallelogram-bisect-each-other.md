# 

Source: https://proofwiki.org/wiki/Diameters_of_Parallelogram_Bisect_each_other



Theorem
Let $\Box ABCD$ be a parallelogram with diameters $AC$ and $BD$.
Let $AC$ and $BD$ intersect at $E$.

Then $E$ is the midpoint of both $AC$ and $BD$.


Proof 1


By definition of parallelogram:
By Opposite Sides and Angles of Parallelogram are Equal:

$AB = CD$
$AD = BC$
$\angle ABC = \angle ADC$
$\angle BAD = \angle BCD$
Therefore by Triangle Side-Angle-Side Congruence:

$\triangle ABC = \triangle ADC$
$\triangle BAD = \triangle BCD$
Thus:

$\angle ADE = \angle CBE$
$\angle DAE = \angle BCE$
We have $AD = BC$.
So from Triangle Angle-Side-Angle Congruence:

$\triangle ADE = \triangle CBE$
and so:

$DE = BE$
$AE = CE$
Hence the result.
$\blacksquare$


Proof 2


Let $\Box ABCD$ be embedded in the complex plane such that $B$ is identified with the origin $0 + 0 i$.
Let $A$ be identified with the complex number $z_1$.
Let $C$ be identified with the complex number $z_2$.
By Geometrical Interpretation of Complex Subtraction:

$z_1 - z_2 = AC$
Then:

$AE = m \paren {z_1 - z_2}$
for some $m$ where $0 \le m \le 1$.
Similarly, by Geometrical Interpretation of Complex Addition:

$z_1 + z_2 = BD$
Then:

$BE = n \paren {z_1 + z_2}$
for some $n$ where $0 \le n \le 1$.
Then:














\(\ds BA + AE\)

\(=\)







\(\ds BE\)














\(\ds \leadsto \ \ \)





\(\ds z_1 + m \paren {z_1 - z_2}\)

\(=\)







\(\ds n \paren {z_1 + z_2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 - m - n} z_1 + \paren {m - n} z_2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 1 - m - n\)

\(=\)







\(\ds 0\)





Linear Combination of Non-Parallel Complex Numbers is Zero if Factors are Both Zero














\(\ds m - n\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \frac 1 2\)




















\(\ds n\)

\(=\)







\(\ds \frac 1 2\)









and so $E$ is at the midpoint of the diameters of $\Box ABCD$.
$\blacksquare$


Also see
Quadrilateral with Bisecting Diagonals is Parallelogram




