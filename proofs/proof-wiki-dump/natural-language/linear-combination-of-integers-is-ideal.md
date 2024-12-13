# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Integers_is_Ideal

Theorem
Let $a, b$ be any integers.
Let $\Bbb S = \set {a x + b y: x, y \in \Z}$.

Then the algebraic structure:

$\struct {\Bbb S, +, \times}$
is an ideal of $\Z$.


Proof
From the definition of integer combination (or just because it's obvious):

$\Bbb S \subseteq \Z$
and clearly:

$\Bbb S \ne \O$
as $a 0 + b 0 = 0 \in \Bbb S$.

Let $w_1, w_2 \in \Bbb S$:

$w_1 = a x_1 + b y_1, w_2 = a x_2 + b y_2$
Then $w_1 + \paren {-w_2} = a \paren {x_1 - x_2} + b \paren {y_1 - y_2} \in \Bbb S$ as $x_1 - x_2 \in \Z$ and $y_1 - y_2 \in \Z$.

Let $r \in \Z$.
Then:

$w_1 \times r = a x_1 r + b y_1 r = a \paren {x_1 r} + b \paren {y_1 r} \in \Bbb S$
$r \times w_1 = r a x_1 + r b y_1 = \paren {r x_1} a + \paren {r y_1} b \in \Bbb S$

The result follows from Test for Ideal.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 21$. Ideals: Example $35$




