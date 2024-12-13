# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Examples/Real_to_Complex_Numbers_under_e%5E2_pi_i_x

Example of Use of Quotient Theorem for Group Homomorphisms
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $\struct {\C_{\ne 0}, \times}$ denote the multiplicative group of complex numbers.
Let $\phi: \struct {\R, +} \to \struct {\C_{\ne 0}, \times}$ be the homomorphism defined as:

$\forall x \in \R: \map \phi x = e^{2 \pi i x}$

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: \struct {K, \times} \to \struct {\C_{\ne 0}, \times}$ is defined as:
$\forall z \in K: \map \alpha z = z$
where $\struct {K, \times}$ denotes the circle group:
$K = \set {z \in \C: \cmod z = 1}$
$\times$ is the operation of complex multiplication


$\beta: \hointr 0 1 \to K$ is defined as:
$\forall x \in \hointr 0 1: \map \beta x = e^{2 \pi i x}$
where $\hointr 0 1$ denotes the right half-open real interval $\set {x \in \R: 0 \le x < 1}$


$\gamma: \R \to \hointr 0 1$ is defined as:
$\forall x \in \R: \map \gamma x = \fractpart x$
where $\fractpart x$ is the fractional part of $x$:
$\fractpart x := x - \floor x$


Proof
It is first demonstrated that $\phi$ is a homomorphism:














\(\ds \map \phi {x + y}\)

\(=\)







\(\ds e^{2 \pi i \paren {x + y} }\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds e^{2 \pi i x + 2 \pi i y}\)




















\(\ds \)

\(=\)







\(\ds e^{2 \pi i x} e^{2 \pi i y}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \, \map \phi y\)










We have that:














\(\ds \map \phi 0\)

\(=\)







\(\ds e^{2 \pi i 0}\)




















\(\ds \)

\(=\)







\(\ds e^0\)




















\(\ds \)

\(=\)







\(\ds 1\)









By Group Homomorphism Preserves Identity it is confirmed that $1$ is the identity of $\struct {\C_{\ne 0}, \times}$.

Now we can establish what the kernel of $\phi$ is:














\(\ds \map \phi x\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 \pi i x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \cos 2 \pi x + i \sin 2 \pi x\)

\(=\)







\(\ds 1\)





Euler's Formula








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \Z\)





Cosine of Integer Multiple of Pi and Sine of Integer Multiple of Pi



Thus:

$\map \ker \phi = \Z$
where $\Z$ denotes the set of integers.

Next we establish what the image of $\phi$ is:














\(\ds z\)

\(\in\)







\(\ds \Img \phi\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \R: \, \)



\(\ds z\)

\(=\)







\(\ds e^{2 \pi i x}\)














\(\ds \leadsto \ \ \)





\(\ds \ln z\)

\(=\)







\(\ds 2 \pi i x\)





Definition 2 of Complex Logarithm








\(\ds \leadsto \ \ \)





\(\ds \ln \cmod z + i \arg z\)

\(=\)







\(\ds 2 \pi i x\)





Definition 1 of Complex Logarithm








\(\ds \leadsto \ \ \)





\(\ds \ln \cmod z\)

\(=\)







\(\ds 0\)





separating into real and imaginary parts














\(\ds \arg z\)

\(=\)







\(\ds 2 \pi x\)














\(\ds \leadsto \ \ \)





\(\ds \cmod z\)

\(=\)







\(\ds 1\)





Natural Logarithm of 1 is 0














\(\ds \Img {\arg z}\)

\(=\)







\(\ds \R\)














\(\ds \leadsto \ \ \)





\(\ds \Img \phi\)

\(=\)







\(\ds \set {z \in \C_{\ne 0}: \cmod z = 1}\)




















\(\ds \)

\(=\)







\(\ds K\)





Definition of Circle Group




Thus, from the Quotient Theorem for Group Homomorphisms, $\phi$ can be decomposed into:

$\phi = \alpha \beta \gamma$
where:

$\alpha: K \to \C_{\ne 0}$, which is a monomorphism
$\beta: \R / \Z \to K$, which is an isomorphism
$\gamma: \R \to \R / \Z$, which is an epimorphism.

As $\beta$ is an isomorphism, $\beta$ is also a bijection and so $\R / \Z = \Preimg \beta$ can be deduced:














\(\ds x\)

\(\in\)







\(\ds \Preimg \beta\)














\(\ds \leadsto \ \ \)

\(\ds \exists z \in K: \, \)



\(\ds z\)

\(=\)







\(\ds e^{2 \pi i x}\)














\(\ds \leadsto \ \ \)





\(\ds \Ln z\)

\(=\)







\(\ds \ln r + i \theta\)





for $\theta \in \hointr 0 {2 \pi}$

\(\quad\) Definition of Principal Branch of Complex Natural Logarithm

We have specifically selected $\hointr 0 {2 \pi}$ as the image of the principal argument of $\Ln z$.
Other half-open real intervals whose length is $2 \pi$ work equally well, for example $\hointl {-\pi} \pi$.

Thus:














\(\ds x\)

\(\in\)







\(\ds \Preimg \beta\)














\(\ds \leadsto \ \ \)





\(\ds \Arg {\map \beta x}\)

\(=\)







\(\ds 2 \pi x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \hointr 0 1\)









Thus we have:

$\Preimg \beta = \R / \Z = \hointr 0 1$
and the result follows.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text I$: Sets and Functions: Exercise $\text L$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 67 \ \alpha$




