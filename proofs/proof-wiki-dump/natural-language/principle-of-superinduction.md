# 

Source: https://proofwiki.org/wiki/Principle_of_Superinduction



Theorem
Let $A$ be a class.
Let $g: A \to A$ be a mapping on $A$.
Let $A$ be minimally superinductive under $g$.

Let $P: A \to \set {\T, \F}$ be a propositional function on $A$.
Suppose that:




\((1)\)  

$:$  







\(\ds \map P \O = \T \)   







  


\((2)\)  

$:$  





  \(\ds \forall x \in A:\)

\(\ds \map P x = \T \implies \map P {\map g x} = \T \)   







  


\((3)\)  

$:$  





  \(\ds \forall C: \forall x \in C:\)

\(\ds \map P x = \T \implies \map P {\bigcup C} = \T \)   







  where $C$ is a chain of elements of $A$


Then:

$\forall x \in A: \map P x = \T$


Proof
We are given that $A$ is a minimally superinductive class under $g$.
That is, $A$ is a superinductive class under $g$ with the extra property that for $A$ has no proper class which is also superinductive under $g$.

Let $P$ be a propositional function on $A$ which has the properties specified:




\((1)\)  

$:$  







\(\ds \map P \O = \T \)   







  


\((2)\)  

$:$  





  \(\ds \forall x \in A:\)

\(\ds \map P x = \T \implies \map P {\map g x} = \T \)   







  


\((3)\)  

$:$  





  \(\ds \forall C: \forall x \in C:\)

\(\ds \map P x = \T \implies \map P {\bigcup C} = \T \)   







  where $C$ is a chain of elements of $A$

Then by definition, the class $S$ of all elements of $A$ such that $\map P x = \T$ is a superinductive class under $g$.
But because $A$ is minimally superinductive under $g$, $S$ contains all elements of $A$.
That is:

$\forall x \in A: \map P x = \T$
as we were to show.
$\blacksquare$


Terminology
Basis for the Induction
The step that shows that the propositional function $P$ holds for $\O$ is called the basis for the induction.


Induction Hypothesis
The assumption made that $\map P x$ is true for some $x \in M$ is called the induction hypothesis.


Induction Step
The step which shows that $\map P x = \T \implies \map P {\map g x} = \T$ is called the induction step.


Closure under Chain Unions
The step which shows that:

$\ds \forall C: \forall x \in C = \map P x = \T \implies \map P {\bigcup C} = \T$
is called the closure under chain unions.


Also see
Proof by General Induction


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction




