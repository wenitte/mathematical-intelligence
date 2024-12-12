# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lower_Section



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $U \subseteq S$.

The following definitions of the concept of Lower Section are equivalent:

Definition 1
$L$ is a lower section in $S$ if and only if:

$\forall l \in L, s \in S: s \preceq l \implies s \in L$
Definition 2
$L$ is a lower section in $S$ if and only if:

$L^\preceq \subseteq L$
where $L^\preceq$ is the lower closure of $L$.

Definition 3
$L$ is a lower section in $S$ if and only if:

$L^\preceq = L$
where $L^\preceq$ is the lower closure of $L$.


Proof
We are required to show that the following are equivalent:




\((1)\)  

$:$  







\(\ds \forall l \in L: \forall s \in S: s \preceq l \implies s \in L \)   







  


\((2)\)  

$:$  







\(\ds L^\preceq \subseteq L \)   







  


\((3)\)  

$:$  







\(\ds L^\preceq = L \)   







  


By the Duality Principle, it suffices to prove that:

$(1^*)$, $(2^*)$ and $(3^*)$ are equivalent
where these are the dual statements of $(1)$, $(2)$ and $(3)$, respectively.

By Dual Pairs, it can be seen that these dual statements are as follows:




\((1^*)\)  

$:$  







\(\ds \forall l \in L: \forall s \in S: l \preceq s \implies s \in L \)   







  


\((2^*)\)  

$:$  







\(\ds L^\succeq \subseteq L \)   







  


\((3^*)\)  

$:$  







\(\ds L^\succeq = L \)   







  

Their equivalence is proved on Equivalence of Definitions of Upper Section.
$\blacksquare$





