# 

Source: https://proofwiki.org/wiki/Permutation_of_Cosets



Theorem
Let $G$ be a group and let $H \le G$.
Let $\mathbb S$ be the set of all distinct left cosets of $H$ in $G$.
Then:

$(1): \quad$ For any $g \in G$, the mapping $\theta_g: \mathbb S \to \mathbb S$ defined by $\map {\theta_g} {x H} = g x H$ is a permutation of $\mathbb S$.
$(2): \quad$ The mapping $\theta$ defined by $\map \theta g = \theta_g$ is a homomorphism from $G$ into the symmetric group on $\mathbb S$.
$(3): \quad$ The kernel of $\theta$ is the subgroup $\ds \bigcap_{x \mathop \in G} x H x^{-1}$.


Corollary 1
Let $G$ be a group.
Let $H \le G$ such that $\index G H = n$ where $n \in \Z$.

Then:

$\exists N \lhd G: N \lhd H: n \divides \index G H \divides n!$


Corollary 2
Let $G$ be a group.
Let $p$ be the smallest prime such that:

$p \divides \order G$
where $\divides$ denotes divisibility.

Let $\exists H: H \le G$ such that $\order H = p$.
Then $H$ is a normal subgroup of $G$.


Proof
First we need to show that $\theta_g$ is well-defined and injective.














\(\ds x H\)

\(=\)







\(\ds y H\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y^{-1} x\)

\(\in\)







\(\ds H\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {g y}^{-1} g x\)

\(=\)







\(\ds y^{-1} x \in H\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\theta_g} {y H}\)

\(=\)







\(\ds \map {\theta_g} {x H}\)










Thus $\theta_g$ is well-defined and injective.

Then we see that $\forall x H \in \mathbb S: \map {\theta_g} {g^{-1} x H} = x H$, so $\theta_g$ is surjective.
Thus $\theta_g$ is a well-defined bijection on $\mathbb S$, and therefore a permutation on $\mathbb S$.

Next we see:














\(\ds \map {\theta_{u v} } {x H}\)

\(=\)







\(\ds u v x H\)




















\(\ds \)

\(=\)







\(\ds \map {\theta_u} {v x H}\)




















\(\ds \)

\(=\)







\(\ds \map {\theta_u} {\map {\theta_v }{x H} }=\)










This shows that $\theta_{u v} = \theta_u \theta_v$, and thus:

$\map \theta {u v} = \map \theta u \, \map \theta v$
Thus $\theta$ is a homomorphism.

Now to calculate $\map \ker \theta$:














\(\ds \map \ker \theta\)

\(=\)







\(\ds \set {g \in G: \theta_g = I_\mathbb S}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \forall x \in G: \map {\theta_g} {x H} = x H}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \forall x \in G: g x h = x H}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \forall x \in G: x^{-1} g x h = H}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \forall x \in G: x^{-1} g x \in H}\)




















\(\ds \)

\(=\)







\(\ds \set {g \in G: \forall x \in G: g \in x H x^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{x \mathop \in G} x H x^{-1}\)









as required.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.22$




