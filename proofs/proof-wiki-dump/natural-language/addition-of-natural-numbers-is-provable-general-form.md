# 

Source: https://proofwiki.org/wiki/Addition_of_Natural_Numbers_is_Provable/General_Form



Theorem
Let $y \in \N$ be a natural number.
Let $s^a$ denote the application of the successor mapping $a$ times.
Let $\sqbrk a$ denote $\map {s^a} 0$.
Then there exists a formal proof of:

$\forall x: x + \sqbrk y = \map {s^y} x$
in minimal arithmetic.

Proof
Proceed by induction on $y$.

Basis for the Induction
Let $y = 0$.
Then $\sqbrk y = 0$ by definition.
Then the theorem to prove is:

$\forall x: x + 0 = x$
But that is Axiom $\text M 3$ of minimal arithmetic.
$\Box$

Induction Hypothesis
Fix some $y \in \N$.
Suppose that there is a formal proof of:

$\forall x: x + \sqbrk y = \map {s^y} x$
Induction Step
The following is a formal proof:

By the tableau method of natural deduction:


$\forall x: x + \map s {\sqbrk y} = \map s {\map {s^y} x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\forall x: x + \sqbrk y = \map {s^y} x$

Theorem Introduction

(None)

Induction Hypothesis


2




$x_0 + \sqbrk y = \map {s^y} {x_0}$

Universal Instantiation

1




3




$\forall a,b: a + \map s b = \map s {a + b}$

Axiom $\text M 4$






4




$x_0 + \map s {\sqbrk y} = \map s {x_0 + \sqbrk y}$

Universal Instantiation

3




5




$\forall a, b: a = b \implies \map s a = \map s b$

Theorem Introduction

(None)

Substitution Property of Equality


6




$x_0 + \sqbrk y = \map {s^y} {x_0} \implies \map s {x_0 + \sqbrk y} = \map s {\map {s^y} {x_0} }$

Universal Instantiation

5




7




$\map s {x_0 + \sqbrk y} = \map s {\map {s^y} {x_0} }$

Modus Ponendo Ponens

6, 2




8




$x_0 + \map s {\sqbrk y} = \map s {\map {s^y} {x_0} }$

Equality is Transitive

4, 7




9




$\forall x: x_0 + \map s {\sqbrk y} = \map s {\map {s^y} x}$

Universal Generalisation

8




By expanding the definitions of $\sqbrk y$ and $\map {s^y} x$, the proven result is syntactically identical to:

$\forall x: x + \sqbrk {\map s y} = \map {s^{\map s y} } x$
which was the theorem to be proven.
$\Box$

Thus, by the Principle of Mathematical Induction, there is such a formal proof for every $y \in \N$.
$\blacksquare$





