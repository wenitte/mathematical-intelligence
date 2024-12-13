# 

Source: https://proofwiki.org/wiki/Modulo_Subtraction_is_Well-Defined



Corollary to Modulo Addition is Well-Defined
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$.
The modulo subtraction operation on $\Z_m$, defined by the rule:

$\eqclass a m -_m \eqclass b m = \eqclass {a - b} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a - x \equiv b - y \pmod m$.


Proof
We have:














\(\ds \eqclass a m -_m \eqclass b m\)

\(=\)







\(\ds \eqclass {a - b} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a + \paren {-b} } m\)




















\(\ds \)

\(=\)







\(\ds \eqclass a m +_m \eqclass {-b} m\)









The result follows from the fact that Modulo Addition is Well-Defined for all integers.
$\blacksquare$


Examples
Modulo Subtraction: $19 - 6 \equiv 11 - 2 \pmod 4$
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





\(\ds 19 - 6 = 13\)

\(\equiv\)







\(\ds 11 - 2 = 9\)

\(\ds \pmod 4\)









Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.6$. Algebra of congruences: $\text{(ii)}$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-1}$ Basic Properties of Congruences: Theorem $\text {4-2}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 14.3 \ \text {(ii)}$: Congruence modulo $m$ ($m \in \N$)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Law $\text{A}$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): congruence




