# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Associative/Proof_1

Theorem
Multiplication modulo $m$ is associative:

$\forall \eqclass x m, \eqclass y m, \eqclass z m \in \Z_m: \paren {\eqclass x m \times_m \eqclass y m} \times_m \eqclass z m = \eqclass x m \times_m \paren {\eqclass y m \times_m \eqclass z m}$

That is:

$\forall x, y, z \in \Z_m: \paren {x \cdot_m y} \cdot_m z = x \cdot_m \paren {y \cdot_m z}$


Proof













\(\ds \paren {\eqclass x m \times_m \eqclass y m} \times_m \eqclass z m\)

\(=\)







\(\ds \eqclass {x y} m \times_m \eqclass z m\)





Definition of Modulo Multiplication














\(\ds \)

\(=\)







\(\ds \eqclass {\paren {x y} z} m\)





Definition of Modulo Multiplication














\(\ds \)

\(=\)







\(\ds \eqclass {x \paren {y z} } m\)





Integer Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \eqclass x m \times_m \eqclass {y z} m\)





Definition of Modulo Multiplication














\(\ds \)

\(=\)







\(\ds \eqclass x m \times_m \paren {\eqclass y m \times_m \eqclass z m}\)





Definition of Modulo Multiplication



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.1$: Properties of $\Z_m$ as an algebraic system




