# 

Source: https://proofwiki.org/wiki/Krull_Dimension_of_Open_Cover

Definition
Let $\struct {X, \tau}$ be a topological space.
Let $\CC \subseteq \tau$ be an open cover of $X$.

Then:

$\map \dim X = \set { \map \dim U : U \in \CC }$
where $\dim$ denotes the Krull dimension.


Proof
By Krull Dimension of Topological Subspace is Smaller:

$\forall U \in \CC : \map \dim X \ge \map \dim U$
Thus:

$\map \dim X \ge \set { \map \dim U : U \in \CC }$

Conversely, let:

$A_0 \subsetneq A_1 \subsetneq \cdots \subsetneq A_n$
be a chain of closed irreducible sets of $X$.
There exists an $U_0 \in \CC$ such that:

$U_0 \cap A_0 \ne \emptyset$
Let:

$\forall i = 0, \ldots, n : \tilde A_i := U_0 \cap A_i$
By Open Set of Irreducible Space is Irreducible, each $\tilde A_i$ is irreducible.
Moreover:

$\tilde A_0 \subsetneq \tilde A_1 \subsetneq \cdots \subsetneq \tilde A_n$
Indeed, $\tilde A_i = \tilde A_{i+1}$ would imply:

$A_{i+1} = A_i \cup \paren {A_{i+1} \setminus U_0}$
which contradicts the irreduciblity of $A_{i+1}$.
Thus:

$n \le \map \dim {U_0} \le \sup \set { \map \dim U : U \in \CC }$
As $\map \dim X$ is the spremum of such $n$, we have:

$\map \dim X \le \sup \set { \map \dim U : U \in \CC }$
$\blacksquare$


There is believed to be a mistake here, possibly a typo.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




