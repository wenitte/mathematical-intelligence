# 

Source: https://proofwiki.org/wiki/G-Tower_is_Nest



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Then $M$ is a nest.


Proof
We need to show that:

$\forall x, y \in M: x \subseteq y$ or $y \subseteq x$

First some lemmata:


Lemma 1
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $\RR$ be a relation defined as:

$\forall x, y \in M: \tuple {x, y} \in \RR \iff \map g x \subseteq y \lor y \subseteq x$
where $\lor$ denotes disjunction (inclusive "or").

Then $\RR$ satisfies the $3$ conditions $\text D_1$, $\text D_2$ and $\text D_3$ of the Double Superinduction Principle.

That is:




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

$\Box$


Lemma 2
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Then:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
$\Box$

But as $g: M \to M$ is a progressing mapping:

$\forall x \in M: x \subseteq \map g x$
The result follows by Subset Relation is Transitive.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Theorem $2.3$




