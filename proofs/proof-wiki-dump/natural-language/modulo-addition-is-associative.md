# 

Source: https://proofwiki.org/wiki/Modulo_Addition_is_Associative

Theorem
Addition modulo $m$ is associative:

$\forall \eqclass x m, \eqclass y m, \eqclass z m \in \Z_m: \paren {\eqclass x m +_m \eqclass y m} +_m \eqclass z m = \eqclass x m +_m \paren {\eqclass y m +_m \eqclass z m}$
where $\Z_m$ is the set of integers modulo $m$.

That is:

$\forall x, y, z \in \Z: \paren {x + y} + z \equiv x + \paren {y + z} \pmod m$


Proof













\(\ds \paren {\eqclass x m +_m \eqclass y m} +_m \eqclass z m\)

\(=\)







\(\ds \eqclass {x + y} m +_m \eqclass z m\)





Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \eqclass {\paren {x + y} + z} m\)





Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \eqclass {x + \paren {y + z} } m\)





Associative Law of Addition














\(\ds \)

\(=\)







\(\ds \eqclass x m +_m \eqclass {y + z} m\)





Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \eqclass x m +_m \paren {\eqclass y m +_m \eqclass z m}\)





Definition of Modulo Addition



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.6$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.10$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.1$: Properties of $\Z_m$ as an algebraic system




