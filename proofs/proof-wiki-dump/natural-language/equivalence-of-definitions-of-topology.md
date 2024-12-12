# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Topology



Theorem
The following definitions of the concept of Topology are equivalent:

Definition 1
Let $S$ be a set.
A topology on $S$ is a subset $\tau \subseteq \powerset S$ of the power set of $S$ that satisfies the open set axioms:




\((\text O 1)\)  

$:$  













The union of an arbitrary subset of $\tau$ is an element of $\tau$.   

  


\((\text O 2)\)  

$:$  













The intersection of any two elements of $\tau$ is an element of $\tau$.   

  


\((\text O 3)\)  

$:$  













$S$ is an element of $\tau$.   

  


If $\tau$ is a topology on $S$, then $\struct {S, \tau}$ is called a topological space.
The elements of $\tau$ are called the open sets of $\struct {S, \tau}$.

Definition 2
Let $S$ be a set.
A topology on $S$ is a subset $\tau \subseteq \powerset S$ of the power set of $S$ that satisfies the following axioms:




\((\text O 1')\)  

$:$  













The union of an arbitrary subset of $\tau$ is an element of $\tau$.   

  


\((\text O 2')\)  

$:$  













The intersection of any finite subset of $\tau$ is an element of $\tau$.   

  



Proof
Definition 1 implies Definition 2
Let $\tau$ be a topology on $S$ by definition 1.
$\text O 1$ is the same as $\text O 1'$, so $\text O 1'$ holds for $\tau$.
From General Intersection Property of Topological Space:

if $\text O 2$ holds, then $\text O 2'$ holds.
Thus $\tau$ is a topology on $S$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\tau$ be a topology on $S$ by definition 2.
$\text O 1'$ is the same as $\text O 1$, so $\text O 1$ holds for $\tau$.
$\text O 2'$ states that the intersection of any finite subset of $\tau$ is an element of $\tau$.
This applies when the subset of $\tau$ contains exactly $2$ sets.
Thus $\text O 2$ is a direct consequence of $\text O 2'$.
Also as a consequence of $\text O 2$, it follows that the intersection of an empty subset of $\tau$ is an element of $\tau$.
From Intersection of Empty Set it follows that $S \in \tau$.
So $\text O 3$ is a direct consequence of $\text O 2'$.
Thus all the open set axioms hold.
Thus $\tau$ is a topology on $S$ by definition 1.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous): Notes: Part $\text I$: Basic Definitions: Section $1$. General Introduction: $1$




