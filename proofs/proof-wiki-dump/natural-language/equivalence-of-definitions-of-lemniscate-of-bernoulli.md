# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lemniscate_of_Bernoulli



Theorem
The following definitions of the concept of Lemniscate of Bernoulli are equivalent:

Geometric Definition
Let $P_1$ and $P_2$ be points in the plane such that $P_1 P_2 = 2 a$ for some constant $a$.
The lemniscate of Bernoulli is the locus of points $M$ in the plane such that:

$P_1 M \times P_2 M = a^2$


Cartesian Definition
The lemniscate of Bernoulli is the curve defined by the Cartesian equation:

$\paren {x^2 + y^2}^2 = 2 a^2 \paren {x^2 - y^2}$


Polar Definition
The lemniscate of Bernoulli is the curve defined by the polar equation:

$r^2 = 2 a^2 \cos 2 \theta$


Parametric Definition
The lemniscate of Bernoulli is the curve defined by the parametric equation:

$\begin{cases} x = \dfrac {a \sqrt 2 \cos t} {\sin^2 t + 1} \\ \\ y = \dfrac {a \sqrt 2 \cos t \sin t} {\sin^2 t + 1} \end{cases}$


Proof
Geometric Definition equivalent to Cartesian Definition
Let $M$ be a lemniscate of Bernoulli by the geometric definition.
Then by definition:


Let $P_1$ and $P_2$ be points in the plane such that $P_1 P_2 = 2 a$ for some constant $a$.
The lemniscate of Bernoulli is the locus of points $M$ in the plane such that:

$P_1 M \times P_2 M = a^2$

Let $P_1 = \tuple {a, 0}$ and $P_2 = \tuple {-a, 0}$.
Let $p = \tuple {x, y}$ be an arbitrary point of $M$.
We have:














\(\ds P_1 p\)

\(=\)







\(\ds \sqrt {\paren {a - x}^2 + y^2}\)





Distance Formula














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - 2 a x + x^2 + y^2}\)




















\(\ds P_2 p\)

\(=\)







\(\ds \sqrt {\paren {a + x}^2 + y^2}\)





Distance Formula














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 + 2 a x + x^2 + y^2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {P_1 p} \paren {P_2 p}\)

\(=\)







\(\ds \sqrt {a^2 - 2 a x + x^2 + y^2} \sqrt {a^2 + 2 a x + x^2 + y^2}\)





Definition of Lemniscate of Bernoulli














\(\ds \)

\(=\)







\(\ds a^2\)














\(\ds \leadsto \ \ \)





\(\ds a^4\)

\(=\)







\(\ds \paren {a^2 - 2 a x + x^2 + y^2} \paren {a^2 + 2 a x + x^2 + y^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^2 + \paren {x^2 + y^2} }^2 - 4 a^2 x^2\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds a^4 + 2 a^2 \paren {x^2 + y^2} + \paren {x^2 + y^2}^2 - 4 a^2 x^2\)





Square of Sum














\(\ds \)

\(=\)







\(\ds a^4 + 2 a^2 \paren {y^2 - x^2} + \paren {x^2 + y^2}^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {x^2 + y^2}^2\)

\(=\)







\(\ds 2 a^2 \paren {x^2 - y^2}\)









Thus $M$ is a lemniscate of Bernoulli by the Cartesian definition.
$\Box$


Geometric Definition equivalent to Polar Definition
Let $M$ be a lemniscate of Bernoulli by the geometric definition.
Then by definition:


Let $P_1$ and $P_2$ be points in the plane such that $P_1 P_2 = 2 a$ for some constant $a$.
The lemniscate of Bernoulli is the locus of points $M$ in the plane such that:

$P_1 M \times P_2 M = a^2$

Let $M$ be embedded in a polar coordinate plane whose origin is at $O$ and such that $P_1 = \polar {a, 0}$ and $P_2 = \polar {a, \pi}$.



Consider an arbitrary point $p = \polar {r, \theta}$.
Let $d_1 = \size {P_1 p}$ and $d_2 = \size {P_2 p}$.
We have:














\(\ds d_1 d_2\)

\(=\)







\(\ds a^2\)





Definition of Lemniscate of Bernoulli














\(\ds \)

\(=\)







\(\ds \sqrt {r^2 + a^2 - 2 a r \cos \theta} \times \sqrt {r^2 + a^2 - 2 a r \, \map \cos {\pi - \theta} }\)





Cosine Rule








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2}^2\)

\(=\)







\(\ds \paren {r^2 + a^2 - 2 a r \cos \theta} \paren {r^2 + a^2 + 2 a r \cos \theta}\)





Cosine of Supplementary Angle, and squaring throughout














\(\ds \)

\(=\)







\(\ds \paren {r^2 + a^2}^2 - \paren {2 a r \cos \theta}^2\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {r^2}^2 + 2 a^2 r^2 + \paren {a^2}^2 - 4 a^2 r^2 \cos^2 \theta\)














\(\ds \leadsto \ \ \)





\(\ds r^2\)

\(=\)







\(\ds 2 a^2 \paren {2 \cos^2 \theta - 1}\)





simplifying and rearranging








\(\ds \leadsto \ \ \)





\(\ds r^2\)

\(=\)







\(\ds 2 a^2 \cos 2 \theta\)





Double Angle Formula for Cosine: Corollary $1$



$\Box$


Parametric Definition equivalent to Cartesian Definition
Let $M$ be a lemniscate of Bernoulli by the parametric definition.
Then by definition:


The lemniscate of Bernoulli is the curve defined by the parametric equation:

$\begin{cases} x = \dfrac {a \sqrt 2 \cos t} {\sin^2 t + 1} \\ \\ y = \dfrac {a \sqrt 2 \cos t \sin t} {\sin^2 t + 1} \end{cases}$

We have:














\(\ds x^2 - y^2\)

\(=\)







\(\ds \dfrac {2 a^2 \cos^2 t} {\paren {\sin^2 t + 1}^2} - \dfrac {2 a^2 \cos^2 t \sin^2 t} {\paren {\sin^2 t + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 a^2 \cos^2 t \paren {1 - \sin^2 t} } {\paren {\sin^2 t + 1}^2}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {2 a^2 \paren {1 - \sin^2 t}^2} {\paren {\sin^2 t + 1}^2}\)





Sum of Squares of Sine and Cosine




Then:














\(\ds x^2 + y^2\)

\(=\)







\(\ds \dfrac {2 a^2 \cos^2 t} {\paren {\sin^2 t + 1}^2} + \dfrac {2 a^2 \cos^2 t \sin^2 t} {\paren {\sin^2 t + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 a^2 \cos^2 t \paren {1 + \sin^2 t} } {\paren {\sin^2 t + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 a^2 \paren {1 - \sin^2 t} \paren {1 + \sin^2 t} } {\paren {\sin^2 t + 1}^2}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \dfrac {2 a^2 \paren {1 - \sin^2 t} } {\sin^2 t + 1}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {x^2 + y^2}^2\)

\(=\)







\(\ds 2 a^2 \dfrac {2 a^2 \paren {1 - \sin^2 t}^2 } {\paren {\sin^2 t + 1}^2}\)





squaring both sides and extracting $2 a^2$














\(\ds \)

\(=\)







\(\ds 2 a^2 \paren {x^2 - y^2}\)





from $(1)$



$\blacksquare$





