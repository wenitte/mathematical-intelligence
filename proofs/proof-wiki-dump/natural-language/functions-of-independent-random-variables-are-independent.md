# 

Source: https://proofwiki.org/wiki/Functions_of_Independent_Random_Variables_are_Independent

Theorem
Let $X$ and $Y$ be independent random variables on a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $g$ and $h$ be real-valued functions defined on the codomains of $X$ and $Y$ respectively.

Then $\map g X$ and $\map h Y$ are independent random variables.


Proof
Let $A$ and $B$ be subsets of the real numbers $\R$.
Let $g^{-1} \sqbrk A$ and $h^{-1} \sqbrk B$ denote the preimages of $A$ and $B$ under $g$ and $h$ respectively. 
Applying the definition of independent random variables:














\(\ds \map \Pr {\map g X \in A, \map h Y \in B}\)

\(=\)







\(\ds \map \Pr {X \in g^{-1} \sqbrk A, Y \in h^{-1} \sqbrk B}\)





Definition of Preimage of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \map \Pr {X \in g^{-1} \sqbrk A} \map \Pr {Y \in h^{-1} \sqbrk B}\)





Definition of Independent Random Variables














\(\ds \)

\(=\)







\(\ds \map \Pr {\map g X \in A} \map \Pr {\map h Y \in B}\)





Definition of Preimage of Subset under Mapping



Hence $\map g X$ and $\map h Y$ are independent random variables.
$\blacksquare$


Sources
2005: Neil A. Weiss: A Course in Probability: $\S 6.4$




