# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_on_Connected_Domain



Theorem
Let $f: D \to \C$ be a continuous complex function, where $D$ is a connected domain.

Then the following three conditions are equivalent:

$(1): \quad$ $f$ has a primitive.
$(2): \quad$ For any two contours $C_1, C_2$ in $D$ with identical start points $z_1 \in D$ and end points $z_2 \in D$, we have:
$\ds \int_{C_1} \map f z \rd z = \int_{C_2} \map f z \rd z$
$(3): \quad$ For all closed contours $C$ in $D$, we have:
$\ds \oint_C \map f z \rd z = 0$

If the conditions hold, we can choose any $z_0 \in D$ and define a primitive $F: D \to \C$ of $f$ by:

$\ds \map F w = \int_{C_w} \map f z \rd z$
where $C_w$ is any contour in $D$ with start point $z_0$ and end point $w$.


Proof
$(1)$ implies $(2)$
If $F$ is a primitive of $f$, we have:














\(\ds \int_{C_1} \map f z \rd z\)

\(=\)







\(\ds \map F {z_2} - \map F {z_1}\)





Fundamental Theorem of Calculus for Contour Integrals














\(\ds \)

\(=\)







\(\ds \int_{C_2} \map f z \rd z\)









$\Box$


$(2)$ implies $(3)$
Let $C$ be a closed contour in $D$ with endpoints $z_0$.
Let the constant function $\gamma: \closedint 0 1 \to D$ with $\map \gamma t = z_0$ be the parameterization of a contour $C_0$.
Then:














\(\ds \oint_C \map f z \rd z\)

\(=\)







\(\ds \oint_{C_0} \map f z \rd z\)





by assumption














\(\ds \)

\(=\)







\(\ds \int_0^1 \map f {\map \gamma t} \map {\gamma'} t \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds 0\)





by Derivative of Complex Polynomial, as $\gamma$ is constant



$\Box$


$(3)$ implies $(1)$
This follows from Zero Staircase Integral Condition for Primitive.
$\Box$


Construction of a Primitive
If the conditions hold, we choose $z_0 \in D$ and define a function $F: D \to \C$ of $f$ by:

$\ds \map F w = \int_{C_w} \map f z \rd z$
where $C_w$ is any contour in $D$ with start point $z_0$ and end point $w$.
From Connected Domain is Connected by Staircase Contours, it follows that we can choose $C_w$ to be a staircase contour.
If $C_w'$ is another contour in $D$ with the same endpoints as $C_w$, then:

$\ds \int_{C_w'} \map f z \rd z = \int_{C_w} \map f z \rd z$
by condition $(2)$, so $F$ is well-defined.
From Zero Staircase Integral Condition for Primitive, it follows that $F$ is a primitive of $f$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.3$




