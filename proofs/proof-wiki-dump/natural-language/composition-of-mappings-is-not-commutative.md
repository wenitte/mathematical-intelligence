# 

Source: https://proofwiki.org/wiki/Composition_of_Mappings_is_not_Commutative



Theorem
The composition of mappings is not in general a commutative binary operation:

$f_2 \circ f_1 \ne f_1 \circ f_2$


Proof
Proof by Counterexample

Let $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_3$ be mappings.
First note that unless $S_1 = S_3$ then $f_2 \circ f_1$ is not even defined.
So in that case $f_2 \circ f_1$ is definitely not the same thing as $f_1 \circ f_2$.

So, let us suppose $S_1 = S_3$ and so we define $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_1$.
If $S_1 \ne S_2$ then:

$f_2 \circ f_1: S_1 \to S_1$
$f_1 \circ f_2: S_2 \to S_2$
and so by Equality of Mappings they are unequal because their domains and codomains are different.

Finally, suppose $S_1 = S_2$, and consider the following.

$S_1 = S_2 = \set {a, b}$
$f_1 = \set {\tuple {a, a}, \tuple {b, a} }$
$f_2 = \set {\tuple {a, b}, \tuple {b, b} }$
It is straightforward to check that $f_1$ and $f_2$ are mappings, and that:

$f_1 \circ f_2 = \set {\tuple {a, b}, \tuple {b, b} }$
$f_2 \circ f_1 = \set {\tuple {a, a}, \tuple {b, a} }$
Thus, even in this limitingly simple case, we see that:

$f_2 \circ f_1 \ne f_1 \circ f_2$
$\blacksquare$


Examples
Arbitrary Example 1
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = x^2 + 1$
Let $g: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map g x = x + 1$

Then the compositions of $f$ with $g$ are:










\(\ds f \circ g: \R \to \R: \, \)



\(\ds \map {\paren {f \circ g} } x\)

\(=\)







\(\ds \paren {x + 1}^2 + 1\)

\(\ds = x^2 + 2 x + 2\)














\(\ds g \circ f: \R \to \R: \, \)



\(\ds \map {\paren {g \circ f} } x\)

\(=\)







\(\ds \paren {x^2 + 1} + 1\)

\(\ds = x^2 + 2\)







and it is immediately seen that:

$g \circ f \ne f \circ g$


Sum of Squares not Square of Sum
Let $f: \R \times \R \to \R$ be the real-valued function defined as:

$\forall \tuple {x, y} \in \R \times \R: \map f {x, y} = x^2 + y^2$
Let $g: \R \times \R \to \R$ be the real-valued function defined as:

$\forall \tuple {x, y} \in \R \times \R: \map g {x, y} = x + y$
Let $h: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map g x = x^2$

Then we have that:

$\map h {\map g {x, y} } = \paren {x + y}^2$
while:

$\map g {\map h x, \map h y} = x^2 + y^2 = \map f {x, y}$

Hence the diagram:
$\quad\quad \begin{xy} \xymatrix@L+2mu@+1em{
\R \times \R \ar[r]^*{g}
\ar@{-->}[rd]_*{f}
&
\R \ar[d]^*{h}
\\ &
\R
}\end{xy}$
is not a commutative diagram.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.4$. Product of mappings: Example $50$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Remark $3$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 7.16 \ (3)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 24$: Composition of Mappings
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): composite function (function of a function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): composite function (function of a function)




