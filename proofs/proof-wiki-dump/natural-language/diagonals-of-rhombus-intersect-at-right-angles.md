# 

Source: https://proofwiki.org/wiki/Diagonals_of_Rhombus_Intersect_at_Right_Angles

Theorem
Let $ABCD$ be a rhombus.
The diagonals $AC$ and $BD$ of $ABCD$ intersect each other at right angles.


Proof


Without loss of generality, let $ABCD$ be embedded in the complex plane so that vertex $A$ coincides with the origin $0 + 0 i$.
Let $AB$ and $AD$ be represented by the complex numbers $a$ and $b$ respectively, expressed as vectors $\mathbf a$ and $\mathbf b$ respectively.
By Geometrical Interpretation of Complex Addition, the diagonal $AC$ is represented by the complex number $a + b$, expressed as a vector $\mathbf a + \mathbf b$.
By Geometrical Interpretation of Complex Subtraction, the diagonal $BD$ is represented by the complex number $a - b$, expressed as a vector $\mathbf a - \mathbf b$.
Let $a - b = w \paren {a + b}$ for some complex number $w \in \C$.
For $A \perp BD$, it is necessary and sufficient  from Complex Multiplication as Geometrical Transformation for the argument of $w$ to be $\dfrac \pi 2$.
That is, for $w$ to be wholly imaginary.
From Complex Number equals Negative of Conjugate iff Wholly Imaginary, that is for $w + \overline w = 0$.
It remains to demonstrate this.
So:














\(\ds w + \overline w\)

\(=\)







\(\ds \dfrac {a - b} {a + b} + \dfrac {\overline a - \overline b} {\overline a + \overline b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 a \overline a - 2 b \overline b} {\left({a + b}\right) \left({\overline a + \overline b}\right)}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \cmod a^2 - 2 \cmod b^2} {\left({a + b}\right) \left({\overline a + \overline b}\right)}\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds 0\)





as $\cmod a = \cmod b$



The result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: Example $1$.




