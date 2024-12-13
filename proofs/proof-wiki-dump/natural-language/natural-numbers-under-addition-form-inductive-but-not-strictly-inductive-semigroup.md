# 

Source: https://proofwiki.org/wiki/Natural_Numbers_under_Addition_form_Inductive_but_not_Strictly_Inductive_Semigroup

Theorem
Let $\struct {\N, +}$ denote the algebraic structure consisting of the set of natural numbers $\N$ under addition $+$.
Then $\struct {\N, +}$ forms an inductive semigroup, but not a strictly inductive semigroup


Proof
Recall the definition of inductive semigroup:
Let $\struct {S, \circ}$ be a semigroup.
Let there exist $\alpha, \beta \in S$ such that the only subset of $S$ containing both $\alpha$ and $x \circ \beta$ whenever it contains $x$ is $S$ itself.
That is:

$\exists \alpha, \beta \in S: \forall A \subseteq S: \paren {\alpha \in A \land \paren {\forall x \in A: x \circ \beta \in A} } \implies A = S$

Then $\struct {S, \circ}$ is an inductive semigroup.

Recall the definition of strictly inductive semigroup:
Let there exist $\beta \in S$ such that the only subset of $S$ containing both $\beta$ and $x \circ \beta$ whenever it contains $x$ is $S$ itself.

$\exists \beta \in S: \forall A \subseteq S: \paren {\beta \in S \land \paren {\forall x \in A: x \circ \beta \in A} } \implies A = S$
Then $\struct {S, \circ}$ is a strictly inductive semigroup.

The natural numbers $\N$ can be considered as a naturally ordered semigroup.
From Naturally Ordered Semigroup is Unique, $\struct {\N, +}$ is unique up to isomorphism.


This article, or a section of it, needs explaining.In particular: For some reason I can't find the exact result which performs that identificationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence from Naturally Ordered Semigroup forms Peano Structure, $\N$ is a Peano structure.
Let $S$ be a subset of $\N$.
Then by Peano's Axiom $\text P 5$: Principle of Mathematical Induction:

$\paren {0 \in S \land \paren {\forall z \in S: z + 1 \in S} } \implies S = \N$
The latter condition is that which defines an inductive semigroup, where $0$ is identified with $\alpha$ and $1$ with $\beta$.

However, there is no element in $\struct {\N, +}$ which can be identified with $\beta$ in the definition of strictly inductive semigroup.
Indeed, the element $0$ can be expressed in the form $x \circ 1$ for any $x$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.9 \ \text {(c)}$




