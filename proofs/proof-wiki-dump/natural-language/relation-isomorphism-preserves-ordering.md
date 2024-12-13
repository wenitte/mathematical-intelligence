# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_preserves_Ordering

Theorem
Let $\struct {A, \RR}$ and $\struct {B, \SS}$ be relational structures which are relationally isomorphic.
Let $\struct {A, \RR}$ be an ordered set.

Then $\struct {B, \SS}$ is also an ordered set.


Proof
Let $\struct {A, \RR}$ be an ordered set.
Recall the definition:
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







  


From Relation Isomorphism Preserves Reflexivity:

$\SS$ is reflexive.
From Relation Isomorphism Preserves Antisymmetry:

$\SS$ is antisymmetric.
From Relation Isomorphism Preserves Transitivity:

$\SS$ is transitive.
So by definition $\struct {B, \SS}$ is an ordered set.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.10$




