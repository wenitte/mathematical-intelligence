# 

Source: https://proofwiki.org/wiki/Complex_Numbers_cannot_be_Ordered_Compatibly_with_Ring_Structure

  This article was Featured Proof between 10th December 2016 and 6th November 2017.


Theorem
Let $\struct {\C, +, \times}$ be the field of complex numbers.
There exists no total ordering on $\struct {\C, +, \times}$ which is compatible with the structure of $\struct {\C, +, \times}$.


Proof 1
Aiming for a contradiction, suppose there exists a relation $\preceq$ on $\C$ which is ordering compatible with the ring structure of $\C$.
That is:

$(1): \quad z \ne 0 \implies 0 \prec z \lor z \prec 0$, but not both
$(2): \quad 0 \prec z_1, z_2 \implies 0 \prec z_1 z_2 \land 0 \prec z_1 + z_2$
By Totally Ordered Ring Zero Precedes Element or its Inverse, $(1)$ can be replaced with:

$(1'): \quad z \ne 0 \implies 0 \prec z \lor 0 \prec -z$, but not both.

As $i \ne 0$, it follows that:

$0 \prec i$ or $0 \prec -i$

Suppose $0 \prec i$.
Then:














\(\ds 0\)

\(\prec\)







\(\ds i \times i\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -1\)





Definition 1 of Complex Number




Otherwise, suppose $0 \prec \paren {-i}$.
Then:














\(\ds 0\)

\(\prec\)







\(\ds \paren {-i} \times \paren {-i}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -1\)





Definition 1 of Complex Number




Thus by Proof by Cases:

$0 \prec -1$
Thus it follows that:














\(\ds 0\)

\(\prec\)







\(\ds \paren {-1} \times \paren {-1}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 1\)










Thus both:

$0 \prec -1$
and:

$0 \prec 1$

This contradicts hypothesis $(1')$:

$(1): \quad z \ne 0 \implies 0 \prec z \lor 0 \prec -z$, but not both

Hence, by Proof by Contradiction, there can be no such ordering.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose such a total ordering $\preceq$ exists.

By the definition of a total ordering, $\preceq$ is connected.
That is:

$0 \preceq i \lor i \preceq 0$
Using Proof by Cases, we will prove that:

$0 \preceq -1$


Case 1
Assume that $0 \preceq i$.
By definition of an ordering compatible with the ring structure of $\C$:

$\forall x, y \in \C: \left({0 \preceq x \land 0 \preceq y}\right) \implies 0 \preceq x \times y$
Substituting $x = i$ and $y = i$ gives:

$0 \preceq i \times i$
Simplifying:

$0 \preceq -1$
which is the result required.


Case 2
Assume that $i \preceq 0$.
By definition of compatibility with addition:

$\forall x, y, z \in \C: x \preceq y \implies \paren {x + z} \preceq \paren {y + z}$
Substituting $x = i$, $y = 0$, $z = -i$ gives:

$i + \paren {-i} \preceq 0 + \paren {-i}$
Simplifying:

$0 \preceq -i$
By definition of an ordering compatible with the ring structure of $\C$:

$\forall x, y \in \C: \paren {0 \preceq x \land 0 \preceq y} \implies 0 \preceq x \times y$
Substituting $x = -i$ and $y = -i$ gives:

$0 \preceq \paren {-i} \times \paren {-i}$
Simplifying:

$0 \preceq -1$

This has been demonstrated to follow from both cases, and so by Proof by Cases:

$0 \preceq -1$
$\Box$

By definition of an ordering compatible with the ring structure of $\C$:

$\forall x, y \in \C: \paren {0 \preceq x \land 0 \preceq y} \implies 0 \preceq x \times y$
Substituting $x = -1$ and $y = -1$:

$0 \preceq \paren {-1} \times \paren {-1}$
Simplifying:

$0 \preceq 1$
By definition of compatibility with addition:

$\forall x, y, z \in \C: x \preceq y \implies \paren {x + z} \preceq \paren {y + z}$
Substituting $x = 0$, $y = 1$, $z = -1$ gives:

$0 + \paren {-1} \preceq 1 + \paren {-1}$
Simplifying:

$-1 \preceq 0$

From the definition of ordering:

$\forall a, b \in \C: \paren {a \preceq b \land b \preceq a} \implies a = b$
Substituting $a = -1$ and $b = 0$ gives:

$-1 = 0$
which is a contradiction.
Hence, from Proof by Contradiction, there can be no such ordering.
$\blacksquare$


Proof 3
From Complex Numbers form Integral Domain, $\struct {\C, +, \times}$ is an integral domain.

Aiming for a contradiction, suppose that $\struct {\C, +, \times}$ can be ordered.
Thus, by definition, it possesses a (strict) positivity property $P$.
Then from Strict Positivity Property induces Total Ordering, let $\le$ be the total ordering induced by $P$.
From Unity of Ordered Integral Domain is Strictly Positive:

$1$ is strictly positive.
Thus by strict positivity, axiom $3$:

$-1$ is not strictly positive.

Consider the element $i \in \C$.
By definition of strict positivity, axiom $3$, either:

$i$ is strictly positive
or:

$-i$ is strictly positive.

Suppose $i$ is strictly positive.
Then by Square of Non-Zero Element of Ordered Integral Domain is Strictly Positive:

$i^2 = -1$ is strictly positive.

Similarly, suppose $-i$ is strictly positive.
Then by Square of Non-Zero Element of Ordered Integral Domain is Strictly Positive:

$\paren {-i}^2 = -1$ is strictly positive.

In both cases we have that $-1$ is strictly positive.
But it has already been established that $-1$ is not strictly positive.

Hence, by Proof by Contradiction, there can be no such ordering.
$\blacksquare$


Also presented as
Some sources word this result in the following form:

As applied to complex numbers, the phrases "greater than" or "less than" have no meaning. Inequalities can only occur in relations between the moduli of complex numbers.
This tells only part of the story.
By Zermelo's Well-Ordering Theorem, it is possible to apply an ordering of some kind upon $\C$.
Unfortunately, as is proven here, such an ordering would not actually be compatible with the structure of $\struct {\C, +, \times}$, and so of little practical use.


Historical Note
The fact that Complex Numbers cannot be Ordered Compatibly with Ring Structure was realized by Leonhard Paul Euler.


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 1$. Complex Numbers: $\text {(iii)}$ The fundamental operations
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 1.2$. The Algebraic Theory
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $-1$ and $i$
1990: H.A. Priestley: Introduction to Complex Analysis (revised ed.) ... (previous) ... (next): $1$ The complex plane: Complex numbers $\S 1.4$ Inequalities
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $-1$ and $i$




