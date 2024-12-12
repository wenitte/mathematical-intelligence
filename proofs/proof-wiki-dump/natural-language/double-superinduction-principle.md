# 

Source: https://proofwiki.org/wiki/Double_Superinduction_Principle



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a mapping on $M$.
Let $M$ be a minimally superinductive class under $g$.
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

Then $\map \RR {x, y}$ holds for all $x, y \in M$.


Proof
The proof proceeds by Proof by Superinduction.
Let an element $x$ of $M$ be defined as:

left normal with respect to $\RR$ if and only if $\map \RR {x, y}$ for all $y \in M$
right normal with respect to $\RR$ if and only if $\map \RR {y, x}$ for all $y \in M$.
Let the hypothesis be assumed.

First we demonstrate a lemma:

Lemma
Let $x$ be a right normal element of $M$ with respect to $\RR$.

Then $x$ is also a left normal element of $M$ with respect to $\RR$.
$\Box$

We now show by Proof by Superinduction that every $x \in M$ is right normal with respect to $\RR$.
It then follows from the lemma that $\map \RR {x, y}$ for all $x, y \in M$.


Basis for the Induction
$\map P \O$ is the case:
From condition $\text D_1$ of the definition of $\RR$, we have immediately that:

$\map \RR {x, \O}$
for all $x \in M$.
That is, that $\O$ is right normal with respect to $\RR$.
Thus $\map P \O$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P x$ is true, where $x \in M$, then it logically follows that $\map P {\map g x}$ is true.

So this is the induction hypothesis:

$x$ is right normal with respect to $\RR$

from which it is to be shown that:

$\map g x$ is right normal with respect to $\RR$.


Induction Step
This is the induction step:
Let $x \in M$ be right normal with respect to $\RR$:

$\forall y \in M: \map \RR {y, x}$
By the lemma we have that $x$ is left normal with respect to $\RR$.
That is:

$\forall y \in M: \map \RR {x, y}$
Thus by condition $\text D_2$ of the definition of $\RR$:

$\forall y \in M: \map \RR {y, \map g x}$
That is, $\map g x$ is right normal with respect to $\RR$.
So $\map P x \implies \map P {\map g x}$ for all $x \in M$.


Closure under Chain Unions
This is the closure under chain unions:
Now suppose that $C$ is a chain of right normal elements with respect to $\RR$.
Let $x \in M$ be arbitrary.
Then by $\text D_3$ we have that $\ds \map \RR {x, \bigcup C}$ holds.
That is, $\ds \bigcup C$ is right normal with respect to $\RR$.

It follows by Proof by Superinduction that:

$\forall x \in M$: $x$ is right normal with respect to $\RR$.
The result follows.
$\blacksquare$


Also known as
The Double Superinduction Principle can also be referred to as the Principle of Double Superinduction.
Some authors refer to this principle by its initials: D.S.P.


Also see
Double Induction Principle


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Theorem $2.1$




