# 

Source: https://proofwiki.org/wiki/Principle_of_General_Induction/Minimally_Closed_Class



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a mapping on $M$.
Let $b \in M$ such that $M$ is minimally closed under $g$ with respect to $b$.

Let $P: M \to \set {\T, \F}$ be a propositional function on $M$.
Suppose that:

$(1): \quad \map P b = \T$
$(2): \quad \forall x \in M: \map P x = \T \implies \map P {\map g x} = \T$

Then:

$\forall x \in M: \map P x = \T$


Proof
We are given that $M$ is minimally closed under $g$ with respect to $b$.
That is, $M$ is closed under $g$ with the extra property that $M$ has no proper class containing $b$ which is also closed under $g$.

Let $P$ be a propositional function on $M$ which has the properties specified:

$(1): \quad \map P b = \T$
$(2): \quad \forall x \in M: \map P x = \T \implies \map P {\map g x} = \T$

Let $S \subseteq M$ be the subclass of $M$ defined as:

$S = \set {x \in M: \map P x}$
We have:














\(\ds \map P b\)

\(=\)







\(\ds \T\)




















\(\ds b\)

\(\in\)







\(\ds M\)














\(\ds \leadsto \ \ \)





\(\ds b\)

\(\in\)







\(\ds S\)










By definition, the class $S$ of all elements of $M$ such that $\map P x = \T$ is closed under $g$.
But because $M$ is minimally closed under $g$ with respect to $b$, if $b \in S$ then $S$ contains all elements of $M$.
That is:

$S = M$
and so:

$\forall x \in M: \map P x = \T$
as we were to show.
$\blacksquare$


Terminology
Basis for the Induction
The step that shows that the propositional function $P$ holds for the distinguished $b \in M$ is called the basis for the induction.


Induction Hypothesis
The assumption made that $\map P x$ is true for some $x \in M$ is called the induction hypothesis.


Induction Step
The step which shows that $\map P x = \T \implies \map P {\map g x} = \T$ is called the induction step.


Also see
Principle of Mathematical Induction
Principle of Finite Induction
Principle of General Induction




