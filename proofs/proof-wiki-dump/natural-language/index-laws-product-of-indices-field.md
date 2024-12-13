# 

Source: https://proofwiki.org/wiki/Index_Laws/Product_of_Indices/Field



Theorem
Let $\struct {F, +, \circ}$ be a field with zero $0_F$ and unity $1_F$.
Let $F^* = F \setminus {0_F}$ denote the set of elements of $F$ without the zero $0_F$.

Then:

$(a):\quad \forall a \in \F^* : \forall n, m \in \Z : \paren{a^m}^n = a^\paren{mn}$
$(b):\quad \forall a \in \F : \forall n, m \in \Z_{\ge 0} : \paren{a^m}^n = a^\paren{mn}$


Proof
Statement $(a)$
By Definition of Field:

$\struct{F^*, \circ}$ is an Abelian group
By Definition of Power of Field Element:

For all $a \in F^*$ and $n \in \Z$, $a^n$ is defined as the $n$th power of $a$ with respect to the Abelian group $\struct {F^*, \circ}$
From Product of Powers of Group Elements:

$\forall a \in \F^* : \forall n, m \in \Z : \paren{a^m}^n = a^\paren{mn}$
$\Box$

Statement $(b)$
Let $m,n \in \Z_{\ge 0}$ be arbitrary elements of $\Z_{\ge 0}$.
For $a \in F^*$, $(b)$ follows from $(a)$.
It remains to show that $(b)$ holds for $0_F$.

Case 1: $m = 0$
Let $m = 0$.
We have:














\(\ds \paren{\paren{0_F}^m}^n\)

\(=\)







\(\ds \paren{\paren{0_F}^0}^n\)




















\(\ds \)

\(=\)







\(\ds \paren{1_F}^n\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds 1_F\)




















\(\ds \)

\(=\)







\(\ds \paren{0_F}^0\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{0 \cdot n}\)




















\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{m \cdot n}\)









$\Box$

Case 2: $m \ne 0, n = 0$
Let $m \ne 0$ and $n = 0$.
Hence:

$m n = 0$
We have:














\(\ds \paren{\paren{0_F}^m}^n\)

\(=\)







\(\ds \paren{0_F}^0\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds 1_F\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds \paren{0_F}^0\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{m \cdot n}\)









$\Box$

Case 3: $m \ne 0, n = 0$
Let $m \ne 0$ and $n \ne 0$.
Hence:

$m n \ne 0$
We have:














\(\ds \paren{\paren{0_F}^m}^n\)

\(=\)







\(\ds \paren{0_F}^n\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds 0_F\)





Definition of Power of Field Element














\(\ds \)

\(=\)







\(\ds \paren{0_F}^\paren{mn}\)





Definition of Power of Field Element



$\Box$
In all cases:

$\paren{\paren{0_F}^m}^n = \paren{0_F}^\paren{mn}$
Since $m,n$ were arbitrary elements of $\Z_{\ge 0}$:

$\forall n, m \in \Z_{\ge 0} : \paren{\paren{0_F}^m}^n = \paren{0_F}^\paren{mn}$
$\blacksquare$





