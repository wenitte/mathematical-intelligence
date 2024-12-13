# 

Source: https://proofwiki.org/wiki/Image_under_Epimorphism_of_Center_is_Subset_of_Center

Theorem
Let $G$ and $H$ be groups.
Let $\theta: G \to H$ be an epimorphism.
Let $\map Z G$ denote the center of $G$.

Then:

$\theta \sqbrk {\map Z G} \subseteq \map Z H$


Proof
Let $y \in \theta \sqbrk {\map Z G}$.
Let $t \in H$.
We have that:

$y = \map \theta z$
for some $z \in \map Z G$
As $\theta$ is an epimorphism, it is by definition surjective.
Then:

$t = \map \theta s$
for some $s \in G$.
Hence:














\(\ds y t\)

\(=\)







\(\ds \map \theta z \map \theta s\)




















\(\ds \)

\(=\)







\(\ds \map \theta {z s}\)





Definition of Group Epimorphism














\(\ds \)

\(=\)







\(\ds \map \theta {s z}\)





Definition of Center of Group














\(\ds \)

\(=\)







\(\ds \map \theta s \map \theta z\)





Definition of Group Epimorphism














\(\ds \)

\(=\)







\(\ds t y\)





Definition of Group Epimorphism



As $t$ is arbitrary, it follows that $y \in \map Z H$.
The result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $6$




