# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Infinite_Set_Equivalent_to_Itself_implies_Axiom_of_Choice

Theorem
Suppose that, for every Dedekind-infinite set $A$, it holds that:

$A \sim A \times A$
where $\sim$ denotes set equivalence, and $\times$ denotes the cartesian product.

Then, the Axiom of Choice holds.


Proof
By Zermelo's Well-Ordering Theorem is Equivalent to Axiom of Choice, it suffices to show that the hypothesis implies Zermelo's Well-Ordering Theorem.
Since every finite set is well-orderable, it suffices to consider only infinite sets.

Let $B$ be an arbitrary infinite set.
Without loss of generality, assume that $B \cap \On = \O$.
By Existence of Ordinal with no Surjection from Set, let $\beta \in \On \setminus \set \O$ such that there is no surjection from $B$ to $\beta$.
From Set is Infinite iff exist Subsets of all Finite Cardinalities, it follows that $\beta$ is infinite.

We have:

$\omega \subseteq \beta \subseteq B \cup \beta$
so by Equivalent Conditions for Dedekind-Infinite Set:

$B \cup \beta$ is Dedekind-infinite.
Therefore, by hypothesis, there exists a bijection:

$\phi : B \cup \beta \to \paren {B \cup \beta} \times \paren {B \cup \beta}$
For each $x \in B$, define:

$S_x = \set {\gamma \in \beta : \map \phi \gamma \in \beta \times \set x}$

Aiming for a contradiction, suppose for some $x_0 \in B, S_{x_0} = \O$.
Then, since $\phi$ is a bijection, it follows that $\phi^{-1} \sqbrk {\beta \times \set {x_0}} \subseteq B$.
Hence, the mapping $\psi : B \to \beta$ defined as:

$\map \psi y = \begin{cases} \gamma & : \map \phi y = \tuple {\gamma, x_0} \\ 0 & : \text{otherwise} \end{cases}$
is a surjection.
Since the contradicts the definition of $\beta$, we conclude that each $S_x \ne \O$.

Finally, we define $\chi : B \to \beta$ as:

$\map \chi x = \min S_x$
Suppose that, for $x, y \in B$, we have:

$\map \chi x = \map \chi y$
Then, since:

$\map \phi {\map \chi x} \in \beta \times \set x$
$\map \phi {\map \chi y} \in \beta \times \set y$
it follows from the equality that $x = y$.
Therefore, $\chi$ is an injection.

Thus, by Injection Induces Well-Ordering:

$B$ is well-orderable
Since $B$ was arbitrary, it follows that Zermelo's Well-Ordering Theorem holds.
$\blacksquare$





