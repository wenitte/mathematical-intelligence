# 

Source: https://proofwiki.org/wiki/Preimage_of_Ideal_under_Ring_Homomorphism_is_Ideal

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.
Let $S_2$ be an ideal of $R_2$.

Then $S_1 = \phi^{-1} \sqbrk {S_2}$ is an ideal of $R_1$ such that $\map \ker \phi \subseteq S_1$.


Proof
From Preimage of Subring under Ring Homomorphism is Subring‎ we have that $S_1 = \phi^{-1} \sqbrk {S_2}$ is a subring of $R_1$ such that $\map \ker \phi \subseteq S_1$.
We now need to show that $S_1$ is an ideal of $R_1$.

Let $s_1 \in S_1, r_1 \in R_1$.
Then:














\(\ds \map \phi {r_1 \circ_1 s_1}\)

\(=\)







\(\ds \map \phi {r_1} \circ_2 \map \phi {s_1}\)





as $\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds S_2\)





as $S_2$ is an ideal of $R_2$



Thus:

$r_1 \circ_1 s_1 \in \phi^{-1} \sqbrk {S_2} = S_1$
Similarly for $s_1 \circ_1 r_1$.

So $S_1$ is an ideal of $R_1$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.6: \ 3^\circ$




