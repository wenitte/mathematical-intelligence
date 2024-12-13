# 

Source: https://proofwiki.org/wiki/Power_Function_on_Complex_Numbers_is_Epimorphism



Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\struct {\C_{\ne 0}, \times}$ be the multiplicative group of complex numbers.
Let $f_n: \C_{\ne 0} \to \C_{\ne 0}$ be the mapping from the set of complex numbers less zero to itself defined as:

$\forall z \in \C_{\ne 0}: \map {f_n} z = z^n$

Then $f_n: \struct {\C_{\ne 0}, \times} \to \struct {\C_{\ne 0}, \times}$ is a group epimorphism.

The kernel of $f_n$ is the set of complex $n$th roots of unity.


Proof
From Non-Zero Complex Numbers under Multiplication form Group, $\struct {\C_{\ne 0}, \times}$ is a group.
Therefore $\struct {\C_{\ne 0}, \times}$ is closed by Group Axiom $\text G 0$: Closure.

Let $w, z \in \C_{\ne 0}$.














\(\ds \map {f_n} {w \times z}\)

\(=\)







\(\ds \paren {w \times z}^n\)




















\(\ds \)

\(=\)







\(\ds w^n \times z^n\)





Power of Product of Commutative Elements in Group














\(\ds \)

\(=\)







\(\ds \map {f_n} w \times \map {f_n} z\)









Thus $f_n$ is a group homomorphism.

Now suppose $w = r \paren {\cos \alpha + i \sin \alpha}$, expressing $w$ in polar form.
Then $w = \map {f_n} z$ where:

$z = r^{1/n} \paren {\cos \dfrac \alpha n + i \sin \dfrac \alpha n}$
and so:

$\forall w: w \in \map {f_n} {\C_{\ne 0} }$
That is, $f_n$ is a surjection.

Being a group homomorphism which is also a surjection, by definition $f_n$ is then a group epimorphism.

The kernel of $f_n$ is the set:

$U_n = \set {e^{2 i k \pi / n}: k \in \N_n}$
which follows from Complex Roots of Unity in Exponential Form.
$\blacksquare$


Examples
Cube Function
Let $f_3: \C_{\ne 0} \to \C_{\ne 0}$ be the mapping from the set of complex numbers less zero to itself defined as:

$\forall z \in \C_{\ne 0}: \map {f_n} z = z^3$

Then $f_3: \struct {\C_{\ne 0}, \times} \to \struct {\C_{\ne 0}, \times}$ is a group epimorphism.

The kernel $U_3$ of $f_3$ is the set of complex $3$rd roots of unity:

$U_3 = \set {1, \omega, \omega^2}$
where:














\(\ds \omega\)

\(:=\)







\(\ds \cos \dfrac {2 \pi} 3 + i \sin \dfrac {2 \pi} 3\)




















\(\ds \omega^2\)

\(:=\)







\(\ds \cos \dfrac {4 \pi} 3 + i \sin \dfrac {4 \pi} 3\)









Hence for all $ z \in \C_{\ne 0}$, the coset $z U_3$ is the set:

$z U_3 = \set {z, z \omega, z \omega^2}$
and multiplication on $\C_{\ne 0} / U_3$ of all such cosets satisfies:

$\set {z_1, z_1 \omega, z_1 \omega^2} \times \set {z_2, z_2 \omega, z_2 \omega^2} = \set {z_1 z_2, z_1 z_2 \omega, z_1 z_2 \omega^2}$
Hence the associated isomorphism $g: \C_{\ne 0} / U_3 \to \C_{\ne 0}$ takes the equivalence class:

$\set {z, z \omega, z \omega^2}$
into the cube:

$z^3 = \paren {z \omega}^3 = \paren {z \omega^2}^3$
of any one of its elements.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Example $12.2$




