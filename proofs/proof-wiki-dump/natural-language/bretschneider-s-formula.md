# 

Source: https://proofwiki.org/wiki/Bretschneider%27s_Formula



Theorem
Let $ABCD$ be a general quadrilateral.
Then the area $\AA$ of $ABCD$ is given by:

$\AA = \sqrt {\paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} - a b c d \map {\cos^2} {\dfrac {\alpha + \gamma} 2} }$
where:

$a, b, c, d$ are the lengths of the sides of the quadrilateral
$s = \dfrac {a + b + c + d} 2$ is the semiperimeter
$\alpha$ and $\gamma$ are opposite angles.


Proof

Let the area of $\triangle DAB$ and $\triangle BCD$ be $\AA_1$ and $\AA_2$.
From Area of Triangle in Terms of Two Sides and Angle:

$\AA_1 = \dfrac {a b \sin \alpha} 2$ and $\AA_2 = \dfrac {c d \sin \gamma} 2$
From the second axiom of area:

$\AA = \AA_1 + \AA_2$
so:




\(\text {(1)}: \quad\)









\(\ds \AA^2\)

\(=\)







\(\ds \frac 1 4 \paren {a^2 b^2 \sin^2 \alpha + 2 a b c d \sin \alpha \sin \gamma + c^2 d^2 \sin^2 \gamma}\)










The diagonal $p$ can be written in 2 ways using the Law of Cosines:

$p^2 = a^2 + b^2 - 2 a b \cos \alpha$
$p^2 = c^2 + d^2 - 2 c d \cos \gamma$
Equality is transitive, so:














\(\ds a^2 + b^2 - 2 a b \cos \alpha\)

\(=\)







\(\ds c^2 + d^2 - 2 c d \cos \gamma\)




















\(\ds a^2 + b^2 - c^2 - d^2\)

\(=\)







\(\ds 2 a b \cos \alpha - 2 c d \cos \gamma\)





adding $2 a b \cos \alpha - c^2 - d^2$ to both sides














\(\ds \paren {a^2 + b^2 - c^2 - d^2}^2\)

\(=\)







\(\ds 4 a^2 b^2 \cos^2 \alpha - 8 a b c d \cos \alpha \cos \gamma + 4 c^2 d^2 \cos^2 \gamma\)





squaring both sides














\(\ds 0\)

\(=\)







\(\ds \frac 1 4 \paren {a^2 b^2 \cos^2 \alpha - 2 a b c d \cos \alpha \cos \gamma + c^2 d^2 \cos^2 \gamma}\)





algebraic manipulation














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 {16} \paren {a^2 + b^2 - c^2 - d^2}^2\)









Now add this equation to $(1)$.
Then trigonometric identities can be used, as follows:














\(\ds \AA^2\)

\(=\)







\(\ds \frac 1 4 \paren {a^2 b^2 + c^2 d^2 - 2 a b c d \map \cos {\alpha + \gamma} } - \frac 1 {16} \paren {a^2 + b^2 - c^2 - d^2}^2\)





Sum of Squares of Sine and Cosine and Cosine of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {16} \paren {4 a^2 b^2 + 4 c^2 d^2 - \paren {a^2 + b^2 - c^2 - d^2}^2} - \frac 1 2 a b c d \cdot \map \cos {\alpha + \gamma}\)










By expanding the square $\paren {a^2 + b^2 - c^2 - d^2}^2$: 




\(\text {(2)}: \quad\)









\(\ds \AA^2\)

\(=\)







\(\ds \frac 1 {16} \paren {-a^4 - b^4 - c^4 - d^4 + 2 a^2 b^2 + 2 a^2 c^2 + 2 a^2 d^2 + 2 b^2 c^2 + 2 b^2 d^2 + 2 c^2 d^2} - \frac 1 2 a b c d \map \cos {\alpha + \gamma}\)










Adding and subtracting $8 a b c d$ to and from the numerator of the first term of $(2)$:














\(\ds \AA^2\)

\(=\)







\(\ds \frac 1 {16} \paren {-a^4 - b^4 - c^4 - d^4 + 2 a^2 b^2 + 2 a^2 c^2 + 2 a^2 d^2 + 2 b^2 c^2 + 2 b^2 d^2 + 2 c^2 d^2 + 8 a b c d - 8 a b c d} - \frac 1 2 a b c d \map \cos {\alpha + \gamma}\)









allows the product $\paren {-a + b + c + d} \paren {a - b + c + d} \paren {a + b - c + d} \paren {a + b + c - d}$ to be formed:














\(\ds \AA^2\)

\(=\)







\(\ds \frac 1 {16} \paren {-a + b + c + d} \paren {a - b + c + d} \paren {a + b - c + d} \paren {a + b + c - d}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 2 a b c d - \frac 1 2 a b c d \map \cos {\alpha + \gamma}\)




















\(\ds \)

\(=\)







\(\ds \paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} - \frac 1 2 a b c d - \frac 1 2 a b c d \map \cos {\alpha + \gamma}\)





as $s = \dfrac {a + b + c + d} 2$














\(\ds \)

\(=\)







\(\ds \paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} - \frac 1 2 a b c d \paren {1 + \map \cos {\alpha + \gamma} }\)




















\(\ds \)

\(=\)







\(\ds \paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} - a b c d \map {\cos^2} {\dfrac {\alpha + \gamma} 2}\)





Half Angle Formula for Cosine



Hence the result.
$\blacksquare$


Also see
Brahmagupta's Formula is a specific version of Bretschneider's Formula for a cyclic quadrilateral.
In this case, from Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles, $\alpha + \gamma = 180^\circ$ and the formula becomes:

$\AA = \sqrt {\paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} }$
Heron's Formula is Brahmagupta's Formula for triangles, so $d = 0$ and the formula becomes:
$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$


Source of Name
This entry was named for Carl Anton Bretschneider.


Historical Note
The geometrical theorem now known as Bretschneider's Formula was published by Carl Anton Bretschneider in $1842$.


Sources
1842: C.A. Bretschneider: Untersuchung der trigonometrischen Relationen des geradlinigen Viereckes (Arch. Math. Phys Vol. 2: pp. 225 – 261)
Weisstein, Eric W. "Bretschneider's Formula." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/BretschneidersFormula.html




