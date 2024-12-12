# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lucas_Numbers



Theorem
The following definitions of the concept of Lucas Number are equivalent:

Definition 1
The Lucas numbers are a sequence which is formally defined recursively as:

$L_n = \begin{cases}
2 & : n = 0 \\
1 & : n = 1 \\
L_{n - 1} + L_{n - 2} & : \text{otherwise} \end{cases}$
Definition 2
The Lucas numbers are a sequence defined as:

$L_n = F_{n - 1} + F_{n + 1}$
where $F_k$ is the $k$th Fibonacci number.


Proof
Definition 1 implies Definition 2
Let $\sequence {L_n}$ be the sequence defined as in definition 1.
It follows from Lucas Number as Sum of Fibonacci Numbers that $\sequence {L_n}$ is the sequence defined as in definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\sequence {L_n}$ be the sequence defined as in definition 2.
It follows from Lucas Number as Element of Recursive Sequence that $\sequence {L_n}$ is the sequence defined as in definition 1.
$\blacksquare$





