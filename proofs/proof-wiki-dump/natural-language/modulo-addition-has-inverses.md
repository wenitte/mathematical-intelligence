# 

Source: https://proofwiki.org/wiki/Modulo_Addition_has_Inverses

Theorem
Let $m \in \Z$ be an integer.
Then addition modulo $m$ has inverses:

For each element $\eqclass x m \in \Z_m$, there exists the element $\eqclass {-x} m \in \Z_m$ with the property:

$\eqclass x m +_m \eqclass {-x} m = \eqclass 0 m = \eqclass {-x} m +_m \eqclass x m$
where $\Z_m$ is the set of integers modulo $m$.

That is:

$\forall a \in \Z: a + \paren {-a} \equiv 0 \equiv \paren {-a} + a \pmod m$


Proof













\(\ds \eqclass x m +_m \eqclass {-x} m\)

\(=\)







\(\ds \eqclass {x + \paren {-x} } m\)





Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \eqclass 0 m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\paren {-x} + x} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {-x} m +_m \eqclass x m\)





Definition of Modulo Addition




As $-x$ is a perfectly good integer, $\eqclass {-x} m \in \Z_m$, whatever $x$ may be.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: A Little Number Theory
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.10$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 6$. The Residue Classes: Theorem $5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19.1$: Properties of $\Z_m$ as an algebraic system




