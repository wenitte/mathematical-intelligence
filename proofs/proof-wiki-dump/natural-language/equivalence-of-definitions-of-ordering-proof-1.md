# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ordering/Proof_1



Theorem
The following definitions of the concept of Ordering are equivalent:

Definition 1
$\RR$ is an ordering on $S$ if and only if $\RR$ satisfies the ordering axioms:




\((1)\)  

$:$  



$\RR$ is reflexive   

  \(\ds \forall a \in S:\)

\(\ds a \mathrel \RR a \)   







  


\((2)\)  

$:$  



$\RR$ is transitive   

  \(\ds \forall a, b, c \in S:\)

\(\ds a \mathrel \RR b \land b \mathrel \RR c \implies a \mathrel \RR c \)   







  


\((3)\)  

$:$  



$\RR$ is antisymmetric   

  \(\ds \forall a, b \in S:\)

\(\ds a \mathrel \RR b \land b \mathrel \RR a \implies a = b \)   







  



Definition 2
$\RR$ is an ordering on $S$ if and only if $\RR$ satisfies the ordering axioms:




\((1)\)  

$:$  







\(\ds \RR \circ \RR \)   







  


\((2)\)  

$:$  







\(\ds \RR \cap \RR^{-1} = \Delta_S \)   







  

where:

$\circ$ denotes relation composition
$\RR^{-1}$ denotes the inverse of $\RR$
$\Delta_S$ denotes the diagonal relation on $S$.


Proof
Definition 1 implies Definition 2
Let $\RR$ be a relation on $S$ satisfying:




\((1)\)  

$:$  



$\RR$ is reflexive   

  \(\ds \forall a \in S:\)

\(\ds a \mathrel \RR a \)   







  


\((2)\)  

$:$  



$\RR$ is transitive   

  \(\ds \forall a, b, c \in S:\)

\(\ds a \mathrel \RR b \land b \mathrel \RR c \implies a \mathrel \RR c \)   







  


\((3)\)  

$:$  



$\RR$ is antisymmetric   

  \(\ds \forall a, b \in S:\)

\(\ds a \mathrel \RR b \land b \mathrel \RR a \implies a = b \)   







  


By Reflexive and Transitive Relation is Idempotent:

$\RR \circ \RR = \RR$

By Relation is Antisymmetric and Reflexive iff Intersection with Inverse equals Diagonal Relation:

$\RR \cap \RR^{-1} = \Delta_S$

Thus $\RR$ is an ordering by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the conditions:

$(1): \quad \RR \circ \RR = \RR$
$(2): \quad \RR \cap \RR^{-1} = \Delta_S$

By definition of set equality, it follows from $(1)$:

$\RR \circ \RR \subseteq \RR$
Thus, by definition, $\RR$ is transitive.

By Relation is Antisymmetric and Reflexive iff Intersection with Inverse equals Diagonal Relation, it follows from $(2)$ that:

$\RR$ is reflexive
$\RR$ is antisymmetric.

Thus $\RR$ is an ordering by definition 1.
$\blacksquare$





