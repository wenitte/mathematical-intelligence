# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Minimally_Inductive_Class



Theorem
Let $A$ be a class.
Let $g$ be a mapping on $A$.

The following definitions of the concept of minimally inductive class under $g$ are equivalent:


Definition 1
$A$ is minimally inductive under $g$ if and only if:




\((1)\)  

$:$  













$A$ is inductive under $g$   

  


\((2)\)  

$:$  













No proper subclass of $A$ is inductive under $g$.   

  

Definition 2
$A$ is minimally inductive under $g$ if and only if:




\((1)\)  

$:$  













$A$ is inductive under $g$   

  


\((2)\)  

$:$  













Every subclass of $A$ which is inductive under $g$ contains all the elements of $A$.   

  

Definition 3
$A$ is minimally inductive under $g$ if and only if $A$ is minimally closed under $g$ with respect to $\O$.


Proof
$(1)$ implies $(2)$
Let it be given that $A$ is inductive under $g$.
Let $A$ be a minimally inductive class under $g$ by definition 1.
Then by definition:

$A$ has no proper subclass $B$ such that $B$ is inductive under $g$.

Let $A$ have a subclass $C$ which is inductive under $g$.
Then by definition, $C$ is not a proper subclass of $A$.
Thus by definition of proper subclass:

$C = A$
By definition of subclass:

$A \subseteq C$
and:

$C \subseteq A$
That is:

$\forall x \in A: x \in C$
and:

$\forall x \in C: x \in A$
That is:
$C$ contains all elements of $A$.
Thus $A$ is a minimally inductive class under $g$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let it be given that $A$ is inductive under $g$.
Let $A$ be a minimally inductive class under $g$ by definition 2.
Then by definition:

Every subclass of $A$ which is inductive under $g$ contains all the elements of $A$.
Let $C$ be a subclass of $A$ which is inductive under $g$.
By definition of subclass:

$C \subseteq A$
But by hypothesis:

$\forall x \in A: x \in C$
That is:

$A \subseteq C$
By definition of equality of classes it follows that:

$A = C$
and so by definition $C$ cannot be a proper subclass of $A$.
Thus $A$ is a minimally inductive class under $g$ by definition 1.
$\Box$


$(1)$ implies $(3)$
Let $A$ be a minimally inductive class under $g$ by definition 1.
Then by definition:




\((1)\)  

$:$  













$A$ is inductive under $g$   

  


\((2)\)  

$:$  













No proper subclass of $A$ is inductive under $g$.   

  


By definition of inductive class:

$\O \in A$
$A$ is closed under $g$.

Putting these definitions together, we have that:

No proper subclass of $A$ such that $\O \in A$ is closed under $g$.
That is, 
$A$ is minimally closed under $g$ with respect to $\O$
Thus $A$ is a minimally inductive class under $g$ by definition 3.
$\Box$


$(3)$ implies $(1)$
Let $A$ be a minimally inductive class under $g$ by definition 3.
That is, $A$ is minimally closed under $g$ with respect to $\O$.
That is:

$(1): \quad \O \in A$
$(2): \quad$ No proper subclass of $A$ such that $\O \in A$ is closed under $g$.
Hence by definition of inductive class:




\((1)\)  

$:$  













$A$ is inductive under $g$   

  


\((2)\)  

$:$  













No proper subclass of $A$ is inductive under $g$.   

  

Thus $A$ is a minimally inductive class under $g$ by definition 1.
$\blacksquare$





