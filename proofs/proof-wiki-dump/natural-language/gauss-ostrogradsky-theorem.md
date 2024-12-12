# 

Source: https://proofwiki.org/wiki/Gauss-Ostrogradsky_Theorem



Theorem
Let $U$ be a subset of $\R^3$ which is compact and has a piecewise smooth boundary $\partial U$.
Let $\mathbf V: \R^3 \to \R^3$ be a smooth vector field defined on a neighborhood of $U$.

Then:

$\ds \iiint \limits_U \paren {\nabla \cdot \mathbf V} \rd v = \iint \limits_{\partial U} \mathbf V \cdot \mathbf n \rd S$
where $\mathbf n$ is the unit normal to $\partial U$, directed outwards.


Informal Proof
Let $S$ be the surface of $U$.
By definition, the surface integral of $\mathbf V$ over $S$ is therefore defined as:

$\ds \iint_S \mathbf V \cdot \mathbf n \rd S = \iint_S \mathbf V \cdot \rd \mathbf S$
where $\rd \mathbf S$ is the differential of vector area.




Let $\d v$ be an element of volume within $U$.
In the above diagram, a small cuboid has been used for convenience.

The total flux emerging from $\d v$ is:

$\operatorname {div} \mathbf V \rd v$
where in this context $\mathbf V$ is the vector quantity at the center of $\d v$.
For the face $abcd$, the positive direction of the $x$ component of $\mathbf V$ and the outward normal are in the same sense, and so the flux is positive.

Consider another small cuboid contiguous to $\d v$, shown dotted in the above diagram.
This has the same component of $\mathbf V$, but this is acting inward, and so is negative.
Hence the flux through the face of one cuboid cancels out the flux through the adjacent face of the next cuboid.
This argument can be applied by imagining a sequence of such cuboids until you reach the surface of $U$.
This is the only part of the construction we have just built which contributes to the flux through $S$.
By applying the same treatment to the surfaces of all such small elements of volume, we arrive at a total flux:

$\ds \iint_S \mathbf V \cdot \rd \mathbf S$
But at the same time we have integrated $\operatorname {div} \mathbf V \rd v$ throughout the whole of the volume of $U$.
This also measures the total flux through $S$.
Hence:














\(\ds \iint_S \mathbf V \cdot \rd \mathbf S\)

\(=\)







\(\ds \iint_S \mathbf V \cdot \mathbf n \rd S\)




















\(\ds \)

\(=\)







\(\ds \iiint \operatorname {div} \mathbf V \rd v\)




















\(\ds \)

\(=\)







\(\ds \iiint \nabla \cdot \mathbf V \rd v\)











Formal Proof
It suffices to prove the theorem for rectangular prisms.
The Riemann-sum nature of the triple integral then guarantees the theorem for arbitrary regions.


This article, or a section of it, needs explaining.In particular: Link to a result demonstrating the above, or explain it better hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let:

$R = \set {\tuple {x, y, z}: a_1 \le x \le a_2, b_1 \le y \le b_2, c_1 \le z \le c_2}$
and let $S = \partial R$, oriented outward. 

Then:

$S = A_1 \cup A_2 \cup A_3 \cup A_4 \cup A_5 \cup A_6$
where:

$A_1, A_2$ are those sides perpendicular to the $x$-axis
$A_3, A_4$ are those sides perpendicular to the $y$ axis
and

$A_5, A_6$ are those sides perpendicular to the $z$-axis
and in all cases the lower subscript indicates a side closer to the origin.


This article, or a section of it, needs explaining.In particular: A diagram here is requiredYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let:

$\mathbf V = M \mathbf i + N \mathbf j + P \mathbf k$
where $M, N, P: \R^3 \to \R$.

Then:














\(\ds \iiint_R \nabla \cdot \mathbf V \rd v\)

\(=\)







\(\ds \iiint_R \paren {\frac {\partial M} {\partial x} + \frac {\partial N} {\partial y} + \frac {\partial P} {\partial z} } \rd x \rd y \rd z\)




















\(\ds \)

\(=\)







\(\ds \iiint_R \frac {\partial M} {\partial x} \rd x \rd y \rd z + \iiint_M \frac {\partial N} {\partial y} \rd x \rd y \rd z + \iiint_M \frac {\partial P} {\partial z} \rd x \rd y \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_{c_1}^{c_2} \int_{b_1}^{b_2} \paren {\map M {a_2, y, z} - \map M {a_1, y, z} } \rd y \rd z\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \int_{c_1}^{c_2} \int_{a_1}^{a_2} \paren {\map N {x, b_2, z} - \map N {x, b_1, z} } \rd x \rd z\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \int_{b_1}^{b_2} \int_{a_1}^{a_2} \paren {\map P {x, y, c_2} - \map P {x, y, c_1} } \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \iint_{A_2} M \rd y \rd z - \iint_{A_1} M \rd y \rd z\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \iint_{A_4} N \rd x \rd z - \iint_{A_3} N \rd x \rd z\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \iint_{A_6} P \rd x \rd y - \iint_{A_5} P \rd x \rd y\)










