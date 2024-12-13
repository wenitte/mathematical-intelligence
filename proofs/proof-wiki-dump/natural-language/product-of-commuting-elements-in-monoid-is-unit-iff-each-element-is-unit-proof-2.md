# 

Source: https://proofwiki.org/wiki/Product_of_Commuting_Elements_in_Monoid_is_Unit_iff_Each_Element_is_Unit/Proof_2

Theorem
Let $A$ be a monoid.
Let $\map G A$ be the group of units of $A$.
Let $n \ge 2$ be an integer. 
Let $x_1, \ldots, x_n$ be commuting elements in $A$.
Let:

$\ds x = \prod_{i \mathop = 1}^n x_i$

Then:

$x \in \map G A$ if and only if $x_i \in \map G A$ for each $1 \le i \le n$.


Proof
If $x_1, \ldots, x_n \in \map G A$, then:

$\ds \prod_{i \mathop = 1}^k x_i \in \map G A$
by Inverse of Product: Monoid: General Result.

Conversely, suppose:

$\ds \prod_{i \mathop = 1}^k x_i \in \map G A$
That is, there is a $z \in A$ such that:

$(1):\quad \ds z \paren {\prod_{i \mathop = 1}^k x_i} = \paren {\prod_{i \mathop = 1}^k x_i} z = e$
We shall show:

$\forall i \in \set {1, \ldots, n} : x_i \in \map G A$
It suffices to show this for $i=1$, since $x_1, \ldots, x_n$ are commuting.
Define:

$\ds z_1 := \paren {\prod_{i \mathop = 2}^k x_i} z$
Then:

$x_1 z_1 = z_1 x_1 = e$
so that $x_1 \in \map G A$.
Indeed:














\(\ds x_1 z_1\)

\(=\)







\(\ds x_1 \paren {\prod_{i \mathop = 2}^k x_i} z\)





Definition of $z_1$














\(\ds \)

\(=\)







\(\ds \paren {\prod_{i \mathop = 1}^k x_i} z\)




















\(\ds \)

\(=\)







\(\ds e\)









Moreover:














\(\ds z_1 x_1\)

\(=\)







\(\ds \paren {\prod_{i \mathop = 2}^k x_i} z x_1\)





Definition of $z_1$














\(\ds \)

\(=\)







\(\ds e \paren {\prod_{i \mathop = 2}^k x_i} z x_1\)




















\(\ds \)

\(=\)







\(\ds z \paren {\prod_{i \mathop = 1}^k x_i} \paren {\prod_{i \mathop = 2}^k x_i} z x_1\)





by $(1)$














\(\ds \)

\(=\)







\(\ds z \paren {\prod_{i \mathop = 2}^k x_i} \paren {\prod_{i \mathop = 1}^k x_i} z x_1\)





$x_1$ commutes with $x_2, \ldots, x_n$














\(\ds \)

\(=\)







\(\ds z \paren {\prod_{i \mathop = 2}^k x_i} e x_1\)





by $(1)$














\(\ds \)

\(=\)







\(\ds z \paren {\prod_{i \mathop = 2}^k x_i} x_1\)




















\(\ds \)

\(=\)







\(\ds z \paren {\prod_{i \mathop = 1}^k x_i}\)





$x_1$ commutes with $x_2, \ldots, x_n$














\(\ds \)

\(=\)







\(\ds e\)





by $(1)$



$\blacksquare$





