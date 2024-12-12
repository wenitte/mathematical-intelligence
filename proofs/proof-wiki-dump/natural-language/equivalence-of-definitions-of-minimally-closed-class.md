# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Minimally_Closed_Class



Theorem
Let $A$ be a class.
Let $g$ be a mapping on $A$.

The following definitions of the concept of minimally closed class under $g$ are equivalent:


Definition 1
$A$ is minimally closed under $g$ with respect to $b$ if and only if:




\((1)\)  

$:$  













$A$ is closed under $g$   

  


\((2)\)  

$:$  













There exists $b \in A$ such that no proper subclass of $A$ containing $b$ is closed under $g$.   

  

Definition 2
$A$ is minimally closed under $g$ with respect to $b$ if and only if:




\((1)\)  

$:$  













$A$ is closed under $g$   

  


\((2)\)  

$:$  













There exists $b \in A$ such that every subclass of $A$ containing $b$ which is closed under $g$ contains all the elements of $A$.   

  



Proof
Let it be given that $A$ is closed under $g$.


$(1)$ implies $(2)$
Let $A$ be a minimally closed class under $g$ by definition 1.
Then by definition:

there exists $b \in A$ such that $A$ has no proper subclass $B$ such that:
$b \in B$
$B$ is closed under $g$.

Let $A$ have a subclass $C$ which is closed under $g$ such that $b \in C$.
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
Thus $A$ is a minimally closed class under $g$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $A$ be a minimally closed class under $g$ by definition 2.
Then by definition:

Every subclass of $A$ containing $b$ which is closed under $g$ contains all the elements of $A$.
Let $C$ be a subclass of $A$ which is closed under $g$ such that $b \in C$.
By definition of subclass:

$C \subseteq A$
But by hypothesis:

$\forall x \in A: x \in C$
That is:

$A \subseteq C$
By definition of equality of classes it follows that:

$A = C$
and so by definition $C$ cannot be a proper subclass of $A$.
Thus $A$ is a minimally closed class under $g$ by definition 1.
$\blacksquare$





