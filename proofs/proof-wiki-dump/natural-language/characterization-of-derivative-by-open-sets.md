# 

Source: https://proofwiki.org/wiki/Characterization_of_Derivative_by_Open_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a subset of $T$.
Let $x$ be a point of $T$.

Then

$x \in A'$
if and only if:

for every open set $U$ of $T$:
if $x \in U$
then there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$
where

$A'$ denotes the derivative of $A$.


Proof
Sufficient Condition
Let $x \in A'$.
Then $x$ is an accumulation point of $A$ by Definition:Set Derivative.
Then by definition of accumulation point:

$(1): \quad x \in \paren {A \setminus \set x}^-$
where $A^-$ denotes the closure of $A$.
Let $U$ be an open set of $T$.
Let $x \in U$.
Then by $(1)$ and Condition for Point being in Closure:

$\paren {A \setminus \set x} \cap U \ne \O$
Then there exists $y$ being a point such that:

$(2): \quad y \in A \setminus \set x$ and $y \in U$.
Then $y \in A$ and $y \notin \set x$ by definition of set difference.
Hence by $(2)$ and the definitions of set intersection and singleton:

$y \in A \cap U$ and $x \ne y$
$\Box$


Necessary Condition
Let $x$ be such that:

$(3): \quad$ for every open set $U$ of $T$ if $x \in U$, then there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$.
It will be proved that:

for every open set $G$ of $T$:
if $x \in G$
then $\paren {A \setminus \set x} \cap U \ne \O$.
Let $G$ be an open set of $T$ such that $x \in G$.
Then by $(3)$ there exists a point $y$ of $T$ such that:

$(4): \quad y \in A \cap G$ and $x \ne y$
Then by the definitions of set intersection and singleton:

$y \in A$ and $y \notin \set x$
By definition of set difference:

$y \in A \setminus \set x$
By $(4)$ and the definition of set intersection:

$y \in G$
Hence:

$\paren {A \setminus \set x} \cap U \ne \O$
$\Box$

Then by Condition for Point being in Closure:

$x \in \paren {A \setminus \set x}^-$
Then, by definition, $x$ is an accumulation point of $A$.
Hence by definition of set derivative:

$x \in A'$
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:17




