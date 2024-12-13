# 

Source: https://proofwiki.org/wiki/Preordering/Examples/Finite_Set_Difference_on_Natural_Numbers

Examples of Preorderings
Consider the relation $\RR$ on the powerset of the natural numbers:

$\forall a, b \in \powerset \N: a \mathrel \RR b \iff a \setminus b \text { is finite}$
where $\setminus$ denotes set difference.

Then $\RR$ is a preordering on $\powerset \N$, but not an ordering on $\powerset \N$.


Proof
We need to show that $\RR$ is both reflexive and transitive, but specifically not antisymmetric.

We have from Set Difference with Self is Empty Set:

$\forall a \in \powerset \N: a \setminus a = \O$
and so as $\O$ is a finite set:

$\forall a \in \powerset \N: a \mathrel \RR a$
That is, $\RR$ is reflexive.
$\Box$

Let $a, b, c \in \powerset \N$ such that $a \setminus b$ is finite and $b \setminus c$ is finite.
In order to show that $\RR$ is transitive we need to show that $a \setminus c$ is also finite.

Aiming for a contradiction, suppose $a \setminus c$ is not finite.
Then $a$ is not finite.
For $x \in \powerset \N$, let $x'$ denote the complement of $x$ in $\N$.
We have that:














\(\ds a \setminus b\)

\(=\)







\(\ds a \cap b'\)





Definition of Set Difference














\(\ds b \setminus c\)

\(=\)







\(\ds b \cap c'\)





Definition of Set Difference














\(\ds a \setminus c\)

\(=\)







\(\ds a \cap c'\)





Definition of Set Difference



We have from De Morgan's Laws: Set Difference with Intersection that:

$\paren {a \setminus b} \cup \paren {a \setminus c} = a \setminus \paren {b \cap c}$
and so:

$\paren {a \setminus b} \cup \paren {a \setminus c} = \paren {a \setminus b} \cup \paren {a \cap b \cap c'}$

Hence if $a \setminus c$ is not finite, then $a \cap b \cap c'$ is not finite.
But then $b \cap c'$ is not finite.
That is, $b \setminus c$ is not finite.
This contradicts our supposition that $b \setminus c$ is finite.
Hence by Proof by Contradiction it follows that $a \setminus c$ is finite.
That is, $a \mathrel \RR c$ is transitive
$\Box$

Let $a = \set {1, 2, 3}$ and $b = \set {2, 3, 4}$.
Then:

$a \setminus b = \set 1$
$b \setminus a = \set 4$
Both $a \setminus b$ and $b \setminus a$ are finite, and so:

$a \mathrel \RR b$ and $b \mathrel \RR a$
but it is not the case that $a = b$.
That is, $\RR$ is not antisymmetric.
$\Box$

We have shown that $\RR$ is both reflexive and transitive, but specifically not antisymmetric.
Hence $\RR$ is a preordering on $\powerset \N$ which is not an ordering on $\powerset \N$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $38$




