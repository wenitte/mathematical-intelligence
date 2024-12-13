# 

Source: https://proofwiki.org/wiki/Ordering_is_Preordering

Theorem
Let $S$ be a set.
Let $\RR$ be an ordering on $S$.

Then $\RR$ is also a preordering on $S$.


Proof
By definition of ordering:
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







  


By definition of preordering:
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







  


Thus an ordering is a preordering which is antisymmetric.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




