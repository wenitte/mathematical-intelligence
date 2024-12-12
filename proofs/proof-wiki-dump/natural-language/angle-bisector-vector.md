# 

Source: https://proofwiki.org/wiki/Angle_Bisector_Vector



Theorem
Let $\mathbf u$ and $\mathbf v$ be vectors of non-zero length.
Let $\norm {\mathbf u}$ and $\norm {\mathbf v}$ be their respective lengths.

Then $\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$ is the angle bisector of $\mathbf u$ and $\mathbf v$.


Geometric Proof 1

As shown above:

Let $\gamma$ be the angle between $\mathbf u$ and $\mathbf v$.
Let $\alpha$ be the angle between $\norm {\mathbf u} \mathbf v$ and $\norm {\mathbf v} \mathbf u$.
Let $\beta$ be the angle between $\mathbf u$ and $\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$.
Note that $\norm {\mathbf u} \mathbf v$ is $\mathbf v$ multiplied by the length of $\mathbf u$.
By Vector Times Magnitude Same Length As Magnitude Times Vector the vectors $\norm {\mathbf u} \mathbf v$ and $\norm {\mathbf v} \mathbf u$ have equal length.
So $\norm {\mathbf u} \mathbf v$, $\norm {\mathbf v} \mathbf u$ and $\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$ make an isosceles triangle.
Therefore:














\(\ds 2 \beta + \alpha\)

\(=\)







\(\ds 180 \degrees\)




















\(\ds \beta\)

\(=\)







\(\ds 90 \degrees - \frac 1 2 \alpha\)




















\(\ds 2 \beta\)

\(=\)







\(\ds 180 \degrees - \alpha\)









But since $\mathbf v$ and $\norm {\mathbf u} \mathbf v$ are parallel, we also have:














\(\ds \delta\)

\(=\)







\(\ds \alpha\)





Parallelism implies Equal Corresponding Angles














\(\ds \delta + \gamma\)

\(=\)







\(\ds 180 \degrees\)




















\(\ds \alpha + \gamma\)

\(=\)







\(\ds 180 \degrees\)




















\(\ds \gamma\)

\(=\)







\(\ds 180 \degrees - \alpha\)









Thus $\gamma = 2 \beta$, and the result follows.
$\blacksquare$


Geometric Proof 2
The vectors $\norm {\mathbf u} \mathbf v$ and $\norm {\mathbf v} \mathbf u$ have equal length from Vector Times Magnitude Same Length As Magnitude Times Vector.
Thus $\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$ is the diagonal of a rhombus.

The result follows from Diagonals of Rhombus Bisect Angles.
$\blacksquare$


Algebraic Proof
Let $\mathbf a = \norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$.
Then:














\(\ds \cos \angle \mathbf u, \mathbf a\)

\(=\)







\(\ds \frac {\mathbf u \cdot \mathbf a} {\norm {\mathbf u} \norm {\mathbf a} }\)





Cosine Formula for Dot Product














\(\ds \)

\(=\)







\(\ds \frac {\mathbf u \cdot \paren {\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u} } {\norm {\mathbf u} \norm {\mathbf a} }\)





$\mathbf a = \norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$














\(\ds \)

\(=\)







\(\ds \frac {\norm {\mathbf u} \paren {\mathbf u \cdot \mathbf v} + \norm {\mathbf v} \paren {\mathbf u \cdot \mathbf u} } {\norm {\mathbf u} \norm{\mathbf a} }\)





Dot Product Associates with Scalar Multiplication














\(\ds \)

\(=\)







\(\ds \frac {\norm {\mathbf u} \paren {\mathbf u \cdot \mathbf v} + \norm {\mathbf v} \norm {\mathbf u}^2} {\norm {\mathbf u} \norm {\mathbf a} }\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \frac {\mathbf u \cdot \mathbf v + \norm {\mathbf u} \norm {\mathbf v} } {\norm {\mathbf a} }\)
























\(\ds \cos \angle \mathbf a, \mathbf v\)

\(=\)







\(\ds \frac {\mathbf v \cdot \mathbf a} {\norm {\mathbf v} \norm{\mathbf a} }\)





Cosine Formula for Dot Product














\(\ds \)

\(=\)







\(\ds \frac {\mathbf v \cdot \paren {\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u} } {\norm {\mathbf v} \norm {\mathbf a} }\)





$\mathbf a = \norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$














\(\ds \)

\(=\)







\(\ds \frac {\norm {\mathbf u} \paren {\mathbf v \cdot \mathbf v} + \norm {\mathbf v} \paren {\mathbf u \cdot \mathbf v} } {\norm {\mathbf v} \norm {\mathbf a} }\)





Dot Product Associates with Scalar Multiplication














\(\ds \)

\(=\)







\(\ds \frac {\norm {\mathbf v} \paren {\mathbf u \cdot \mathbf v} + \norm {\mathbf u} \norm {\mathbf v}^2} {\norm {\mathbf v} \norm {\mathbf a} }\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \frac {\mathbf u \cdot \mathbf v + \norm {\mathbf u} \norm {\mathbf v} } {\norm {\mathbf a} }\)









Comparing the two expressions gives us:

$\cos \angle \mathbf u, \mathbf a = \cos \angle \mathbf a, \mathbf v$
Since the angle used in the dot product is always taken to be between $0$ and $\pi$ and cosine is injective on this interval (from Shape of Cosine Function):

$\angle \mathbf u, \mathbf a = \angle \mathbf a, \mathbf v$
The result follows.
$\blacksquare$





