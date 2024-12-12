# 

Source: https://proofwiki.org/wiki/Biholomorphic_Function_from_Open_Unit_Disk_to_Right_Half-Plane

Theorem
Let $\mathbb D = \set {z : \cmod z < 1}$ be the open unit disk. 
Let $\mathbb H_r = \set {z : \map \Re z > 0}$ be the right half-plane.
Define $f : \mathbb D \to \C$ by:

$\ds \map f z = \frac {1 - z} {1 + z}$
for each $z \in \mathbb D$.

Then $f$ is a biholomorphic function $\mathbb D \to \mathbb H_r$.


Proof
From Möbius Transformation is Bijection, defining the extended map $f_\ast : \overline \C \to \overline \C$ by:

$\map {f_\ast} z = \begin {cases} \dfrac {1 - z} {1 + z} & : z \ne -1 \\
\infty & : z = -1 \\
-1 & : z = \infty \end{cases}$
we obtain a bijection.
Hence $f : \mathbb D \to \C$ is an injection.

To show that $f$ is a surjection $\mathbb D \to \mathbb H_r$ it is enough to show that if $\map {f_\ast} z \in \mathbb H_r$, then $\cmod z < 1$.
We first demonstrate that this is the case.
Suppose that it is true that if $\map {f_\ast} z \in \mathbb H_r$ for $z \in \overline \C$, then $\cmod z < 1$.
For each $w \in \mathbb H_r$, there will exist $z \in \overline \C$ such that $\map {f_\ast} z = w$.
We will then have $z \in \mathbb D$, and hence $w = \map {f_\ast} z = \map f z$.
Hence we will have shown that $f$ is surjective.

Now, we have, for $z \not \in \set {-1, \infty}$:














\(\ds \map {f_\ast} z\)

\(=\)







\(\ds \frac {1 - z} {1 + z}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - z} \paren {1 + \overline z} } {\paren {1 + z} \overline {1 + z} }\)





Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \frac {1 - \paren {z - \overline z} - z \overline z} {\cmod {1 + z}^2}\)





Product of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \frac {1 - 2 i \map \Im z - \cmod z^2} {\cmod {1 + z}^2}\)





Difference of Complex Number with Conjugate, Product of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \paren {\frac {1 - \cmod z^2} {\cmod {1 + z}^2} } + 2 i \paren {\frac {\map \Im z} {\cmod {1 + z}^2} }\)









If $z = \infty$, then $\map {f_\ast} z = -1 \not \in \mathbb H_r$. 
Similarly $\map {f_\ast} {-1} = \infty \not \in \mathbb H_r$. 
Hence $\map \Re {\map {f_\ast} z} > 0$ if and only if:

$\ds \frac {1 - \cmod z^2} {\cmod {1 + z}^2} > 0$
which is the case if and only if $1 - \cmod z^2 > 0$, which is the case if and only if $\cmod z < 1$.
Hence, due to the prior discussion, $f$ is surjective.
Since we have $\map \Re {\map f z} > 0$ if and only if $\cmod z < 1$, we can consider $f$ as a mapping $\mathbb H_r \to \mathbb D$.
Denote this mapping as $f^{-1} : \mathbb H_r \to \mathbb D$. 

From Combination Theorem for Complex Derivatives: Quotient Rule, $f : \mathbb D \to \mathbb H_r$ is holomorphic.
We have, for $z \in \mathbb D$:














\(\ds \map {\paren {f^{-1} \circ f} } z\)

\(=\)







\(\ds \frac {1 - \frac {1 - z} {1 + z} } {1 + \frac {1 - z} {1 + z} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 + z} - \paren {1 - z} } {1 + z + \paren {1 - z} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 z} 2\)




















\(\ds \)

\(=\)







\(\ds z\)









Hence $f^{-1}$ is the inverse of $f$. 
From Combination Theorem for Complex Derivatives: Quotient Rule again, $f^{-1}$ is holomorphic.
$f$ is therefore biholomorphic as required.
$\blacksquare$





