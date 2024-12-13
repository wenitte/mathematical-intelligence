# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Formula_for_Pi



Theorem
$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$
This sequence is A003881 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

That is:

$\ds \pi = 4 \sum_{k \mathop \ge 0} \paren {-1}^k \frac 1 {2 k + 1}$


Elementary Proof
First we note that:

$(1): \quad \dfrac 1 {1 + t^2} = 1 - t^2 + t^4 - t^6 + \cdots + t^{4 n} - \dfrac {t^{4 n + 2} } {1 + t^2}$
which is demonstrated here.

Now consider the real number $x \in \R: 0 \le x \le 1$.
We can integrate expression $(1)$ with respect to $t$ from $0$ to $x$:

$(2): \quad \ds \int_0^x \frac {\d t} {1 + t^2} = x - \frac {x^3} 3 + \frac {x^5} 5 - \frac {x^7} 7 + \cdots + \frac {x^{4 n + 1} } {4 n + 1} - \map {R_n} x$
where:

$\ds \map {R_n} x = \int_0^x \frac {t^{4 n + 2} } {1 + t^2} \rd t$
From Square of Real Number is Non-Negative we have that:

$t^2 \ge 0$
and so:

$1 \le 1 + t^2$

From Relative Sizes of Definite Integrals, we have:

$\ds 0 \le \map {R_n} x \le \int_0^x t^{4 n + 2} \rd t$
that is:

$0 \le \map {R_n} x \le \dfrac {x^{4n + 3} } {4 n + 3}$

But as $0 \le x \le 1$ it is clear that:

$\dfrac {x^{4 n + 3} } {4 n + 3} \le \dfrac 1 {4 n + 3}$
So:

$0 \le \map {R_n} x \le \dfrac 1 {4 n + 3}$
From Basic Null Sequences and the Squeeze Theorem, $\dfrac 1 {4 n + 3} \to 0$ as $n \to \infty$.

This leads us directly to:

$(3): \quad \ds \int_0^x \frac {\d t} {1 + t^2} = x - \frac {x^3} 3 + \frac {x^5} 5 - \frac {x^7} 7 + \frac {x^9} 9 \cdots$

But from Derivative of Arctangent Function, we also have that:

$\dfrac \d {\d x} \arctan t = \dfrac 1 {1 + t^2}$
and thence from the Fundamental Theorem of Calculus we have:

$\ds \arctan x = \int_0^x \frac {\d t} {1 + t^2}$

From $(3)$ it follows immediately that:

$(4): \quad \arctan x =  x - \dfrac {x^3} 3 + \dfrac {x^5} 5 - \dfrac {x^7} 7 + \dfrac {x^9} 9 \cdots$

Now all we need to do is plug $x = 1$ into $(4)$.
$\blacksquare$


Leibniz's Proof

The area $OAT$ is a quarter-circle whose area is $\dfrac \pi 4$ by Area of Circle.
Now consider the area $C$ of the segment $OPQT$, bounded by the arc $OT$ and the chord $OT$.

Consider the area $OPQ$, bounded by the line segments $OP$ and $OQ$ and the arc $PQ$.
As $P$ and $Q$ approach each other, the arc $PQ$ tends towards the straight line segment $\d s = PQ$.
We can therefore consider the area $OPQ$ as a triangle.
We extend the line segment $PQ$ and drop a perpendicular $OR$ to $O$.
Using Area of Triangle in Terms of Side and Altitude, we see that the area $\d C$ of $\triangle OPQ$ is given by:

$\d C = \triangle OPQ = \dfrac {OR \cdot PQ} 2 = \dfrac {OR \cdot \d s} 2$
We also note from elementary Euclidean geometry that $\triangle ORS$ is similar to the small triangle on $PQ$.
Thus:

$\dfrac {\d s} {\d x} = \dfrac {OS} {OR} \iff OR \cdot \d s = OS \cdot \d x$
Thus:

$\d C = \dfrac {OS \cdot \d x} 2 = \dfrac {y \rd x} 2$
where $y = OS$.
We set the horizontal coordinate of $P$ as equal to $x$.
Thus the total area $C$ is equal to the total of all the areas of these small triangles as $x$ increases from $0$ to $1$.
So:

$\ds C = \int \rd C = \frac 1 2 \int_0^1 y \rd x$
Now we use Integration by Parts to swap $x$ and $y$:

$\ds C = \intlimits {\frac 1 2 x y} 0 1 - \frac 1 2 \int_0^1 x \rd y = \frac 1 2 - \frac 1 2 \int_0^1 x \rd y$
It can be seen that the limits on this new integral have to be $0$ and $1$ from the geometry of the situation.
Now we note that:

$y = \tan \dfrac \phi 2$
From Double Angle Formula for Cosine: Corollary $2$:

$x = 1 - \cos \phi = 2 \sin^2 \dfrac \phi 2$
Thus:














