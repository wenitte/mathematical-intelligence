# 

Source: https://proofwiki.org/wiki/Group_Epimorphism_Induces_Bijection_between_Subgroups



Theorem
Let $G_1$ and $G_2$ be groups whose identities are $e_{G_1}$ and $e_{G_2}$ respectively.
Let $\phi: G_1 \to G_2$ be a group epimorphism.
Let $K := \map \ker \phi$ be the kernel of $\phi$.

Let $\mathbb H_1 = \set {H \subseteq G_1: H \le G_1, K \subseteq H}$ be the set of subgroups of $G_1$ which contain $K$.
Let $\mathbb H_2 = \set {H \subseteq G_2: H \le G_2}$ be the set of subgroups of $G_2$.

Then there exists a bijection $Q: \mathbb H_1 \leftrightarrow \mathbb H_2$ such that:

$\forall N \lhd G_1: \map Q N \lhd G_2$
$\forall N \lhd G_2: \map {Q^{-1} } N \lhd G_1$
where $N \lhd G_1$ denotes that $N$ is a normal subgroup of $G_1$.

That is, normal subgroups map bijectively to normal subgroups under $Q$.


Corollary
Let $H \le G$ denote that $H$ is a subgroup of $G$.

Then:

$\forall H \le G, K \subseteq H: \phi \sqbrk H \cong H / K$
where $H / K$ denotes the quotient group of $H$ by $K$.


Proof
Let $Q$ be the mapping defined as:

$\forall H \le \mathbb H_1: \map Q H = \set {\map \phi h: h \in H}$
Let $H$ be a subgroup of $G_1$ such that $K \subseteq H$.
From Group Homomorphism Preserves Subgroups, $\phi \sqbrk H$ is a subgroup of $G_2$.
This establishes that $Q$ is actually a mapping.

Let $N \lhd G_1$.
From Group Epimorphism Preserves Normal Subgroups, $\phi \sqbrk N$ is a normal subgroup of $G_2$.
This establishes that:

$\forall N \lhd G_1: \map Q N \lhd G_2$

Next it is shown that $Q$ is a bijection.


Injective Nature of $Q$
Let $H, J \in \mathbb H_1$.
Let $\map Q H = \map Q J$.
Let $h \in H$.














\(\ds \map \phi h\)

\(\in\)







\(\ds \map Q H\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi h\)

\(\in\)







\(\ds \map Q J\)














\(\ds \leadsto \ \ \)

\(\ds \exists j \in J: \, \)



\(\ds \map \phi j\)

\(=\)







\(\ds \map \phi h\)














\(\ds \leadsto \ \ \)





\(\ds e_{G_2}\)

\(=\)







\(\ds \paren {\map \phi j}^{-1} \paren \phi h\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi {j^{-1} } \map \phi h\)





Group Homomorphism Preserves Inverses














\(\ds \)

\(=\)







\(\ds \map \phi {j^{-1} h}\)





morphism property of $\phi$








\(\ds \leadsto \ \ \)





\(\ds j^{-1} h\)

\(\in\)







\(\ds K\)





Definition of Kernel of Group Homomorphism








\(\ds \leadsto \ \ \)

\(\ds \exists k \in K: \, \)



\(\ds j^{-1} h\)

\(=\)







\(\ds k\)














\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds j k\)




















\(\ds \)

\(\in\)







\(\ds J\)





as $K \subseteq J$ and so $k \in j$








\(\ds \leadsto \ \ \)





\(\ds H\)

\(\subseteq\)







\(\ds J\)









A similar argument shows that $J \subseteq H$.
So by definition of set equality:

$H = J$
Thus:

$\map Q H = \map Q J \implies H = J$
So by definition, $Q$ is injective.
$\Box$


Surjective Nature of $Q$
Now let $N' \in \mathbb H_2$.
By definition of $\mathbb H_2$, $N'$ is a subgroup of $G_2$.
Let $N = \set {x: \map \phi x = N'}$.
We have from Identity of Subgroup that $e_{G_2} \in N'$.
Thus by definition of kernel, $K \subseteq N$.
Now suppose $\map \phi x, \map \phi y \in N'$.
Then:














\(\ds \map \phi {x y^{-1} }\)

\(=\)







\(\ds \map \phi x \map \phi {y^{-1} }\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi x \map \phi {y^{-1} }\)





Group Homomorphism Preserves Inverses














\(\ds \)

\(\in\)







\(\ds N'\)





One-Step Subgroup Test








\(\ds \leadsto \ \ \)





\(\ds x y^{-1}\)

\(\in\)







\(\ds N\)









So by the One-Step Subgroup Test, $N$ is a subgroup of $G_1$.
It has been established that $K \subseteq N$, and so $N \in \mathbb H_1$.
Thus it follows that for all $N' \in \mathbb H_2$ there exists $N \in H_1$ such that $\map Q N = N'$.
So $Q$ is a surjection.
$\Box$

So $Q$ has been shown to be both an injection and a surjection, and so by definition is a bijection.

Finally, it can then be shown that if $N'$ is normal in $G_2$, it follows that $N = \map {Q^{-1} } {N'}$ is normal in $G_1$.
This establishes that: 

$\forall N \lhd G_2: \map {Q^{-1} } N \lhd G_1$

This needs considerable tedious hard slog to complete it.In particular: if $N'$ is normal in $G_2$, it follows that $N = \map {Q^{-1} } {N'}$ is normal in $G_1$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Also see
First Isomorphism Theorem


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $29$




