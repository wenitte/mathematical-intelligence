# 

Source: https://proofwiki.org/wiki/Induced_Algebra_Homomorphism_on_Unitization

Theorem
Let $A, B$ be algebras over $\C$.
Let $\phi : A \to B$ be an algebra homomorphism.
Let $A_+$ and $B_+$ be the unitizations of $A$ and $B$ respectively.
Define $\psi : A_+ \to B_+$ by:

$\map \psi {a, \lambda} = \tuple {\map \phi a, \lambda}$
for each $\tuple {a, \lambda} \in A_+$.

Then $\psi$ is a unital algebra homomorphism.


Proof
Let $\tuple {a, \lambda}, \tuple {b, \mu} \in A_+$ and $t \in \C$.
We then have:














\(\ds \map \psi {\tuple {a, \lambda} + t \tuple {b, \mu} }\)

\(=\)







\(\ds \map \psi {\tuple {a + t b, \lambda + t \mu} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map \phi {a + t b}, \lambda + t \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map \phi a + t \map \phi b, \lambda + t \mu}\)





Definition of Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \tuple {\map \phi a, \lambda} + t \tuple {\map \phi b, \mu}\)




















\(\ds \)

\(=\)







\(\ds \map \psi {a, \lambda} + t \map \psi {b, \mu}\)









and:














\(\ds \map \psi {\tuple {a, \lambda} \tuple {b, \mu} }\)

\(=\)







\(\ds \map \psi {a b + \lambda b + \mu a, \lambda \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map \phi {a b + \lambda b + \mu a}, \lambda \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map \phi a \map \phi b + \lambda \map \phi b + \mu \map \phi a, \lambda \mu}\)





Definition of Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \tuple {\map \phi a, \lambda} \tuple {\map \phi b, \mu}\)




















\(\ds \)

\(=\)







\(\ds \map \psi {a, \lambda} \map \psi {b, \mu}\)









We finally have:

$\map \psi { {\mathbf 1}_{A_+} } = \map \psi { {\mathbf 0}_A, 1} = \tuple {\map \phi { {\mathbf 0}_A}, 1} = \tuple { {\mathbf 0}_B, 1} = {\mathbf 1}_{B_+}$
Hence $\psi$ is unital.
$\blacksquare$





