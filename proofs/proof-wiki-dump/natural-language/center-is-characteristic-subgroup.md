# 

Source: https://proofwiki.org/wiki/Center_is_Characteristic_Subgroup

Theorem
Let $G$ be a group.

Then its center $\map Z G$ is characteristic in $G$.


Proof
By Identity Mapping is Group Automorphism, there exists at least one automorphism of $G$.
Let $\phi$ be an automorphism of $G$.
Let $x \in \map Z G, y \in G$.
Then:














\(\ds \map \phi x y\)

\(=\)







\(\ds \map \phi x \map \phi {\map {\phi^{-1} } y}\)





automorphisms are bijections














\(\ds \)

\(=\)







\(\ds \map \phi {x \map {\phi^{-1} } y}\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {\map {\phi^{-1} } y x}\)





Definition of Center of Group














\(\ds \)

\(=\)







\(\ds \map \phi {\map {\phi^{-1} } y} \map \phi x\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds y \map \phi x\)









Hence $\map \phi x \in \map Z G$.
So we have $\phi \sqbrk {\map Z G} \subseteq \map Z G$.
Since $\phi^{-1}$ is also an automorphism:

$\phi^{-1} \sqbrk {\map Z G} \subseteq \map Z G$
Since $\phi$ is a bijection:

$\map Z G = \phi \sqbrk {\phi^{-1} \sqbrk {\map Z G}} \subseteq \phi \sqbrk {\map Z G}$

Therefore we conclude that $\phi \sqbrk {\map Z G} = \map Z G$.
Hence $\map Z G$ is characteristic in $G$.
$\blacksquare$





