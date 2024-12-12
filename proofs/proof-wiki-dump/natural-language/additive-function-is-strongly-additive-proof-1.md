# 

Source: https://proofwiki.org/wiki/Additive_Function_is_Strongly_Additive/Proof_1

Theorem
Let $\SS$ be an algebra of sets.
Let $f: \SS \to \overline \R$ be an additive function on $\SS$.

Then $f$ is also strongly additive.
That is:

$\forall A, B \in \SS: \map f {A \cup B} + \map f {A \cap B} = \map f A + \map f B$


Proof
From Set Difference and Intersection form Partition:

$A$ is the union of the two disjoint sets $A \setminus B$ and $A \cap B$
$B$ is the union of the two disjoint sets $B \setminus A$ and $A \cap B$.

So, by the definition of additive function:

$\map f A = \map f {A \setminus B} + \map f {A \cap B}$
$\map f B = \map f {B \setminus A} + \map f {A \cap B}$

We also have from Set Difference is Disjoint with Reverse that:

$\paren {A \setminus B} \cap \paren {B \setminus A} = \O$

From Sum of Additive Function Values is Well-Defined, it follows that $\map f A + \map f B$ is well-defined.
Hence:














\(\ds \map f A + \map f B\)

\(=\)







\(\ds \map f {A \setminus B} + 2 \map f {A \cap B} + \map f {B \setminus A}\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {A \setminus B} \cup \paren {A \cap B} \cup \paren {B \setminus A} } + \map f {A \cap B}\)





Set Differences and Intersection form Partition of Union














\(\ds \)

\(=\)







\(\ds \map f {A \cup B} + \map f {A \cap B}\)





Definition of Set Union



Hence the result.
$\blacksquare$





