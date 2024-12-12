# 

Source: https://proofwiki.org/wiki/Existence_of_Field_of_Quotients


This page has been identified as a candidate for refactoring of medium complexity.In particular: Can be split up into bitsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\struct {D, +, \circ}$ be an integral domain.

Then there exists a field of quotients of $\struct {D, +, \circ}$.


Proof
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$ and whose unity is $1_D$.


Inverse Completion is an Abelian Group
By Inverse Completion of Integral Domain Exists, we can define the inverse completion $\struct {K, \circ}$ of $\struct {D, \circ}$.

Thus $\struct {K, \circ}$ is a commutative semigroup such that:

$(1): \quad$ The identity of $\struct {K, \circ}$ is $1_D$
$(2): \quad$ Every element $x$ of $\struct {D^*, \circ}$ has an inverse $\dfrac {1_D} x$ in $\struct {K, \circ}$
$(3): \quad$ Every element of $\struct {K, \circ}$ is of the form $x \circ y^{-1}$ (which from the definition of division product, we can also denote $x / y$), where $x \in D, y \in D^*$.
It can also be noted that from Inverse Completion Less Zero of Integral Domain is Closed, $\struct {K^*, \circ}$ is closed.

Hence $\struct {K^*, \circ}$ is an abelian group.


Additive Operation on $K$
In what follows, we take for granted the rules of associativity, commutativity and distributivity of $+$ and $\circ$ in $D$.

We require to extend the operation $+$ on $D$ to an operation $+'$ on $K$, so that $\struct {K, +', \circ}$ is a field.

By Addition of Division Products, we define $+'$ as:

$\forall a, c \in D, \forall b, d \in D^*: \dfrac a b +' \dfrac c d = \dfrac {a \circ d + b \circ c} {b \circ d}$
where we have defined $\dfrac x y = x \circ y^{-1} = y^{-1} \circ x$ as $x$ divided by $y$.

Next, we see that:

$\forall a, b \in D: a +' b = \dfrac {a \circ 1_D + b \circ 1_D} {1_D \circ 1_D} = a + b$
So $+$ induces the given operation $+$ on its substructure $D$, and we are justified in using $+$ for both operations.
$\Box$


Addition on $K$ makes an Abelian Group
Now we verify that $\struct {K, +}$ is an abelian group
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
Let $\dfrac a b, \dfrac c d \in K$.
Then $a, c \in D$ and $b, d \in D^*$, and $\dfrac a b + \dfrac c d = \dfrac {a \circ d + b \circ c} {b \circ d}$.
As $b, d \in D^*$ it follows that $b \circ d \in D^*$ because $D$ is an integral domain.
By the fact of closure of $+$ and $\circ$ in $D$, $a \circ d + b \circ c \in D$.
Hence $\dfrac a b + \dfrac c d \in K$ and $+$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity













\(\ds \paren {\frac a b + \frac c d} + \frac e f\)

\(=\)







\(\ds \frac {a \circ d + b \circ c} {b \circ d} + \frac e f\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {a \circ d + b \circ c} \circ f + b \circ d \circ e} {b \circ d \circ f}\)




















\(\ds \)

\(=\)







\(\ds \frac {a \circ d \circ f + b \circ c \circ f + b \circ d \circ e} {b \circ d \circ f}\)




















\(\ds \)

\(=\)







\(\ds \frac {a \circ d \circ f + b \circ \paren {c \circ f + d \circ e} } {b \circ d \circ f}\)




















\(\ds \)

\(=\)







\(\ds \frac a b + \frac {c \circ f + d \circ e} {d \circ f}\)




















\(\ds \)

\(=\)







\(\ds \frac a b + \paren {\frac c d + \frac e f}\)









Hence $\dfrac a b + \dfrac c d \in K$ and $+$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
The identity for $+$ is $\dfrac 0 k$ where $k \in D^*$:














\(\ds \frac a b + \frac 0 k\)

\(=\)







\(\ds \frac {a \circ k + b \circ 0} {b \circ k}\)




















\(\ds \)

\(=\)







\(\ds \frac {a \circ k} {b \circ k}\)




















\(\ds \)

\(=\)







\(\ds \frac a b\)









Similarly for $\dfrac 0 k + \dfrac a b$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
The inverse of $\dfrac a b$ for $+$ is $\dfrac {-a} b$:














\(\ds \frac a b + \frac {-a} b\)

\(=\)







\(\ds \frac {a \circ b + b \circ \paren {-a} } {b \circ b}\)




















\(\ds \)

\(=\)







\(\ds \frac {b \circ \paren {a + \paren {-a} } } {b \circ b}\)




















\(\ds \)

\(=\)







\(\ds \frac {b \circ 0} {b \circ b}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 {b \circ b}\)









From above, this is the identity for $+$.
Similarly, $\dfrac {-a} b + \dfrac a b = \dfrac 0 {b \circ b}$.
Hence $\dfrac {-a} b$ is the inverse of $\dfrac a b$ for $+$.
$\Box$


$\text C$: Commutativity













\(\ds \frac a b + \frac c d\)

\(=\)







\(\ds \frac {a \circ d + b \circ c} {b \circ d}\)




















\(\ds \)

\(=\)







\(\ds \frac {c \circ b + d \circ a} {d \circ b}\)




















\(\ds \)

\(=\)







\(\ds \frac c d + \frac a b\)










Therefore, $\struct {K, +, \circ}$ is a commutative ring with unity.
$\Box$


Product Distributes over Addition
From Extension Theorem for Distributive Operations, it follows directly that $\circ$ distributes over $+$.
$\Box$


Product Inverses in $K$
From Ring Product with Zero, we note that:

$\forall x \in D, y \in D^*: \dfrac x y \ne 0_D \implies x \ne 0_D$
From Inverse of Division Product:

$\forall x, y \in D^*: \paren {\dfrac x y}^{-1} = \dfrac y x$

Thus $\dfrac x y \in K$ has the ring product inverse $\dfrac y x \in K$.
$\Box$


Inverse Completion is a Field
We have that:

the algebraic structure $\struct {K, +}$ is an abelian group
the algebraic structure $\struct {K^*, \circ}$ is an abelian group
the operation $\circ$ distributes over $+$.
Hence $\struct {K, +, \circ}$ is a field.
We also have that $\struct {K, +, \circ}$ contains $\struct {D, +, \circ}$ algebraically such that:

$\forall x \in K: \exists z \in D, y \in D^*: z = \dfrac x y$

Thus $\struct {K, +, \circ}$ is a field of quotients of $\struct {D, +, \circ}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.9$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): quotient ring: 2.




