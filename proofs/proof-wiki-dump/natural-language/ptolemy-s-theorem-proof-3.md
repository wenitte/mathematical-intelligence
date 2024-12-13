# 

Source: https://proofwiki.org/wiki/Ptolemy%27s_Theorem/Proof_3

Theorem
Let $ABCD$ be a cyclic quadrilateral.
Then:

$AB \times CD + AD \times BC = AC \times BD$


Proof

Let an arbitrary circle $K$ be drawn in the plane.
Let $A$, $B$, $C$, and $D$ be arbitrary points on $K$.
By definition, $\Box ABCD$ is a cyclic quadrilateral.

We are to show that $AB \cdot CD + BC \cdot AD = AC \cdot BD$.

Let $T$ be an inversive transformation such that:

the inversion center of $T$ is $D$
the inversion circle $O$ for $T$ is chosen such that $K$ is completely inside $O$
the radius of $O$ is $r$.
Let $A'$, $B'$, and $C'$ be the images of $A$, $B$, and $C$ under $T$ respectively.
By Inverse of Circle Through Inversion Center is Straight Line Not Through Inversion Center:

$A'$, $B'$ and $C'$ are collinear.





\(\text {(a)}: \quad\)









\(\ds AD \cdot A'D\)

\(=\)







\(\ds r^2\)





Definition of Inversive Transformation




\(\text {(b)}: \quad\)









\(\ds BD \cdot B'D\)

\(=\)







\(\ds r^2\)





Definition of Inversive Transformation




\(\text {(c)}: \quad\)









\(\ds CD \cdot C'D\)

\(=\)







\(\ds r^2\)





Definition of Inversive Transformation


















\(\ds AD \cdot A'D\)

\(=\)







\(\ds BD \cdot B'D\)





Common Notion $1$ from $\text {(a)}$ and $\text {(b)}$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {AD} {BD}\)

\(=\)







\(\ds \dfrac {B'D} {A'D}\)





dividing by $A'D \cdot BD$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \triangle BAD\)

\(\sim\)







\(\ds \triangle A'B'D\)





Triangles with One Equal Angle and Two Sides Proportional are Similar




From $(1)$ we establish via Triangles with Proportional Sides are Similar that:














\(\ds \triangle BAD\)

\(\sim\)







\(\ds \triangle A'B'D\)





from $(1)$














\(\ds A'B' : AB\)

\(=\)







\(\ds \dfrac {A'D} {BD}\)





Triangles with Proportional Sides are Similar




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A'B'\)

\(=\)







\(\ds AB \cdot \dfrac {A'D} {BD}\)





rearranging




and:














\(\ds \triangle BAD\)

\(\sim\)







\(\ds \triangle A'B'D\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {AD} {BD}\)

\(=\)







\(\ds \dfrac {B'D} {A'D}\)










\(\text {(3)}: \quad\)









\(\ds AD\)

\(=\)







\(\ds BD \cdot \paren {\dfrac {B'D} {A'D} }\)





rearranging




Similarly:














\(\ds \triangle BCD\)

\(\sim\)







\(\ds \triangle C'B'D\)





mutatis mutandis from $\text {(b)}$ and $\text {(c)}$














\(\ds \dfrac {B'C'} {BC}\)

\(=\)







\(\ds \dfrac {B'D} {CD}\)





Triangles with Proportional Sides are Similar




\(\text {(4)}: \quad\)









\(\ds B'C'\)

\(=\)







\(\ds BC \cdot \paren {\dfrac {B'D} {CD} }\)










and noting the collinearity of $A'$, $B'$ and $C'$:














\(\ds \triangle ACD\)

\(\sim\)







\(\ds \triangle C'A'D\)





mutatis mutandis from $\text {(a)}$ and $\text {(c)}$














\(\ds \dfrac {A'C'} {AC}\)

\(=\)







\(\ds \dfrac {A'D} {CD}\)










\(\text {(5)}: \quad\)









\(\ds A'C'\)

\(=\)







\(\ds AC \cdot \paren {\dfrac {A'D} {CD} }\)










Finally: 














\(\ds A'B' + B'C'\)

\(=\)







\(\ds A'C'\)




















\(\ds AB \cdot \paren {\dfrac {A'D} {BD} } + BC \cdot \paren {\dfrac {B'D} {CD} }\)

\(=\)







\(\ds AC \cdot \paren {\dfrac {A'D} {CD} }\)





substituting from $(2)$, $(4)$ and $(5)$














\(\ds AB \cdot CD \cdot A'D + BC \cdot BD \cdot B'D\)

\(=\)







\(\ds AC \cdot BD \cdot A'D\)





multiplying through by $CD \cdot BD$














\(\ds AB \cdot CD + BC \cdot BD \cdot \paren {\dfrac {B'D} {A'D} }\)

\(=\)







\(\ds AC \cdot BD\)





dividing everything by $A'D$














\(\ds AB \cdot CD + BC \cdot AD\)

\(=\)







\(\ds AC \cdot BD\)





substituting for $AD$ from $(3)$



The result follows.
$\blacksquare$





