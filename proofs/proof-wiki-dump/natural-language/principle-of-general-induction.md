# 

Source: https://proofwiki.org/wiki/Principle_of_General_Induction



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a mapping on $M$.
Let $M$ be minimally inductive under $g$.

Let $P: M \to \set {\T, \F}$ be a propositional function on $M$.
Suppose that:




\((1)\)  

$:$  









   \(\ds \map P \O \)

  \(\ds = \)  

\(\ds  \T \)   

  


\((2)\)  

$:$  





  \(\ds \forall x \in M:\)



   \(\ds \map P x \)

  \(\ds = \)  

\(\ds  \T \implies \map P {\map g x} = \T \)   

  


Then:

$\forall x \in M: \map P x = \T$


Proof
We are given that $M$ is a minimally inductive class under $g$.
That is, $M$ is an inductive class under $g$ with the extra property that $M$ has no proper class which is also an inductive class under $g$.

Let $P$ be a propositional function on $M$ which has the properties specified:

$(1): \quad \map P \O = \T$
$(2): \quad \forall x \in M: \map P x = \T \implies \map P {\map g x} = \T$

Thus by definition, the class $S$ of all elements of $M$ such that $\map P x = \T$ is an inductive class under $g$.
But because $M$ is minimally inductive under $g$, $S$ contains all elements of $M$.
That is:

$\forall x \in M: \map P x = \T$
as we were to show.
$\blacksquare$


Terminology
Basis for the Induction
The step that shows that the propositional function $P$ holds for $\O$ is called the basis for the induction.


Induction Hypothesis
The assumption made that $\map P x$ is true for some $x \in M$ is called the induction hypothesis.


Induction Step
The step which shows that $\map P x = \T \implies \map P {\map g x} = \T$ is called the induction step.


Also see
Principle of Mathematical Induction
Principle of Finite Induction


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications




