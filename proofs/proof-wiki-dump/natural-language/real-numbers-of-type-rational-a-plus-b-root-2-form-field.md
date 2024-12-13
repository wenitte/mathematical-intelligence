# 

Source: https://proofwiki.org/wiki/Real_Numbers_of_Type_Rational_a_plus_b_root_2_form_Field



Theorem
Let $\Q \sqbrk {\sqrt 2}$ denote the set:

$\Q \sqbrk {\sqrt 2} := \set {x \in \R: x = a + b \sqrt 2: a, b \in \Q}$
that is, all numbers of the form $a + b \sqrt 2$ where $a$ and $b$ are rational numbers.

Then the algebraic structure:

$\struct {\Q \sqbrk {\sqrt 2}, +, \times}$
where $+$ and $\times$ are conventional addition and multiplication on real numbers, is a field.


Corollary
The field $\struct {\Q \sqbrk {\sqrt 2}, +, \times}$ is a subfield of $\struct {\R, +, \times}$.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Use subfield testYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By definition, $\Q \sqbrk {\sqrt 2} \subseteq \R$ where $\R$ is the set of real numbers.
Thus $+$ and $\times$ on $\struct {\Q \sqbrk {\sqrt 2}, +, \times}$ are well-defined.


Closure
Let $a_1 + b_1 \sqrt 2, a_2 + b_2 \sqrt 2 \in \Q \sqbrk {\sqrt 2}$.
Then:














\(\ds \paren {a_1 + b_1 \sqrt 2} + \paren {a_2 + b_2 \sqrt 2}\)

\(=\)







\(\ds \paren {a_1 + a_2} + \paren {b_1 + b_2} \sqrt 2\)




















\(\ds \)

\(\in\)







\(\ds \Q \sqbrk {\sqrt 2}\)
























\(\ds \paren {a_1 + b_1 \sqrt 2} \times \paren {a_2 + b_2 \sqrt 2}\)

\(=\)







\(\ds \paren {a_1 \times a_2 + 2 \times b_1 \times b_2} + \paren {a_1 \times b_2 + b_1 \times a_2} \sqrt 2\)




















\(\ds \)

\(\in\)







\(\ds \Q \sqbrk {\sqrt 2}\)









So both $+$ and $\times$ are closed on $\Q \sqbrk {\sqrt 2}$.
$\Box$


Associativity
As addition and multiplication are associative on $\R$ it follows from Restriction of Associative Operation is Associative that they are also associative on $\Q \sqbrk {\sqrt 2}$.
$\Box$


Commutativity
As addition and multiplication are commutative on $\R$ it follows from Restriction of Commutative Operation is Commutative that they are also commutative on $\Q \sqbrk {\sqrt 2}$.
$\Box$


Identity
We have:














\(\ds \paren {a + b \sqrt 2} + \paren {0 + 0 \sqrt 2}\)

\(=\)







\(\ds \paren {a + 0} + \paren {b + 0} \sqrt 2\)




















\(\ds \)

\(=\)







\(\ds a + b \sqrt 2\)









and similarly for $\paren {0 + 0 \sqrt 2} + \paren {a + b \sqrt 2}$.
So $\paren {0 + 0 \sqrt 2}$ is the identity for $+$ on $\Q \sqbrk {\sqrt 2}$.

Then:














\(\ds \paren {a + b \sqrt 2} \times \paren {1 + 0 \sqrt 2}\)

\(=\)







\(\ds \paren {a \times 1 + 2 \times b \times 0} + \paren {b \times 1 + a \times 0} \sqrt 2\)




















\(\ds \)

\(=\)







\(\ds a + b \sqrt 2\)









and similarly for $\paren {1 + 0 \sqrt 2} \times \paren {a + b \sqrt 2}$.
So $\paren {1 + 0 \sqrt 2}$ is the identity for $\times$ on $\Q \sqbrk {\sqrt 2}$.
$\Box$


Inverses
We have:














\(\ds \paren {a + b \sqrt 2} + \paren {-a + \paren {-b} \sqrt 2}\)

\(=\)







\(\ds \paren {a - a} + \paren {b - b} \sqrt 2\)




















\(\ds \)

\(=\)







\(\ds 0 + 0 \sqrt 2\)









and similarly for $\paren {-a + \paren {-b} \sqrt 2} + \paren {a + b \sqrt 2}$.
So $\paren {-a + \paren {-b} \sqrt 2}$ is the inverse of $\paren {a + b \sqrt 2}$ for $+$ on $\Q \sqbrk {\sqrt 2}$.

Calculating the product inverse of $\paren {a + b \sqrt 2}$ is less trivial. 

From Difference of Two Squares we have:

$\paren {a + b \sqrt 2} \paren {a - b \sqrt 2} = a^2 - 2 b^2$
which leads to:

$\paren {a + b \sqrt 2} \paren {\dfrac {a - b \sqrt 2} {a^2 - 2 b^2} } = 1 = 1 + 0 \sqrt 2$
so demonstrating that the product inverse of $\paren {a + b \sqrt 2}$ is $\dfrac a {a^2 - 2 b^2} - \dfrac {b \sqrt 2} {a^2 - 2 b^2}$.
As $a$ and $b$ are rational, it follows that so are $\dfrac a {a^2 - 2 b^2}$ and $\dfrac b {a^2 - 2 b^2}$.
So the product inverse of $\paren {a + b \sqrt 2}$ is an element of $\Q \sqbrk {\sqrt 2}$.
$\Box$


Distributivity
We have that Real Multiplication Distributes over Addition, so by Restriction of Operation Distributivity, $\times$ is distributive over $+$ on $\Q \sqbrk {\sqrt 2}$.
$\Box$

The result follows by putting all the pieces together.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Fields: $\S 16$. Subfields: Example $22$




