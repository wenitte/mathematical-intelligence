# 

Source: https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups



Theorem
In the definition of a group, the axioms for the existence of an identity element and for closure under taking inverses can be replaced by the following two axioms:

Given a group $G$, there exists at least one element $e \in G$ such that $e$ is a left identity;
For any element $g$ in a group $G$, there exists at least one left inverse of $g$.

Alternatively, we can also replace the aforementioned axioms with the following two:

Given a group $G$, there exists at least one element $e \in G$ such that $e$ is a right identity;
For any element $g$ in a group $G$, there exists at least one right inverse of $g$.

Thus we can formulate the group axioms as either of the following:


Group Axioms (Left)
A group is an algebraic structure $\struct {G, \circ}$ which satisfies the following four conditions:




\((\text G 0)\)  

$:$  



Closure Axiom   

  \(\ds \forall a, b \in G:\)

\(\ds a \circ b \in G \)   







  


\((\text G 1)\)  

$:$  



Associativity Axiom   

  \(\ds \forall a, b, c \in G:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((\text G_{\text L} 2)\)  

$:$  



Left Identity Axiom   

  \(\ds \exists e \in G: \forall a \in G:\)

\(\ds e \circ a = a \)   







  


\((\text G_{\text L} 3)\)  

$:$  



Left Inverse Axiom   

  \(\ds \forall a \in G: \exists b \in G:\)

\(\ds b \circ a = e \)   







  



Group Axioms (Right)
A group is an algebraic structure $\struct {G, \circ}$ which satisfies the following four conditions:




\((\text G 0)\)  

$:$  



Closure Axiom   

  \(\ds \forall a, b \in G:\)

\(\ds a \circ b \in G \)   







  


\((\text G 1)\)  

$:$  



Associativity Axiom   

  \(\ds \forall a, b, c \in G:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((\text G_{\text R} 2)\)  

$:$  



Right Identity Axiom   

  \(\ds \exists e \in G: \forall a \in G:\)

\(\ds a \circ e = a \)   







  


\((\text G_{\text R} 3)\)  

$:$  



Right Inverse Axiom   

  \(\ds \forall a \in G: \exists b \in G:\)

\(\ds a \circ b = e \)   







  



Proof
Suppose we define a group $G$ in the usual way, but make the first pair of axiom replacements listed above:

the existence of a left identity
every element has a left inverse.

Let $e \in G$ be a left identity and $g \in G$.
Then, from Left Inverse for All is Right Inverse, each left inverse is also a right inverse with respect to the left identity.
Also from Left Identity while exists Left Inverse for All is Identity we have that the left identity is also a right identity.
Also we have that such an Identity is Unique, so this element can rightly be called the identity.

So we have that:

$G$ has an identity;
each element of $G$ has an element that is both a left inverse and a right inverse with respect to this identity.
Therefore, the validity of the two axiom replacements is proved.
$\blacksquare$

The proof of the alternate pair of replacements (existence of a right identity and closure under taking right inverses) is similar.


Warning
Suppose we build an algebraic structure with the following axioms:




\((0)\)  

$:$  



Closure Axiom   

  \(\ds \forall a, b \in G:\)

\(\ds a \circ b \in G \)   







  


\((1)\)  

$:$  



Associativity Axiom   

  \(\ds \forall a, b, c \in G:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((2)\)  

$:$  



Right Identity Axiom   

  \(\ds \exists e \in G: \forall a \in G:\)

\(\ds a \circ e = a \)   







  


\((3)\)  

$:$  



Left Inverse Axiom   

  \(\ds \forall x \in G: \exists b \in G:\)

\(\ds b \circ a = e \)   







  

Then this does not (necessarily) define a group (although clearly a group fulfils those axioms).


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.12$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 26 \gamma$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$ Semigroups, Monoids and Groups: Proposition $1.3$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Theorem $1$




