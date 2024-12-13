# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Examples/Integers_to_Modulo_Integers_under_Multiplication

Example of Use of Quotient Theorem for Group Homomorphisms
Let $\struct {\Z, +}$ denote the additive group of integers.
Let $\struct {\Z_m, +}$ denote the additive group of integers modulo $m$.
Let $\phi: \struct {\Z, +} \to \struct {\Z_m, +}$ be the homomorphism defined as:

$\forall k \in \Z: \map \phi k = \eqclass {n k} m$
for some $n \in \Z$.

Let $d := \gcd \set {m, n}$, where $\gcd \set {m, n}$ denotes the GCD of $m$ and $n$.
Let $c := \dfrac m d = \dfrac m {\gcd \set {m, n} }$.

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: \struct {d \, \Z_c, +} \to \struct {\Z_m, +}$ is defined as:
$\forall x \in d \, \Z_c: \map \alpha x = x$
where $d \, \Z_c := \set {0, d, 2 d, \ldots, \paren {c - 1} d}$


$\beta: \Z_c \to d \, \Z_c$ is defined as:
$\forall \eqclass x c \in \Z_c: \map \beta {\eqclass x c} = \eqclass {n x} m$


$\gamma: \Z \to \Z_c$ is defined as:
$\forall x \in \Z: \map \gamma x = \eqclass {x \bmod c} c$
where $\bmod$ denotes the modulo operation.


Proof
It is first demonstrated that $\phi$ is a homomorphism:














\(\ds \map \phi {x + y}\)

\(=\)







\(\ds \eqclass {n \paren {x + y} } m\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \eqclass {n x + n y} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass {n x} m + \eqclass {n y} m\)




















\(\ds \)

\(=\)







\(\ds \map \phi x + \map \phi y\)










We have that:














\(\ds \map \phi 0\)

\(=\)







\(\ds \eqclass {n \times 0} m\)




















\(\ds \)

\(=\)







\(\ds \eqclass 0 m\)









By Group Homomorphism Preserves Identity it is confirmed that $\eqclass 0 m$ is the identity of $\struct {\Z_m, \times}$.

Now we can establish what the kernel of $\phi$ is:














\(\ds \map \phi x\)

\(=\)







\(\ds \eqclass 0 m\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {n x} m\)

\(=\)







\(\ds \eqclass 0 m\)














\(\ds \leadsto \ \ \)





\(\ds n x\)

\(=\)







\(\ds k m\)





for some $k \in \Z$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(\divides\)







\(\ds n x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \eqclass 0 c\)





where $c = \dfrac m {\gcd \set {m, n} }$




That is:














\(\ds \map \ker \phi\)

\(=\)







\(\ds \eqclass 0 c\)




















\(\ds \)

\(=\)







\(\ds \set {x \in \Z: c \divides x}\)





where $\divides$ denotes divisibility














\(\ds \)

\(=\)







\(\ds c \, \Z\)





Definition of Set of Integer Multiples




Next we establish what the image of $\phi$ is:














\(\ds z\)

\(\in\)







\(\ds \Img \phi\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \Z: \, \)



\(\ds z\)

\(=\)







\(\ds \eqclass {n x} m\)














\(\ds \leadsto \ \ \)





\(\ds \Img \phi\)

\(=\)







\(\ds d \, \Z_c\)




















\(\ds \)

\(=\)







\(\ds \set {0, d, 2 d, \ldots, \paren {c - 1} d}\)










Thus, from the Quotient Theorem for Group Homomorphisms, $\phi$ can be decomposed into:

$\phi = \alpha \beta \gamma$
where:

$\alpha: d \, \Z_c \to \Z_m$, which is a monomorphism
$\beta: \Z / c \, \Z \to d \, \Z_c$, which is an isomorphism
$\gamma: \Z \to \Z / c \, \Z$, which is an epimorphism.

Finally we have from  Quotient Group of Integers by Multiples:

$\Z / c \, \Z = \Z_c $
and the result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 67 \ \gamma$




