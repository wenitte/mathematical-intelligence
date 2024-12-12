# 

Source: https://proofwiki.org/wiki/Banach-Alaoglu_Theorem



Theorem
Let $X$ be a separable normed vector space.
Then the closed unit ball in its normed dual $X^*$ is sequentially compact with respect to the weak-$\ast$ topology.



This article needs proofreading.In particular: In its exposition in 1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics, the statement is that in a dual Banach space, the unit ball is weak star compact, and more generally, that the polar of a neighborhood of the origin in a topological vector space is also weak star compact. All these terms are to be explored, and the terminology unified somehow.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Proof 1
The aim of this proof is to show the following:
Given a bounded sequence in $X^*$, there exists a weakly convergent subsequence of that bounded sequence.

Let $\sequence {l_n}_{n \mathop \in \N}$ be a bounded sequence in $X^*$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a countable dense subset of $X$.
Choose subsequences $\N \supset \Lambda_1 \supset \Lambda_2 \supset \ldots$ such that:

$\forall j \in \N: \map {l_k} {x_j} \to a_j =: \map l {x_j}$
as $k \to \infty$, $k \in \Lambda_j$.


This article, or a section of it, needs explaining.In particular: Why does $a_j$ exist?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\Lambda$ be the diagonal sequence.


Lemma 1
$l$ can be extended to an element of $X^*$.
$\Box$


Lemma 2
$l_k \stackrel {\omega^*} {\to} l$ as $k \to \infty$, $k \in \Lambda$.
$\Box$


Proof 2
Let $X$ be a normed vector space.
Denote by $B$ the closed unit ball in $X$.
Let $X^*$ be the dual of $X$.
Denote by $B^*$ the closed unit ball in $X^*$.
Let:

$\map \FF B = \closedint {-1} 1^B$
be the topological space of functions from $B$ to $\closedint {-1} 1$.

By Tychonoff's Theorem:

$\map \FF B$
is compact with respect to the product topology.
We define the restriction map:

$R: B^* \to \map \FF B$
by:

$\forall \psi \in B^*: \map R \psi = \psi \restriction_B$


Lemma 3
$R \sqbrk {B^*}$ is a closed subset of $\map \FF B$.
$\Box$


Lemma 4
$R$ is a homeomorphism from $B^*$ with the weak* topology to its image:

$R \sqbrk {B^*}$
seen as a subset of $\map \FF B$ with the product topology.
$\Box$

Thus by Lemma 4, $B^*$ in the weak* topology is homeomorphic with $R \sqbrk {B^*}$.
This is a closed set of $\map \FF B$ (by Lemma 3) and thus compact.
By the Eberlein-Šmulian Theorem, this is sequentially compact.


This article, or a section of it, needs explaining.In particular: Exactly what the Eberlein-Šmulian Theorem that results in the above conclusionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

There is believed to be a mistake here, possibly a typo.In particular: No, this is wrong. Eberlein-Šmulian Theorem is not sufficientYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This needs considerable tedious hard slog to complete it.In particular: We need to use the metrization to conclude sequential compactness.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 3
Let $B_{X^\ast}$ be the closed unit ball in $X^\ast$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$. 
From the definition of the norm of a bounded linear functional, we have: 

$B_{X^\ast} = \set {f : X \to \GF : \cmod {\map f x} \le \norm x \text { and } f \text { is linear} }$
For each $x \in X$, let: 

$K_x = \set {\lambda \in \GF : \cmod \lambda \le \norm x}$
Let: 

$\ds K = \prod_{x \mathop \in X} K_x$
equipped with the product topology. 
Then if $f \in K$ and $x \in X$ we have $\map f x \in K_x$ if and only if $\cmod {\map f x} \le \norm x$. 
Then: 

$B_{X^\ast} = \set {f \in K : f \text { is linear} }$
Let $\pr_x : K \to \GF$ denote the projection onto the $x$th factor, that is: 

$\map {\pr_x} f = \map f x$
for each $f \in K$.
From the definition of the product topology, the product topology on $K$ is the initial topology induced by $\set {\pr_x : x \in X}$. 
From Subspace Topology on Initial Topology is Initial Topology on Restrictions, the subspace topology on $B_{X^\ast}$ inherited by $K$ is the initial topology on $B_{X^\ast}$ induced by $\set {\pr_x \restriction_{B_{X^\ast} } : x \in X}$.
Applying Subspace Topology on Initial Topology is Initial Topology on Restrictions to $\struct {X^\ast, w^\ast}$, this is precisely the subspace topology on $B_{X^\ast}$ inherited by the weak-$\ast$ topology on $X^\ast$. 
From Tychonoff's Theorem, $K$ is compact. 
From Closed Subspace of Compact Space is Compact, it suffices to show that $B_{X^\ast}$ is closed in $\struct {K$.
We may now write: 














\(\ds B_{X^\ast}\)

\(=\)







\(\ds \set {f \in K : \lambda \map f x + \mu \map f y = \map f {\lambda x + \mu y} \text { for all } x, y \in X, \, \lambda, \mu \in \GF}\)




















\(\ds \)

\(=\)







\(\ds \set {f \in K : \map {\paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} } } f = 0 \text { for all } x, y \in X, \, \lambda, \mu \in \GF}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{x, y \in X, \, \lambda, \mu \in \GF} \paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} }^{-1} \sqbrk {\set 0}\)









From Linear Combination of Continuous Functions valued in Topological Vector Space is Continuous: 

$\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y}$ is continuous for each $x, y \in X$ and $\lambda, \mu \in \GF$.
From Continuity Defined from Closed Sets, we have that: 

$\paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} }^{-1} \sqbrk {\set 0}$ is closed in $K$.
Since the intersection of closed sets is closed, we have that: 

$\ds \bigcap_{x, y \in X, \, \lambda, \mu \in \GF} \paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} }^{-1} \sqbrk {\set 0}$ is closed in $K$.
So $\struct {B_{X^\ast}, w^\ast}$ is closed in $K$.
From Closed Subspace of Compact Space is Compact, $\struct {B_{X^\ast}, w^\ast}$ is compact.
$\blacksquare$


Also known as
The Banach-Alaoglu Theorem is also known just as Alaoglu's Theorem.


Source of Name
This entry was named for Stefan Banach and Leonidas Alaoglu.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Alaoglu's theorem
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Banach-Alaoglu theorem

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Determine whether a proof has been given in either of the sources below -- if so, either transcribe those proofs or include these sources into whichever proof is given hereIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2010: H.L. Royden and P.M. Fitzpatrick: Real Analysis (4th ed.): $\S 15.1$
2013: Francis Clarke: Functional Analysis, Calculus of Variations and Optimal Control: $3.3$: The weak* topology




