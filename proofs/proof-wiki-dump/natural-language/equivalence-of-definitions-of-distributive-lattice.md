# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Distributive_Lattice



Theorem
The following definitions of the concept of Distributive Lattice are equivalent:
Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.

Definition 1
Then $\struct {S, \vee, \wedge, \preceq}$ is distributive if and only if $\struct {S, \vee, \wedge, \preceq}$ satisfies one of the distributive lattice axioms:




\((1)\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds x \wedge \paren {y \vee z} = \paren {x \wedge y} \vee \paren {x \wedge z} \)   







  


\((1')\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds \paren {x \vee y} \wedge z = \paren {x \wedge z} \vee \paren {y \wedge z} \)   







  


\((2)\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds x \vee \paren {y \wedge z} = \paren {x \vee y} \wedge \paren {x \vee z} \)   







  


\((2')\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds \paren {x \wedge y} \vee z = \paren {x \vee z} \wedge \paren {y \vee z} \)   







  

Definition 2
Then $\struct {S, \vee, \wedge, \preceq}$ is distributive if and only if $\struct {S, \vee, \wedge, \preceq}$ satisfies all of the distributive lattice axioms:




\((1)\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds x \wedge \paren {y \vee z} = \paren {x \wedge y} \vee \paren {x \wedge z} \)   







  


\((1')\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds \paren {x \vee y} \wedge z = \paren {x \wedge z} \vee \paren {y \wedge z} \)   







  


\((2)\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds x \vee \paren {y \wedge z} = \paren {x \vee y} \wedge \paren {x \vee z} \)   







  


\((2')\)  

$:$  





  \(\ds \forall x, y, z \in S:\)

\(\ds \paren {x \wedge y} \vee z = \paren {x \vee z} \wedge \paren {y \vee z} \)   







  



Proof
In what follows it is shown that if one of the axioms distributive lattice axioms holds then they all hold.

1 is equivalent to 1'
By applying Meet is Commutative several times, we have:














\(\ds x \wedge \paren {y \vee z}\)

\(=\)







\(\ds \paren {x \wedge y} \vee \paren {x \wedge z}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {y \vee z} \wedge x\)

\(=\)







\(\ds \paren {y \wedge x} \vee \paren {z \wedge x}\)









which (after renaming variables as appropriate) establishes the equivalence.
$\Box$


2 is equivalent to 2'
By applying Join is Commutative several times, we have:














\(\ds x \vee \paren {y \wedge z}\)

\(=\)







\(\ds \paren {x \vee y} \wedge \paren {x \vee z}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {y \wedge z} \vee x\)

\(=\)







\(\ds \paren {y \vee x} \wedge \paren {z \vee x}\)









which (after renaming variables as appropriate) establishes the equivalence.
$\Box$


1 implies 2
Suppose that $(1)$ holds, and hence $(1')$ as well.














\(\ds \paren {x \vee y} \wedge \paren {x \vee z}\)

\(=\)







\(\ds \paren {\paren {x \vee y} \wedge x} \vee \paren {\paren {x \vee y} \wedge z}\)





by $(1)$














\(\ds \)

\(=\)







\(\ds x \vee \paren {\paren {x \vee y} \wedge z}\)





$\wedge$ absorbs $\vee$














\(\ds \)

\(=\)







\(\ds x \vee \paren {\paren {x \wedge z} \vee \paren {y \wedge z} }\)





by $(1')$














\(\ds \)

\(=\)







\(\ds \paren {x \vee \paren {x \wedge z} } \vee \paren {y \wedge z}\)





$\vee$ is associative














\(\ds \)

\(=\)







\(\ds x \vee \paren {y \wedge z}\)





$\vee$ absorbs $\wedge$



$\Box$


2 implies 1
By inspection, aided by Dual Pairs (Order Theory), we see that $(2)$ is dual to $(1)$.
Thus by Global Duality, $(2)$ implies $(1)$ as soon as $(1)$ implies $(2)$.
That direction was already established above.
$\blacksquare$


Also see
Definition:Distributive Lattice




