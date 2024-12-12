# 

Source: https://proofwiki.org/wiki/Finite_Product_Space_is_Connected_iff_Factors_are_Connected/General_Case



Theorem
Let $I$ be an indexing set.
Let $\family {T_\alpha}_{\alpha \mathop \in I}$ be an indexed family of topological spaces.
Let $T = \ds \prod_{\alpha \mathop \in I} T_\alpha$ be the Cartesian space of $\family {T_\alpha}_{\alpha \mathop \in I}$.
Let $T = \ds \overline {\bigcup_{\alpha \mathop \in I} S_\alpha}$.


This article, or a section of it, needs explaining.In particular: Notation in the above -- explain what the overline means in this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\tau$ be a topology on $T$ such that the subsets ${S'}_\alpha \subseteq \ds \prod T_\alpha$ where ${S'}_\alpha = \set {\family {y_\beta} \in T: y_\beta = x \beta \text { for all } \beta \ge \alpha}$ is homeomorphic to $S_{\alpha - 1} \times T_\alpha$.

Then $T$ is connected if and only if each of $T_\alpha: \alpha \in I$ are connected.


Proof
Let the Axiom of Choice be assumed.
Let $I$ be well-ordered.
Let $x = \family {x_\alpha} \in T$ be some arbitrary fixed element of $T$.
Let $S_\alpha = \set {\family {y_\beta} \in T: y_\beta = x \beta \text { for all } \beta \ge \alpha}$.
We have that $S_\alpha$ is homeomorphic to $S_{\alpha - 1} \times T_\alpha$.
Then from Finite Product Space is Connected iff Factors are Connected, $S_\alpha$ is connected if and only if $S_{\alpha - 1}$ is.
Let $\alpha$ be a limit ordinal.
Then:

$S_\alpha = \ds \paren {\bigcup_{\beta \mathop < \alpha} S_\beta}^-$
where $X^-$ denotes the closure of $X$.
So if each $S_\beta$ is connected for $\beta < \alpha$, it follows that $S_\alpha$ must likewise be connected, as $\family \gamma$ is nested.
Thus:

$T = \ds \overline {\bigcup_{\alpha \mathop \in I} S_\alpha}$ is connected.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Functions and Products




