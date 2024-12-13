# 

Source: https://proofwiki.org/wiki/Preimage_of_Subring_under_Ring_Homomorphism_is_Subring

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.
Let $S_2$ be a subring of $R_2$.

Then $S_1 = \phi^{-1} \sqbrk {S_2}$ is a subring of $R_1$ such that $\map \ker \phi \subseteq S_1$.


Proof
Let $K = \map \ker \phi$ be the kernel of $R_1$.

We have that $0_{R_2} \in S_2$ and so $\set {0_{R_2} } \subseteq S_2$.
From Subset Maps to Subset:

$\phi^{-1} \sqbrk {\set {0_{R_2} } } \subseteq \phi^{-1} \sqbrk {S_2} = S_1$
But by definition, $K = \phi^{-1} \sqbrk {\set {0_{R_2} } }$
and so $S_1$ is a subset of $R_1$ containing $K$, that is:

$K \subseteq S_1 \subseteq R_1$

Now we need to show that $S_1$ is a subring of $R_1$.
Let $r, r' \in S_1$.
Then $\map \phi r, \map \phi {r'} \in S_2$.

Hence:














\(\ds \map \phi {r +_1 r'}\)

\(=\)







\(\ds \map \phi r +_2 \map \phi {r'}\)





as $\phi$ is a ring homomorphism














\(\ds \)

\(\in\)







\(\ds S_2\)





because $S_2$ is a subring



So:

$r + r' \in S_1$

Then:














\(\ds \map \phi {-r}\)

\(=\)







\(\ds -\map \phi r\)





Group Homomorphism Preserves Inverses














\(\ds \)

\(\in\)







\(\ds S_2\)





because $S_2$ is a subring



So:

$-r \in \phi^{-1} S_1$

Finally:














\(\ds \map \phi {r \circ_1 r'}\)

\(=\)







\(\ds \map \phi r \circ_2 \map \phi {r'}\)





as $\phi$ is a ring homomorphism














\(\ds \)

\(\in\)







\(\ds S_2\)





because $S_2$ is a subring



So:

$r \circ_1 r' \in S_1$

So from the Subring Test we have that $\phi^{-1} \sqbrk {S_2}$ is a subring of $R$ containing $K$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.6: \ 3^\circ$




