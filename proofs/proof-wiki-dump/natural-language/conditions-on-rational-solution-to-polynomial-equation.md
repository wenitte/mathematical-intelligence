# 

Source: https://proofwiki.org/wiki/Conditions_on_Rational_Solution_to_Polynomial_Equation

Theorem
Let $P$ be the polynomial equation:

$a_n z^n + a_{n - 1} z^{n - 1} + \cdots + a_1 z + a_0 = 0$
where $a_0, \ldots, a_n$ are integers.
Let $\dfrac p q$ be a root of $P$ expressed in canonical form.

Then $p$ is a divisor of $a_0$ and $q$ is a divisor of $a_n$.


Proof
By definition of the canonical form of a rational number, $p$ and $q$ are coprime.
Substitute $\dfrac p q$ for $z$ in $P$ and multiply by $q^n$:

$(1): \quad a_n p^n + a_{n - 1} p^{n - 1} q + \cdots + a_1 p q^{n - 1} + a_0 q^n = 0$
Dividing $(1)$ by $p$ gives:

$(2): \quad a_n p^{n - 1} + a_{n - 1} p^{n - 2} q + \cdots + a_1 q^{n - 1} = -\dfrac {a_0 q^n} p$
The left hand side of $(2)$ is an integer and therefore so is the right hand side.
We have that $p$ and $q$ are coprime.
By Euclid's Lemma it follows that $p$ divides $a_0$.
Similarly, dividing $(1)$ by $q$ gives:

$(3): \quad -\dfrac {a_n p^n} q = a_{n - 1} p^{n - 1} + \cdots + a_1 p q^{n - 2} + a_0 q^{n - 1}$
By Euclid's Lemma it follows that $q$ divides $a_n$.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Polynomial Equations: $33$




