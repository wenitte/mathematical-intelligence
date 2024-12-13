# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Well-Defined



Theorem
The multiplication modulo $m$ operation on $\Z_m$, the set of integers modulo $m$, defined by the rule:

$\eqclass x m \times_m \eqclass y m = \eqclass {x y} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a x \equiv b y \pmod m$.


Proof 1
We need to show that if:

$\eqclass {x'} m = \eqclass x m$
and:

$\eqclass {y'} m = \eqclass y m$
then:

$\eqclass {x' y'} m = \eqclass {x y} m$

We have that:

$\eqclass {x'} m = \eqclass x m$
and:

$\eqclass {y'} m = \eqclass y m$
It follows from the definition of residue class modulo $m$ that:

$x \equiv x' \pmod m$
and:

$y \equiv y' \pmod m$

By definition, we have:

$x \equiv x' \pmod m \implies \exists k_1 \in \Z: x = x' + k_1 m$
$y \equiv y' \pmod m \implies \exists k_2 \in \Z: y = y' + k_2 m$
which gives us:

$x y = \paren {x' + k_1 m} \paren {y' + k_2 m} = x' y' + \paren {x' k_2 + y' k_1} m + k_1 k_2 m^2$
Thus by definition:

$x y \equiv \paren {x' y'} \pmod m$

Therefore, by the definition of residue class modulo $m$:

$\eqclass {x' y'} m = \eqclass {x y} m$
$\blacksquare$


Proof 2
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


Examples
Modulo Multiplication: $19 \times 6 \equiv 11 \times 2 \pmod 4$













\(\ds 19\)

\(\equiv\)







\(\ds 11\)

\(\ds \pmod 4\)


















\(\ds 6\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 4\)












\(\ds \leadsto \ \ \)





\(\ds 19 \times 6 = 114\)

\(\equiv\)







\(\ds 11 \times 2 = 22\)

\(\ds \pmod 4\)









Modulo Multiplication: $2 \times 3 \equiv -6 \times 15 \pmod 4$













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





\(\ds 2 \times 3 = 6\)

\(\equiv\)







\(\ds \paren {-6} \times 15 = -90\)

\(\ds \pmod 4\)









Warning
Let $z \in \R$ be a real number.
Let:

$a \equiv b \pmod z$
and:

$x \equiv y \pmod z$
where $a, b, x, y \in \R$.

Then it does not necessarily hold that:

$a x \equiv b y \pmod z$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields: Example $4$
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)} \ \text{(M)}$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.6$. Algebra of congruences: $\text{(iii)}$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $2$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Examples of Group Structure: $\S 34$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 14.3 \ \text {(iii)}$: Congruence modulo $m$ ($m \in \N$)
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Theorem $1 \ \text{(ii)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Proposition $2.31$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Exercise $6$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Law $\text{A}$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): congruence




