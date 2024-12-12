# 

Source: https://proofwiki.org/wiki/Characterization_of_Compact_Element_in_Complete_Lattice/Statement_3_implies_Statement_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $L = \struct{S, \preceq}$ be a complete lattice.
Let $a \in S$ satisfy:

$\forall A \subseteq S : a \preceq \sup A \implies \exists F \subseteq A : F$ is finite $: a \preceq \sup F$

Then:

$\forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$


Proof
Let:

$I \subseteq S : I$ is an ideal $: a \preceq \sup I$
We have by hypothesis:

$\exists F \subseteq I : F$ is finite $: a \preceq \sup F$
By Join Semilattice Ideal Axiom $\paren{\text {JSI} 2 }$: Subsemilattice of Join Semilattice:

$\sup F \in I$
By Join Semilattice Ideal Axiom $\paren{\text {JSI} 1 }$: Lower Section of Join Semilattice:

$a \in I$

Since $I$ was arbitrary:

$\forall I \subseteq S : I$ is an ideal $: a \preceq \sup I \implies a \in I$
$\blacksquare$





