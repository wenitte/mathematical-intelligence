# 

Source: https://proofwiki.org/wiki/Nilpotent_Ring_Element_plus_Unity_is_Unit

Theorem
Let $A$ be a ring with unity.
Let $1 \in A$ be its unity.
Let $a \in A$ be nilpotent.

Then $1 + a$ is a unit of $A$.


Proof
Because $a$ is nilpotent, there exists a natural number $n > 0$ with $a^n = 0$.
By Sum of Geometric Sequence in Ring:

$\paren {1 + a} \cdot \ds \sum_{k \mathop = 0}^{n - 1} \paren {-a}^k = 1 + \paren {-a}^n$
$\paren {\ds \sum_{k \mathop = 0}^{n - 1} \paren {-a}^k} \cdot \paren {1 + a} = 1 + \paren {-a}^n$
where $\sum$ denotes summation.
By Negative of Nilpotent Ring Element:

$\paren {-a}^n = 0$
Thus $1 + a$ is a unit.
$\blacksquare$


Also see
Nilpotent Ring Element plus Unit is Unit
Topologically Nilpotent Element plus Unity is Invertible




