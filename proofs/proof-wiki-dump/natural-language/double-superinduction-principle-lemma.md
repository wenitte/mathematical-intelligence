# 

Source: https://proofwiki.org/wiki/Double_Superinduction_Principle/Lemma



Lemma for Double Superinduction Principle
Let $M$ be a minimally superinductive class under a mapping $g$.
Let $\RR$ be a relation on $M$ which satisfies:




\((\text D_1)\)  

$:$  





  \(\ds \forall x \in M:\)

\(\ds \map \RR {x, \O} \)   







  


\((\text D_2)\)  

$:$  





  \(\ds \forall x, y \in M:\)

\(\ds \map \RR {x, y} \land \map \RR {y, x} \implies \map \RR {x, \map g y} \)   







  


\((\text D_3)\)  

$:$  





  \(\ds \forall x \in M: \forall C: \forall y \in C:\)

\(\ds \map \RR {x, y} \implies \map \RR {x, \bigcup C} \)   







  where $C$ is a chain of elements of $M$

Let $x$ be a right normal element of $M$ with respect to $\RR$.

Then $x$ is also a left normal element of $M$ with respect to $\RR$.


Proof
The proof proceeds by Proof by Superinduction.

Let $x \in M$ be right normal with respect to $\RR$.
Let $\map P y$ be the proposition:

$\map \RR {x, y}$ holds.


Basis for the Induction
By condition $\text D_1$ of the definition of $\RR$:

$\map \RR {x, \O}$
for all $x \in M$.
Thus $\map P \O$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P y$ is true, where $x \in M$, then it logically follows that $\map P {\map g y}$ is true.

So this is the induction hypothesis:

$\map \RR {x, y}$ holds

from which it is to be shown that:

$\map \RR {x, \map g y}$ holds


Induction Step
This is the induction step:
Let $\map \RR {x, y}$ hold.
As $x$ is right normal with respect to $\RR$:

$\map \RR {y, x}$ holds.
Thus by condition $\text D_2$ of the definition of $\RR$:

$\map \RR {x, \map g y}$ holds.
So $\map P x \implies \map P {\map g x}$ and it follows by Proof by Superinduction that $\map \RR {x, y}$ holds for every $x, y \in M$.


Closure under Chain Unions
This is the closure under chain unions:
Now suppose that $C$ is a chain of elements of $M$ such that $\map \RR {x, y}$ holds for all $y \in C$.
Then by $\text D_3$ we have $\map \RR {x, \bigcup C}$.

Therefore:

$\forall x \in M$: if $x$ is a right normal element of $M$ with respect to $\RR$, then $x$ is a left normal element of $M$ with respect to $\RR$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Theorem $2.1$




