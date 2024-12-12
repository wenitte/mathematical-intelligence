# 

Source: https://proofwiki.org/wiki/Area_of_Square/Proof_3

Theorem
A square has an area of $L^2$ where $L$ is the length of a side of the square.
Thus we have that the area is a function of the length of the side:

$\forall L \in \R_{\ge 0}: \map \Area L = L^2$
where it is noted that the domain of $L$ is the set of non-negative real numbers.


Proof
Let a square have a side length $a \in \R$.
This square is equivalent to the area under the graph of $\map f x = a$ from $0$ to $a$.
Thus from the geometric interpretation of the definite integral, the area of the square will be the integral:

$\ds A = \int_0^a a \rd l$
Thus:














\(\ds A\)

\(=\)







\(\ds \int_0^a a \rd l\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {l \cdot a} 0 a\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds a \cdot a - 0 \cdot a\)




















\(\ds \)

\(=\)







\(\ds a^2\)









$\blacksquare$


Warning
This proof is circular.
The use of the definite integral to represent area is based on the fact that the area of a rectangle is the product of the rectangle's width and height.
That fact is in turn derived from this one.

However, this demonstration neatly parallels the integration based proofs of the areas of other figures, for example Area of Circle.





