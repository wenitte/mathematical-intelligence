# 

Source: https://proofwiki.org/wiki/Angle_Bisector_Vector/Algebraic_Proof

Theorem
Let $\mathbf u$ and $\mathbf v$ be vectors of non-zero length.
Let $\norm {\mathbf u}$ and $\norm {\mathbf v}$ be their respective lengths.

Then $\norm {\mathbf u} \mathbf v + \norm {\mathbf v} \mathbf u$ is the angle bisector of $\mathbf u$ and $\mathbf v$.


Proof
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





