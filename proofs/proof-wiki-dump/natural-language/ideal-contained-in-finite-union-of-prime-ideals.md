# 

Source: https://proofwiki.org/wiki/Ideal_Contained_in_Finite_Union_of_Prime_Ideals


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.In particular: Tighten it up and complete the sloppy work.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $A$ be a commutative ring with unity.
Let $\mathfrak p_1, \ldots, \mathfrak p_n$ be prime ideals.
Let $\mathfrak a \subseteq \ds \bigcup_{i \mathop = 1}^n \mathfrak p_i$ be an ideal contained in their union.

Then $\mathfrak a \subseteq \mathfrak p_i$ for some $i \in \{1, \ldots, n\}$.


Proof
The proof goes by induction on $n$.
For $n = 1$, the statement is trivial.
Let $n > 1$.
Suppose that the statement holds for $n - 1$ prime ideals.
It is to be shown that the statement holds for $n$ prime ideals.
Aiming for a contradiction, suppose that $\mathfrak a \nsubseteq \mathfrak p_i$ for all $i \in \set {1, \ldots, n}$.
By the induction hypothesis, for all $i$ we have:

$\mathfrak a \nsubseteq \ds \bigcup_{j \mathop \ne i} \mathfrak p_j$
For all $i$, let $x_i \in \mathfrak a \setminus \ds \bigcup_{j \mathop \ne i} \mathfrak p_j$.
Suppose there exists $i$ such that $x_i \notin \mathfrak p_i$.
Then:

$x_i \in \mathfrak a \setminus \ds \bigcup_j \mathfrak p_j$
and we conclude that:

$\mathfrak a \nsubseteq \ds \bigcup_j \mathfrak p_j$
which is a contradiction.
$\Box$

The other possibility is that for all $i$:

$x_i \in \mathfrak p_i$
Let:

$y = \ds \sum_{i \mathop = 1}^n \prod_{\substack{j \mathop = 1 \\ j \mathop\neq i}}^n x_j$
be defined as a summation of products.
All terms except the $i$th are in $\mathfrak p_i$.
Since Sum of an Element in an Ideal and an Element not in the Ideal is not in the Ideal:

$\forall i:\quad y \notin \mathfrak p_i$
Thus:

$y \in \mathfrak a \setminus \bigcup_j \mathfrak p_j$
This also leads to a contradiction.
$\blacksquare$


Also see
Generalization

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Group Contained in Union of Two GroupsWe already have this or similar as a proof somewhere on $\mathsf{Pr} \infty \mathsf{fWiki}$, in the form that $H \cup K$ is a group iff $H \subseteq K$ or $K \subseteq H$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Let $G,H,K$ be groups.
If $G \subseteq H \cup K$, then $G \subseteq H$ or $G \subseteq K$.

Proof
Aiming for a contradiction, suppose that neither $G \subseteq H$ nor $G \subseteq K$.
Then there exists $x \in G \setminus H$.
By assumption $G \subseteq H \cup K$, then $x \in H \cup K$, so $x \in K$.
Similarly, there exists $y \in G \setminus K$.
By assumption $G \subseteq H \cup K$, then $y \in H \cup K$, so $y \in H$.
Since $x,y \in G$, we have $xy \in G$, so $xy \in H \cup K$.
Without loss of generality $xy \in H$.
Since $xy \in H, y \in H$, we have $x = (xy)y^{-1} \in H$,
which is a contradiction.

Sources
1969: M.F. Atiyah and I.G. MacDonald: Introduction to Commutative Algebra: Chapter $1$: Rings and Ideals: $\S$ Operations on Ideals: Proposition $1.11$
1986: Hideyuki Matsumura: Commutative Ring Theory: Exercises to $\S16$ Regular sequences and the Koszul complex: Exercise $16.8$




