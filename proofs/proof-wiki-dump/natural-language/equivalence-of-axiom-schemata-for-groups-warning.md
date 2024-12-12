# 

Source: https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups/Warning

Theorem
Suppose we build an algebraic structure with the following axioms:




\((0)\)  

$:$  



Closure Axiom   

  \(\ds \forall a, b \in G:\)

\(\ds a \circ b \in G \)   







  


\((1)\)  

$:$  



Associativity Axiom   

  \(\ds \forall a, b, c \in G:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((2)\)  

$:$  



Right Identity Axiom   

  \(\ds \exists e \in G: \forall a \in G:\)

\(\ds a \circ e = a \)   







  


\((3)\)  

$:$  



Left Inverse Axiom   

  \(\ds \forall x \in G: \exists b \in G:\)

\(\ds b \circ a = e \)   







  

Then this does not (necessarily) define a group (although clearly a group fulfils those axioms).


Proof
Let $\struct {S, \circ}$ be the algebraic structure defined as:

$\forall x, y \in S: x \circ y = x$
That is, $\circ$ is the left operation.
From Element under Left Operation is Right Identity, every element serves as a right identity.
Then given any $a \in S$, we have that $x \circ a = x$ and as $x$ is an identity, axiom $(3)$ is fulfilled as well.
But from More than one Right Identity then no Left Identity, there is no left identity and therefore no identity element.
Hence $\struct {S, \circ}$ is not a group.
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Exercise $3$




