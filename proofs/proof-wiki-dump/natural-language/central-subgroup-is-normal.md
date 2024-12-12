# 

Source: https://proofwiki.org/wiki/Central_Subgroup_is_Normal



Theorem
Let $G$ be a group.
Let $H$ be a central subgroup of $G$.

Then $H$ is a normal subgroup of $G$.


Proof 1
Let $H$ be a central subgroup of $G$.
By definition of central subgroup:

$H \subseteq \map Z G$
where $\map Z G$ is the center of $G$.

Thus we have that $H$ is a group which is a subset of $\map Z G$.
Therefore by definition $H$ is a subgroup of $\map Z G$.
We also have from Center of Group is Abelian Subgroup that $\map Z G$ is an abelian group.


The validity of the material on this page is questionable.In particular: Being a normal subgroup of a subgroup does not mean being a normal subgroup of the whole groupYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It follows from Subgroup of Abelian Group is Normal that $Z$ is a normal subgroup of $G$.
$\blacksquare$


Proof 2
Let $H$ be a central subgroup of $G$.
By definition of central subgroup:

$H \subseteq \map Z G$
where $\map Z G$ is the center of $G$.

Then:










\(\ds \forall x \in G: \forall h \in H: \, \)



\(\ds x h x^{-1}\)

\(=\)







\(\ds x x^{-1} h\)





as $h \in H \implies h \in \map Z G$














\(\ds \)

\(=\)







\(\ds h\)














\(\ds \leadsto \ \ \)





\(\ds x h x^{-1}\)

\(\in\)







\(\ds H\)





as $h \in H$








\(\ds \leadsto \ \ \)





\(\ds H\)

\(\lhd\)







\(\ds G\)





Definition of Normal Subgroup



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures




