# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Well-Defined/Proof_2



Theorem
The multiplication modulo $m$ operation on $\Z_m$, the set of integers modulo $m$, defined by the rule:

$\eqclass x m \times_m \eqclass y m = \eqclass {x y} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a x \equiv b y \pmod m$.


Proof
The equivalence class $\eqclass a m$ is defined as:

$\eqclass a m = \set {x \in \Z: x = a + k m: k \in \Z}$
that is, the set of all integers which differ from $a$ by an integer multiple of $m$.
Thus the notation for multiplication of two residue classes modulo $z$ is not usually $\eqclass a m \times_m \eqclass b m$.
What is more normally seen is:

$a b \pmod m$

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





\(\ds a c\)

\(=\)







\(\ds \paren {b + k_1 m} \paren {d + k_2 m}\)





Definition of Multiplication














\(\ds \)

\(=\)







\(\ds b d + b k_2 m + d k_1 m + k_1 k_2 m^2\)





Integer Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds b d + \paren {b k_2 + d k_1 + k_1 k_2 m} m\)














\(\ds \leadsto \ \ \)





\(\ds a c\)

\(\equiv\)







\(\ds b d\)

\(\ds \pmod m\)



Definition of Modulo Multiplication



$\blacksquare$


Warning
This result does not hold when $a, b, x, y, m \notin \Z$.

Let $z \in \R$ be a real number.
Let:

$a \equiv b \pmod z$
and:

$x \equiv y \pmod z$
where $a, b, x, y \in \R$.

Then it does not necessarily hold that:

$a x \equiv b y \pmod z$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Example $11.2$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $17$




