# 

Source: https://proofwiki.org/wiki/Morera%27s_Theorem



Theorem
Let $D$ be a simply connected domain in $\C$.
Let $f: D \to \C$ be a continuous function.

Let $f$ be such that:

$\ds \int_\gamma \map f z \rd z = 0$
for every simple closed contour $\gamma$ in $D$

Then $f$ is analytic on $D$.


Proof
For a fixed $z_0 \in D$ and $z \in D$ we consider the function:

$\ds \map F z = \int_\gamma \map f w \rd w$
where $\gamma$ is any (simple) contour starting at $z_0$ and ending at $z$.
By Primitive of Function on Connected Domain, $F$ is a primitive of $f$.
Since $F$ is analytic and $F' = f$, we conclude that $f$ is analytic as well.
$\blacksquare$


Also see
This is the converse of the Cauchy-Goursat Theorem.


Source of Name
This entry was named for Giacinto Morera.


Sources
1977: Serge Lang: Complex Analysis




