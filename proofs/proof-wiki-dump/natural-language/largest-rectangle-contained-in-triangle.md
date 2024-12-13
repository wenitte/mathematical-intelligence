# 

Source: https://proofwiki.org/wiki/Largest_Rectangle_Contained_in_Triangle

Theorem
Let $T$ be a triangle.
Let $R$ be a rectangle contained within $T$.
Let $R$ have the largest area possible for the conditions given.

Then:

$(1): \quad$ One side of $R$ is coincident with part of one side of $T$, and hence two vertices lie on that side of $T$
$(2): \quad$ The other two vertices of $R$ bisect the other two sides of $T$
$(3): \quad$ The area of $R$ is equal to half the area of $T$.


Proof
Note that a rectangle is a parallelogram.
By Largest Parallelogram Contained in Triangle, the area of $R$ cannot exceed half the area of $T$.
Hence we only need to show that when the first two conditions above are satisfied, the area of $R$ is exactly half the area of $T$.

Consider the diagram below.


Since $AD = DC$ and $CE = EB$:














\(\ds AF\)

\(=\)







\(\ds FH\)




















\(\ds HG\)

\(=\)







\(\ds GB\)




















\(\ds DF\)

\(=\)







\(\ds \frac 1 2 GH\)




















\(\ds \triangle CDE\)

\(\cong\)







\(\ds \triangle HDE\)




















\(\ds \triangle ADF\)

\(\cong\)







\(\ds \triangle HDF\)




















\(\ds \triangle BGE\)

\(\cong\)







\(\ds \triangle HGE\)









and so the area of $R$ is equal to the area of the parts of $T$ not included in $R$.
That is, the area of $R$ is exactly half the area of $T$.
$\blacksquare$





