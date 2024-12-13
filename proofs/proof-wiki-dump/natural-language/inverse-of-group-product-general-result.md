# 

Source: https://proofwiki.org/wiki/Inverse_of_Group_Product/General_Result



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $a_1, a_2, \ldots, a_n \in G$, with inverses $a_1^{-1}, a_2^{-1}, \ldots, a_n^{-1}$.

Then:

$\paren {a_1 \circ a_2 \circ \cdots \circ a_n}^{-1} = a_n^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$


Proof 1
We have that a group is a monoid, all of whose elements are invertible.
The result follows from Inverse of Product/Monoid/General Result.
$\blacksquare$


Proof 2
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\paren {a_1 \circ a_2 \circ \cdots \circ a_n}^{-1} = a_n^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$

$\map P 1$ is (trivially) true, as this just says:

$\paren {a_1}^{-1} = a_1^{-1}$


Basis for the Induction
$\map P 2$ is the case:

$\paren {a_1 \circ a_2}^{-1} = a_2^{-1} \circ a_1^{-1}$
which has been proved in Inverse of Group Product.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {a_1 \circ a_2 \circ \cdots \circ a_k}^{-1} = a_k^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$

Then we need to show:

$\paren {a_1 \circ a_2 \circ \cdots \circ a_{k + 1} }^{-1} = a_{k + 1}^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$


Induction Step
This is our induction step:















\(\ds \paren {a_1 \circ a_2 \circ \cdots \circ a_k \circ a_{k + 1} }^{-1}\)

\(=\)







\(\ds \paren {\paren {a_1 \circ a_2 \circ \cdots \circ a_k} \circ a_{k + 1} }^{-1}\)





General Associativity Theorem














\(\ds \)

\(=\)







\(\ds a_{k + 1}^{-1} \circ \paren {a_1 \circ a_2 \circ \cdots \circ a_k}^{-1}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds a_{k + 1}^{-1} \circ \paren {a_k^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds a_{k + 1}^{-1} \circ a_k^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}\)





General Associativity Theorem



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{> 0}: \paren {a_1 \circ a_2 \circ \cdots \circ a_n}^{-1} = a_n^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 2$: The Axioms of Group Theory: $(1.13)$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.6$. Elementary theorems on groups: Theorem $\text{(iv)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 28 \alpha$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 35.7$: Elementary consequences of the group axioms




