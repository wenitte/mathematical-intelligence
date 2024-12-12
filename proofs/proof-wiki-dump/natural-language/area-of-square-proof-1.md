# 

Source: https://proofwiki.org/wiki/Area_of_Square/Proof_1



Theorem
A square has an area of $L^2$ where $L$ is the length of a side of the square.
Thus we have that the area is a function of the length of the side:

$\forall L \in \R_{\ge 0}: \map \Area L = L^2$
where it is noted that the domain of $L$ is the set of non-negative real numbers.


Proof
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





