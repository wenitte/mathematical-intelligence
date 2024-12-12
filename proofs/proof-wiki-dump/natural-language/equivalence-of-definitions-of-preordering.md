# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Preordering



Theorem
The following definitions of the concept of Preordering are equivalent:

Definition 1
$\RR$ is a preordering on $S$ if and only if $\RR$ satifies the preordering axioms:




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







  



Definition 2
$\RR$ is a preordering on $S$ if and only if $\RR$ satifies the preordering axioms:




\((1)\)  

$:$  



$\RR$ is transitive   



\(\ds \RR \circ \RR = \RR \)   







  


\((2)\)  

$:$  



$\RR$ is reflexive   



\(\ds \Delta_S \subseteq \RR \)   







  

where:

$\circ$ denotes relation composition
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







  


By Reflexive and Transitive Relation is Idempotent:

$\RR \circ \RR = \RR$
which is condition $(1)$ of definition 2.

By definition of reflexive relation:

$\RR$ is reflexive if and only if it is a superset of the diagonal relation:
$\Delta_S \subseteq \RR$
which is condition $(2)$ of definition 2.

Thus $\RR$ is an ordering by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the conditions:

$(1): \quad \RR \circ \RR = \RR$
$(2): \quad \Delta_S \subseteq \RR$

By definition of set equality, it follows from $(1)$:

$\RR \circ \RR \subseteq \RR$
Thus, by definition, $\RR$ is transitive.

By definition of reflexive relation:

$\RR$ is reflexive if and only if it is a superset of the diagonal relation:
$\Delta_S \subseteq \RR$

Thus $\RR$ is an ordering by definition 1.
$\blacksquare$





