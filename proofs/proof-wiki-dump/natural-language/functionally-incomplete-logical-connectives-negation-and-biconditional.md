# 

Source: https://proofwiki.org/wiki/Functionally_Incomplete_Logical_Connectives/Negation_and_Biconditional

Theorem
The set of logical connectives:

$\set {\neg, \iff}$: Not and Iff
is not functionally complete.


Proof
Let $\mathbf A$ be a WFF comprising only the logical connectives $\neg$ and $\iff$.
The central claim to this proof is that:

The number of models for $\mathbf A$ is even.
In this claim, we disregard the obvious exceptions of the form $\neg \cdots \neg p$.

Firstly, note that including any propositional symbols not occurring in $\mathbf A$ in the truth table for $\mathbf A$ simply doubles the number of boolean interpretations modelling $\mathbf A$.
Next, it is obvious that if the number of models of $\mathbf A$ is even, then this also holds for $\neg \mathbf A$.
For, by Count of Truth Functions, the total number of boolean interpretations is even.
Lastly, to consider $\mathbf A = \mathbf A_1 \iff \mathbf A_2$.
Suppose that the claim were verified for $\mathbf A_1$ and $\mathbf A_2$.
Then we have the following identities:

$\set {v \mid \map v {\mathbf A_1} = T} = \set {v \mid \map v {\mathbf A_1} = T, \map v {\mathbf A_2} = F} \cup \set {v \mid \map v {\mathbf A_1} = T, \map v {\mathbf A_2} = T}$
$\set {v \mid \map v {\mathbf A_1} = F} = \set {v \mid \map v {\mathbf A_1} = F, \map v {\mathbf A_2} = F} \cup \set {v \mid \map v {\mathbf A_1} = F, \map v {\mathbf A_2} = T}$
$\set {v \mid \map v {\mathbf A_2} = T} = \set {v \mid \map v {\mathbf A_1} = T, \map v {\mathbf A_2} = T} \cup \set {v \mid \map v {\mathbf A_1} = F, \map v {\mathbf A_2} = T}$
$\set {v \mid \map v {\mathbf A_2} = F} = \set {v \mid \map v {\mathbf A_1} = T, \map v {\mathbf A_2} = F} \cup \set {v \mid \map v {\mathbf A_1} = F, \map v {\mathbf A_2} = F}$
The sets on the right hand side are disjoint, while the sets on the left hand side have an even number of elements.
Therefore, the parity of the cardinalities of the sets on the right hand side must be equal.

Then combining the first and fourth equations, the sets:

$\set {v \mid \map v {\mathbf A_1} = T, \map v {\mathbf A_2} = T}$
$\set {v \mid \map v {\mathbf A_1} = F, \map v {\mathbf A_2} = F}$
have equal parity.
Together, these two constitute the set of models for $\mathbf A$, as can be seen from the boolean interpretation of $\iff$.
Therefore, the number of models for $\mathbf A$ is even.
This completes the proof of the claim.

On the other hand, the truth table of $p \implies q$ has three entries $F$, and one $T$.
Therefore, $p \implies q$ cannot be expressed in terms of $\neg$ and $\iff$.

Hence, $\set {\neg, \iff}$ is not functionally complete.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.12$




