# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Pairing



Theorem
The following formulations of the Axiom of Pairing in the context of axiomatic set theory are equivalent:

Strong Form
For any two sets, there exists a set to which only those two sets are elements:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \iff z \in c}$
Weak Form
For any two sets, there exists a set to which those two sets are elements:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \implies z \in c}$


Proof
Strong Form implies Weak Form
Let the strong form of the Axiom of Pairing be assumed:
For any two sets, there exists a set to which only those two sets are elements:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \iff z \in c}$

By definition of the biconditional, this can be expressed as:

$\forall a: \forall b: \exists c: \forall z: \paren {\paren {z = a \lor z = b \implies z \in c} \land \paren {z \in c \implies z = a \lor z = b} }$
from which, by the Rule of Simplification:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \implies z \in c}$
Thus the weak form of the Axiom of Pairing is seen to hold.
$\Box$


Weak Form implies Strong Form
Let the weak form of the Axiom of Pairing be assumed:
For any two sets, there exists a set to which those two sets are elements:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \implies z \in c}$

By the Axiom of Specification, let us create the set $c'$ as:

$c' = \set {z: \paren {z \in c} \land \paren {z = a \lor z = b} }$
By the Axiom of Extensionality, it follows that:

$c' = \set {a, b}$

Thus we have:

$\forall a: \forall b: \exists c': \forall z: \paren {z = a \lor z = b \implies z \in c'}$
and:

$\forall a: \forall b: \exists c': \forall z: \paren {z \in c' \implies z = a \lor z = b}$
That is:

$\forall a: \forall b: \exists c': \forall z: \paren {z = a \lor z = b \iff z \in c'}$

Thus the strong form of the Axiom of Pairing is seen to hold.
$\blacksquare$





