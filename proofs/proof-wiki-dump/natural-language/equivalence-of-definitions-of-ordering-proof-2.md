# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ordering/Proof_2



Theorem
The following definitions of ordering are equivalent:

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

  \(\ds \forall a \in S:\)

\(\ds a \mathrel \RR b \land b \mathrel \RR a \implies a = b \)   







  



Condition $(1)$
Let $\tuple {x, y} \in \RR \circ \RR$.
Then there exists a $z \in \RR$ such that:

$\tuple {x, z}, \tuple {z, y} \in \RR$
By $\RR$ being transitive:

$\tuple {x, y} \in \RR$
Hence:

$\RR \circ \RR \subseteq \RR$

Now let $\tuple {x, y} \in \RR$.
By $\RR$ being reflexive:

$\tuple {y, y} \in \RR$
Hence by the definition of relation composition:

$\tuple {x, y} \in \RR \circ \RR$
Hence:

$\RR \subseteq \RR \circ \RR$


Condition $(2)$
Follows immediately from Relation is Antisymmetric iff Intersection with Inverse is Coreflexive and $\RR$ being reflexive.

Thus $\RR$ is an ordering by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the conditions:

$(1): \quad \RR \circ \RR = \RR$
$(2): \quad \RR \cap \RR^{-1} = \Delta_S$


Reflexivity
By Intersection is Subset the condition:

$\RR \cap \RR^{-1} = \Delta_S$
implies:

$\Delta_S \subseteq \RR$
Thus $\RR$ is reflexive by definition.


Antisymmetry
By Relation is Antisymmetric iff Intersection with Inverse is Coreflexive the condition:

$\RR \cap \RR^{-1} = \Delta_S$
implies that $\RR$ is antisymmetric.


Transitivity
Let $\tuple {x, y}, \tuple {y, z} \in \RR$.
Then by the definition of relation composition:

$\tuple {x, z} \in \RR \circ \RR$
But by the condition:

$\RR \circ \RR = \RR$
It follows that:

$\tuple {x, z} \in \RR$
Hence $\RR$ is transitive.

Thus $\RR$ is an ordering by definition 1.
$\blacksquare$





