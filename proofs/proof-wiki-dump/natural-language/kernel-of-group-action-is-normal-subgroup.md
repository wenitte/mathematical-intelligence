# 

Source: https://proofwiki.org/wiki/Kernel_of_Group_Action_is_Normal_Subgroup


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Careless use of operator symbolsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $G$ be a group whose identity is $e$.
Let $X$ be a set.
Let $\phi: G \times X \to X$ be a group action.

Let $G_0$ denote the kernel of $\phi$.

Then $G_0$ is a normal subgroup of $G$.


Proof
Let $h \in G_0$.














\(\ds h\)

\(\in\)







\(\ds G_0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds h\)

\(\in\)







\(\ds \set {g \in G: \forall x \in X: g \cdot x = x}\)





Definition of Kernel of Group Action








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in X: \, \)



\(\ds h\)

\(\in\)







\(\ds \set {g \in G: g \cdot x = x}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in X: \, \)



\(\ds h\)

\(\in\)







\(\ds \Stab x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds h\)

\(\in\)







\(\ds \bigcap_{x \mathop \in X} \Stab x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds G_0\)

\(=\)







\(\ds \bigcap_{x \mathop \in X} \Stab x\)









From Stabilizer is Subgroup:

$\Stab x \le G$
Thus $G_0$ is the intersection of subgroups.
By Intersection of Subgroups is Subgroup:

$G_0 \le G$

To prove normality it is sufficient to show:

$\forall g \in G: g G_0 g^{-1} = G_0$
Let $h \in G_0, g \in G$ be arbitrary.
Then:














\(\ds \paren {g h g^{-1} } \cdot x\)

\(=\)







\(\ds g \cdot \paren {h \cdot \paren { g^{-1} \cdot x } }\)





Group Action Associates with Group Operation: Group Action Axiom $\text {GA} 1$














\(\ds \)

\(=\)







\(\ds g \cdot \paren {g^{-1} \cdot x}\)





because $h \in \Stab { g^{-1} \cdot x}$














\(\ds \)

\(=\)







\(\ds \paren {g \cdot  g^{-1} } \cdot x\)





Group Action Associates with Group Operation: Group Action Axiom $\text {GA} 1$














\(\ds \)

\(=\)







\(\ds x\)





$e \cdot x = x$: Group Action Axiom $\text {GA} 2$




Therefore:

$g h g^{-1} \in G_0$
so:

$g G_0 g^{-1} \subseteq G_0$
Conversely suppose that $h \in G_0$.
Then by the above:

$h' = g^{-1} h g \in G_0$
Therefore:

$h = g h' g^{-1} \in g G_0 g^{-1}$
and so:

$G_0 \subseteq g G_0 g^{-1}$
This concludes the proof.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 53 \beta$




