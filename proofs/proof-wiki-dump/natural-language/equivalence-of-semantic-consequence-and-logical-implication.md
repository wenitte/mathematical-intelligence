# 

Source: https://proofwiki.org/wiki/Equivalence_of_Semantic_Consequence_and_Logical_Implication


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.

Work In ProgressIn particular: This pertains to classical PC, intuitionistic PC is not soundYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


Theorem
Let $U = \set {\phi_1, \phi_2, \ldots, \phi_m, \ldots}$ be a countable set of propositional formulas.
Let $\psi$ be a propositional formula.

Then $U \models \psi$ if and only if $U \vdash \psi$.

That is, semantic consequence is equivalent to provable consequence.


Direct Proof
Necessary Condition
This is a statement of the Extended Soundness Theorem for Propositional Tableaux and Boolean Interpretations:
Let $\mathbf H$ be a countable set of propositional formulas.
Let $\mathbf A$ be a propositional formula.

If $\mathbf H \vdash \mathbf A$, then $\mathbf H \models \mathbf A$.


Sufficient Condition
This is the statement of the Extended Completeness Theorem for Propositional Tableaux and Boolean Interpretations.
$\blacksquare$


Comment
There are two things being proved here:

$(1): \quad$ Suppose we have a sequent $\phi_1, \phi_2, \ldots, \phi_m, \ldots \vdash \psi$, the validity of which has been established, for example, by a tableau proof.
The result:

if $\phi_1, \phi_2, \ldots, \phi_m, \ldots \vdash \psi$ then $\set {\phi_1, \phi_2, \ldots, \phi_m, \ldots} \models \psi$
establishes that if all the propositions $\phi_1, \phi_2, \ldots, \phi_m, \ldots$ evaluate to true, then so does $\psi$.
This establishes that propositional logic is sound.


$(2): \quad$ Suppose we have determined that $\set {\phi_1, \phi_2, \ldots, \phi_m, \ldots} \models \psi$.
The result:

if $\set {\phi_1, \phi_2, \ldots, \phi_m, \ldots} \models \psi$ then $\phi_1, \phi_2, \ldots, \phi_m, \ldots \vdash \psi$
establishes that if we can show that there is a model for a proposition, then we will be able to find a tableau proof for it.
This establishes that propositional logic is complete.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.11$: Compactness: Corollary $1.11.6$




