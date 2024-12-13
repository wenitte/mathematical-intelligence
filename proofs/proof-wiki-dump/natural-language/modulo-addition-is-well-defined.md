# 

Source: https://proofwiki.org/wiki/Modulo_Addition_is_Well-Defined



Theorem
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$.

The modulo addition operation on $\Z_m$, defined by the rule:

$\eqclass a m +_m \eqclass b m = \eqclass {a + b} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a + x \equiv b + y \pmod m$.


Corollary
It follows that:

$\eqclass a m -_m \eqclass b m = \eqclass {a - b} m$
is a well-defined operation.


Real Modulus
Let $z \in \R$ be a real number.
Let:

$a \equiv b \pmod z$
and:

$x \equiv y \pmod z$
where $a, b, x, y \in \R$.

Then:

$a + x \equiv b + y \pmod z$


Proof 1
We need to show that if:

$\eqclass {x'} m = \eqclass x m$
$\eqclass {y'} m = \eqclass y m$
then:

$\eqclass {x' + y'} m = \eqclass {x + y} m$

Since:

$\eqclass {x'} m = \eqclass x m$
and:

$\eqclass {y'} m = \eqclass y m$
it follows from the definition of set of integers modulo $m$ that:

$x \equiv x' \pmod m$
and:

$y \equiv y' \pmod m$

By definition, we have:

$x \equiv x' \pmod m \implies \exists k_1 \in \Z: x = x' + k_1 m$
$y \equiv y' \pmod m \implies \exists k_2 \in \Z: y = y' + k_2 m$
which gives us:

$x + y = x' + k_1 m + y' + k_2 m = x' + y' + \paren {k_1 + k_2} m$
As $k_1 + k_2$ is an integer, it follows that, by definition:

$x + y \equiv \paren {x' + y'} \pmod m$

Therefore, by the definition of integers modulo $m$:

$\eqclass {x' + y'} m = \eqclass {x + y} m$
$\blacksquare$


Proof 2
The equivalence class $\eqclass a m$ is defined as:

$\eqclass a m = \set {x \in \Z: x = a + k m: k \in \Z}$
That is, the set of all integers which differ from $a$ by an integer multiple of $m$.
Thus the notation for addition of two set of integers modulo $m$ is not usually $\eqclass a m +_m \eqclass b m$.
What is more normally seen is $a + b \pmod m$.

Using this notation:














\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod m\)
















\(\, \ds \land \, \)

\(\ds c\)

\(\equiv\)







\(\ds d\)

\(\ds \pmod m\)












\(\ds \leadsto \ \ \)





\(\ds a \bmod m\)

\(=\)







\(\ds b \bmod m\)





Definition of Congruence Modulo Integer












\(\, \ds \land \, \)

\(\ds c \bmod m\)

\(=\)







\(\ds d \bmod m\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b + k_1 m\)





for some $k_1 \in \Z$












\(\, \ds \land \, \)

\(\ds c\)

\(=\)







\(\ds d + k_2 m\)





for some $k_2 \in \Z$








\(\ds \leadsto \ \ \)





\(\ds a + c\)

\(=\)







\(\ds b + d + \paren {k_1 + k_2} m\)





Definition of Integer Addition








\(\ds \leadsto \ \ \)





\(\ds a + c\)

\(\equiv\)







\(\ds b + d\)

\(\ds \pmod m\)



Definition of Modulo Addition



$\blacksquare$


Examples
Modulo Addition: $2 + 3 \equiv -6 + 15 \pmod 4$
We have:














\(\ds 2\)

\(\equiv\)







\(\ds -6\)

\(\ds \pmod 4\)



Congruence Modulo $4$: $2 \equiv -6 \pmod 4$














\(\ds 3\)

\(\equiv\)







\(\ds 15\)

\(\ds \pmod 4\)



Congruence Modulo $4$: $3 \equiv 15 \pmod 4$








\(\ds \leadsto \ \ \)





\(\ds 2 + 3 = 5\)

\(\equiv\)







\(\ds -6 + 15 = 9\)

\(\ds \pmod 4\)









Modulo Addition: $19 + 6 \equiv 11 + 2 \pmod 4$
We have:














\(\ds 19\)

\(\equiv\)







\(\ds 11\)

\(\ds \pmod 4\)


















\(\ds 6\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 4\)












\(\ds \leadsto \ \ \)





\(\ds 19 + 6 = 25\)

\(\equiv\)







\(\ds 11 + 2 = 13\)

\(\ds \pmod 4\)









Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields: Example $4$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $2$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 19 \beta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 14.3 \ \text {(i)}$: Congruence modulo $m$ ($m \in \N$)
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Theorem $1 \ \text{(i)}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Law $\text{A}$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): congruence




