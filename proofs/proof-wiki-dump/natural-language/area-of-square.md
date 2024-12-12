# 

Source: https://proofwiki.org/wiki/Area_of_Square

  This article was Featured Proof between 14 March 2009 and 22 March 2009.




Theorem
A square has an area of $L^2$ where $L$ is the length of a side of the square.
Thus we have that the area is a function of the length of the side:

$\forall L \in \R_{\ge 0}: \map \Area L = L^2$
where it is noted that the domain of $L$ is the set of non-negative real numbers.


Proof 1
Integer Side Length
In the case where $L = 1$, the statement follows from the definition of area.
If $L \in \N, L > 1$, then we can divide the square into smaller squares, each of side length one.
Since there will be $L$ squares of side length one on each side, it follows that there will be $L \cdot L = L^2$ squares of side length one.
Thus, the area of the square of side length $L$ is $L^2 \cdot 1 = L^2$.
$\Box$


Rational Side Length
Let $A$ be the area of the square $S$ with side length $L$.
If $L$ is a rational number, then:

$\exists p, q \in \N: L = \dfrac p q$
Create a square of side length $p$.
From the integer side length case, its area equals $p^2$.
Divide the sides into $q$ equal parts.
Thus the square of side length $p$ is divided into $q^2$ small squares.
As they all have side length $\dfrac p q$, each of them equals $S$.
It follows arithmetically:

$A = \dfrac {p^2} {q^2} = \paren {\dfrac p q}^2 = L^2$
$\Box$


Irrational Side Length
Let $L$ be an irrational number.
Then from Rationals are Everywhere Dense in Topological Space of Reals we know that within an arbitrarily small distance $\epsilon$ from $L$, we can find a rational number less than $L$ and a rational number greater than $L$.
In formal terms, we have:

$\forall \epsilon > 0: \exists A, B \in \Q_+: A < L < B: \left|{A - L}\right| < \epsilon, \left|{B - L}\right| < \epsilon$
Thus:

$\displaystyle \lim_{\epsilon \to 0^+} A = L$
$\displaystyle \lim_{\epsilon \to 0^+} B = L$
Since a square of side length $B$ can contain a square of side length $L$, which can in turn contain a square of side length $A$, then:

$\operatorname {area} \Box B \ge \operatorname {area} \Box L \ge \operatorname {area}\Box A$
By the result for rational numbers:

$\operatorname {area}\Box B = B^2$
$\operatorname {area}\Box A = A^2$
We also note that:

$\displaystyle \lim_{B \to L} B^2 = L^2 = \lim_{A \to L} A^2$
Thus:

$\displaystyle \lim_{B \to L} \operatorname {area} \Box B = \lim_{B \to L} B^2 = L^2$
$\displaystyle \lim_{A \to L} \operatorname {area} \Box A = \lim_{A \to L} A^2 = L^2$
Finally:

$L^2 \ge \operatorname {area}\Box L \ge L^2$
so:

$\operatorname {area}\Box L = L^2$
$\blacksquare$


Proof 2
Let $\Box ABCD$ be a square whose side $AB$ is of length $L$.
Let $\Box EFGH$ be a square whose side $EF$ is of length $1$.


From the Axioms of Area, the area of $\Box EFGH$ is $1$.
By definition, $AB : EF = L : 1$.
From Similar Polygons are composed of Similar Triangles, the ratio of the areas of $\Box ABCD$ to $\Box EFGH$ is the duplicate ratio of the ratio of $AB$ to $EF$.
Thus by definition of duplicate ratio:

$\Box ABCD : \Box EFGH = \left({AB : EF}\right)^2$
That is:

$\dfrac {\Box ABCD} {\Box EFGH} = \left({\dfrac L 1}\right)^2 = L^2$
That is, the area of $\Box ABCD$ has $L^2$ as many units as $\Box EFGH$.
Hence the result.
$\blacksquare$


Proof 3
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


Sources
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $2 \text B$: The Meaning of the Term Function of One Independent Variable: Example $2.2$




