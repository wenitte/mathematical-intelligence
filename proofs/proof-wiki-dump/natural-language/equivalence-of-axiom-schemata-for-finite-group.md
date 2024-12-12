# 

Source: https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Finite_Group



Theorem
The following axiom schemata for the definition of a finite group are logically equivalent:

Finite Group Axioms
An algebraic structure which fulfils the finite group axioms:
A finite group is an algebraic structure $\struct {G, \circ}$ which satisfies the following four conditions:




\((\text {FG} 0)\)  

$:$  



Closure   

  \(\ds \forall a, b \in G:\)

\(\ds a \circ b \in G \)   







  


\((\text {FG} 1)\)  

$:$  



Associativity   

  \(\ds \forall a, b, c \in G:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((\text {FG} 2)\)  

$:$  



Finiteness   

  \(\ds \exists n \in \N:\)

\(\ds \order G = n \)   







  


\((\text {FG} 3)\)  

$:$  



Cancellability   

  \(\ds \forall a, b, c \in G:\)

\(\ds c \circ a = c \circ b \implies a = b \)   







  












\(\ds a \circ c = b \circ c \implies a = b \)   







  

These four stipulations are called the finite group axioms.


Group Axioms
An algebraic structure of finite order which fulfils the group axioms:
A group is an algebraic structure $\struct {G, \circ}$ which satisfies the following four conditions:




\((\text G 0)\)  

$:$  



Closure   

  \(\ds \forall a, b \in G:\)

\(\ds a \circ b \in G \)   







  


\((\text G 1)\)  

$:$  



Associativity   

  \(\ds \forall a, b, c \in G:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((\text G 2)\)  

$:$  



Identity   

  \(\ds \exists e \in G: \forall a \in G:\)

\(\ds e \circ a = a = a \circ e \)   







  


\((\text G 3)\)  

$:$  



Inverse   

  \(\ds \forall a \in G: \exists b \in G:\)

\(\ds a \circ b = e = b \circ a \)   







  

These four stipulations are called the group axioms.


Proof
Let $S$ be an algebraic structure of finite order which fulfils the group axioms.
It is to be shown that $S$ also fulfils all the finite group axioms.
We have that $\text {FG} 0$ and $\text {FG} 1$ are the same as $\text G 0$ and $\text G 1$ and so a priori $\text {FG} 0$ and $\text {FG} 1$ are fulfilled.
By hypothesis $S$ is of finite order.
That is, there exists some (strictly) positive integer $n$ such that $s$ has exactly $n$ elements.
That is, $\text {FG} 2$ is fulfilled.
As $S$ fulfils the group axioms, it is by definition a group.
Therefore the Cancellation Laws hold:

$b a = c a \implies b = c$
$a b = a c \implies b = c$
That is, $\text {FG} 3$ is fulfilled.
Thus, $S$ fulfils all the finite group axioms.
$\Box$

Let $S$ be an algebraic structure which fulfils the finite group axioms.
It is to be shown that $S$ also fulfils all the group axioms.
We have that $\text G 0$ and $\text G 1$ are the same as $\text {FG} 0$ and $\text {FG} 1$ and so a priori $\text G 0$ and $\text G 1$ are fulfilled.
By definition, an algebraic structure which fulfils group axioms $\text G 0$ and $\text G 1$ is a semigroup.
From Cancellable Finite Semigroup is Group, it then follows that $S$ is a group.
That is, $S$ fulfils all the group axioms $\text G 0$, $\text G 1$, $\text G 2$ and $\text G 3$.
Hence the result.
$\blacksquare$





