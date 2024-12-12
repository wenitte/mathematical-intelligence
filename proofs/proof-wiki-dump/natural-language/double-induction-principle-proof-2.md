# 

Source: https://proofwiki.org/wiki/Double_Induction_Principle/Proof_2

Theorem
Let $M$ be a class.
Let $g: M \to M$ be a mapping on $M$.
Let $M$ be a minimally inductive class under $g$.
Let $\RR$ be a relation on $M$ which satisfies:




\((\text D_1)\)  

$:$  





  \(\ds \forall x \in M:\)

\(\ds \map \RR {x, \O} \)   







  


\((\text D_2)\)  

$:$  





  \(\ds \forall x, y \in M:\)

\(\ds \map \RR {x, y} \land \map \RR {y, x} \implies \map \RR {x, \map g y} \)   







  

Then $\map \RR {x, y}$ holds for all $x, y \in M$.


Proof
By definition, a minimally inductive class under $g$ is a minimally closed class under $g$ with respect to $\O$.
Recall the Double Induction Principle for Minimally Closed Class:
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

In this context:

$b = \O$
and the result follows.
$\blacksquare$