\(\ds \tan^2 \frac \phi 2\)

\(=\)







\(\ds \frac {\sin^2 \frac \phi 2}{\cos^2 \frac \phi 2}\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \sin^2 \frac \phi 2 \sec^2 \frac \phi 2\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \sin^2 \frac \phi 2 \paren {1 + \tan^2 \frac \phi 2}\)





Difference of Squares of Secant and Tangent



and so:

$\dfrac x 2 = \dfrac {y^2} {1 + y^2}$
Using Sum of Infinite Geometric Sequence:

$\dfrac {y^2} {1 + y^2} = y^2 - y^4 + y^6 - y^8 + \cdots$
This gives us:














\(\ds C\)

\(=\)







\(\ds \frac 1 2 - \int_0^1 \paren {y^2 - y^4 + y^6 - y^8 + \cdots} \d y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \intlimits {\frac {y^3} 3 - \frac {y^5} 5 + \frac {y^7} 7 - \frac {y^9} 9 + \cdots} 0 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \paren {\frac 1 3 - \frac 1 5 + \frac 1 7 - \frac 1 9 + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \frac 1 9 - \cdots\)










Remember, $C$ is the area of the segment $OPQT$.
Now we add to it the area of $\triangle OTA$, which trivially equals $\dfrac 1 2$, to get the area of the quarter circle which we know as equal to $\dfrac \pi 4$.
Putting it all together, this gives us:

$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots$
$\blacksquare$


Proof by Taylor Expansion
From Power Series Expansion for Real Arctangent Function, we obtain:

$\arctan x = x - \dfrac {x^3} 3 + \dfrac {x^5} 5 - \dfrac {x^7} 7 + \dfrac {x^9} 9 - \cdots$
Substituting $x = 1$ gives the required result.
$\blacksquare$


Proof by Dirichlet Beta Function
Recall the Dirichlet beta function:

$\ds \map \beta s = \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}^s}$
From Dirichlet Beta Function at Odd Positive Integers, we obtain:

$\map \beta {2 n + 1} = \paren {-1}^n \dfrac {E_{2 n} \pi^{2 n + 1} } {4^{n + 1} \paren {2 n}!}$
Therefore, setting $n = 0$ above:














\(\ds \map \beta 1\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}^1}\)





Definition of Dirichlet Beta Function














\(\ds \)

\(=\)







\(\ds \paren {-1}^0 \dfrac {E_0 \pi } {4 \times 0!}\)





Dirichlet Beta Function at Odd Positive Integers














\(\ds \)

\(=\)







\(\ds \frac \pi 4\)





Definition of Euler Numbers and Factorial of Zero



$\blacksquare$


Proof by Digamma Function













\(\ds 2 b \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {a + b k}\)

\(=\)







\(\ds \map \psi {\dfrac a {2 b} + 1} - \map \psi {\dfrac a {2 b} + \dfrac 1 2}\)





Reciprocal times Derivative of Gamma Function: Corollary $2$








\(\ds \leadsto \ \ \)





\(\ds -4 \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \map \psi {\dfrac 1 4 + 1} - \map \psi {\dfrac 1 4 + \dfrac 1 2}\)





$a := 1$ and $b := 2$








\(\ds \leadsto \ \ \)





\(\ds 4 \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \map \psi {\dfrac 3 4} - \map \psi {\dfrac 5 4}\)





multiplying both sides by $-1$














\(\ds \)

\(=\)







\(\ds \paren {-\gamma - 3 \ln 2 + \dfrac \pi 2} - \paren {-\gamma - 3 \ln 2 - \dfrac \pi 2 + 4}\)





Digamma Function of Three Fourths and Digamma Function of Five Fourths














\(\ds \)

\(=\)







\(\ds \pi - 4\)





grouping terms








\(\ds \leadsto \ \ \)





\(\ds 4 + 4 \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \pi\)





adding $4$ to both sides








\(\ds \leadsto \ \ \)





\(\ds 4 \times \paren {1 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \cdots}\)

\(=\)







\(\ds \pi\)














\(\ds \leadsto \ \ \)





\(\ds 4 \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \pi\)









$\blacksquare$


Also known as
Some sources refer to this as Gregory's series for $\pi$.


Also see
Gregory Series


Source of Name
This entry was named for Gottfried Wilhelm von Leibniz.


Historical Note
Leibniz discovered his formula for $\pi$ in $1673$.
He took great pleasure and pride in this discovery.

It's as if, by this expansion, the veil which hung over that strange number had been drawn aside.
-- Konrad Hermann Theodor Knopp

Simple as it is, Leibniz's Formula for Pi is inefficient, in that it needs hundreds of terms in order to calculate a few decimal places.

Some sources ascribe this formula to James Gregory.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VII}$: Master of All Trades
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.15$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Leibniz's series
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 78539 \, 81 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$




