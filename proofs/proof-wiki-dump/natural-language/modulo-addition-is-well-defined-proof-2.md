# 

Source: https://proofwiki.org/wiki/Modulo_Addition_is_Well-Defined/Proof_2

Theorem
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$.

The modulo addition operation on $\Z_m$, defined by the rule:

$\eqclass a m +_m \eqclass b m = \eqclass {a + b} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a + x \equiv b + y \pmod m$.


Proof
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


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.6$. Algebra of congruences: $\text{(i)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Example $11.2$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.10$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 18.4$: Congruence classes
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $17$




