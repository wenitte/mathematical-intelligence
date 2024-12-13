# 

Source: https://proofwiki.org/wiki/Ring_Epimorphism_from_Integers_to_Integers_Modulo_m

Theorem
Let $\struct {\Z, +, \times}$ be the ring of integers.
Let $\struct {\Z_m, +_m, \times_m}$ be the ring of integers modulo $m$.
Let $\phi: \struct {\Z, +, \times} \to \struct {\Z_m, +_m, \times_m}$ be the mapping defined as:

$\forall x \in \Z: \map \phi x = \eqclass x m$
where $\eqclass x m$ is the residue class modulo $m$.

Then $\phi$ is a ring epimorphism, but specifically not a ring monomorphism.

The image of $\phi$ is $\struct {\Z_m, +_m, \times_m}$.
The kernel of $\phi$ is $m \Z$, the set of integer multiples of $m$.


Proof
Let $a, b \in \Z$.
Then:














\(\ds \map \phi {a + b}\)

\(=\)







\(\ds \eqclass {a + b} m\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \eqclass a m +_m \eqclass b m\)





Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \map \phi a +_m \map \phi b\)





Definition of $\phi$


















\(\ds \map \phi {a \times b}\)

\(=\)







\(\ds \eqclass {a \times b} m\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \eqclass a m \times_m \eqclass b m\)





Definition of Modulo Multiplication














\(\ds \)

\(=\)







\(\ds \map \phi a \times_m \map \phi b\)





Definition of $\phi$



Hence $\phi$ is a ring homomorphism.

Now let $\eqclass a m \in \Z_m$.
By definition of residue class modulo $m$:

$\eqclass a m = \set {x \in \Z: \exists k \in \Z: z = a + k m}$
Setting $k = 0$:

$\map \phi a = \eqclass a m$
and so:

$\map {\phi^{-1} } {\eqclass a m} \ne \O$
Thus $\phi$ is a surjection.
Now setting $k = 1$, for example, we have that:

$\map \phi {a + m} = \eqclass a m$
and so:

$\map \phi a = \map \phi {a + m}$.
So $\phi$ is specifically not an injection.

It follows by definition that $\phi$ is a ring epimorphism, but specifically not a ring monomorphism.

Next we note that:

$\forall x \in \Z: \map \phi x \in \Z_m$
and so:

$\Img \phi = \Z_m$

Finally, we have that the kernel of $\phi$ is:

$\map \ker \phi = \set {x \in \Z: \map \phi x = \eqclass 0 m}$
Let $\map \phi x = \eqclass 0 m$
Then $x = 0 + k m$ for some $k \in \Z$.
That is, $x \in m \Z$ and so:

$\map \ker \phi \subseteq m \Z$
Now let $x \in m \Z$.
Then:

$\exists k \in \Z: x = 0 + k m$
and so by definition:

$\map \phi x = \eqclass 0 m$
So:

$m \Z \subseteq \map \ker \phi$
Hence:

$\map \ker \phi = m \Z$
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Example $3$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Example $45$




