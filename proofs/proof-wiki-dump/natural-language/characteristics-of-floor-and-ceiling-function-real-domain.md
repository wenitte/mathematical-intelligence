# 

Source: https://proofwiki.org/wiki/Characteristics_of_Floor_and_Ceiling_Function/Real_Domain



Theorem
Let $f: \R \to \Z$ be an integer-valued function which satisfies both of the following:

$(1): \quad \map f {x + 1} = \map f x + 1$
$(2): \quad \forall n \in \Z_{> 0}: \map f x = \map f {\dfrac {\map f {n x} } n}$

Then it is not necessarily the case that either:

$\forall x \in \R: \map f x = \floor x$
or:

$\forall x \in \R: \map f x = \ceiling x$


Proof
Let $h: \R \to \R$ be a real function such that for all $x, y \in \R$:




\(\text {(3)}: \quad\)









\(\ds \map h 1\)

\(=\)







\(\ds 1\)










\(\text {(4)}: \quad\)









\(\ds \map h x + \map h y\)

\(=\)







\(\ds \map h {x + y}\)










Consider the integer-valued function $f: \R \to \Z$ defined as:

$\map f x = \floor {\map h x}$
We claim that $f$ satisfies $(1)$ and $(2)$.

Proof for $(1)$:
We have that:

$\map h {x + 1} = \map h x + \map h 1 = \map h x + 1$
by $(4)$ and $(3)$.
It follows that:














\(\ds \map f {x + 1}\)

\(=\)







\(\ds \floor {\map h {x + 1} }\)




















\(\ds \)

\(=\)







\(\ds \floor {\map h x + 1}\)




















\(\ds \)

\(=\)







\(\ds \floor {\map h x} + 1\)




















\(\ds \)

\(=\)







\(\ds \map f x + 1\)









Thus $h$ satisfies $(1)$.
$\Box$

Proof for $(2)$:
Since $h$ satisfies $(4)$, it is an additive function.
By $(3)$ and since Additive Function is Linear for Rational Factors, this implies

$(5): \quad \map h x = x$
for all $x \in \Q$.

Let $x \in \R$. 
Define $\alpha$ and $\beta$ by

$(6): \quad \alpha := \floor {\map h x} = \map f x$
$(7): \quad \beta := \map h x - \alpha$

Then:




\(\text {(8)}: \quad\)









\(\ds 0\)

\(\le\)







\(\ds \beta < 1\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)







\(\ds n \beta < n\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)







\(\ds \floor {n \beta} \le n - 1\)










and:














\(\ds \map f {\dfrac {\map f n x} n}\)

\(=\)







\(\ds \floor {\map h {\dfrac {\floor {\map h {n x} } } n} }\)




















\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\floor {n \map h x} } n}\)





$(5)$, Additive Function is Linear for Rational Factors














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {\floor {n \paren {\alpha + \beta} } } n}\)





$(6)$, $(7)$














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {n \alpha + \floor {n \beta} } n}\)





as $\alpha \in \Z$














\(\ds \)

\(=\)







\(\ds \alpha + \floor {\dfrac 1 n \floor {n \beta} }\)




















\(\ds \)

\(=\)







\(\ds \floor {\map h x}\)





$(8)$














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of $\map f x$



Thus $h$ satisfies $(2)$.
$\Box$

We have that:

Rational Numbers form Subfield of Real Numbers
Vector Space on Field Extension is Vector Space
Thus we can consider $\R$ as a vector space over $\Q$.

We also have that Square Root of 2 is Irrational
Hence the set $\set {1, \sqrt 2}$ is a linearly independent set in the vector space $\R$.

From Vector Space has Basis Between Linearly Independent Set and Finite Spanning Set:

there exists a basis $B$ of $\R$ which includes $1$ and $\sqrt 2$.
Then each $x \in \R$ can be written as a finite sum:

$x := \ds \sum_{i \mathop = 1}^n b_i x_i$
where $b_i \in B$, $x_i \in \Q$ and $n$ depends on $x$.

Let $f$ be defined as:

$\map f x = \ds \sum_{i \mathop = 1}^n \map f {b_i} x_i$
From Expression of Vector as Linear Combination from Basis is Unique, we have:

$\map f x + \map f y = \map f {x + y}$
no matter how $\map f b$ is defined for $b \in B$.
Let $f$ be further defined as:

$\map f 1 = 1$
and, for example:

$\map f {\sqrt 2} = 4$
Then $f$ satisfies $(1)$ and $(2)$.
But:

$\map f {\sqrt 2} \notin \set {1, 2}$
$\blacksquare$


Historical Note
The limitation of Characteristics of Floor and Ceiling Function to rational numbers was demonstrated by Georg Karl Wilhelm Hamel in $1905$.


Sources
1905: Georg Hamel: Eine Basis aller Zahlen und die unstetigen Lösungen der Funktionalgleichung: $f(x+y)=f(x)+f(y)$ (Math. Ann. Vol. 60: pp. 459 – 462)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $49$