We turn now to examine $\mathbf n$:  














\(\ds \mathbf n\)

\(=\)







\(\ds \tuple {-1, 0, 0}\)





on $A_1$














\(\ds \mathbf n\)

\(=\)







\(\ds \tuple {1, 0, 0}\)





on $A_2$














\(\ds \mathbf n\)

\(=\)







\(\ds \tuple {0, -1, 0}\)





on $A_3$














\(\ds \mathbf n\)

\(=\)







\(\ds \tuple {0, 1, 0}\)





on $A_4$














\(\ds \mathbf n\)

\(=\)







\(\ds \tuple {0, 0, -1}\)





on $A_5$














\(\ds \mathbf n\)

\(=\)







\(\ds \tuple {0, 0, 1}\)





on $A_6$




Hence:














\(\ds \mathbf V \cdot \mathbf n\)

\(=\)







\(\ds -M\)





on $A_1$














\(\ds \mathbf V \cdot \mathbf n\)

\(=\)







\(\ds M\)





on $A_2$














\(\ds \mathbf V \cdot \mathbf n\)

\(=\)







\(\ds -N\)





on $A_3$














\(\ds \mathbf V \cdot \mathbf n\)

\(=\)







\(\ds N\)





on $A_4$














\(\ds \mathbf V \cdot \mathbf n\)

\(=\)







\(\ds -P\)





on $A_5$














\(\ds \mathbf V \cdot \mathbf n\)

\(=\)







\(\ds P\)





on $A_6$




We also have:














\(\ds \d S\)

\(=\)







\(\ds \d y \rd z\)





on $A_1$ and $A_2$














\(\ds \d S\)

\(=\)







\(\ds \d x \rd z\)





on $A_3$ and $A_4$














\(\ds \d S\)

\(=\)







\(\ds \d x \rd y\)





on $A_5$ and $A_6$



where $\d S$ is the area element.
This is true because each side is perfectly flat, and constant with respect to one coordinate.

Hence:














\(\ds \iint_{A_2} \mathbf V \cdot \mathbf n \rd S\)

\(=\)







\(\ds \iint_{A_2} M \rd y \rd z\)









and in general:














\(\ds \sum_{i \mathop = 1}^6 \iint_{A_i} \mathbf V \cdot \mathbf n \rd S\)

\(=\)







\(\ds \iint_{A_2} M \rd y \rd z - \iint_{A_1} M \rd y \rd z + \iint_{A_4} N \rd x \rd z - \iint_{A_3} N \rd x \rd z + \iint_{A_6} P \rd x \rd y - \iint_{A_5} P \rd x \rd y\)










Hence the result:

$\ds \iiint_R \nabla \cdot \mathbf V \rd v = \iint_{\partial R} \mathbf V \cdot \mathbf n \rd S$
$\blacksquare$


Intuitive Illustration
Consider a closed surface $S$ within a body of fluid which at an arbitrary point $P$ is in motion with velocity $\mathbf V$.
The total rate of flow of fluid passing through $S$ can be found in $2$ different ways:

$(1): \quad$ By calculating $\mathbf V \cdot \rd \mathbf S$, which is the product of a small element of $S$ and the component of velocity which is perpendicular to it, and then adding all these contributions
$(2): \quad$ By investigating the divergence of an element of volume, which is the excess of the sources of fluid over its sinks per unit volume and integrating $\operatorname {div} \mathbf V \rd v$ throughout the volume enclosed by $S$.
These $2$ results are physically equivalent, because the excess fluid leaving $S$ over that entering must be because of the fluid injected into $B$ by the aggregate of sources and sinks.


Also known as
The Gauss-Ostrogradsky Theorem is also known as:

the Divergence Theorem
Gauss's Theorem
Gauss's Divergence Theorem or Gauss's Theorem of Divergence
Ostrogradsky's Theorem
the Ostrogradsky-Gauss Theorem.


Also see
Green's Theorem


Source of Name
This entry was named for Carl Friedrich Gauss and Mikhail Vasilyevich Ostrogradsky.


Historical Note
The Gauss-Ostrogradsky Theorem was first discovered by Joseph Louis Lagrange in $1762$.
It was the later independently rediscovered by Carl Friedrich Gauss in $1813$ during the course of his investigations into electromagnetism.
Mikhail Vasilyevich Ostrogradsky, who also gave the first proof of the general theorem, rediscovered it in $1826$.
It was also rediscovered by George Green in $1828$, Siméon-Denis Poisson in $1824$ and Pierre Frédéric Sarrus in $1828$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Integrals involving Vectors: $22.59$
1990: I.S. Grant and W.R. Phillips: Electromagnetism (2nd ed.) ... (previous) ... (next): Appendix $\text B$: Fields and differential operators: $\text B.1$ The Operators Div, Grad and Curl
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Gauss's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Gauss-Ostrogradsky theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Gauss's theorem
Weisstein, Eric W. "Divergence Theorem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/DivergenceTheorem.html




