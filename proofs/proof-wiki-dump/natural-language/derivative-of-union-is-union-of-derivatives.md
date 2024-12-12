# 

Source: https://proofwiki.org/wiki/Derivative_of_Union_is_Union_of_Derivatives



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$, $B$ be subsets of $S$.

Then

$\paren {A \cup B}' = A' \cup B\,'$
where

$A'$ denotes the derivative of $A$.


Proof
Derivative of Union subset of Union of Derivatives
It will be shown that:

$\paren {A \cup B}' \subseteq A' \cup B\,'$
Let $x \in \paren {A \cup B}'$.
By definition of set derivative:

$x$ is an accumulation point of $A \cup B$.
Then by definition of accumulation point of set:

$(1): \quad x \in \paren {\paren {A \cup B} \setminus \set x}^-$
where $A^-$ denotes the closure of $A$.
By Set Difference is Right Distributive over Union:

$\paren {A \cup B} \setminus \set x = \paren {A \setminus \set x} \cup \paren {B \setminus \set x}$
Then by Closure of Finite Union equals Union of Closures:

$\paren {\paren {A \cup B} \setminus \set x}^- = \paren {A \setminus \set x}^- \cup \paren {B \setminus \set x}^-$
Then by $(1)$ and definition of set union:

$x \in \paren {A \setminus \set x}^-$ or $x \in \paren {B \setminus \set x}^-$
Then by definition of accumulation point of set:

$x$ is an accumulation point of $A$ or $x$ is an accumulation point of $B$.
Then by definition of set derivative:

$x \in A'$ or $x \in B\,'$
Hence by definition of set union:

$x \in A' \cup B\,'$


Union of Derivatives subset of Derivative of Union
By Set is Subset of Union:

$A \subseteq A \cup B$ and $B \subseteq A \cup B$
Then by Derivative of Subset is Subset of Derivative:

$A' \subseteq \paren {A \cup B}'$ and $B\,' \subseteq \paren {A \cup B}'$
Hence by Union of Subsets is Subset:

$A' \cup B\,' \subseteq \paren {A \cup B}'$
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:31




