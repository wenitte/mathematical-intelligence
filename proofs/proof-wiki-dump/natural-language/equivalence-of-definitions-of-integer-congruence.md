# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Integer_Congruence



Theorem
Let $m \in \Z_{> 0}$.

The following definitions of the concept of congruence modulo $m$ are equivalent:

Definition by Remainder after Division
Congruence modulo $m$ is defined as the relation $\equiv \pmod m$ on the set of all $a, b \in \Z$:

$a \equiv b \pmod m := \set {\tuple {a, b} \in \Z \times \Z: \exists k \in \Z: a = b + k m}$
That is, such that $a$ and $b$ have the same remainder when divided by $m$.

Definition by Modulo Operation
Let $\bmod$ be defined as the modulo operation:

$x \bmod m := \begin {cases} x - m \floor {\dfrac x m} & : m \ne 0 \\ x & : m = 0 \end {cases}$

Then congruence modulo $m$ is the relation on $\Z$ defined as:

$\forall x, y \in \Z: x \equiv y \pmod m \iff x \bmod m = y \bmod m$
Definition by Integer Multiple
Let $x, y \in \Z$.
$x$ is congruent to $y$ modulo $m$ if and only if their difference is an integer multiple of $m$:

$x \equiv y \pmod m \iff \exists k \in \Z: x - y = k m$


Proof
Let $x_1, x_2, z \in \Z$.
Let $x_1 \equiv x_2 \pmod z$ as defined by the equal remainder after division:

$\RR_z = \set {\tuple {x, y} \in \Z \times \Z: \exists k \in \Z: x = y + k z}$

Let $\tuple {x_1, x_2} \in \RR_z$.
Then by definition:

$\exists k \in \Z: x_1 = x_2 + k z$

So, by definition of the modulo operation:














\(\ds x_1 \mod z\)

\(=\)







\(\ds \paren {x_2 + k z} - z \floor {\frac {x_2 + k z} z}\)




















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







\(\ds x_2 \mod z\)









So:

$x_1 \equiv x_2 \pmod z$
in the sense of definition by modulo operation.
$\Box$

Now let $x_1 \equiv x_2 \pmod z$ in the sense of definition by modulo operation.
That is:

$x_1 \equiv x_2 \pmod z \iff x_1 \mod z = x_2 \mod z$

Let $z = 0$.
Then by definition, $x_1 \mod 0 = x_1$ and $x_2 \mod 0 = x_2$.
So as $x_1 \mod 0 = x_2 \mod 0$ we have that $x_1 = x_2$.
So:

$x_1 - x_2 = 0 = 0.z$
and so $x_1 \equiv x_2 \pmod z$ in the sense of definition by integer multiple.

Now suppose $z \ne 0$.
Then from definition of the modulo operation:

$x_1 \mod z = x_1 - z \floor {\dfrac {x_1} z}$
$x_2 \mod z = x_2 - z \floor {\dfrac {x_2} z}$
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


Sources
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Definition $4$




