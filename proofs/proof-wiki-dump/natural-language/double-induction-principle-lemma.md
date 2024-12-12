# 

Source: https://proofwiki.org/wiki/Double_Induction_Principle/Lemma



Lemma for Double Induction Principle
Let $M$ be a minimally inductive class under a mapping $g$.
Let $\RR$ be a relation on $M$ which satisfies:




\((\text D_1)\)  

$:$  





  \(\ds \forall x \in M:\)

\(\ds \map \RR {x, \O} \)   







  


\((\text D_2)\)  

$:$  





  \(\ds \forall x, y \in M:\)

\(\ds \map \RR {x, y} \land \map \RR {y, x} \implies \map \RR {x, \map g y} \)   







  

Let $x$ be a right normal element of $M$ with respect to $\RR$.

Then $x$ is also a left normal element of $M$ with respect to $\RR$.


Proof
The proof proceeds by general induction.

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

$\map \RR {x, \map g y}$ holds.


Induction Step
This is the induction step:
Let $\map \RR {x, y}$ hold.
As $x$ is right normal with respect to $\RR$:

$\map \RR {y, x}$ holds.
Thus by condition $\text D_2$ of the definition of $\RR$:

$\map \RR {x, \map g y}$ holds.
So $\map P x \implies \map P {\map g x}$ and the result follows by the Principle of General Induction.
Therefore:

$\forall x \in M$: if $x$ is a right normal element of $M$ with respect to $\RR$, then $x$ is a left normal element of $M$ with respect to $\RR$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Theorem $4.3$




