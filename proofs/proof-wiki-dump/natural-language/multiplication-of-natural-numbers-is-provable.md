# 

Source: https://proofwiki.org/wiki/Multiplication_of_Natural_Numbers_is_Provable



Theorem
Let $x, y \in \N$ be natural numbers.
Then there exists a formal proof of:

$\sqbrk x \times \sqbrk y = \sqbrk {x \times y}$
in minimal arithmetic, where $\sqbrk a$ is the unary representation of $a$.

Proof
By Unary Representation of Natural Number, let $\sqbrk a$ denote the term $\map s {\dots \map s 0}$, where there are $a$ applications of the successor mapping to the constant $0$.
Proceed by induction on $y$.

Base Case
Let $y = 0$.
Then $\sqbrk y = 0$.
The following is a formal proof:

By the tableau method of natural deduction:


$\sqbrk x \times 0 = 0$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\forall a: a \times 0 = 0$

Axiom $\text M 5$






2




$\sqbrk x \times 0 = 0$

Universal Instantiation






But $x \times 0 = 0$.
Therefore, $\sqbrk {x \times 0} = \sqbrk 0$.
Thus, the proof above is a formal proof of $\sqbrk x \times 0 = \sqbrk {x \times 0}$.
$\Box$

Induction Step
Let there exist a formal proof of $\sqbrk x \times \sqbrk y = \sqbrk {x \times y}$.
Then the following is a formal proof:

By the tableau method of natural deduction:


$\sqbrk x \times \map s {\sqbrk y} = \sqbrk {\paren {x \times y} + x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\sqbrk x \times \sqbrk y = \sqbrk {x \times y}$

Theorem Introduction

(None)

Induction hypothesis


2




$\forall a, b: a = b \implies a + \sqbrk x = b + \sqbrk x$

Theorem Introduction

(None)

Substitution Property of Equality


3




$\sqbrk x \times \sqbrk y = \sqbrk {x \times y} \implies \paren {\sqbrk x \times \sqbrk y} + \sqbrk x = \sqbrk {x \times y} + \sqbrk x$

Universal Instantiation

2




4




$\paren {\sqbrk x \times \sqbrk y} + \sqbrk x = \sqbrk {x \times y} + \sqbrk x$

Modus Ponendo Ponens

3, 2




5




$\forall a, b: a \times \map s b = \paren {a \times b} + a$

Axiom $\text M 6$






6




$\sqbrk x \times \map s {\sqbrk y} = \paren {\sqbrk x \times \sqbrk y} + \sqbrk x$

Universal Instantiation

5




7




$\sqbrk x \times \map s {\sqbrk y} = \paren {\sqbrk x \times \sqbrk y} + \sqbrk x \land \paren {\sqbrk x \times \sqbrk y} + \sqbrk x = \sqbrk {x \times y} + \sqbrk x$

Rule of Conjunction

6, 4




8




$\forall a,b,c: \paren {a = b} \land \paren {b = c} \implies a = c$

Theorem Introduction

(None)

Equality is Transitive


9




$\sqbrk x \times \map s {\sqbrk y} = \paren {\sqbrk x \times \sqbrk y} + \sqbrk x \land \paren {\sqbrk x \times \sqbrk y} + \sqbrk x = \sqbrk {x \times y} + \sqbrk x \implies \sqbrk x \times \map s {\sqbrk y} = \sqbrk {x \times y} + \sqbrk x$

Universal Instantiation

8




10




$\sqbrk x \times \map s {\sqbrk y} = \sqbrk {x \times y} + \sqbrk x$

Modus Ponendo Ponens

9, 7




11




$\sqbrk {x \times y} + \sqbrk x = \sqbrk {\paren {x \times y} + x}$

Theorem Introduction

(None)

Addition of Natural Numbers is Provable


12




$\sqbrk x \times \map s {\sqbrk y} = \sqbrk {x \times y} + \sqbrk x \land \sqbrk {x \times y} + \sqbrk x = \sqbrk {\paren {x \times y} + x}$

Rule of Conjunction

10, 11




13




$\sqbrk x \times \map s {\sqbrk y} = \sqbrk {x \times y} + \sqbrk x \land \sqbrk {x \times y} + \sqbrk x = \sqbrk {\paren {x \times y} + x} \implies \sqbrk x \times \map s {\sqbrk y} = \sqbrk {\paren {x \times y} + x}$

Universal Instantiation

8




14




$\sqbrk x \times \map s {\sqbrk y} = \sqbrk {\paren {x \times y} + x}$

Modus Ponendo Ponens

13, 12




Therefore, there exists a formal proof of $\sqbrk x \times \map s {\sqbrk y} = \sqbrk {\paren {x \times y} + x}$.
But $\sqbrk y$ consists of $y$ applications of the successor mapping to the constant $0$.
Thus, $\map s {\sqbrk y}$ consists of $y + 1 = \map s y$ mappings of $s$ to $0$.
As that is the unary representation of $\map s y$ it follows that:

$\map s {\sqbrk y} = \sqbrk {\map s y}$
By definition of multiplication:

$x \times \map s y = \paren {x \times y} + x$
Therefore, the above proof also proves:

$\sqbrk x \times \sqbrk {\map s y} = \sqbrk {x \times \map s y}$
as the WFFs are syntactically identical.
$\Box$
Thus, by the Principle of Mathematical Induction, there exists such a formal proof for every $y \in \N$.
As $x$ was arbitrary, there exists such a formal proof for every $x, y \in \N$.
$\blacksquare$





