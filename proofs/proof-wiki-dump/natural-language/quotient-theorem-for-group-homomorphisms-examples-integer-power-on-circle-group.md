# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Examples/Integer_Power_on_Circle_Group

Example of Use of Quotient Theorem for Group Homomorphisms
Let $K$ denote the circle group.

Let $\phi: K \to K$ be the homomorphism defined as:

$\forall z \in K: \map \phi z = z^n$
for some $n \in \Z_{>0}$.

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: K \to K$ is defined as:
$\forall z \in K: \map \alpha z = z$
that is, $\alpha$ is the identity mapping


$\beta: S \to K$ is defined as:
$\forall z \in S: \map \phi z = z^n$
where $S$ denotes the set defined as:
$S := \set {z \in \C: z = e^{2 \pi i x}, 0 \le x < \dfrac 1 n}$


$\gamma: K \to S$ is defined as:
$\forall z \in K: \map \gamma z = z \bmod \dfrac 1 n$
where $\bmod$ denotes the modulo operation.


Proof
It is first demonstrated that $\phi$ is a homomorphism:














\(\ds \map \phi {w \times z}\)

\(=\)







\(\ds \paren {w \times z}^n\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds w^n \times z^n\)




















\(\ds \)

\(=\)







\(\ds \map \phi w \times \map \phi z\)










We have that $1$ is the identity element of $K$, and to confirm:

$\map \phi 1 = 1^n = 1$

Now we can establish what the kernel of $\phi$ is:














\(\ds \map \phi z\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds z^n\)

\(=\)







\(\ds 1\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \set {z \in \C: z^n = 1}\)









Thus $\map \ker \phi$ is the set of complex $n$th roots of unity:

$\map \ker \phi = U_n = \set {e^{2 i k \pi / n}: k \in \N_n}$
where $\N_n = \set {0, 1, 2, \ldots, n - 1}$.

Next we establish what the image of $\phi$ is.
Let $w \in \Img \phi$ such that:

$w = e^{x i}$
for some $x \in \R$.














\(\ds w\)

\(\in\)







\(\ds \Img \phi\)














\(\ds \leadsto \ \ \)

\(\ds \exists z \in K: \, \)



\(\ds w\)

\(=\)







\(\ds z^n\)














\(\ds \leadsto \ \ \)





\(\ds e^{x i}\)

\(=\)







\(\ds z^n\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds e^{x i / n}\)









Thus every element of $K$ has a preimage under $\phi$.
Hence:

$\Img \phi = K$
Thus, from the Quotient Theorem for Group Homomorphisms, $\phi$ can be decomposed into:

$\phi = \alpha \beta \gamma$
where:

$\alpha: K \to K$, which is the identity mapping
$\beta: K / \map \ker \phi \to K$, which is an isomorphism
$\gamma: K \to K / \map \ker \phi$, which is an epimorphism.

The result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 67 \ \delta$




