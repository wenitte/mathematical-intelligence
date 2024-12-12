# 

Source: https://proofwiki.org/wiki/Double_Induction_Principle/Minimally_Closed_Class



Theorem
Let $M$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $M$ such that $M$ is minimally closed under $g$ with respect to $b$.

Let $\RR$ be a relation on $M$ which satisfies:




\((\text D_1)\)  

$:$  





  \(\ds \forall x \in M:\)

\(\ds \map \RR {x, b} \)   







  


\((\text D_2)\)  

$:$  





  \(\ds \forall x, y \in M:\)

\(\ds \map \RR {x, y} \land \map \RR {y, x} \implies \map \RR {x, \map g y} \)   







  

Then $\map \RR {x, y}$ holds for all $x, y \in M$.


Proof
The proof proceeds by general induction.
Let an element $x$ of $M$ be defined as:

left normal with respect to $\RR$ if and only if $\map \RR {x, y}$ for all $y \in M$
right normal with respect to $\RR$ if and only if $\map \RR {y, x}$ for all $y \in M$.
Let the hypothesis be assumed.

First we demonstrate a lemma:

Lemma
Let $x$ be a right normal element of $M$ with respect to $\RR$.

Then $x$ is also a left normal element of $M$ with respect to $\RR$.
$\Box$

We now show by general induction that every $x \in M$ is right normal with respect to $\RR$.
It then follows from the lemma that $\map \RR {x, y}$ for all $x, y \in M$.


Basis for the Induction
$\map P b$ is the case:
From condition $\text D_1$ of the definition of $\RR$, we have immediately that:

$\map \RR {x, b}$
for all $x \in M$.
That is, that $b$ is right normal with respect to $\RR$.
Thus $\map P b$ is seen to hold.

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
So $\map P x \implies \map P {\map g x}$ and by the Principle of General Induction for Minimally Closed Class:

$\forall x \in M$: $x$ is right normal with respect to $\RR$.
The result follows.
$\blacksquare$





