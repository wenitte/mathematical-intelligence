# 

Source: https://proofwiki.org/wiki/Index_Laws/Sum_of_Indices/Field



Theorem
Let $\struct {F, +, \circ}$ be a field with zero $0_F$ and unity $1_F$.
Let $F^* = F \setminus {0_F}$ denote the set of elements of $F$ without the zero $0_F$.

Then:

$(a):\quad \forall a \in \F^* : \forall n, m \in \Z : a^m \circ a^n = a^\paren{m + n}$
$(b):\quad \forall a \in \F : \forall n, m \in \Z_{\ge 0} : a^m \circ a^n = a^\paren{m + n}$


Proof
Statement $(a)$
By Definition of Field:

$\struct{F^*, \circ}$ is an Abelian group
By Definition of Power of Field Element:

For all $a \in F^*$ and $n \in \Z$, $a^n$ is defined as the $n$th power of $a$ with respect to the Abelian group $\struct {F^*, \circ}$
From Sum of Powers of Group Elements:

$\forall a \in \F^* : \forall n, m \in \Z : a^m \circ a^n = a^\paren{m + n}$
$\Box$

Statement $(b)$
Let $m,n \in \Z_{\ge 0}$ be arbitrary elements of $\Z_{\ge 0}$.
For $a \in F^*$, $(b)$ follows from $(a)$.
It remains to show that $(b)$ holds for $0_F$.

Case 1: $m = 0$
Let $m = 0$.
We have:














\(\ds \paren{0_F}^m \circ \paren{0_F}^n\)

\(=\)







\(\ds \paren{0_F}^0 \circ \paren{0_F}^n\)




















\(\ds \)

\(=\)







\(\ds 1_F \circ \paren{0_F}^n\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds \paren{0_F}^n\)





Field Axiom $\text M3$: Identity  for Product














\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{0 + n}\)




















\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{m + n}\)









$\Box$

Case 2: $m \ne 0$
Let $m \ne 0$.
Hence:

$m + n \ne 0$
We have:














\(\ds \paren{0_F}^m \circ \paren{0_F}^n\)

\(=\)







\(\ds 0_F \circ \paren{0_F}^n\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds 0_F\)





Field Product with Zero














\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{m + n}\)





Definition of Power of Field Element



$\Box$
In both cases:

$\paren{0_F}^m \circ \paren{0_F}^n = \paren{0_F}^\paren{m + n}$
Since $m,n$ were arbitrary elements of $\Z_{\ge 0}$:

$\forall n, m \in \Z_{\ge 0} : \paren{0_F}^m \circ \paren{0_F}^n = \paren{0_F}^\paren{m + n}$
$\blacksquare$





