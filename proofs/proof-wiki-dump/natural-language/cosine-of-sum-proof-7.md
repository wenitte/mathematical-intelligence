# 

Source: https://proofwiki.org/wiki/Cosine_of_Sum/Proof_7

Theorem
$\map \cos {a + b} = \cos a \cos b - \sin a \sin b$


Proof

Let two triangles $\triangle ABC$ and $\triangle ABD$ be inscribed in a circle in the same semicircle:.
By Thales' Theorem, these are both right triangles with:

$ \angle ACB = \angle ADB = 90 \degrees$
Let $AB = 1$.
Join $DC$.
By construction, $\Box ABCD$ is a cyclic quadrilateral.
Let:

$\angle CAB = \alpha$
$\angle DBA = \beta$
$\angle DAC = \gamma$
From the construction above, we have the following:

$\cos \alpha = AC$
$\cos \beta = BD$
$\sin \alpha = CB$
$\sin \beta = AD$
$\gamma = \dfrac \pi 2 - \alpha - \beta$
By Length of Chord of Circle:

$CD = 2 r \map \sin {\gamma}$
Since $2r \mathop = 1$:

$CD = \map \sin {\gamma}$
Therefore:














\(\ds CD\)

\(=\)







\(\ds \map \sin {\gamma}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\dfrac \pi 2 - \gamma}\)





Cosine of Complement equals Sine














\(\ds \)

\(=\)







\(\ds \map \cos {\alpha + \beta}\)





$\gamma$ is complementary to $\alpha + \beta$



By Ptolemy's Theorem:

$AC \times BD = AD \times BC + AB \times CD$
Substituting:

$\cos \alpha \times \cos \beta  = \sin \beta \times \sin \alpha + 1 \times \map \cos {\alpha + \beta}$
Rearranging:

$\cos \tuple {\alpha + \beta} = \cos \alpha \cos \beta - \sin \alpha \sin \beta$

By Equivalence of Definitions of Cosine of Angle, the definition of cosine from the circle, from the triangle and as a real function are equivalent.
It follows that all real numbers $x$ and $y$ correspond to values of $\alpha$ and $\beta$ for which the proof above applies, with one exception.
The exception occurs when both $\alpha$ and $\beta$ are equal to $\dfrac {\pi} 2$.
But then the result is simply:

$ \cos {\pi} = \cos \dfrac {\pi} 2 \cos \dfrac {\pi} 2 - \sin \dfrac {\pi} 2 \sin \dfrac {\pi} 2$
$ -1 = 0 \cdot 0  - 1 \cdot 1$
The result follows.
$\blacksquare$





