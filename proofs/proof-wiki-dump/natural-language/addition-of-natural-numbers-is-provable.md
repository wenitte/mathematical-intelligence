# 

Source: https://proofwiki.org/wiki/Addition_of_Natural_Numbers_is_Provable



Theorem
Let $x, y \in \N$ be natural numbers.
Then there exists formal proof of:

$\sqbrk x + \sqbrk y = \sqbrk {x + y}$
in minimal arithmetic, where $\sqbrk a$ is the unary representation of $a$.

General Form
Let $y \in \N$ be a natural number.
Let $s^a$ denote the application of the successor mapping $a$ times.
Let $\sqbrk a$ denote $\map {s^a} 0$.
Then there exists a formal proof of:

$\forall x: x + \sqbrk y = \map {s^y} x$
in minimal arithmetic.


Proof
By Unary Representation of Natural Number, let $\sqbrk a$ denote the term $\map s {\dots \map s 0}$, where there are $a$ applications of the successor mapping to the constant $0$.
Proceed by induction on $y$.

Base Case
Let $y = 0$.
Then $\sqbrk y = 0$.
The following is a formal proof:


This article, or a section of it, needs explaining.In particular: Is it really necessary to use the tableau proof structure for this sort of thing? It was originally intended for proving expressions in propositional logic. Can this be replaced by something more conventional? As it is, the detail of the expressions themselves are being lost in the noise. Suggest we use the {{eqn}} template instead. Here and below.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

By the tableau method of natural deduction:


$\sqbrk x + 0 = \sqbrk x$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\forall a: a + 0 = a$

Axiom $\text M 3$






2




$\sqbrk x + 0 = \sqbrk x$

Universal Instantiation

1




But $x + 0 = x$.
Therefore, $\sqbrk {x + 0} = \sqbrk x$.
Thus, the proof above is a formal proof of $\sqbrk x + 0 = \sqbrk {x + 0}$.
$\Box$

Induction Step
Let there exist a formal proof of $\sqbrk x + \sqbrk y = \sqbrk {x + y}$.
Then, the following is a formal proof:

By the tableau method of natural deduction:


$\sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk {x + y} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\sqbrk x + \sqbrk y = \sqbrk {x + y}$

Theorem Introduction

(None)

Induction hypothesis


2




$\forall a, b: a = b \implies \map s a = \map s b$

Theorem Introduction

(None)

Substitution Property of Equality


3




$\sqbrk x + \sqbrk y = \sqbrk {x + y} \implies \map s {\sqbrk x + \sqbrk y} = \map s {\sqbrk {x + y} }$

Universal Instantiation

2




4




$\map s {\sqbrk x + \sqbrk y} = \map s {\sqbrk {x + y} }$

Modus Ponendo Ponens

3, 1




5




$\forall a, b: a + \map s b = \map s {a + b}$

Axiom $\text M 4$






6




$\sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk x + \sqbrk y}$

Universal Instantiation

7




7




$\paren {\sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk x + \sqbrk y} } \land \paren {\map s {\sqbrk x + \sqbrk y} = \map s {\sqbrk {x + y} } }$

Rule of Conjunction

6, 4




8




$\forall a,b,c: \paren {a = b} \land \paren {b = c} \implies a = c$

Theorem Introduction

(None)

Equality is Transitive


9




$\paren {\sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk x + \sqbrk y} } \land \paren {\map s {\sqbrk x + \sqbrk y} = \map s {\sqbrk {x + y} } } \implies \sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk {x + y} }$

Universal Instantiation

8




10




$\sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk {x + y} }$

Modus Ponendo Ponens

9, 7




Therefore, there exists a formal proof of $\sqbrk x + \map s {\sqbrk y} = \map s {\sqbrk {x + y} }$.
But as:

$\sqbrk a$
consists of $a$ applications of the successor mapping to the constant $0$, it follows that:

$\map s {\sqbrk y} = \sqbrk {\map s y}$
consists of $a + 1 = \map s a$ applications of $s$ to $0$.
But that is the unary representation of $\map s a$.
Therefore:

$\map s {\sqbrk y} = \sqbrk {\map s y}$
and

$\map s {\sqbrk {x + y} } = \sqbrk {\map s {x + y} }$
By the definition of addition, $x + \map s y = \map s {x + y}$.
Thus:

$\sqbrk {\map s {x + y} } = \sqbrk {x + \map s y}$
It follows that the proof above is also a proof of:

$\sqbrk x + \sqbrk {\map s y} = \sqbrk {x + \map s y}$
$\Box$

Thus, by the Principle of Mathematical Induction, there exists such a formal proof for every $y \in \N$.
As $x$ was arbitrary, there exists such a formal proof for every $x, y \in \N$.
$\blacksquare$





