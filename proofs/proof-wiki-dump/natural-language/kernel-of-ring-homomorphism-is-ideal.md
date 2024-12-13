# 

Source: https://proofwiki.org/wiki/Kernel_of_Ring_Homomorphism_is_Ideal

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.

The kernel of $\phi$ is an ideal of $R_1$.


Proof
By Kernel of Ring Homomorphism is Subring, $\map \ker \phi$ is a subring of $R_1$.
Let $s \in \map \ker \phi$, so $\map \phi s = 0_{R_2}$.
Suppose $x \in R_1$. Then:














\(\ds \map \phi {x \circ_1 s}\)

\(=\)







\(\ds \map \phi x \circ_2 \map \phi s\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi x \circ_2 0_{R_2}\)





as $s \in \map \ker \phi$














\(\ds \)

\(=\)







\(\ds 0_{R_2}\)





Properties of $0_{R_2}$




and similarly for $\map \phi {s \circ_1 x}$.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.6: \ 1^\circ$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Theorem $46 \ \text{(ii)}$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: Lemma $2.6 \ \text{(i)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 58.5$ Ideals




