# 

Source: https://proofwiki.org/wiki/Inverse_of_Circle_Not_Through_Inversion_Center



Theorem
Let $\CC$ be a circle in the plane on center $O$.
Let $T : X \to Y$ be an inversive transformation with $\CC$ as the inversion circle. 
Then $O$ is the inversion center.
Let $K$ be an arbitrary circle distinct from $\CC$ and not through $O$.

Then the image under $T$ of all the points on $K$ lie on the same circle, distinct from both $K$ and $\CC$.


Proof 1
Let $AB$ be the diameter of $K$, drawn so that $OAB$ are collinear points.
Let $A'$ and $B'$ be the image of $A$ and $B$ under $T$.
Let $K'$ be the circle with diameter $A'B'$
Let $C$ be an otherwise arbitrary point, lying on $K$.

















\(\ds OA \cdot OA'\)

\(=\)







\(\ds OB \cdot OB' = OC \cdot OC'\)





Definition of $T$














\(\ds OA : OC\)

\(=\)







\(\ds OC' : OA'\)





rearranging














\(\ds \angle BOC\)

\(=\)







\(\ds \angle BOC\)





shared














\(\ds \triangle OA'C'\)

\(\sim\)







\(\ds \triangle OCA\)





Triangles with One Equal Angle and Two Sides Proportional are Similar








\(\ds \leadsto \ \ \)





\(\ds \angle OA'C'\)

\(=\)







\(\ds \angle OCA = \alpha\)
























\(\ds OB : OC\)

\(=\)







\(\ds OC' : OB'\)





rearranging














\(\ds \triangle OC'B'\)

\(\sim\)







\(\ds \triangle OBC\)





Triangles with One Equal Angle and Two Sides Proportional are Similar








\(\ds \leadsto \ \ \)





\(\ds \angle OC'B'\)

\(=\)







\(\ds \angle OBC = \beta\)














\(\ds \leadsto \ \ \)





\(\ds \gamma\)

\(=\)







\(\ds \angle OCB\)




















\(\ds \gamma\)

\(=\)







\(\ds \alpha + \angle ACB\)
























\(\ds \angle ACB\)

\(=\)







\(\ds 90^{\circ}\)





Thales' Theorem














\(\ds \gamma\)

\(=\)







\(\ds \alpha + \angle A'C'B'\)





External Angle of Triangle equals Sum of other Internal Angles














\(\ds \alpha + \angle A'C'B'\)

\(=\)







\(\ds \alpha + \angle ACB\)





Common Notion $1$














\(\ds \angle A'C'B'\)

\(=\)







\(\ds \angle ACB\)





Common Notion $3$








\(\ds \leadsto \ \ \)





\(\ds \angle A'C'B'\)

\(=\)







\(\ds 90^{\circ}\)





Common Notion $1$



By converse to Thales' Theorem:

$C'$ is on circle with diameter $A'B'$
We note two other arrangements both covered by this proof.

$K$ outside and tangent to $\CC$
$K$ cuts $\CC$ but not through $O$
The third possibility is simply the inverse of an inversive transformation.

$K$ inside $\CC$ and not through $O$

But this follows, since $T$ is an involution
$\blacksquare$


Proof 2

Let the radius of $K$ be $k$.
Draw an arbitrary straight line from $O$ cutting $K$ at $A$ and $B$.  
Let $A'$ be the image of $A$ under $T$.
Let $B'$ be the image of $B$ under $T$.
There are two cases:  

$(1): \quad$ The inversion circle $C$ may pass through straight line $OAB$ outside $K$
$(2): \quad$ $C$ may cut $K$ and pass inside it.
The second possibility is illustrated using a dotted line.
The proof is the same for both.
Note:  the inversion circle is not shown, for clarity.
Let:

$OA = a$
$OB = b$
$OA' = a'$
$OB' = b'$
$OM = m$
Let $t$ be the length of the tangent line to $K$ from $O$.














\(\ds a a'\)

\(=\)







\(\ds b b' = r^2\)





Definition of $T$














\(\ds ab\)

\(=\)







\(\ds t^2\)





Tangent Secant Theorem














\(\ds \dfrac {a'} b\)

\(=\)







\(\ds \dfrac {b'} a = \dfrac {r^2} {t^2}\)





dividing by $t^2$



Let the constant:

$\dfrac {r^2} {t^2} = c^2$

Draw $A'Q \parallel BM$.
Let $OQ = q$.
Let $A'Q = p$.
By Equiangular Triangles are Similar:

$\triangle OQA' \sim \triangle OMB$
$\leadsto \dfrac q m = \dfrac {a'} b = c^2$
Also

$\leadsto \dfrac p k = \dfrac {a'} b = c^2$
Substituting:

$q = m c^2$
and

$p = k c^2$
Since the right hand side of both of these are constant, for all positions of $A$ and $B$:

$Q$ is the same point on $OM$
The length $A'Q = p$ is constant.
$A'$ is always the same distance from $Q$.
Recall:

$\dfrac {b'} a = c^2$
So mutatis mutandis:

$B'Q = p$
$B'$ is also always the same distance from $Q$.
So $B'Q = A'Q$.
It follows that $A'$ and $B'$ both lie on the same circle.
$\blacksquare$


Sources
1996: Richard Courant, Herbert Robbins and Ian Stewart: What is Mathematics? (2nd ed.): Chapter $\text{III}$ / $\text{II}$ Section $4$: "Geometrical Transformations. Inversion."
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): inversion: 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): inversion: 1.




