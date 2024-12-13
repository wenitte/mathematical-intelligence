# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_Distributes_over_Modulo_Addition

Theorem
Multiplication modulo $m$ is distributive over addition modulo $m$:

$\forall \eqclass x m, \eqclass y m, \eqclass z m \in \Z_m$:
$\eqclass x m \times_m \paren {\eqclass y m +_m \eqclass z m} = \paren {\eqclass x m \times_m \eqclass y m} +_m \paren {\eqclass x m \times_m \eqclass z m}$
$\paren {\eqclass x m +_m \eqclass y m} \times_m \eqclass z m = \paren {\eqclass x m \times_m \eqclass z m} +_m \paren {\eqclass y m \times_m \eqclass z m}$
where $\Z_m$ is the set of integers modulo $m$.

That is, $\forall x, y, z, m \in \Z$:

$x \paren {y + z} \equiv x y + x z \pmod m$
$\paren {x + y} z \equiv x z + y z \pmod m$


Proof
Follows directly from the definition of multiplication modulo $m$ and addition modulo $m$:














\(\ds \eqclass x m \times_m \paren {\eqclass y m +_m \eqclass z m}\)

\(=\)







\(\ds \eqclass x m \times_m \eqclass {y + z} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {x \paren {y + z} } m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\paren {x y} + \paren {x z} } m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {x y} m +_m \eqclass {x z} m\)




















\(\ds \)

\(=\)







\(\ds \paren {\eqclass x m \times_m \eqclass y m} +_m \paren {\eqclass x m \times_m \eqclass z m}\)










And the second is like it, namely this:














\(\ds \paren {\eqclass x m +_m \eqclass y m} \times_m \eqclass z m\)

\(=\)







\(\ds \eqclass {x + y} m \times_m \eqclass z m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\paren {x + y} z} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\paren {x z} + \paren {y z} } m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {x z} m +_m \eqclass {y z} m\)




















\(\ds \)

\(=\)







\(\ds \paren {\eqclass x m \times_m \eqclass z m} +_m \paren {\eqclass y m \times_m \eqclass z m}\)









$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 6$. The Residue Classes: Theorem $5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.1$: Properties of $\Z_m$ as an algebraic system
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences




