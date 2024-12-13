# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Well-Defined/Proof_1



Theorem
The multiplication modulo $m$ operation on $\Z_m$, the set of integers modulo $m$, defined by the rule:

$\eqclass x m \times_m \eqclass y m = \eqclass {x y} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a x \equiv b y \pmod m$.


Proof
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









Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 6$. The Residue Classes: Theorem $4$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-1}$ Basic Properties of Congruences: Theorem $\text {4-2}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 18.4$: Congruence classes
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences




