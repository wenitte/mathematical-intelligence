# 

Source: https://proofwiki.org/wiki/Inverse_of_Circle_Not_Through_Inversion_Center/Proof_2

Theorem
Let $\CC$ be a circle in the plane on center $O$.
Let $T : X \to Y$ be an inversive transformation with $\CC$ as the inversion circle. 
Then $O$ is the inversion center.
Let $K$ be an arbitrary circle distinct from $\CC$ and not through $O$.

Then the image under $T$ of all the points on $K$ lie on the same circle, distinct from both $K$ and $\CC$.


Proof

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




