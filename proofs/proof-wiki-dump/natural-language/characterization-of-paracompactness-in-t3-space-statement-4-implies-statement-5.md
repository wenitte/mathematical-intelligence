# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Statement_4_implies_Statement_5


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological Space.

If every open cover of $T$ is even then:

every open cover of $T$ has an open $\sigma$-discrete refinement
Proof
Let every open cover of $T$ be even.

Let $\UU$ be an open cover of $T$.

Lemma 8
there exists a $\sigma$-discrete refinement $\AA$ of $\UU$
$\Box$

By definition of $\sigma$-discrete set of subsets:

$\AA = \ds \bigcup_{n \in \N} \AA_n$ where $\AA_n$ is a discrete set of subsets for each $n \in \N$.

Let $X \times X$ denote the cartesian product of $X$ with itself.

Let $\tau_{X \times X}$ denote the product topology on $X \times X$.

Let $T \times T$ denote the product space $\struct {X \times X, \tau_{X \times X} }$. 

Lemma 9
Let $\BB$ be a discrete set of subsets of $X$.

Then there exists an open neighborhood $W$ of the diagonal $\Delta_X$ of $X \times X$ in $T \times T$:

$\forall x \in X : \card {\set{B \in \BB : \map W x \cap W \sqbrk B \ne \O}} \le 1$
$\Box$

From Lemma 9:

$\forall n \in \N$ there exists a neighborhood $V_n$ of the diagonal $\Delta_X$ of $X \times X$ in $T \times T$:
$\forall x \in X : \card {\set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \ne \O}} \le 1$

By definition of refinement:

$\forall A \in \AA : \exists U_A \in U : A \subseteq U_A$

For each $n \in \N$, let:

$\WW_n = \set{U_A \cap V_n \sqbrk A : A \in \AA_n}$

Let:

$\WW = \ds \bigcup_{n \in \N} \WW_n$
Lemma 10
$\WW$ is an open $\sigma$-discrete refinement of $\UU$
$\Box$

Since $\UU$ was arbitrary, then every open cover of $T$ has an open $\sigma$-discrete refinement
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1955: John L. Kelley: General Topology: Chapter $5$: Compact Spaces: $\S$Paracompactness: Lemma $33$




