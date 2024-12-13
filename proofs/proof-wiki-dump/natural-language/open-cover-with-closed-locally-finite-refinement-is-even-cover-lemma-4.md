# 

Source: https://proofwiki.org/wiki/Open_Cover_with_Closed_Locally_Finite_Refinement_is_Even_Cover/Lemma_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct {X, \tau}$ be a topological Space.

Let $\UU$ be an open cover of $T$.

Let $\AA$ be a closed locally finite refinement of $\UU$.
For each $A \in \AA$, let $U_A \in \UU$ such that $A \subseteq U_A$.
For each $A \in \AA$, let:

$V_A = \paren {U_A \times U_A} \cup \paren {\paren {X \setminus A} \times \paren {X \setminus A} }$

Let $T \times T = \struct {X \times X, \tau_{X \times X} }$  denote the product space of $T$ with itself.

Then:

$\forall A \in \AA : V_A$ is an open neighborhood of the diagonal $\Delta_X$ in $T \times T$


Proof
Let $A \in \AA$.

By definition of closed set:

$X \setminus A$ is open in $T$
By definition of product topology:

$U_A \times U_A, \paren {X \setminus A} \times \paren {X \setminus A}$ are open in $T \times T$
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$V_A = \paren {U_A \times U_A} \cup \paren {\paren {X \setminus A} \times \paren {X \setminus A}}$ is open in $T \times T$

Let $x \in X$.

By definition of set difference:

either $x \in A$ or $x \in X \setminus A$.
By definition of subset:

either $x \in U_A$ or $x \in X \setminus A$.
By definition of cartesian product:

either $\tuple {x, x} \in U_A \times U_A$ or $\tuple {x, x} \in \paren {X \setminus A} \times \paren {X \setminus A}$
By definition of set union:

$\tuple {x, x} \in V_A$

Since $x$ was arbitrary:

$\forall x \in X : \tuple {x, x} \in V_A$
By definition of diagonal:

$\Delta_X \subseteq V_A$

Since $A$ was arbitrary:

$\forall A \in \AA : V_A$ is an open neighborhood of the diagonal $\Delta_X$ in $T \times T$
$\blacksquare$





