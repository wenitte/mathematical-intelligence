# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Congruence



Theorem
The following definitions of the concept of Congruence in the context of Number Theory are equivalent:

Let $z \in \R$.

Definition by Remainder after Division
We define a relation $\RR_z$ on the set of all $x, y \in \R$:

$\RR_z := \set {\tuple {x, y} \in \R \times \R: \exists k \in \Z: x = y + k z}$

This relation is called congruence modulo $z$, and the real number $z$ is called the modulus.

When $\tuple {x, y} \in \RR_z$, we write:

$x \equiv y \pmod z$
and say:

$x$ is congruent to $y$ modulo $z$.
Definition by Modulo Operation
Let $\bmod$ be defined as the modulo operation:

$x \bmod y := \begin {cases} x - y \floor {\dfrac x y} & : y \ne 0 \\ x & : y = 0 \end {cases}$

Then congruence modulo $z$ is the relation on $\R$ defined as:

$\forall x, y \in \R: x \equiv y \pmod z \iff x \bmod z = y \bmod z$
Definition by Integer Multiple
Let $x, y \in \R$.

Then $x$ is congruent to $y$ modulo $z$ if and only if their difference is an integer multiple of $z$:

$x \equiv y \pmod z \iff \exists k \in \Z: x - y = k z$


Proof
Let $x_1, x_2, z \in \R$.
Let $x_1 \equiv x_2 \pmod z$ as defined by an equivalence relation.

That is, let $\RR_z$ be the relation on the set of all $x, y \in \R$:

$\RR_z = \set {\tuple {x, y} \in \R \times \R: \exists k \in \Z: x = y + k z}$

Let $\tuple {x_1, x_2} \in \RR_z$.
Then by definition, $\exists k \in \Z: x_1 = x_2 + k z$.

So, by definition of the modulo operation, we have:














\(\ds x_1 \bmod z\)

\(=\)







\(\ds \paren {x_2 + k z} - z \floor {\frac {x_2 + kz} z}\)




















\(\ds \)

\(=\)







\(\ds \paren {x_2 + k z} - z \floor {\frac {x_2} z + k}\)




















\(\ds \)

\(=\)







\(\ds \paren {x_2 + k z} - z \floor {\frac {x_2} z} + k z\)




















\(\ds \)

\(=\)







\(\ds x_2 - z \floor {\frac {x_2} z}\)




















\(\ds \)

\(=\)







\(\ds x_2 \bmod z\)









So:

$x_1 \equiv x_2 \pmod z$
in the sense of definition by modulo operation.
$\Box$

Now let $x_1 \equiv x_2 \pmod z$ in the sense of definition by modulo operation.
That is, :$x_1 \equiv x_2 \pmod z \iff x_1 \bmod z = x_2 \bmod z$.

Let $z = 0$.
Then by definition, $x_1 \bmod 0 = x_1$ and $x_2 \bmod 0 = x_2$.
So as $x_1 \bmod 0 = x_2 \bmod 0$ we have that $x_1 = x_2$.
So $x_1 - x_2 = 0 = 0.z$ and so $x_1 \equiv x_2 \pmod z$ in the sense of definition by integer multiple.

Now suppose $z \ne 0$.
Then from definition of the modulo operation:

$x_1 \bmod z = x_1 - z \floor {\dfrac {x_1} z}$
$x_2 \bmod z = x_2 - z \floor {\dfrac {x_2} z}$
Thus:

$x_1 - z \floor {\dfrac {x_1} z} = x_2 - z \floor {\dfrac {x_2} z}$
and so:

$x_1 - x_2 = z \paren {\floor {\dfrac {x_1} z} - \floor {\dfrac {x_2} z} }$
From the definition of the floor function, we see that both $\floor {\dfrac {x_1} z}$ and $\floor {\dfrac {x_2} z}$ are integers.
Therefore, so is $\floor {\dfrac {x_1} z} - \floor {\dfrac {x_2} z}$ an integer.
So $\exists k \in \Z: x_1 - x_2 = k z$.

Thus $x_1 - x_2 = k z$ and:

$x_1 \equiv x_2 \pmod z$
in the sense of definition by integer multiple.
$\Box$

Now let $x_1 \equiv x_2 \pmod z$ in the sense of definition by integer multiple.
That is, $\exists k \in \Z: x_1 - x_2 = k z$.

Then $x_1 = x_2 + k z$ and so $\tuple {x_1, x_2} \in \RR_z$ where:

$\RR_z = \set {\tuple {x, y} \in \R \times \R: \exists k \in \Z: x = y + k z}$
and so

$x_1 \equiv x_2 \pmod z$
in the sense of definition by equivalence relation.
$\Box$

So all three definitions are equivalent: $(1) \implies (2) \implies (3) \implies (1)$.
$\blacksquare$


Also see
Equivalence of Definitions of Integer Congruence for the integer case.




