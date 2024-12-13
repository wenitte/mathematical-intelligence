# 

Source: https://proofwiki.org/wiki/Schur%27s_Lemma_(Representation_Theory)/Corollary


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Corollary to Schur's Lemma
Let $\struct {G, \cdot}$ be a finite group.
Let $\struct {V, \phi}$ be a $G$-module.
Let the underlying field $k$ of $V$ be algebraically closed.
Let:

$\map {\mathrm {End}_G} V := \leftset {f: V \to V: f}$ is a homomorphism of $G$-modules$\rightset {}$

Then:

$\map {\mathrm {End}_G} V$
is a field, with the same structure as $k$.


Proof
Denote the identity mapping on $V$ as $I_V: V \to V$.
If $f = 0$, since $0\in k$ it can be written $f = 0 I_V$.


This article, or a section of it, needs explaining.In particular: Not clear what the above line means.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $f$ be an automorphism.
We have that $k$ is algebraically closed.
Therefore the characteristic polynomial of $f$ is complete reducible in $k \sqbrk x$.
Hence $f$ has all eigenvalue in $k$.

Let $\lambda \in k$ be an eigenvalue of $f$.
Consider the endomorphism:

$f - \lambda I_V: V \to V$
Because $\lambda$ is an eigenvalue:

$\map \ker {f - \lambda I_V} \ne \set 0$
From Schur's Lemma:

$f = \lambda I_V$
$\paren {\lambda I_V} \circ \paren {\mu I_V} = \paren {\lambda \mu} I_V$
$\lambda I_V + \paren {-\mu I_V} = \paren {\lambda - \mu} I_V$
From Subring Test:

$\map {\mathrm {End}_G} V$ is a subring of the ring endomorphisms of $V$ as an abelian group.
Let $\phi: \map {\mathrm {End}_G} V \to k$ be defined as:

$\map \phi {\lambda I_V} = \lambda$
Then:

$\map \phi {\lambda I_V + \mu I_V} = \lambda + \mu = \map \phi {\lambda I_V} + \map \phi {\mu I_V}$
$\map \phi {\paren {\lambda I_V} \circ \paren {\mu I_V} } = \lambda \mu = \map \phi {\lambda I_V} \map \phi {\mu I_V}$
Hence $\phi$ is a ring isomorphism.
But since $k$ is a field it is a field isomorphism.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




