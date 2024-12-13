# 

Source: https://proofwiki.org/wiki/Properties_of_Class_of_All_Ordinals/Superinduction_Principle

Theorem
Let $\On$ denote the class of all ordinals.

Let $A$ be a class which satisfies the following $3$ conditions:




\((1)\)  

$:$  



$A$ contains the zero ordinal $0$:   



\(\ds 0 \in A \)   







  


\((2)\)  

$:$  



$A$ is closed under successor mapping:   

  \(\ds \forall \alpha:\)

\(\ds \paren {\alpha \in A \implies \alpha^+ \in A} \)   







  


\((3)\)  

$:$  



$A$ is closed under chain unions:   

  \(\ds \forall C:\)

\(\ds \bigcup C \in A \)   







  where $C$ is a chain of elements of $A$

That is, let $A$ be a superinductive class under the successor mapping.
Then $A$ contains all ordinals:

$\On \subseteq A$


Proof
We note that the zero ordinal, denoted $0$, is identified as the empty set:

$0 \:= \O$
Hence by definition $A$ is indeed a superinductive class under the successor mapping.

By the definition of ordinal:

$\alpha$ is an ordinal if and only if $\alpha$ is an element of every superinductive class.
Hence $\On$ is a subclass of every superinductive class.

The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 1$ Ordinal numbers: Theorem $1.2 \ (4)$




