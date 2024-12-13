# 

Source: https://proofwiki.org/wiki/Preimage_of_Image_of_Subgroup_under_Group_Epimorphism

Theorem
Let $\struct {G_1, \circ}$ and $\struct {G_2, *}$ be groups.
Let $\phi: \struct {G_1, \circ} \to \struct {G_2, *}$ be a group epimorphism.
Let $K = \map \ker \phi$ denote the kernel of $\phi$.

Then:

$\phi^{-1} \sqbrk {\phi \sqbrk H} = H \circ K$
where:

$\phi \sqbrk H$ denotes the image of $H$ under $\phi$
$\phi^{-1} \sqbrk {\phi \sqbrk H}$ denotes the preimage of $\phi \sqbrk H$ under $\phi$
$H \circ K$ denotes the subset product of $H$ with $K$.


Proof
Let $e_2$ be the identity element of $\struct {G_2, *}$.
Let $x \in \phi^{-1} \sqbrk {\phi \sqbrk H}$.
Then:














\(\ds x\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {\phi \sqbrk H}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(\in\)







\(\ds \phi \sqbrk H\)





Definition of Preimage of Element under Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists b \in H: \, \)



\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi b\)





Definition of Image of Element under Mapping








\(\ds \leadsto \ \ \)





\(\ds \map \phi x * \paren {\map \phi b}^{-1}\)

\(=\)







\(\ds e_2\)





Definition of Inverse Element in $G_2$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {x \circ b^{-1} }\)

\(=\)







\(\ds e_2\)





as $\phi$ is a homomorphism








\(\ds \leadsto \ \ \)





\(\ds x \circ b^{-1}\)

\(\in\)







\(\ds K\)





Definition of Kernel of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds b^{-1} \circ x\)

\(\in\)







\(\ds K\)





Definition of Normal Subgroup: Kernel is Normal Subgroup of Domain








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds H \circ K\)





as $x = b \circ \paren {b^{-1} \circ x}$




So we have shown that:

$\phi^{-1} \sqbrk {\phi \sqbrk H} \subseteq H \circ K$

Now suppose that $x \in H \circ K$.
Then:














\(\ds x\)

\(\in\)







\(\ds H \circ K\)














\(\ds \leadsto \ \ \)

\(\ds \exists b \in H, a \in K: \, \)



\(\ds x\)

\(=\)







\(\ds b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi b * \map \phi a\)





as $\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi b * e_2\)





as $a \in K$














\(\ds \)

\(=\)







\(\ds \map \phi b\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(\in\)







\(\ds \phi \sqbrk H\)





as $b \in H$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {\phi \sqbrk H}\)





Definition of Preimage of Subset under Mapping




So we have shown that:

$H \circ K \subseteq \phi^{-1} \sqbrk {\phi \sqbrk H}$

Hence the result by definition of set equality.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.20 \ \text {(a)}$




