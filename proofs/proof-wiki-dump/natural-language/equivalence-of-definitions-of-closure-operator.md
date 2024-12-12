# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closure_Operator



Theorem
The following definitions of the concept of Closure Operator are equivalent:

Definition 1
Let $\struct {S, \preceq}$ be an ordered set.

A closure operator on $S$ is a mapping:

$\cl: S \to S$
which satisfies the closure axioms as follows for all elements $x, y \in S$:




\((\text {cl} 1)\)  

$:$  



$\cl$ is inflationary:   





   \(\ds x \)

  \(\ds \preceq \)  

\(\ds  \map \cl x \)   

  


\((\text {cl} 2)\)  

$:$  



$\cl$ is increasing:   





   \(\ds x \preceq y \)

  \(\ds \implies \)  

\(\ds  \map \cl x \preceq \map \cl y \)   

  


\((\text {cl} 3)\)  

$:$  



$\cl$ is idempotent:   





   \(\ds \map \cl {\map \cl x} \)

  \(\ds = \)  

\(\ds  \map \cl x \)   

  

Definition 2
Let $\struct {S, \preceq}$ be an ordered set.

A closure operator on $S$ is a mapping:

$\cl: S \to S$
which satisfies the following condition for all elements $x, y \in S$:

$x \preceq \map \cl y \iff \map \cl x \preceq \map \cl y$


Proof
Let $\struct {S, \preceq}$ be an ordered set.
Let $\cl: S \to S$ be a mapping.


Definition 1 implies Definition 2
Let $\cl$ be an inflationary, increasing and idempotent mapping.
It is necessary to show that for all $x, y \in S$:

$x \preceq \map \cl y \iff \map \cl x \preceq \map \cl y$


Necessary Condition













\(\ds x\)

\(\preceq\)







\(\ds \map \cl y\)














\(\ds \leadsto \ \ \)





\(\ds \map \cl x\)

\(\preceq\)







\(\ds \map \cl {\map \cl y}\)





$\cl$ is increasing








\(\ds \leadsto \ \ \)





\(\ds \map \cl x\)

\(\preceq\)







\(\ds \map \cl y\)





$\cl$ is idempotent



$\Box$


Sufficient Condition
Suppose that $\map \cl x \preceq \map \cl y$.














\(\ds x\)

\(\preceq\)







\(\ds \map \cl x\)





$\cl$ is inflationary








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preceq\)







\(\ds \map \cl y\)





$\preceq$ is transitive by dint of being an ordering



$\Box$


Definition 2 implies Definition 1
Suppose that:

$x \preceq \map \cl y \iff \map \cl x \preceq \map \cl y$
It is necessary to show that $\cl$ is inflationary, increasing and idempotent.


Inflationary
Let $x \in S$.














\(\ds \map \cl x\)

\(\preceq\)







\(\ds \map \cl x\)





$\preceq$ is reflexive by dint of being an ordering








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preceq\)







\(\ds \map \cl x\)





by hypothesis: $\map \cl x \preceq \map \cl y \implies x \preceq \map \cl y$



That is, $\cl$ is inflationary.
$\Box$


Increasing
It has been demonstrated that $\preceq$ is inflationary.

Let $x, y \in S$ such that $x \preceq y$.
Then:














\(\ds y\)

\(\preceq\)







\(\ds \map \cl y\)





$\cl$ is inflationary








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preceq\)







\(\ds \map \cl y\)





$\preceq$ is transitive by dint of being an ordering








\(\ds \leadsto \ \ \)





\(\ds \map \cl x\)

\(\preceq\)







\(\ds \map \cl y\)





by hypothesis: $x \preceq \map \cl y \implies \map \cl x \preceq \map \cl y$



That is, $\cl$ is  increasing.
$\Box$


Idempotent
It has been demonstrated that $\preceq$ is inflationary.

Let $x \in S$.

Then:














\(\ds \map \cl x\)

\(\preceq\)







\(\ds \map \cl x\)





$\preceq$ is reflexive by dint of being an ordering








\(\ds \leadsto \ \ \)





\(\ds \map \cl {\map \cl x}\)

\(\preceq\)







\(\ds \map \cl x\)





by hypothesis: $x \preceq \map \cl y \implies \map \cl x \preceq \map \cl y$




Then as $\cl$ is inflationary:

$\map \cl x \preceq \map \cl {\map \cl x}$

As $\preceq$ is antisymmetric by dint of being an ordering:

$\map \cl {\map \cl x} = \map \cl x$

That is, $\cl$ is idempotent.
$\Box$

Thus $\cl$ has been shown to be inflationary, increasing and idempotent as required.
$\blacksquare$





