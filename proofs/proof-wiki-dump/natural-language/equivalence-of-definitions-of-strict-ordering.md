# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Strict_Ordering



Theorem
Let $S$ be a set.
Let $\RR$ be a relation on $S$.
The following definitions of the concept of Strict Ordering are equivalent:


Definition 1
Let $\RR$ be a relation on a set $S$.
Then $\RR$ is a strict ordering (on $S$) if and only if $\RR$ satisfies the strict ordering axioms:




\((1)\)  

$:$  



Asymmetry   

  \(\ds \forall a, b \in S:\)



   \(\ds a \mathrel \RR b \)

  \(\ds \implies \)  

\(\ds  \neg \paren {b \mathrel \RR a} \)   

  


\((2)\)  

$:$  



Transitivity   

  \(\ds \forall a, b, c \in S:\)



   \(\ds \paren {a \mathrel \RR b} \land \paren {b \mathrel \RR c} \)

  \(\ds \implies \)  

\(\ds  a \mathrel \RR c \)   

  



Definition 2
Let $\RR$ be a relation on a set $S$.
Then $\RR$ is a strict ordering (on $S$) if and only if $\RR$ satisfies the strict ordering axioms:




\((1)\)  

$:$  



Antireflexivity   

  \(\ds \forall a \in S:\)

\(\ds \neg \paren {a \mathrel \RR a} \)   







  


\((2)\)  

$:$  



Transitivity   

  \(\ds \forall a, b, c \in S:\)

\(\ds \paren {a \mathrel \RR b} \land \paren {b \mathrel \RR c} \implies a \mathrel \RR c \)   







  



Proof
Let $\RR$ be transitive.
Then by Transitive Relation is Antireflexive iff Asymmetric it follows directly that:

$(1): \quad$ If $\RR$ is antireflexive then it is asymmetric
$(2): \quad$ If $\RR$ is asymmetric then it is antireflexive.
$\blacksquare$





