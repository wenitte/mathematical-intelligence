# 

Source: https://proofwiki.org/wiki/Largest_Parallelogram_Contained_in_Triangle



Theorem
Let $T$ be a triangle.
Let $P$ be a parallelogram contained within $T$.
Let $P$ have the largest area possible for the conditions given.

Then:

$(1): \quad$ One side of $P$ is coincident with part of one side of $T$, and hence two vertices lie on that side of $T$
$(2): \quad$ The other two vertices of $P$ bisect the other two sides of $T$
$(3): \quad$ The area of $P$ is equal to half the area of $T$.


Proof
We will first find the maximum area of $P$ when $(1)$ is satisfied, that is, when $P$ is inscribed in $T$.

Proof of $(2)$
Consider the diagram below.


Here $DEGF$ is our inscribed parallelogram $P$.

Since $FG \parallel BC$, by Equiangular Triangles are Similar:

$\triangle AFG \sim \triangle ABC$

Let $FG : BC = 1 : r = \text {Height of } \triangle AFG : \text {Height of } \triangle ABC$.
The area of $T$, which is fixed, is given by:

$\dfrac {BC \times \text {Height of } \triangle ABC} 2$
The area of $P$ is given by:














\(\ds FG \times \text {Height of } P\)

\(=\)







\(\ds \paren {BC \times \frac 1 r} \times \paren {\text {Height of } \triangle ABC \times \frac {r - 1} r}\)




















\(\ds \)

\(=\)







\(\ds \frac {BC \times \text {Height of } \triangle ABC} 2 \times \frac {2 \paren {r - 1} } {r^2}\)









which is $\dfrac {2 \paren {r - 1} } {r^2}$ of the area of $T$.

Notice that:














\(\ds 0\)

\(\le\)







\(\ds \paren {r - 2}^2\)





Square of Real Number is Non-Negative








\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(\le\)







\(\ds r^2 - 4 r + 4\)





Square of Difference








\(\ds \leadstoandfrom \ \ \)





\(\ds 4 r - 4\)

\(\le\)







\(\ds r^2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {2 \paren {r - 1} } {r^2}\)

\(\le\)







\(\ds \frac 1 2\)









Equality holds if and only if $r = 2$ for the first inequality.
Therefore the maximum of $\dfrac {2 \paren {r - 1} } {r^2}$ occurs at $r = 2$.
This implies $AF : AB = AG : AC = 1 : 2$.
Hence both sides $AB$ and $AC$ are both bisected by vertices of $P$.
$\Box$


Proof of $(3)$
At $r = 2$:

$\dfrac {2 \paren {r - 1} } {r^2} = \dfrac {2 \paren {2 - 1} } {2^2} = \dfrac 1 2$
therefore the maximum area of $P$ is equal to half the area of $T$.
$\Box$


Proof of $(1)$
Now we consider the cases where $P$ is not inscribed in $T$.
Suppose less than $3$ vertices of $P$ lie on the sides of $T$.
By constructing parallel lines to the sides of $T$, we can find a smaller triangle $T'$ that is similar to $T$, and the sides of $T'$ touches at least $3$ vertices of $P$.


In the above figure, $\triangle A'B'C'$ is our $T'$.

The case where all $4$ vertices of $P$ lie on the sides of $T'$ has been covered above.
Suppose, then, that only $3$ vertices of $P$ lie on the sides of $T'$.
We can split $T'$ using a line parallel to one of the sides of $P$ that passes through a vertex of $T'$.
We connect the base of that line to the vertex of $P$ that does not lie on the sides of $T'$.


In the figure above, we can see that $P$ has also been split into two parallelograms, both are inscribed in the two smaller triangles $\triangle XB'C'$ and $\triangle XYC'$.

By our results above:














\(\ds \text {Area of } P\)

\(\le\)







\(\ds \frac 1 2 \text {Area of } \triangle XB'C' + \frac 1 2 \text {Area of } \triangle XYC'\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 2 \text {Area of } \triangle XB'C' + \frac 1 2 \text {Area of } \triangle XA'C'\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \text {Area of } T'\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 2 \text {Area of } T\)









so the area of $P$ cannot exceed half the area of $T$.
Hence we see that half the area of $T$ is indeed the maximum area of $P$, and occurs when all three conditions above are satisfied.
$\blacksquare$


Sources
1981: Ivan Niven: Maxima and Minima without Calculus: $3.4.$ Miscellaneous Results in Geometry: Problem $3$




